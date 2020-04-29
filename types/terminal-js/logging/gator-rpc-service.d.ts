import { api_gator_gatorservice } from '../ixmodel/app/model/com/goindex/proto/api/gator/gatorservice.model';
import IxHttpClientService from '../network/ix-http-client.service';
import IxRpcService, { RpcEndpoint } from '../network/ix-rpc.service';
import { NetworkMonitor } from '../monitor/network-monitor';
import ReportEventRequest = api_gator_gatorservice.ReportEventRequest;
import ReportEventResponse = api_gator_gatorservice.ReportEventResponse;
import ReportTraceRequest = api_gator_gatorservice.ReportTraceRequest;
import ReportTraceResponse = api_gator_gatorservice.ReportTraceResponse;
export declare const DEFAULT_GATOR_ENDPOINT: RpcEndpoint;
/**
 * The {@code GatorRpcService} implements the Gator rpc service in
 * typescript
 *
 * @author evan@index.com
 */
export default class GatorRpcService extends IxRpcService {
    constructor(postClient: IxHttpClientService, networkMonitor: NetworkMonitor, rpcEndpoint?: RpcEndpoint);
    sessionToken?: string;
    reportEvent(request: ReportEventRequest): Promise<ReportEventResponse>;
    reportTrace(request: ReportTraceRequest): Promise<ReportTraceResponse>;
}
