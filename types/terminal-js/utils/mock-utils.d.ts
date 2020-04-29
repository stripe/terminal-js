import { LogCollector } from '../logging/logs/log-collector';
import { Log } from '../logging/logs/log-point';
export declare function createMockInstance<T>(Clazz: {
    new (): T;
}): T;
export declare class FakeLogCollector implements LogCollector {
    logs: Log[];
    collect(log: Log): void;
    resetSavedLogs(): void;
    getLastLog(): Log;
    getLogCount(): number;
}
export declare class FakeConsole {
    logHistory: any;
    getLogCount(): any;
    log(str: any): void;
    warn(str: any): void;
    error(str: any): void;
}
