import {loadStripeTerminal as IloadStripeTerminal} from './src/pure';
import {
  Terminal,
  PaymentStatus,
  ConnectionStatus,
  OutputLogLevel,
  TerminalProps,
} from './types/terminal';

export * from './types/terminal';

export interface StripeTerminal {
  create(props: TerminalProps): Terminal;
  PaymentStatus: PaymentStatus;
  ConnectionStatus: ConnectionStatus;
  OutputLogLevel: OutputLogLevel;
}

export const loadStripeTerminal: typeof IloadStripeTerminal;
