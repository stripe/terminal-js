/**
 * Runs a function which could return an error and returns either the result of
 * the function if it succeeds or the default if it throws
 */
export declare function tryOrDefault<T>(getFn: () => T, defaultValue: T): T;
export default tryOrDefault;
