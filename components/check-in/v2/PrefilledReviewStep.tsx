'use client';

import React, { useState } from 'react';
import { CanaryFloatingInput } from '@/components/canary-ui';
import Icon from '@mdi/react';
import { mdiCheckCircle, mdiCreditCardOutline } from '@mdi/js';

interface PrefilledReviewStepProps {
  onNext: () => void;
}

export const PrefilledReviewStep: React.FC<PrefilledReviewStepProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    phone: '+1 (111) 111-1111',
    email: 'example@gmail.com',
    arrivalTime: '03:00 PM',
    vehicle: 'Infiniti iX35',
    licensePlate: '62S01123',
    specialRequests: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="h-full w-full bg-[#FCF9F4] overflow-y-auto">
      <div className="px-6 py-8 pb-24">
        {/* Info Banner */}
        <div className="bg-[#926e27]/10 border border-[#926e27]/20 rounded-lg p-4 mb-6">
          <p
            className="text-[16px] leading-[24px] text-black"
            style={{ fontFamily: 'Roboto' }}
          >
            We've pre-filled your information based on your profile. Please review and make any necessary changes.
          </p>
        </div>

        {/* Contact Information */}
        <h3
          className="text-[20px] font-semibold leading-[30px] text-black mb-4"
          style={{ fontFamily: 'Roboto' }}
        >
          Contact Information
        </h3>

        <div className="space-y-6 mb-8">
          <CanaryFloatingInput
            label="Phone number"
            type="tel"
            value={formData.phone}
            onChange={(value) => handleChange('phone', value)}
          />

          <CanaryFloatingInput
            label="Email address"
            type="email"
            value={formData.email}
            onChange={(value) => handleChange('email', value)}
          />

          <CanaryFloatingInput
            label="Estimated arrival time"
            type="text"
            value={formData.arrivalTime}
            onChange={(value) => handleChange('arrivalTime', value)}
          />
        </div>

        {/* Vehicle Information */}
        <h3
          className="text-[20px] font-semibold leading-[30px] text-black mb-4"
          style={{ fontFamily: 'Roboto' }}
        >
          Vehicle Information
        </h3>

        <div className="space-y-6 mb-8">
          <CanaryFloatingInput
            label="Vehicle make/model/car"
            type="text"
            value={formData.vehicle}
            onChange={(value) => handleChange('vehicle', value)}
          />

          <CanaryFloatingInput
            label="License plate number"
            type="text"
            value={formData.licensePlate}
            onChange={(value) => handleChange('licensePlate', value)}
          />

          <CanaryFloatingInput
            label="Special requests"
            type="text"
            value={formData.specialRequests}
            onChange={(value) => handleChange('specialRequests', value)}
          />
        </div>

        {/* ID Verification */}
        <h3
          className="text-[20px] font-semibold leading-[30px] text-black mb-4"
          style={{ fontFamily: 'Roboto' }}
        >
          ID Verification
        </h3>

        <div className="bg-white rounded-lg border border-[rgba(0,0,0,0.16)] p-4 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Icon path={mdiCheckCircle} size={1.5} className="text-green-600" />
            <div>
              <p
                className="text-[18px] font-medium leading-[28px] text-black"
                style={{ fontFamily: 'Roboto' }}
              >
                ID Verified
              </p>
              <p
                className="text-[14px] leading-[22px] text-[#666666]"
                style={{ fontFamily: 'Roboto' }}
              >
                Driver's License - California
              </p>
            </div>
          </div>
          <button
            className="text-[16px] text-[#926e27] font-medium"
            style={{ fontFamily: 'Roboto' }}
          >
            Update ID
          </button>
        </div>

        {/* Credit Card */}
        <h3
          className="text-[20px] font-semibold leading-[30px] text-black mb-4"
          style={{ fontFamily: 'Roboto' }}
        >
          Payment Method
        </h3>

        <div className="bg-white rounded-lg border border-[rgba(0,0,0,0.16)] p-4 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Icon path={mdiCreditCardOutline} size={1.5} className="text-[#666666]" />
            <div className="flex-1">
              <p
                className="text-[18px] font-medium leading-[28px] text-black"
                style={{ fontFamily: 'Roboto' }}
              >
                •••• •••• •••• 1234
              </p>
              <p
                className="text-[14px] leading-[22px] text-[#666666]"
                style={{ fontFamily: 'Roboto' }}
              >
                Expires 03/29
              </p>
            </div>
          </div>
          <button
            className="text-[16px] text-[#926e27] font-medium"
            style={{ fontFamily: 'Roboto' }}
          >
            Update payment method
          </button>
        </div>

        {/* Confirm Button */}
        <button
          onClick={onNext}
          className="w-full h-12 bg-[#926e27] hover:bg-[#8c6a25] text-white text-[18px] font-medium leading-[28px] flex items-center justify-center transition-colors"
          style={{ fontFamily: 'Roboto' }}
        >
          Confirm information
        </button>

        {/* Footer */}
        <div className="flex flex-col items-center gap-6 mt-6">
          {/* Language Dropdown */}
          <div className="w-[128px]">
            <select
              className="w-full h-10 border-b border-[#999999] text-[14px] text-black bg-transparent leading-[22px]"
              style={{ fontFamily: 'Roboto' }}
            >
              <option>English</option>
              <option>Español</option>
            </select>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-2">
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
