export declare class InMemoryStorage implements Storage {
    private map;
    clear(): void;
    getItem(key: string): string | null;
    setItem(key: string, v: string): void;
    removeItem(key: string): void;
    key(index: number): string | null;
    get length(): number;
}
