"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ServiceAreaHeader from './ServiceAreaHeader';
import ServiceAreaGoogleMap from './ServiceAreaGoogleMap';
import AreasList from './AreasList';
import ServiceAreaCTA from './ServiceAreaCTA';

const ServiceAreas = () => {
  // Primary service areas (Denver metro)
  const primaryAreas = [
    'Denver', 'Aurora', 'Lakewood', 'Arvada', 'Westminster',
    'Thornton', 'Centennial', 'Highlands Ranch', 'Littleton', 'Parker'
  ];
  
  // Extended service areas
  const extendedAreas = [
    'Boulder', 'Broomfield', 'Castle Rock', 'Golden', 'Wheat Ridge',
    'Englewood', 'Greenwood Village', 'Lone Tree', 'Commerce City', 'Brighton'
  ];

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
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.section 
      id="service-areas" 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-20 left-0 w-64 h-64 rounded-full bg-[#F5F5F5] -ml-32 -mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-[#F5F5F5] -mr-48 -mb-48"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
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
        <ServiceAreaHeader />
        
        {/* Service area map and lists - 2 column layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch mt-10">
          {/* Left column - Google Map */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <motion.div 
              className="shadow-lg rounded-xs overflow-hidden border border-gray-200 h-full"
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5
              }}
              transition={{ duration: 0.3 }}
              style={{ minHeight: "400px" }}
            >
              <ServiceAreaGoogleMap />
            </motion.div>
          </motion.div>
          
          {/* Right column - Service areas listing */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-white rounded-xs shadow-lg p-6 border border-gray-200 h-full"
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              transition={{ duration: 0.3 }}
            >
              <AreasList 
                primaryAreas={primaryAreas} 
                extendedAreas={extendedAreas} 
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* CTA at the bottom center */}
        <motion.div 
          className="mt-16 max-w-3xl mx-auto"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
        >
          <ServiceAreaCTA />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ServiceAreas;