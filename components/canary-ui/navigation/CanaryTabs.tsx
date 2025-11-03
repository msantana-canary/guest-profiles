import { ReactNode, useState } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";

export interface CanaryTab {
  id: string;
  label: string;
  content: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface CanaryTabsProps {
  tabs: CanaryTab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export default function CanaryTabs({
  tabs,
  defaultTab,
  onChange,
  className = "",
}: CanaryTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string, isDisabled?: boolean) => {
    if (isDisabled) return;
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Headers */}
      <div className="flex border-b" style={{ borderColor: colors.black6 }}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id, tab.disabled)}
              disabled={tab.disabled}
              className={clsx(
                "flex items-center gap-2 px-4 py-3",
                "text-[14px] font-medium transition-colors",
                "border-b-2 -mb-[1px]",
                "focus:outline-none",
                isActive
                  ? "border-[#2858c4]"
                  : "border-transparent",
                tab.disabled
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer hover:bg-[#fafafa]"
              )}
              style={{
                color: isActive ? colors.blueDark1 : colors.black3,
                borderBottomColor: isActive ? colors.blueDark1 : "transparent",
              }}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="py-4">{activeTabContent}</div>
    </div>
  );
}
