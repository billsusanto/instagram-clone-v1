import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import clsx from 'clsx';
import { useClickOutside } from '../../hooks/useClickOutside';

/**
 * Modal component with backdrop and animations
 */
const Modal = React.memo(({ 
  isOpen, 
  onClose, 
  title,
  children,
  size = 'medium',
  showCloseButton = true,
  closeOnBackdropClick = true,
  className,
}) => {
  const modalRef = useClickOutside(() => {
    if (closeOnBackdropClick && isOpen) {
      onClose();
    }
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = {
    small: 'max-w-modal',
    medium: 'max-w-2xl',
    large: 'max-w-4xl',
    full: 'max-w-7xl',
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-overlay animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div 
        ref={modalRef}
        className={clsx(
          'relative w-full bg-white rounded-2xl shadow-strong animate-scale-in',
          sizes[size],
          className
        )}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-4 border-b border-border-light">
            <h2 id="modal-title" className="text-h5 font-semibold text-text-primary">
              {title}
            </h2>
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-bg-secondary"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;