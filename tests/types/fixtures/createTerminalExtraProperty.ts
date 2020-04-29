import {loadStripeTerminal} from '../../../types/index';

const main = async (): Promise<void> => {
  // setup Terminal
  const StripeTerminal = (await loadStripeTerminal())!;

  const terminal = StripeTerminal.create({
    onFetchConnectionToken: async () => 'test_token',
    extra_property: 'foo',
  });

  terminal.discoverReaders();
};

main();
