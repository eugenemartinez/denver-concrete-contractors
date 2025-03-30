"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CompanyTimeline = ({ events }) => {
  return (
    <div className="relative">
      {/* Timeline center line with animation */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FFCC00] hidden md:block"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
      
      <div className="space-y-12 relative">
        {events.map((event, index) => (
          <motion.div 
            key={index} 
            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Timeline dot with pulsing animation */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#FFCC00] rounded-full hidden md:block"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.5 }}
            ></motion.div>
            
            {/* Year bubble with animation - positioned closer to timeline */}
            <div className={`md:w-1/2 flex mb-4 md:mb-0 ${index % 2 === 0 ? 'md:justify-start md:pl-8' : 'md:justify-end md:pr-8'}`}>
              <motion.div 
                className="bg-[#FFCC00] text-black font-bold text-xl py-2 px-6 inline-block rounded-xs shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                {event.year}
              </motion.div>
            </div>
            
            {/* Content box with animation */}
            <div className="md:w-1/2 md:px-8">
              <motion.div 
                className="bg-white p-6 shadow-sm border-t-4 border-[#FFCC00] rounded-xs hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <h3 className="font-bold text-xl mb-2 text-[#2B2B2B]">{event.title}</h3>
                <p className="text-[#666666] leading-relaxed">{event.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompanyTimeline;