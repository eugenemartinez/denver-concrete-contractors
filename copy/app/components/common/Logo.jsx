import React from 'react';
import Link from 'next/link';

const Logo = ({ footer = false }) => {
  // Different sizes based on placement
  const containerClass = footer ? 'flex items-center space-x-2' : 'flex items-center space-x-3';
  const textSizeClass = footer ? 'text-lg font-bold' : 'text-xl font-bold';
  
  // Colors for easy reference
  const colors = {
    yellow: "#FFCC00",
    darkGray: "#2B2B2B",
    mediumGray: "#666666",
    lightGray: "#C2C2C2",
    white: "#FFFFFF"
  };
  
  return (
    <Link href="/" className={containerClass}>
      {/* SVG Logo with professional concrete contractor theme */}
      <div className="flex-shrink-0">
        <svg 
          width={footer ? "36" : "48"} 
          height={footer ? "36" : "48"} 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concrete foundation block with dimension */}
          <path 
            d="M4 24H44V44H4V24Z" 
            fill={colors.lightGray} 
          />
          <path 
            d="M4 24H44V28C44 28 40 30 36 30C32 30 28 28 24 28C20 28 16 30 12 30C8 30 4 28 4 28V24Z" 
            fill={colors.mediumGray} 
            opacity="0.3" 
          />
          
          {/* Yellow construction beam/stripe */}
          <rect x="4" y="20" width="40" height="4" fill={colors.yellow} />
          
          {/* Trowel handle */}
          <rect x="22" y="4" width="4" height="16" fill={colors.darkGray} />
          
          {/* Trowel blade with dimension */}
          <path 
            d="M14 20L34 20L30 14L18 14L14 20Z" 
            fill={colors.mediumGray} 
          />
          <path 
            d="M16 17L32 17L30 14L18 14L16 17Z" 
            fill={colors.white} 
            opacity="0.3" 
          />
          
          {/* Construction elements */}
          <rect x="8" y="32" width="8" height="2" fill={colors.darkGray} opacity="0.2" />
          <rect x="20" y="32" width="8" height="2" fill={colors.darkGray} opacity="0.2" />
          <rect x="32" y="32" width="8" height="2" fill={colors.darkGray} opacity="0.2" />
          <rect x="8" y="36" width="32" height="1" fill={colors.darkGray} opacity="0.2" />
          <rect x="8" y="40" width="32" height="1" fill={colors.darkGray} opacity="0.2" />
          
          {/* Logo outline with professional finish */}
          <rect 
            x="4" 
            y="4" 
            width="40" 
            height="40" 
            stroke={colors.darkGray} 
            strokeWidth="1.5" 
            fill="none" 
          />
        </svg>
      </div>

      {/* Text logo with improved typography */}
      <div className="flex flex-col">
        <span className={`${textSizeClass} text-[${colors.darkGray}] leading-tight tracking-wide`}>
          DENVER CONCRETE
        </span>
        <div className="flex items-center">
          <div className="w-3 h-0.5 bg-[#FFCC00] mr-1"></div>
          <span className={`${footer ? 'text-sm' : 'text-base'} font-semibold text-[${colors.mediumGray}] uppercase leading-tight tracking-widest`}>
            CONTRACTORS
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;