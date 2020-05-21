import '@ungap/url-search-params';
import { rabbit_api_jackrabbitservice } from '../ixmodel/app/model/com/goindex/proto/rabbit/api/jackrabbitservice.model';
import IxJackRabbitService from './ix-jack-rabbit.service';
import PaymentIntentClient from './payment-intent-client';
import { Reader } from './discovery-client';
import DiscoveryService, { DiscoveryConfig, DiscoverResult } from './discovery.service';
import { TerminalCallbacks } from './terminal-props';
import { ErrorResponse } from '../utils/error-utils';
import { PaymentIntentClientSecret, PaymentStatus, ConnectionStatus, SdkManagedPaymentIntent, ConnectOptions, RefundOptions } from './terminal-transaction-models';
import ConnectionTokenMgr from './connection-token-mgr';
import { StripeApiModels } from '../ixmodel/app/model/com/goindex/proto/stripe.model';
import SetReaderDisplayRequest = rabbit_api_jackrabbitservice.SetReaderDisplayRequest;
import TipConfiguration = rabbit_api_jackrabbitservice.CollectPaymentMethodRequest.TipConfiguration;
import PaymentIntent = StripeApiModels.PaymentIntent;
export { ConnectionStatus };
/**
 * The {@code Terminal} represents a single instance of a Point of Sale
 * application and provides an interface to interface with a reader to collect
 * and charge cards.
 *
 * @author evan@index.com
 */
export default class Terminal {
    private discoveryService;
    private jackRabbitService;
    private delegate;
    private paymentIntentClient;
    private connectionTokenMgr;
    private collectPaymentMethodAttempt;
    private collectReusableCardAttempt;
    private refundInteracCardAttempt;
    private pendingInteracRefund;
    private connectionStatus;
    private paymentStatus;
    constructor(discoveryService: DiscoveryService, jackRabbitService: IxJackRabbitService, delegate: TerminalCallbacks, paymentIntentClient: PaymentIntentClient, connectionTokenMgr: ConnectionTokenMgr);
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
    discoverReaders(config?: DiscoveryConfig): Promise<DiscoverResult | ErrorResponse>;
    /**
     * Returns a promise that resolves only when the SDK has connected to a Reader.
     */
    connectReader(reader: Reader, connectOptions?: ConnectOptions): Promise<ErrorResponse | {
        reader: Reader;
    }>;
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
    setReaderDisplay(request: SetReaderDisplayRequest): Promise<ErrorResponse | {}>;
    /**
     * Requests the Terminal object to collect a card source from the reader that
     * can be charged.
     * @param request Request object containing the payment intent secret of the intent to attach the
     * source to.
     */
    collectPaymentMethod(request: PaymentIntentClientSecret, options?: {
        tip_configuration?: TipConfiguration;
    }): Promise<ErrorResponse | {
        paymentIntent: SdkManagedPaymentIntent;
    }>;
    /**
     * Confirms the payment intent which causes the charging of the user card.
     * @param request Object containing the payment intent to confirm.
     */
    processPayment(request: SdkManagedPaymentIntent): Promise<ErrorResponse | {
        paymentIntent: PaymentIntent;
    }>;
    cancelCollectPaymentMethod(): Promise<ErrorResponse | {}>;
    readReusableCard(options?: {
        customer?: string;
    }): Promise<ErrorResponse | {
        payment_method: any;
    }>;
    collectRefundPaymentMethod(charge_id: string, amount: number, currency: string, options?: RefundOptions): Promise<ErrorResponse | {}>;
    processRefund(): Promise<ErrorResponse | {
        refund: any;
    }>;
    cancelCollectRefundPaymentMethod(): Promise<ErrorResponse | {}>;
    cancelReadReusableCard(): Promise<ErrorResponse | {}>;
    setSimulatorConfiguration(config: Object): void;
    getSimulatorConfiguration(): import("./jack-rabbit-connection-mgr").SimulatorConfiguration;
    private fetchPaymentIntent;
    private startCollectingPaymentMethod;
    private resultingChargeToUpdatedPaymentIntent;
    private ensureConnected;
    private setPaymentStatus;
    private setConnectionStatus;
    overrideBaseURL(url: string): void;
}
