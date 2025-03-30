"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ 
  title, 
  subtitle, 
  align = "center", 
  underlineColor = "#FFCC00",
  textColor = "#2B2B2B",
  subtitleColor = "#666666", 
  showDots = true,
  className = "",
  underlineWidth = 96, // in pixels
  titleSize = "text-3xl md:text-4xl"
}) => {
  
  // Alignment classes
  const alignmentClasses = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto"
  };

  // Alignment values for the underline
  const underlineAlignment = {
    center: "mx-auto",
    left: "",
    right: "ml-auto"
  };
  
  return (
    <motion.div 
      className={`mb-12 ${alignmentClasses[align]} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className={`${titleSize} font-bold mb-2`}
        style={{ color: textColor }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-lg max-w-2xl mx-auto"
          style={{ color: subtitleColor }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        className={`h-2 ${underlineAlignment[align]} mt-4`}
        style={{ 
          backgroundColor: underlineColor,
          width: `${underlineWidth}px` 
        }}
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: underlineWidth, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          delay: 0.4, 
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }}
      />
      
      {showDots && (
        <motion.div 
          className={`flex gap-1 mt-2 ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i}
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: underlineColor }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.8 + (i * 0.1), 
                type: "spring",
                stiffness: 300,
                damping: 10
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SectionHeader;