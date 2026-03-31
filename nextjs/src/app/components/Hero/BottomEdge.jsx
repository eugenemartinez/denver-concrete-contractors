"use client";

import React from 'react';
import { motion } from 'framer-motion';

const BottomEdge = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
      {/* Main white edge with subtle animation */}
      <motion.div 
        className="absolute bottom-0 left-[-5%] right-[-5%] h-40 bg-white"
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          clipPath: "polygon(0% 100%, 100% 100%, 100% 40%, 75% 55%, 50% 45%, 25% 60%, 0% 45%)"
        }}
      />
      
      {/* Yellow accent layer */}
      <motion.div 
        className="absolute bottom-0 left-[-5%] right-[-5%] h-40 bg-[#FFCC00]"
        initial={{ y: 60 }}
        animate={{ y: 5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        style={{
          clipPath: "polygon(0% 100%, 100% 100%, 100% 85%, 80% 80%, 60% 85%, 40% 80%, 20% 85%, 0% 80%)"
        }}
      />
      
      {/* Decorative dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-12 z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            className="w-2 h-2 rounded-full bg-[#FFCC00] shadow-sm"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.4, ease: "backOut" }}
          />
        ))}
      </div>
      
      {/* Subtle pattern overlay */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-8 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <pattern id="bottomPattern" x="0" y="0" width="20" height="8" patternUnits="userSpaceOnUse">
            <path d="M0 4 L5 0 L10 4 L15 0 L20 4" fill="none" stroke="#2B2B2B" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="8" fill="url(#bottomPattern)" />
        </svg>
      </motion.div>
    </div>
  );
};

export default BottomEdge;