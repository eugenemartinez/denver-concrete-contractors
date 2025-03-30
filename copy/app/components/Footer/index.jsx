"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CompanyInfo from './CompanyInfo';
import QuickLinks from './QuickLinks';
import ServicesLinks from './ServicesLinks';
import ContactInfo from './ContactInfo';
import Divider from './Divider';
import Copyright from './Copyright';

const Footer = () => {
  // Quick links data
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faqs' }
  ];
  
  // Services data
  const services = [
    'Concrete Driveways',
    'Patios & Walkways',
    'Foundation Work',
    'Concrete Repair',
    'Commercial Projects',
    'Decorative Concrete'
  ];
  
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };
  
  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-[#2B2B2B] text-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-[#FFCC00] via-[#2B2B2B] to-[#2B2B2B]"></div>
      
      {/* Main footer content */}
      <motion.div 
        className="container mx-auto px-4 pt-16 pb-12"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo and company info */}
          <motion.div 
            className="flex flex-col h-full"
            variants={columnVariants}
          >
            <CompanyInfo />
          </motion.div>
          
          {/* Column 2: Quick Links */}
          <motion.div 
            className="flex flex-col h-full"
            variants={columnVariants}
          >
            <QuickLinks links={quickLinks} />
          </motion.div>
          
          {/* Column 3: Services */}
          <motion.div 
            className="flex flex-col h-full"
            variants={columnVariants}
          >
            <ServicesLinks services={services} />
          </motion.div>
          
          {/* Column 4: Contact Info */}
          <motion.div 
            className="flex flex-col h-full"
            variants={columnVariants}
          >
            <ContactInfo />
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Yellow construction divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Divider />
      </motion.div>
      
      {/* Copyright bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Copyright />
      </motion.div>
    </footer>
  );
};

export default Footer;