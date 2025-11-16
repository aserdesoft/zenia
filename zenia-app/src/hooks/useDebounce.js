import { useState, useEffect } from 'react';

/**
 * Hook personalizado para debounce
 * @param {any} value - Valor a debounce
 * @param {number} delay - Tiempo de espera en milisegundos (default: 500ms)
 * @returns {any} - Valor con debounce aplicado
 */
export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Crear un timer que actualiza el valor después del delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpiar el timeout si el valor cambia antes de que se cumpla el delay
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

