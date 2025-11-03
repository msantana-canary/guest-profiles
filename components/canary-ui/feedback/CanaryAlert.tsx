import { ReactNode } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";

export type AlertType = "success" | "error" | "warning" | "info";

export interface CanaryAlertProps {
  message: string;
  type?: AlertType;
  title?: string;
  icon?: ReactNode;
  onClose?: () => void;
  className?: string;
}

export default function CanaryAlert({
  message,
  type = "info",
  title,
  icon,
  onClose,
  className = "",
}: CanaryAlertProps) {
  const typeColors = {
    success: {
      bg: colors.lightGreen5,
      border: colors.lightGreen1,
      text: colors.darkGreen1,
    },
    error: {
      bg: colors.pink4,
      border: colors.pink3,
      text: colors.pink1,
    },
    warning: {
      bg: colors.wheat5,
      border: colors.wheat3,
      text: colors.wheat1,
    },
    info: {
      bg: colors.blueDark5,
      border: colors.blueDark3,
      text: colors.blueDark1,
    },
  };

  const colorScheme = typeColors[type];

  return (
    <div
      className={clsx(
        "flex items-start gap-3 p-4 rounded border",
        className
      )}
      style={{
        backgroundColor: colorScheme.bg,
        borderColor: colorScheme.border,
        color: colorScheme.text,
      }}
    >
      {icon && <div className="shrink-0 mt-0.5">{icon}</div>}

      <div className="flex-1">
        {title && (
          <h4 className="text-[14px] font-semibold mb-1">{title}</h4>
        )}
        <p className="text-[14px]">{message}</p>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="shrink-0 hover:opacity-70 transition-opacity"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
