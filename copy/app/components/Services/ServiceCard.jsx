"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.6 });
  
  // Check for touch devices (mobile and tablet)
  useEffect(() => {
    const checkIfTouchDevice = () => {
      // Consider devices under 1024px as touch devices (includes tablets)
      setIsTouchDevice(window.innerWidth < 1024);
    };
    
    // Check on initial load
    checkIfTouchDevice();
    
    // Add event listener for resize
    window.addEventListener('resize', checkIfTouchDevice);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkIfTouchDevice);
    };
  }, []);
  
  // Show content if card is in view on touch devices (mobile/tablet) or hovered on desktop
  const showContent = isTouchDevice ? isInView : undefined; // undefined will use CSS hover on desktop

  // Button hover state
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  return (
    <motion.div 
      ref={ref}
      className="group bg-white rounded-xs overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 relative h-[450px] border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Service image with enhanced overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-all duration-700 ease-in-out ${showContent ? 'scale-110' : 'group-hover:scale-110'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 transition-all duration-500"></div>
      </div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-end transition-all duration-500 p-8 z-10">
        {/* Title with decorative accent - always visible */}
        <div className="mb-auto">
          <div className={`h-1.5 bg-[#FFCC00] mb-4 rounded-full transition-all duration-700 ${showContent ? 'w-32' : 'w-12 group-hover:w-32'}`}></div>
          <h3 className={`text-3xl md:text-4xl font-bold mb-3 tracking-tight transition-colors duration-300 ${showContent ? 'text-[#FFCC00]' : 'text-white group-hover:text-[#FFCC00]'}`}>
            {service.title}
          </h3>
          <div className={`h-0.5 bg-white/30 transition-all duration-700 ${showContent ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`}></div>
        </div>
        
        {/* Description - visible on hover or when in view on touch devices */}
        <div className={`transition-all duration-500 ${showContent ? 'opacity-100 transform-none' : 'transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'} delay-100`}>
          <p className="text-white/90 mb-8 leading-relaxed">
            {service.description}
          </p>
          
          {/* CTA Button - manually tracked hover state */}
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="relative inline-block overflow-hidden"
              onHoverStart={() => setIsButtonHovered(true)}
              onHoverEnd={() => setIsButtonHovered(false)}
            >
              <Link 
                href="#contact"
                className="relative inline-block px-8 py-4 bg-[#FFCC00] text-black font-bold uppercase tracking-wider shadow-lg"
              >
                <span className="relative z-10">Request Quote</span>
              </Link>
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isButtonHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;