export * from './terminal-js/index';

import {TerminalProps} from './terminal-js/rabbit/terminal-props';
import {Terminal} from './terminal-js/index';

export interface StripeTerminal {
  create(props: TerminalProps): Terminal;
}

export const loadStripeTerminal: () => Promise<StripeTerminal | null>;

interface Window {
  // Terminal's sdk.js must be loaded directly from https://js.stripe.com/v3, which
  // places a `StripeTerminal` object on the window
  StripeTerminal?: StripeTerminal;
}
