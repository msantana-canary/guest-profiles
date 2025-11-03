'use client';

import React, { useState, useRef, useEffect } from 'react';
import { CanaryFloatingInput, CanaryCheckbox } from '@/components/canary-ui';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

interface RegCardStepV2Props {
  onNext: () => void;
}

export const RegCardStepV2: React.FC<RegCardStepV2Props> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    phone: '+1 (111) 111-1111',
    email: 'example@gmail.com',
    arrivalTime: '03:00 PM',
    vehicle: 'Infiniti iX35',
    licensePlate: '62S01123',
    specialRequests: '',
    agreedToPolicy: true,
    agreedToMarketing: true,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Set drawing style
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasSignature(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="h-full w-full bg-[#FCF9F4] overflow-y-auto">
      <div className="px-6 py-6 pb-24">
          {/* Reservation Info Button */}
          <button className="w-full border border-[rgba(0,0,0,0.25)] rounded p-4 flex items-center justify-between mb-6">
            <span
              className="text-[18px] font-medium text-black leading-[28px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Reservation info
            </span>
            <Icon path={mdiChevronRight} size={1} className="text-[#926e27]" />
          </button>

          {/* Form Fields */}
          <div className="space-y-6">
            <CanaryFloatingInput
              label="Phone number (required)"
              type="tel"
              value={formData.phone}
              onChange={(value) => handleChange('phone', value)}
              required
            />

            <CanaryFloatingInput
              label="Email address (required)"
              type="email"
              value={formData.email}
              onChange={(value) => handleChange('email', value)}
              required
            />

            <CanaryFloatingInput
              label="Estimated arrival time (required)"
              type="text"
              value={formData.arrivalTime}
              onChange={(value) => handleChange('arrivalTime', value)}
              required
            />

            <CanaryFloatingInput
              label="Vehicle make/model/car"
              type="text"
              value={formData.vehicle}
              onChange={(value) => handleChange('vehicle', value)}
            />

            <CanaryFloatingInput
              label="License plate number"
              type="text"
              value={formData.licensePlate}
              onChange={(value) => handleChange('licensePlate', value)}
            />

            <CanaryFloatingInput
              label="Special requests"
              type="text"
              value={formData.specialRequests}
              onChange={(value) => handleChange('specialRequests', value)}
            />
          </div>

          {/* Hotel Policies Button */}
          <button className="w-full border border-[rgba(0,0,0,0.25)] rounded p-4 flex items-center justify-between mt-6 mb-6">
            <span
              className="text-[18px] font-medium text-black leading-[28px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Hotel policies
            </span>
            <Icon path={mdiChevronRight} size={1} className="text-[#926e27]" />
          </button>

          {/* Checkboxes */}
          <div className="space-y-6">
            <CanaryCheckbox
              label={
                <span
                  className="text-[18px] leading-[28px]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  I have read and agree to the{' '}
                  <span className="underline">hotel policies</span>
                </span>
              }
              checked={formData.agreedToPolicy}
              onChange={(e) => handleChange('agreedToPolicy', e.target.checked)}
            />

            <CanaryCheckbox
              label={
                <span
                  className="text-[18px] leading-[28px]"
                  style={{ fontFamily: 'Roboto' }}
                >
                  I consent to receive texts and emails related to both my stay and
                  future marketing materials.
                </span>
              }
              checked={formData.agreedToMarketing}
              onChange={(e) => handleChange('agreedToMarketing', e.target.checked)}
            />
          </div>

          {/* Signature Section */}
          <div className="mt-6">
            <label
              className="block text-[14px] text-[rgba(0,0,0,0.5)] mb-2 leading-[22px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Signature
            </label>
            <div className="w-full h-[160px] border border-[rgba(0,59,73,0.16)] bg-white relative rounded">
              <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                className="w-full h-full cursor-crosshair rounded"
              />
              <div className="absolute bottom-2 right-2">
                <button
                  onClick={clearSignature}
                  className={`text-[18px] font-medium text-[#003b49] px-4 py-3 leading-[28px] ${
                    hasSignature ? 'opacity-100' : 'opacity-0'
                  } transition-opacity`}
                  style={{ fontFamily: 'Roboto' }}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={onNext}
            className="w-full h-12 bg-[#926e27] hover:bg-[#8c6a25] text-white text-[18px] font-medium leading-[28px] flex items-center justify-center mt-6 transition-colors"
            style={{ fontFamily: 'Roboto' }}
          >
            Submit
          </button>

          {/* Footer */}
          <div className="flex flex-col items-center gap-6 mt-6">
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
    </div>
  );
};
