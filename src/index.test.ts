/* eslint-disable @typescript-eslint/no-var-requires */

const dispatchScriptEvent = (eventType: string): void => {
  const injectedScript = document.querySelector(
    'script[src="https://js.stripe.com/terminal/v1"]'
  );

  if (!injectedScript) {
    throw new Error('could not find StripeTerminal script element');
  }

  injectedScript.dispatchEvent(new Event(eventType));
};

describe('Stripe module loader', () => {
  afterEach(() => {
    const script = document.querySelector(
      'script[src="https://js.stripe.com/terminal/v1"], script[src="https://js.stripe.com/terminal/v1/"]'
    );
    if (script && script.parentElement) {
      script.parentElement.removeChild(script);
    }
    delete window.StripeTerminal;
    jest.resetModules();
  });

  it('injects the Terminal script as a side effect after a tick', () => {
    require('./index');

    expect(
      document.querySelector('script[src="https://js.stripe.com/terminal/v1"]')
    ).toBe(null);

    return Promise.resolve().then(() => {
      expect(
        document.querySelector(
          'script[src="https://js.stripe.com/terminal/v1"]'
        )
      ).not.toBe(null);
    });
  });

  it('does not inject the script when Stripe is already loaded', () => {
    require('./index');

    window.StripeTerminal = jest.fn((key) => ({key})) as any;

    return new Promise((resolve) => setTimeout(resolve)).then(() => {
      expect(
        document.querySelector(
          'script[src="https://js.stripe.com/terminal/v1"]'
        )
      ).toBe(null);
    });
  });

  describe('does not inject a duplicate script when one is already present', () => {
    test('when the script does not have a trailing slash', () => {
      require('./index');

      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/terminal/v1';
      document.body.appendChild(script);

      return Promise.resolve().then(() => {
        expect(
          document.querySelectorAll(
            'script[src="https://js.stripe.com/terminal/v1"], script[src="https://js.stripe.com/terminal/v1/"]'
          )
        ).toHaveLength(1);
      });
    });

    test('when the script has a trailing slash', () => {
      require('./index');

      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/terminal/v1/';
      document.body.appendChild(script);

      return Promise.resolve().then(() => {
        expect(
          document.querySelectorAll(
            'script[src="https://js.stripe.com/terminal/v1"], script[src="https://js.stripe.com/terminal/v1/"]'
          )
        ).toHaveLength(1);
      });
    });
  });

  describe.each(['./index', './pure'])(
    'loadStripeTerminal (%s.ts)',
    (requirePath) => {
      beforeEach(() => {
        jest.restoreAllMocks();
        jest.spyOn(console, 'warn').mockReturnValue();
      });

      it('resolves loadStripeTerminal with Terminal object', async () => {
        const {loadStripeTerminal} = require(requirePath);
        const stripePromise = loadStripeTerminal();

        await new Promise((resolve) => setTimeout(resolve));
        window.StripeTerminal = jest.fn() as any;
        dispatchScriptEvent('load');

        return expect(stripePromise).resolves.toBeDefined();
      });

      it('rejects when the script fails', async () => {
        const {loadStripeTerminal} = require(requirePath);
        const stripePromise = loadStripeTerminal();

        await Promise.resolve();
        dispatchScriptEvent('error');

        await expect(stripePromise).rejects.toEqual(
          new Error('Failed to load StripeTerminal')
        );

        expect(console.warn).not.toHaveBeenCalled();
      });

      it('rejects when Terminal is not added to the window for some reason', async () => {
        const {loadStripeTerminal} = require(requirePath);
        const stripePromise = loadStripeTerminal();

        await Promise.resolve();
        dispatchScriptEvent('load');

        return expect(stripePromise).rejects.toEqual(
          new Error('StripeTerminal not available')
        );
      });
    }
  );

  describe('loadStripeTerminal (index.ts)', () => {
    it('does not cause unhandled rejects when the script fails', async () => {
      require('./index');

      await Promise.resolve();
      dispatchScriptEvent('error');

      // Turn the task loop to make sure the internal promise handler has been invoked
      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(console.warn).toHaveBeenCalledWith(
        new Error('Failed to load StripeTerminal')
      );
    });
  });
});
