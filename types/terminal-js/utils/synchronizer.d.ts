/**
 * The Synchronizer uses rpomise chains to synchronize the execution of function
 * calls such that they execute one after even though they return async
 */
export declare class Synchronizer {
    private serializedPromise;
    synchronize<T>(fn: () => T | Promise<T>): Promise<T>;
}
export default Synchronizer;
