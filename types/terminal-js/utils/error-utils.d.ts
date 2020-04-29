import { StripeApiModels } from '../ixmodel/app/model/com/goindex/proto/stripe.model';
export declare type ErrorResponse = {
    error: ExposedError;
};
export declare type ExposedError = {
    type?: string;
    request_id?: string;
    code?: string;
    message: string;
    decline_code?: string;
    payment_intent?: StripeApiModels.PaymentIntent;
    failure_reason?: string;
    failure_balance_transaction?: string;
};
export declare function isExposedError(obj: any): obj is ExposedError;
export declare function isErrorResponse(obj: any): obj is ErrorResponse;
export declare class IxApplicationError extends Error implements ErrorResponse {
    error: ExposedError;
    constructor(error: ExposedError);
    toErrorResponse(): ErrorResponse;
}
export declare type SomeError = IxApplicationError | string | ExposedError | Error | any;
export declare type Try<T> = T | ErrorResponse;
export declare function runWithApplicationErrorsLifted<T>(fn: () => T | Promise<T> | never): Promise<Try<T>>;
export declare function extractErrorMsg(error: SomeError): string;
export declare function WithApplicationErrorsLiftedToTry(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => Promise<any>>): TypedPropertyDescriptor<(...args: any[]) => Promise<Try<any>>>;
