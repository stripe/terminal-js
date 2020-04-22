import { ExposedError } from './error-utils';
export declare enum ErrorCodes {
    NO_ESTABLISHED_CONNECTION = "no_established_connection",
    INVALID_READER_SHAPE = "invalid_reader_shape",
    INVALID_PAYMENT_INTENT_CLIENT_SECRET = "invalid_payment_intent_client_secret",
    INVALID_PAYMENT_INTENT_INPUT_SHAPE = "invalid_payment_intent_input_shape",
    INVALID_CHARGE_ID_INPUT_SHAPE = "invalid_charge_id_input_shape",
    NO_ACTIVE_COLLECT_PAYMENT_METHOD_ATTEMPT = "no_active_collect_payment_method_attempt",
    NO_ACTIVE_READ_REUSABLE_CARD_ATTEMPT = "NO_ACTIVE_READ_REUSABLE_CARD_ATTEMPT",
    CANCELED = "canceled",
    CANCELED_BY_CUSTOMER = "canceled_by_customer",
    CANCELABLE_ALREADY_COMPLETED = "cancelable_already_completed",
    CANCELABLE_ALREADY_CANCELED = "cancelable_already_canceled",
    NETWORK_ERROR = "network_error",
    NETWORK_TIMEOUT = "network_timeout",
    READER_CONNECTION_ERROR = "reader_connection_error",
    INTERNET_CONNECTION_UNAVAILABLE = "internet_connection_unavailable",
    ALREADY_CONNECTED = "already_connected",
    AUTHENTICATION_ERROR = "authentication_error",
    INVALID_CONNECTION_TOKEN = "invalid_connection_token",
    FAILED_FETCH_CONNECTION_TOKEN = "failed_fetch_connection_token",
    DISCOVERY_ALREADY_RUNNING = "discovery_already_running",
    DISCOVERY_NOT_RUNNING = "discovery_not_running",
    DISCOVERY_TOO_MANY_READERS = "discovery_too_many_readers",
    INVALID_TYPE = "invalid_type",
    INVALID_TYPE_INTERNAL = "invalid_type_internal",
    ILLEGAL_STATE = "illegal_state",
    INVALID_ARGUMENT = "invalid_argument",
    INVALID_ON_FETCH_CONNECTION_TOKEN = "invalid_on_fetch_connection_token",
    INVALID_ON_UNEXPECTED_READER_DISCONNECT = "invalid_on_unexpected_reader_disconnect",
    INVALID_ON_CONNECTION_STATUS_CHANGE = "invalid_on_connection_status_change",
    INVALID_ON_PAYMENT_STATUS_CHANGE = "invalid_on_payment_status_change",
    INVALID_READER_VERSION = "invalid_reader_version",
    JSON_RPC_PARSE_ERROR = "json_rpc_parse_error",
    READER_ERROR = "reader_error",
    RPC_ERROR = "rpc_error",
    COMMAND_ALREADY_IN_PROGRESS = "command_already_in_progress",
    REFUND_FAILED = "refund_failed"
}
export declare module ErrorTemplates {
    type MessageGeneratingFn = (vars?: {
        [key: string]: any;
    }) => string;
    const CodeToMessageMap: {
        [P in ErrorCodes]: MessageGeneratingFn;
    };
    function generateErrorMessage(code: ErrorCodes, vars?: {
        [key: string]: any;
    }): string;
    function generateError(code: ErrorCodes, vars?: {
        [key: string]: any;
    }): ExposedError;
}
