import React from 'react';
import { Link } from 'react-router-dom';
import cartImage from '../assets/cart.png';
const Header = ({cartItems, itemCount }) => {
  return (
    <header>
      <h1>Apple Laptop</h1>
      <Link to="/my-cart">
        <img src={cartImage} alt="Cart" className="cart-icon" />
        <span className='item-count'>{itemCount}</span>
      </Link>
    </header>
  );
}

export default Header;