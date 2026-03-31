"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ index, question, answer, isOpen, toggleFAQ }) => {
  return (
    <motion.div 
      className="border-b border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      <motion.button
        className="flex justify-between items-center w-full py-5 px-6 text-left focus:outline-none group cursor-pointer"
        onClick={() => toggleFAQ(index)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        whileHover={{ backgroundColor: "#f9f9f9" }}
        transition={{ duration: 0.2 }}
      >
        <motion.span 
          className="text-xl font-medium text-[#2B2B2B] group-hover:text-[#000000]"
          animate={{ color: isOpen ? "#000000" : "#2B2B2B" }}
          transition={{ duration: 0.2 }}
        >
          {question}
        </motion.span>
        <motion.div 
          className={`flex-shrink-0 ml-4 w-6 h-6 relative ${isOpen ? 'text-[#FFCC00]' : 'text-[#2B2B2B]'}`}
          animate={{ color: isOpen ? "#FFCC00" : "#2B2B2B", rotate: isOpen ? 180 : 0 }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          {/* Plus/minus icon */}
          <span className="block absolute top-1/2 left-0 right-0 h-0.5 bg-current transform -translate-y-1/2"></span>
          <motion.span 
            className="block absolute top-0 bottom-0 left-1/2 w-0.5 bg-current transform -translate-x-1/2"
            animate={{ scaleY: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </motion.div>
      </motion.button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <motion.div 
              className="px-2 pr-10 text-[#666666] pb-5"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p>{answer}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;