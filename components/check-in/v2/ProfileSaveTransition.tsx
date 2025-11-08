'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';

interface ProfileSaveTransitionProps {
  onComplete: () => void;
}

export const ProfileSaveTransition: React.FC<ProfileSaveTransitionProps> = ({ onComplete }) => {
  const [showSaving, setShowSaving] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Show saving for 1.5 seconds
    const savingTimer = setTimeout(() => {
      setShowSaving(false);
      setShowSuccess(true);
    }, 1500);

    // Show success for 1 second, then complete
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(savingTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="h-full w-full bg-[#FCF9F4] flex flex-col items-center justify-center px-6">
      {showSaving && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Spinner */}
          <div className="mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 border-4 border-[#926e27] border-t-transparent rounded-full"
            />
          </div>

          {/* Saving Text */}
          <p
            className="text-[24px] font-medium leading-[36px] text-[#926e27] text-center"
            style={{ fontFamily: 'Roboto' }}
          >
            Saving your profile...
          </p>
        </motion.div>
      )}

      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="flex flex-col items-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
            className="mb-6"
          >
            <Icon path={mdiCheckCircle} size={4} className="text-[#926e27]" />
          </motion.div>

          {/* Success Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[24px] font-medium leading-[36px] text-[#926e27] text-center"
            style={{ fontFamily: 'Roboto' }}
          >
            Profile saved!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[16px] leading-[24px] text-black text-center mt-2 max-w-[300px]"
            style={{ fontFamily: 'Roboto' }}
          >
            Your details are ready for next time
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};
