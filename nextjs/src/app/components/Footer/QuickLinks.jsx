"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const QuickLinks = ({ links }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3 
        className="text-lg font-bold mb-4 text-[#FFCC00]"
        variants={itemVariants}
      >
        Quick Links
      </motion.h3>
      
      <motion.ul 
        className="space-y-3"
        variants={containerVariants}
      >
        {links.map((link, index) => (
          <motion.li 
            key={link.name}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href={link.href}
              className="text-gray-300 hover:text-[#FFCC00] transition-colors duration-200 flex items-center group"
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-3 w-3 mr-2 text-[#FFCC00] opacity-0 group-hover:opacity-100" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ x: -5 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.2, delay: 0.05 * index }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
              <span className="relative">
                {link.name}
                <motion.span 
                  className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#FFCC00]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default QuickLinks;