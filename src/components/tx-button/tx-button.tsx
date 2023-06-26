import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'tx-button',
  styleUrl: 'tx-button.css',
  shadow: true,
})
export class TxButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
