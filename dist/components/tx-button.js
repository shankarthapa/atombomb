import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const txButtonCss = ":host{display:block}";

const TxButton$1 = /*@__PURE__*/ proxyCustomElement(class TxButton extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return txButtonCss; }
}, [1, "tx-button"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["tx-button"];
  components.forEach(tagName => { switch (tagName) {
    case "tx-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TxButton$1);
      }
      break;
  } });
}

const TxButton = TxButton$1;
const defineCustomElement = defineCustomElement$1;

export { TxButton, defineCustomElement };

//# sourceMappingURL=tx-button.js.map