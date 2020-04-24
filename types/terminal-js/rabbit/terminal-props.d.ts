import { PaymentStatus, ConnectionStatus } from './terminal-transaction-models';
import { ExposedError } from '../utils/error-utils';
import { FetchConnectionTokenFn } from './connection-token-mgr';
export declare enum OutputLogLevel {
    NONE = "none",
    VERBOSE = "verbose"
}
export interface StatusEvent<T extends string> {
    status: T;
}
export interface DisconnectEvent {
    error?: ExposedError;
}
export declare type ConnectionStatusEvent = StatusEvent<ConnectionStatus>;
export declare type PaymentStatusEvent = StatusEvent<PaymentStatus>;
export declare type EventHandler<T> = (event: T) => void;
export interface TerminalCallbacks {
    onFetchConnectionToken: FetchConnectionTokenFn;
    onUnexpectedReaderDisconnect?: EventHandler<DisconnectEvent>;
    onConnectionStatusChange?: EventHandler<ConnectionStatusEvent>;
    onPaymentStatusChange?: EventHandler<PaymentStatusEvent>;
}
export interface ReaderBehaviors {
    allowCustomerCancel?: boolean;
}
export interface TerminalOptions {
    logLevel?: OutputLogLevel;
    simulatorBaseUrl?: string;
    readerBehavior?: ReaderBehaviors;
}
export declare type TerminalProps = TerminalOptions & TerminalCallbacks;
