import axios from 'axios'
import './App.css';
import React, { useState, useEffect } from 'react';
import Product from './components/Product'
import Nav from './components/Nav'
import Spotify from 'react-spotify-embed'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Product/>
      <Spotify width="50%" height="500px" link="https://open.spotify.com/artist/7Jtn7Qm47bezv1myVrZIZo?si=DOnmq_uIQ2CrgXuahmPncg" />
    </div>
  );
}

export default App;
