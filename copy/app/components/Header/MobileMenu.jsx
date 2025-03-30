"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa';

const MobileMenu = ({ 
  isOpen, 
  setIsOpen, 
  navLinks,
  primaryServiceAreas
}) => {
  // Create a local state for mobile service areas
  // This prevents conflicts with the desktop dropdown
  const [mobileServiceAreasOpen, setMobileServiceAreasOpen] = useState(false);
  
  // Animation variants
  const menuVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 }
      }
    },
    open: { 
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4 },
        opacity: { duration: 0.3, delay: 0.1 },
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };
  
  const serviceAreasVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 }
      }
    },
    open: { 
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4 },
        opacity: { duration: 0.3 }
      }
    }
  };

  // Function to toggle mobile service areas
  const toggleMobileServiceAreas = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setMobileServiceAreasOpen(!mobileServiceAreasOpen);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden fixed top-[60px] left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="container mx-auto px-4">
            <nav className="py-6">
              <motion.ul className="flex flex-col space-y-5" variants={itemVariants}>
                {navLinks.map((link, index) => (
                  <motion.li key={link.name} variants={itemVariants}>
                    <Link 
                      href={link.href}
                      className="block text-[#2B2B2B] font-medium hover:text-[#FFCC00] transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                
                {/* Service Areas for Mobile - FIXED */}
                <motion.li variants={itemVariants}>
                  <motion.div 
                    className="block text-[#2B2B2B] font-medium cursor-pointer" 
                    onClick={toggleMobileServiceAreas}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between py-1">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-[#FFCC00]" />
                        <span>Service Areas</span>
                      </div>
                      <motion.div
                        animate={{ rotate: mobileServiceAreasOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="text-[#FFCC00]" />
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {mobileServiceAreasOpen && (
                      <motion.div 
                        className="pl-4 mt-2 border-l-2 border-[#FFCC00]"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={serviceAreasVariants}
                      >
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 py-3">
                          {primaryServiceAreas.map((area, index) => (
                            <motion.div 
                              key={index} 
                              className="text-sm text-[#666666] flex items-center"
                              whileHover={{ x: 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <span className="w-1 h-1 bg-[#FFCC00] rounded-full mr-2"></span>
                              {area}
                            </motion.div>
                          ))}
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link 
                            href="#service-areas"
                            className="text-sm text-[#FFCC00] hover:underline flex items-center py-2"
                            onClick={() => {
                              setMobileServiceAreasOpen(false);
                              setIsOpen(false);
                            }}
                          >
                            View All Areas
                            <FaChevronDown className="ml-1 rotate-[-90deg] text-xs" />
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
                
                <motion.li variants={itemVariants} className="pt-2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link 
                      href="#contact" 
                      className="block px-6 py-3 bg-[#FFCC00] text-black font-bold uppercase tracking-wider text-center hover:bg-[#2B2B2B] hover:text-white transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Free Estimate
                    </Link>
                  </motion.div>
                </motion.li>
              </motion.ul>
              
              {/* Business Hours for Mobile */}
              <motion.div 
                className="mt-6 pt-5 border-t border-gray-200 flex items-start text-[#666666]"
                variants={itemVariants}
              >
                <FaClock className="mr-3 text-[#FFCC00] mt-1" />
                <div className="text-sm">
                  <h4 className="font-medium text-[#2B2B2B] mb-1">Business Hours</h4>
                  <div>Mon-Fri: 7am - 6pm</div>
                  <div>Sat: 8am - 4pm</div>
                </div>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;