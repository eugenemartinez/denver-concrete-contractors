"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import Button from '../UI/Button';

const ProjectsCTA = () => {
  return (
    <motion.div 
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* Using the dark variant since this is on a light background */}
        <Button.CTA
          size="lg"
          href="#contact"
          icon={<HiArrowRight />}
          iconPosition="right"
        >
          Discuss Your Project
        </Button.CTA>
      </motion.div>

      
      
      <motion.p 
        className="text-[#666666] mt-3 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Let's transform your vision into a concrete reality
      </motion.p>
    </motion.div>
  );
};

export default ProjectsCTA;