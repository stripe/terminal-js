import IxHttpClientService from './ix-http-client.service';
import { NetworkMonitor } from '../monitor/network-monitor';
import { SimulatorConfiguration } from '../rabbit/jack-rabbit-connection-mgr';
/**
 * An RpcEndpoint represents all the information needed to be able to send
 * basic requests to a remote resource with HTTP
 */
export declare class RpcEndpoint {
    url_path: string;
    port?: number;
}
export declare function b64EncodeUnicode(str: string): string;
export declare function b64DecodeUnicode(str: string): string;
export interface RpcOptions {
    isRetriable: boolean;
}
/**
 * The {@code IxRpcService} allows callers to send RPC calls over HTTP/IxHttpClientService
 * using a format that is accepted by an Index RPC Server.
 *
 * @author evan@index.com
 */
export default class IxRpcService {
    private serviceName;
    private postClient;
    private rpcEndpoint;
    private networkMonitor;
    private retryBackoff?;
    static readonly NUM_RETRIES = 1;
    simulatorConfiguration: SimulatorConfiguration;
    constructor(serviceName: string, postClient: IxHttpClientService, rpcEndpoint: RpcEndpoint, networkMonitor: NetworkMonitor, retryBackoff?: number);
    /**
     * Overridable function that lets rpc services declare ops that should not be monitored by the network monitor
     */
    protected getUntracedMethods(): string[];
    getRpcEndpoint(): RpcEndpoint;
    setSimulatorConfig(config: SimulatorConfiguration): void;
    /**
     * Sends an RPC request to trigger the given remote method with the
     * requestPayload as the parameters. The sessionToken allows the caller to
     * specify any authentication token. Depending on the remote method, it may
     * or may not be necessary.
     */
    rpc<REQ, RES>(method: string, requestPayload: REQ, sessionToken?: string, options?: RpcOptions): Promise<RES>;
}
