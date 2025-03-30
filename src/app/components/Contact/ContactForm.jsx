"use client";

import React from 'react';
import { motion } from 'framer-motion';
import FormStatusMessage from './FormStatusMessage';
import Button from '../UI/Button';

const ContactForm = ({ formData, formStatus, serviceOptions, handleChange, handleSubmit }) => {
  // Animation variants
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div 
      className="bg-white p-6 md:p-8 rounded-xs shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-full h-1 bg-[#FFCC00] rounded-full mb-6"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Centered title */}
      <motion.h3 
        className="text-2xl font-bold text-[#2B2B2B] mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get A Free Estimate
      </motion.h3>
      
      <FormStatusMessage formStatus={formStatus} />
      
      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-5"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Form fields remain unchanged */}
        <motion.div variants={itemVariants}>
          <label htmlFor="name" className="block text-[#2B2B2B] font-medium mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <motion.input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all duration-200"
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-[#2B2B2B] font-medium mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all duration-200"
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="phone" className="block text-[#2B2B2B] font-medium mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <motion.input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all duration-200"
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <label htmlFor="service" className="block text-[#2B2B2B] font-medium mb-1">
            Service Interested In
          </label>
          <motion.select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all duration-200 bg-white"
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </motion.select>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <label htmlFor="message" className="block text-[#2B2B2B] font-medium mb-1">
            Project Details
          </label>
          <motion.textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all duration-200"
            placeholder="Tell us about your project..."
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          ></motion.textarea>
        </motion.div>
        
        {/* Centered submit button */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <Button.CTA
            type="submit"
            size="lg"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            }
            iconPosition="right"
          >
            Submit Request
          </Button.CTA>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;