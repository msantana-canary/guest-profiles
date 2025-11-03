'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckInHeader } from '@/components/check-in/CheckInHeader';
import {
  WelcomeStep,
  RegCardStepV2,
  AddonsStepV2,
  IdVerificationStepV2,
  CreditCardStepV2,
  TransitionalStepV2,
  CompletionStepV2,
} from '@/components/check-in/v2';

type Step = 'welcome' | 'regcard' | 'addons' | 'id' | 'creditcard' | 'loading' | 'completion';

export default function FlowPage() {
  const params = useParams();
  const flowType = params.flowType as string;
  const [currentStep, setCurrentStep] = useState<Step>('welcome');

  const nextStep = () => {
    const stepOrder: Step[] = ['welcome', 'regcard', 'addons', 'id', 'creditcard', 'loading', 'completion'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const transition = {
    type: 'tween',
    ease: [0.4, 0.0, 0.2, 1], // iOS-style easing
    duration: 0.35,
  };

  const resetFlow = () => {
    setCurrentStep('welcome');
  };

  // Determine if current step should show header (exclude welcome and loading)
  const shouldShowHeader = !['welcome', 'loading', 'completion'].includes(currentStep);

  const getStepInfo = () => {
    const stepMap: Record<string, { title: string; step: number }> = {
      regcard: { title: 'Registration', step: 1 },
      addons: { title: 'Add-ons', step: 2 },
      id: { title: 'ID Verification', step: 3 },
      creditcard: { title: 'Credit card', step: 4 },
    };
    return stepMap[currentStep] || { title: '', step: 0 };
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-8 relative">
      {/* Control Buttons - Top Right */}
      <div className="absolute top-8 right-8 flex gap-4">
        <a
          href="/"
          className="px-6 py-3 bg-white text-gray-800 rounded-lg shadow-lg hover:bg-gray-50 transition-colors font-medium"
        >
          Home
        </a>
        <button
          onClick={resetFlow}
          className="px-6 py-3 bg-[#926e27] text-white rounded-lg shadow-lg hover:bg-[#8c6a25] transition-colors font-medium"
        >
          Back to Start
        </button>
      </div>

      {/* Mobile Frame - 430x932 */}
      <div className="w-[430px] h-[932px] bg-white shadow-2xl rounded-[40px] overflow-hidden relative flex flex-col">
        <AnimatePresence mode="wait" initial={false}>
          {currentStep === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={transition}
              className="absolute inset-0"
            >
              <WelcomeStep onNext={nextStep} />
            </motion.div>
          )}
        </AnimatePresence>
        {currentStep === 'loading' && <TransitionalStepV2 onComplete={nextStep} />}
        {currentStep === 'completion' && <CompletionStepV2 flowType={flowType} />}

        {shouldShowHeader && (
          <motion.div
            key="header-content"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={transition}
            className="flex flex-col h-full"
          >
            <CheckInHeader
              title={getStepInfo().title}
              currentStep={getStepInfo().step}
              totalSteps={4}
            />
            <div className="flex-1 overflow-hidden relative bg-[#FCF9F4]">
              <AnimatePresence mode="wait" initial={false}>
                {currentStep === 'regcard' && (
                  <motion.div
                    key="regcard"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ x: '-30%', opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <RegCardStepV2 onNext={nextStep} />
                  </motion.div>
                )}
                {currentStep === 'addons' && (
                  <motion.div
                    key="addons"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-30%', opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0"
                  >
                    <AddonsStepV2 onNext={nextStep} />
                  </motion.div>
                )}
                {currentStep === 'id' && (
                  <motion.div
                    key="id"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-30%', opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0"
                  >
                    <IdVerificationStepV2 onNext={nextStep} />
                  </motion.div>
                )}
                {currentStep === 'creditcard' && (
                  <motion.div
                    key="creditcard"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-30%', opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0"
                  >
                    <CreditCardStepV2 onNext={nextStep} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
