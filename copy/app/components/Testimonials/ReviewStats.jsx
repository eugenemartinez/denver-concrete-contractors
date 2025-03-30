"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Counter component for animated number counting
const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parse the value to get the numeric part and suffix
  const parseValue = () => {
    // If value contains a slash (like 4.9/5)
    if (value.includes('/')) {
      const [num, denominator] = value.split('/');
      return { number: parseFloat(num), suffix: `/${denominator}` };
    }
    
    // If value ends with a plus sign or percentage
    let suffix = '';
    let numberStr = value;
    
    if (value.endsWith('+')) {
      suffix = '+';
      numberStr = value.slice(0, -1);
    } else if (value.endsWith('%')) {
      suffix = '%';
      numberStr = value.slice(0, -1);
    }
    
    return { number: parseInt(numberStr), suffix };
  };
  
  const { number, suffix } = parseValue();
  
  // Animation to count up
  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // For decimal values (like 4.9), we need to handle differently
      if (Number.isInteger(number)) {
        setCount(Math.floor(progress * number));
      } else {
        // For decimal numbers, show 1 decimal place
        setCount(parseFloat((progress * number).toFixed(1)));
      }
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, number, duration]);
  
  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const ReviewStats = () => {
  // Review statistics
  const stats = [
    { value: '300+', label: 'Satisfied Clients' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '98%', label: 'Recommendation Rate' }
  ];
  
  return (
    <motion.div 
      className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {stats.map((stat, index) => (
        <motion.div 
          key={index} 
          className="bg-white p-6 text-center rounded-xs shadow-md relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
          }}
        >
          {/* Yellow accent bar with animation */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-[#FFCC00]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3 + (0.2 * index),
              ease: "easeOut"
            }}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + (0.2 * index) }}
          >
            <motion.div 
              className="text-4xl font-bold text-[#2B2B2B] mb-2"
              whileHover={{ color: "#FFCC00" }}
              transition={{ duration: 0.3 }}
            >
              <Counter value={stat.value} duration={1.5 + (index * 0.2)} />
            </motion.div>
            <p className="text-[#666666]">{stat.label}</p>
          </motion.div>
          
          {/* Background glow effect on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-[#FFCC00]/10 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ReviewStats;