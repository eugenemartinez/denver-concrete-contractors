"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaRegEye, FaTimes } from 'react-icons/fa';
import ProjectFeatures from './ProjectFeatures';
import ModalPortal from '../common/ModalPortal';

const ProjectModal = ({ project, closeModal, navigateProjects }) => {
  const modalContentRef = useRef(null);
  const scrollPositionRef = useRef(0);

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
      closeModal();
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    // Add event listeners
    document.addEventListener('keydown', handleEscKey);

    // Handle clicks on nav items, logo, and scroll to top button
    const handleGlobalClick = (e) => {
      if (
        e.target.closest('nav') || 
        e.target.closest('[id^="scroll-to-top"]') ||
        e.target.closest('a[href^="#"]') ||
        e.target.closest('.site-logo') ||
        e.target.closest('header a')
      ) {
        closeModal();
      }
    };

    document.addEventListener('click', handleGlobalClick, true);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, [closeModal]);

  // Enhanced scroll prevention
  useEffect(() => {
    // Save the current scroll position
    scrollPositionRef.current = window.scrollY;
    
    // Store all original styles we'll modify
    const originalStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      paddingRight: document.body.style.paddingRight,
      height: document.body.style.height,
      touchAction: document.body.style.touchAction
    };
    
    // Calculate scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // Apply scroll lock styles
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.width = '100%';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.touchAction = 'none'; // Prevents scroll on touch devices
    
    // Prevent touchmove events from propagating
    const preventTouchMove = (e) => {
      // Only prevent default if not inside modal content
      if (!modalContentRef.current?.contains(e.target)) {
        e.preventDefault();
      }
    };
    
    // Add touch event listeners
    document.addEventListener('touchmove', preventTouchMove, { passive: false });
    
    // Cleanup function
    return () => {
      // Restore all original styles
      Object.keys(originalStyles).forEach(key => {
        document.body.style[key] = originalStyles[key];
      });
      
      // Restore scroll position
      window.scrollTo(0, scrollPositionRef.current);
      
      // Remove event listeners
      document.removeEventListener('touchmove', preventTouchMove);
    };
  }, []);

  return (
    <ModalPortal>
      {/* Modal overlay with highest possible z-index */}
      <div 
        className="fixed inset-0" 
        style={{ 
          zIndex: 2147483647 // Maximum z-index value (2^31 - 1)
        }}
      >
        <motion.div 
          className="fixed inset-0 backdrop-blur-md bg-black/70 flex items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          <motion.div 
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-auto relative rounded-lg shadow-2xl"
            ref={modalContentRef}
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring", damping: 25 }}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between bg-[#2B2B2B] text-white p-4 sticky top-0 z-10">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <motion.button 
                onClick={closeModal}
                className="w-8 h-8 flex items-center justify-center hover:text-[#FFCC00] rounded-full"
                aria-label="Close modal"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes size={18} />
              </motion.button>
            </div>
            
            {/* Modal content */}
            <div className="p-0">
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                  priority
                />
                
                {/* Navigation buttons */}
                <motion.button 
                  onClick={() => navigateProjects('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-[#FFCC00] hover:text-black transition-colors"
                  aria-label="Previous project"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaChevronLeft size={18} />
                </motion.button>
                <motion.button 
                  onClick={() => navigateProjects('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-[#FFCC00] hover:text-black transition-colors"
                  aria-label="Next project"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaChevronRight size={18} />
                </motion.button>
              </div>
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h4 className="text-2xl font-bold text-[#2B2B2B]">{project.title}</h4>
                  <span className="px-3 py-1 bg-[#F5F5F5] text-[#666666] text-sm rounded-full inline-block">
                    {project.category}
                  </span>
                </div>
                <p className="text-[#666666] leading-relaxed">{project.description}</p>
                
                {/* Project features */}
                <ProjectFeatures />
                
                {/* CTA */}
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <Link 
                    href="#contact"
                    onClick={closeModal}
                    className="inline-block px-6 py-3 bg-[#FFCC00] text-black font-bold uppercase tracking-wider hover:bg-[#2B2B2B] hover:text-white transition-colors rounded shadow-md"
                  >
                    <span className="flex items-center">
                      <FaRegEye className="mr-2" /> Request Similar Project
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </ModalPortal>
  );
};

export default ProjectModal;