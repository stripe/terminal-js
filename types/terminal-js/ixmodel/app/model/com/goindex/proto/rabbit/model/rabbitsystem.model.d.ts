export declare namespace rabbit_model_rabbitsystem {
    interface TransactionContext {
        transaction_id?: string;
        operator_id?: string;
        terminal_id?: string;
        start_time?: number;
    }
    interface SystemContext {
        connectivity_status?: SystemContext.ConnectivityStatus;
    }
    namespace SystemContext {
        enum ConnectivityStatus {
            OFFLINE = 0,
            CONNECTED = 1
        }
    }
    interface PosHardwareInfo {
        cpu_architecture?: string;
        cpu_maker?: string;
        cpu_speed?: string;
        memory_amount?: string;
        model_number?: string;
        os_architecture?: string;
        serial_number?: string;
    }
    interface PosSoftwareInfo {
        os_version?: string;
        pos_type?: string;
        pos_version?: string;
        sdk_version?: string;
    }
    namespace ReaderVersion {
        enum ClientType {
            UNKNOWN = "UNKNOWN",
            RACCOON = "RACCOON",
            WARDEN = "WARDEN",
            ANDROID_READER = "ANDROID_READER"
        }
    }
    interface ReaderVersion {
        client_type?: ReaderVersion.ClientType;
        client_version?: string;
    }
}
