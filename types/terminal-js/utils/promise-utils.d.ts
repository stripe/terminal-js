/**
 * Takes in either a promise or scalar value and lifts it to type Promise<T>
 * and returns a flattened Promise
 */
export declare function liftToPromise<T>(val: T | Promise<T>): Promise<T>;
/**
 * Returns a promise that resolves after a given number of millis
 */
export declare function sleep(millis: number): Promise<{}>;
/**
 * Returns a promise that runs a given function and resolves its result after a
 * specified timeout.
 */
export declare function timeout<T>(fn: () => T, millis: number): Promise<T>;
/**
 * Runs the given function and returns its value in the case of success or
 * retries up to numRetries in the case of failure.
 */
export declare function retry<T>(fn: () => Promise<T>, retryPredicate?: (err: any) => boolean | Promise<boolean>, numRetries?: number): Promise<T>;
/**
 * Runs the given function and returns its value in the case of success or
 * retries up to numRetries in the case of failure.
 */
export declare function retryWithBackoff<T>(fn: () => Promise<T>, retryPredicate?: (err: any) => boolean | Promise<boolean>, numRetries?: number, backoffMs?: number): Promise<T>;
