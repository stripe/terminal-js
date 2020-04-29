import IxHttpClientService from './ix-http-client.service';
import { NetworkMonitor } from '../monitor/network-monitor';
export declare function overrideBaseURL(urlOverride: string): void;
export declare class IxStripeClient {
    private resourceName;
    private httpClient;
    private networkMonitor;
    private resourceVersion;
    constructor(resourceName: string, httpClient: IxHttpClientService, networkMonitor: NetworkMonitor, resourceVersion?: string);
    createHeaders(sessionToken?: string): Headers;
    createUrl(customExtraPath: string | null): string;
    makeRequest<REQ, RES>(customExtraPath: string | null, request: Function): Promise<RES>;
    postFormEncoded<REQ, RES>(customExtraPath: string | null, params: REQ, sessionToken?: string): Promise<RES>;
    get<REQ, RES>(customExtraPath: string | null, params: REQ, sessionToken?: string): Promise<RES>;
}
export interface ListResponse<T> {
    data: T[];
    has_more: boolean;
}
/**
 * The {@code IxStripeRestClient} allows calls to Stripe
 *
 * @author evan@index.com
 */
export default class IxStripeRestClient<T> extends IxStripeClient {
    constructor(resourceName: string, httpClient: IxHttpClientService, networkMonitor: NetworkMonitor, resourceVersion?: string);
    postResource<REQ>(params: REQ, sessionToken?: string): Promise<T>;
    loadResource<REQ>(resourceId: string, params: REQ, sessionToken?: string): Promise<T>;
    queryResource<REQ>(params: REQ, sessionToken?: string): Promise<ListResponse<T>>;
}
