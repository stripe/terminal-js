import {assert, Has} from 'conditional-type-checks';

/*
 * This code will not run, but will be typechecked as a test.
 */

import {
  loadStripeTerminal,
  StripeTerminal as IStripeTerminal,
  DiscoverResult,
  Reader,
  IErrorResponse,
  ErrorResponse,
  SdkManagedPaymentIntent,
} from '../../types/index';

declare const StripeTerminal: IStripeTerminal;

const main = async () => {
  const stripePromise: Promise<IStripeTerminal | null> = loadStripeTerminal();

  type SrcModule = typeof import('../../src/index');

  const terminal = StripeTerminal.create({
    onFetchConnectionToken: async () => 'test_token',
  });

  terminal.overrideBaseURL('http://foo');

  const discoverResult:
    | DiscoverResult
    | ErrorResponse = await terminal.discoverReaders({
    device_type: 'foo',
  });

  const reader: {reader: Reader} | ErrorResponse = await terminal.connectReader(
    {
      id: 'id',
      object: 'terminal.reader',
      device_type: 'verifone_P400',
      ip_address: 'address',
      serial_number: 'serial',
      livemode: false,
      device_sw_version: '0.0.0',
      label: 'foo',
      location: null,
      metadata: {},
      status: 'online',
    }
  );

  const connReader: Reader = terminal.getConnectedReader();

  terminal.disconnectReader();

  const clearResp: {} | ErrorResponse = terminal.clearCachedCredentials();

  const clearDispResp: {} | ErrorResponse = terminal.clearReaderDisplay();

  const setDispResp: {} | ErrorResponse = terminal.setReaderDisplay({
    type: 'type',
  });

  const payIntent:
    | {paymentIntent: SdkManagedPaymentIntent}
    | ErrorResponse = await terminal.collectPaymentMethod('pay_intent');
};

main();
