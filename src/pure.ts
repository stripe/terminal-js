///<reference path='../types/index.d.ts' />

import {StripeTerminal} from '../types/index';
import {loadScript} from './shared';

export const loadStripeTerminal = (): Promise<StripeTerminal | null> =>
  loadScript();
