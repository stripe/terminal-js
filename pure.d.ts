import {loadStripeTerminal as IloadStripeTerminal} from './src/pure';
import {TerminalProps} from './types/terminal-js/rabbit/terminal-props';
import {
  Terminal,
  PaymentStatus,
  ConnectionStatus,
} from './types/terminal-js/index';

export * from './types/terminal-js/index';

export interface StripeTerminal {
  create(props: TerminalProps): Terminal;
  PaymentStatus: PaymentStatus;
  ConnectionStatus: ConnectionStatus;
}

export const loadStripeTerminal: typeof IloadStripeTerminal;
