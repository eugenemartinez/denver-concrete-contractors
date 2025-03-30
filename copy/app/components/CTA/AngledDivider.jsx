import React from 'react';

const AngledDivider = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-8">
      <div className="absolute inset-0">
        <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 100 100" fill="none">
          <polygon points="0,100 100,100 100,0" fill="#F5F5F5" />
        </svg>
      </div>
      <div className="absolute inset-0 transform translate-y-1">
        <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 100 100" fill="none">
          <polygon points="0,100 100,100 100,10" fill="#FFCC00" />
        </svg>
      </div>
    </div>
  );
};

export default AngledDivider;