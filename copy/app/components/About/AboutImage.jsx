"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutImage = () => {
  return (
    <div className="relative w-full">
      {/* Main image container with subtle hover effect */}
      <motion.div 
        className="relative aspect-square md:aspect-[4/5] max-w-lg mx-auto overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Semi-transparent overlay that fades in */}
        <motion.div 
          className="absolute inset-0 border-2 border-[#FFCC00]/40 z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        
        {/* Image with enhanced border */}
        <div className="relative h-full w-full border-[8px] border-white shadow-lg">
          <Image 
            src="https://plus.unsplash.com/premium_photo-1667516622752-389000d8e3c9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Denver Concrete Contractors team at work on a commercial project"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            quality={85}
          />
          
          {/* Experience badge moved inside the image */}
          <motion.div 
            className="absolute bottom-6 left-6 bg-white py-3 px-5 shadow-md z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <div className="text-center">
              <span className="block text-3xl font-bold text-[#FFCC00]">20+</span>
              <span className="text-sm uppercase tracking-wider text-[#2B2B2B]">Years Experience</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Yellow accent box with animation */}
      <motion.div 
        className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FFCC00] hidden md:block z-0"
        initial={{ opacity: 0, x: -20, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
      
      {/* Additional decorative element */}
      <motion.div 
        className="absolute -top-4 -right-4 w-16 h-16 border-4 border-[#FFCC00] hidden md:block"
        initial={{ opacity: 0, x: 20, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      />
    </div>
  );
};

export default AboutImage;