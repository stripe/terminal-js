import { model_common_commonmodel } from './../../../model/common/commonmodel.model';
import { net_rpc_proto_applicationerrorcode } from './applicationerrorcode.model';
import { model_trace_tracemodel } from './../../../model/trace/tracemodel.model';
export declare namespace net_rpc_proto_rpc {
    enum RpcEC {
        UNKNOWN_RPC_ERROR = "UNKNOWN_RPC_ERROR",
        RPC_OK = "RPC_OK",
        RPC_ERROR = "RPC_ERROR",
        NETWORK_UNAVAILABLE = "NETWORK_UNAVAILABLE",
        SERVER_UNRESOLVABLE = "SERVER_UNRESOLVABLE",
        SERVER_UNREACHABLE = "SERVER_UNREACHABLE",
        BAD_REQUEST = "BAD_REQUEST",
        BAD_RESPONSE = "BAD_RESPONSE",
        TIMEOUT = "TIMEOUT",
        RETRY = "RETRY",
        SERVER_BUSY = "SERVER_BUSY"
    }
    interface RpcRequest {
        id?: number;
        service?: string;
        method?: string;
        deadline?: number;
        parent_trace_id?: string;
        local_ip_address?: string;
        session_token?: string;
        request_info?: model_trace_tracemodel.RequestInfoPb;
        request_type?: RpcRequest.RequestType;
        version_info?: model_common_commonmodel.VersionInfoPb;
        device_info?: model_common_commonmodel.DeviceInfo;
    }
    namespace RpcRequest {
        enum RequestType {
            STANDARD = "STANDARD",
            DEV = "DEV"
        }
    }
    interface RpcResponse {
        request_id?: number;
        rpc_error_code?: RpcEC;
        app_error_code?: net_rpc_proto_applicationerrorcode.ApplicationEC;
        error?: string;
    }
}
