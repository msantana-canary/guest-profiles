'use client';

import React from 'react';

interface WelcomeStepProps {
  onNext: () => void;
}

export const WelcomeStep: React.FC<WelcomeStepProps> = ({ onNext }) => {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden rounded-[40px]">
      {/* Background Video with gradient overlay */}
      <div className="absolute inset-0 rounded-[40px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hotel-background.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay at bottom - only bottom 40% */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(146, 110, 39, 0) 0%, rgba(146, 110, 39, 0) 60%, #926E27 100%)'
          }}
        />
      </div>

      {/* Welcome Card - 32px from bottom of screen */}
      <div
        className="absolute left-1/2 bottom-[32px] -translate-x-1/2 bg-[#FAFAFA] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] p-6 flex flex-col items-center"
        style={{ width: '382px' }}
      >
        {/* Statler Logo */}
        <div className="h-[70px] w-[150px] flex items-center justify-center mb-6">
          <img
            src="/statler-logo.png"
            alt="The Statler"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Welcome Text */}
        <div className="flex flex-col gap-2 items-center w-full text-center mb-6">
          <h1
            className="text-[28px] font-medium leading-[42px] text-black"
            style={{ fontFamily: 'Roboto' }}
          >
            Welcome, Emily
          </h1>
          <p
            className="text-[18px] font-normal leading-[28px] text-black"
            style={{ fontFamily: 'Roboto' }}
          >
            Review your reservation and check-in now. It only takes 3 minutes.
          </p>
        </div>

        {/* Check in Button */}
        <button
          onClick={onNext}
          className="w-full h-12 bg-[#926E27] text-white text-[18px] font-medium leading-[28px] flex items-center justify-center mb-6 hover:bg-[#7a5c21] transition-colors"
          style={{ fontFamily: 'Roboto' }}
        >
          Check in now
        </button>

        {/* Privacy Links */}
        <div
          className="text-[12px] font-medium leading-[18px] text-[#333333] text-center"
          style={{ fontFamily: 'Roboto' }}
        >
          Privacy Policy • Terms & Conditions
        </div>
      </div>
    </div>
  );
};
