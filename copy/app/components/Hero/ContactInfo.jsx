"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaClock, FaChevronRight } from 'react-icons/fa';

const ContactInfo = () => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for icons
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      color: "#FFCC00",
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.div 
      className="mt-6 bg-white/10 backdrop-blur-lg p-5 border-l-4 border-[#FFCC00] inline-flex flex-wrap gap-6 rounded-r-md relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ boxShadow: "0 4px 20px rgba(255, 204, 0, 0.15)" }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>
      
      {/* Phone information with hover effects */}
      <motion.div 
        className="flex items-center text-white group relative z-10"
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          className="text-[#FFCC00] mr-3 text-lg"
        >
          <FaPhoneAlt />
        </motion.div>
        <a 
          href="tel:3035551234" 
          className="hover:text-[#FFCC00] transition-colors flex items-center"
        >
          <span>(303) 555-1234</span>
          <motion.span 
            className="ml-1 opacity-0 group-hover:opacity-100 text-[0.7em]"
            initial={{ x: -5 }}
            whileHover={{ x: 0 }}
          >
            <FaChevronRight />
          </motion.span>
        </a>
      </motion.div>
      
      {/* Business hours with hover effects */}
      <motion.div 
        className="flex items-center text-white relative z-10"
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          className="text-[#FFCC00] mr-3 text-lg"
        >
          <FaClock />
        </motion.div>
        <span>Mon-Fri: 7am - 6pm</span>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;