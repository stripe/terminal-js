import { rabbit_model_jackrabbittender } from '../ixmodel/app/model/com/goindex/proto/rabbit/model/jackrabbittender.model';
import { StripeApiModels } from '../ixmodel/app/model/com/goindex/proto/stripe.model';
import PaymentMethod = rabbit_model_jackrabbittender.PaymentMethod;
export declare type Metadata = {
    [key: string]: string;
};
export declare type PaymentIntentClientSecret = string;
export declare enum PaymentStatus {
    NOT_READY = "not_ready",
    READY = "ready",
    WAITING_FOR_INPUT = "waiting_for_input",
    PROCESSING = "processing"
}
export declare enum ConnectionStatus {
    CONNECTING = "connecting",
    CONNECTED = "connected",
    NOT_CONNECTED = "not_connected"
}
export interface SdkManagedPaymentIntent extends StripeApiModels.PaymentIntent {
    sdk_payment_details: PaymentMethod;
}
export interface ConnectOptions {
    fail_if_in_use?: boolean;
}
export interface RefundOptions {
    reverse_transfer?: boolean;
    refund_application_fee?: boolean;
}
