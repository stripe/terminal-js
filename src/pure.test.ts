/* eslint-disable @typescript-eslint/no-var-requires */

const SCRIPT_SELECTOR =
  'script[src="https://js.stripe.com/terminal/v1"], script[src="https://js.stripe.com/terminal/v1/"]';

describe('pure module', () => {
  afterEach(() => {
    const script = document.querySelector(SCRIPT_SELECTOR);
    if (script && script.parentElement) {
      script.parentElement.removeChild(script);
    }

    delete window.StripeTerminal;
    jest.resetModules();
  });

  test('does not inject the script if loadStripeTerminal is not called', async () => {
    require('./pure');

    expect(document.querySelector(SCRIPT_SELECTOR)).toBe(null);
  });

  test('it injects the script if loadStripeTerminal is called', async () => {
    const {loadStripeTerminal} = require('./pure');
    loadStripeTerminal();

    expect(document.querySelector(SCRIPT_SELECTOR)).not.toBe(null);
  });
});
