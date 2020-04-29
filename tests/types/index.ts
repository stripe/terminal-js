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
} from '../../types/index';

declare const StripeTerminal: IStripeTerminal;

const main = async () => {
  const stripePromise: Promise<IStripeTerminal | null> = loadStripeTerminal();

  type SrcModule = typeof import('../../src/index');

  const terminal = StripeTerminal.create({
    onFetchConnectionToken: async () => 'test_token',
  });

  terminal.overrideBaseURL('http://foo');

  const discoverResult = await terminal.discoverReaders({
    device_type: 'foo',
  });
};

main();
