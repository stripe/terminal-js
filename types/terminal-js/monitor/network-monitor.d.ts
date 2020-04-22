export declare class NetworkMonitor {
    withMonitoring<T>(serviceName: string, method: string, fn: () => Promise<T>): Promise<T>;
}
export default NetworkMonitor;
