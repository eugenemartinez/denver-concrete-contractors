"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Divider = () => {
  return (
    <div className="relative py-2 overflow-hidden">
      {/* Main yellow divider */}
      <motion.div 
        className="h-2 bg-[#FFCC00]"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
};

export default Divider;