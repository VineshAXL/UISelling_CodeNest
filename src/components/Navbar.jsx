import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
        <h2>CodeNest </h2>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
        <button onClick={()=>navigate("/cart")}>Cart</button>  
    </nav>
  )
}

export default Navbar
