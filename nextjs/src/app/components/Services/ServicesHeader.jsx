"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../UI/SectionHeader';

const ServicesHeader = () => {
  return (
    <div className="mb-16">
      {/* Subtle pre-title accent */}
      <motion.p
        className="uppercase text-sm tracking-wider text-[#FFCC00] mb-2 font-semibold text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Expert Concrete Solutions
      </motion.p>
      
      {/* Using the reusable SectionHeader component */}
      <SectionHeader 
        title="Our Concrete Services"
        subtitle="Professional concrete solutions tailored for residential and commercial projects throughout the Denver metro area, built to last in Colorado's unique climate."
        align="center"
        underlineColor="#FFCC00"
        underlineWidth={120}
        titleSize="text-3xl md:text-5xl"
        className="mt-0" // Override default margin top since we have the pre-title
        showDots={true}  // Changed from false to true to show the dots
      />
    </div>
  );
};

export default ServicesHeader;