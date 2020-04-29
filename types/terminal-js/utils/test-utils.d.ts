declare type AssertionCallback = () => void | never;
/**
 *
 * @param {() => boolean} continuationCallback
 * @param {boolean} completionExpected
 * @param {number} maxRecurses
 * @returns {Promise<any>}
 */
export declare function recurseUntil(continuationCallback: () => boolean, completionExpected: boolean, maxRecurses?: number): Promise<unknown>;
/**
 * Runs recurseUntil on a function that returns true if the outcome of an assertionCallback is what was expected, and
 *  false if it is not.
 *
 * @param {() => void} assertionCallback
 * @param {boolean} completionExpected
 * @returns {Promise<any>}
 */
export declare function assertUntil(assertionCallback: AssertionCallback, completionExpected: boolean): Promise<unknown>;
/**
 * Assert that some expectation is true for some number of event loop iterations. Throw error if condition is ever not
 *  true for an iteration.
 */
export declare function waitAndEnsureThroughout(expectCallback: AssertionCallback): Promise<unknown>;
/**
 * Wait until some expectation true, or throw error if condition is not true after some number of event loop
 *  iterations.
 */
export declare function waitUntil(expectCallback: AssertionCallback): Promise<unknown>;
export {};
