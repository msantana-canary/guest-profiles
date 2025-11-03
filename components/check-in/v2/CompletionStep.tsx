'use client';

import React from 'react';
import Icon from '@mdi/react';
import { mdiBed, mdiStar, mdiMessageText, mdiInformationOutline } from '@mdi/js';

interface CompletionStepV2Props {
  flowType?: string;
}

export const CompletionStepV2: React.FC<CompletionStepV2Props> = () => {
  return (
    <div className="h-full w-full bg-[#FCF9F4] overflow-y-auto">
      {/* Hotel Header Image - 300px */}
      <div className="h-[300px] relative bg-cover bg-center" style={{ backgroundImage: 'url(/hotel-background.png)' }} />

      {/* The Statler Logo - 102px container, 150x70 logo centered */}
      <div className="h-[102px] flex items-center justify-center">
        <div className="h-[70px] w-[150px]">
          <img
            src="/statler-logo.png"
            alt="The Statler"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Thank You Message */}
      <div className="px-6 py-4 rounded-lg">
        <p
          className="text-[18px] leading-[28px] text-black"
          style={{ fontFamily: 'Roboto' }}
        >
          Thank you for completing your check-in. We look forward to providing you with a wonderful and luxurious stay.
        </p>
      </div>

      {/* Action Buttons Grid - 2x2 with 8px gap */}
      <div className="px-6 py-6">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <button className="flex-1 bg-[rgba(146,110,39,0.15)] hover:bg-[rgba(146,110,39,0.2)] rounded p-4 flex flex-col items-center gap-1 transition-colors">
              <Icon path={mdiBed} size={1} className="text-[#926e27]" />
              <span
                className="text-[18px] font-medium text-[#926e27] leading-[28px]"
                style={{ fontFamily: 'Roboto' }}
              >
                My Stay
              </span>
            </button>

            <button className="flex-1 bg-[rgba(146,110,39,0.15)] hover:bg-[rgba(146,110,39,0.2)] rounded p-4 flex flex-col items-center gap-1 transition-colors">
              <Icon path={mdiStar} size={1} className="text-[#926e27]" />
              <span
                className="text-[18px] font-medium text-[#926e27] leading-[28px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Statler rewards
              </span>
            </button>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-[rgba(146,110,39,0.15)] hover:bg-[rgba(146,110,39,0.2)] rounded p-4 flex flex-col items-center gap-1 transition-colors">
              <Icon path={mdiMessageText} size={1} className="text-[#926e27]" />
              <span
                className="text-[18px] font-medium text-[#926e27] leading-[28px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Message us
              </span>
            </button>

            <button className="flex-1 bg-[rgba(146,110,39,0.15)] hover:bg-[rgba(146,110,39,0.2)] rounded p-4 flex flex-col items-center gap-1 transition-colors">
              <Icon path={mdiInformationOutline} size={1} className="text-[#926e27]" />
              <span
                className="text-[18px] font-medium text-[#926e27] leading-[28px]"
                style={{ fontFamily: 'Roboto' }}
              >
                Property info
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Dining Carousel */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-[20px] font-medium text-black leading-[30px]"
            style={{ fontFamily: 'Roboto' }}
          >
            Dining
          </h2>
          <button
            className="text-[18px] font-medium text-[#926e27] leading-[28px] px-4 hover:underline"
            style={{ fontFamily: 'Roboto' }}
          >
            View All
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6">
          {/* Card 1 - Orla by Michael Mina */}
          <div className="flex-shrink-0 w-[360px]">
            <div className="bg-[#fcf9f4] rounded-sm shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="h-[200px] relative bg-gray-200">
                <img
                  src="https://www.figma.com/api/mcp/asset/b7fc3bf4-f10f-4cb9-b463-7432e2ffb9b6"
                  alt="Orla by Michael Mina"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center">
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-white" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                </div>
              </div>
              <div className="p-4">
                <h3
                  className="text-[24px] font-semibold text-black leading-[36px] mb-2"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Orla by Michael Mina
                </h3>
                <p
                  className="text-[16px] font-medium text-[#666666] leading-[22px] uppercase"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Greek and Egyptian
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Orla Bar */}
          <div className="flex-shrink-0 w-[360px]">
            <div className="bg-[#fcf9f4] rounded-sm shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="h-[200px] relative bg-gray-200">
                <img
                  src="https://www.figma.com/api/mcp/asset/d0ab9b53-0959-4223-86d4-a3fbf1b2ec6a"
                  alt="Orla Bar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center">
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-white" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                </div>
              </div>
              <div className="p-4">
                <h3
                  className="text-[24px] font-semibold text-black leading-[36px] mb-2"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Orla Bar
                </h3>
                <p
                  className="text-[16px] font-medium text-[#666666] leading-[22px] uppercase"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Cocktail Bar
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Sweet July Café */}
          <div className="flex-shrink-0 w-[360px]">
            <div className="bg-[#fcf9f4] rounded-sm shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="h-[200px] relative bg-gray-200">
                <img
                  src="https://www.figma.com/api/mcp/asset/d2a5009c-c58b-4356-ad62-be7a5221c6bf"
                  alt="Sweet July Café"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center">
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-white" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                </div>
              </div>
              <div className="p-4">
                <h3
                  className="text-[24px] font-semibold text-black leading-[36px] mb-2"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Sweet July Café
                </h3>
                <p
                  className="text-[16px] font-medium text-[#666666] leading-[22px] uppercase"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Café
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Azure Bar */}
          <div className="flex-shrink-0 w-[360px]">
            <div className="bg-[#fcf9f4] rounded-sm shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="h-[200px] relative bg-gray-200">
                <img
                  src="https://www.figma.com/api/mcp/asset/8fa6ca26-4362-4414-a119-33ec2c71844b"
                  alt="Azure Bar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center">
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-white" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                </div>
              </div>
              <div className="p-4">
                <h3
                  className="text-[24px] font-semibold text-black leading-[36px] mb-2"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Azure Bar
                </h3>
                <p
                  className="text-[16px] font-medium text-[#666666] leading-[22px] uppercase"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Cocktail bar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities and Amenities Carousel */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-[20px] font-medium text-black leading-[30px]"
            style={{ fontFamily: 'Roboto' }}
          >
            Facilities and amenities
          </h2>
          <button
            className="text-[18px] font-medium text-[#926e27] leading-[28px] px-4 hover:underline"
            style={{ fontFamily: 'Roboto' }}
          >
            View All
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6">
          {/* Card 1 - Guerlain Wellness Spa */}
          <div className="flex-shrink-0 w-[360px]">
            <div className="bg-[#fcf9f4] rounded-sm shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="h-[200px] relative bg-gray-200">
                <img
                  src="https://www.figma.com/api/mcp/asset/e8df2098-0efb-48e4-b661-33b5dfc3e18f"
                  alt="Guerlain Wellness Spa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center">
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-white" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                </div>
              </div>
              <div className="p-4">
                <h3
                  className="text-[24px] font-semibold text-black leading-[36px] mb-2"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Guerlain Wellness Spa
                </h3>
                <p
                  className="text-[16px] font-medium text-[#666666] leading-[22px] uppercase"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Spa
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Fitness center */}
          <div className="flex-shrink-0 w-[360px]">
            <div className="bg-[#fcf9f4] rounded-sm shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="h-[200px] relative bg-gray-200">
                <img
                  src="https://www.figma.com/api/mcp/asset/d985a3e4-1f9b-4a84-a441-174db27f3993"
                  alt="Fitness center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center">
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-white" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                </div>
              </div>
              <div className="p-4">
                <h3
                  className="text-[24px] font-semibold text-black leading-[36px] mb-2"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Fitness center
                </h3>
                <p
                  className="text-[16px] font-medium text-[#666666] leading-[22px] uppercase"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Gym
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Azure Pool & Bar */}
          <div className="flex-shrink-0 w-[360px]">
            <div className="bg-[#fcf9f4] rounded-sm shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="h-[200px] relative bg-gray-200">
                <img
                  src="https://www.figma.com/api/mcp/asset/14d7c87d-15cb-48bc-adcb-0d45f9710b35"
                  alt="Azure Pool & Bar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center">
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-white" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                </div>
              </div>
              <div className="p-4">
                <h3
                  className="text-[24px] font-semibold text-black leading-[36px] mb-2"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Azure Pool & Bar
                </h3>
                <p
                  className="text-[16px] font-medium text-[#666666] leading-[22px] uppercase"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Pool
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Meeting Venues */}
          <div className="flex-shrink-0 w-[360px]">
            <div className="bg-[#fcf9f4] rounded-sm shadow-[0px_12px_32px_0px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="h-[200px] relative bg-gray-200">
                <img
                  src="https://www.figma.com/api/mcp/asset/761b508f-469d-4e62-b5dd-f14c84c06da1"
                  alt="Meeting Venues"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center">
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[8px] h-[8px] rounded-full bg-white" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                  <div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.4)]" />
                </div>
              </div>
              <div className="p-4">
                <h3
                  className="text-[24px] font-semibold text-black leading-[36px] mb-2"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Meeting Venues
                </h3>
                <p
                  className="text-[16px] font-medium text-[#666666] leading-[22px] uppercase"
                  style={{ fontFamily: 'Roboto' }}
                >
                  Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center gap-6 px-4 pb-8 pt-6">
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
  );
};
