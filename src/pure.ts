///<reference path='../types/index.d.ts' />

import {StripeTerminal} from '@stripe/terminal-js';
import {loadScript, initStripeTerminal} from './shared';

export const loadStripeTerminal = (): Promise<StripeTerminal | null> =>
  loadScript().then((maybeStripe) => initStripeTerminal(maybeStripe));
