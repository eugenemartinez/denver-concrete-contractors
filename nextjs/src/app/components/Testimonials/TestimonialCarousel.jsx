import React from 'react';
import TestimonialCard from './TestimonialCard';
import TestimonialNavigation from './TestimonialNavigation';

const TestimonialCarousel = ({ testimonial, currentIndex, totalCount, navigate, isAnimating }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <TestimonialCard testimonial={testimonial} />
        
        <TestimonialNavigation 
          currentIndex={currentIndex} 
          totalCount={totalCount}
          navigate={navigate}
          isAnimating={isAnimating}
        />
      </div>
    </div>
  );
};

export default TestimonialCarousel;