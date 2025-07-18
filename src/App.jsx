import './App.css';
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx"
import Cart from "./components/Cart.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import {createContext} from 'react'

export const cartContent = createContext();

function App() {

  const [cart,setcart] =useState([]);
  return (
    <cartContent.Provider value={{cart ,setcart}}>
    <BrowserRouter>
    <Header cart={cart}/>
    <div className="container">
      <Routes>
        <Route path="/Food-Cart-App" element={<Home />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </cartContent.Provider>
  );
}

export default App;
