"use client";

import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonialNavigation = ({ currentIndex, totalCount, navigate, isAnimating }) => {
  // Progress indicator calculation
  const progressPercentage = ((currentIndex + 1) / totalCount) * 100;

  return (
    <motion.div 
      className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 gap-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
    >
      {/* Progress bar and counter */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <motion.div 
            className="text-[#666666] font-medium"
            key={currentIndex}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentIndex + 1} / {totalCount}
          </motion.div>
          
          <motion.div 
            className="text-sm text-[#666666] opacity-70"
            key={`label-${currentIndex}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Real Customer Reviews
          </motion.div>
        </div>
        
        {/* Animated progress bar */}
        <div className="w-full sm:w-48 bg-gray-200 h-1 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#FFCC00]"
            initial={{ width: `${(currentIndex / totalCount) * 100}%` }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="flex gap-2">
        <motion.button 
          onClick={() => !isAnimating && navigate('prev')}
          className={`w-10 h-10 bg-white border border-gray-200 flex items-center justify-center cursor-pointer ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FFCC00] hover:text-black hover:border-transparent'} transition-all duration-300`}
          aria-label="Previous testimonial"
          disabled={isAnimating}
          whileHover={!isAnimating ? { scale: 1.1 } : {}}
          whileTap={!isAnimating ? { scale: 0.95 } : {}}
        >
          <FaChevronLeft />
        </motion.button>
        <motion.button 
          onClick={() => !isAnimating && navigate('next')}
          className={`w-10 h-10 bg-[#2B2B2B] text-white flex items-center justify-center cursor-pointer ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FFCC00] hover:text-black'} transition-all duration-300`}
          aria-label="Next testimonial"
          disabled={isAnimating}
          whileHover={!isAnimating ? { scale: 1.1 } : {}}
          whileTap={!isAnimating ? { scale: 0.95 } : {}}
        >
          <FaChevronRight />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TestimonialNavigation;