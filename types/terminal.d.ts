/* eslint-disable no-unused-vars */
import Stripe from 'stripe';

import {
  IActivateTerminalRequest,
  IErrorResponse,
  IPaymentMethod as SdkIPaymentMethod,
  IPaymentMethodReadReusableResponse,
  IRefundChargeRequest,
  ISetReaderDisplayRequest,
  ITipConfiguration,
  IRefund,
  IPaymentIntentExpandedMethod,
  IReaderSettings,
  ISetReaderSettingsRequest,
  IAccessibilitySettings,
  IAccessibilityParameters,
  ITextToSpeechStatus,
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
  IReaderSettings,
  ISetReaderSettingsRequest,
  IAccessibilitySettings,
  IAccessibilityParameters,
  ITextToSpeechStatus,
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

export enum AllowRedisplay {
  ALWAYS = 'always',
  LIMITED = 'limited',
  UNSPECIFIED = 'unspecified',
}

export declare type ConnectionToken = string;
export declare type FetchConnectionTokenFn = () => Promise<ConnectionToken>;

export declare type ISetReaderDisplayResponse = Record<string, never>;
export declare type ICancelResponse = Record<string, never>;
export declare type IClearCachedCredentialsResponse = Record<string, never>;
export declare type IClearReaderDisplayResponse = Record<string, never>;
export declare type ICollectRefundPaymentMethodResponse = Record<string, never>;
export declare type IDisconnectResponse = Record<string, never>;
export declare type IPrintResponse = Record<string, never>;

interface IPaymentMethod extends SdkIPaymentMethod {
  payment_intent?: IPaymentIntentExpandedMethod | null;
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
  tipping?: ITippingConfig | null;
  // set to true to return the expanded payment_intent.
  update_payment_intent?: boolean | null;

  // the ID of the payment intent to return back.
  payment_intent_id?: string | null;

  // Optional notice to display on the payment collection screen to inform the customer of a surcharge.
  surcharge_notice?: string | null;

  // Request ability to offer dynamic currency conversion (DCC) if the card is eligible.
  request_dynamic_currency_conversion?: boolean | null;

  // Required if `setup_future_usage` is set; otherwise, it defaults to `unspecified`.
  // An enum value indicating whether future checkout flows can show this payment method to its customer.
  allow_redisplay?: AllowRedisplay | null;

  // Collect and process the payment as a Mail Order/Telephone Order payment. Contact Stripe support to enable this feature on your account.
  // For more information, see the official Stripe docs: [Mail Order Telephone Order transactions](https://support.stripe.com/questions/mail-order-telephone-order-(moto)-transactions-when-to-categorize-transactions-as-moto)
  moto?: boolean | null;
}

// Contains per-transaction configuration information relevant to collecting tips
export interface ITippingConfig {
  // Calculate percentage-based tips based on this amount.
  // For more information, see the official Stripe docs: [On Reader Tipping](https://stripe.com/docs/terminal/features/collecting-tips/on-reader)
  eligible_amount?: number | null;
}

// Contains configuration information relevant to processing/confirming a payment method.
export interface IProcessConfig {
  // Surcharge amount to be applied to the payment.
  amount_surcharge?: number | null;

  // The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method’s app or site.
  // If you’d prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
  // This parameter is only used for redirect-based payment methods.
  return_url?: string | null;
}

// Contains configuration information relevant to collecting a setup intent.
export interface ISetupIntentConfig {
  // Whether to show a cancel button in transaction UI on Stripe smart readers.
  enable_customer_cancellation?: boolean | null;

  // Save the payment method using the Mail Order/Telephone Order feature. Contact Stripe support to enable this feature on your account.
  // For more information, see the official Stripe docs: [Mail Order Telephone Order transactions](https://support.stripe.com/questions/mail-order-telephone-order-(moto)-transactions-when-to-categorize-transactions-as-moto)
  moto?: boolean | null;
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

export enum SimulatedCollectInputsResultType {
  SUCCEEDED = 'succeeded',
  TIMEOUT = 'timeout',
}

export interface ISimulatedCollectInputsResult {
  resultType: SimulatedCollectInputsResultType;
}

export enum SimulatedCollectInputsSkipBehavior {
  NONE = 'none',
  ALL = 'all',
}

export interface ISimulatedCollectInputsResultSucceeded
  extends ISimulatedCollectInputsResult {
  skipBehavior: SimulatedCollectInputsSkipBehavior;
}

export interface ISimulatedCollectInputsResultTimeout
  extends ISimulatedCollectInputsResult {}

export interface SimulatorConfiguration {
  paymentMethodType?: 'interac_present' | null;
  testPaymentMethod?: string | null;
  testCardNumber?: string | null;
  tipAmount?: number | null;
  collectInputsResult?: ISimulatedCollectInputsResult | null;
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

// Contains information about the inputs to collect from the reader
export interface ICollectInputsParameters {
  inputs: Array<IInput>;
}

export enum FormType {
  SELECTION = 'selection',
  SIGNATURE = 'signature',
  PHONE = 'phone',
  EMAIL = 'email',
  NUMERIC = 'numeric',
  TEXT = 'text',
}

// Represents a single input form
export interface IInput {
  // Set the type of the form
  formType: FormType;

  // Set whether this form is required
  required?: boolean | null;

  // Set the title of the form
  title: string;

  // Set the description of the form
  description?: string | null;

  // Set the toggles to display on the form
  toggles?: IToggle[] | null;

  // Modify the skip button text
  skipButtonText?: string | null;
}

// Represents the toggle state
export enum ToggleValue {
  // Toggle is checked or on
  ENABLED = 'enabled',
  // Toggle is unchecked or off
  DISABLED = 'disabled',
}

// Contains information for a collect inputs toggle
export interface IToggle {
  // Set the main, larger style text.
  title?: string | null;
  // Set the secondary, smaller style text.
  description?: string | null;
  // Set the initial value to be set for the toggle.
  defaultValue: ToggleValue;
}

// Represents the style of a selection form button
export enum SelectionButtonStyle {
  // Button will use a highlighted, accent color
  PRIMARY = 'primary',
  // Button will use a subdued, secondary color
  SECONDARY = 'secondary',
}

// Contains information for a selection form button
export interface ISelectionButton {
  // Set the style of a selection button
  style: SelectionButtonStyle;
  // Set the button text
  text: string;
  // Set the button id
  id: string;
}

// Contains information about a selection form to display on the reader
export interface SelectionInput extends IInput {
  // Set the button choices to display on the form
  selectionButtons: ISelectionButton[];
}

// Contains information about a signature form to display on the reader
export interface SignatureInput extends IInput {
  // Modify the submit button text
  submitButtonText?: string | null;
}

// Contains information about a phone form to display on the reader
export interface PhoneInput extends IInput {
  // Modify the submit button text
  submitButtonText?: string | null;
}

// Contains information about an email form to display on the reader
export interface EmailInput extends IInput {
  // Modify the submit button text
  submitButtonText?: string | null;
}

// Contains information about a text form to display on the reader
export interface TextInput extends IInput {
  // Modify the submit button text
  submitButtonText?: string | null;
}

// Contains information about a numeric form to display on the reader
export interface NumericInput extends IInput {
  // Modify the submit button text
  submitButtonText?: string | null;
}

// Contains data collected for a toggle
export enum ToggleResult {
  // Toggle is unchecked or off
  DISABLED = 'disabled',
  // Toggle is checked or on
  ENABLED = 'enabled',
  // Input form is skipped, no value
  SKIPPED = 'skipped',
}

// Contains the common fields for all input result types
export interface ICollectInputsResult {
  // the type of the form
  formType: FormType;

  // if true, the skip button was pressed to skip the form.
  skipped: boolean;

  // array of toggles and selected value. Values are `ToggleResult.SKIPPED` if form was skipped.
  toggles: ToggleResult[];
}

// Contains data collected from a selection form
export interface SelectionResult extends ICollectInputsResult {
  // selected button. Null if the form was skipped.
  selection?: string | null;
  // selected button ID. Null if the form was skipped.
  selectionId?: string | null;
}

// Contains data collected from a signature form
export interface SignatureResult extends ICollectInputsResult {
  // signature in svg format. Null if the form was skipped.
  signatureSvg?: string | null;
}

// Contains data collected from a phone form
export interface PhoneResult extends ICollectInputsResult {
  // the submitted phone number in E.164 format. Null if the form was skipped.
  phone?: string | null;
}

// Contains data collected from an email form
export interface EmailResult extends ICollectInputsResult {
  // the submitted email. Null if the form was skipped.
  email?: string | null;
}

// Contains data collected from a text form
export interface TextResult extends ICollectInputsResult {
  // the submitted text. Null if the form was skipped.
  text?: string | null;
}

// Contains data collected from an email form
export interface NumericResult extends ICollectInputsResult {
  // the submitted number as a string. Null if the form was skipped.
  numericString?: string | null;
}

// Represents the content to print to a reader's embedded printer.
export type IPrintContent = HTMLCanvasElement;

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
   * Display forms and collect information from customers. Available for BBPOS WisePOS E and Stripe S700.
   * @param collectInputsParameters Parameters to configure forms
   */
  collectInputs(
    collectInputsParameters: ICollectInputsParameters
  ): Promise<ErrorResponse | Array<ICollectInputsResult>>;
  /**
   * Cancels an in-flight request made by collectInputs
   */
  cancelCollectInputs(): Promise<ErrorResponse | ICancelResponse>;
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
  cancelCollectPaymentMethod(): Promise<ErrorResponse | ICancelResponse>;
  /**
   * Confirms the payment intent which causes the charging of the user card.
   * @param request Object containing the payment intent to confirm.
   */
  processPayment(
    request: ISdkManagedPaymentIntent,
    options?: {
      config_override?: IProcessConfig;
    }
  ): Promise<
    | ErrorResponse
    | {
        paymentIntent: IPaymentIntent;
      }
  >;
  cancelProcessPayment(): Promise<ErrorResponse | ICancelResponse>;
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
   * @param customerConsentCollectedOrAllowRedisplay field indicating whether this payment method can be shown again to its customer in a checkout flow.
   * @param config an optional object containing collection configuration.
   */
  collectSetupIntentPaymentMethod(
    clientSecret: string,
    customerConsentCollectedOrAllowRedisplay: boolean | AllowRedisplay,
    config: ISetupIntentConfig | null
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
  cancelConfirmSetupIntent(): Promise<ErrorResponse | ICancelResponse>;

  collectRefundPaymentMethod(
    charge_id: string,
    amount: number,
    currency: string,
    options?: RefundOptions
  ): Promise<ErrorResponse | ICollectRefundPaymentMethodResponse>;
  cancelCollectRefundPaymentMethod(): Promise<ErrorResponse | ICancelResponse>;

  processRefund(): Promise<
    | ErrorResponse
    | ErrorResponse
    | {
        refund: IRefund;
      }
  >;
  cancelProcessRefund(): Promise<ErrorResponse | ICancelResponse>;

  cancelReadReusableCard(): Promise<ErrorResponse | ICancelResponse>;
  setSimulatorConfiguration(config: any): void;
  getSimulatorConfiguration(): SimulatorConfiguration;
  overrideBaseURL(url: string): void;

  /**
   * Changes settings on the connected reader.
   *
   * @param request The request with the values to set on the reader.
   */
  setReaderSettings(
    request: ISetReaderSettingsRequest
  ): Promise<IReaderSettings | ErrorResponse>;

  /**
   * Retrieves current settings from the connected reader.
   */
  getReaderSettings(): Promise<IReaderSettings | ErrorResponse>;

  /**
   * Prints the specified content to the connected reader's printer, if available.
   * @param content The content to print. Currently only supports `HTMLCanvasElement`.
   */
  print(content: IPrintContent): Promise<IPrintResponse | ErrorResponse>;
}
