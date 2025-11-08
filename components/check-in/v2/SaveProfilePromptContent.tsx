'use client';

import React from 'react';
import Icon from '@mdi/react';
import { mdiAccountCircleOutline, mdiClockFast } from '@mdi/js';

interface SaveProfilePromptContentProps {
  onYes: () => void;
  onNo: () => void;
}

export const SaveProfilePromptContent: React.FC<SaveProfilePromptContentProps> = ({ onYes, onNo }) => {
  return (
    <div className="h-full w-full bg-[#FCF9F4] overflow-y-auto">
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
  );
};
