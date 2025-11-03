/**
 * Data Display Component Types
 */

export enum TagColor {
  /** SUCCESS Green */
  OK = "ok",
  /** WARNING Yellow */
  WARNING = "warning",
  /** ERROR Red */
  ERROR = "error",
  /** DEFAULT Black/Gray */
  DARK = "dark",
  /** INFO Blue */
  INFO = "canary_blue",
  /** THEME uses theme button color*/
  THEME = "theme",
  /** WHITE */
  WHITE = "white",
}

export interface CustomTagColor {
  backgroundColor?: string;
  borderColor?: string;
  fontColor?: string;
  iconColor?: string;
}
