import { TraceCollector } from './trace-collector';
import { Log } from '../logs/log-point';
export interface TraceFnConfig {
    recordReqRespOnErrorOnly: boolean;
}
export default class Tracer {
    private static collectors;
    static setCollectors(collectors: TraceCollector[]): void;
    private static forwardToCollectors;
    static TRACE_ID_SEPARATOR: string;
    private static transactionId;
    private static activeTraceIds;
    private static logPoints;
    static collect(log: Log): void;
    static getActiveTraceId(): string;
    static setTransactionId(id: string): void;
    static clearTransactionId(): void;
    static traceFn(this: any, fn: (...args: any[]) => any | Promise<any>, service: string, methodName: string, config?: TraceFnConfig): (this: any, ...args: any[]) => any;
    private static openTracingContext;
    private static closeTracingContext;
    private static successTrace;
    private static exceptionTrace;
    private static tracePromise;
    private static calculateElapsedTimeMs;
}
