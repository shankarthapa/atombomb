import { r as registerInstance, h } from './index-56892554.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const inputFormCss = "";

const MyComponent$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
MyComponent$1.style = inputFormCss;

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

export { MyComponent$1 as input_form, MyComponent as my_component };

//# sourceMappingURL=input-form_2.entry.js.map