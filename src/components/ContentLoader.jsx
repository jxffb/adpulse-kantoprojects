import React from 'react';
import SkeletonLoader from './SkeletonLoader';

export default function ContentLoader({
  isLoading = false,
  error = null,
  children,
  skeleton = 'default', // default, text, card, or custom JSX element
  lines = 3,
  retry = null,
  className = '',
}) {
  // Error state
  if (error) {
    return (
      <div className={`rounded-lg p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 ${className}`}>
        <p className="font-medium">Error loading content</p>
        <p className="text-sm mt-1">{error.message || 'An unexpected error occurred'}</p>
        {retry && (
          <button 
            onClick={retry}
            className="mt-3 px-3 py-1 bg-red-100 dark:bg-red-800/30 rounded text-sm hover:bg-red-200 dark:hover:bg-red-700/30 transition-colors"
          >
            Try again
          </button>
        )}
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    // Custom skeleton
    if (React.isValidElement(skeleton)) {
      return skeleton;
    }

    // Text content skeleton
    if (skeleton === 'text') {
      return <SkeletonLoader type="text" lines={lines} className={className} />;
    }

    // Card content skeleton
    if (skeleton === 'card') {
      return <SkeletonLoader type="card" className={className} />;
    }

    // Default skeleton - title, text, and button
    return (
      <div className={`space-y-4 ${className}`}>
        <SkeletonLoader type="title" />
        <SkeletonLoader type="text" lines={lines} />
        <SkeletonLoader type="button" width="w-40" />
      </div>
    );
  }

  // Loaded content
  return <>{children}</>;
} 