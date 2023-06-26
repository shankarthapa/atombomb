import { r as registerInstance, h, H as Host } from './index-56892554.js';

const txButtonCss = ":host{display:block}";

const TxButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
TxButton.style = txButtonCss;

export { TxButton as tx_button };

//# sourceMappingURL=tx-button.entry.js.map