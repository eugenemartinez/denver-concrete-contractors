"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ServiceAreaGoogleMap = () => {
  // For client-side rendering of iframe
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative w-full h-full" style={{ minHeight: "400px" }}>
      {/* Yellow construction border */}
      <motion.div 
        className="absolute inset-0 border-8 border-[#FFCC00] -m-2 z-10 pointer-events-none"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      
      {/* Map iframe - only rendered on client */}
      <div className="relative z-20 h-full w-full bg-gray-100">
        {isMounted ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49161.63532513403!2d-104.98853236022966!3d39.74256635007683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7eb67c3b6c3f%3A0x4636b28eeca21172!2sDowntown%20Denver%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1711744649378!5m2!1sen!2sus"
            className="w-full h-full border-0 absolute inset-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Denver Concrete Contractors service area map"
            aria-label="Google Maps showing Denver Concrete Contractors service areas"
            style={{ minHeight: "100%" }}
          />
        ) : (
          <motion.div 
            className="w-full h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-[#FFCC00] border-t-transparent rounded-full animate-spin mb-2"></div>
              <div className="text-gray-500">Loading map...</div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Optional overlay for hover effect */}
      <motion.div 
        className="absolute inset-0 bg-[#FFCC00]/10 opacity-0 hover:opacity-100 z-30 transition-opacity duration-300"
        whileHover={{ opacity: 0.05 }}
      />
    </div>
  );
};

export default ServiceAreaGoogleMap;