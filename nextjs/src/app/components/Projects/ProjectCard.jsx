"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaSearch, FaAngleRight } from 'react-icons/fa';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      className="group bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 rounded-xs overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      role="button"
      aria-label={`View details of ${project.title}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay with zoom icon */}
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div 
            className="w-14 h-14 rounded-full bg-[#FFCC00] text-black flex items-center justify-center"
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaSearch size={20} />
          </motion.div>
        </motion.div>
      </div>
      
      <div className="p-5 border-t border-gray-100">
        <h3 className="text-lg font-bold text-[#2B2B2B] mb-2 group-hover:text-[#FFCC00] transition-colors duration-300">{project.title}</h3>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[#666666] px-3 py-1 bg-gray-100 rounded-full">{project.category}</span>
          
          <motion.div 
            className="flex items-center text-[#FFCC00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="mr-1 text-sm font-medium">View details</span>
            <FaAngleRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;