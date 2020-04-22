export declare enum LogLevel {
    DEBUG = "debug",
    INFO = "info",
    WARN = "warn",
    ERROR = "error"
}
export interface BaseLog {
    log_level: LogLevel;
    tag: string;
}
export interface TextLog extends BaseLog {
    type: 'text';
    message: string;
}
export interface ExceptionLog extends BaseLog {
    type: 'exception';
    exception: string;
}
export declare type Log = TextLog | ExceptionLog;
