"use client";

import React from 'react';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';

const FAQList = ({ faqItems, openIndex, toggleFAQ }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="max-w-3xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="border-t border-gray-200 bg-white rounded-lg shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {faqItems.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FAQList;