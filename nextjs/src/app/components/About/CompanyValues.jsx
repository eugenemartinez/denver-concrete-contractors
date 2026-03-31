"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CompanyValues = ({ values }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {values.map((item, index) => (
        <motion.div 
          key={index} 
          className="border-l-4 border-[#FFCC00] pl-4 py-2 hover:bg-white/50 transition-colors duration-300 rounded-r-sm"
          variants={itemVariants}
          whileHover={{ 
            x: 5, 
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            borderLeftWidth: "6px",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <h4 className="font-bold text-lg text-[#2B2B2B]">{item.title}</h4>
          <p className="text-[#666666] mt-1">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CompanyValues;