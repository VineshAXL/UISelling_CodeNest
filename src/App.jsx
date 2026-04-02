import React, { useEffect } from "react";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import {useState} from "react"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";


function App() {
const[cart, setCart] = useState([]);
//loadcart from local storage
useEffect(() => {
  const saved = localStorage.getItem("cart");
  if (saved) {
    setCart(JSON.parse(saved));
  }
}, []);

//save cart to local storage
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  return (

    <BrowserRouter>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
        <Route path="/products/:id" element={<ProductDetails setCart={setCart} />} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;