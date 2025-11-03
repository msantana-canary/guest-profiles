import { ReactNode } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";

export interface CanarySidebarItem {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  badge?: string | number;
}

export interface CanarySidebarProps {
  items: CanarySidebarItem[];
  header?: ReactNode;
  footer?: ReactNode;
  width?: string;
  className?: string;
}

export default function CanarySidebar({
  items,
  header,
  footer,
  width = "256px",
  className = "",
}: CanarySidebarProps) {
  return (
    <aside
      className={clsx(
        "h-full flex flex-col bg-white border-r",
        className
      )}
      style={{
        width,
        borderColor: colors.black6,
      }}
    >
      {/* Header */}
      {header && (
        <div className="p-4 border-b shrink-0" style={{ borderColor: colors.black6 }}>
          {header}
        </div>
      )}

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto p-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={item.onClick}
            className={clsx(
              "w-full flex items-center gap-3 px-3 py-2 rounded",
              "text-[14px] font-medium transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-[#2858c4] focus:ring-offset-2",
              item.isActive
                ? "bg-[#eaeef9]"
                : "hover:bg-[#fafafa]"
            )}
            style={{
              color: item.isActive ? colors.blueDark1 : colors.black2,
            }}
          >
            {item.icon && <span className="shrink-0">{item.icon}</span>}
            <span className="flex-1 text-left truncate">{item.label}</span>
            {item.badge && (
              <span
                className="px-2 py-0.5 text-[12px] rounded-full"
                style={{
                  backgroundColor: colors.blueDark5,
                  color: colors.blueDark1,
                }}
              >
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      {footer && (
        <div className="p-4 border-t shrink-0" style={{ borderColor: colors.black6 }}>
          {footer}
        </div>
      )}
    </aside>
  );
}
