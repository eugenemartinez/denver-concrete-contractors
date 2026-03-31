"use client";

import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {Array(5).fill(0).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.3, 
            delay: 0.1 * i,
            type: "spring",
            stiffness: 300,
            damping: 24
          }}
          whileHover={{ 
            scale: 1.2,
            rotate: i < rating ? [0, 15, -15, 0] : 0,
            transition: { duration: 0.3 }
          }}
          className="relative"
        >
          <FaStar 
            className={`text-xl ${i < rating ? 'text-[#FFCC00]' : 'text-gray-300'}`}
          />
          
          {/* Glow effect for filled stars */}
          {i < rating && (
            <motion.div 
              className="absolute inset-0 text-[#FFCC00] opacity-0"
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                delay: 0.3 + (0.1 * i),
                repeat: Infinity,
                repeatDelay: 3 + i
              }}
            >
              <FaStar className="text-xl filter blur-[1px]" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default StarRating;