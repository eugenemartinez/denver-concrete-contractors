"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ServicesHeader from './ServicesHeader';
import ServiceCard from './ServiceCard';
import CustomSolutionCTA from './CustomSolutionCTA';
import { FaHome, FaBuilding, FaCar, FaTree, FaTools, FaPaintBrush } from 'react-icons/fa';

const Services = () => {
  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  // Services data
  const services = [
    {
      id: 1,
      title: 'Residential Concrete',
      description: 'Quality concrete solutions for homeowners, including driveways, patios, walkways, and foundations.',
      iconName: 'FaHome',
      image: 'https://plus.unsplash.com/premium_photo-1681823643449-3c3d99541b0b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: [
        'Driveways and extensions',
        'Patios and outdoor living spaces',
        'Walkways and steps',
        'Basement foundations',
        'Concrete slabs for garages and sheds'
      ]
    },
    {
      id: 2,
      title: 'Commercial Concrete',
      description: 'Durable, high-performance concrete solutions for businesses, warehouses, and commercial properties.',
      iconName: 'FaBuilding',
      image: 'https://images.unsplash.com/photo-1487491424367-7571f9afbb30?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: [
        'Commercial building foundations',
        'Parking lots and structures',
        'Loading docks and ramps',
        'Industrial floor solutions',
        'ADA-compliant sidewalks and curbs'
      ]
    },
    {
      id: 3,
      title: 'Driveway Installation',
      description: 'Expert installation of durable, attractive concrete driveways designed for Denver\'s climate.',
      iconName: 'FaCar',
      image: 'https://images.pexels.com/photos/17395034/pexels-photo-17395034/free-photo-of-construction-worker-working.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Custom designs and layouts',
        'Proper drainage systems',
        'Extended durability in freeze-thaw cycles',
        'Multiple finish options',
        'Superior reinforcement techniques'
      ]
    },
    {
      id: 4,
      title: 'Patio & Outdoor Spaces',
      description: 'Transform your outdoor living area with custom concrete patios, fire pit bases, and more.',
      iconName: 'FaTree',
      image: 'https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: [
        'Custom patio designs',
        'Outdoor kitchen foundations',
        'Fire pit and fireplace bases',
        'Pool decks and surrounds',
        'Integrated seating walls'
      ]
    },
    {
      id: 5,
      title: 'Concrete Repair',
      description: 'Restore your damaged concrete surfaces with our professional repair and resurfacing services.',
      iconName: 'FaTools',
      image: 'https://plus.unsplash.com/premium_photo-1683134669278-179ab90ae04a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: [
        'Crack repair and filling',
        'Surface leveling',
        'Concrete resurfacing',
        'Joint sealing',
        'Foundation repair'
      ]
    },
    {
      id: 6,
      title: 'Decorative Concrete',
      description: 'Enhance your property with decorative concrete finishes, including stamped, stained, and textured options.',
      iconName: 'FaPaintBrush',
      image: 'https://images.pexels.com/photos/6170589/pexels-photo-6170589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Stamped concrete patterns',
        'Stained and colored concrete',
        'Exposed aggregate finishes',
        'Polished concrete',
        'Custom textures and designs'
      ]
    }
  ];

  return (
    <motion.section 
      id="services" 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFCC00]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FFCC00]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative">
        <ServicesHeader />
        
        {/* Services grid with staggered animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CustomSolutionCTA />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;