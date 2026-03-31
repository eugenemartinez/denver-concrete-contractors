"use client";

import React from 'react';
import SectionHeader from '../UI/SectionHeader';

const ProjectsHeader = () => {
  return (
    <SectionHeader 
      title="Our Projects"
      subtitle="Explore our concrete work throughout the Denver metropolitan area"
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

export default ProjectsHeader;