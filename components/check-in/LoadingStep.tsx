'use client';

import React, { useEffect } from 'react';
import { CanaryLoading } from '@/components/canary-ui';

interface LoadingStepProps {
  onComplete: () => void;
}

export const LoadingStep: React.FC<LoadingStepProps> = ({ onComplete }) => {
  useEffect(() => {
    // Simulate processing time
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-yellow-700 flex items-center justify-center">
      <div className="text-center px-4">
        <CanaryLoading size={64} color="#ffffff" />

        <div className="mt-8 space-y-3">
          <h2 className="text-2xl font-bold text-white">
            Processing Your Check-in
          </h2>
          <p className="text-yellow-100 text-lg">
            Please wait while we finalize your reservation...
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mt-12 max-w-md mx-auto space-y-4">
          <div className="flex items-center text-white">
            <svg
              className="w-6 h-6 mr-3 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-left">Verifying registration details</span>
          </div>

          <div className="flex items-center text-white">
            <svg
              className="w-6 h-6 mr-3 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-left">Processing payment authorization</span>
          </div>

          <div className="flex items-center text-yellow-100 opacity-75">
            <div className="w-6 h-6 mr-3 flex-shrink-0 border-2 border-yellow-100 rounded-full animate-pulse" />
            <span className="text-left">Generating your digital room key</span>
          </div>
        </div>
      </div>
    </div>
  );
};
