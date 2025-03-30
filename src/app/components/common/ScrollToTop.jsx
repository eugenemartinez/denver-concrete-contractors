"use client";

import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  // Enhanced scroll to top function that uses the same animation technique
  // as our SmoothScrollPolyfill component
  const scrollToTop = () => {
    // Get current position
    const startPosition = window.pageYOffset || document.documentElement.scrollTop;
    const duration = 500; // Duration in ms
    
    // Don't do anything if already at top
    if (startPosition === 0) return;
    
    let startTime = null;
    
    // Animation function using requestAnimationFrame
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for natural movement - same as in SmoothScrollPolyfill
      const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const ease = easeInOutQuad(progress);
      
      // Scroll to calculated position
      window.scrollTo(0, startPosition * (1 - ease));
      
      // Continue animation if not finished
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    // Start the animation
    requestAnimationFrame(animation);
    
    // Update URL to remove hash if present
    if (window.location.hash && window.history && window.history.pushState) {
      window.history.pushState("", document.title, window.location.pathname);
    }
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-[#FFCC00] hover:bg-[#2B2B2B] hover:text-white text-black flex items-center justify-center transition-colors shadow-lg rounded-xs cursor-pointer"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;