import { forwardRef, InputHTMLAttributes } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";

export interface CanaryRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  isDisabled?: boolean;
  error?: string;
}

const CanaryRadio = forwardRef<HTMLInputElement, CanaryRadioProps>(
  (
    { label, isDisabled = false, error, className = "", ...inputProps },
    ref
  ) => {
    const radioClasses = clsx(
      "w-5 h-5 rounded-full border-2 transition-all duration-200",
      "cursor-pointer appearance-none",
      "checked:border-[6px] checked:border-[#2858c4]",
      "focus:outline-none focus:ring-2 focus:ring-[#2858c4] focus:ring-offset-2",
      error && "border-[#e40046]",
      !error && "border-[#cecece]",
      isDisabled && "opacity-50 cursor-not-allowed",
      className
    );

    return (
      <label
        className={clsx(
          "flex items-start gap-3",
          isDisabled ? "cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <div className="pt-0.5">
          <input
            ref={ref}
            type="radio"
            disabled={isDisabled}
            className={radioClasses}
            style={{
              borderColor: error
                ? colors.danger
                : inputProps.checked
                ? colors.blueDark1
                : undefined,
            }}
            {...inputProps}
          />
        </div>

        {label && (
          <span className="text-[14px] text-[#2d2d2d] select-none flex-1">
            {label}
          </span>
        )}
      </label>
    );
  }
);

CanaryRadio.displayName = "CanaryRadio";

export default CanaryRadio;
