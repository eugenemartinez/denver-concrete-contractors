"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProcessHeader from './ProcessHeader';
import ProcessSteps from './ProcessSteps';
import ProcessCTA from './ProcessCTA';

const Process = () => {
  // Process steps data
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We begin with a free on-site consultation to understand your concrete needs, assess the location, and discuss design options.',
      iconName: 'FaMedkit'
    },
    {
      number: '02',
      title: 'Estimate & Proposal',
      description: 'We provide a detailed, transparent estimate outlining scope, materials, timeline, and costs with no hidden fees.',
      iconName: 'FaFileAlt'
    },
    {
      number: '03',
      title: 'Design & Planning',
      description: 'Our team creates detailed project plans, obtains necessary permits, and schedules your project for an efficient workflow.',
      iconName: 'FaDraftingCompass'
    },
    {
      number: '04',
      title: 'Site Preparation',
      description: 'We prepare the site by removing existing structures, excavating, and creating proper forms and reinforcement for your concrete.',
      iconName: 'FaTools'
    },
    {
      number: '05',
      title: 'Concrete Pouring',
      description: 'Our skilled team pours and finishes the concrete with precision, ensuring proper curing techniques for maximum durability.',
      iconName: 'FaTruckLoading'
    },
    {
      number: '06',
      title: 'Final Inspection',
      description: 'We conduct a thorough quality check, walking through the completed project with you to ensure everything meets our high standards.',
      iconName: 'FaClipboardCheck'
    }
  ];

  return (
    <motion.section 
      id="process" 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-[#FFCC00]/5 rounded-full translate-x-1/3 -translate-y-1/3"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFCC00]/5 rounded-full -translate-x-1/3 translate-y-1/3"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ProcessHeader />
        <ProcessSteps steps={processSteps} />
        <ProcessCTA />
      </div>
    </motion.section>
  );
};

export default Process;