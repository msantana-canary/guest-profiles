/**
 * Form Component Types
 */

export enum InputSize {
  TABLET = "tablet",
  LARGE = "large",
  NORMAL = "normal",
  COMPACT = "compact",
  TINY = "tiny",
}

export enum InputType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  NUMBER = "number",
  TEL = "tel",
  URL = "url",
  SEARCH = "search",
  DATE = "date",
  TIME = "time",
  DATETIME_LOCAL = "datetime-local",
}

export interface BaseFormProps {
  label?: string;
  isDisabled?: boolean;
  isReadonly?: boolean;
  isRequired?: boolean;
  error?: string;
  helperText?: string;
  size?: InputSize;
  className?: string;
}
