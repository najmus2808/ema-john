import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const cost = cart.reduce((sum,item) => sum + item.price,0);
    let shippingCost = 0;
    if(cost > 0 && cost < 50){
        shippingCost = 15;
    }
    else if(cost > 50){
        shippingCost = 10;
    }

    const total = cost + shippingCost;

    let tax = 0;
    if(cart.length != 0 ){
        tax = (cost / 100) *10;
    }

    const grandTotal = Math.round(cost + shippingCost + tax);
    return (
        <div className="cart-container">
            <h3>Order Summary</h3>
            <h4>Items ordered:{cart.length}</h4>
            <div className="cart">
            <h5>Items:${cost}</h5>
            <h5>Shipping &amp; Handling:${shippingCost}</h5>
            <h5>Total before tax:${cost}</h5>
            <h5>Estimated Tax:${tax}</h5>
            <h4>Order Total:${grandTotal}</h4>
            </div> 
        </div>
    );
};

export default Cart;