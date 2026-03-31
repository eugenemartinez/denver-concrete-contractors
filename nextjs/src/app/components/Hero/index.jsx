"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Background from './Background';
import Content from './Content';
import TrustIndicators from './TrustIndicators';
import ContactInfo from './ContactInfo';
import BottomEdge from './BottomEdge';

const Hero = () => {
  // Staggered animation for child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Individual element animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };

  return (
    <section className="relative h-screen min-h-[1000px] max-h-[1500px] w-full overflow-hidden">
      {/* Background with subtle zoom effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Background />
      </motion.div>
      
      {/* Content container with staggered animations */}
      <div className="container mx-auto px-4 relative h-full flex flex-col justify-center pt-24 z-10">
        <motion.div 
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Content />
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="mt-8"
          >
            <TrustIndicators />
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-6"
          >
            <ContactInfo />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated bottom edge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="relative z-10"
      >
        <BottomEdge />
      </motion.div>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 pointer-events-none z-[1]"></div>
    </section>
  );
};

export default Hero;