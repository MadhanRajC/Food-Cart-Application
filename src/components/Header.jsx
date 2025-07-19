import React from 'react'
import {Link} from "react-router-dom";
import "./Header.css"
import { useContext } from 'react';
import { cartContent } from '../App';

const Header = () => {
  const {cart} = useContext(cartContent);
  return (
    <div className='navbar'>
      <div className="logo">Food Cart</div>
      <ul>
          <li>
              <Link to={"/Food-Cart-Application"}>Home</Link>
          </li>
          <li>
              <Link to={"/Cart"}><span style={{ color: cart.length === 0 ? "white" : "red" }}><b>{cart.length}</b></span> View Cart</Link>
          </li>
      </ul>
    </div>
  )
}

export default Header
