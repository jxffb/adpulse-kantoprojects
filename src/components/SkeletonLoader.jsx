import React from 'react';

export default function SkeletonLoader({ 
  type = 'text', 
  lines = 1, 
  className = '',
  width,
  height,
  circle = false,
}) {
  // Common classes for all skeleton types
  const baseClasses = "bg-gray-200 dark:bg-gray-800 animate-pulse";
  
  // Generate text lines with different widths for natural look
  if (type === 'text') {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => {
          // Make some lines shorter for a more realistic text block
          const widthClass = i === lines - 1 && lines > 1 
            ? 'w-4/5' 
            : i % 3 === 0 && lines > 2 
              ? 'w-5/6' 
              : 'w-full';
          
          return (
            <div 
              key={i}
              className={`h-4 ${baseClasses} rounded ${widthClass}`}
            />
          );
        })}
      </div>
    );
  }
  
  // Title placeholder (larger height)
  if (type === 'title') {
    return (
      <div className={`h-8 ${baseClasses} rounded ${width || 'w-3/4'} ${className}`} />
    );
  }
  
  // Subtitle placeholder (medium height)
  if (type === 'subtitle') {
    return (
      <div className={`h-6 ${baseClasses} rounded ${width || 'w-1/2'} ${className}`} />
    );
  }

  // Button placeholder
  if (type === 'button') {
    return (
      <div className={`h-12 ${baseClasses} rounded-lg ${width || 'w-32'} ${className}`} />
    );
  }
  
  // Image or avatar placeholder
  if (type === 'image') {
    const imageClasses = circle 
      ? `rounded-full ${height || 'h-16'} ${width || 'w-16'}`
      : `rounded-lg ${height || 'h-48'} ${width || 'w-full'}`;
    
    return (
      <div className={`${baseClasses} ${imageClasses} ${className}`} />
    );
  }
  
  // Card placeholder
  if (type === 'card') {
    return (
      <div className={`${baseClasses} rounded-xl p-4 ${className}`}>
        <div className="h-40 rounded-lg bg-gray-300 dark:bg-gray-700 mb-4" />
        <div className="h-6 rounded bg-gray-300 dark:bg-gray-700 w-3/4 mb-3" />
        <div className="h-4 rounded bg-gray-300 dark:bg-gray-700 w-full mb-2" />
        <div className="h-4 rounded bg-gray-300 dark:bg-gray-700 w-5/6" />
      </div>
    );
  }
  
  // Custom placeholder
  return (
    <div 
      className={`${baseClasses} rounded ${width || 'w-full'} ${height || 'h-8'} ${className}`}
    />
  );
} 