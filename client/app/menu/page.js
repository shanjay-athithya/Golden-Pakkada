"use client";

import { useState, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import categories from '../data/Categories';
import { FaChevronUp, FaChevronDown, FaTimes } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'; // Import a spinner icon

export default function MenuPage() {
  const productListsRefs = useRef([]);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [loading, setLoading] = useState(false); // State to manage loading

  const scrollVertical = (index, direction) => {
    if (productListsRefs.current[index]) {
      productListsRefs.current[index].scrollBy({
        top: direction === 'up' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const handleImageClick = (image) => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setZoomedImage(image);
      setLoading(false); // Stop loading after a delay
    }, 1000); // Simulate a loading time of 1 second (adjust as needed)
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div 
      className="relative min-h-screen bg-pyellow flex flex-col bg-cover py-16 px-9 mt-4 md:mt-5 lg:mt-5 overflow-y-auto"
      
    >
      <h1 className="text-4xl font-semibold text-center text-pgreen font-script mb-12">
        Our Menu
      </h1>
      {Object.entries(categories).map(([category, products], idx) => (
        <div key={category} className="mb-20">
          <h2 className="text-3xl font-bold font-script text-pred mb-20">
            {category}
          </h2>
          <div className="relative">
            <button 
              className="absolute left-1/2  transform -translate-x-1/2 -translate-y-full z-10 bg-white text-pred p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              onClick={() => scrollVertical(idx, 'up')}
            >
              <FaChevronUp size={24} />
            </button>
            <button 
              className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full z-10 bg-white text-pred p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              onClick={() => scrollVertical(idx, 'down')}
            >
              <FaChevronDown size={24} />
            </button>
            <div
              className="overflow-y-auto scrollbar-hidden max-h-screen"
              ref={(el) => (productListsRefs.current[idx] = el)}
            >
              <div className="flex flex-col space-y-10 lg:grid lg:grid-cols-4 lg:gap-12 lg:space-y-0 justify-center items-center">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    prices={product.prices}
                    onClick={() => handleImageClick(product.image)} // Pass the onClick handler
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <AiOutlineLoading3Quarters className="text-white text-6xl animate-spin" />
        </div>
      )}
      {zoomedImage && !loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <button 
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeZoom}
          >
            <FaTimes />
          </button>
          <img 
            src={zoomedImage} 
            alt="Zoomed Product" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
