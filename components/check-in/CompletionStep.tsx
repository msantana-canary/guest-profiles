'use client';

import React from 'react';
import { CanaryButton, ButtonType } from '@/components/canary-ui';
import Link from 'next/link';

interface CompletionStepProps {
  flowType?: string;
}

export const CompletionStep: React.FC<CompletionStepProps> = ({ flowType }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-yellow-700 text-white py-4 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-xl font-semibold text-center">Check-in Complete!</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            You're All Set!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Your check-in is complete. We look forward to welcoming you.
          </p>
        </div>

        {/* Reservation Details Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Reservation Summary</h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Guest Name</span>
              <span className="font-medium text-gray-900">John Doe</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Confirmation</span>
              <span className="font-medium text-gray-900">#ABC123456</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Check-in</span>
              <span className="font-medium text-gray-900">Today, 3:00 PM</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Check-out</span>
              <span className="font-medium text-gray-900">Nov 10, 11:00 AM</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Room Type</span>
              <span className="font-medium text-gray-900">Deluxe King Suite</span>
            </div>
          </div>
        </div>

        {/* Digital Room Key */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4 text-center">
            Your Digital Room Key
          </h3>

          {/* QR Code Placeholder */}
          <div className="flex justify-center mb-4">
            <div className="w-48 h-48 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg
                  className="w-32 h-32 mx-auto text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
                <p className="text-sm font-medium mt-2">QR Code</p>
                <p className="text-xs">Room 305</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-center text-gray-600 mb-4">
            Show this QR code at the front desk or use it with the mobile app
          </p>

          {/* Save to Wallet Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
              </svg>
              <span className="text-sm font-medium">Apple Wallet</span>
            </button>

            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
              <span className="text-sm font-medium">Google Pay</span>
            </button>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-blue-900 mb-2">What's Next?</h4>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Arrive at the hotel and present your digital room key</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Download the mobile app for additional features</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Contact the front desk if you need any assistance</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link href="/" className="block">
            <CanaryButton
              type={ButtonType.PRIMARY}
              isExpanded
              className="w-full bg-yellow-700 hover:bg-yellow-800"
            >
              Return to Home
            </CanaryButton>
          </Link>

          <CanaryButton
            type={ButtonType.OUTLINED}
            isExpanded
            onClick={() => window.print()}
            className="w-full"
          >
            Download Confirmation
          </CanaryButton>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 pt-8">
          <p>Need help? Contact us at (555) 123-4567</p>
          <p className="mt-2">Powered by Canary Technologies</p>
        </div>
      </div>
    </div>
  );
};
