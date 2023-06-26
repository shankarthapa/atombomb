import { Host, h } from '@stencil/core';
export class TxButton {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "tx-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["tx-button.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tx-button.css"]
    };
  }
}
//# sourceMappingURL=tx-button.js.map
