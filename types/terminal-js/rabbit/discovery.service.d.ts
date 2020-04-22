import { ExposedError } from '../utils/error-utils';
import DiscoveryClient, { Reader } from './discovery-client';
export interface DiscoveryMethodConfiguration {
    device_type?: string;
    method?: string;
    simulated?: boolean;
}
export interface InternetMethodConfiguration extends DiscoveryMethodConfiguration {
    method?: 'internet';
    location?: string;
}
export declare type DiscoveryConfig = InternetMethodConfiguration;
export declare type DiscoveredReaders = Reader[];
export declare type DiscoverResult = {
    discoveredReaders: DiscoveredReaders;
};
export declare type UserDiscoveryCallback = (result: DiscoverResult) => void;
export declare type UserDiscoveryErrorCallback = (error: ExposedError) => void;
export declare const DEFAULT_DISCOVERY_CONFIG: InternetMethodConfiguration;
export declare abstract class BaseDiscoverMethod<T extends DiscoveryConfig> {
    protected config: T;
    constructor(config: T);
    abstract startDiscovery(onDiscoveredReaders: DiscoveredReadersCallback, onCriticalError: DiscoveryErrorCallback): void;
    abstract stopDiscovery(): void;
}
/**
 * The InternetDiscoveryMethod allows a developer to get a list of registered readers from armada
 */
export declare class InternetDiscoveryMethod extends BaseDiscoverMethod<InternetMethodConfiguration> {
    private discoveryClient;
    private queryIntervalMs;
    private intervalId;
    constructor(config: InternetMethodConfiguration, discoveryClient: DiscoveryClient, queryIntervalMs?: number);
    startDiscovery(onDiscoveredReaders: DiscoveredReadersCallback, onCriticalError: DiscoveryErrorCallback): void;
    stopDiscovery(): void;
}
export declare class SimulatedDiscoveryMethod extends BaseDiscoverMethod<any> {
    static SIMULATED_ID: string;
    static SIMULATED_LABEL: string;
    constructor(config: DiscoveryMethodConfiguration);
    startDiscovery(onDiscoveredReaders: DiscoveredReadersCallback): void;
    stopDiscovery(): void;
}
export declare class DiscoveryMethodFactory {
    private discoveryClient;
    constructor(discoveryClient: DiscoveryClient);
    createDiscoveryMethod(config: DiscoveryConfig): BaseDiscoverMethod<any>;
}
/**
 * The DiscoveryService represents the mthod by which the terminal will
 * attempt to resolve the RpcEndpoint to reach its paired Rabbit. In general, a
 * POS developer is recommended to use of the implementations provided below.
 * However, a custom implementation could be created to customize how terminals
 * determine which Rabbit to pair to.
 */
export default class DiscoveryService {
    private discoveryMethodFactory;
    private activeDiscovery;
    private lastResult;
    private nextResult;
    constructor(discoveryMethodFactory: DiscoveryMethodFactory);
    getDiscoveredReaders(): DiscoverResult;
    discoverReaders(config?: DiscoveryConfig): Promise<DiscoverResult>;
    startDiscovery(config: DiscoveryConfig, userDiscoveryCallback: UserDiscoveryCallback, errorCallback: UserDiscoveryErrorCallback): void;
    stopDiscovery(): void;
}
export declare type DiscoveredReadersCallback = (readers: DiscoveredReaders) => void;
export declare type DiscoveryErrorCallback = (error: Error) => void;
