"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn 
} from 'react-icons/fa';

const ContactInformation = () => {
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
    hidden: { opacity: 0, y: 5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="flex-1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3 
        className="text-xl font-bold text-[#2B2B2B] mb-4"
        variants={itemVariants}
      >
        Contact Information
      </motion.h3>
      
      <motion.div className="space-y-5" variants={containerVariants}>
        <motion.div 
          className="flex items-center"
          variants={itemVariants}
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="text-[#FFCC00] mr-3 flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <FaMapMarkerAlt size={18} />
          </motion.div>
          <div className="flex items-center">
            <span className="font-medium text-[#2B2B2B] mr-2">Address:</span>
            <span className="text-[#444444]">1234 Concrete Ave, Denver, CO 80202</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-center"
          variants={itemVariants}
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="text-[#FFCC00] mr-3 flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <FaPhone size={18} />
          </motion.div>
          <div className="flex items-center">
            <span className="font-medium text-[#2B2B2B] mr-2">Phone:</span>
            <span className="text-[#444444]">(303) 555-1234</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-center"
          variants={itemVariants}
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="text-[#FFCC00] mr-3 flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <FaEnvelope size={18} />
          </motion.div>
          <div className="flex items-center">
            <span className="font-medium text-[#2B2B2B] mr-2">Email:</span>
            <span className="text-[#444444]">info@denverconcretecontractors.com</span>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Integrated Business Hours */}
      <motion.div 
        className="mt-8 pt-6 border-t border-gray-200"
        variants={containerVariants}
      >
        <motion.h3 
          className="text-xl font-bold text-[#2B2B2B] mb-4 flex items-center"
          variants={itemVariants}
        >
          <motion.div 
            className="text-[#FFCC00] mr-2"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <FaClock size={18} />
          </motion.div>
          Business Hours
        </motion.h3>
        
        <motion.div className="space-y-3" variants={containerVariants}>
          <motion.div 
            className="flex items-center" 
            variants={itemVariants}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-medium text-[#444444] w-35">Monday - Friday:</span>
            <span className="text-[#444444]">7:00 AM - 6:00 PM</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center" 
            variants={itemVariants}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-medium text-[#444444] w-35">Saturday:</span>
            <span className="text-[#444444]">8:00 AM - 3:00 PM</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center" 
            variants={itemVariants}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-medium text-[#444444] w-35">Sunday:</span>
            <span className="text-[#444444]">Closed</span>
          </motion.div>
        </motion.div>
        
        {/* Emergency note */}
        <motion.p 
          className="mt-4 text-sm italic text-[#444444] bg-[#FFCC00]/10 p-3 rounded-md"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <strong>Emergency service</strong> available 24/7 for existing customers.
        </motion.p>
      </motion.div>
      
      {/* Social Media Links */}
      <motion.div 
        className="mt-6 flex space-x-4"
        variants={containerVariants}
      >
        <motion.a 
          href="#facebook" 
          className="text-[#444444] hover:text-[#FFCC00]"
          variants={itemVariants}
          whileHover={{ y: -3, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          aria-label="Visit our Facebook page"
        >
          <motion.div 
            className="w-8 h-8 bg-[#F5F5F5] rounded-full flex items-center justify-center shadow-sm"
            whileHover={{ backgroundColor: "#FFCC00", color: "#000000" }}
            transition={{ duration: 0.2 }}
          >
            <FaFacebookF size={16} />
          </motion.div>
        </motion.a>
        
        <motion.a 
          href="#twitter" 
          className="text-[#444444] hover:text-[#FFCC00]"
          variants={itemVariants}
          whileHover={{ y: -3, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          aria-label="Visit our Twitter page"
        >
          <motion.div 
            className="w-8 h-8 bg-[#F5F5F5] rounded-full flex items-center justify-center shadow-sm"
            whileHover={{ backgroundColor: "#FFCC00", color: "#000000" }}
            transition={{ duration: 0.2 }}
          >
            <FaTwitter size={16} />
          </motion.div>
        </motion.a>
        
        <motion.a 
          href="#instagram" 
          className="text-[#444444] hover:text-[#FFCC00]"
          variants={itemVariants}
          whileHover={{ y: -3, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          aria-label="Visit our Instagram page"
        >
          <motion.div 
            className="w-8 h-8 bg-[#F5F5F5] rounded-full flex items-center justify-center shadow-sm"
            whileHover={{ backgroundColor: "#FFCC00", color: "#000000" }}
            transition={{ duration: 0.2 }}
          >
            <FaInstagram size={16} />
          </motion.div>
        </motion.a>
        
        <motion.a 
          href="#linkedin" 
          className="text-[#444444] hover:text-[#FFCC00]"
          variants={itemVariants}
          whileHover={{ y: -3, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          aria-label="Visit our LinkedIn page"
        >
          <motion.div 
            className="w-8 h-8 bg-[#F5F5F5] rounded-full flex items-center justify-center shadow-sm"
            whileHover={{ backgroundColor: "#FFCC00", color: "#000000" }}
            transition={{ duration: 0.2 }}
          >
            <FaLinkedinIn size={16} />
          </motion.div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ContactInformation;