import { model_trace_tracemodel } from './../../model/trace/tracemodel.model';
export declare namespace api_gator_gatorservice {
    interface ReportTraceRequest {
        reporter_role?: string;
        reporter_id?: string;
        reporter_ip?: string;
        traces?: model_trace_tracemodel.TracePb[];
        proxy_traces?: model_trace_tracemodel.ProxyTracePb[];
        summaries?: model_trace_tracemodel.ClientSummaryPb[];
    }
    interface ReportTraceResponse {
    }
    interface EventResultPb {
        domain?: string;
        scope?: string;
        event?: string;
        result?: EventResultPb.Result;
        outcome?: string;
        duration?: number;
        measurement?: number;
    }
    namespace EventResultPb {
        enum Result {
            OK = "OK",
            ERROR = "ERROR"
        }
    }
    interface ProxyEventPb {
        origin_role?: string;
        origin_id?: string;
        origin_ip?: string;
        event?: EventResultPb;
    }
    interface ReportEventRequest {
        proxy_events?: ProxyEventPb[];
    }
    interface ReportEventResponse {
    }
}
