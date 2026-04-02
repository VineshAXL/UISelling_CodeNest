import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      <h1>Welcome to CodeNest</h1>
        {/* <button onClick={() => navigate("/products")}>View Products</button> */}
        <button onClick={() => navigate("/products")}>Go to Products</button>
    </div>
  )
}

export default Home
