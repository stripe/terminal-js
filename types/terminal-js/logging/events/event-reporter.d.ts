import { EventResult, MeterEvent } from './event-point';
import { EventCollector } from './event-collector';
import { Trace } from '../tracing/trace-point';
export declare type MeteredResult<T> = {
    result: () => T | never;
    meter: MeterEvent;
};
export default class EventReporter {
    private static collectors;
    static setCollectors(collectors: EventCollector[]): void;
    private static forwardToCollectors;
    static collect(trace: Trace): void;
    static count(domain: string, scope: string, event: string, result: EventResult, errorCode?: string): void;
    static gauge(domain: string, scope: string, event: string, result: EventResult, measurement: number, errorCode?: string): void;
    static meterAsync<T>(domain: string, scope: string, event: string, fn: (...args: any[]) => Promise<T>): Promise<MeteredResult<T>>;
    private static captureMeter;
    private static baseEvent;
}
