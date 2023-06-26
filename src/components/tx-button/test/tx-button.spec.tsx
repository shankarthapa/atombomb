import { newSpecPage } from '@stencil/core/testing';
import { TxButton } from '../tx-button';

describe('tx-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TxButton],
      html: `<tx-button></tx-button>`,
    });
    expect(page.root).toEqualHtml(`
      <tx-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tx-button>
    `);
  });
});
