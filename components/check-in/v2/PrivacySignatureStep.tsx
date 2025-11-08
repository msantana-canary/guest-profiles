'use client';

import React, { useState, useRef, useEffect } from 'react';
import { CanaryCheckbox } from '@/components/canary-ui';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

interface PrivacySignatureStepProps {
  onNext: () => void;
}

export const PrivacySignatureStep: React.FC<PrivacySignatureStepProps> = ({ onNext }) => {
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [agreedToMarketing, setAgreedToMarketing] = useState(false);
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

  const canSubmit = agreedToPolicy && hasSignature;

  return (
    <div className="h-full w-full bg-[#FCF9F4] overflow-y-auto">
      <div className="px-6 py-8 pb-24">
        {/* Instructions */}
        <p
          className="text-[18px] leading-[28px] text-black mb-6"
          style={{ fontFamily: 'Roboto' }}
        >
          Please review and agree to our policies, then provide your signature to complete check-in.
        </p>

        {/* Hotel Policies Button */}
        <button className="w-full border border-[rgba(0,0,0,0.25)] rounded p-4 flex items-center justify-between mb-6">
          <span
            className="text-[18px] font-medium text-black leading-[28px]"
            style={{ fontFamily: 'Roboto' }}
          >
            Hotel policies
          </span>
          <Icon path={mdiChevronRight} size={1} className="text-[#926e27]" />
        </button>

        {/* Checkboxes */}
        <div className="space-y-6 mb-6">
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
            checked={agreedToPolicy}
            onChange={(e) => setAgreedToPolicy(e.target.checked)}
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
            checked={agreedToMarketing}
            onChange={(e) => setAgreedToMarketing(e.target.checked)}
          />
        </div>

        {/* Signature Section */}
        <div className="mt-6">
          <label
            className="block text-[18px] font-medium text-black mb-2 leading-[28px]"
            style={{ fontFamily: 'Roboto' }}
          >
            Signature
          </label>
          <p
            className="text-[14px] text-[#666666] mb-3 leading-[22px]"
            style={{ fontFamily: 'Roboto' }}
          >
            Please sign below to authorize charges and confirm your agreement
          </p>
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
          disabled={!canSubmit}
          className={`w-full h-12 bg-[#926e27] text-white text-[18px] font-medium leading-[28px] flex items-center justify-center mt-6 transition-all ${
            canSubmit
              ? 'opacity-100 hover:bg-[#8c6a25]'
              : 'opacity-40 cursor-not-allowed'
          }`}
          style={{ fontFamily: 'Roboto' }}
        >
          Continue
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
