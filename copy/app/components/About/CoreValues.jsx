"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaTrophy, FaClock, FaLightbulb, FaHandsHelping } from 'react-icons/fa';

const CoreValues = ({ values }) => {
  // Map icon names to actual icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'scale-balanced': return <FaBalanceScale className="text-[#FFCC00] text-4xl" />;
      case 'trophy': return <FaTrophy className="text-[#FFCC00] text-4xl" />;
      case 'clock': return <FaClock className="text-[#FFCC00] text-4xl" />;
      case 'lightbulb': return <FaLightbulb className="text-[#FFCC00] text-4xl" />;
      case 'hands-helping': return <FaHandsHelping className="text-[#FFCC00] text-4xl" />;
      default: return <FaBalanceScale className="text-[#FFCC00] text-4xl" />;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div>
      <motion.div 
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={titleVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-3">Our Core Values</h2>
        <p className="text-lg text-[#666666] max-w-2xl mx-auto">
          The principles that guide our work and customer relationships
        </p>
        <motion.div 
          className="w-24 h-2 bg-[#FFCC00] mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        ></motion.div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {values.map((value, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-sm text-center flex flex-col items-center shadow-sm hover:shadow-lg transition-all duration-300 border-b-4 border-[#FFCC00]"
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
            }}
          >
            <motion.div 
              className="mb-5 w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(255, 204, 0, 0.1)" }}
              whileHover={{ 
                scale: 1.1,
              }}
              animate={{ 
                backgroundColor: "rgba(255, 204, 0, 0.1)" 
              }}
              transition={{
                backgroundColor: { duration: 0.3 }
              }}
            >
              {getIcon(value.icon)}
            </motion.div>
            <h3 className="font-bold text-xl mb-3 text-[#2B2B2B]">{value.title}</h3>
            <p className="text-[#666666] leading-relaxed">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CoreValues;