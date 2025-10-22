import React, { forwardRef } from 'react';
import clsx from 'clsx';

/**
 * Input component with various types and validation states
 */
const Input = forwardRef(({ 
  type = 'text',
  label,
  error,
  helperText,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className,
  ...props 
}, ref) => {
  const inputClasses = clsx(
    'px-3 py-2 border rounded-md bg-bg-secondary transition-all',
    'focus:outline-none focus:ring-2 focus:border-transparent',
    'placeholder-text-secondary text-text-primary',
    error 
      ? 'border-status-error focus:ring-status-error' 
      : 'border-border-medium focus:ring-primary-main',
    icon && iconPosition === 'left' && 'pl-10',
    icon && iconPosition === 'right' && 'pr-10',
    fullWidth ? 'w-full' : 'w-auto',
    className
  );

  return (
    <div className={clsx('flex flex-col', fullWidth && 'w-full')}>
      {label && (
        <label className="mb-1.5 text-body2 font-medium text-text-primary">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
            {icon}
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'input-error' : helperText ? 'input-helper' : undefined}
          {...props}
        />
        
        {icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary">
            {icon}
          </div>
        )}
      </div>
      
      {error && (
        <p id="input-error" className="mt-1 text-caption text-status-error">
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p id="input-helper" className="mt-1 text-caption text-text-secondary">
          {helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;