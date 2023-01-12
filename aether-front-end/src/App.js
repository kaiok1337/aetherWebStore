import axios from 'axios'
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [info, setInfo] = useState([])

  async function getSomeInfo() {
    const infoData = await axios.get("http://localhost:8000/products")
    console.log(infoData.data)
    setInfo(infoData.data)
  }

  useEffect(() => {
    getSomeInfo()
  }, [])

  return (
    <div className="App">
      <h1>DB: {info}</h1>
    </div>
  );
}

export default App;
