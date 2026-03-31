"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Copyright = () => {
  // Legal links
  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Sitemap', href: '/sitemap' }
  ];
  
  const linkVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="bg-black py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <motion.p 
          className="text-gray-400 text-sm text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Denver Concrete Contractors. All rights reserved.
        </motion.p>
        
        <motion.div 
          className="mt-2 md:mt-0 flex flex-wrap justify-center gap-4 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {legalLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
            >
              <Link 
                href={link.href} 
                className="hover:text-[#FFCC00] transition-colors duration-200 relative group"
              >
                <span>{link.name}</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFCC00] group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={linkVariants}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Link 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFCC00] transition-colors duration-200 flex items-center group"
              title="Website developed by Your Agency"
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mr-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </motion.svg>
              <span>Developer</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Copyright;