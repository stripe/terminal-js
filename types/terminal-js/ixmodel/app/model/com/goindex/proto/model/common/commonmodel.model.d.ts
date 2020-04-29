export declare namespace model_common_commonmodel {
    enum RunMode {
        PROD = 0,
        DEV = 1
    }
    interface VersionInfoPb {
        client_type?: VersionInfoPb.ClientType;
        client_version?: string;
    }
    namespace VersionInfoPb {
        enum ClientType {
            JS_SDK = "JS_SDK",
            RACCOON = "RACCOON",
            WARDEN = "WARDEN",
            STRIPE_CLI = "STRIPE_CLI",
            ANDROID_READER = "ANDROID_READER",
            ANDROID_READER_UPDATER = "ANDROID_READER_UPDATER"
        }
    }
    interface ApplicationModel {
        app_id?: string;
        app_version?: string;
    }
    interface DeviceInfo {
        device_class?: DeviceInfo.DeviceClass;
        device_uuid?: string;
        device_ip?: string;
        host_hw_version?: string;
        host_os_version?: string;
        hardware_model?: {
            pos_info?: {
                description?: string;
            };
        };
        app_model?: ApplicationModel;
        hostname?: string;
    }
    namespace DeviceInfo {
        enum DeviceClass {
            INVALID = "INVALID",
            POS = "POS",
            READER = "READER"
        }
    }
    interface EmptyMessage {
    }
}
