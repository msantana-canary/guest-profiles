import { ReactNode } from "react";
import { colors } from "../design-tokens";

export interface CanaryRadioGroupProps {
  label?: string;
  children: ReactNode;
  error?: string;
  helperText?: string;
  isRequired?: boolean;
  className?: string;
}

export default function CanaryRadioGroup({
  label,
  children,
  error,
  helperText,
  isRequired = false,
  className = "",
}: CanaryRadioGroupProps) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-[14px] font-medium text-[#2d2d2d] mb-3">
          {label}
          {isRequired && <span className="text-[#e40046] ml-1">*</span>}
        </label>
      )}

      <div className="space-y-3">{children}</div>

      {error && (
        <p className="text-[12px] mt-2" style={{ color: colors.danger }}>
          {error}
        </p>
      )}

      {helperText && !error && (
        <p className="text-[12px] text-[#707070] mt-2">{helperText}</p>
      )}
    </div>
  );
}
