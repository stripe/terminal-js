///<reference path='../types/index.d.ts' />
import {StripeTerminal} from '@stripe/terminal-js';
import {loadScript, initStripeTerminal} from './shared';

// Execute our own script injection after a tick to give users time to do their
// own script injection.
const stripePromise = Promise.resolve().then(loadScript);

let loadCalled = false;

stripePromise.catch((err) => {
  if (!loadCalled) {
    console.warn(err);
  }
});

export const loadStripe = (): Promise<StripeTerminal | null> => {
  loadCalled = true;

  return stripePromise.then((maybeStripe) => initStripeTerminal(maybeStripe));
};
