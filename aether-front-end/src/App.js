import axios from 'axios'
import './App.css';
import React, { useState, useEffect } from 'react';
import Product from './components/Product'

function App() {

  return (
    <div className="App">
      <Product/>
    </div>
  );
}

export default App;
