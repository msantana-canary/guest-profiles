'use client';

import React, { useState, useRef } from 'react';
import clsx from 'clsx';

export interface CanaryFloatingInputProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'tel' | 'number' | 'date' | 'time';
  required?: boolean;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
}

export const CanaryFloatingInput: React.FC<CanaryFloatingInputProps> = ({
  label,
  value = '',
  onChange,
  type = 'text',
  required = false,
  disabled = false,
  error,
  placeholder = '',
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const hasValue = value && value.length > 0;
  const isFloating = isFocused || hasValue;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={clsx('relative pt-4 pb-1', className)}>
      {/* Floating Label */}
      <label
        htmlFor={label}
        className={clsx(
          'absolute left-0 transition-all duration-200 ease-out pointer-events-none',
          isFloating
            ? 'top-0 text-xs text-gray-600'
            : 'top-6 text-base text-gray-500'
        )}
        style={{ fontFamily: 'Roboto' }}
      >
        {label}
        {required && !isFloating && <span className="text-gray-500 ml-1">(required)</span>}
      </label>

      {/* Input Field */}
      <input
        ref={inputRef}
        id={label}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        placeholder={isFloating ? placeholder : ''}
        className={clsx(
          'w-full bg-transparent border-0 border-b-2 pt-5 pb-2 px-0',
          'text-[18px] text-gray-900 placeholder-gray-400',
          'focus:outline-none transition-colors duration-200',
          error
            ? 'border-red-500 focus:border-red-500'
            : isFocused
            ? 'border-[#926E27] focus:border-[#926E27]'
            : 'border-gray-300 hover:border-gray-400',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        style={{ fontFamily: 'Roboto' }}
      />

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
};
