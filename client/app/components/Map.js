'use client';

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');

      if (mapRef.current && !mapRef.current._leaflet_id) {
        const map = L.map(mapRef.current, {
          center: [13.119479865325445, 80.28981838709105],
          zoom: 13,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([13.119479865325445, 80.28981838709105]).addTo(map)
          .bindPopup('Golden Pakkada')
          .openPopup();
      }
    }
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center bg-byellow p-6">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-pyellow opacity-100 bg-center"
     
        
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center p-6 w-full">
        {/* Heading */}
        <h2 className="text-5xl mt-8 text-pred text-futura mb-8">Explore</h2>

        {/* Map Container */}
        <div className="relative w-full max-w-5xl mb-8 bg-white rounded-lg shadow-md border border-green-500 z-10 overflow-hidden">
          {/* Map */}
          <div
            ref={mapRef}
            className="w-full h-[300px] sm:h-[400px] md:h-[300px] lg:h-[300px] xl:h-[400px] rounded-lg overflow-hidden"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(MapComponent), { ssr: false });
