"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '../common/Logo';
import { FaPhone } from 'react-icons/fa';
import Button from '../UI/Button';
import { useActiveSection } from '../../hooks/useActiveSection';

const MainNavigation = ({ 
  isScrolled, 
  utilityBarOpen, 
  mobileMenuOpen, 
  setMobileMenuOpen,
  navLinks
}) => {
  const { isLinkActive } = useActiveSection(navLinks);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2 top-0' 
          : utilityBarOpen ? 'bg-white py-4 top-12' : 'bg-white py-4 top-0'
      }`}
      id="top"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with subtle animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                
                return (
                  <motion.li 
                    key={link.name}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href}
                      className={`font-medium relative py-2 group ${
                        active ? 'text-[#FFCC00]' : 'text-[#2B2B2B] hover:text-[#FFCC00]'
                      } transition-colors`}
                    >
                      {link.name}
                      <span 
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#FFCC00] transition-all duration-300 ${
                          active ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            
            {/* CTA Button with enhanced hover effect */}
            <div className="ml-8">
              <Button.CTA
                href="#contact" 
                size="md"
              >
                Free Estimate
              </Button.CTA>
            </div>
          </nav>
          
          {/* Mobile Controls with improved visibility */}
          <div className="md:hidden flex items-center">
            {/* Phone icon for mobile - enhanced */}
            <motion.a 
              href="tel:3035551234" 
              className="p-2 mr-2 text-[#2B2B2B] hover:bg-[#FFCC00] hover:text-black rounded transition-colors"
              aria-label="Call us"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPhone />
            </motion.a>
            
            {/* Mobile menu button - enhanced */}
            <motion.button 
              className="p-2 text-[#2B2B2B] hover:bg-[#FFCC00] hover:text-black rounded transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;