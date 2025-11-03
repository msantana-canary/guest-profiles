'use client';

import React from 'react';

interface MobileViewportProps {
  children: React.ReactNode;
}

export const MobileViewport: React.FC<MobileViewportProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gray-200 flex items-center justify-center p-4">
      {/* Mobile Frame - iPhone proportions */}
      <div className="w-full max-w-[375px] min-h-[667px] bg-white shadow-2xl rounded-lg overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};
