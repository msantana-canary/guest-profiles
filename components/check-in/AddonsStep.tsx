'use client';

import React, { useState } from 'react';
import { CanaryButton, ButtonType, CanaryCard } from '@/components/canary-ui';

interface Addon {
  id: string;
  title: string;
  description: string;
  price: number;
  selected: boolean;
}

interface AddonsStepProps {
  onNext: () => void;
  onBack?: () => void;
}

export const AddonsStep: React.FC<AddonsStepProps> = ({ onNext, onBack }) => {
  const [addons, setAddons] = useState<Addon[]>([
    {
      id: 'early-checkin',
      title: 'Early Check-in',
      description: 'Check in as early as 12:00 PM',
      price: 25,
      selected: false,
    },
    {
      id: 'late-checkout',
      title: 'Late Check-out',
      description: 'Check out as late as 2:00 PM',
      price: 35,
      selected: false,
    },
    {
      id: 'room-upgrade',
      title: 'Room Upgrade',
      description: 'Upgrade to a Deluxe Suite with city view',
      price: 75,
      selected: false,
    },
    {
      id: 'breakfast',
      title: 'Breakfast Package',
      description: 'Daily breakfast for 2 guests',
      price: 40,
      selected: false,
    },
  ]);

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.map((addon) =>
        addon.id === id ? { ...addon, selected: !addon.selected } : addon
      )
    );
  };

  const selectedAddons = addons.filter((addon) => addon.selected);
  const totalPrice = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);

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
              <p className="text-sm opacity-90">Step 2 of 5</p>
              <h1 className="text-xl font-semibold">Enhance Your Stay</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Add-ons & Upgrades</h2>
          <p className="text-gray-600">
            Select any add-ons to enhance your stay. You can skip this step if you prefer.
          </p>
        </div>

        {/* Addons List */}
        <div className="space-y-4">
          {addons.map((addon) => (
            <button
              key={addon.id}
              onClick={() => toggleAddon(addon.id)}
              className="w-full text-left"
            >
              <CanaryCard
                className={`transition-all duration-200 ${
                  addon.selected
                    ? 'ring-2 ring-yellow-600 shadow-md'
                    : 'hover:shadow-md'
                }`}
              >
                <div className="p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          addon.selected
                            ? 'bg-yellow-600 border-yellow-600'
                            : 'border-gray-300'
                        }`}
                      >
                        {addon.selected && (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{addon.title}</h3>
                        <p className="text-sm text-gray-600">{addon.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="text-lg font-bold text-gray-900">${addon.price}</p>
                  </div>
                </div>
              </CanaryCard>
            </button>
          ))}
        </div>

        {/* Summary */}
        {selectedAddons.length > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Selected Add-ons</h3>
            <div className="space-y-2">
              {selectedAddons.map((addon) => (
                <div key={addon.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">{addon.title}</span>
                  <span className="font-medium text-gray-900">${addon.price}</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-yellow-700">${totalPrice}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <CanaryButton
            type={ButtonType.PRIMARY}
            isExpanded
            onClick={onNext}
            className="w-full bg-yellow-700 hover:bg-yellow-800"
          >
            {selectedAddons.length > 0 ? 'Continue with Add-ons' : 'Continue'}
          </CanaryButton>

          <CanaryButton
            type={ButtonType.TEXT}
            isExpanded
            onClick={onNext}
            className="w-full text-gray-600"
          >
            Skip this step
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
