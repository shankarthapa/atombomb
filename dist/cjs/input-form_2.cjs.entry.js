'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8a37a30e.js');

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const inputFormCss = "";

const MyComponent$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return (index.h("div", null, "Hello, World! I'm ", this.getText(), index.h("input", { type: 'text', value: 'this is default input' })));
  }
};
MyComponent$1.style = inputFormCss;

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.first = undefined;
    this.middle = undefined;
    this.last = undefined;
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

exports.input_form = MyComponent$1;
exports.my_component = MyComponent;

//# sourceMappingURL=input-form_2.cjs.entry.js.map