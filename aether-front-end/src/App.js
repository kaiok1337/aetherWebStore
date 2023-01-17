import axios from 'axios'
import './App.css';
import React, { useState, useEffect } from 'react';
import Product from './components/Product'
import Nav from './components/Nav'
import Spotify from 'react-spotify-embed'
import LogIn from './components/LogIn';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  async function getUser(){
    const config = {
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    };
    const userData = await axios.post("http://localhost:8000/auth/login", config)
    setUser(userData.data)
  }


  useEffect(() => {
    if (localStorage.token) {
        getUser()
        console.log('getUser has been run')
    }
  }, [])

  return (
    <div className="App">
      <div>
        { isLoggedIn ?
        <h1>{user.username} = Logged In!</h1>
      : <h1>not logged</h1>}
      </div>
      <Nav/>
      <LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Product/>
      <Spotify width="50%" height="500px" link="https://open.spotify.com/artist/7Jtn7Qm47bezv1myVrZIZo?si=DOnmq_uIQ2CrgXuahmPncg" />
    </div>
  );
}

export default App;
