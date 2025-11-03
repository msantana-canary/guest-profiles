'use client';

import React from 'react';

interface WelcomeStepProps {
  onNext: () => void;
}

export const WelcomeStep: React.FC<WelcomeStepProps> = ({ onNext }) => {
  return (
    <div className="h-full min-h-[667px] flex flex-col relative bg-white">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-4 text-white text-sm z-20">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.5 8.5L9.5 5.5L6.5 8.5M6.5 15.5L9.5 18.5L12.5 15.5M18.5 8.5L15.5 5.5L12.5 8.5M12.5 15.5L15.5 18.5L18.5 15.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
          </svg>
        </div>
      </div>

      {/* Hotel Background Image */}
      <div className="h-1/2 w-full bg-cover bg-center relative" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\'%3E%3Crect fill=\'%23c4b5a0\' width=\'400\' height=\'400\'/%3E%3C/svg%3E")'}}>
        {/* Placeholder for hotel image - in production, use actual image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-xs opacity-50">Hotel Image</div>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="flex-1 bg-white rounded-t-2xl -mt-6 relative z-10 px-6 py-8 flex flex-col">
        {/* The Statler Logo - Cursive font */}
        <div className="text-center mb-6">
          <div className="text-3xl mb-1" style={{fontFamily: 'cursive', fontStyle: 'italic'}}>
            The Statler
          </div>
          <div className="h-px bg-gray-300 w-12 mx-auto"></div>
        </div>

        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-medium text-gray-900 mb-3">
            Welcome, Emily
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Review your reservation and check-in<br/>
            now. It only takes 3 minutes.
          </p>
        </div>

        {/* Check In Button */}
        <button
          onClick={onNext}
          className="w-full bg-[#8B6F47] hover:bg-[#7a5f3a] text-white font-medium py-3.5 rounded transition-colors mb-4"
        >
          Check in now
        </button>

        {/* Privacy Links */}
        <div className="text-center text-xs text-gray-500 mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
          {' · '}
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>

      {/* Bottom Browser Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-50 border-t flex items-center justify-center z-20">
        <div className="text-xs text-gray-600 flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>statlerhotel.com</span>
        </div>
      </div>

      {/* iOS Navigation Bar */}
      <div className="absolute bottom-12 left-0 right-0 h-11 bg-white/95 backdrop-blur border-t flex items-center justify-around z-20">
        <button className="p-2">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="p-2">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
        <button className="p-2">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </button>
        <button className="p-2">
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
          </svg>
        </button>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full z-30"></div>
    </div>
  );
};
