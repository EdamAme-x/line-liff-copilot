export type SyncHookFunc<P extends readonly any[] = readonly any[]> = (...args: P) => void;
export type AsyncHookFunc<P extends readonly any[] = readonly any[]> = (...args: P) => Promise<void>;
export declare class SyncHook<P extends readonly any[] = readonly any[]> {
    readonly type: "sync";
    private fns;
    on: (fn: SyncHookFunc<P>) => void;
    call: (...args: P) => void;
}
export declare class AsyncHook<P extends readonly any[] = readonly any[]> {
    readonly type: "async";
    private fns;
    on: (fn: AsyncHookFunc<P>) => void;
    call: (...args: P) => Promise<void>;
}
export declare class AsyncSeriesHook<P extends readonly any[] = readonly any[]> {
    readonly type: "asyncSeries";
    private fns;
    on: (fn: AsyncHookFunc<P>) => void;
    call: (...args: P) => Promise<void>;
}
