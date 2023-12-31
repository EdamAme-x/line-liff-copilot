export declare enum LogLevel {
    DEBUG = 1,
    INFO = 2,
    WARN = 3,
    ERROR = 4
}
export declare class Logger {
    private logLevel;
    constructor(logLevel?: LogLevel);
    debug(...args: Parameters<typeof console.debug>): void;
    info(...args: Parameters<typeof console.info>): void;
    warn(...args: Parameters<typeof console.warn>): void;
    error(...args: Parameters<typeof console.error>): void;
    private _debug;
    private _info;
    private _warn;
    private _error;
}
export declare const logger: Logger;
