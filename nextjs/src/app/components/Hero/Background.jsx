"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Background = () => {
  // State for parallax effect
  const [scrollY, setScrollY] = useState(0);
  // State for image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of background images
  const backgroundImages = [
    "https://images.unsplash.com/photo-1530639834082-05bafb67fbbe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7937367/pexels-photo-7937367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];
  
  // Handle scroll for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Change image every 7 seconds
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background image carousel with transitions */}
      <AnimatePresence initial={false}>
        <motion.div 
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [1.05, 1] }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1 },
            scale: { duration: 7, ease: "easeOut" }
          }}
        >
          <Image
            src={backgroundImages[currentImageIndex]}
            alt={`Denver concrete contractor work - image ${currentImageIndex + 1}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Enhanced gradient overlay with subtle gradient shift */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50"
        animate={{
          background: [
            "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.7), rgba(0,0,0,0.5))",
            "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.65), rgba(0,0,0,0.45))",
            "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.7), rgba(0,0,0,0.5))"
          ]
        }}
        transition={{ 
          duration: 5, 
          ease: "easeInOut", 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      {/* Geometric pattern overlay with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y: scrollY * 0.1 }}
        transition={{ type: "tween" }}
      >
        <svg width="100%" height="100%">
          <pattern id="pattern-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <motion.path 
              d="M0 0 L40 0 L40 40 L0 40 Z" 
              fill="none" 
              stroke="#FFFFFF" 
              strokeWidth="1"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-grid)" />
        </svg>
      </motion.div>
      
      {/* Image indicator dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundImages.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-[#FFCC00]' : 'bg-white/50'}`}
            animate={currentImageIndex === index ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 1, repeat: currentImageIndex === index ? Infinity : 0 }}
          />
        ))}
      </div>
      
      {/* Yellow construction line accent with flowing animation */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#FFCC00] overflow-hidden">
        <motion.div
          animate={{ x: [-40, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <svg width="calc(100% + 40px)" height="100%" preserveAspectRatio="none">
            <pattern id="pattern-caution" x="0" y="0" width="40" height="12" patternUnits="userSpaceOnUse">
              <polygon points="0,0 20,0 40,12 20,12" fill="#2B2B2B" opacity="0.1" />
            </pattern>
            <rect x="0" y="0" width="100%" height="12" fill="url(#pattern-caution)" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Background;