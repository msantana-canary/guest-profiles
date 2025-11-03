'use client';

import React, { useState } from 'react';
import { CanaryFloatingInput } from '@/components/canary-ui';
import Icon from '@mdi/react';
import { mdiCreditCardOutline } from '@mdi/js';

interface CreditCardStepV2Props {
  onNext: () => void;
}

export const CreditCardStepV2: React.FC<CreditCardStepV2Props> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: 'Emily Smith',
    cardNumber: '1234 5678 8901 1234',
    expiration: '03/29',
    cvv: '627',
    zipCode: '94122',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="h-full w-full bg-[#FCF9F4] overflow-y-auto">
      <div className="px-6 py-8 pb-24">
        {/* Instructions */}
        <p
          className="text-[18px] leading-[28px] text-black mb-6"
          style={{ fontFamily: 'Roboto' }}
        >
          We need your credit card to authorize hotel charges and incidentals.
        </p>

        {/* Form Fields */}
        <div className="space-y-6">
          <CanaryFloatingInput
            label="Name on card"
            type="text"
            value={formData.name}
            onChange={(value) => handleChange('name', value)}
          />

          <div className="relative">
            <CanaryFloatingInput
              label="Credit card number"
              type="text"
              value={formData.cardNumber}
              onChange={(value) => handleChange('cardNumber', value)}
            />
            <div className="absolute right-0 top-7">
              <Icon path={mdiCreditCardOutline} size={1} className="text-[#666666]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <CanaryFloatingInput
              label="Expiration date"
              type="text"
              value={formData.expiration}
              onChange={(value) => handleChange('expiration', value)}
              placeholder="MM/YY"
            />

            <CanaryFloatingInput
              label="CVV"
              type="text"
              value={formData.cvv}
              onChange={(value) => handleChange('cvv', value)}
            />
          </div>

          <CanaryFloatingInput
            label="Billing postal code"
            type="text"
            value={formData.zipCode}
            onChange={(value) => handleChange('zipCode', value)}
          />
        </div>

        {/* PCI Compliance Message */}
        <div className="mt-8">
          <p
            className="text-[18px] leading-[28px] text-black"
            style={{ fontFamily: 'Roboto' }}
          >
            We are{' '}
            <span
              className="font-medium underline"
              style={{ fontFamily: 'Roboto' }}
            >
              PCI-DSS Level-1 compliant
            </span>
            . Your information is safe and secure.
          </p>
        </div>

        {/* Submit Button */}
        <button
          onClick={onNext}
          className="w-full h-12 bg-[#926e27] hover:bg-[#8c6a25] text-white text-[18px] font-medium leading-[28px] flex items-center justify-center mt-8 transition-colors"
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
