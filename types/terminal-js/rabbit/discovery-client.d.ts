import IxStripeRestClient from '../network/ix-stripe-client';
import IxHttpClientService from '../network/ix-http-client.service';
import ConnectionTokenMgr from './connection-token-mgr';
import { NetworkMonitor } from '../monitor/network-monitor';
export interface Reader {
    id: string;
    object: string;
    device_type: string;
    ip_address: string;
    label?: string;
    serial_number: string;
    status?: string;
    location?: string;
    base_url?: string;
}
export interface PosRpcSessionResponse {
    sdk_rpc_session_token: string;
}
export default class DiscoveryClient extends IxStripeRestClient<Reader> {
    private connectionTokenMgr;
    constructor(httpClient: IxHttpClientService, connectionTokenMgr: ConnectionTokenMgr, networkMonitor: NetworkMonitor);
    handlePosRpcSessionResponse?: (response: PosRpcSessionResponse) => void;
    discoverReaders(params: {
        location?: string;
        device_type?: string;
    }): Promise<import("../network/ix-stripe-client").ListResponse<Reader>>;
    private generatePosRpcSession;
}
