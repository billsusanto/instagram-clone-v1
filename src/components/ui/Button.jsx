import React from 'react';
import clsx from 'clsx';

/**
 * Reusable Button component with multiple variants
 */
const Button = React.memo(({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-main text-white hover:bg-primary-dark focus:ring-primary-light active:scale-95',
    secondary: 'bg-bg-tertiary text-text-primary hover:bg-border-light focus:ring-border-medium',
    ghost: 'bg-transparent text-text-primary hover:bg-bg-tertiary',
    danger: 'bg-accent-like text-white hover:bg-red-600 focus:ring-red-300',
    link: 'bg-transparent text-text-link hover:text-primary-dark p-0',
  };
  
  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-body2',
    large: 'px-6 py-3 text-body1',
  };
  
  const buttonClasses = clsx(
    baseStyles,
    variants[variant],
    variant !== 'link' && sizes[size],
    fullWidth && 'w-full',
    className
  );
  
  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;