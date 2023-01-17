import { useState } from 'react';
import axios from 'axios'
import { useEffect} from 'react';


export default function LogIn ({setIsLoggedIn , isLoggedIn}) {
    // state declarations
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    })

    // update the input value as a user types
    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    async function submitHandler(event) {
        event.preventDefault()
        const { data } = await axios.post('http://localhost:8000/auth/login', formState)
        localStorage.token = data.token
    }

    // redirect to home page if not logged in
    return (
        <div className="container">
            <h2>Login</h2>

            <form onSubmit={submitHandler}>
                <div className="input-text">
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        onChange={handleChange}
                        value={formState.username} />
                </div>

                <div className="input-text">
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={formState.password} />
                </div>

                <button type='submit'className="button" >Login</button>
            </form>
        </div>
    )
}