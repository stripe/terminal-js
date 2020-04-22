import { darko_api_rabbitservice } from '../ixmodel/app/model/com/goindex/proto/darko/api/rabbitservice.model';
import { rabbit_api_jackrabbitservice } from '../ixmodel/app/model/com/goindex/proto/rabbit/api/jackrabbitservice.model';
import IxHttpClientService from '../network/ix-http-client.service';
import { RpcEndpoint } from '../network/ix-rpc.service';
import IxSerializedRpcService from '../network/ix-serialized-rpc.service';
import { NetworkMonitor } from '../monitor/network-monitor';
import ActivateTerminalRequest = darko_api_rabbitservice.ActivateTerminalRequest;
import ActivateTerminalResponse = darko_api_rabbitservice.ActivateTerminalResponse;
import TerminalHeartbeatRequest = darko_api_rabbitservice.TerminalHeartbeatRequest;
import TerminalHeartbeatResponse = darko_api_rabbitservice.TerminalHeartbeatResponse;
import SetReaderDisplayRequest = rabbit_api_jackrabbitservice.SetReaderDisplayRequest;
import SetReaderDisplayResponse = rabbit_api_jackrabbitservice.SetReaderDisplayResponse;
import ClearReaderDisplayRequest = rabbit_api_jackrabbitservice.ClearReaderDisplayRequest;
import ClearReaderDisplayResponse = rabbit_api_jackrabbitservice.ClearReaderDisplayResponse;
import CollectPaymentMethodRequest = rabbit_api_jackrabbitservice.CollectPaymentMethodRequest;
import CollectPaymentMethodResponse = rabbit_api_jackrabbitservice.CollectPaymentMethodResponse;
import QueryPaymentMethodRequest = rabbit_api_jackrabbitservice.QueryPaymentMethodRequest;
import QueryPaymentMethodResponse = rabbit_api_jackrabbitservice.QueryPaymentMethodResponse;
import ConfirmPaymentRequest = rabbit_api_jackrabbitservice.ConfirmPaymentRequest;
import ConfirmPaymentResponse = rabbit_api_jackrabbitservice.ConfirmPaymentResponse;
import CancelCollectPaymentMethodRequest = rabbit_api_jackrabbitservice.CancelCollectPaymentMethodRequest;
import CancelCollectPaymentMethodResponse = rabbit_api_jackrabbitservice.CancelCollectPaymentMethodResponse;
import CollectReusableCardRequest = rabbit_api_jackrabbitservice.CollectReusableCardRequest;
import CollectReusableCardResponse = rabbit_api_jackrabbitservice.CollectReusableCardResponse;
import QueryCollectReusableCardRequest = rabbit_api_jackrabbitservice.QueryCollectReusableCardRequest;
import QueryCollectReusableCardResponse = rabbit_api_jackrabbitservice.QueryCollectReusableCardResponse;
import ConfirmReusableCardRequest = rabbit_api_jackrabbitservice.ConfirmReusableCardRequest;
import ConfirmReusableCardResponse = rabbit_api_jackrabbitservice.ConfirmReusableCardResponse;
import CancelCollectReusableCardRequest = rabbit_api_jackrabbitservice.CancelCollectReusableCardRequest;
import CancelCollectReusableCardResponse = rabbit_api_jackrabbitservice.CancelCollectReusableCardResponse;
import CollectInteracRefundMethodRequest = rabbit_api_jackrabbitservice.CollectInteracRefundMethodRequest;
import CollectInteracRefundMethodResponse = rabbit_api_jackrabbitservice.CollectInteracRefundMethodResponse;
import ConfirmInteracRefundRequest = rabbit_api_jackrabbitservice.ConfirmInteracRefundRequest;
import ConfirmInteracRefundResponse = rabbit_api_jackrabbitservice.ConfirmInteracRefundResponse;
export declare type SessionToken = string;
/**
 * The {@code IxJackRabbitRpcService} implements the JackRabbit rpc service in
 * typescript
 *
 * @author evan@index.com
 */
export default class IxJackRabbitRpcService extends IxSerializedRpcService {
    constructor(postClient: IxHttpClientService, networkMonitor: NetworkMonitor, rpcEndpoint: RpcEndpoint);
    getUntracedMethods(): string[];
    activateTerminal(request: ActivateTerminalRequest, sessionToken?: SessionToken): Promise<ActivateTerminalResponse>;
    terminalHeartbeat(request: TerminalHeartbeatRequest, sessionToken: SessionToken): Promise<TerminalHeartbeatResponse>;
    setReaderDisplay(request: SetReaderDisplayRequest, sessionToken: SessionToken): Promise<SetReaderDisplayResponse>;
    clearReaderDisplay(request: ClearReaderDisplayRequest, sessionToken: SessionToken): Promise<ClearReaderDisplayResponse>;
    collectPaymentMethod(request: CollectPaymentMethodRequest, sessionToken: SessionToken): Promise<CollectPaymentMethodResponse>;
    queryPaymentMethod(request: QueryPaymentMethodRequest, sessionToken: SessionToken): Promise<QueryPaymentMethodResponse>;
    confirmPayment(request: ConfirmPaymentRequest, sessionToken: SessionToken): Promise<ConfirmPaymentResponse>;
    cancelCollectPaymentMethod(request: CancelCollectPaymentMethodRequest, sessionToken: SessionToken): Promise<CancelCollectPaymentMethodResponse>;
    collectReusableCard(request: CollectReusableCardRequest, sessionToken: SessionToken): Promise<CollectReusableCardResponse>;
    queryCollectReusableCard(request: QueryCollectReusableCardRequest, sessionToken: SessionToken): Promise<QueryCollectReusableCardResponse>;
    confirmReusableCard(request: ConfirmReusableCardRequest, sessionToken: SessionToken): Promise<ConfirmReusableCardResponse>;
    cancelCollectReusableCard(request: CancelCollectReusableCardRequest, sessionToken: SessionToken): Promise<CancelCollectReusableCardResponse>;
    collectInteracRefundMethod(request: CollectInteracRefundMethodRequest, sessionToken: SessionToken): Promise<CollectInteracRefundMethodResponse>;
    queryInteracRefundMethod(request: QueryPaymentMethodRequest, sessionToken: SessionToken): Promise<QueryPaymentMethodResponse>;
    confirmInteracRefund(request: ConfirmInteracRefundRequest, sessionToken: SessionToken): Promise<ConfirmInteracRefundResponse>;
    cancelCollectInteracRefundMethod(request: CancelCollectPaymentMethodRequest, sessionToken: SessionToken): Promise<CancelCollectPaymentMethodResponse>;
}
