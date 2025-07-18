import React from 'react'
import { useContext } from 'react'
import { cartContent } from '../App'

const Product = ({product}) => {
  const {cart,setcart} = useContext(cartContent)
  const addcart = () =>{
   setcart([...cart,product])
  }
  const removecart = () =>{
   setcart(cart.filter((c) => c.id!==product.id))
  }

  return (
    <div className='prodcon'>
        <div>
            <img loading="lazy" alt='images' className='pro-pic' src={product.image} />
        </div>
       <h3>{product.name}</h3>
       <p>Price: <b>{`₹` + product.amount}</b></p>
       {cart.includes(product) ? <button className='removebtn' onClick={removecart}>Remove to Cart</button>
       :<button className='addbtn' onClick={addcart}>Add to Cart</button>}
    </div>
  )
}

export default Product
