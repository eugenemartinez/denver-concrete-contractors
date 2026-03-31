"use client";

import React from 'react';
import CTASection from '../UI/CTASection';

const ServiceAreaCTA = () => {
  return (
    <CTASection
      message="Not sure if we service your area? Contact us to find out."
      buttonText="Check Availability"
      buttonHref="#contact"
      size="small"
      width="full"
      backgroundColor="#F5F5F5"
      textColor="#2B2B2B"
      buttonVariant="cta"
      buttonSize="lg"
      shadow={true}
      accentLine={false}
      className="border border-gray-200 rounded-lg"
    />
  );
};

export default ServiceAreaCTA;