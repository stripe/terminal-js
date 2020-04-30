import {assert, Has} from 'conditional-type-checks';

/*
 * This code will not run, but will be typechecked as a test.
 */

import {
  loadStripeTerminal,
  StripeTerminal as IStripeTerminal,
  DiscoveredReaders,
  DiscoverResult,
  Reader,
  ErrorResponse,
  SdkManagedPaymentIntent,
  StripeApiModels,
  SimulatorConfiguration,
} from '../../types/index';

declare const StripeTerminal: IStripeTerminal;

const main = async () => {
  const stripePromise: Promise<IStripeTerminal | null> = loadStripeTerminal();

  type SrcModule = typeof import('../../src/index');

  const terminal = StripeTerminal.create({
    onFetchConnectionToken: async () => 'test_token',
  });

  const discoverResult:
    | DiscoverResult
    | ErrorResponse = await terminal.discoverReaders({
    device_type: 'foo',
  });

  const reader: {reader: Reader} | ErrorResponse = await terminal.connectReader(
    {
      id: 'id',
      object: 'object',
      device_type: 'type',
      ip_address: 'address',
      serial_number: 'serial',
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

  const procPayItent:
    | {paymentIntent: StripeApiModels.PaymentIntent}
    | ErrorResponse = await terminal.processPayment({
    sdk_payment_details: {},
    id: 'id',
    created: 1234,
    status: StripeApiModels.PaymentIntentStatus.requires_source,
    amount: 123,
    currency: 'USD',
    source: {
      id: 'foo',
      type: 'womp',
      metadata: {},
      owner: 'me',
    },
    statement_descriptor: 'foo',
    description: 'desc',
    receipt_email: 'womp',
    livemode: true,
  });

  const cancelResp:
    | {}
    | ErrorResponse = await terminal.cancelCollectPaymentMethod();

  const readReuseResp:
    | {payment_method: any}
    | ErrorResponse = await terminal.readReusableCard();

  const collectRefundResp:
    | {}
    | ErrorResponse = await terminal.collectRefundPaymentMethod(
    'charge',
    1234,
    'USD'
  );

  const procRefundResp:
    | {refund: any}
    | ErrorResponse = await terminal.processRefund();

  const cancelCollRefundResp:
    | {}
    | ErrorResponse = await terminal.cancelCollectRefundPaymentMethod();

  const cancelReadResuseResp:
    | {}
    | ErrorResponse = await terminal.cancelReadReusableCard();

  const simConfig: SimulatorConfiguration = terminal.getSimulatorConfiguration();

  terminal.setSimulatorConfiguration({});

  terminal.overrideBaseURL('http://foo');
};

main();
