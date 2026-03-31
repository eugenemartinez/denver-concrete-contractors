"use client";

import { useEffect } from 'react';

export default function SmoothScrollPolyfill() {
  useEffect(() => {
    // Check if we need a polyfill
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    
    // Load polyfill for older browsers
    if (!supportsNativeSmoothScroll) {
      import('smoothscroll-polyfill').then(smoothscroll => {
        smoothscroll.polyfill();
        console.log('Smooth scroll polyfill loaded');
      });
    }
    
    // Enhance with a more direct approach for all browsers
    const smoothScroll = (targetElement, duration = 500) => {
      if (!targetElement) return;
      
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const headerOffset = 80; // Adjust based on your header height
      const distance = targetPosition - startPosition - headerOffset;
      
      let startTime = null;
      
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const ease = easeInOutQuad(Math.min(timeElapsed / duration, 1));
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      
      // Easing function
      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }
      
      requestAnimationFrame(animation);
    };
    
    // Override click events on hash links to ensure consistent behavior
    const handleClick = (e) => {
      // Check if click is on a link element or its children
      const link = e.target.closest('a[href]');
      if (!link) return;
      
      const href = link.getAttribute('href');
      
      // Handle home link or logo
      if (href === '/' && window.location.pathname === '/') {
        e.preventDefault();
        smoothScroll(document.body);
        return;
      }
      
      // Handle hash links
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        // Special case for #top or just #
        if (href === '#' || href === '#top') {
          smoothScroll(document.body);
          return;
        }
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          smoothScroll(targetElement);
          
          // Update URL without reloading the page
          if (window.history && window.history.pushState) {
            window.history.pushState(null, '', href);
          }
        } else {
          console.warn(`Element with ID "${targetId}" not found`);
          
          // Fallback to position-based targeting
          const sectionMap = {
            'services': 1,
            'about': 2,
            'process': 3,
            'projects': 4,
            'testimonials': 5,
            'cta': 6,
            'service-areas': 7,
            'faqs': 8,
            'contact': 9
          };
          
          if (sectionMap[targetId] !== undefined) {
            const allSections = document.querySelectorAll('main > *');
            const position = sectionMap[targetId];
            
            if (position < allSections.length) {
              const section = allSections[position];
              smoothScroll(section);
              
              // Update URL
              if (window.history && window.history.pushState) {
                window.history.pushState(null, '', href);
              }
            }
          }
        }
      }
    };
    
    // Add capturing phase to intercept events before they bubble
    document.addEventListener('click', handleClick, { capture: true });
    
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, []);
  
  return null;
}