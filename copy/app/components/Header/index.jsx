"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UtilityBar from './UtilityBar';
import MainNavigation from './MainNavigation';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [utilityBarOpen, setUtilityBarOpen] = useState(true);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);

  // Navigation links - defined here so they can be shared between components
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  // Primary service areas for dropdown
  const primaryServiceAreas = [
    'Denver', 'Aurora', 'Lakewood', 'Arvada', 'Westminster',
    'Thornton', 'Centennial'
  ];

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      setUtilityBarOpen(scrollPosition <= 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for the header container
  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50"
      initial="initial"
      animate="animate"
      variants={headerVariants}
    >
      <AnimatePresence>
        {utilityBarOpen && (
          <UtilityBar 
            utilityBarOpen={utilityBarOpen} 
            serviceAreasOpen={serviceAreasOpen}
            setServiceAreasOpen={setServiceAreasOpen}
            primaryServiceAreas={primaryServiceAreas}
          />
        )}
      </AnimatePresence>
      
      <MainNavigation 
        isScrolled={isScrolled}
        utilityBarOpen={utilityBarOpen}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navLinks={navLinks}
      />
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu 
            isOpen={mobileMenuOpen}
            setIsOpen={setMobileMenuOpen}
            navLinks={navLinks}
            primaryServiceAreas={primaryServiceAreas}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;