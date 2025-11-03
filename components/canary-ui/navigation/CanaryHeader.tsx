import { ReactNode } from "react";
import { colors, dimensions } from "../design-tokens";
import clsx from "clsx";

export interface CanaryHeaderProps {
  logo?: ReactNode;
  title?: string;
  actions?: ReactNode;
  navigation?: ReactNode;
  className?: string;
}

export default function CanaryHeader({
  logo,
  title,
  actions,
  navigation,
  className = "",
}: CanaryHeaderProps) {
  return (
    <header
      className={clsx(
        "w-full bg-white border-b flex items-center px-6 shrink-0",
        className
      )}
      style={{
        height: dimensions.headerHeight,
        borderColor: colors.black6,
      }}
    >
      {/* Logo/Brand */}
      {(logo || title) && (
        <div className="flex items-center gap-3">
          {logo && <div className="shrink-0">{logo}</div>}
          {title && (
            <h1 className="text-[20px] font-semibold" style={{ color: colors.black1 }}>
              {title}
            </h1>
          )}
        </div>
      )}

      {/* Navigation */}
      {navigation && (
        <nav className="flex-1 flex items-center justify-center px-6">
          {navigation}
        </nav>
      )}

      {/* Actions */}
      {actions && (
        <div className="flex items-center gap-2 ml-auto">
          {actions}
        </div>
      )}
    </header>
  );
}
