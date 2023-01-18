import './nav.css'
import LogIn from '../LogIn'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Nav({setUser, isLoggedIn, setIsLoggedIn, cartItems}) {
    const [rerender, setRerender] = useState(false)

    function logout() {
        localStorage.removeItem('token')
        setUser({})
        setIsLoggedIn(false)
    }

    return(
        <main>
            <img className="logo" src='/images/logo.png'></img>
            <nav>
                <Link to="/" ><h1>HOME</h1></Link>
                { !isLoggedIn ?
                <div>
                    <Link to="/signup"><h1>Sign Up</h1></Link>
                    <LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </div>
                :
                <div>
                    <Link to="/cart">{cartItems.length}CART</Link>
                    <button className="logout" onClick={() => logout()}>LOG OUT</button>
                </div>
                }        
            </nav>
            
        </main>
        
    )
}

export default Nav