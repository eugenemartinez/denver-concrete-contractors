"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMedkit, 
  FaFileAlt, 
  FaDraftingCompass, 
  FaTools, 
  FaTruckLoading, 
  FaClipboardCheck 
} from 'react-icons/fa';

const ProcessIcon = ({ iconName }) => {
  // Animation variants for the icon container
  const iconContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.1
      }
    },
    hover: { 
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut"
        }
      }
    }
  };

  // Animation for the background pulse
  const pulseVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.4
      }
    },
    hover: {
      scale: 1.2,
      opacity: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };
  
  // Map of icon names to their components
  const getIconComponent = (name) => {
    switch(name) {
      case 'FaMedkit': 
        return <FaMedkit className="w-10 h-10 text-[#2B2B2B] group-hover:text-[#FFCC00] transition-colors duration-300" />;
      case 'FaFileAlt': 
        return <FaFileAlt className="w-10 h-10 text-[#2B2B2B] group-hover:text-[#FFCC00] transition-colors duration-300" />;
      case 'FaDraftingCompass': 
        return <FaDraftingCompass className="w-10 h-10 text-[#2B2B2B] group-hover:text-[#FFCC00] transition-colors duration-300" />;
      case 'FaTools': 
        return <FaTools className="w-10 h-10 text-[#2B2B2B] group-hover:text-[#FFCC00] transition-colors duration-300" />;
      case 'FaTruckLoading': 
        return <FaTruckLoading className="w-10 h-10 text-[#2B2B2B] group-hover:text-[#FFCC00] transition-colors duration-300" />;
      case 'FaClipboardCheck': 
        return <FaClipboardCheck className="w-10 h-10 text-[#2B2B2B] group-hover:text-[#FFCC00] transition-colors duration-300" />;
      default:
        return <FaMedkit className="w-10 h-10 text-[#2B2B2B] group-hover:text-[#FFCC00] transition-colors duration-300" />;
    }
  };
  
  return (
    <motion.div
      className="relative group"
      variants={iconContainerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      {/* Background circle with pulse effect */}
      <motion.div
        className="absolute inset-0 bg-[#FFCC00]/10 rounded-full"
        variants={pulseVariants}
      ></motion.div>
      
      {/* Icon container */}
      <motion.div
        className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-sm"
      >
        {getIconComponent(iconName)}
      </motion.div>
    </motion.div>
  );
};

export default ProcessIcon;