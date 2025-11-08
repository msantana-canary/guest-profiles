'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@mdi/react';
import { mdiAccountCircleOutline, mdiClockFast } from '@mdi/js';

interface SaveProfilePromptProps {
  onYes: () => void;
  onNo: () => void;
}

export const SaveProfilePrompt: React.FC<SaveProfilePromptProps> = ({ onYes, onNo }) => {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Header - No Stepper */}
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
                key="save-profile"
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
                Save profile
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Stepper area - fade out */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="flex gap-2 w-[124px] h-[3px]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-[#FCF9F4] overflow-y-auto">
        <div className="px-6 py-8 pb-24">
          {/* Icon */}
          <div className="mb-8">
            <Icon path={mdiAccountCircleOutline} size={4} className="text-[#926e27]" />
          </div>

          {/* Title */}
          <h2
            className="text-[24px] font-semibold leading-[36px] text-black mb-4"
            style={{ fontFamily: 'Roboto' }}
          >
            Create your guest profile
          </h2>

          {/* Description */}
          <p
            className="text-[18px] leading-[28px] text-black mb-8"
            style={{ fontFamily: 'Roboto' }}
          >
            Save your details for faster check-ins at this property or any of our other locations.
          </p>

          {/* Benefits */}
          <div className="mb-8 space-y-4">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 mt-1">
                <Icon path={mdiClockFast} size={1} className="text-[#926e27]" />
              </div>
              <p
                className="text-[18px] leading-[28px] text-black"
                style={{ fontFamily: 'Roboto' }}
              >
                Skip filling out forms on your next visit
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="shrink-0 mt-1">
                <Icon path={mdiAccountCircleOutline} size={1} className="text-[#926e27]" />
              </div>
              <p
                className="text-[18px] leading-[28px] text-black"
                style={{ fontFamily: 'Roboto' }}
              >
                Access your profile across all our properties
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4 mt-8">
            <button
              onClick={onYes}
              className="w-full h-12 bg-[#926e27] hover:bg-[#8c6a25] text-white text-[18px] font-medium leading-[28px] flex items-center justify-center transition-colors"
              style={{ fontFamily: 'Roboto' }}
            >
              Yes, save my profile
            </button>

            <button
              onClick={onNo}
              className="w-full h-12 border border-[#926e27] text-[#926e27] text-[18px] font-medium leading-[28px] flex items-center justify-center hover:bg-[rgba(146,110,39,0.08)] active:bg-[rgba(146,110,39,0.12)] transition-all"
              style={{ fontFamily: 'Roboto' }}
            >
              No thanks
            </button>
          </div>

          {/* Language Dropdown */}
          <div className="flex justify-center mt-8">
            <div className="w-[128px]">
              <select
                className="w-full h-10 border-b border-[#999999] text-[14px] text-black bg-transparent leading-[22px]"
                style={{ fontFamily: 'Roboto' }}
              >
                <option>English</option>
                <option>Español</option>
              </select>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col items-center gap-2 mt-6">
            <p
              className="text-[12px] font-medium text-[#414141] leading-[18px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Privacy Policy • Terms & Conditions
            </p>
            <div className="flex items-center gap-2">
              <svg className="w-[21.6px] h-[12.27px]" viewBox="0 0 22 13" fill="#9F9F9F">
                <path d="M12 1L2 6v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-10-5z" />
              </svg>
              <p
                className="text-[12px] text-[#9F9F9F] leading-[18px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Powered by Canary Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
