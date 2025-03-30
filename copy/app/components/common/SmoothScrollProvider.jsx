"use client";

import { useEffect } from 'react';

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const offset = 80; // Adjust based on your header height
    
    // Auto-detect sections and add IDs if missing
    const initializeSections = () => {
      // Common section components in your app
      const sectionNames = ['hero', 'services', 'about', 'projects', 'process', 
                           'testimonials', 'faqs', 'contact', 'cta', 'service-areas'];
      
      // Find top-level sections that might need IDs
      const possibleSections = Array.from(document.querySelectorAll('main > div, main > section'));
      
      // Match sections with expected IDs
      sectionNames.forEach((name, index) => {
        // Try to find existing section with this ID
        let section = document.getElementById(name);
        
        // If no section with this ID exists yet but we have a candidate section
        if (!section && index < possibleSections.length) {
          // For safety, only add ID if the section doesn't already have one
          if (!possibleSections[index].id) {
            possibleSections[index].id = name;
            console.log(`Added ID "${name}" to section`, possibleSections[index]);
          }
        }
      });
    };
    
    // Handle click events on hash links
    const handleClick = (event) => {
      // Find if the click was on or inside a hash link
      const findHashLink = (element) => {
        if (!element || element === document.body) return null;
        
        if (element.tagName === 'A' && 
            element.getAttribute('href') && 
            element.getAttribute('href').startsWith('#')) {
          return element;
        }
        
        return findHashLink(element.parentElement);
      };
      
      const link = findHashLink(event.target);
      if (!link) return;
      
      const hash = link.getAttribute('href');
      event.preventDefault();
      
      // Handle scroll to top
      if (hash === '#' || hash === '#top') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      // Find target element (remove # symbol)
      const targetId = hash.substring(1);
      
      // Try to find by ID
      let targetElement = document.getElementById(targetId);
      
      // If not found by ID, try alternate methods
      if (!targetElement) {
        // Try to find section by component name
        const possibleSections = Array.from(document.querySelectorAll('main > div, main > section'));
        const index = ['hero', 'services', 'about', 'projects', 'process', 
                       'testimonials', 'faqs', 'contact', 'cta', 'service-areas'].indexOf(targetId);
        
        if (index >= 0 && index < possibleSections.length) {
          targetElement = possibleSections[index];
          // Add the ID for future reference
          targetElement.id = targetId;
        }
      }
      
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL
        history.pushState(null, null, hash);
      }
    };
    
    // Initialize sections when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeSections);
    } else {
      initializeSections();
    }
    
    // Handle clicks
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('DOMContentLoaded', initializeSections);
    };
  }, []);

  return children;
}