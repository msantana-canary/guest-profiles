import { ReactNode, CSSProperties, MouseEvent } from "react";
import { colors } from "../design-tokens";
import { ButtonType, ButtonSize, ButtonColor, IconPosition } from "./types";
import CanaryLoading from "../loading/CanaryLoading";
import clsx from "clsx";

export interface CanaryButtonProps {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: ButtonType;
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  isDisabled?: boolean;
  isLoading?: boolean;
  isExpanded?: boolean;
  isRounded?: boolean;
  href?: string;
  target?: string;
  nativeType?: "button" | "submit" | "reset";
  className?: string;
  dataAnalytics?: string;
}

export default function CanaryButton({
  children,
  onClick,
  type = ButtonType.PRIMARY,
  size = ButtonSize.NORMAL,
  color: colorProp = ButtonColor.NORMAL,
  icon,
  iconPosition = IconPosition.RIGHT,
  isDisabled = false,
  isLoading = false,
  isExpanded = false,
  isRounded = false,
  href,
  target = "_self",
  nativeType = "button",
  className = "",
  dataAnalytics,
}: CanaryButtonProps) {
  // Compute background color
  const getBackgroundColor = (): string => {
    switch (colorProp) {
      case ButtonColor.WHITE:
        return colors.white;
      case ButtonColor.SUCCESS:
        return colors.ok;
      case ButtonColor.WARNING:
        return colors.warning;
      case ButtonColor.DANGER:
        return colors.danger;
      case ButtonColor.NORMAL:
      default:
        return colors.blueDark1;
    }
  };

  // Compute foreground/content color
  const getContentColor = (): string => {
    switch (colorProp) {
      case ButtonColor.WHITE:
        return colors.black1;
      case ButtonColor.WARNING:
      case ButtonColor.DANGER:
      case ButtonColor.SUCCESS:
        return colors.white;
      case ButtonColor.NORMAL:
      default:
        return colors.white;
    }
  };

  const backgroundColor = getBackgroundColor();
  const contentColor = getContentColor();

  // Determine if this is an icon-only button
  const isIconType =
    type === ButtonType.ICON_PRIMARY || type === ButtonType.ICON_SECONDARY;
  const hasIcon = Boolean(icon);

  // Handle click
  const handleClick = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (isDisabled) {
      event.preventDefault();
      return;
    }
    if (!isLoading && onClick) {
      onClick(event);
    }
  };

  // Compute border style
  const getBorder = (): string => {
    if (type === ButtonType.OUTLINED) {
      return `1px solid ${backgroundColor}`;
    }
    return "none";
  };

  // Size classes
  const sizeClasses = {
    [ButtonSize.TABLET]: "h-16 text-[18px] font-medium min-w-[104px]",
    [ButtonSize.LARGE]: "h-12 text-[18px]",
    [ButtonSize.NORMAL]: "h-10 text-[16px]",
    [ButtonSize.COMPACT]: "h-8 text-[14px]",
    [ButtonSize.TINY]: "h-7 text-[14px]",
  };

  // Padding classes for text buttons
  const getPaddingClasses = (): string => {
    if (isIconType) return "p-0";

    const basePadding = size === ButtonSize.TINY ? "px-2" : "px-4";

    if (hasIcon && !isIconType) {
      if (isExpanded) {
        return size === ButtonSize.TINY ? "px-10" : "px-10";
      }
      if (iconPosition === IconPosition.LEFT) {
        return size === ButtonSize.TINY ? "pl-2 pr-2" : "pl-2 pr-4";
      }
      if (iconPosition === IconPosition.RIGHT) {
        return size === ButtonSize.TINY ? "pl-2 pr-2" : "pl-4 pr-2";
      }
      if (iconPosition === IconPosition.TOP) {
        return size === ButtonSize.TINY ? "p-2" : "p-4";
      }
    }

    if (type === ButtonType.OUTLINED) {
      return size === ButtonSize.TINY ? "px-[7px]" : "px-[15px]";
    }

    if (isExpanded) {
      return size === ButtonSize.TINY ? "px-1" : "px-2";
    }

    return basePadding;
  };

  // Width classes for icon buttons
  const getIconButtonWidth = (): string => {
    if (!isIconType) return "";
    return {
      [ButtonSize.TABLET]: "w-16",
      [ButtonSize.LARGE]: "w-12",
      [ButtonSize.NORMAL]: "w-10",
      [ButtonSize.COMPACT]: "w-8",
      [ButtonSize.TINY]: "w-7",
    }[size];
  };

  // Background opacity based on type
  const getBackgroundOpacity = (): string => {
    switch (type) {
      case ButtonType.PRIMARY:
      case ButtonType.ICON_PRIMARY:
        return "opacity-100";
      case ButtonType.SHADED:
        return "opacity-10";
      case ButtonType.OUTLINED:
      case ButtonType.TEXT:
      case ButtonType.ICON_SECONDARY:
        return "opacity-0";
      default:
        return "opacity-100";
    }
  };

  // Hover classes
  const getHoverClasses = (): string => {
    if (isDisabled || isLoading) return "";

    switch (type) {
      case ButtonType.SHADED:
        return "hover:[&_.button-bg]:opacity-25 active:[&_.button-bg]:opacity-50";
      case ButtonType.OUTLINED:
      case ButtonType.TEXT:
      case ButtonType.ICON_SECONDARY:
        return "hover:[&_.button-bg]:opacity-[0.08] active:[&_.button-bg]:opacity-[0.16]";
      case ButtonType.PRIMARY:
      case ButtonType.ICON_PRIMARY:
        return "hover:[&_.button-content]:opacity-80 active:[&_.button-content]:opacity-60";
      default:
        return "";
    }
  };

  const buttonClasses = clsx(
    // Base styles
    "relative inline-flex items-center justify-center",
    "font-['Roboto',sans-serif] font-medium",
    "cursor-pointer outline-none",
    "transition-all duration-200",
    "shrink-0",
    // Size
    sizeClasses[size],
    // Padding
    getPaddingClasses(),
    // Icon button width
    getIconButtonWidth(),
    // Border radius
    isRounded
      ? "rounded-full [&_.button-bg]:rounded-full"
      : isIconType
      ? "rounded-full [&_.button-bg]:rounded-full"
      : "rounded-[4px] [&_.button-bg]:rounded-[4px]",
    // Expanded
    isExpanded && "flex-1",
    // Shadow for primary
    type === ButtonType.PRIMARY && "shadow-[0_2px_4px_rgba(0,0,0,0.1)]",
    // Hover and active states
    getHoverClasses(),
    // Disabled
    isDisabled && "cursor-default opacity-50",
    // Icon positioning
    hasIcon &&
      !isIconType &&
      iconPosition === IconPosition.RIGHT &&
      "flex-row-reverse",
    hasIcon && !isIconType && iconPosition === IconPosition.TOP && "flex-col",
    // Custom classes
    className
  );

  const backgroundStyle: CSSProperties = {
    background: backgroundColor,
    opacity: type === ButtonType.PRIMARY || type === ButtonType.ICON_PRIMARY ? 1 : undefined,
  };

  const contentStyle: CSSProperties = {
    color: type === ButtonType.OUTLINED || type === ButtonType.TEXT || type === ButtonType.ICON_SECONDARY || type === ButtonType.SHADED
      ? backgroundColor
      : contentColor,
  };

  const buttonStyle: CSSProperties = {
    border: getBorder(),
  };

  const iconClasses = clsx(
    "shrink-0",
    // Icon size
    isIconType
      ? size === ButtonSize.TABLET
        ? "w-10 h-10"
        : size === ButtonSize.LARGE
        ? "w-6 h-6"
        : "w-5 h-5"
      : "w-6 h-6",
    // Icon margin
    !isIconType &&
      hasIcon &&
      iconPosition === IconPosition.LEFT &&
      (size === ButtonSize.TINY ? "mr-2" : "mr-2"),
    !isIconType &&
      hasIcon &&
      iconPosition === IconPosition.RIGHT &&
      (size === ButtonSize.TINY ? "ml-2" : "ml-2"),
    !isIconType &&
      hasIcon &&
      iconPosition === IconPosition.TOP &&
      (size === ButtonSize.TINY ? "mb-1" : "mb-2"),
    // Expanded positioning
    isExpanded &&
      hasIcon &&
      iconPosition === IconPosition.LEFT &&
      "absolute left-0",
    isExpanded &&
      hasIcon &&
      iconPosition === IconPosition.RIGHT &&
      "absolute right-0",
    isExpanded && hasIcon && iconPosition === IconPosition.TOP && "absolute top-0"
  );

  const content = (
    <>
      {/* Background layer */}
      <div
        className={clsx(
          "button-bg absolute inset-0 transition-opacity duration-200",
          getBackgroundOpacity()
        )}
        style={backgroundStyle}
      />

      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <CanaryLoading color={contentColor} size={16} />
        </div>
      )}

      {/* Content */}
      <div
        className={clsx(
          "button-content relative flex items-center justify-center",
          "transition-opacity duration-200",
          iconPosition === IconPosition.TOP && "flex-col",
          iconPosition === IconPosition.RIGHT && "flex-row-reverse",
          isLoading && "opacity-0"
        )}
        style={contentStyle}
      >
        {icon && <div className={iconClasses}>{icon}</div>}
        {!isIconType && <span>{children}</span>}
      </div>
    </>
  );

  // Render as link or button
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={buttonClasses}
        style={buttonStyle}
        onClick={handleClick}
        data-dd-action-name={dataAnalytics}
        aria-disabled={isDisabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={nativeType}
      className={buttonClasses}
      style={buttonStyle}
      disabled={isDisabled}
      onClick={handleClick}
      data-dd-action-name={dataAnalytics}
    >
      {content}
    </button>
  );
}
