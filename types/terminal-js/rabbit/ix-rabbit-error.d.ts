import { IxApplicationError } from '../utils/error-utils';
export default class IxRabbitError extends IxApplicationError {
    constructor(msg: string);
}
