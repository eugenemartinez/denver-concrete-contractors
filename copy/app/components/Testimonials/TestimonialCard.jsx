"use client";

import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import StarRating from './StarRating';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-white p-8 md:p-12 shadow-lg rounded-xs overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Yellow accent at top */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1 bg-[#FFCC00]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Testimonial image and info */}
        <motion.div 
          className="w-full md:w-1/3 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-200 shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            />
          </motion.div>
          
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-[#2B2B2B]">
              {testimonial.name}
            </h3>
            <p className="text-[#666666]">
              {testimonial.location}
            </p>
            <div className="flex items-center justify-center md:justify-start mt-2">
              <StarRating rating={testimonial.rating} />
            </div>
            <motion.div 
              className="mt-2 inline-block bg-[#F5F5F5] px-3 py-1 text-sm text-[#666666] rounded"
              whileHover={{ backgroundColor: "#FFCC00/10", color: "#2B2B2B" }}
              transition={{ duration: 0.3 }}
            >
              {testimonial.project}
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Testimonial content */}
        <motion.div 
          className="w-full md:w-2/3 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 0.8, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaQuoteRight className="absolute top-0 right-0 text-4xl text-[#F5F5F5]" />
          </motion.div>
          
          <motion.div 
            className="border-l-4 border-[#FFCC00] pl-6 py-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.p 
              className="text-[#666666] italic mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              "{testimonial.text}"
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;