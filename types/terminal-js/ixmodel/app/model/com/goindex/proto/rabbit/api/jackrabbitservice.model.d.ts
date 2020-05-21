import { rabbit_model_jackrabbittender } from './../model/jackrabbittender.model';
import { rabbit_model_jackrabbittransaction } from './../model/jackrabbittransaction.model';
import { rabbit_model_rabbitsystem } from './../model/rabbitsystem.model';
import { StripeApiModels } from '../../stripe.model';
export declare namespace rabbit_api_jackrabbitservice {
    interface CancelCollectPaymentMethodRequest {
        transaction_context?: rabbit_model_rabbitsystem.TransactionContext;
    }
    interface CancelCollectPaymentMethodResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
    }
    interface ConfirmPaymentRequest {
        transaction_context?: rabbit_model_rabbitsystem.TransactionContext;
        payment_intent_id?: string;
        payment_method?: rabbit_model_jackrabbittender.PaymentMethod;
    }
    interface ConfirmPaymentResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
        request_id?: string;
        confirmed_payment_intent?: StripeApiModels.PaymentIntent;
        decline_response?: StripeApiModels.ErrorWrapper;
        confirm_error?: rabbit_model_jackrabbittender.Error;
    }
    interface CollectReusableCardRequest {
    }
    interface CollectReusableCardResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
    }
    interface QueryCollectReusableCardRequest {
    }
    enum ReusableCardRequestStatus {
        REUSABLE_CARD_PENDING = "REUSABLE_CARD_PENDING",
        REUSABLE_CARD_CANCELED = "REUSABLE_CARD_CANCELED"
    }
    interface QueryCollectReusableCardResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
        reusable_card_method?: rabbit_model_jackrabbittender.PaymentMethod;
        reusable_card_status?: ReusableCardRequestStatus;
        num_of_canceled_payments?: number;
    }
    interface CancelCollectReusableCardRequest {
    }
    interface CancelCollectReusableCardResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
    }
    interface ConfirmReusableCardRequest {
        reusable_card_method?: rabbit_model_jackrabbittender.PaymentMethod;
        customer?: string;
    }
    interface ConfirmReusableCardResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
        request_id?: string;
        created_reusuable_card?: any;
        confirm_error?: rabbit_model_jackrabbittender.Error;
    }
    interface CollectSourceRequest {
    }
    interface CollectSourceResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
    }
    interface QueryCollectSourceRequest {
    }
    interface QueryCollectSourceResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
        source_method?: rabbit_model_jackrabbittender.PaymentMethod;
        source_status?: QueryCollectSourceResponse.SourceRequestStatus;
    }
    module QueryCollectSourceResponse {
        enum SourceRequestStatus {
            SOURCE_PENDING = "SOURCE_PENDING",
            SOURCE_CANCELED = "SOURCE_CANCELED"
        }
    }
    interface CancelCollectSourceRequest {
    }
    interface CancelCollectSourceResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
    }
    interface ConfirmSourceRequest {
        source_method?: rabbit_model_jackrabbittender.PaymentMethod;
    }
    interface ConfirmSourceResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
        created_source?: rabbit_model_jackrabbittender.Source;
        confirm_error?: rabbit_model_jackrabbittender.Error;
        request_id?: string;
    }
    interface QueryPaymentMethodRequest {
        transaction_context?: rabbit_model_rabbitsystem.TransactionContext;
    }
    interface QueryPaymentMethodResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
        payment_method?: rabbit_model_jackrabbittender.PaymentMethod;
        payment_status?: QueryPaymentMethodResponse.PaymentRequestStatus;
        num_of_canceled_payments?: number;
    }
    namespace QueryPaymentMethodResponse {
        enum PaymentRequestStatus {
            PAYMENT_PENDING = "PAYMENT_PENDING",
            PAYMENT_CANCELED = "PAYMENT_CANCELED"
        }
    }
    interface CollectPaymentMethodRequest {
        transaction_context?: rabbit_model_rabbitsystem.TransactionContext;
        charge_amount?: rabbit_model_jackrabbittender.ChargeAmount;
        description?: string;
        statement_descriptor?: string;
        receipt_email?: string;
        tip_configuration?: CollectPaymentMethodRequest.TipConfiguration;
    }
    namespace CollectPaymentMethodRequest {
        interface TipConfiguration {
            options: TipOption[];
            hide_custom_amount: boolean;
        }
        interface TipOption {
            amount: number;
            label: string;
        }
    }
    interface CollectPaymentMethodResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
        payment?: rabbit_model_jackrabbittender.PaymentMethod;
    }
    interface SetReaderDisplayRequest {
        transaction_context?: rabbit_model_rabbitsystem.TransactionContext;
        type?: string;
        cart?: rabbit_model_jackrabbittransaction.Cart;
    }
    interface SetReaderDisplayResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
    }
    interface ClearReaderDisplayRequest {
    }
    interface ClearReaderDisplayResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
    }
    interface CollectInteracRefundMethodRequest {
        charge_id?: string;
        transaction_context?: rabbit_model_rabbitsystem.TransactionContext;
        charge_amount?: rabbit_model_jackrabbittender.ChargeAmount;
    }
    interface CollectInteracRefundMethodResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
    }
    interface ConfirmInteracRefundRequest {
        transaction_context?: rabbit_model_rabbitsystem.TransactionContext;
        charge_id?: string;
        reason?: string;
        refund_application_fee?: boolean;
        reverse_transfer?: boolean;
        interac_payment_method?: rabbit_model_jackrabbittender.PaymentMethod;
    }
    interface ConfirmInteracRefundResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
        request_id: string;
        interac_refund: any;
        decline_response?: StripeApiModels.ErrorWrapper;
        confirm_error?: rabbit_model_jackrabbittender.Error;
    }
}
