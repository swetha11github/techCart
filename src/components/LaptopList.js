import React from 'react';
import LaptopCard from './LaptopCard';
import laptopsData from '../data/LaptopsData';

const LaptopList = ({ addToCart }) => {
  return (
    <div className="laptop-list">
      {laptopsData.map(laptop => (
        <LaptopCard key={laptop.id} laptop={laptop} addToCart={addToCart}/>
      ))}
    </div>
  );
}
export default LaptopList;