export interface StorageBin<T> {
    setValue(val: T): void;
    getValue(): T | null;
    clearValue(): void;
}
export declare class LocalStorageBin<T> implements StorageBin<T> {
    private binName;
    static isEnabled(): boolean;
    constructor(binName: string);
    setValue(val: T): void;
    getValue(): T | null;
    clearValue(): void;
}
export declare class InMemoryStorageBin<T> implements StorageBin<T> {
    private binName;
    static isEnabled(): boolean;
    private static storageMap;
    constructor(binName: string);
    setValue(val: T): void;
    getValue(): T | null;
    clearValue(): void;
}
export declare class StorageMgr {
    private namespace;
    constructor(namespace?: string);
    getStorageBin<T>(binName: string): StorageBin<T>;
}
