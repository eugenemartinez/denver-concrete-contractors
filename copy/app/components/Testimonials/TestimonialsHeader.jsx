"use client";

import React from 'react';
import SectionHeader from '../UI/SectionHeader';

const TestimonialsHeader = () => {
  return (
    <SectionHeader 
      title="Client Testimonials"
      subtitle="What our satisfied customers say about our concrete services"
      align="center"
      underlineColor="#FFCC00"
      underlineWidth={96}
      textColor="#2B2B2B"
      subtitleColor="#666666"
      showDots={true}
      className="mb-16"
      titleSize="text-3xl md:text-4xl"
    />
  );
};

export default TestimonialsHeader;