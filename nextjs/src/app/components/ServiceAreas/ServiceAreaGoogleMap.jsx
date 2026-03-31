"use client";

import React, { useState, useEffect } from 'react';

const ServiceAreaGoogleMap = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Force iframe to be visible after a short delay
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="relative w-full rounded-lg overflow-hidden h-full" 
      style={{ 
        height: "100%", // Fill the parent container
        minHeight: "400px",
      }}
    >
      {/* Border as a static element */}
      <div className="absolute inset-0 border-8 border-[#FFCC00] -m-2 z-10 pointer-events-none rounded-xl"></div>
      
      {/* Map container with better mobile support */}
      <div 
        className="relative z-0 w-full bg-gray-100 rounded-lg overflow-hidden h-full"
        style={{ 
          position: "absolute",
          inset: 0
        }}
      >
        {isMounted && (
          <div className="w-full h-full absolute inset-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49161.63532513403!2d-104.98853236022966!3d39.74256635007683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7eb67c3b6c3f%3A0x4636b28eeca21172!2sDowntown%20Denver%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1711744649378!5m2!1sen!2sus"
              className={`w-full h-full border-0 ${mapLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                height: "100%",
                transition: 'opacity 0.5s ease',
                display: 'block'
              }}
              allowFullScreen=""
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              title="Denver Concrete Contractors service area map"
              aria-label="Google Maps showing Denver Concrete Contractors service areas"
              onLoad={() => setMapLoaded(true)}
            />
          </div>
        )}
        
        {/* Loading indicator */}
        {(isMounted && !mapLoaded) && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-[#FFCC00] border-t-transparent rounded-full animate-spin mb-2"></div>
              <div className="text-gray-500">Loading map...</div>
            </div>
          </div>
        )}
      </div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#FFCC00]/5 opacity-0 hover:opacity-100 z-30 transition-opacity duration-300 rounded-lg"></div>
    </div>
  );
};

export default ServiceAreaGoogleMap;