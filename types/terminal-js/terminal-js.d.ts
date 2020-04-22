///<reference path='./rabbit/terminal-props.d.ts' />
///<reference path='./rabbit/terminal.d.ts' />

declare module "@stripe/stripe-js" {
  interface StripeTerminal {
    create(props: TerminalProps): Terminal;
  }
}
