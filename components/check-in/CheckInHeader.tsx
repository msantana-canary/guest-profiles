'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CheckInHeaderProps {
  title: string;
  currentStep: number;
  totalSteps?: number;
}

export const CheckInHeader: React.FC<CheckInHeaderProps> = ({
  title,
  currentStep,
  totalSteps = 4,
}) => {
  return (
    <div className="bg-[#926e27] w-full flex flex-col">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 pt-[21px] pb-0 h-[54px]">
        {/* Time */}
        <div className="flex-1 flex items-center justify-start pl-3">
          <p
            className="text-[17px] font-semibold text-white leading-[22px] text-center"
            style={{ fontFamily: 'SF Pro' }}
          >
            9:41
          </p>
        </div>

        {/* Dynamic Island Spacer */}
        <div className="w-[124px] h-[10px]" />

        {/* Signal/Battery Icons */}
        <div className="flex-1 flex items-center justify-end gap-[7px] pr-3">
          {/* Cellular */}
          <svg className="w-[19.2px] h-[12.226px]" viewBox="0 0 20 13" fill="none">
            <rect x="0" y="8" width="3" height="5" rx="1" fill="white"/>
            <rect x="4.5" y="5" width="3" height="8" rx="1" fill="white"/>
            <rect x="9" y="2" width="3" height="11" rx="1" fill="white"/>
            <rect x="13.5" y="0" width="3" height="13" rx="1" fill="white" fillOpacity="0.4"/>
          </svg>

          {/* WiFi */}
          <svg className="w-[17.142px] h-[12.328px]" viewBox="0 0 18 13" fill="none">
            <path d="M9 13C8.33 13 7.77 12.44 7.77 11.77C7.77 11.1 8.33 10.54 9 10.54C9.67 10.54 10.23 11.1 10.23 11.77C10.23 12.44 9.67 13 9 13ZM3.31 6.86C3.87 6.3 5.4 5.01 9 5.01C12.6 5.01 14.13 6.3 14.69 6.86L16.41 5.13C15.58 4.31 13.27 2 9 2C4.73 2 2.42 4.31 1.59 5.13L3.31 6.86Z" fill="white"/>
          </svg>

          {/* Battery */}
          <svg className="w-[27.328px] h-[13px]" viewBox="0 0 28 14" fill="none">
            <rect opacity="0.35" x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="white"/>
            <path opacity="0.4" d="M23 4V8C24.3 7.6 25 6.6 25 5.5C25 4.4 24.3 3.4 23 3V4Z" fill="white"/>
            <rect x="2" y="2" width="18" height="8" rx="1.5" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Title and Progress */}
      <div className="flex flex-col gap-2 px-6 pb-6 pt-2">
        {/* Animated Title */}
        <div className="relative h-9 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={title}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{
                type: 'tween',
                ease: [0.4, 0.0, 0.2, 1],
                duration: 0.3,
              }}
              className="absolute text-[24px] font-semibold text-white leading-[36px]"
              style={{ fontFamily: 'Roboto' }}
            >
              {title}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Progress Stepper with fade animation */}
        <div className="flex gap-2 w-[124px]">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <motion.div
              key={index}
              animate={{
                opacity: index < currentStep ? 1 : 0.4,
              }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="flex-1 h-[3px] rounded-lg bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
