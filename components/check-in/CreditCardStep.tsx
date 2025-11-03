'use client';

import React, { useState } from 'react';
import { CanaryFloatingInput, CanaryButton, ButtonType } from '@/components/canary-ui';

interface CreditCardStepProps {
  onNext: () => void;
  onBack?: () => void;
}

export const CreditCardStep: React.FC<CreditCardStepProps> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    cardNumber: '4242 4242 4242 4242',
    cardName: 'John Doe',
    expiryDate: '12/25',
    cvv: '123',
    zipCode: '10001',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-yellow-700 text-white py-4 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center">
            {onBack && (
              <button onClick={onBack} className="mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <div className="flex-1">
              <p className="text-sm opacity-90">Step 4 of 5</p>
              <h1 className="text-xl font-semibold">Payment Information</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Credit Card Details</h2>
            <p className="text-gray-600">
              Please provide a valid credit card for incidentals and deposits.
            </p>
          </div>

          {/* Deposit Information */}
          <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-gray-600 mt-0.5 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="text-sm">
                <p className="font-medium text-gray-900 mb-1">Authorization Hold</p>
                <p className="text-gray-600">
                  A temporary hold of <span className="font-semibold">$100.00</span> will be placed on your card
                  for incidentals. This is not a charge and will be released after checkout.
                </p>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <CanaryFloatingInput
              label="Card number"
              type="text"
              value={formData.cardNumber}
              onChange={(value) => handleChange('cardNumber', value)}
              required
            />

            <CanaryFloatingInput
              label="Cardholder name"
              type="text"
              value={formData.cardName}
              onChange={(value) => handleChange('cardName', value)}
              required
            />

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <CanaryFloatingInput
                  label="Expiry date"
                  type="text"
                  value={formData.expiryDate}
                  onChange={(value) => handleChange('expiryDate', value)}
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <CanaryFloatingInput
                  label="CVV"
                  type="text"
                  value={formData.cvv}
                  onChange={(value) => handleChange('cvv', value)}
                  required
                />
              </div>
            </div>

            <CanaryFloatingInput
              label="Billing ZIP code"
              type="text"
              value={formData.zipCode}
              onChange={(value) => handleChange('zipCode', value)}
              required
            />
          </div>

          {/* Security Badges */}
          <div className="mt-6 flex items-center justify-center gap-4 py-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-sm text-gray-600">256-bit SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-sm text-gray-600">PCI Compliant</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <CanaryButton
              type={ButtonType.PRIMARY}
              isExpanded
              onClick={onNext}
              className="w-full bg-yellow-700 hover:bg-yellow-800"
            >
              Submit Payment Details
            </CanaryButton>
          </div>

          {/* Terms */}
          <p className="mt-4 text-xs text-center text-gray-500">
            By submitting, you agree to the hotel's{' '}
            <button className="text-yellow-700 hover:underline">cancellation policy</button>
            {' '}and{' '}
            <button className="text-yellow-700 hover:underline">terms of service</button>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 pt-6">
          <p>Powered by Canary Technologies</p>
        </div>
      </div>
    </div>
  );
};
