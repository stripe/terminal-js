export interface Flusher<T> {
    start(): void;
    start(): void;
    collect(t: T): void;
    shutdown(): void;
}
/**
 * PeriodicFlusher is a simple implementation of a flusher
 */
export declare abstract class PeriodicFlusher<T> implements Flusher<T> {
    private flushInterval;
    private maxCapacity;
    private interval;
    private items;
    constructor(flushInterval?: number, maxCapacity?: number);
    abstract doFlush(tArray: T[]): Promise<any>;
    start(): void;
    collect(t: T): void;
    flush(): void;
    shutdown(): void;
}
