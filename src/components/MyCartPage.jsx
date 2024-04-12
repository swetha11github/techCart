import React, { useState } from 'react';
import './MyCartPage.css';

const MyCartPage = ({ cartItems }) => {
  
  const [cart, setCart] = useState(cartItems || []);

  const removeFromCart = (itemId) => {
    const updatedCartItems = cart.filter(item => item.id !== itemId);
    setCart(updatedCartItems);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.name} style={{ width: '50px' }} /></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total:</td>
              <td colSpan="2">{calculateTotal()}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};
export default MyCartPage;