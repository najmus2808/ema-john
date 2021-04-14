import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{name, img, seller, price, stock} = props.product;
    return (
        <div className="product-container">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-description">
                <h3>{name}</h3><br/>
                <small>by: {seller}</small><br/>
                <h4>${price}</h4>
                <small>only {stock} left in stock - order soon</small><br/><br/>
                <button onClick={()=> props.handleAddProduct(props.product)}className="main-btn"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>

            </div>
        </div>
    );
};

export default Product;