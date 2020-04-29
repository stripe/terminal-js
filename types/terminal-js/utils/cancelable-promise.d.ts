export interface CancellableOp<T, P = any> {
    execute: (isCanceled: () => boolean) => {
        result: PromiseLike<T>;
        resource?: P;
    };
    onCancel?: (resource?: P) => void | PromiseLike<void>;
}
export declare class Cancelable<T> {
    private cancelableOp;
    static chainCancelable<J, T>(cancelable: Cancelable<J>, chainedFn: (arg: J) => Cancelable<T>): Cancelable<T>;
    private internalPromise;
    private isPending;
    private canceled;
    private rejectFn;
    private resource;
    constructor(cancelableOp: CancellableOp<T>);
    result(): PromiseLike<T>;
    cancel(): Promise<void>;
    isCanceled(): boolean;
}
