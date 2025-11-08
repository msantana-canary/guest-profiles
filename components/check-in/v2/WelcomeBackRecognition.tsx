'use client';

import React from 'react';
import Icon from '@mdi/react';
import { mdiAccountCircleOutline } from '@mdi/js';

interface WelcomeBackRecognitionProps {
  onYes: () => void;
  onNo: () => void;
  guestName?: string;
  guestEmail?: string;
}

export const WelcomeBackRecognition: React.FC<WelcomeBackRecognitionProps> = ({
  onYes,
  onNo,
  guestName = 'Emily Smith',
  guestEmail = 'example@gmail.com'
}) => {
  return (
    <div className="h-full w-full bg-[#FCF9F4] flex flex-col items-center justify-center px-6">
      {/* Icon */}
      <div className="mb-8">
        <Icon path={mdiAccountCircleOutline} size={5} className="text-[#926e27]" />
      </div>

      {/* Welcome Back Message */}
      <h1
        className="text-[32px] font-bold leading-[48px] text-[#926e27] text-center mb-4"
        style={{ fontFamily: 'Roboto' }}
      >
        Welcome back, {guestName.split(' ')[0]}!
      </h1>

      {/* Confirmation Question */}
      <p
        className="text-[24px] font-semibold leading-[36px] text-black text-center mb-8"
        style={{ fontFamily: 'Roboto' }}
      >
        Is this you?
      </p>

      {/* Guest Info Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-12 w-full max-w-[380px]">
        <div className="space-y-3">
          <div>
            <p
              className="text-[14px] leading-[22px] text-[#666666]"
              style={{ fontFamily: 'Roboto' }}
            >
              Name
            </p>
            <p
              className="text-[18px] font-medium leading-[28px] text-black"
              style={{ fontFamily: 'Roboto' }}
            >
              {guestName}
            </p>
          </div>
          <div>
            <p
              className="text-[14px] leading-[22px] text-[#666666]"
              style={{ fontFamily: 'Roboto' }}
            >
              Email
            </p>
            <p
              className="text-[18px] font-medium leading-[28px] text-black"
              style={{ fontFamily: 'Roboto' }}
            >
              {guestEmail}
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

      {/* Footer */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2">
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
  );
};
