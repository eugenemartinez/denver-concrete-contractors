"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutContent = () => {
  // Animation variants for staggered paragraph reveals
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      {/* Section heading with animated accent line */}
      <div className="mb-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Denver Concrete Contractors
        </motion.h2>
        <motion.div 
          className="h-2 bg-[#FFCC00]"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        ></motion.div>
      </div>
      
      <motion.h3 
        className="text-xl md:text-2xl font-semibold text-[#666666] mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Over 20 Years of Excellence in Concrete Construction
      </motion.h3>
      
      <motion.div 
        className="space-y-4 text-[#2B2B2B]"
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={paragraphVariants}>
          Denver Concrete Contractors has been delivering high-quality concrete solutions throughout the Denver metropolitan area since 2003. Our team of skilled professionals brings decades of combined experience to every project, ensuring precision, durability, and superior craftsmanship.
        </motion.p>
        
        <motion.p variants={paragraphVariants}>
          What sets us apart is our unwavering commitment to quality and customer satisfaction. We use only premium materials and advanced techniques to create concrete structures that withstand Colorado's challenging climate while maintaining their aesthetic appeal for years to come.
        </motion.p>
        
        <motion.p variants={paragraphVariants}>
          From residential driveways and patios to commercial foundations and industrial flooring, we approach each project with the same level of dedication and attention to detail. Our reputation is built on reliability, transparency, and exceptional results.
        </motion.p>
      </motion.div>
    </>
  );
};

export default AboutContent;