import React from 'react'
import { useNavigate } from 'react-router-dom';

const Products = ({ setCart }) => {
    const navigate = useNavigate();
    const items = [
        { id: 1, name: "Landing page UI", price: "₹299" },
        { id: 2, name: "Dashboard UI", price: "₹399" },
        { id: 3, name: "Product 3", price: "₹499" },
        { id: 4, name: "Product 4", price: "₹599" }
    ]
    return (
        
        <div className='products'>
            
            {items.map(item => (
                <div className='card' key={item.id}>
                    <img src={`https://picsum.photos/300?${item.id}`} alt={item.name} />
                    <h3 onClick={() => navigate(`/products/${item.id}`)}
                        style={{ cursor: "pointer", color: "blue" }}>{item.name}</h3>
                    <p>{item.price}</p>
                    <button onClick={() => setCart(prev => [...prev, item])}>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default Products
