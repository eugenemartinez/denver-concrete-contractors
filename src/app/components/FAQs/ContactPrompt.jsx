"use client";

import React from 'react';
import CTASection from '../UI/CTASection';

const ContactPrompt = () => {
  return (
    <div className="mt-12">
      <CTASection
        message="Don't see your question here? Our concrete experts are ready to answer any questions you may have!"
        buttonText="Ask Your Question"
        buttonHref="#contact"
        size="small"
        width="narrow"
        backgroundColor="#F5F5F5"
        buttonVariant="cta"
        buttonSize="lg"
        shadow={true}
        className="max-w-3xl mx-auto" // Match the width of FAQ content
      />
    </div>
  );
};

export default ContactPrompt;