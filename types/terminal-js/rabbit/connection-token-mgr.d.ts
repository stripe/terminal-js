import { NetworkMonitor } from '../monitor/network-monitor';
export declare type ConnectionToken = string;
export declare type FetchConnectionTokenFn = () => Promise<ConnectionToken>;
export default class ConnectionTokenMgr {
    private fetchConnectionTokenFn;
    private networkMonitor;
    private activeCredentials;
    constructor(fetchConnectionTokenFn: FetchConnectionTokenFn, networkMonitor: NetworkMonitor);
    getActiveCredentials(): Promise<string>;
    invalidateConnectionToken(): void;
}
