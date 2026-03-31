"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const CompanyInfo = () => {
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
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div 
      className="space-y-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="flex flex-col">
        <span className="text-xl font-bold text-white leading-tight tracking-wide">
          DENVER CONCRETE
        </span>
        <div className="flex items-center">
          <div className="w-3 h-0.5 bg-[#FFCC00] mr-1"></div>
          <span className="text-sm font-semibold text-gray-300 uppercase leading-tight tracking-widest">
            CONTRACTORS
          </span>
        </div>
      </motion.div>
      
      <motion.p 
        className="text-gray-300 leading-relaxed"
        variants={itemVariants}
      >
        Denver's trusted concrete contractor providing quality residential and commercial concrete services since 2003.
      </motion.p>
      
      <motion.div 
        className="pt-2"
        variants={itemVariants}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5
          }}
        >
          <SocialIcons />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="mt-6 pt-6 border-t border-gray-700"
        variants={itemVariants}
      >
        <motion.p 
          className="flex items-center text-sm text-gray-400"
          whileHover={{ x: 2, color: "#FFCC00" }}
          transition={{ duration: 0.2 }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </motion.svg>
          Licensed & Insured
        </motion.p>
        
        <motion.p 
          className="flex items-center text-sm text-gray-400 mt-3"
          whileHover={{ x: 2, color: "#FFCC00" }}
          transition={{ duration: 0.2 }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </motion.svg>
          20+ Years of Experience
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default CompanyInfo;