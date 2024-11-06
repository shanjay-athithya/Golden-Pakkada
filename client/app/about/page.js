"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 mt-4 md:mt-6 lg:mt-6">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-pyellow bg-cover"
        
      />

      {/* Blur overlay */}
      <div className="absolute inset-0" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold font-script text-center text-pgreen mb-8 mt-14">
          About Us
        </h1>

        <div className="bg-white text-pgreen bg-opacity-50 p-8 rounded-lg shadow-md mt-12 mb-12 max-w-2xl text-center">
          <p className="text-lg font-semibold font-script text-pgreen mb-6">
            Welcome to Golden Pakkada, the premier sweet stall of North Madras! For over 20 years, we&apos;ve been the go-to destination for those seeking the finest traditional sweets and savories.
          </p>
          <p className="text-lg font-script mb-6">
            Our story began with a passion for crafting authentic Indian delicacies, and today, we proudly offer more than 77 varieties, each made with the highest quality ingredients and a deep commitment to excellence.
          </p>
          <p className="text-lg font-script mb-6">
            At Golden Pakkada, we cherish tradition and prioritize quality above all. We use only pure groundnut oil in our preparations, ensuring every bite is packed with flavor while being a healthier choice.
          </p>
          <p className="text-lg font-script mb-6">
            For our signature sweets, we source original ghee and premium nuts, delivering the richest and most authentic flavors that our customers love.
          </p>
          <p className="text-lg font-script mb-6">
            Our commitment to using top-tier ingredients is what makes our sweets and savories stand out in both taste and quality. We cater to both individual and bulk orders, making us the ideal choice for any occasion—whether it&apos;s a personal treat or a grand celebration.
          </p>
          <p className="text-lg font-script">
            Celebrate the rich culinary heritage of North Madras with us, and discover why Golden Pakkada has been the trusted name in quality sweets and savories for two decades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
