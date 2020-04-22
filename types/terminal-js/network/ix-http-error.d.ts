import { IxApplicationError } from '../utils/error-utils';
export default class IxHttpError extends IxApplicationError {
    response: Response;
    responseBodyText: string;
    constructor(response: Response, responseBodyText: string);
}
