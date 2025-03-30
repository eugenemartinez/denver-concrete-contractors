"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Button from '../UI/Button';

const ProcessCTA = () => {
  return (
    <motion.div 
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.p 
        className="text-lg text-[#666666] mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Ready to start your concrete project with our proven process?
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Button.CTA
          size="lg"
          href="#contact"
          icon={<HiArrowRight />}
          iconPosition="right"
        >
          Get Started Today
        </Button.CTA>
      </motion.div>
      
      <motion.div 
        className="mt-8 text-sm text-[#666666] opacity-75"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.75 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        No obligation consultation • Detailed quote within 24 hours
      </motion.div>
    </motion.div>
  );
};

export default ProcessCTA;