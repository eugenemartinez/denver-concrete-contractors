"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const ProjectFeatures = ({ features = [
  'Premium materials',
  'Skilled craftsmanship',
  'Timely completion',
  'Weather-resistant finish'
]}) => {
  // Define colors as hex or rgba values which are animatable
  const baseColor = "rgba(255, 204, 0, 0.2)";
  const hoverColor = "rgba(255, 204, 0, 0.3)";
  
  return (
    <motion.div 
      className="mt-6 border-t border-gray-200 pt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h5 className="font-bold text-[#2B2B2B] mb-3">Project Features:</h5>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.4,
              delay: 0.3 + (index * 0.1)
            }}
          >
            <motion.span 
              className="p-1 rounded-full mr-3 flex-shrink-0"
              initial={{ backgroundColor: baseColor }}
              whileHover={{ 
                scale: 1.2, 
                backgroundColor: hoverColor 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }}
            >
              <FaCheck className="text-[#FFCC00] text-sm" />
            </motion.span>
            <span className="text-[#555555]">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectFeatures;