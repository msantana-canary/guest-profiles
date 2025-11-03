import { ReactNode } from "react";
import { colors, shadows } from "../design-tokens";
import clsx from "clsx";

export interface CanaryCardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  padding?: "none" | "small" | "medium" | "large";
  hasShadow?: boolean;
  hasBorder?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function CanaryCard({
  children,
  title,
  subtitle,
  footer,
  padding = "medium",
  hasShadow = true,
  hasBorder = true,
  className = "",
  onClick,
}: CanaryCardProps) {
  const paddingClasses = {
    none: "",
    small: "p-3",
    medium: "p-6",
    large: "p-8",
  };

  return (
    <div
      className={clsx(
        "rounded bg-white",
        hasBorder && "border",
        onClick && "cursor-pointer hover:shadow-lg transition-shadow",
        className
      )}
      style={{
        borderColor: hasBorder ? colors.black6 : undefined,
        boxShadow: hasShadow ? shadows.default : undefined,
      }}
      onClick={onClick}
    >
      {(title || subtitle) && (
        <div className={clsx("border-b", paddingClasses[padding])} style={{ borderColor: colors.black6 }}>
          {title && (
            <h3 className="text-[18px] font-semibold" style={{ color: colors.black1 }}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-[14px] mt-1" style={{ color: colors.black3 }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className={paddingClasses[padding]}>{children}</div>

      {footer && (
        <div
          className={clsx("border-t", paddingClasses[padding])}
          style={{ borderColor: colors.black6 }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
