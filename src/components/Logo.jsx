import React from 'react';

export default function Logo({ className = "w-8 h-8", ...props }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`rounded-[22%] transition-all duration-300 ${className}`} 
      {...props}
    >
      {/* Background that switches theme */}
      <rect 
        width="100" 
        height="100" 
        rx="22" 
        className="fill-black dark:fill-white transition-colors duration-300"
      />
      {/* Initials that switch theme */}
      <text 
        x="50" 
        y="62" 
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
        fontWeight="bold" 
        fontSize="36" 
        className="fill-white dark:fill-black text-anchor-middle tracking-tight transition-colors duration-300"
        textAnchor="middle"
      >
        AS
      </text>
    </svg>
  );
}
