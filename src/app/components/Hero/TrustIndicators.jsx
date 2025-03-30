"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaTools, FaStar } from 'react-icons/fa';

const TrustIndicators = () => {
  // Container animation for staggered children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  // Individual indicator animation
  const indicatorVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Icon animation
  const iconVariants = {
    initial: { scale: 0.8, rotate: -10 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      className="bg-black/40 backdrop-blur-sm p-6 border-l-4 border-[#FFCC00] relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Shimmer effect overlay */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ 
          duration: 2,
          repeat: Infinity, 
          repeatType: "loop",
          repeatDelay: 5
        }}
      />
      
      {/* Indicators grid with staggered animation */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* First indicator */}
        <motion.div 
          className="flex items-center"
          variants={indicatorVariants}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="bg-[#FFCC00] p-3 mr-4 flex-shrink-0"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <FaShieldAlt className="text-black text-2xl" />
          </motion.div>
          <div className="min-w-0">
            <div className="text-white font-bold text-lg whitespace-nowrap">Licensed & Insured</div>
            <div className="text-white/70">Full coverage</div>
          </div>
        </motion.div>
        
        {/* Second indicator */}
        <motion.div 
          className="flex items-center"
          variants={indicatorVariants}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="bg-[#FFCC00] p-3 mr-4 flex-shrink-0"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <FaTools className="text-black text-2xl" />
          </motion.div>
          <div className="min-w-0">
            <div className="text-white font-bold text-lg whitespace-nowrap">20+ Years Experience</div>
            <div className="text-white/70">Expert team</div>
          </div>
        </motion.div>
        
        {/* Third indicator */}
        <motion.div 
          className="flex items-center"
          variants={indicatorVariants}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="bg-[#FFCC00] p-3 mr-4 flex-shrink-0"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <FaStar className="text-black text-2xl" />
          </motion.div>
          <div className="min-w-0">
            <div className="text-white font-bold text-lg whitespace-nowrap">5-Star Service</div>
            <div className="text-white/70">Top-rated contractor</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TrustIndicators;