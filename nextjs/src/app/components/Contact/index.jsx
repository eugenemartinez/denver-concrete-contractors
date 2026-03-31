"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });
  
  // Service options
  const serviceOptions = [
    'Concrete Driveways',
    'Patios & Walkways',
    'Foundation Work',
    'Concrete Repair',
    'Commercial Projects',
    'Other Services'
  ];
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For demo purposes, we'll simulate a successful form submission
    // In a real implementation, you would send this to your backend
    
    // Simulate processing time
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false
        });
      }, 5000);
    }, 800);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    }
  };
  
  return (
    <motion.section 
      id="contact" 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#F5F5F5] opacity-50 -ml-32 -mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#F5F5F5] opacity-50 -mr-48 -mb-48"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants}>
          <ContactHeader />
        </motion.div>
        
        <motion.div 
          className="flex flex-col lg:flex-row gap-8"
          variants={itemVariants}
        >
          {/* Contact Form Column */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
            whileHover={{ 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            transition={{ duration: 0.3 }}
          >
            <ContactForm 
              formData={formData}
              formStatus={formStatus}
              serviceOptions={serviceOptions}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </motion.div>
          
          {/* Contact Info Column */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
            whileHover={{ 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xs shadow-lg border border-gray-200 h-full"
            >
              <ContactInformation />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;