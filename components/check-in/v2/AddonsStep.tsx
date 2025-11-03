'use client';

import React, { useState } from 'react';
import { CheckInHeader } from '../CheckInHeader';
import Icon from '@mdi/react';
import { mdiAccountMultiple, mdiBedKingOutline, mdiUnfoldMoreHorizontal } from '@mdi/js';

interface AddonsStepV2Props {
  onNext: () => void;
}

export const AddonsStepV2: React.FC<AddonsStepV2Props> = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState<'upgrades' | 'addons'>('upgrades');

  const roomUpgrades = [
    {
      name: 'Deluxe City-View Room',
      guests: 2,
      beds: '1 KING, 1 CRIB',
      size: '438 SQ FT',
      price: 199,
      images: [
        'https://www.figma.com/api/mcp/asset/d039566e-a499-4ebb-990b-9913859d43ff',
        'https://www.figma.com/api/mcp/asset/d039566e-a499-4ebb-990b-9913859d43ff',
        'https://www.figma.com/api/mcp/asset/d039566e-a499-4ebb-990b-9913859d43ff',
        'https://www.figma.com/api/mcp/asset/d039566e-a499-4ebb-990b-9913859d43ff',
      ],
    },
    {
      name: 'Executive Suite',
      guests: 3,
      beds: '1 KING, 1 QUEEN',
      size: '948 SQ FT',
      price: 399,
      images: [
        'https://www.figma.com/api/mcp/asset/211e4801-5f52-4f0e-adef-6caf420ce855',
        'https://www.figma.com/api/mcp/asset/211e4801-5f52-4f0e-adef-6caf420ce855',
        'https://www.figma.com/api/mcp/asset/211e4801-5f52-4f0e-adef-6caf420ce855',
        'https://www.figma.com/api/mcp/asset/211e4801-5f52-4f0e-adef-6caf420ce855',
      ],
    },
    {
      name: 'Presidential Suite',
      guests: 4,
      beds: '1 KING, 1 QUEEN',
      size: '1,367 SQ FT',
      price: 599,
      images: [
        'https://www.figma.com/api/mcp/asset/818e4c08-b1cb-4ff7-b2da-2cb20e6ac765',
        'https://www.figma.com/api/mcp/asset/818e4c08-b1cb-4ff7-b2da-2cb20e6ac765',
        'https://www.figma.com/api/mcp/asset/818e4c08-b1cb-4ff7-b2da-2cb20e6ac765',
        'https://www.figma.com/api/mcp/asset/818e4c08-b1cb-4ff7-b2da-2cb20e6ac765',
      ],
    },
  ];

  const addOns = [
    {
      name: 'Early Check-in',
      price: 59,
      image: 'https://www.figma.com/api/mcp/asset/86a3c39d-044f-460c-aa15-0277640d2b75',
    },
    {
      name: 'Late Checkout',
      price: 59,
      image: 'https://www.figma.com/api/mcp/asset/e12e6416-057e-482a-812c-dbeb2b040d04',
    },
    {
      name: 'Bottle of water',
      price: 5,
      image: 'https://www.figma.com/api/mcp/asset/cda74456-d967-4cd7-b47f-cbdd329b2392',
    },
    {
      name: 'Airport shuttle',
      price: 99,
      image: 'https://www.figma.com/api/mcp/asset/7a41c35d-86a6-4b46-9799-31ee4e4c3e71',
    },
  ];

  return (
    <div className="h-full w-full bg-[#FCF9F4] relative flex flex-col">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-[88px]">
        {/* Info Banner */}
        <div className="px-6 py-6">
          <p
            className="text-[18px] leading-[28px] text-black"
            style={{ fontFamily: 'Roboto' }}
          >
            Once approved, your room upgrade will be added to your reservation.
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-[rgba(0,0,0,0.3)] flex">
          <button
            onClick={() => setActiveTab('upgrades')}
            className={`px-6 py-4 ${
              activeTab === 'upgrades'
                ? 'border-b-2 border-[#926e27]'
                : ''
            }`}
          >
            <span
              className={`text-[18px] font-medium leading-[28px] ${
                activeTab === 'upgrades' ? 'text-[#926e27]' : 'text-[#666666]'
              }`}
              style={{ fontFamily: 'Roboto' }}
            >
              Room upgrades
            </span>
          </button>
          <button
            onClick={() => setActiveTab('addons')}
            className={`px-6 py-4 ${
              activeTab === 'addons'
                ? 'border-b-2 border-[#926e27]'
                : ''
            }`}
          >
            <span
              className={`text-[18px] font-medium leading-[28px] ${
                activeTab === 'addons' ? 'text-[#926e27]' : 'text-[#666666]'
              }`}
              style={{ fontFamily: 'Roboto' }}
            >
              Add-ons
            </span>
          </button>
        </div>

        {/* Room Upgrades Tab */}
        {activeTab === 'upgrades' && (
          <div>
            {/* Dropdown Section */}
            <div className="px-6 py-6 flex flex-col gap-2">
              <p
                className="text-[18px] leading-[28px] text-black"
                style={{ fontFamily: 'Roboto' }}
              >
                Take the opportunity to request a room upgrade
              </p>

              {/* Dropdown */}
              <div className="relative">
                <select
                  className="w-full h-12 border-b border-[rgba(0,0,0,0.5)] bg-transparent text-[18px] text-[#666666] appearance-none pr-10"
                  style={{ fontFamily: 'Roboto' }}
                >
                  <option>Your room</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Icon path={mdiUnfoldMoreHorizontal} size={1} className="text-black" />
                </div>
              </div>
            </div>

            {/* Room Upgrade Cards */}
            <div className="px-6 pb-8 pt-8 flex flex-col gap-6">
              {roomUpgrades.map((room, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcf9f4] rounded-sm shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] overflow-hidden"
                >
                  {/* Room Image */}
                  <div className="h-[200px] relative">
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Image dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-[rgba(255,255,255,0.4)]"></div>
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.4)] mt-0.5"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.4)] mt-0.5"></div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 flex flex-col gap-4">
                    {/* Room Info */}
                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-[24px] font-semibold leading-[36px] text-black"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        {room.name}
                      </h3>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-4 items-center">
                        {/* Guests */}
                        <div className="flex items-center gap-1.5">
                          <Icon path={mdiAccountMultiple} size={0.67} className="text-[#666666]" />
                          <span
                            className="text-[16px] font-medium leading-[24px] text-[#666666]"
                            style={{ fontFamily: 'Roboto' }}
                          >
                            {room.guests}
                          </span>
                        </div>

                        {/* Beds */}
                        <div className="flex items-center gap-1.5">
                          <Icon path={mdiBedKingOutline} size={0.67} className="text-[#666666]" />
                          <span
                            className="text-[16px] font-medium leading-[22px] text-[#666666] uppercase"
                            style={{ fontFamily: 'Roboto' }}
                          >
                            {room.beds}
                          </span>
                        </div>

                        {/* Size */}
                        <div className="flex items-center gap-1.5">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2 2V14H14" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 8H8" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 2V8" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span
                            className="text-[16px] font-medium leading-[22px] text-[#666666] uppercase"
                            style={{ fontFamily: 'Roboto' }}
                          >
                            {room.size}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[24px] font-semibold leading-[36px] text-black"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        +${room.price}/night
                      </span>
                      <button
                        className="h-12 px-4 bg-[#926e27] hover:bg-[#8c6a25] text-white rounded text-[16px] font-medium leading-[24px] transition-colors"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        Request
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Ons Section */}
            <div className="px-6 pb-6 pt-8">
              <h2
                className="text-[24px] font-semibold leading-[36px] text-black mb-8"
                style={{ fontFamily: 'Roboto' }}
              >
                Add Ons
              </h2>

              <div className="flex flex-col gap-6">
                {addOns.map((addon, idx) => (
                  <div
                    key={idx}
                    className="bg-[#fcf9f4] rounded-sm shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] overflow-hidden"
                  >
                    {/* Add-on Image */}
                    <div className="h-[200px] relative">
                      <img
                        src={addon.image}
                        alt={addon.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Image dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.4)]"></div>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.4)] mt-0.5"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.4)] mt-0.5"></div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4">
                      <h3
                        className="text-[24px] font-semibold leading-[36px] text-black mb-4"
                        style={{ fontFamily: 'Roboto' }}
                      >
                        {addon.name}
                      </h3>

                      {/* Price and Button */}
                      <div className="flex items-center justify-between">
                        <span
                          className="text-[24px] font-semibold leading-[36px] text-black"
                          style={{ fontFamily: 'Roboto' }}
                        >
                          ${addon.price}
                        </span>
                        <button
                          className="h-12 px-4 bg-[#926e27] hover:bg-[#8c6a25] text-white rounded text-[16px] font-medium leading-[24px] transition-colors"
                          style={{ fontFamily: 'Roboto' }}
                        >
                          Request
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-4 flex flex-col items-center gap-6">
              {/* Language Dropdown */}
              <div className="w-[128px]">
                <select
                  className="w-full h-10 border-b border-[#999999] text-[14px] text-black bg-transparent leading-[22px]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  <option>English</option>
                  <option>Español</option>
                </select>
              </div>

              {/* Links */}
              <div className="flex flex-col items-center gap-2">
                <p
                  className="text-[12px] font-medium text-[#414141] leading-[18px]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Privacy Policy • Terms & Conditions
                </p>
                <div className="flex items-center gap-2">
                  <svg className="w-[21.6px] h-[12.27px]" viewBox="0 0 22 13" fill="#9F9F9F">
                    <path d="M12 1L2 6v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-10-5z" />
                  </svg>
                  <p
                    className="text-[12px] text-[#9F9F9F] leading-[18px]"
                    style={{ fontFamily: 'Roboto' }}
                  >
                    Powered by Canary Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add-ons Tab */}
        {activeTab === 'addons' && (
          <div className="px-6 py-6">
            <p
              className="text-[18px] leading-[28px] text-black"
              style={{ fontFamily: 'Roboto' }}
            >
              Add-ons content here
            </p>
          </div>
        )}
      </div>

      {/* Fixed Bottom Button */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#fcf9f4] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.12)] px-4 pt-4 pb-8 z-10">
        <button
          onClick={onNext}
          className="w-full h-12 border border-[#926e27] text-[#926e27] text-[18px] font-medium leading-[28px] flex items-center justify-center hover:bg-[rgba(146,110,39,0.08)] active:bg-[rgba(146,110,39,0.12)] transition-all"
          style={{ fontFamily: 'Roboto' }}
        >
          Skip
        </button>
      </div>
    </div>
  );
};
