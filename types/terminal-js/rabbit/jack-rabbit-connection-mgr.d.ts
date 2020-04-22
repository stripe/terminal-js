import { darko_api_rabbitservice } from '../ixmodel/app/model/com/goindex/proto/darko/api/rabbitservice.model';
import IxRpcError from '../network/ix-rpc-error';
import { RpcEndpoint } from '../network/ix-rpc.service';
import { Reader } from './discovery-client';
import IxJackRabbitRpcService, { SessionToken } from './ix-jack-rabbit-rpc.service';
import { EventHandler, DisconnectEvent } from './terminal-props';
import ConnectionTokenMgr from './connection-token-mgr';
import IxRabbitError from './ix-rabbit-error';
import GatorRpcService from '../logging/gator-rpc-service';
import ActivateTerminalRequest = darko_api_rabbitservice.ActivateTerminalRequest;
export interface RabbitConnection {
    posId: string;
    sdkRpcSession: string;
    reader: Reader;
    heartbeatIntervalId: any;
}
export interface SimulatorConfiguration {
    paymentMethodType?: 'interac_present' | null;
}
export declare type JackRabbitRpcServiceFactory = (endpoint: RpcEndpoint) => IxJackRabbitRpcService;
export declare type JackRabbitMethod<T> = (rpcClient: IxJackRabbitRpcService, sessionToken: SessionToken) => Promise<T>;
export declare function rpcEndpointFromReader(simulatorBaseUrl: string, reader: Reader): RpcEndpoint;
export declare function rabbitErrorMapper<T>(err: IxRpcError | Error): IxRabbitError;
export declare const SIMULATED_READER_URL = "https://b5rxknncfl.execute-api.us-west-1.amazonaws.com/prod";
/**
 * The {@code JackRabbitConnectionMgr} manages a connection to a Rabbit PIN pad
 * including resolving the ip through discovery and authenticating to it via
 * an activation token. It also handles retrying in the case of lost connection
 * or bad session errors.
 *
 * @author esandler@stripe.com
 */
export default class JackRabbitConnectionMgr {
    private deviceFingerprint;
    private connectionTokenMgr;
    private jackRabbitRpcServiceFactory;
    private gatorRpcService?;
    private simulatorBaseUrl;
    private heartbeatIntervalMs;
    private sessionToken;
    private jackRabbitRpcClient;
    private synchronizer;
    private preConnectionReader;
    private activeConnection;
    private onUnexpectedDisconnectHandler;
    simulatorConfiguration: SimulatorConfiguration;
    constructor(deviceFingerprint: string, connectionTokenMgr: ConnectionTokenMgr, jackRabbitRpcServiceFactory: JackRabbitRpcServiceFactory, gatorRpcService?: GatorRpcService, simulatorBaseUrl?: string, heartbeatIntervalMs?: number);
    setOnUnexpectedDisconnectHandler(handler: EventHandler<DisconnectEvent>): void;
    connect(reader: Reader, requestOptions: ActivateTerminalRequest): Promise<RabbitConnection>;
    getActiveConnection(): RabbitConnection;
    disconnect(): Promise<{}>;
    rabbitCallAuthenticated<T>(jackRabbitMethod: JackRabbitMethod<T>): Promise<T>;
    private rabbitCall;
    private clearSession;
    private handleErrors;
    private terminalHeartbeat;
    private activateTerminal;
    setSessionTokenEarlierThanActivate(token: SessionToken): void;
}
