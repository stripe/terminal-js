import {loadStripeTerminal as IloadStripeTerminal} from './src/pure';
import {TerminalProps} from './types/terminal-js/rabbit/terminal-props';
import {Terminal} from './types/terminal-js/index';

export * from './types/terminal-js/index';

export interface StripeTerminal {
  create(props: TerminalProps): Terminal;
}

export const loadStripeTerminal: typeof IloadStripeTerminal;
