import axios from 'axios'
import React, { useState, useEffect } from 'react';
import './product.css'

function Product() {
    const [info, setInfo] = useState([])

    async function getProductInfo() {
      const infoData = await axios.get("http://localhost:8000/products")
      console.log(infoData.data)
      setInfo(infoData.data)
    }
    useEffect(() => {
        getProductInfo()
      }, [])
    return(
        <section className="card-container">
            { info.map((product, i) =>
            <div className="product-card">
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <img src={product.imgUrl}/>
            </div>
            )}
        </section>
    )
}

export default Product;