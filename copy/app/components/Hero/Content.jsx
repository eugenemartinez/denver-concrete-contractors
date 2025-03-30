"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

const Content = () => {
  return (
    <>
      {/* Branded accent bar - animated to grow from left to right */}
      <motion.div 
        className="h-2 bg-[#FFCC00] mb-6"
        initial={{ width: 0 }}
        animate={{ width: "5rem" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      ></motion.div>
      
      {/* Hero text content with reveal animations */}
      <motion.h1 
        className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
      >
        <motion.span 
          className="block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Denver's Premier
        </motion.span>
        <motion.span 
          className="block text-[#FFCC00]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          Concrete Contractors
        </motion.span>
      </motion.h1>
      
      <motion.p 
        className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        Expert concrete solutions for residential and commercial projects. 
        Built with precision engineering, premium materials, and superior craftsmanship for results that stand the test of time.
      </motion.p>
      
      {/* CTA buttons with enhanced mobile spacing */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 sm:gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
      >
        {/* First button with hover expand animation */}
        <motion.div
          className="w-full sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <Link 
            href="#contact" 
            className="group w-full sm:w-auto px-8 py-4 bg-[#FFCC00] text-black font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center sm:justify-start rounded-xs"
          >
            <FaPhoneAlt className="mr-2 group-hover:animate-pulse" />
            <span>Free Consultation</span>
          </Link>
        </motion.div>
        
        {/* Second button with hover expand animation */}
        <motion.div
          className="w-full sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <Link 
            href="#services" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider hover:border-[#FFCC00] hover:text-[#FFCC00] transition-all duration-300 flex items-center justify-center sm:justify-start rounded-xs"
          >
            Explore Services
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Content;