"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock 
} from 'react-icons/fa';

const ContactInfo = () => {
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
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Contact information with icons
  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-[#FFCC00] text-xl" />,
      content: <>1234 Concrete Ave<br/>Denver, CO 80202</>
    },
    {
      icon: <FaPhone className="text-[#FFCC00] text-xl" />,
      content: "(303) 555-1234"
    },
    {
      icon: <FaEnvelope className="text-[#FFCC00] text-xl" />,
      content: "info@denverconcretecontractors.com"
    },
    {
      icon: <FaClock className="text-[#FFCC00] text-xl" />,
      content: <>Mon-Fri: 7:00 AM - 6:00 PM<br/>Sat: 8:00 AM - 4:00 PM<br/>Sun: Closed</>
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3 
        className="text-lg font-bold mb-4 text-[#FFCC00]"
        variants={itemVariants}
      >
        Contact Us
      </motion.h3>
      
      <motion.ul className="space-y-4" variants={containerVariants}>
        {contactItems.map((item, index) => (
          <motion.li 
            key={index} 
            className="flex items-start group"
            variants={itemVariants}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="mt-1 mr-3 flex-shrink-0"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              {item.icon}
            </motion.div>
            <motion.span 
              className="text-gray-300 group-hover:text-gray-100 transition-colors duration-200"
            >
              {item.content}
            </motion.span>
          </motion.li>
        ))}
      </motion.ul>
      
      <motion.a
        href="#contact"
        className="inline-flex items-center text-[#FFCC00] mt-5 text-sm font-medium border-b border-[#FFCC00] pb-1 hover:border-white hover:text-white transition-colors duration-200"
        variants={itemVariants}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
      </motion.a>
    </motion.div>
  );
};

export default ContactInfo;