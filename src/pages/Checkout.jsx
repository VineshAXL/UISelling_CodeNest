import React from 'react'

const Checkout = ({ cart }) => {

    const total = cart.reduce((sum, item) => {
        return sum + Number(item.price.replace("₹", ""));
    }, 0);

    return (
        <div>
            <h1>Checkout</h1>

            {cart.map((item, i) => (
                <div key={i}>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                </div>
            ))}

            <h2>Total: ₹{total}</h2>

            <button onClick={() => {
                alert("Order Placed!");
                localStorage.removeItem("cart");
                window.location.href = "/";
            }}>
                Place Order
            </button>
        </div>
    )
}

export default Checkout