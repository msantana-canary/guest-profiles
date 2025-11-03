import { ReactNode } from "react";
import clsx from "clsx";

export interface CanaryGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "none" | "small" | "medium" | "large";
  className?: string;
}

export default function CanaryGrid({
  children,
  columns = 1,
  gap = "medium",
  className = "",
}: CanaryGridProps) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    12: "grid-cols-4 md:grid-cols-6 lg:grid-cols-12",
  };

  const gapClasses = {
    none: "gap-0",
    small: "gap-2",
    medium: "gap-4",
    large: "gap-6",
  };

  return (
    <div
      className={clsx(
        "grid",
        columnClasses[columns],
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
