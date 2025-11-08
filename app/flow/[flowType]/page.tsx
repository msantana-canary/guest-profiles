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
  ProfileSaveTransition,
  SaveProfilePromptContent,
  MFAVerificationContent,
  WelcomeBackRecognitionContent,
  PrefilledReviewStep,
  PrivacySignatureStep,
  SavedInfoReviewStep,
} from '@/components/check-in/v2';

type Step = 'welcome' | 'welcome-back' | 'regcard' | 'post-regcard-recognition' | 'saved-info-review' | 'addons' | 'id' | 'creditcard' | 'save-prompt' | 'mfa' | 'prefilled-review' | 'privacy-signature' | 'profile-saving' | 'loading' | 'completion';

export default function FlowPage() {
  const params = useParams();
  const flowType = params.flowType as string;

  // Set initial step based on flow type
  const getInitialStep = (): Step => {
    if (flowType === 'registration-match') {
      return 'welcome-back';
    }
    return 'welcome';
  };

  const [currentStep, setCurrentStep] = useState<Step>(getInitialStep());

  // Track if user declined profile recognition and should use default flow
  const [useDefaultFlow, setUseDefaultFlow] = useState(false);

  // Track if user accepted post-regcard recognition (reg-card-input flow)
  const [acceptedPostRegcard, setAcceptedPostRegcard] = useState(false);

  // Demo data - in real app, this would come from form submission
  const [userContact] = useState({
    phone: '+1 (111) 111-1111',
    email: 'example@gmail.com',
  });

  // Define step sequences per flow type
  const getStepSequence = (): Step[] => {
    const baseSteps: Step[] = ['welcome', 'regcard', 'addons', 'id', 'creditcard'];

    if (flowType === 'profile-creation') {
      return [...baseSteps, 'save-prompt', 'mfa', 'profile-saving', 'loading', 'completion'];
    }

    // If registration-match but user declined, use default flow
    if (flowType === 'registration-match' && useDefaultFlow) {
      return [...baseSteps, 'loading', 'completion'];
    }

    if (flowType === 'registration-match') {
      return ['welcome-back', 'mfa', 'prefilled-review', 'privacy-signature', 'addons', 'loading', 'completion'];
    }

    // Reg-card-input flow with post-regcard recognition
    if (flowType === 'reg-card-input') {
      // If user accepted, skip add-ons/id/creditcard and go to saved info review
      if (acceptedPostRegcard) {
        return ['welcome', 'regcard', 'post-regcard-recognition', 'saved-info-review', 'loading', 'completion'];
      }
      // If user declined, continue with full flow
      return ['welcome', 'regcard', 'post-regcard-recognition', 'addons', 'id', 'creditcard', 'loading', 'completion'];
    }

    // Default for other flows
    return [...baseSteps, 'loading', 'completion'];
  };

  const nextStep = () => {
    const stepOrder = getStepSequence();
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  // Handler for "No thanks" on save profile prompt
  const skipProfileSave = () => {
    setCurrentStep('loading');
  };

  // Handler for "No, that's not me" on welcome back recognition
  const handleNotMe = () => {
    // Switch to default flow and start from welcome (video landing page)
    setUseDefaultFlow(true);
    setCurrentStep('welcome');
  };

  // Handler for "No, that's not me" on post-regcard recognition
  const handlePostRegcardNo = () => {
    // Continue with regular flow (go to next step: addons)
    nextStep();
  };

  // Handler for "Yes, that's me" on post-regcard recognition
  const handlePostRegcardYes = () => {
    // User accepted - show saved info review
    setAcceptedPostRegcard(true);
    setCurrentStep('saved-info-review');
  };

  const transition = {
    type: 'tween',
    ease: [0.4, 0.0, 0.2, 1], // iOS-style easing
    duration: 0.35,
  };

  const resetFlow = () => {
    // Reset to default flow state
    setUseDefaultFlow(false);
    // Go to the initial step for this flow type
    if (flowType === 'registration-match') {
      setCurrentStep('welcome-back');
    } else {
      setCurrentStep('welcome');
    }
  };

  // Determine if current step should show header (exclude welcome, loading, completion, and profile-saving)
  const shouldShowHeader = !['welcome', 'loading', 'completion', 'profile-saving'].includes(currentStep);

  const getStepInfo = () => {
    // Different step mappings based on flow type
    if (flowType === 'registration-match' && !useDefaultFlow) {
      const stepMap: Record<string, { title: string; step: number; showStepper?: boolean }> = {
        'welcome-back': { title: 'Profile Recognized', step: 0, showStepper: false },
        mfa: { title: 'Verification', step: 1 },
        'prefilled-review': { title: 'Review info', step: 2 },
        'privacy-signature': { title: 'Policies', step: 3 },
        addons: { title: 'Add-ons', step: 4 },
      };
      return stepMap[currentStep] || { title: '', step: 0 };
    }

    if (flowType === 'reg-card-input') {
      const stepMap: Record<string, { title: string; step: number; showStepper?: boolean }> = {
        regcard: { title: 'Registration', step: 1 },
        'post-regcard-recognition': { title: 'Profile Recognized', step: 0, showStepper: false },
        'saved-info-review': { title: 'Review info', step: 0, showStepper: false },
        addons: { title: 'Add-ons', step: 2 },
        id: { title: 'ID Verification', step: 3 },
        creditcard: { title: 'Credit card', step: 4 },
      };
      return stepMap[currentStep] || { title: '', step: 0 };
    }

    // Profile creation and default flows
    const stepMap: Record<string, { title: string; step: number; showStepper?: boolean }> = {
      regcard: { title: 'Registration', step: 1 },
      addons: { title: 'Add-ons', step: 2 },
      id: { title: 'ID Verification', step: 3 },
      creditcard: { title: 'Credit card', step: 4 },
      'save-prompt': { title: 'Save profile', step: 0, showStepper: false },
      mfa: { title: 'Verification', step: 0, showStepper: false },
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

        {currentStep === 'profile-saving' && <ProfileSaveTransition onComplete={nextStep} />}

        {/* Standard Transitional Steps */}
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
              showStepper={getStepInfo().showStepper !== false}
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
                {currentStep === 'save-prompt' && (
                  <motion.div
                    key="save-prompt"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-30%', opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0"
                  >
                    <SaveProfilePromptContent onYes={nextStep} onNo={skipProfileSave} />
                  </motion.div>
                )}
                {currentStep === 'mfa' && (
                  <motion.div
                    key="mfa"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-30%', opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0"
                  >
                    <MFAVerificationContent
                      onVerify={nextStep}
                      contactInfo={userContact.phone || userContact.email}
                      contactType={userContact.phone ? 'phone' : 'email'}
                    />
                  </motion.div>
                )}
                {currentStep === 'prefilled-review' && (
                  <motion.div
                    key="prefilled-review"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-30%', opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0"
                  >
                    <PrefilledReviewStep onNext={nextStep} />
                  </motion.div>
                )}
                {currentStep === 'privacy-signature' && (
                  <motion.div
                    key="privacy-signature"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-30%', opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0"
                  >
                    <PrivacySignatureStep onNext={nextStep} />
                  </motion.div>
                )}
                {currentStep === 'welcome-back' && (
                  <motion.div
                    key="welcome-back"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ x: '-30%', opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0"
                  >
                    <WelcomeBackRecognitionContent onYes={nextStep} onNo={handleNotMe} />
                  </motion.div>
                )}
                {currentStep === 'post-regcard-recognition' && (
                  <motion.div
                    key="post-regcard-recognition"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-30%', opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0"
                  >
                    <WelcomeBackRecognitionContent
                      onYes={handlePostRegcardYes}
                      onNo={handlePostRegcardNo}
                      guestName="Emily Smith"
                      guestEmail="example@gmail.com"
                      guestPhone="+1 (111) 111-1111"
                      description="Based on the information you just provided, we've recognized that you have a profile with us from a previous stay. Please confirm the details below to continue with an expedited check-in."
                    />
                  </motion.div>
                )}
                {currentStep === 'saved-info-review' && (
                  <motion.div
                    key="saved-info-review"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-30%', opacity: 0 }}
                    transition={transition}
                    className="absolute inset-0"
                  >
                    <SavedInfoReviewStep onNext={nextStep} />
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
