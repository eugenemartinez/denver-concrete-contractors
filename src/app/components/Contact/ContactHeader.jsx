"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import SectionHeader from '../UI/SectionHeader';

const ContactHeader = () => {
  // Custom title with phone icon
  const customTitle = (
    <motion.span
      className="inline-flex items-center"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="text-[#FFCC00] mr-2"
        initial={{ rotate: 0 }}
        whileInView={{ rotate: [0, -10, 10, -10, 10, 0] }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <FaPhoneAlt />
      </motion.div>
      Contact Us
    </motion.span>
  );

  return (
    <SectionHeader 
      title={customTitle}
      subtitle="Ready to start your concrete project? Contact us today for a free estimate or to discuss your concrete needs."
      align="center"
      underlineColor="#FFCC00"
      underlineWidth={96}
      textColor="#2B2B2B"
      subtitleColor="#666666"
      showDots={true}
      className="mb-12"
      titleSize="text-3xl md:text-4xl"
    />
  );
};

export default ContactHeader;