import { useState, useCallback } from 'react';

/**
 * Custom hook for managing boolean toggle state
 * @param {boolean} initialValue - Initial boolean value
 * @returns {Array} [value, toggle, setTrue, setFalse] tuple
 */
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, toggle, setTrue, setFalse];
};