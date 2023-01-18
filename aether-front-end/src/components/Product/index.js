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

    async function addToCart(product){
        const productToAdd = {
            name: product.name,
            price: product.price,
            quantity: 1,
            productId: product._id
        }
        console.log(productToAdd)
        let bearerToken = localStorage.getItem('token')
        const config = {
          headers:{
            Authorization: `Bearer ${bearerToken}`
          }
        };
        
        await axios.post("http://localhost:8000/cart", productToAdd, config)
        
      }
    

    useEffect(() => {
        getProductInfo()
      }, [])

    console.log(info)
    return(
        <section className="card-container">
            { info.map((product, i) =>
            <div key={i} className="product-card">
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <img src={product.imgUrl}/>
                <br/>
                <button onClick={() => {addToCart(product)}}><h2>add to cart</h2></button>
            </div>
            )}
        </section>
    )
}



export default Product;