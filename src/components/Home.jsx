import data from "../Product.json"
import { useState } from 'react';
import Product from "./Product";

const Home = ({cart,setcart}) => {
    const [products] = useState(data);
  return (
    <div className="product">
        {products.map((product)=>
          <Product key={product.id} product={product} cart={cart} setcart={setcart}/>
        )}
    </div>
  )
}

export default Home
