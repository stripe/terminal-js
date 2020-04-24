import {StripeTerminal} from '../types/index';

// `_VERSION` will be rewritten by `@rollup/plugin-replace` as a string literal
// containing the package.json version
declare const _VERSION: string;

const V1_URL = 'https://js.stripe.com/terminal/v1';

const injectScript = (): HTMLScriptElement => {
  const script = document.createElement('script');
  script.src = V1_URL;

  const headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error(
      'Expected document.body not to be null. Terminal requires a <body> element.'
    );
  }

  headOrBody.appendChild(script);

  return script;
};

// TODO(jdivock): re-enable when we have a proper mechanism to track metrics

// const registerWrapper = (stripe: any): void => {
//   if (!stripe || !stripe._registerWrapper) {
//     return;
//   }
//
//   stripe._registerWrapper({name: 'terminal-js', version: _VERSION});
// };

let stripePromise: Promise<StripeTerminal | null> | null = null;

export const loadScript = (): Promise<StripeTerminal | null> => {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.StripeTerminal) {
      resolve(window.StripeTerminal);
      return;
    }

    const script: HTMLScriptElement =
      document.querySelector(
        `script[src="${V1_URL}"], script[src="${V1_URL}/"]`
      ) || injectScript();

    script.addEventListener('load', () => {
      if (window.StripeTerminal) {
        resolve(window.StripeTerminal);
      } else {
        reject(new Error('StripeTerminal not available'));
      }
    });

    script.addEventListener('error', () => {
      reject(new Error('Failed to load StripeTerminal'));
    });
  });

  return stripePromise;
};
