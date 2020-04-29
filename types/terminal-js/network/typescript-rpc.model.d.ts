import { net_rpc_proto_rpc } from '../ixmodel/app/model/com/goindex/proto/net/rpc/base/rpc.model';
import RpcRequest = net_rpc_proto_rpc.RpcRequest;
import RpcResponse = net_rpc_proto_rpc.RpcResponse;
/**
 * The TypescriptRpcRequest simply is a wrapper around the codegened RpcRequest interface.
 * It changes the bytes fields to type string to satisfy the typescript compiler.
 */
export interface TypescriptRpcRequest extends RpcRequest {
    content?: string;
    config?: string;
}
/**
 * The TypescriptRpcResponse simply is a wrapper around the codegened RpcResponse interface.
 * It changes the bytes fields to type string to satisfy the typescript compiler.
 */
export interface TypescriptRpcResponse extends RpcResponse {
    content?: string;
}
