import 'whatwg-fetch';
/**
 * The {@code IxHttpClientService} implements a promise based http client
 *
 * @author evan@index.com
 */
export default class IxHttpClientService {
    private requestTimeoutMs;
    private fetchFn;
    constructor(requestTimeoutMs?: number, fetchFn?: any);
    /**
     * The get method sends the payload via an HTTP get
     */
    get<REQ, RES>(path: string, payload: REQ, headers?: Headers): Promise<RES>;
    /**
     * The post method sends the payload JSON object to the designated path via
     * an HTTP/HTTPS POST
     */
    post<REQ, RES>(path: string, payload: REQ, headers?: Headers): Promise<RES>;
    postFormEncoded<REQ, RES>(path: string, payload: REQ, headers?: Headers): Promise<RES>;
    private doFetch;
    private createFakeTimeoutResponse;
}
