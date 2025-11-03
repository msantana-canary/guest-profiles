'use client';

import React from 'react';
import Link from 'next/link';
import { CanaryContainer, CanaryCard, CanaryButton, ButtonType } from '@/components/canary-ui';

export default function LandingPage() {
  const flows = [
    {
      id: 'profile-creation',
      title: 'Profile Creation',
      description: 'New guest creating a profile for the first time',
      href: '/flow/profile-creation',
    },
    {
      id: 'registration-match',
      title: 'Registration Match',
      description: 'Existing guest matched via reservation details',
      href: '/flow/registration-match',
    },
    {
      id: 'reg-card-input',
      title: 'Reg Card Input',
      description: 'Existing guest entering registration card details',
      href: '/flow/reg-card-input',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <CanaryContainer>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Guest Profiles Demo
            </h1>
            <p className="text-lg text-gray-600">
              Select a check-in flow to demonstrate
            </p>
          </div>

          {/* Flow Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {flows.map((flow) => (
              <Link key={flow.id} href={flow.href} className="block">
                <CanaryCard className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      {flow.title}
                    </h2>
                    <p className="text-gray-600 mb-6 min-h-[48px]">
                      {flow.description}
                    </p>
                    <CanaryButton
                      type={ButtonType.PRIMARY}
                      isExpanded
                      className="w-full"
                    >
                      Start Flow
                    </CanaryButton>
                  </div>
                </CanaryCard>
              </Link>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center text-sm text-gray-500">
            <p>All flows are pre-filled with demo data for easy navigation</p>
          </div>
        </div>
      </CanaryContainer>
    </div>
  );
}
