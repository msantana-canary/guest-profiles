'use client';

import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiUnfoldMoreHorizontal, mdiCog } from '@mdi/js';

interface IdVerificationStepV2Props {
  onNext: () => void;
}

export const IdVerificationStepV2: React.FC<IdVerificationStepV2Props> = ({ onNext }) => {
  const [idType, setIdType] = useState("Driver's License");

  return (
    <div className="h-full w-full bg-[#FCF9F4] overflow-y-auto">
      <div className="px-6 py-8 pb-24">
        {/* Instructions */}
        <p
          className="text-[18px] leading-[28px] text-black mb-6"
          style={{ fontFamily: 'Roboto' }}
        >
          Please take a photo of your driver's license or government issued ID. Your ID is used to prevent fraud and verify your identity.
        </p>

        {/* ID Type Dropdown */}
        <div className="mb-6">
          <label
            className="block text-[14px] text-[#666666] mb-1 leading-[22px]"
            style={{ fontFamily: 'Roboto' }}
          >
            ID type
          </label>
          <div className="relative">
            <select
              value={idType}
              onChange={(e) => setIdType(e.target.value)}
              className="w-full h-12 border-b border-[rgba(0,0,0,0.5)] bg-transparent text-[18px] text-black appearance-none pr-10 leading-[28px]"
              style={{ fontFamily: 'Roboto' }}
            >
              <option>Driver's License</option>
              <option>Passport</option>
              <option>Government ID</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Icon path={mdiUnfoldMoreHorizontal} size={1} className="text-black" />
            </div>
          </div>
        </div>

        {/* ID Image Container */}
        <div className="mb-6 relative">
          <div className="h-[248px] border border-[rgba(0,0,0,0.25)] rounded-lg overflow-hidden relative">
            <img
              src="https://www.figma.com/api/mcp/asset/9ffa0332-82d2-419f-bad8-a1b6e5b15a9e"
              alt="Driver's License"
              className="w-full h-full object-cover"
            />
            {/* Settings Button */}
            <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Icon path={mdiCog} size={0.9} className="text-[#666666]" />
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={onNext}
          className="w-full h-12 bg-[#926e27] hover:bg-[#8c6a25] text-white text-[18px] font-medium leading-[28px] flex items-center justify-center transition-colors"
          style={{ fontFamily: 'Roboto' }}
        >
          Submit
        </button>

        {/* Language Dropdown */}
        <div className="flex justify-center mt-6">
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
