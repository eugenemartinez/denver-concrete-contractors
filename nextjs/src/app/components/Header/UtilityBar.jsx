"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock, FaChevronDown } from 'react-icons/fa';
import ServiceAreasDropdown from './ServiceAreasDropdown';

const UtilityBar = ({ 
  utilityBarOpen, 
  serviceAreasOpen, 
  setServiceAreasOpen, 
  primaryServiceAreas 
}) => {
  // Create a ref for the service areas button
  const serviceAreasBtnRef = useRef(null);
  
  // Fixed toggle function that properly handles the click
  const handleServiceAreasClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setServiceAreasOpen(prevState => !prevState);
  };

  return (
    <AnimatePresence>
      <motion.div 
        className={`bg-[#2B2B2B] text-white overflow-visible z-50 ${
          utilityBarOpen ? 'h-12' : 'h-0'
        }`}
        initial={{ opacity: utilityBarOpen ? 1 : 0, height: utilityBarOpen ? 48 : 0 }}
        animate={{ opacity: utilityBarOpen ? 1 : 0, height: utilityBarOpen ? 48 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="h-12 flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              {/* Service Areas Button and Dropdown */}
              <div className="relative group overflow-visible">
                <motion.button 
                  ref={serviceAreasBtnRef}
                  className="flex items-center text-white hover:text-[#FFCC00] transition-colors"
                  onClick={handleServiceAreasClick}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaMapMarkerAlt className="mr-1" />
                  <span>Service Areas</span>
                  <motion.div
                    animate={{ rotate: serviceAreasOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="ml-1 text-xs" />
                  </motion.div>
                </motion.button>
                
                {/* Service Areas Dropdown with button ref */}
                <ServiceAreasDropdown 
                  isOpen={serviceAreasOpen} 
                  setIsOpen={setServiceAreasOpen}
                  primaryServiceAreas={primaryServiceAreas}
                  triggerButtonRef={serviceAreasBtnRef}
                />
              </div>
              
              {/* Phone Number */}
              <motion.a 
                href="tel:3035551234" 
                className="flex items-center hover:text-[#FFCC00] transition-colors sm:flex"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <FaPhone className="mr-1" />
                <span>(303) 555-1234</span>
              </motion.a>
              
              {/* Business Hours */}
              <div className="hidden md:flex items-center">
                <div className="flex items-center">
                  <FaClock className="mr-1 text-[#FFCC00]" />
                  <span>Mon-Fri: 7am - 6pm</span>
                </div>
              </div>
            </div>
            
            {/* Free Quote Button */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link 
                href="#contact" 
                className="text-xs bg-[#FFCC00] text-black px-4 py-1.5 font-bold uppercase tracking-wider hover:bg-white transition-colors rounded-xs"
              >
                Free Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UtilityBar;