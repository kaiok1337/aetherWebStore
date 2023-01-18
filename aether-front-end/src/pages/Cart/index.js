import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './cart.css'

function Cart({user, cartItems, setCartItems}) {
    const [total, setTotal] = useState('')
    
    const navigate = useNavigate()

    async function getCart(){
        let bearerToken = localStorage.getItem('token')
        const config = {
          headers:{
            Authorization: `Bearer ${bearerToken}`
          }
        };
        const cartData = await axios.get(`http://localhost:8000/cart/${user.userId}`, config)
        await setCartItems(cartData.data.items)
        setTotal(cartData.data.totalPrice)
      }

      async function deleteCart(){
        let bearerToken = localStorage.getItem('token')
        const config = {
          headers:{
            Authorization: `Bearer ${bearerToken}`
          }
        };
        await axios.delete(`http://localhost:8000/cart/${user.userId}`, config)
        setCartItems([])
        navigate('/')
      }
    
      useEffect(() => {
        getCart()
        
      }, [])

      console.log(cartItems)
    return(
        <main className='cart'>
            <h1>CART</h1>
            { cartItems.map((product, i) =>
            
            <h1 key={i}>{product.name} x {product.quantity}</h1>
            )}
            <h1>Total: {total}</h1>
            <button onClick={() => {deleteCart()}}>CHECKOUT</button>
        </main>
        
    )
}

export default Cart;