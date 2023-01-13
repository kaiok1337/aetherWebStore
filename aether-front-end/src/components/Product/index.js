import axios from 'axios'
import React, { useState, useEffect } from 'react';

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
        <section>
            <h1>Products:</h1>
            <div>
                { info.map((product, i) =>
                <div>
                    <h2>{product.name}</h2>
                    <img src={product.imgUrl}/>
                </div>
                )}
            </div>
        </section>
    )
}

export default Product;