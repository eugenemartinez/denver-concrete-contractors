"use client";

import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        scrollToTopBtn.classList.add('opacity-100', 'visible');
      } else {
        scrollToTopBtn.classList.add('opacity-0', 'invisible');
        scrollToTopBtn.classList.remove('opacity-100', 'visible');
      }
    };
    
    const handleClick = (e) => {
      e.preventDefault();
      
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    scrollToTopBtn.addEventListener('click', handleClick);
    
    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollToTopBtn.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div id="scroll-to-top" className="fixed bottom-6 right-6 z-50 opacity-0 invisible transition-all duration-300">
      <button
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