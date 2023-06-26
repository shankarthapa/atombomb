'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-50dab298.js');

const txButtonCss = ":host{display:block}";

const TxButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
TxButton.style = txButtonCss;

exports.tx_button = TxButton;

//# sourceMappingURL=tx-button.cjs.entry.js.map