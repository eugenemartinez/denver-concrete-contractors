"use client";

import React from 'react';
import { FaMapMarkerAlt, FaCheck, FaRoad, FaClock, FaStar, FaCompass } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AreasList = ({ primaryAreas, extendedAreas }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="flex items-center mb-6"
        variants={itemVariants}
      >
        <FaMapMarkerAlt className="text-[#FFCC00] text-2xl mr-3" />
        <h3 className="text-2xl font-bold text-[#2B2B2B]">Areas We Serve</h3>
      </motion.div>
      
      {/* Primary service areas */}
      <motion.div 
        className="bg-[#F5F5F5] p-6 mb-6 border-t-4 border-[#FFCC00]"
        variants={itemVariants}
      >
        <h4 className="text-xl font-bold text-[#2B2B2B] mb-4 flex items-center">
          <FaStar className="text-[#FFCC00] mr-3" />
          Primary Service Areas
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {primaryAreas.map((area, index) => (
            <motion.div 
              key={index} 
              className="flex items-center text-[#333333]" // Improved text color
              variants={itemVariants}
              whileHover={{ x: 3, color: "#000000" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="text-[#FFCC00] mr-2 flex-shrink-0"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <FaCheck />
              </motion.div>
              <span>{area}</span>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-4 bg-[#FFCC00]/10 p-3 rounded-md"
          variants={itemVariants}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <p className="text-[#2B2B2B] text-sm flex items-center">
            <FaStar className="text-[#FFCC00] mr-2 flex-shrink-0" /> 
            <span><strong>Fast response times</strong> and <strong>no travel fees</strong> in these areas!</span>
          </p>
        </motion.div>
      </motion.div>
      
      {/* Extended service areas */}
      <motion.div 
        className="bg-[#F5F5F5] p-6 mb-6 border-t-4 border-[#FFCC00]"
        variants={itemVariants}
      >
        <h4 className="text-xl font-bold text-[#2B2B2B] mb-4 flex items-center">
          <FaCompass className="text-[#FFCC00] mr-3" />
          Extended Service Areas
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {extendedAreas.map((area, index) => (
            <motion.div 
              key={index} 
              className="flex items-center text-[#333333]" // Improved text color
              variants={itemVariants}
              whileHover={{ x: 3, color: "#000000" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="text-[#FFCC00] mr-2 flex-shrink-0"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <FaCheck />
              </motion.div>
              <span>{area}</span>
            </motion.div>
          ))}
        </div>
        <motion.p 
          className="mt-4 text-[#444444] italic" // Darker text color for better visibility
          variants={itemVariants}
        >
          *Additional fees may apply for extended service areas
        </motion.p>
      </motion.div>
      
      {/* Travel radius information - moved to the bottom */}
      <motion.div 
        className="bg-[#F5F5F5] p-6 border-t-4 border-[#FFCC00]"
        variants={itemVariants}
      >
        <h4 className="text-xl font-bold text-[#2B2B2B] mb-4 flex items-center">
          <FaRoad className="text-[#FFCC00] mr-3" />
          Service Radius
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="w-16 h-16 bg-[#FFCC00] rounded-full flex items-center justify-center text-black font-bold text-xl mr-4 flex-shrink-0"
              whileHover={{ 
                rotate: [0, -5, 5, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            >
              30
            </motion.div>
            <div>
              <h5 className="font-semibold text-[#2B2B2B]">Mile Radius</h5>
              <p className="text-[#444444]">From downtown Denver</p> {/* Darker text color */}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-16 h-16 bg-[#2B2B2B] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0"
              whileHover={{ 
                rotate: [0, -5, 5, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            >
              <FaClock className="text-xl" />
            </motion.div>
            <div>
              <h5 className="font-semibold text-[#2B2B2B]">Quick Response</h5>
              <p className="text-[#444444]">Same-day consultations available</p> {/* Darker text color */}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AreasList;