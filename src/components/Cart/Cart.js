import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div className="cart-container">
            <h3>Order Summary</h3>
            <h4>Items ordered:{cart.length}</h4>
            <div className="cart">
            <h5>Items:</h5>
            <h5>Shipping & Handling:</h5>
            <h5>Total before tax:</h5>
            <h5>Estimated Tax:</h5>
            <h4>Order Total:</h4>
            </div> 
        </div>
    );
};

export default Cart;