import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav className="nav-item">
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
            <div className="search-container">
               <input type="text" className="search-input" placeholder="type here to search"/>
               <span className="cart-icon"><FontAwesomeIcon icon={faShoppingCart} /></span>
               <a href="">
                   <span className="cart-count">0</span>
               </a>
            </div>
           
               
            
        </div>
    );
};

export default Header;