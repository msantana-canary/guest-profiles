'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';

interface TransitionalStepV2Props {
  onComplete: () => void;
}

export const TransitionalStepV2: React.FC<TransitionalStepV2Props> = ({ onComplete }) => {
  const [showCheck1, setShowCheck1] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [showCheck2, setShowCheck2] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showCheck3, setShowCheck3] = useState(false);
  const [showText3, setShowText3] = useState(false);

  useEffect(() => {
    // Sequential animation timing
    const check1Timer = setTimeout(() => setShowCheck1(true), 200);
    const text1Timer = setTimeout(() => setShowText1(true), 500);
    const check2Timer = setTimeout(() => setShowCheck2(true), 800);
    const text2Timer = setTimeout(() => setShowText2(true), 1100);
    const check3Timer = setTimeout(() => setShowCheck3(true), 1400);
    const text3Timer = setTimeout(() => setShowText3(true), 1700);

    // Navigate to next step after all animations
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(check1Timer);
      clearTimeout(text1Timer);
      clearTimeout(check2Timer);
      clearTimeout(text2Timer);
      clearTimeout(check3Timer);
      clearTimeout(text3Timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="h-full w-full bg-[#FCF9F4] flex flex-col items-center justify-center px-4 py-20 gap-10">
      {/* Lock Icon - 49.006px x 98.003px */}
      <div className="shrink-0">
        <svg width="49" height="98" viewBox="0 0 49 98" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.1263 0.0524552C11.8533 -0.866374 0 10.405 0 24.4941V30.436C0 33.7857 2.71097 36.5006 6.0646 36.5006C9.40303 36.5006 12.0984 33.8053 12.0984 30.436V24.8005C12.0984 16.5394 17.5289 12.0589 24.4111 12.0589C37.7039 12.0589 41.3794 29.9461 30.0774 36.47L3.21616 51.1717C1.22521 52.2437 0 54.3264 0 56.5624V94.94C0 96.6246 1.37832 98.0029 3.06287 98.0029H45.943C47.6582 98.0029 49.0059 96.6246 49.0059 94.94V25.3211C49.0059 12.2733 39.1435 0.879491 26.1263 0.0524552ZM24.5029 88.6305C19.4493 88.6305 15.3143 84.5264 15.3143 79.4419C15.3143 74.3577 19.4493 70.2533 24.5029 70.2533C29.5874 70.2533 33.6915 74.3577 33.6915 79.4419C33.6915 84.5264 29.5874 88.6305 24.5029 88.6305Z" fill="#926E27"/>
        </svg>
      </div>

      {/* Thank You Message - max-width 351.677px */}
      <p
        className="text-[28px] font-medium leading-[42px] text-[#926e27] text-center shrink-0"
        style={{ fontFamily: 'Roboto', maxWidth: '351.677px' }}
      >
        Thanks for submitting your check-in!
      </p>

      {/* Checklist with Sequential Animations - gap 4px between items */}
      <div className="flex flex-col gap-1 items-center justify-center shrink-0">
        {/* Item 1 - Registration */}
        <div className="flex gap-4 items-center px-4 py-2 rounded-lg">
          <div className="flex gap-2 items-center">
            {showCheck1 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-[24px] h-[24px] shrink-0"
              >
                <Icon path={mdiCheck} size={1} className="text-[#926e27]" />
              </motion.div>
            )}
            {showText1 && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[18px] leading-[28px] text-black shrink-0"
                style={{ fontFamily: 'Roboto' }}
              >
                Registration
              </motion.p>
            )}
          </div>
        </div>

        {/* Item 2 - Credit card info */}
        <div className="flex gap-4 items-center px-4 py-2 rounded-lg">
          <div className="flex gap-2 items-center">
            {showCheck2 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-[24px] h-[24px] shrink-0"
              >
                <Icon path={mdiCheck} size={1} className="text-[#926e27]" />
              </motion.div>
            )}
            {showText2 && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[18px] leading-[28px] text-black shrink-0"
                style={{ fontFamily: 'Roboto' }}
              >
                Credit card info
              </motion.p>
            )}
          </div>
        </div>

        {/* Item 3 - ID verification */}
        <div className="flex gap-4 items-center px-4 py-2 rounded-lg">
          <div className="flex gap-2 items-center">
            {showCheck3 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-[24px] h-[24px] shrink-0"
              >
                <Icon path={mdiCheck} size={1} className="text-[#926e27]" />
              </motion.div>
            )}
            {showText3 && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[18px] leading-[28px] text-black shrink-0"
                style={{ fontFamily: 'Roboto' }}
              >
                ID verification
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
