"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServicesLinks = ({ services }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3 
        className="text-lg font-bold mb-4 text-[#FFCC00]"
        variants={itemVariants}
      >
        Our Services
      </motion.h3>
      
      <motion.ul 
        className="space-y-3"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.li 
            key={service}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href="#services"
              className="text-gray-300 hover:text-[#FFCC00] transition-colors duration-200 flex items-center group"
            >
              <motion.div 
                className="w-2 h-2 mr-2 bg-[#FFCC00]/0 group-hover:bg-[#FFCC00] rounded-full transition-colors duration-200"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <span className="relative">
                {service}
                <motion.span 
                  className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#FFCC00]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      

    </motion.div>
  );
};

export default ServicesLinks;