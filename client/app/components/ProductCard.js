"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ProductCard = ({ image, name, description, prices = {}, onClick }) => {
  const initialSize = Object.keys(prices)[0] || '';
  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [currentPrice, setCurrentPrice] = useState(prices[initialSize] || '0');

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setCurrentPrice(prices[size] || '0');
  };

  return (
    <div className=" shadow-lg rounded-lg bg-white overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out w-80 flex-shrink-0 transform-gpu hover:shadow-2xl">
      <Image
        src={image}
        alt={name}
        width={320}
        height={208}
        className="w-full h-52 object-cover cursor-pointer transition-opacity duration-300 hover:opacity-90"
        onClick={onClick}
      />
      <div className="p-4 bg-pgreen">
        <h3 className="text-xl text-byellow font-script font-semibold mb-2">{name}</h3>
        {description && <p className="text-pyellow mb-4">{description}</p>}
        <div className="flex flex-col space-y-2">
          <div className="flex font-script flex-wrap gap-2 mb-4">
            {Object.keys(prices).map((size) => (
              <button
                key={size}
                onClick={() => handleSizeChange(size)}
                className={`px-4 py-2 font-bold rounded-full focus:outline-none transition-colors duration-200 transform hover:scale-105 ${selectedSize === size ? 'bg-red-600 text-white' : 'bg-green-200 text-green-700'}`}
                aria-label={`Select size ${size}`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="text-byellow font-script font-bold text-lg">Rs. {currentPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
