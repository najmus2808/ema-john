import React, { useState } from 'react';
import fakeData from '../../fakeData/index'
import Product from '../Product/Product';
import './Shop.css'



const Shop = () => {

    const data = fakeData.slice(0, 10);
    const [products, setProducts] = useState(data);
    console.log(products);

    return (
        <div className="shop"> 
            <div className="shop-container">
                {
                    products.map(product => <Product key = {product.key} product = {product}></Product>)
                }
            </div>
            <div className="cart-container">
                this is cart component
            </div>
        </div>
    );
};

export default Shop;