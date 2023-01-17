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

    async function deleteProduct(id) {
        await axios.delete(`http://localhost:8000/products/${id}`)
    }

    useEffect(() => {
        getProductInfo()
      }, [])

    return(
        <section className="card-container">
            { info.map((product, i) =>
            <div key={i} className="product-card">
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <img src={product.imgUrl}/>
                <br/>
                <button onClick={() => deleteProduct(product._id)}><h2>delete</h2></button>
            </div>
            )}
        </section>
    )
}



export default Product;