import { ReactNode } from "react";
import clsx from "clsx";

export interface CanaryContainerProps {
  children: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  padding?: "none" | "small" | "medium" | "large";
  className?: string;
}

export default function CanaryContainer({
  children,
  maxWidth = "xl",
  padding = "medium",
  className = "",
}: CanaryContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",    // 640px
    md: "max-w-screen-md",    // 768px
    lg: "max-w-screen-lg",    // 1024px
    xl: "max-w-screen-xl",    // 1280px
    "2xl": "max-w-screen-2xl", // 1536px
    full: "max-w-full",
  };

  const paddingClasses = {
    none: "",
    small: "px-4 py-3",
    medium: "px-6 py-4",
    large: "px-8 py-6",
  };

  return (
    <div
      className={clsx(
        "mx-auto w-full",
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
