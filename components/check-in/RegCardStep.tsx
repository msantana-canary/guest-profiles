'use client';

import React, { useState } from 'react';
import { CanaryFloatingInput, CanaryCheckbox, CanaryButton, ButtonType } from '@/components/canary-ui';

interface RegCardStepProps {
  onNext: () => void;
  onBack?: () => void;
}

export const RegCardStep: React.FC<RegCardStepProps> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    phone: '+1 (111) 111-1111',
    email: 'example@gmail.com',
    arrivalTime: '03:00 PM',
    vehicle: 'Infiniti iX35',
    licensePlate: '62S01123',
    specialRequests: '',
    agreedToPolicy: true,
    agreedToMarketing: true,
  });

  const [signature, setSignature] = useState('Sample Signature');

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-yellow-700 text-white py-4 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-xl font-semibold">Registration</h1>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          {/* Reservation Info Section */}
          <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
            <span className="font-medium text-gray-900">Reservation Info</span>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          {/* Form Fields */}
          <CanaryFloatingInput
            label="Phone number"
            type="tel"
            value={formData.phone}
            onChange={(value) => handleChange('phone', value)}
            required
          />

          <CanaryFloatingInput
            label="Email address"
            type="email"
            value={formData.email}
            onChange={(value) => handleChange('email', value)}
            required
          />

          <CanaryFloatingInput
            label="Estimated arrival time"
            type="time"
            value={formData.arrivalTime}
            onChange={(value) => handleChange('arrivalTime', value)}
            required
          />

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

          {/* Hotel Policies Section */}
          <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between mt-6">
            <span className="font-medium text-gray-900">Hotel policies</span>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4">
            <CanaryCheckbox
              label="I have read and agree to the hotel policies"
              checked={formData.agreedToPolicy}
              onChange={(e) => handleChange('agreedToPolicy', e.target.checked)}
            />

            <CanaryCheckbox
              label="I consent to receive texts and emails related to both my stay and future marketing materials."
              checked={formData.agreedToMarketing}
              onChange={(e) => handleChange('agreedToMarketing', e.target.checked)}
            />
          </div>

          {/* Signature Section */}
          <div className="mt-6">
            <label className="block text-sm text-gray-600 mb-2">Signature</label>
            <div className="border-b-2 border-gray-300 pb-2 min-h-[80px] flex items-end">
              <p className="text-2xl font-signature text-gray-700">{signature}</p>
            </div>
            <button
              onClick={() => setSignature('')}
              className="text-sm text-yellow-700 mt-2 hover:underline"
            >
              Clear
            </button>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <CanaryButton
              type={ButtonType.PRIMARY}
              isExpanded
              onClick={onNext}
              className="w-full bg-yellow-700 hover:bg-yellow-800"
            >
              Submit
            </CanaryButton>
          </div>

          {/* Language Selector */}
          <div className="text-center pt-4">
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>English</option>
              <option>Español</option>
            </select>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 pt-2">
            <p>Privacy Policy · Terms & Conditions</p>
            <p className="mt-1">Powered by Canary Technologies</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 flex justify-around">
        <button className="p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
        <button className="p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    </div>
  );
};
