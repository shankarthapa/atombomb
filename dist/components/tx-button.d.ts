import type { Components, JSX } from "../types/components";

interface TxButton extends Components.TxButton, HTMLElement {}
export const TxButton: {
  prototype: TxButton;
  new (): TxButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
