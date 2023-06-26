import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { f as format } from './utils.js';

const inputFormCss = "";

const MyComponent = /*@__PURE__*/ proxyCustomElement(class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return (h("div", null, "Hello, World! I'm ", this.getText(), h("input", { type: 'text', value: 'this is default input' })));
  }
  static get style() { return inputFormCss; }
}, [1, "input-form", {
    "first": [1],
    "middle": [1],
    "last": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["input-form"];
  components.forEach(tagName => { switch (tagName) {
    case "input-form":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent);
      }
      break;
  } });
}

const InputForm = MyComponent;
const defineCustomElement = defineCustomElement$1;

export { InputForm, defineCustomElement };

//# sourceMappingURL=input-form.js.map