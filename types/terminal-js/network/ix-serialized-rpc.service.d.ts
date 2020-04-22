import IxRpcService, { RpcOptions } from './ix-rpc.service';
/**
 * The IxSerializedRpcService implments the same interface as the IxRpcService
 * but serializes all the requests to ensure that we have received responses for
 * the previous request before sending more RPC calls. This is useful for
 * sequential protocols like JackRabbit but should not be used for async things
 * like event or health reporting
 */
export default class IxSerializedRpcService extends IxRpcService {
    private synchronizer;
    rpc<REQ, RES>(method: string, requestPayload: REQ, sessionToken?: string, options?: RpcOptions): Promise<RES>;
}
