import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cart = ({cart,setCart}) => {
const navigate = useNavigate();
    //remove items
const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
};
//total
const total = cart.reduce((sum, item) => {
    return sum + Number(item.price.replace("₹", ""));
}, 0);
  return (
    <div style={{padding : "40px"}}>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
            <p>No item in Cart</p>
        ) : (
            cart.map(item => (
                <div key={item.id} style={{border : "1px solid black", marginBottom : "10px", padding : "10px"}}>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
            ))
        )}
        <h2>Total: ₹{total}</h2>
      <button onClick={() => navigate("/checkout")} disabled={cart.length === 0}>Proceed to Checkout</button>
    </div>
  )
}

export default Cart
