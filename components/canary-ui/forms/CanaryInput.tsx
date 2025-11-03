import { forwardRef, InputHTMLAttributes } from "react";
import { colors } from "../design-tokens";
import { BaseFormProps, InputType, InputSize } from "./types";
import clsx from "clsx";

export interface CanaryInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    BaseFormProps {
  type?: InputType;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
}

const CanaryInput = forwardRef<HTMLInputElement, CanaryInputProps>(
  (
    {
      label,
      type = InputType.TEXT,
      isDisabled = false,
      isReadonly = false,
      isRequired = false,
      error,
      helperText,
      size = InputSize.LARGE,
      leftAddon,
      rightAddon,
      className = "",
      ...inputProps
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

    const inputClasses = clsx(
      // Base styles
      "w-full rounded border transition-colors duration-200",
      "font-['Roboto',sans-serif]",
      "outline-none",
      // Size
      sizeClasses[size],
      // States
      error
        ? `border-[${colors.danger}] focus:border-[${colors.danger}]`
        : `border-[${colors.black6}] focus:border-[${colors.blueDark1}]`,
      isDisabled && "bg-[#f5f5f5] cursor-not-allowed opacity-60",
      isReadonly && "bg-[#fafafa] cursor-default",
      // Left addon padding
      leftAddon && "pl-10",
      // Right addon padding
      rightAddon && "pr-10",
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
          {leftAddon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              {leftAddon}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            disabled={isDisabled}
            readOnly={isReadonly}
            required={isRequired}
            className={inputClasses}
            style={{
              borderColor: error ? colors.danger : undefined,
            }}
            {...inputProps}
          />

          {rightAddon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              {rightAddon}
            </div>
          )}
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

CanaryInput.displayName = "CanaryInput";

export default CanaryInput;
