import { IxApplicationError } from '../utils/error-utils';
import IxHttpError from './ix-http-error';
export default class IxStripeHttpError extends IxApplicationError {
    static fromHttpError(httpError: IxHttpError): IxStripeHttpError;
    private constructor();
}
