export declare namespace StripeApiModels {
    interface Source {
        id: string;
        type: string;
        card_present?: any;
        interac_present?: any;
        metadata: {
            [key: string]: string;
        };
        owner: any;
    }
    enum PaymentIntentStatus {
        unknown_payment_intent_status = "unknown_payment_intent_status",
        requires_source = "requires_source",
        requires_confirmation = "requires_confirmation",
        requires_source_action = "requires_source_action",
        processing = "processing",
        requires_capture = "requires_capture",
        canceled = "canceled",
        succeeded = "succeeded",
        requires_payment_method = "requires_payment_method"
    }
    interface ErrorWrapper {
        error: ErrorResponse;
    }
    interface ErrorResponse {
        type?: string;
        charge?: string;
        code?: string;
        decline_code?: string;
        doc_url?: string;
        message: string;
        param?: string;
        payment_intent?: PaymentIntent;
    }
    interface PaymentIntent {
        id: string;
        created: number;
        status: PaymentIntentStatus;
        amount: number;
        currency: string;
        source: Source;
        statement_descriptor: string;
        description: string;
        receipt_email: string;
        livemode: boolean;
        last_payment_error?: ErrorResponse;
        metadata?: {
            [key: string]: string;
        };
        charges?: any[];
        payment_method?: any;
    }
}
