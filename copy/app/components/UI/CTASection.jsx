"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const CTASection = ({
  message = "Ready to get started with your concrete project?", 
  buttonText = "Contact Us",
  buttonIcon = true,
  buttonHref = "#contact",
  backgroundColor = "#F5F5F5",
  textColor = "#444444",
  size = "default", // 'small', 'default', or 'large'
  className = "",
  buttonVariant = "cta",
  buttonSize = "lg",
  accentLine = false,
  shadow = true,
}) => {
  
  // Size variants
  const sizeClasses = {
    small: "py-6 px-6 max-w-3xl mx-auto",
    default: "py-8 px-8 md:py-10 md:px-10",
    large: "py-10 px-8 md:py-14 md:px-16"
  };
  
  // Text size variants
  const textSizeClasses = {
    small: "text-base",
    default: "text-lg",
    large: "text-xl md:text-2xl"
  };
  
  // Icon for button if enabled
  const icon = buttonIcon ? (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ) : null;
  
  return (
    <motion.div 
      className={`
        text-center rounded-xs
        ${sizeClasses[size] || sizeClasses.default}
        ${shadow ? "shadow-md" : ""}
        border border-gray-100
        ${className}
      `}
      style={{ backgroundColor, color: textColor }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Optional accent line at the top */}
      {accentLine && (
        <div className="w-24 h-1 bg-[#FFCC00] mx-auto -mt-1 mb-6 rounded-full"></div>
      )}
      
      <motion.p 
        className={`${textSizeClasses[size]} mb-6 max-w-2xl mx-auto`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {message}
      </motion.p>
      
      <Button
        variant={buttonVariant}
        size={buttonSize}
        href={buttonHref}
        icon={icon}
        iconPosition="right"
      >
        {buttonText}
      </Button>
    </motion.div>
  );
};

export default CTASection;