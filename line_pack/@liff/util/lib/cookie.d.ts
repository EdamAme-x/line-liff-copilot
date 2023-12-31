declare function get(key: string): string;
declare function set(key: string, value: string | number, options?: Record<string, unknown>): void;
declare function remove(key: string, options?: Record<string, unknown>): void;
export declare const cookie: {
    get: typeof get;
    set: typeof set;
    remove: typeof remove;
};
export {};
