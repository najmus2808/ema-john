import React, { useState } from 'react';
import fakeData from '../../fakeData/index'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'



const Shop = () => {

    const data = fakeData.slice(0, 10);
    const [products, setProducts] = useState(data);
    const[cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className="shop">
            <div className="shop-container">
                {
                    products.map(product =>
                        <Product
                            key={product.key}
                            product={product}
                            handleAddProduct={handleAddProduct}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;