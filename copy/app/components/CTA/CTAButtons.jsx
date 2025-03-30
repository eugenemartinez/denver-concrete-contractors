"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <motion.a 
        href="tel:3035551234" 
        className="group relative px-8 py-4 bg-[#FFCC00] text-black font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors text-center rounded-xs shadow-lg overflow-hidden"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div 
          className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
        <div className="flex items-center justify-center gap-2 relative z-10">
          <motion.svg 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            animate={{ 
              rotate: [0, -10, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity, 
              repeatDelay: 3
            }}
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </motion.svg>
          <span>Call Now</span>
        </div>
      </motion.a>
      
      <motion.div
        className="relative"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link 
          href="#contact" 
          className="group block px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-[#FFCC00] hover:border-[#FFCC00] hover:text-black transition-colors text-center rounded-xs shadow-lg"
        >
          <motion.div 
            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 rounded"
            initial={{ height: '0%' }}
            whileHover={{ height: '100%' }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="relative z-10"
            initial={{ letterSpacing: '0.05em' }}
            whileHover={{ letterSpacing: '0.08em' }}
            transition={{ duration: 0.3 }}
          >
            Get Free Estimate
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default CTAButtons;