"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 shadow-sm cursor-pointer ${
            activeCategory === category 
              ? 'bg-[#FFCC00] text-black ring-2 ring-[#FFCC00]' 
              : 'bg-white text-[#666666] hover:bg-gray-100 hover:shadow'
          }`}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          layout
        >
          {activeCategory === category && (
            <motion.span
              className="absolute inset-0 rounded-full"
              layoutId="activeCategoryBackground"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;