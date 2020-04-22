import { rabbit_model_rabbitsystem } from './../../rabbit/model/rabbitsystem.model';
export declare namespace darko_api_rabbitservice {
    interface Address {
        line1?: string;
        line2?: string;
        city?: string;
        state?: string;
        country?: string;
        postal_code?: string;
    }
    interface ActivateTerminalRequest {
        pos_activation_token?: string;
        pos_device_id?: string;
        store_name?: string;
        store_address?: Address;
        pos_hardware_info?: rabbit_model_rabbitsystem.PosHardwareInfo;
        pos_software_info?: rabbit_model_rabbitsystem.PosSoftwareInfo;
        terminal_id?: string;
        terminal_ip?: string;
        fail_if_in_use?: boolean;
    }
    interface ActivateTerminalResponse {
        session_token?: string;
        sdk_rpc_session?: string;
        system_context?: rabbit_model_rabbitsystem.SystemContext;
        store_name?: string;
        livemode?: boolean;
        request_id?: string;
        version?: rabbit_model_rabbitsystem.ReaderVersion;
    }
    interface EndTransactionRequest {
        transaction_context?: rabbit_model_rabbitsystem.TransactionContext;
    }
    interface EndTransactionResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
    }
    interface StartTransactionRequest {
        new_transaction_context?: rabbit_model_rabbitsystem.TransactionContext;
    }
    interface StartTransactionResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
    }
    interface TerminalHeartbeatRequest {
    }
    interface TerminalHeartbeatResponse {
        system_context?: rabbit_model_rabbitsystem.SystemContext;
    }
}
