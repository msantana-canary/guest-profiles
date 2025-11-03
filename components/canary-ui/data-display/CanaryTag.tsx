import { ReactNode } from "react";
import { colors } from "../design-tokens";
import { TagColor, CustomTagColor } from "./types";
import clsx from "clsx";

export interface CanaryTagProps {
  label: string;
  color?: TagColor;
  customColor?: CustomTagColor;
  icon?: ReactNode;
  hasDropShadow?: boolean;
  className?: string;
}

export default function CanaryTag({
  label,
  color = TagColor.OK,
  customColor,
  icon,
  hasDropShadow = false,
  className = "",
}: CanaryTagProps) {
  // Get background color based on tag color
  const getBackgroundColor = (): string => {
    if (customColor?.backgroundColor) return customColor.backgroundColor;

    switch (color) {
      case TagColor.OK:
        return colors.lightGreen5;
      case TagColor.WARNING:
        return colors.wheat5;
      case TagColor.ERROR:
        return colors.pink4;
      case TagColor.DARK:
        return colors.black6;
      case TagColor.INFO:
        return colors.blueDark5;
      case TagColor.THEME:
        return colors.blueDark1;
      case TagColor.WHITE:
        return colors.white;
      default:
        return colors.lightGreen5;
    }
  };

  // Get border color based on tag color
  const getBorderColor = (): string => {
    if (customColor?.borderColor) return customColor.borderColor;

    switch (color) {
      case TagColor.OK:
        return colors.lightGreen1;
      case TagColor.WARNING:
        return colors.wheat3;
      case TagColor.ERROR:
        return colors.pink3;
      case TagColor.DARK:
        return colors.black4;
      case TagColor.INFO:
        return colors.blueDark3;
      case TagColor.THEME:
        return colors.blueDark1;
      case TagColor.WHITE:
        return colors.black1;
      default:
        return colors.lightGreen1;
    }
  };

  // Get font color based on tag color
  const getFontColor = (): string => {
    if (customColor?.fontColor) return customColor.fontColor;

    switch (color) {
      case TagColor.OK:
        return colors.darkGreen1;
      case TagColor.WARNING:
        return colors.wheat1;
      case TagColor.ERROR:
        return colors.pink1;
      case TagColor.DARK:
        return colors.black1;
      case TagColor.INFO:
        return colors.blueDark1;
      case TagColor.THEME:
        return colors.white;
      case TagColor.WHITE:
        return colors.black1;
      default:
        return colors.darkGreen1;
    }
  };

  const backgroundColor = getBackgroundColor();
  const borderColor = getBorderColor();
  const fontColor = getFontColor();
  const iconColor = customColor?.iconColor ?? fontColor;

  return (
    <div
      className={clsx(
        "inline-flex items-center gap-1.5",
        "px-2 py-1",
        "rounded-[2px]",
        "text-[12px] font-medium",
        "border",
        hasDropShadow && "shadow-sm",
        className
      )}
      style={{
        backgroundColor,
        borderColor,
        color: fontColor,
      }}
    >
      {icon && <div style={{ color: iconColor }}>{icon}</div>}
      <span>{label}</span>
    </div>
  );
}
