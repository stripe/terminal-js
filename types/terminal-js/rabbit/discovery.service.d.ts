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
export declare type DiscoverResult = {
    discoveredReaders: Array<Reader>;
};
export declare type UserDiscoveryCallback = (result: DiscoverResult) => void;
export declare type UserDiscoveryErrorCallback = (error: ExposedError) => void;
export declare const DEFAULT_DISCOVERY_CONFIG: InternetMethodConfiguration;
export declare abstract class BaseDiscoverMethod<T extends DiscoveryConfig> {
    protected config: T;
    constructor(config: T);
    abstract retrieveReader(id: string): Promise<Reader>;
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
    retrieveReader(id?: string): Promise<Reader>;
    startDiscovery(onDiscoveredReaders: DiscoveredReadersCallback, onCriticalError: DiscoveryErrorCallback): void;
    stopDiscovery(): void;
}
export declare const SIMULATED_ID = "SIMULATOR";
export declare const SIMULATED_LABEL = "Reader Simulator";
export declare const SIMULATED_READER: Reader;
export declare class SimulatedDiscoveryMethod extends BaseDiscoverMethod<any> {
    constructor(config: DiscoveryMethodConfiguration);
    retrieveReader(id: string): Promise<Reader>;
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
    retrieveReader(id: string): Promise<Reader>;
    discoverReaders(config?: DiscoveryConfig): Promise<DiscoverResult>;
    startDiscovery(config: DiscoveryConfig, userDiscoveryCallback: UserDiscoveryCallback, errorCallback: UserDiscoveryErrorCallback): void;
    stopDiscovery(): void;
}
export declare type DiscoveredReadersCallback = (readers: Array<Reader>) => void;
export declare type DiscoveryErrorCallback = (error: Error) => void;
