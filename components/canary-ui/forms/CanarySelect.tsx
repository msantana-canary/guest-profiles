import { forwardRef, SelectHTMLAttributes } from "react";
import { colors } from "../design-tokens";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";

export interface CanarySelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface CanarySelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
    BaseFormProps {
  options: CanarySelectOption[];
  placeholder?: string;
}

const CanarySelect = forwardRef<HTMLSelectElement, CanarySelectProps>(
  (
    {
      label,
      options,
      placeholder,
      isDisabled = false,
      isReadonly = false,
      isRequired = false,
      error,
      helperText,
      size = InputSize.LARGE,
      className = "",
      ...selectProps
    },
    ref
  ) => {
    const sizeClasses = {
      [InputSize.TABLET]: "h-16 text-[18px] px-4",
      [InputSize.LARGE]: "h-12 text-[16px] px-4",
      [InputSize.NORMAL]: "h-10 text-[14px] px-3",
      [InputSize.COMPACT]: "h-8 text-[14px] px-2",
      [InputSize.TINY]: "h-7 text-[12px] px-2",
    };

    const selectClasses = clsx(
      // Base styles
      "w-full rounded border transition-colors duration-200",
      "font-['Roboto',sans-serif]",
      "outline-none appearance-none",
      "bg-white",
      "pr-10", // Space for dropdown arrow
      // Size
      sizeClasses[size],
      // States
      error
        ? `border-[${colors.danger}] focus:border-[${colors.danger}]`
        : `border-[${colors.black6}] focus:border-[${colors.blueDark1}]`,
      isDisabled && "bg-[#f5f5f5] cursor-not-allowed opacity-60",
      isReadonly && "bg-[#fafafa] cursor-default",
      className
    );

    return (
      <div className="w-full">
        {label && (
          <label className="block text-[14px] font-medium text-[#2d2d2d] mb-2">
            {label}
            {isRequired && <span className="text-[#e40046] ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            disabled={isDisabled || isReadonly}
            required={isRequired}
            className={selectClasses}
            style={{
              borderColor: error ? colors.danger : undefined,
            }}
            {...selectProps}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          {/* Dropdown arrow */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke={colors.black3}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {error && (
          <p className="text-[12px] mt-1" style={{ color: colors.danger }}>
            {error}
          </p>
        )}

        {helperText && !error && (
          <p className="text-[12px] text-[#707070] mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

CanarySelect.displayName = "CanarySelect";

export default CanarySelect;
