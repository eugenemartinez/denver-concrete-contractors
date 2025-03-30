"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialsHeader from './TestimonialsHeader';
import TestimonialCarousel from './TestimonialCarousel';
import ReviewStats from './ReviewStats';

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Michael Johnson',
      location: 'Denver, CO',
      rating: 5,
      text: "Denver Concrete Contractors transformed our cracked, aging driveway into a beautiful, durable surface that has dramatically improved our home's curb appeal. Their attention to detail and professional approach made the entire process seamless.",
      project: 'Driveway Replacement',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      location: 'Lakewood, CO',
      rating: 5,
      text: 'After getting multiple quotes, we chose Denver Concrete Contractors for our backyard patio project. They delivered exceptional quality within our budget and completed the work ahead of schedule. The stamped concrete pattern looks amazing!',
      project: 'Decorative Patio Installation',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Robert Thompson',
      location: 'Aurora, CO',
      rating: 5,
      text: "As a commercial property manager, I've worked with many contractors over the years. Denver Concrete Contractors stands out for their reliability, quality workmanship, and clear communication. They've become our go-to for all concrete needs.",
      project: 'Commercial Parking Lot',
      image: 'https://randomuser.me/api/portraits/men/55.jpg'
    },
    {
      id: 4,
      name: 'Jennifer Williams',
      location: 'Centennial, CO',
      rating: 5,
      text: 'The team fixed our sinking foundation with minimal disruption to our home life. They were professional, knowledgeable, and took the time to explain the entire process. We feel secure knowing our home is on solid ground again.',
      project: 'Foundation Repair',
      image: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    {
      id: 5,
      name: 'David Garcia',
      location: 'Westminster, CO',
      rating: 5,
      text: 'From the initial estimate to the final walkthrough, Denver Concrete Contractors exhibited professionalism and craftsmanship. Our new walkway and steps are not only functional but have become a design feature of our front yard.',
      project: 'Walkway and Steps',
      image: 'https://randomuser.me/api/portraits/men/71.jpg'
    }
  ];

  // State for current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("next");

  // Handle navigation
  const navigate = (direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSlideDirection(direction);
    
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
    
    // Reset animation flag after transition completes
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const autoAdvanceInterval = setInterval(() => {
      navigate('next');
    }, 8000); // Change testimonial every 8 seconds
    
    return () => clearInterval(autoAdvanceInterval);
  }, []);

  // Background decorative elements
  const decorativeElements = (
    <>
      <motion.div 
        className="absolute top-20 right-0 w-72 h-72 bg-[#FFCC00]/5 rounded-full -mr-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div 
        className="absolute bottom-20 left-0 w-96 h-96 bg-[#FFCC00]/5 rounded-full -ml-48"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
    </>
  );

  return (
    <motion.section 
      id="testimonials" 
      className="py-16 md:py-24 bg-[#F5F5F5] relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Yellow construction accent */}
      <motion.div 
        className="absolute top-0 left-0 w-0 h-2 bg-[#FFCC00]"
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {decorativeElements}
      
      <div className="container mx-auto px-4 relative z-10">
        <TestimonialsHeader />
        
        <AnimatePresence mode="wait" initial={false}>
          <TestimonialCarousel 
            key={currentIndex}
            testimonial={testimonials[currentIndex]} 
            currentIndex={currentIndex}
            totalCount={testimonials.length}
            navigate={navigate}
            isAnimating={isAnimating}
            slideDirection={slideDirection}
          />
        </AnimatePresence>
        
        <ReviewStats />
      </div>
    </motion.section>
  );
};

export default Testimonials;