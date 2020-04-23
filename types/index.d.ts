///<reference path='./terminal-js/terminal-js.d.ts' />

declare module '@stripe/terminal-js' {
  const loadStripeTerminal: () => Promise<StripeTerminal | null>;
}

interface Window {
  // Stripe.js must be loaded directly from https://js.stripe.com/v3, which
  // places a `Stripe` object on the window
  StripeTerminal?: import('@stripe/terminal-js').StripeTerminal;
}
