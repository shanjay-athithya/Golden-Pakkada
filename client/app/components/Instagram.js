"use client";

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // React Icons

const InstagramPosts = () => {
  const [posts, setPosts] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=IGQWRPUDJNTFFacXhManBXcmI3UmsyVW10bV95clJteGhoSDRlN09aNWY5aVl0aWp6ZA2M2cnZAXTUFVaUZAuZA1UxdXBYVEs2bGZAob19HTjhYbzF0NUxyMlNzWE4wYUpWOTlJcGtxdWxaWFpyUWxQSkE3RWQzdXBaNFUZD`
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div 
      className=" bg-pyellow bg-cover bg-center p-6 relative"
      
    >
      <h1 className="w-full text-center text-5xl mt-8  text-pred mb-8">Instagram Feed</h1>

      {/* Scroll Buttons */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
        onClick={scrollLeft}
        style={{ zIndex: 20 }}  
      >
        <FaChevronLeft className="w-6 h-6" /> 
      </button>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
        onClick={scrollRight}
        style={{ zIndex: 20 }} 
      >
        <FaChevronRight className="w-6 h-6" />
      </button>

      {/* Horizontal Scroll Section with hidden scrollbar */}
      <div 
        ref={scrollContainerRef} 
        className="flex overflow-x-scroll space-x-8 p-4 scrollbar-hidden relative"
        style={{ zIndex: 10 }}  
      >
        {posts.map(post => (
          <div 
            key={post.id} 
            className="flex-shrink-0 w-80 mb-8 bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            {post.media_type === 'IMAGE' && (
              <img
                src={post.media_url}
                alt={post.caption}
                className="w-full h-64 object-cover"
              />
            )}
            {post.media_type === 'VIDEO' && (
              <video controls className="w-full h-64 object-cover">
                <source src={post.media_url} type="video/mp4" />
              </video>
            )}
            <div className="p-4">
              <p className="text-pgreen font-semibold mb-2">
                {post.caption ? post.caption.substring(0, 100) + "..." : "No caption available"}
              </p>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pred hover:text-indigo-700 font-semibold"
              >
                View on Instagram
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramPosts;
