///<reference path='./rabbit/terminal-props.d.ts' />
///<reference path='./rabbit/terminal.d.ts' />

import {TerminalProps} from './rabbit/terminal-props';
import {Terminal} from './index';

declare module '@stripe/terminal-js' {
  interface StripeTerminal {
    create(props: TerminalProps): Terminal;
  }
}
