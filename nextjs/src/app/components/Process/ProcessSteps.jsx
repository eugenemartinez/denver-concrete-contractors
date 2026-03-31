"use client";

import React from 'react';
import ProcessStep from './ProcessStep';

const ProcessSteps = ({ steps }) => {
  return (
    <div className="max-w-6xl mx-auto relative">
      
      {/* Process steps */}
      <div className="relative">
        {steps.map((step, index) => (
          <ProcessStep 
            key={step.number}
            step={step}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;