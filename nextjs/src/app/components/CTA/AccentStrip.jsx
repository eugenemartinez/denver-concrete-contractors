"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AccentStrip = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-2 overflow-hidden">
      <motion.div 
        className="h-full bg-[#FFCC00]"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut" 
        }}
      />
      
      {/* Animated highlight effect */}
      <motion.div 
        className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-white/20"
        animate={{ 
          x: ["-100%", "100%"],
        }}
        transition={{ 
          repeat: Infinity, 
          repeatDelay: 2,
          duration: 1.5,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default AccentStrip;