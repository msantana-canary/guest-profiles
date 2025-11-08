'use client';

import React from 'react';

interface WelcomeBackRecognitionContentProps {
  onYes: () => void;
  onNo: () => void;
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
  description?: string;
}

export const WelcomeBackRecognitionContent: React.FC<WelcomeBackRecognitionContentProps> = ({
  onYes,
  onNo,
  guestName = 'Emily Smith',
  guestEmail = 'example@gmail.com',
  guestPhone = '+1 (111) 111-1111',
  description = "We've recognized that you have stayed at our property before. Please confirm the information below to expedite your check-in process."
}) => {
  return (
    <div className="h-full w-full bg-[#FCF9F4] overflow-y-auto">
      <div className="px-6 py-8 pb-24">
        {/* Welcome Back Message */}
        <h1
          className="text-[24px] font-semibold leading-[36px] text-black mb-4"
          style={{ fontFamily: 'Roboto' }}
        >
          Welcome back, {guestName.split(' ')[0]}!
        </h1>

        {/* Description */}
        <p
          className="text-[18px] leading-[28px] text-black mb-8"
          style={{ fontFamily: 'Roboto' }}
        >
          {description}
        </p>

        {/* Guest Info Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="space-y-4">
            <div>
              <p
                className="text-[14px] leading-[22px] text-[#666666] mb-1"
                style={{ fontFamily: 'Roboto' }}
              >
                Name
              </p>
              <p
                className="text-[18px] leading-[28px] text-black"
                style={{ fontFamily: 'Roboto', fontWeight: 400 }}
              >
                {guestName}
              </p>
            </div>
            <div>
              <p
                className="text-[14px] leading-[22px] text-[#666666] mb-1"
                style={{ fontFamily: 'Roboto' }}
              >
                Email
              </p>
              <p
                className="text-[18px] leading-[28px] text-black"
                style={{ fontFamily: 'Roboto', fontWeight: 400 }}
              >
                {guestEmail}
              </p>
            </div>
            <div>
              <p
                className="text-[14px] leading-[22px] text-[#666666] mb-1"
                style={{ fontFamily: 'Roboto' }}
              >
                Phone number
              </p>
              <p
                className="text-[18px] leading-[28px] text-black"
                style={{ fontFamily: 'Roboto', fontWeight: 400 }}
              >
                {guestPhone}
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full max-w-[380px] space-y-4">
          <button
            onClick={onYes}
            className="w-full h-12 bg-[#926e27] hover:bg-[#8c6a25] text-white text-[18px] font-medium leading-[28px] flex items-center justify-center transition-colors"
            style={{ fontFamily: 'Roboto' }}
          >
            Yes, that's me
          </button>

          <button
            onClick={onNo}
            className="w-full h-12 border border-[#926e27] text-[#926e27] text-[18px] font-medium leading-[28px] flex items-center justify-center hover:bg-[rgba(146,110,39,0.08)] active:bg-[rgba(146,110,39,0.12)] transition-all"
            style={{ fontFamily: 'Roboto' }}
          >
            No, that's not me
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
