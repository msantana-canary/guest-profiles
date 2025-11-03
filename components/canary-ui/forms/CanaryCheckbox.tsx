import { forwardRef, InputHTMLAttributes } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";

export interface CanaryCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  isDisabled?: boolean;
  error?: string;
  helperText?: string;
}

const CanaryCheckbox = forwardRef<HTMLInputElement, CanaryCheckboxProps>(
  (
    {
      label,
      isDisabled = false,
      error,
      helperText,
      className = "",
      ...inputProps
    },
    ref
  ) => {
    const checkboxClasses = clsx(
      "w-5 h-5 rounded border-2 transition-all duration-200",
      "cursor-pointer appearance-none",
      "checked:bg-[#2858c4] checked:border-[#2858c4]",
      "focus:outline-none focus:ring-2 focus:ring-[#2858c4] focus:ring-offset-2",
      error && "border-[#e40046]",
      !error && "border-[#cecece]",
      isDisabled && "opacity-50 cursor-not-allowed",
      className
    );

    return (
      <div className="w-full">
        <label
          className={clsx(
            "flex items-start gap-3",
            isDisabled ? "cursor-not-allowed" : "cursor-pointer"
          )}
        >
          <div className="relative flex items-center justify-center pt-0.5">
            <input
              ref={ref}
              type="checkbox"
              disabled={isDisabled}
              className={checkboxClasses}
              style={{
                borderColor: error ? colors.danger : undefined,
              }}
              {...inputProps}
            />
            {/* Checkmark icon */}
            <svg
              className="absolute w-3 h-3 text-white pointer-events-none hidden peer-checked:block"
              style={{
                display: inputProps.checked ? "block" : "none",
              }}
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5L4.5 8.5L11 1.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {label && (
            <span className="text-[14px] text-[#2d2d2d] select-none flex-1">
              {label}
            </span>
          )}
        </label>

        {error && (
          <p className="text-[12px] mt-1 ml-8" style={{ color: colors.danger }}>
            {error}
          </p>
        )}

        {helperText && !error && (
          <p className="text-[12px] text-[#707070] mt-1 ml-8">{helperText}</p>
        )}
      </div>
    );
  }
);

CanaryCheckbox.displayName = "CanaryCheckbox";

export default CanaryCheckbox;
