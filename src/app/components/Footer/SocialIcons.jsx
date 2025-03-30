"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn 
} from 'react-icons/fa';

const SocialIcons = () => {
  // Social media platforms with their respective icons
  const socialPlatforms = [
    { name: 'facebook', icon: <FaFacebook className="text-xl" />, url: 'https://www.facebook.com/denverconcretecontractors' },
    { name: 'twitter', icon: <FaTwitter className="text-xl" />, url: 'https://www.twitter.com/denverconcretecontractors' },
    { name: 'instagram', icon: <FaInstagram className="text-xl" />, url: 'https://www.instagram.com/denverconcretecontractors' },
    { name: 'linkedin', icon: <FaLinkedinIn className="text-xl" />, url: 'https://www.linkedin.com/company/denverconcretecontractors' },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  return (
    <motion.div 
      className="flex items-center space-x-4 mt-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialPlatforms.map((platform, index) => (
        <motion.a 
          key={platform.name}
          variants={itemVariants}
          whileHover={{ 
            y: -5, 
            backgroundColor: "#FFCC00", 
            color: "#000000",
            rotate: [0, -5, 5, -3, 3, 0],
            transition: { duration: 0.4, ease: "easeOut" } 
          }}
          whileTap={{ scale: 0.9 }}
          href={platform.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-[#3A3A3A] text-white rounded-xs shadow-md transition-all"
          aria-label={`Visit our ${platform.name} page`}
          custom={index}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 0.5 + (index * 0.1), 
              type: "spring", 
              stiffness: 300 
            }}
          >
            {platform.icon}
          </motion.div>
        </motion.a>
      ))}

      {/* Connect text indicator */}
      <motion.span 
        className="text-sm text-gray-400 ml-1 hidden md:inline-block"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      >
        Connect with us
      </motion.span>
    </motion.div>
  );
};

export default SocialIcons;