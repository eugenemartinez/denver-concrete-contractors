"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProcessIcon from './ProcessIcon';

const ProcessStep = ({ step, index }) => {
  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.15
      }
    }
  };
  
  const numberVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        delay: 0.2 + index * 0.15
      }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        delay: 0.3 + index * 0.15
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 8
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4 + index * 0.15
      }
    }
  };

  return (
    <motion.div 
      className="relative mb-8"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* The connecting line from last step (hidden for first step) */}
      {index > 0 && (
        <motion.div 
          className="absolute top-0 left-0 h-16 w-0.5 bg-gradient-to-b from-transparent to-[#FFCC00]/30 -mt-16 ml-6"
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: "4rem", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        ></motion.div>
      )}

      <div className="flex flex-col md:flex-row bg-white rounded-xs shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Left side - icon only */}
        <div className="bg-[#FFCC00]/10 flex items-center justify-center md:w-1/4">
          <motion.div 
            className="p-6"
            variants={iconVariants}
            whileHover="hover"
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <ProcessIcon iconName={step.iconName} />
            </div>
          </motion.div>
        </div>
        
        {/* Right side - content with number beside title */}
        <div className="p-6 md:p-8 md:w-3/4">
          <div className="flex items-center mb-4">
            <motion.div 
              className="flex-shrink-0 mr-4"
              variants={numberVariants}
            >
              <div className="w-12 h-12 bg-[#FFCC00] rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl font-bold text-black">{step.number}</span>
              </div>
            </motion.div>
            <h3 className="text-xl md:text-2xl font-bold text-[#2B2B2B]">{step.title}</h3>
          </div>
          
          <motion.div
            className="h-0.5 bg-[#FFCC00]/50 mb-4"
            variants={lineVariants}
          ></motion.div>
          
          <p className="text-[#666666] leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessStep;