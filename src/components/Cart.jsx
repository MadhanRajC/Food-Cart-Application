import React, { useEffect, useState } from 'react'
import "./Header.css"
import { useContext } from 'react'
import { cartContent } from '../App'

const Cart = ({product}) => {
  const {cart,setcart} = useContext(cartContent)
  const [total,settotal] = useState(0)
  
  useEffect(() =>{
     settotal(cart.reduce((acc,val) => acc+parseInt(val.amount),0))
  },[cart])

  const removecart = (id) =>{
    setcart(cart.filter((c) => c.id!==id))
   }
  return (
    <>
    <h1 style={{textAlign:"center"}}>Cart products</h1>
    <div className='cart'>
      {cart.map((product) => (
        <div  className='cart-container' key={product.id}>
        <div className="cartimg">
          <img className='pro-pic' src={product.image} alt="text" />
        </div>
        <div className="cart-product">
          <h3>{product.name}</h3>
          <p>Price: <b>{`₹` + product.amount}</b></p>
          <button className='removebtn' onClick={() => removecart(product.id)}>Remove Item</button>
        </div>
      </div>
      ))}
    </div>
    <h2 style={{textAlign:"center"}}>Total Amount RS:{total}</h2>
    </>
    
  )
}

export default Cart
