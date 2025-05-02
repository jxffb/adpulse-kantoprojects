import React, { useState, useEffect, useRef } from 'react';

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  containerClassName = '',
  aspectRatio = 'aspect-[4/3]',
  enableGradient = false,
  priority = false // Set to true for above-the-fold images
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer to detect when the image is in viewport
  useEffect(() => {
    // If priority is true, set isInView to true immediately
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // When image comes into view, set isInView to true
          if (entry.isIntersecting) {
            setIsInView(true);
            // Disconnect after it's in view once
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before it comes into view
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsLoaded(true);
    setError(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${aspectRatio} ${containerClassName} bg-gray-100 dark:bg-gray-800`}
    >
      {/* Loading shimmer effect */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 background-animate" />
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
          <div className="text-gray-400 dark:text-gray-500 text-center px-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p>Failed to load image</p>
          </div>
        </div>
      )}

      {/* Actual image - only load when in viewport or if it's a priority image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"} 
          className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ${className}`}
        />
      )}

      {/* Optional gradient overlay */}
      {enableGradient && isLoaded && <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />}
    </div>
  );
} 