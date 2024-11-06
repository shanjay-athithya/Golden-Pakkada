'use client';

import React from 'react';
import Image from 'next/image';

const FestivalsComponent = () => {
  return (
    <div className="flex justify-center items-center bg-pgreen">
      <div className="w-full bg-byeloow">
        {/* Responsive Images */}
        <div className="relative w-full overflow-hidden">
          {/* Desktop Image */}
          <div className="hidden md:block relative w-full h-96">
            <Image
              src="/images/center2.jpg" 
              alt="Festive Image for Desktop"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Mobile Image */}
          <div className="block md:hidden relative w-full h-64">
            <Image
              src="/images/center1.jpg" 
              alt="Festive Image for Mobile"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Content Below Image */}
        <div className="p-4 text-center">
          <h2 className="text-3xl font-royal mt-8 text-pyellow mb-8">Celebrate with Us</h2>
          <p className="text-light font-script text-byellow mb-8">
            At Golden Pakkada, we believe in celebrating every moment with joy and grandeur. Our range of sweets and gifts is designed to make every festival and occasion special. From traditional sweets to contemporary gift hampers, we have something for every celebration.
          </p>

          <p className="text-light font-script text-byellow mb-4">
            Whether it&rsquo;s a festival or a personal milestone, our offerings are crafted to bring a touch of elegance and delight. Explore our collection and find the perfect way to make your celebrations memorable. Indulge in our exquisite range of products and experience the essence of festivity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FestivalsComponent;
