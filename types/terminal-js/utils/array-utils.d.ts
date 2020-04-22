export declare class EvictionQueue<T> {
    private maxSize;
    private internal;
    constructor(maxSize: number);
    push(t: T): void;
    getItems(): T[];
    isAtCapacity(): boolean;
    maxCapacity(): number;
}
export default EvictionQueue;
