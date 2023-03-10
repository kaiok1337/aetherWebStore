import axios from 'axios'
import { useState, useEffect} from 'react';
import './login.css'
import Modal from 'react-modal';


export default function LogIn ({setIsLoggedIn , isLoggedIn}) {
    // state declarations
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    })
    const [modalIsOpen, setIsOpen] = useState(false)

    // update the input value as a user types
    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    async function submitHandler(event) {
        event.preventDefault()
        const { data } = await axios.post('http://localhost:8000/auth/login', formState)
        localStorage.token = data.token
        setIsLoggedIn(true)
    }

    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    

    // redirect to home page if not logged in
    return (
        <div className="container">
            <h1 className="nav-btn" onClick={openModal}>L O G I N</h1>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Login Component"
            >
            <button onClick={closeModal}>x</button>
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
            </Modal>
            
        </div>
    )
}