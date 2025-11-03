/**
 * Canary Design System - Design Tokens
 *
 * Extracted from the Canary UI design system.
 * Source: /Documents/Canary/canary/frontend/packages/canary-ui/
 *
 * These tokens should be used throughout all components to maintain
 * visual consistency with the main Canary product.
 */

// ============================================================================
// COLORS
// ============================================================================

/**
 * Status Colors
 * Used for success, warning, and error states
 */
export const colors = {
  // Status colors
  ok: "#008040",
  success: "#008040",
  warning: "#FAB541",
  danger: "#e40046",
  error: "#e40046",

  // Base colors
  white: "#ffffff",

  // Black scale (grayscale)
  black1: "#2d2d2d",
  black2: "#414141",
  black3: "#707070",
  black4: "#9f9f9f",
  black5: "#cecece",
  black6: "#eaeaea",
  black7: "#f2f2f2",
  black8: "#fafafa",

  // Canary Blue (Light) - Brand color
  blueCanary1: "#1c91fa",
  blueCanary2: "#55acfb",
  blueCanary3: "#8dc8fc",
  blueCanary4: "#c6e3f3",
  blueCanary5: "#e8f4ff",

  // Blue Dark - Primary action color
  blueDark1: "#2858c4", // Primary button color
  blueDark2: "#5e82d3",
  blueDark3: "#93abe1",
  blueDark4: "#c9d5f0",
  blueDark5: "#eaeef9",

  // Pink
  pink1: "#f16682",
  pink2: "#f48ca1",
  pink3: "#f8b2c0",
  pink4: "#fbd9e0",
  pink5: "#fef0f3",

  // Light Green
  lightGreen1: "#22d39a",
  lightGreen2: "#59deb3",
  lightGreen3: "#90e9cc",
  lightGreen4: "#c8f4e6",
  lightGreen5: "#e9fbf5",

  // Dark Green
  darkGreen1: "#008040",
  darkGreen2: "#59deb3",
  darkGreen3: "#90e9cc",
  darkGreen4: "#c8f4e6",
  darkGreen5: "#e9fbf5",

  // Wheat (Orange/Yellow)
  wheat1: "#fab541",
  wheat2: "#fbc770",
  wheat3: "#fcdaa0",
  wheat4: "#feeccf",
  wheat5: "#fff8ec",

  // Purple
  purple1: "#9b51e0",
  purple2: "#bb6bd9",
  purple3: "#cda8ef",
  purple4: "#e6d3f7",
  purple5: "#f5eefc",

  // Red
  red1: "#e40046",
  red2: "#eb4074",
  red3: "#f59fba",
  red4: "#f8bfd1",
  red5: "#fce6ed",
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

/**
 * Typography System
 * Based on Roboto font family with Material Design-inspired sizing
 */
export const typography = {
  fontFamily: {
    primary: '"Roboto", sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
  },

  fontSize: {
    // Display titles (largest)
    displayTitleLg: "3.5rem",      // 56px
    displayTitle: "3rem",          // 48px
    displayTitleSm: "2rem",        // 32px

    // Titles
    titleLg: "1.75rem",            // 28px
    title: "1.5rem",               // 24px

    // Subtitles
    subtitleLg: "1.25rem",         // 20px
    subtitle: "1.125rem",          // 18px

    // Body text
    body: "1rem",                  // 16px
    bodySm: "0.875rem",            // 14px

    // Captions (smallest)
    caption: "0.75rem",            // 12px
    captionSm: "0.625rem",         // 10px
  },

  lineHeight: {
    displayTitleLg: "5.25rem",     // 84px
    displayTitle: "4.5rem",        // 72px
    displayTitleSm: "3rem",        // 48px
    titleLg: "2.625rem",           // 42px
    title: "2.25rem",              // 36px
    subtitleLg: "1.875rem",        // 30px
    subtitle: "1.6875rem",         // 27px
    body: "1.5rem",                // 24px
    bodySm: "1.3125rem",           // 21px
    caption: "1.125rem",           // 18px
    captionSm: "0.9375rem",        // 15px
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

// ============================================================================
// SPACING
// ============================================================================

/**
 * Spacing scale based on 4px base unit
 * Follows a consistent scale for margins, padding, and gaps
 */
export const spacing = {
  0: "0",
  1: "0.25rem",    // 4px
  2: "0.5rem",     // 8px
  3: "0.75rem",    // 12px
  4: "1rem",       // 16px
  5: "1.25rem",    // 20px
  6: "1.5rem",     // 24px
  8: "2rem",       // 32px
  10: "2.5rem",    // 40px
  12: "3rem",      // 48px
  16: "4rem",      // 64px
  20: "5rem",      // 80px
  24: "6rem",      // 96px
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

/**
 * Border radius tokens
 * Used for rounded corners on buttons, cards, inputs, etc.
 */
export const borderRadius = {
  none: "0",
  sm: "2px",
  default: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  full: "9999px",  // Perfect circle
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

/**
 * Box shadow tokens
 * Used for elevation and depth
 */
export const shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
} as const;

// ============================================================================
// Z-INDEX
// ============================================================================

/**
 * Z-index scale
 * Ensures proper layering of components
 */
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 40,
  modal: 50,
  popover: 51,
  toast: 100,
} as const;

// ============================================================================
// DIMENSIONS
// ============================================================================

/**
 * Common dimension tokens
 */
export const dimensions = {
  headerHeight: "56px",
  sectionContainerHeight: "24px",
} as const;

// ============================================================================
// INPUT & BUTTON SIZES
// ============================================================================

/**
 * Size variants for inputs and buttons
 */
export enum InputSize {
  TABLET = "tablet",
  LARGE = "large",
  NORMAL = "normal",
  COMPACT = "compact",
  TINY = "tiny",
}

export enum ButtonSize {
  TABLET = "tablet",
  LARGE = "large",
  NORMAL = "normal",
  COMPACT = "compact",
  TINY = "tiny",
}

export enum ButtonType {
  PRIMARY = "primary",
  OUTLINED = "outlined",
  SHADED = "shaded",
  TEXT = "text",
  ICON_PRIMARY = "icon_primary",
  ICON_SECONDARY = "icon_secondary",
}

export enum ButtonColor {
  NORMAL = "normal",
  HEADING_TEXT = "heading_text",
  DANGER = "danger",
  WARNING = "warning",
  SUCCESS = "success",
  FONT = "font",
  FONT_SECONDARY = "font_secondary",
  WHITE = "white",
}

// ============================================================================
// BREAKPOINTS
// ============================================================================

/**
 * Responsive breakpoints
 * Mobile-first approach
 */
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// ============================================================================
// TRANSITIONS
// ============================================================================

/**
 * Transition timing tokens
 * For animations and transitions
 */
export const transitions = {
  fast: "150ms",
  default: "200ms",
  slow: "300ms",
  slower: "500ms",
} as const;

export const easings = {
  default: "cubic-bezier(0.4, 0, 0.2, 1)",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;
