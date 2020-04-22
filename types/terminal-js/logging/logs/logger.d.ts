import { LogCollector } from './log-collector';
import { LogLevel } from './log-point';
import { SomeError } from '../../utils/error-utils';
export interface TracingContext {
    payment_intent_id?: string;
}
export default class Logger {
    private static collectors;
    static setCollectors(collectors: LogCollector[]): void;
    private static forwardToCollectors;
    static log(msg: string, logLevel: LogLevel): void;
    static debug(obj: any | Error): void;
    static info(msg: string): void;
    static warning(msg: string): void;
    static user_error(msg: string): void;
    static error(msg: string): void;
    static exception(exception: SomeError): void;
    private static textLog;
    private static baseLog;
}
