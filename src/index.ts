import {StripeTerminal} from '../types/index';
import {loadScript} from './shared';

// Execute our own script injection after a tick to give users time to do their
// own script injection.
const stripePromise = Promise.resolve().then(loadScript);

let loadCalled = false;

stripePromise.catch((err) => {
  if (!loadCalled) {
    console.warn(err);
  }
});

export const loadStripeTerminal = (): Promise<StripeTerminal | null> => {
  loadCalled = true;

  return stripePromise;
};
