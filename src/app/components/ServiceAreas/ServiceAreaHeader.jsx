"use client";

import React from 'react';
import SectionHeader from '../UI/SectionHeader';

const ServiceAreaHeader = () => {
  return (
    <SectionHeader 
      title="Service Areas"
      subtitle="Serving the greater Denver metropolitan area with quality concrete solutions"
      align="center"
      underlineColor="#FFCC00"
      underlineWidth={96}
      textColor="#2B2B2B"
      subtitleColor="#666666"
      showDots={true}
      className="mb-12"
      titleSize="text-3xl md:text-4xl"
    />
  );
};

export default ServiceAreaHeader;