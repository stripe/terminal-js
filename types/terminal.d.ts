import {
  IActivateTerminalRequest,
  IErrorResponse,
  IPaymentIntent,
  IPaymentMethod,
  IRefundChargeRequest,
  ISetReaderDisplayRequest,
  ITipConfiguration,
} from './proto';

export {
  IActivateTerminalRequest,
  IErrorResponse,
  IPaymentIntent,
  IPaymentMethod,
  IRefundChargeRequest,
  ISetReaderDisplayRequest,
  ITipConfiguration,
};

export declare type ConnectionToken = string;
export declare type FetchConnectionTokenFn = () => Promise<ConnectionToken>;

export declare enum OutputLogLevel {
  NONE = 'none',
  VERBOSE = 'verbose',
}
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

// eslint-disable-next-line
export interface ISdkManagedPaymentIntent extends IPaymentIntent {
  sdk_payment_details: IPaymentMethod;
}
export type SdkManagedPaymentIntent = ISdkManagedPaymentIntent;

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
}

export interface Reader {
  id: string;
  object: string;
  device_type: string;
  ip_address: string;
  label?: string;
  serial_number: string;
  status?: 'offline' | 'online';
  location?: string;
  base_url?: string;
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
  disconnectReader(): Promise<{}>;
  /**
   * Clears the cached connection token or rabbit sessions
   */
  clearCachedCredentials(): Promise<{} | ErrorResponse>;
  /**
   * Ends the Checkout Flow. This brings teh UX back to the splash screen.
   */
  clearReaderDisplay(): Promise<{} | ErrorResponse>;
  /**
   * Updates the PIN Pad UI with information on the basket the user is buying
   * @param request Request object containing information on the basket
   */
  setReaderDisplay(
    request: ISetReaderDisplayRequest
  ): Promise<ErrorResponse | {}>;
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
  cancelCollectPaymentMethod(): Promise<ErrorResponse | {}>;
  readReusableCard(options?: {
    customer?: string;
  }): Promise<
    | ErrorResponse
    | {
        payment_method: any;
      }
  >;
  collectRefundPaymentMethod(
    charge_id: string,
    amount: number,
    currency: string,
    options?: RefundOptions
  ): Promise<ErrorResponse | {}>;
  processRefund(): Promise<
    | ErrorResponse
    | ErrorResponse
    | {
        refund: any;
      }
  >;
  cancelCollectRefundPaymentMethod(): Promise<ErrorResponse | {}>;
  cancelReadReusableCard(): Promise<ErrorResponse | {}>;
  setSimulatorConfiguration(config: any): void;
  getSimulatorConfiguration(): SimulatorConfiguration;
  overrideBaseURL(url: string): void;
}
