export declare namespace rabbit_model_jackrabbittender {
    interface ChargeAmount {
        charge_amount?: number;
        tip_amount?: number;
        currency?: string;
        cashback_amount?: number;
        connect_params?: ChargeAmount.ConnectParams;
    }
    namespace ChargeAmount {
        interface ConnectParams {
            stripe_account?: string;
            on_behalf_of?: string;
            destination_account?: string;
        }
    }
    interface CardPaymentMethod {
        masked_pan?: string;
        expiration_date?: string;
        card_brand?: any;
        card_entry_method?: any;
    }
    interface TipSelection {
        description: string;
        amount: number;
    }
    interface PaymentMethod {
        card_payment?: CardPaymentMethod;
        tip_selections?: TipSelection[];
    }
    interface Source {
        id: string;
        card_present?: {
            last4?: string;
            brand?: string;
            evidence_customer_signature?: string;
            read_method?: 'unknown_read_method' | 'contact_emv' | 'contactless_emv' | 'magnetic_stripe_fallback' | 'magnetic_stripe_track2' | 'contactless_magstripe_mode';
            emv_auth_data?: string;
            authorization_response_code?: string;
            dedicated_file_name?: string;
            application_preferred_name?: string;
            terminal_verification_results?: string;
            transaction_status_information?: string;
            cvm_type?: string;
            fingerprint?: string;
        };
    }
    interface ProcessedCharge {
        charge_id?: string;
        charged_amount?: ChargeAmount;
        c_time?: number;
        description?: string;
        receipt_email?: string;
        statement_descriptor?: string;
        live_mode?: boolean;
        source?: Source;
        authorization_code?: string;
    }
    interface Error {
        code?: string;
        message?: string;
    }
    interface DeclinedCharge {
        charge_id?: string;
        error?: Error;
        source?: Source;
    }
}
