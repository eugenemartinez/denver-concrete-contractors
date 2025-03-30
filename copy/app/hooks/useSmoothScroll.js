"use client";

import { useEffect } from 'react';

export const useSmoothScroll = (offset = 80) => {
  useEffect(() => {
    // Handler for click events
    const handleClick = (event) => {
      // Check if the clicked element is an anchor with a hash
      const isHashLink = (element) => {
        return (
          element.tagName === 'A' && 
          element.getAttribute('href') && 
          element.getAttribute('href').startsWith('#')
        );
      };
      
      // Find the closest hash link ancestor (if any)
      let target = event.target;
      while (target && !isHashLink(target)) {
        if (target.parentElement === document.body) break;
        target = target.parentElement;
      }
      
      // If we found a hash link
      if (target && isHashLink(target)) {
        const hash = target.getAttribute('href');
        
        // If it's just "#" (to the top), use special handling
        if (hash === '#') {
          event.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          // Optionally update the URL
          if (window.history && window.history.pushState) {
            history.pushState('', document.title, window.location.pathname);
          }
          return;
        }
        
        // For other hash links
        const element = document.querySelector(hash);
        if (element) {
          event.preventDefault();
          
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Update URL without reload
          if (window.history && window.history.pushState) {
            history.pushState(null, null, hash);
          } else {
            window.location.hash = hash;
          }
        }
      }
    };
    
    // Also handle hash changes in URL directly
    const handleHashChange = () => {
      if (window.location.hash) {
        const hash = window.location.hash;
        const element = document.querySelector(hash);
        
        if (element) {
          setTimeout(() => {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 0);
        }
      }
    };
    
    // Add event listeners
    document.addEventListener('click', handleClick);
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial page load with hash
    if (window.location.hash) {
      setTimeout(handleHashChange, 0);
    }
    
    // Clean up
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [offset]);
};