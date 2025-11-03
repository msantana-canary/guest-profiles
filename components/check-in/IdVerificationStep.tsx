'use client';

import React, { useState } from 'react';
import { CanaryButton, ButtonType, CanaryCard } from '@/components/canary-ui';

interface IdVerificationStepProps {
  onNext: () => void;
  onBack?: () => void;
}

export const IdVerificationStep: React.FC<IdVerificationStepProps> = ({ onNext, onBack }) => {
  // Simulating pre-uploaded ID
  const [frontIdUploaded, setFrontIdUploaded] = useState(true);
  const [backIdUploaded, setBackIdUploaded] = useState(true);

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
              <p className="text-sm opacity-90">Step 3 of 5</p>
              <h1 className="text-xl font-semibold">ID Verification</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Identity</h2>
          <p className="text-gray-600">
            Please upload photos of the front and back of your government-issued ID.
          </p>
        </div>

        {/* ID Upload Cards */}
        <div className="space-y-4">
          {/* Front of ID */}
          <CanaryCard>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Front of ID</h3>

              {frontIdUploaded ? (
                <div className="space-y-4">
                  {/* Preview placeholder - in real implementation this would show actual image */}
                  <div className="bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300">
                    <div className="text-center text-gray-500">
                      <svg
                        className="mx-auto h-16 w-16 text-gray-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p className="font-medium">ID Front Uploaded</p>
                      <p className="text-sm">Driver's License - Front</p>
                    </div>
                  </div>

                  <button className="text-yellow-700 text-sm font-medium hover:underline">
                    Retake Photo
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setFrontIdUploaded(true)}
                  className="w-full bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300 hover:border-yellow-600 hover:bg-gray-50 transition-colors"
                >
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="mt-2 text-sm font-medium text-gray-700">
                      Take Photo or Upload
                    </p>
                  </div>
                </button>
              )}
            </div>
          </CanaryCard>

          {/* Back of ID */}
          <CanaryCard>
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Back of ID</h3>

              {backIdUploaded ? (
                <div className="space-y-4">
                  {/* Preview placeholder */}
                  <div className="bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300">
                    <div className="text-center text-gray-500">
                      <svg
                        className="mx-auto h-16 w-16 text-gray-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p className="font-medium">ID Back Uploaded</p>
                      <p className="text-sm">Driver's License - Back</p>
                    </div>
                  </div>

                  <button className="text-yellow-700 text-sm font-medium hover:underline">
                    Retake Photo
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setBackIdUploaded(true)}
                  className="w-full bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300 hover:border-yellow-600 hover:bg-gray-50 transition-colors"
                >
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="mt-2 text-sm font-medium text-gray-700">
                      Take Photo or Upload
                    </p>
                  </div>
                </button>
              )}
            </div>
          </CanaryCard>
        </div>

        {/* Security Note */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
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
            <div className="text-sm text-blue-900">
              <p className="font-medium mb-1">Your privacy is protected</p>
              <p className="text-blue-700">
                Your ID information is encrypted and only used for verification purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <CanaryButton
            type={ButtonType.PRIMARY}
            isExpanded
            onClick={onNext}
            isDisabled={!frontIdUploaded || !backIdUploaded}
            className="w-full bg-yellow-700 hover:bg-yellow-800"
          >
            Continue
          </CanaryButton>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 pt-6">
          <p>Powered by Canary Technologies</p>
        </div>
      </div>
    </div>
  );
};
