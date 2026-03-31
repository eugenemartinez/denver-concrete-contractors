"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AboutImage from './AboutImage';
import AboutContent from './AboutContent';
import CompanyValues from './CompanyValues';
import CompanyTimeline from './CompanyTimeline';
import CoreValues from './CoreValues';

const About = () => {
  const values = [
    { title: "Fully Licensed & Insured", description: "Operating with all required certifications" },
    { title: "Family Owned & Operated", description: "Local business with deep community ties" },
    { title: "Free Detailed Estimates", description: "Transparent pricing with no hidden fees" },
    { title: "Customer Satisfaction", description: "Hundreds of 5-star reviews from satisfied clients" }
  ];
  
  const timelineEvents = [
    { year: 2003, title: "Company Founded", description: "Denver Concrete Contractors established by the Johnson family." },
    { year: 2008, title: "First Major Commercial Project", description: "Completed our first large-scale commercial foundation project." },
    { year: 2012, title: "Team Expansion", description: "Grew to a team of 25 skilled professionals to meet demand." },
    { year: 2015, title: "Industry Recognition", description: "Received Colorado Contractors Association Award for Excellence." },
    { year: 2020, title: "Technology Adoption", description: "Implemented advanced concrete technology and techniques." },
    { year: 2023, title: "20th Anniversary", description: "Celebrating two decades of quality concrete solutions." }
  ];
  
  const coreValues = [
    {
      title: "Integrity",
      description: "We operate with honesty and transparency in everything we do.",
      icon: "scale-balanced"
    },
    {
      title: "Quality",
      description: "We never compromise on materials, workmanship, or attention to detail.",
      icon: "trophy"
    },
    {
      title: "Reliability",
      description: "We honor our commitments, meet deadlines, and exceed expectations.",
      icon: "clock"
    },
    {
      title: "Innovation",
      description: "We continuously improve our techniques and adopt new technologies.",
      icon: "lightbulb"
    },
    {
      title: "Community",
      description: "We're dedicated to improving the Denver area through our work.",
      icon: "hands-helping"
    }
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F5F5F5] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFCC00]/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFCC00]/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main About Content */}
        <motion.div 
          className="flex flex-col md:flex-row gap-12 items-center mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="w-full md:w-1/2">
            <AboutImage />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/2">
            <AboutContent />
            <CompanyValues values={values} />
          </motion.div>
        </motion.div>
        
        {/* Company Timeline */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-2">Our Journey</h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Building a legacy of excellence in Denver concrete construction since 2003
            </p>
            <motion.div 
              className="w-24 h-2 bg-[#FFCC00] mx-auto mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.div>
          </motion.div>
          <CompanyTimeline events={timelineEvents} />
        </motion.div>
        
        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <CoreValues values={coreValues} />
        </motion.div>
      </div>
    </section>
  );
};

export default About;