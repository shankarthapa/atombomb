import type { Components, JSX } from "../types/components";

interface InputForm extends Components.InputForm, HTMLElement {}
export const InputForm: {
  prototype: InputForm;
  new (): InputForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
