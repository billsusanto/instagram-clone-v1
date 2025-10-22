import React from 'react';
import clsx from 'clsx';

/**
 * Avatar component with optional story ring and verified badge
 */
const Avatar = React.memo(({ 
  src, 
  alt = 'Avatar',
  size = 'medium',
  hasStory = false,
  hasUnseenStory = false,
  showVerified = false,
  className,
  ...props 
}) => {
  const sizes = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-14 h-14',
    xlarge: 'w-20 h-20',
    xxlarge: 'w-32 h-32',
  };
  
  const containerClasses = clsx(
    'relative inline-block',
    className
  );
  
  const avatarClasses = clsx(
    'rounded-full object-cover',
    sizes[size],
    hasStory && 'p-0.5'
  );
  
  const storyRingClasses = clsx(
    'absolute inset-0 rounded-full',
    hasUnseenStory 
      ? 'bg-gradient-to-tr from-ig-gradient-start via-ig-gradient-middle to-ig-gradient-end' 
      : 'bg-border-medium',
    'p-[2px]'
  );
  
  return (
    <div className={containerClasses} {...props}>
      {hasStory && <div className={storyRingClasses} />}
      <div className={clsx(
        'relative rounded-full bg-white',
        hasStory && 'p-[2px]'
      )}>
        <img
          src={src}
          alt={alt}
          className={avatarClasses}
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150/cccccc/ffffff?text=User';
          }}
        />
        {showVerified && (
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary-main rounded-full flex items-center justify-center border-2 border-white">
            <svg 
              className="w-2.5 h-2.5 text-white" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;