export declare class Store {
    private storage;
    constructor(storage: Storage);
    getItem(key: string): string | null;
    setItem<T extends string>(key: string, v: T): void;
    removeItem(key: string): void;
    clear(): void;
    private getKeyPrefix;
    private getLiffId;
}
