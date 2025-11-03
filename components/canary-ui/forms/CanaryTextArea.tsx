import { forwardRef, TextareaHTMLAttributes } from "react";
import { colors } from "../design-tokens";
import { BaseFormProps, InputSize } from "./types";
import clsx from "clsx";

export interface CanaryTextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    BaseFormProps {
  resize?: "none" | "vertical" | "horizontal" | "both";
}

const CanaryTextArea = forwardRef<HTMLTextAreaElement, CanaryTextAreaProps>(
  (
    {
      label,
      isDisabled = false,
      isReadonly = false,
      isRequired = false,
      error,
      helperText,
      size = InputSize.LARGE,
      resize = "vertical",
      className = "",
      rows = 4,
      ...textareaProps
    },
    ref
  ) => {
    const sizeClasses = {
      [InputSize.TABLET]: "text-[18px] p-4",
      [InputSize.LARGE]: "text-[16px] p-4",
      [InputSize.NORMAL]: "text-[14px] p-3",
      [InputSize.COMPACT]: "text-[14px] p-2",
      [InputSize.TINY]: "text-[12px] p-2",
    };

    const resizeClasses = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize",
    };

    const textareaClasses = clsx(
      // Base styles
      "w-full rounded border transition-colors duration-200",
      "font-['Roboto',sans-serif]",
      "outline-none",
      // Size
      sizeClasses[size],
      // Resize
      resizeClasses[resize],
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

        <textarea
          ref={ref}
          disabled={isDisabled}
          readOnly={isReadonly}
          required={isRequired}
          rows={rows}
          className={textareaClasses}
          style={{
            borderColor: error ? colors.danger : undefined,
          }}
          {...textareaProps}
        />

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

CanaryTextArea.displayName = "CanaryTextArea";

export default CanaryTextArea;
