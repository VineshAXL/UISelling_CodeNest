import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = ({setCart}) => {
    const {id}=useParams();

    const items = [
        { id: 1, name: "Landing page UI", price: "₹299",desc:"Mordern landing page design" },
        { id: 2, name: "Dashboard UI", price: "₹399" ,desc:"admin dashboard template" },
        { id: 3, name: "Product 3", price: "₹499",desc:"E-commerce product page design" },
        { id: 4, name: "Product 4", price: "₹599",desc:"Mobile app UI kit" }
    ];

    const product = items.find(item => item.id === Number(id));
  return (
    <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.desc}</p>
        <button onClick={() => setCart(prev => [...prev, product])}>Add to Cart</button>
      
    </div>
  )
}

export default ProductDetails
