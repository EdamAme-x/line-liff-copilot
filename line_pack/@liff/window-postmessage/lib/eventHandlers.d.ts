interface EventHandlers {
    [k: string]: Function | null;
}
export declare function getEventHandlers(): EventHandlers;
export declare function storeEventHandler(key: string, handler: Function): void;
export {};
