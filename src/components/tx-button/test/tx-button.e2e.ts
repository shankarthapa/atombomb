import { newE2EPage } from '@stencil/core/testing';

describe('tx-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tx-button></tx-button>');

    const element = await page.find('tx-button');
    expect(element).toHaveClass('hydrated');
  });
});
