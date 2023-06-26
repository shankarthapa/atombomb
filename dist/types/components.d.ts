/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface InputForm {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface TxButton {
    }
}
declare global {
    interface HTMLInputFormElement extends Components.InputForm, HTMLStencilElement {
    }
    var HTMLInputFormElement: {
        prototype: HTMLInputFormElement;
        new (): HTMLInputFormElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLTxButtonElement extends Components.TxButton, HTMLStencilElement {
    }
    var HTMLTxButtonElement: {
        prototype: HTMLTxButtonElement;
        new (): HTMLTxButtonElement;
    };
    interface HTMLElementTagNameMap {
        "input-form": HTMLInputFormElement;
        "my-component": HTMLMyComponentElement;
        "tx-button": HTMLTxButtonElement;
    }
}
declare namespace LocalJSX {
    interface InputForm {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface TxButton {
    }
    interface IntrinsicElements {
        "input-form": InputForm;
        "my-component": MyComponent;
        "tx-button": TxButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "input-form": LocalJSX.InputForm & JSXBase.HTMLAttributes<HTMLInputFormElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "tx-button": LocalJSX.TxButton & JSXBase.HTMLAttributes<HTMLTxButtonElement>;
        }
    }
}
