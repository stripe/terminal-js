import {TerminalProps} from './rabbit/terminal-props';
import {
  Terminal as TerminalT,
  DiscoveredReaders as DiscoveredReadersT,
  Reader as ReaderT,
} from './index';

declare module '@stripe/terminal-js' {
  interface StripeTerminal {
    create(props: TerminalProps): Terminal;
  }
  type Terminal = TerminalT;
  type Reader = ReaderT;
  type DiscoveredReaders = DiscoveredReadersT;
}
