/**
 * Canary UI Component Library
 *
 * A React implementation of the Canary design system for prototyping.
 * All components maintain visual fidelity with the main Canary product.
 */

// Design Tokens
export * from "./design-tokens";

// Buttons
export { CanaryButton } from "./buttons";
export { ButtonType, ButtonSize, ButtonColor, IconPosition } from "./buttons/types";

// Forms
export {
  CanaryInput,
  CanaryTextArea,
  CanarySelect,
  CanaryCheckbox,
  CanaryRadio,
  CanaryRadioGroup,
} from "./forms";
export { InputSize, InputType } from "./forms/types";
export type { BaseFormProps, CanarySelectOption } from "./forms";

// Data Display
export { CanaryTag, CanaryTable, CanaryCard } from "./data-display";
export { TagColor } from "./data-display/types";
export type { CustomTagColor, CanaryTableColumn } from "./data-display";

// Layout
export { CanaryContainer, CanaryGrid, CanaryModal } from "./layout";

// Navigation
export { CanaryTabs, CanarySidebar, CanaryHeader } from "./navigation";

// Feedback
export { CanaryToast, CanaryAlert } from "./feedback";

// Loading
export { CanaryLoading } from "./loading";
