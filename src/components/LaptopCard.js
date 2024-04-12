import React from 'react';

const LaptopCard = ({ laptop, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(laptop);
  };

  return (
    <div className="laptop-card">
      <img src={laptop.image} alt={laptop.name} />
      <div>
        <h2>{laptop.name}</h2>
        <p>{laptop.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default LaptopCard;
