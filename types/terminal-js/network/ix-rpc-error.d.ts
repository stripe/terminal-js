import { net_rpc_proto_applicationerrorcode } from '../ixmodel/app/model/com/goindex/proto/net/rpc/base/applicationerrorcode.model';
import { net_rpc_proto_rpc } from '../ixmodel/app/model/com/goindex/proto/net/rpc/base/rpc.model';
import { TypescriptRpcResponse } from './typescript-rpc.model';
import { IxApplicationError } from '../utils/error-utils';
import ApplicationEC = net_rpc_proto_applicationerrorcode.ApplicationEC;
import RpcEC = net_rpc_proto_rpc.RpcEC;
export declare enum RpcErrorType {
    RPC = 0,
    APPLICATION = 1
}
export declare function isRetriableRpcNetworkError(err: RpcEC): boolean;
export declare function isRpcUnauthenticatedError(err: ApplicationEC): boolean;
/**
 * The IxRpcError class represents a typed Error related to network calls made
 * via RPC
 */
export default class IxRpcError extends IxApplicationError {
    response: TypescriptRpcResponse;
    constructor(response: TypescriptRpcResponse);
    /**
     * Returns whether the RPC Error represents a network related issue or an
     * application related issue
     */
    errorType(): RpcErrorType;
    /**
     * Returns the RPC Error Code for this error
     */
    rpcEc(): net_rpc_proto_rpc.RpcEC.UNKNOWN_RPC_ERROR | net_rpc_proto_rpc.RpcEC;
    /**
     * Returns the Application Error Code for this error
     */
    applicationEc(): net_rpc_proto_applicationerrorcode.ApplicationEC.UNKNOWN_APPLICATION_ERROR | net_rpc_proto_applicationerrorcode.ApplicationEC;
}
