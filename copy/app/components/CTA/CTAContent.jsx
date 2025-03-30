"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CTAContent = () => {
  return (
    <>
      <motion.h2 
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Ready to Start Your Concrete Project?
      </motion.h2>
      
      <motion.p 
        className="text-lg text-gray-300 mb-6 md:mb-0"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Contact us today for a free, no-obligation estimate on your residential or commercial concrete needs. 
        Our team is standing by to deliver quality concrete solutions.
        <motion.span
          className="block mt-2 text-white"
          initial={{ opacity: 0, fontWeight: "normal" }}
          whileInView={{ opacity: 1, fontWeight: "medium" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
        </motion.span>
      </motion.p>
    </>
  );
};

export default CTAContent;