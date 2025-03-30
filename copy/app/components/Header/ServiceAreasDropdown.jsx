"use client";

import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const ServiceAreasDropdown = ({ isOpen, setIsOpen, primaryServiceAreas, triggerButtonRef }) => {
  const dropdownRef = useRef(null);
  
  // Position the dropdown correctly
  useEffect(() => {
    if (isOpen && dropdownRef.current && triggerButtonRef && triggerButtonRef.current) {
      const rect = triggerButtonRef.current.getBoundingClientRect();
      dropdownRef.current.style.top = `${rect.bottom + 10}px`;
      dropdownRef.current.style.left = `${rect.left}px`;
    }
  }, [isOpen, triggerButtonRef]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      // Only process if dropdown is open
      if (dropdownRef.current && 
          !dropdownRef.current.contains(event.target) &&
          triggerButtonRef && 
          triggerButtonRef.current && 
          !triggerButtonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    // Add the event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen, triggerButtonRef]);

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 350, damping: 25 }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    }
  };
  
  return (
    <>
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              ref={dropdownRef}
              className="fixed bg-white text-[#2B2B2B] shadow-lg rounded-md border-t-2 border-[#FFCC00] w-72 z-[9999] overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
            >
              {/* Triangle pointer at top */}
              <div 
                className="absolute -top-2 left-5 w-4 h-4 bg-[#FFCC00]" 
                style={{ transform: 'rotate(45deg)' }}
              ></div>
              
              <div className="p-5">
                <h4 className="font-bold text-sm mb-3 flex items-center">
                  <FaMapMarkerAlt className="text-[#FFCC00] mr-2" />
                  Primary Service Areas
                </h4>
                
                <ul className="grid grid-cols-2 gap-2">
                  {primaryServiceAreas.map((area, index) => (
                    <motion.li 
                      key={index} 
                      className="text-xs flex items-center hover:text-[#FFCC00] transition-colors cursor-default"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#FFCC00] mr-1.5 flex-shrink-0"></span>
                      {area}
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <Link 
                      href="#service-areas"
                      className="bg-[#F5F5F5] text-xs font-medium py-1.5 px-3 rounded flex items-center hover:bg-[#FFCC00] hover:text-black transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      View All Service Areas
                      <FaChevronRight className="ml-1.5 text-[8px]" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default ServiceAreasDropdown;