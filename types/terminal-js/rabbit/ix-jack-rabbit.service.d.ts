import { darko_api_rabbitservice } from '../ixmodel/app/model/com/goindex/proto/darko/api/rabbitservice.model';
import { rabbit_model_jackrabbittender } from '../ixmodel/app/model/com/goindex/proto/rabbit/model/jackrabbittender.model';
import { RpcEndpoint } from '../network/ix-rpc.service';
import { rabbit_api_jackrabbitservice } from '../ixmodel/app/model/com/goindex/proto/rabbit/api/jackrabbitservice.model';
import { Reader } from './discovery-client';
import IxJackRabbitRpcService from './ix-jack-rabbit-rpc.service';
import JackRabbitConnectionMgr, { SimulatorConfiguration } from './jack-rabbit-connection-mgr';
import { Cancelable } from '../utils/cancelable-promise';
import { EventHandler, DisconnectEvent } from './terminal-props';
import ActivateTerminalRequest = darko_api_rabbitservice.ActivateTerminalRequest;
import CollectPaymentMethodRequest = rabbit_api_jackrabbitservice.CollectPaymentMethodRequest;
import CollectReusableCardRequest = rabbit_api_jackrabbitservice.CollectReusableCardRequest;
import ConfirmPaymentRequest = rabbit_api_jackrabbitservice.ConfirmPaymentRequest;
import ConfirmPaymentResponse = rabbit_api_jackrabbitservice.ConfirmPaymentResponse;
import SetReaderDisplayRequest = rabbit_api_jackrabbitservice.SetReaderDisplayRequest;
import SetReaderDisplayResponse = rabbit_api_jackrabbitservice.SetReaderDisplayResponse;
import CollectInteracRefundMethodRequest = rabbit_api_jackrabbitservice.CollectInteracRefundMethodRequest;
import ConfirmInteracRefundRequest = rabbit_api_jackrabbitservice.ConfirmInteracRefundRequest;
import ClearReaderDisplayResponse = rabbit_api_jackrabbitservice.ClearReaderDisplayResponse;
import PaymentMethod = rabbit_model_jackrabbittender.PaymentMethod;
export interface ClientTransactionContext {
    transactionId?: string;
    cashierName?: string;
}
/**
 * A SettleAttempt represents an inflight attempt to collect a payment from a
 * customer using Rabbit
 */
export interface CollectPaymentMethodAttempt {
    result: Promise<PaymentMethod>;
    cancel: () => Promise<{}>;
}
export declare type jackRabbitRpcServiceFactory = (endpoint: RpcEndpoint) => IxJackRabbitRpcService;
/**
 * The {@code IxJackRabbitService} provides some application layer logic on top
 * of the JackRabbit Rpc Layer. This includes error handling, session handling,
 * heartbeating, as well as handling polling Rabbit for the results of
 * payment attempts.
 *
 * @author evan@index.com
 */
export default class IxJackRabbitService {
    private deviceFingerprint;
    private connectionMgr;
    private querySettleIntervalMs;
    private allowCustomerCancel;
    private transactionContext;
    constructor(deviceFingerprint: string, connectionMgr: JackRabbitConnectionMgr, querySettleIntervalMs?: number, allowCustomerCancel?: boolean);
    private static hasPaymentMethod;
    private static hasReusableCard;
    private static hasUserCancelledCollectPayment;
    setSimulatorConfig(config: SimulatorConfiguration): void;
    getSimulatorConfig(): SimulatorConfiguration;
    setOnUnexpectedDisconnectHandler(handler: EventHandler<DisconnectEvent>): void;
    connect(reader: Reader, requestOptions: ActivateTerminalRequest): Promise<import("./jack-rabbit-connection-mgr").RabbitConnection>;
    getConnectedReader(): Reader;
    disconnect(): Promise<{}>;
    setReaderDisplay(request: SetReaderDisplayRequest): Promise<SetReaderDisplayResponse>;
    clearReaderDisplay(): Promise<ClearReaderDisplayResponse>;
    collectPaymentMethod(request: CollectPaymentMethodRequest): CollectPaymentMethodAttempt;
    confirmPayment(request: ConfirmPaymentRequest): Promise<ConfirmPaymentResponse>;
    collectInteracRefundMethod(options: CollectInteracRefundMethodRequest): Cancelable<rabbit_model_jackrabbittender.PaymentMethod>;
    confirmInteracRefund(options: ConfirmInteracRefundRequest): Promise<rabbit_api_jackrabbitservice.ConfirmInteracRefundResponse>;
    readReusableCard(options: CollectReusableCardRequest): Cancelable<rabbit_api_jackrabbitservice.ConfirmReusableCardResponse>;
    private maybeSetTransactionContext;
    private clearTransactionContext;
    private cancelCollectPaymentMethod;
    private collectAndQueryUntilPaymentMethod;
    private queryPaymentMethod;
}
