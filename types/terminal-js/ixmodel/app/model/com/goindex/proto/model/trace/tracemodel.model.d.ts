import { model_common_commonmodel } from './../common/commonmodel.model';
export declare namespace model_trace_tracemodel {
    interface TracePb {
        id?: string;
        account_id?: string;
        request_info?: RequestInfoPb;
        start_time_ms?: number;
        total_time_ms?: number;
        service?: string;
        method?: string;
        request?: string;
        response?: string;
        exception?: string;
        version_info?: model_common_commonmodel.VersionInfoPb;
        subsystem_time?: TracePb.SubsystemTimePb[];
        traces?: TracePb.TracePointPb[];
        secondary_indices?: TracePb.SecondaryIndices;
    }
    namespace TracePb {
        interface SubsystemTimePb {
            subsystem?: string;
            time?: number;
            calls?: number;
        }
        interface TracePointPb {
            time_offset_ms?: number;
            log_point?: TracePb.TracePointPb.LogPoint;
            meter_point?: TracePb.TracePointPb.MeterPoint;
        }
        namespace TracePointPb {
            interface LogPoint {
                log_level?: number;
                tag?: string;
                message?: string;
                exception?: string;
            }
            interface MeterPoint {
                event_name?: string;
                elapsed_ms?: number;
            }
        }
        interface SecondaryIndices {
            ticket_id?: string;
            client_ticket_id?: string;
            email?: string;
        }
    }
    interface ProxyTracePb {
        origin_role?: string;
        origin_id?: string;
        origin_ip?: string;
        trace?: TracePb;
        client_summary?: ClientSummaryPb;
    }
    interface ClientSummaryPb {
        summary_type?: string;
    }
    interface RequestInfoPb {
        user_agent?: string;
        ip_address?: string;
        remote_port?: number;
        entry_point?: string;
        service_name?: string;
        method_name?: string;
        host_name?: string;
        host_ip_address?: string;
    }
}
