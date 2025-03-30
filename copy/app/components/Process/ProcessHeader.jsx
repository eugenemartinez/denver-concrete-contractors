"use client";

import React from 'react';
import SectionHeader from '../UI/SectionHeader';

const ProcessHeader = () => {
  return (
    <SectionHeader 
      title="Our Process"
      subtitle="How we deliver quality concrete solutions from start to finish"
      align="center"
      underlineColor="#FFCC00"
      underlineWidth={96} // 6rem = 96px
      textColor="#2B2B2B"
      subtitleColor="#666666"
      showDots={true}
      className="mb-16"
      titleSize="text-3xl md:text-4xl"
    />
  );
};

export default ProcessHeader;