"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useActiveSection = (navLinks) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');
  
  // Track active section based on scroll position for hash links
  useEffect(() => {
    const handleScroll = () => {
      // Only track scroll for section IDs if we're on the main page
      if (pathname !== '/' && !pathname.endsWith('/#')) return;
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      // Special case: Check if scrolled to bottom (for Contact section)
      // This handles when Contact section is the last section and may not fill the entire viewport
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        // Check if there's a Contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          setActiveSection('contact');
          return;
        }
      }
      
      // Otherwise check each section
      let currentSection = '';
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop - 100; // Offset for header
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
          break;
        }
      }
      
      // If no section is found but we're at the bottom, check if contact is the last section
      if (!currentSection && scrollPosition + windowHeight >= documentHeight - 150) {
        const lastSection = sections[sections.length - 1];
        if (lastSection && lastSection.id === 'contact') {
          currentSection = 'contact';
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, activeSection]);
  
  // Check if a link is active
  const isLinkActive = (link) => {
    // For main page link
    if (link.href === '/' && pathname === '/') {
      // Home is active only if we're at the top and no other section is active
      return activeSection === '' || activeSection === 'hero';
    }
    
    // For hash links like #services, #about
    if (link.href.startsWith('#')) {
      const sectionId = link.href.substring(1);
      return activeSection === sectionId;
    }
    
    // For regular page links
    if (!link.href.startsWith('#')) {
      return pathname === link.href || pathname.startsWith(`${link.href}/`);
    }
    
    return false;
  };
  
  return { isLinkActive, activeSection };
};