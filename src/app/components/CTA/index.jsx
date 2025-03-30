import React from 'react';
import CTAContent from './CTAContent';
import CTAButtons from './CTAButtons';
import AccentStrip from './AccentStrip';
import AngledDivider from './AngledDivider';

const CTA = () => {
  return (
    <section className="py-12 md:py-16 bg-[#2B2B2B] relative">
      <AccentStrip />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* CTA Content */}
          <div className="text-center md:text-left max-w-2xl relative">
            <CTAContent />
          </div>
          
          <div className="w-full md:w-auto">
            {/* Call & Contact Buttons */}
            <CTAButtons />
          </div>
        </div>
      </div>
      
      <AngledDivider />
    </section>
  );
};

export default CTA;