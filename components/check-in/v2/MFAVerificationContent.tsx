'use client';

import React, { useState, useRef } from 'react';
import Icon from '@mdi/react';
import { mdiShieldCheckOutline } from '@mdi/js';

interface MFAVerificationContentProps {
  onVerify: () => void;
  contactInfo: string;
  contactType: 'phone' | 'email';
}

export const MFAVerificationContent: React.FC<MFAVerificationContentProps> = ({
  onVerify,
  contactInfo,
  contactType
}) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = [...code];
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      newCode[i] = pastedData[i];
    }
    setCode(newCode);

    const nextEmptyIndex = newCode.findIndex(c => !c);
    if (nextEmptyIndex === -1) {
      inputRefs.current[5]?.focus();
    } else {
      inputRefs.current[nextEmptyIndex]?.focus();
    }
  };

  const isCodeComplete = code.every(digit => digit !== '');

  const maskedContact = contactType === 'phone'
    ? `+1 ${contactInfo.slice(-10, -6)}••••${contactInfo.slice(-2)}`
    : `${contactInfo.slice(0, 3)}•••@${contactInfo.split('@')[1]}`;

  return (
    <div className="h-full w-full bg-[#FCF9F4] overflow-y-auto">
      <div className="px-6 py-8 pb-24">
        {/* Icon */}
        <div className="mb-8">
          <Icon path={mdiShieldCheckOutline} size={4} className="text-[#926e27]" />
        </div>

        {/* Title */}
        <h2
          className="text-[24px] font-semibold leading-[36px] text-black mb-4"
          style={{ fontFamily: 'Roboto' }}
        >
          Verify your {contactType === 'phone' ? 'phone' : 'email'}
        </h2>

        {/* Description */}
        <p
          className="text-[18px] leading-[28px] text-black mb-2"
          style={{ fontFamily: 'Roboto' }}
        >
          We sent a 6-digit code to
        </p>
        <p
          className="text-[18px] font-medium leading-[28px] text-[#926e27] mb-8"
          style={{ fontFamily: 'Roboto' }}
        >
          {maskedContact}
        </p>

        {/* Code Input */}
        <div className="flex gap-3 mb-6" onPaste={handlePaste}>
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-14 text-center text-[24px] font-medium border-2 border-[#926e27] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#926e27] focus:border-transparent bg-white text-black"
              style={{ fontFamily: 'Roboto' }}
            />
          ))}
        </div>

        {/* Resend Link */}
        <button
          className="text-[16px] text-[#926e27] underline mb-8"
          style={{ fontFamily: 'Roboto' }}
          onClick={() => {
            alert('Verification code resent!');
          }}
        >
          Resend code
        </button>

        {/* Verify Button */}
        <div className="mt-4">
          <button
            onClick={onVerify}
            disabled={!isCodeComplete}
            className={`w-full h-12 bg-[#926e27] text-white text-[18px] font-medium leading-[28px] flex items-center justify-center transition-all ${
              isCodeComplete
                ? 'opacity-100 hover:bg-[#8c6a25]'
                : 'opacity-40 cursor-not-allowed'
            }`}
            style={{ fontFamily: 'Roboto' }}
          >
            Verify
          </button>
        </div>

        {/* Info Text */}
        <p
          className="text-[14px] leading-[22px] text-[#666666] mt-6"
          style={{ fontFamily: 'Roboto' }}
        >
          This verification helps us keep your profile secure across all our properties.
        </p>

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
