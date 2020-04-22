/// <reference types="node" />
/**
 * Simple Wrapper around the native setInterval funciton that also runs the
 * associated function immediately instead of at end of first interval
 */
export declare function setIntervalAndExecute(fn: () => any, t: number): NodeJS.Timer;
/**
 * Sets an interval where the time between intervals is dependent on the success
 * or failure of the given function
 */
export declare function setBeacon(fn: () => Promise<any>, sucessInterval: number, failureInterval: number): () => void;
