import { Log } from './log-point';
import 'whatwg-fetch';
export interface LogCollector {
    collect(logPoint: Log): void;
}
export declare class DeveloperFriendlyLogCollector implements LogCollector {
    private stdOut;
    constructor(stdOut?: any);
    collect(logPoint: Log): void;
}
