/* eslint-disable no-unused-vars */
import Stripe from 'stripe';

import {
  IActivateTerminalRequest,
  IErrorResponse,
  IPaymentMethod,
  IPaymentMethodReadReusableResponse,
  IRefundChargeRequest,
  ISetReaderDisplayRequest,
  ITipConfiguration,
  IRefund,
} from './proto';

export {
  IActivateTerminalRequest,
  IErrorResponse,
  IPaymentMethodReadReusableResponse,
  IPaymentMethod,
  IRefundChargeRequest,
  ISetReaderDisplayRequest,
  ITipConfiguration,
  IRefund,
};

export enum PaymentStatus {
  NOT_READY = 'not_ready',
  READY = 'ready',
  WAITING_FOR_INPUT = 'waiting_for_input',
  PROCESSING = 'processing',
}

export enum ConnectionStatus {
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  NOT_CONNECTED = 'not_connected',
}

export enum OutputLogLevel {
  NONE = 'none',
  VERBOSE = 'verbose',
}

export declare type ConnectionToken = string;
export declare type FetchConnectionTokenFn = () => Promise<ConnectionToken>;

export declare type ISetReaderDisplayResponse = Record<string, never>;
export declare type ICancelResponse = Record<string, never>;
export declare type IClearCachedCredentialsResponse = Record<string, never>;
export declare type IClearReaderDisplayResponse = Record<string, never>;
export declare type ICollectRefundPaymentMethodResponse = Record<string, never>;
export declare type IDisconnectResponse = Record<string, never>;

export interface StatusEvent<T extends string> {
  status: T;
}
export interface DisconnectEvent {
  error?: ExposedError;
}
export declare type ConnectionStatusEvent = StatusEvent<ConnectionStatus>;
export declare type PaymentStatusEvent = StatusEvent<PaymentStatus>;
export declare type EventHandler<T> = (event: T) => void;
export interface TerminalCallbacks {
  onFetchConnectionToken: FetchConnectionTokenFn;
  onUnexpectedReaderDisconnect?: EventHandler<DisconnectEvent>;
  onConnectionStatusChange?: EventHandler<ConnectionStatusEvent>;
  onPaymentStatusChange?: EventHandler<PaymentStatusEvent>;
}
export interface ReaderBehaviors {
  allowCustomerCancel?: boolean;
}
export interface TerminalOptions {
  logLevel?: OutputLogLevel;
  simulatorBaseUrl?: string;
  readerBehavior?: ReaderBehaviors;
}
export declare type TerminalProps = TerminalOptions & TerminalCallbacks;

export declare type PaymentIntentClientSecret = string;

export declare type DeviceType = Stripe.Terminal.Reader.DeviceType;

export declare type Reader = Stripe.Terminal.Reader;

export declare type IPaymentIntent = Stripe.PaymentIntent;
export declare type ISetupIntent = Stripe.SetupIntent;

export interface ISdkManagedPaymentIntent extends IPaymentIntent {
  sdk_payment_details: IPaymentMethod;
}
export type SdkManagedPaymentIntent = ISdkManagedPaymentIntent;

export interface ICollectConfig {
  // Bypass tipping selection if it would have otherwise been shown.
  // For more information, see the official Stripe docs: [On Reader Tipping](https://stripe.com/docs/terminal/features/collecting-tips/on-reader)
  skip_tipping?: boolean | null;
}

export declare type ConnectOptions = Pick<
  IActivateTerminalRequest,
  'fail_if_in_use'
>;
export declare type RefundOptions = Pick<
  IRefundChargeRequest,
  'reverse_transfer' | 'refund_application_fee'
>;

export declare type ErrorResponse = {
  error: ExposedError;
};
export declare type ExposedError = {
  type?: string;
  request_id?: string;
  code?: string;
  message: string;
  decline_code?: string;
  payment_intent?: IPaymentIntent;
  failure_reason?: string;
  failure_balance_transaction?: string;
};

export interface SimulatorConfiguration {
  paymentMethodType?: 'interac_present' | null;
  testPaymentMethod?: string | null;
  testCardNumber?: string | null;
}

export interface DiscoveryMethodConfiguration {
  device_type?: string;
  method?: string;
  simulated?: boolean;
}
export interface InternetMethodConfiguration
  extends DiscoveryMethodConfiguration {
  method?: 'internet';
  location?: string;
}
export declare type DiscoveryConfig = InternetMethodConfiguration;
export declare type DiscoverResult = {
  discoveredReaders: Array<Reader>;
};

export type Address = Stripe.Address;

export type Location = Stripe.Terminal.Location;

export class Terminal {
  /**
   * Returns the current connection status of the PIN pad.
   */
  getConnectionStatus(): ConnectionStatus;
  /**
   * Returns the current transaction status.
   */
  getPaymentStatus(): PaymentStatus;
  /**
   * Returns a promise that resolves with discovered readers that can be connected to.
   */
  discoverReaders(
    config?: DiscoveryConfig
  ): Promise<DiscoverResult | ErrorResponse>;
  /**
   * Returns a promise that resolves only when the SDK has connected to a Reader.
   */
  connectReader(
    reader: Reader,
    connectOptions?: ConnectOptions
  ): Promise<
    | ErrorResponse
    | {
        reader: Reader;
      }
  >;
  /**
   * Returns the current connected reader.
   */
  getConnectedReader(): Reader;
  /**
   * Disconnects from any connected Readers and triggers reconnecting based on
   * the options in the passed in config.
   */
  disconnectReader(): Promise<IDisconnectResponse>;
  /**
   * Clears the cached connection token or rabbit sessions
   */
  clearCachedCredentials(): Promise<
    IClearCachedCredentialsResponse | ErrorResponse
  >;
  /**
   * Ends the Checkout Flow. This brings the UX back to the splash screen.
   */
  clearReaderDisplay(): Promise<IClearReaderDisplayResponse | ErrorResponse>;
  /**
   * Updates the PIN Pad UI with information on the basket the user is buying
   * @param request Request object containing information on the basket
   */
  setReaderDisplay(
    request: ISetReaderDisplayRequest
  ): Promise<ErrorResponse | ISetReaderDisplayResponse>;
  /**
   * Requests the Terminal object to collect a card source from the reader that
   * can be charged.
   * @param request Request object containing the payment intent secret of the intent to attach the
   * source to.
   */
  collectPaymentMethod(
    request: PaymentIntentClientSecret,
    options?: {
      tip_configuration?: ITipConfiguration;
      config_override?: ICollectConfig;
    }
  ): Promise<
    | ErrorResponse
    | {
        paymentIntent: ISdkManagedPaymentIntent;
      }
  >;
  /**
   * Confirms the payment intent which causes the charging of the user card.
   * @param request Object containing the payment intent to confirm.
   */
  processPayment(
    request: ISdkManagedPaymentIntent
  ): Promise<
    | ErrorResponse
    | {
        paymentIntent: IPaymentIntent;
      }
  >;
  cancelCollectPaymentMethod(): Promise<ErrorResponse | ICancelResponse>;
  readReusableCard(options?: {
    customer?: string;
  }): Promise<
    | ErrorResponse
    | {
        payment_method: IPaymentMethodReadReusableResponse;
      }
  >;

  /**
   * Requests the Terminal object to collect a card source from the reader that
   * can be saved via a SetupIntent.
   * @param clientSecret Request object containing the setup intent secret of the intent to attach The
   * @param customerConsentCollected boolean indicating whether or not customer consent to save their card was collected
   * source to.
   */
  collectSetupIntentPaymentMethod(
    clientSecret: string,
    customerConsentCollected: boolean
  ): Promise<ErrorResponse | {setupIntent: ISetupIntent}>;

  /**
   * Cancels an in-flight request made by collectSetupIntentPaymentMethod to collect a payment method for future use
   */
  cancelCollectSetupIntentPaymentMethod(): Promise<
    ErrorResponse | ICancelResponse
  >;

  /**
   * Confirms the setup intent which causes the card to be saved for future use.
   * @param setupIntent The SetupIntent object to confirm; use the value returned from collectSetupIntentPaymentMethod
   */
  confirmSetupIntent(
    setupIntent: ISetupIntent
  ): Promise<ErrorResponse | {setupIntent: ISetupIntent}>;

  collectRefundPaymentMethod(
    charge_id: string,
    amount: number,
    currency: string,
    options?: RefundOptions
  ): Promise<ErrorResponse | ICollectRefundPaymentMethodResponse>;

  processRefund(): Promise<
    | ErrorResponse
    | ErrorResponse
    | {
        refund: IRefund;
      }
  >;

  cancelCollectRefundPaymentMethod(): Promise<ErrorResponse | ICancelResponse>;
  cancelReadReusableCard(): Promise<ErrorResponse | ICancelResponse>;
  setSimulatorConfiguration(config: any): void;
  getSimulatorConfiguration(): SimulatorConfiguration;
  overrideBaseURL(url: string): void;
}
