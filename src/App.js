import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LaptopList from './components/LaptopList';
import MyCartPage from './components/MyCartPage'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevCartItems => [...prevCartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
  };

  return (
    <Router>
      <div className="App">
        <Header itemCount={cartItems.length}/>
        <Routes>
          <Route path="/my-cart" element={<MyCartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/" element={<LaptopList addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
