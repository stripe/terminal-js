import { Trace, TracePoint } from './trace-point';
import { MeterEvent } from '../events/event-point';
import { Log, LogLevel } from '../logs/log-point';
import { PeriodicFlusher } from '../../utils/flusher';
import GatorRpcService from '../gator-rpc-service';
import { model_trace_tracemodel } from '../../ixmodel/app/model/com/goindex/proto/model/trace/tracemodel.model';
import 'whatwg-fetch';
import TracePb = model_trace_tracemodel.TracePb;
import TracePointPb = model_trace_tracemodel.TracePb.TracePointPb;
export interface TraceCollector {
    collect(trace: Trace): void;
}
export declare function mapMeterEventToMeterPoint(event: MeterEvent): TracePointPb.MeterPoint;
export declare function mapLogLevelToNumber(logLevel: LogLevel): number;
export declare function mapLogToLogPoint(log: Log): TracePointPb.LogPoint;
export declare function mapTracePointToTracePointPb(point: TracePoint): TracePointPb;
export declare function mapTraceToTracePb(trace: Trace): TracePb;
export declare class GatorTraceCollector extends PeriodicFlusher<Trace> implements TraceCollector {
    private posDeviceId;
    private gator;
    constructor(posDeviceId: string, gator: GatorRpcService, flushInterval?: number);
    doFlush(t: Trace[]): Promise<import("../../ixmodel/app/model/com/goindex/proto/api/gator/gatorservice.model").api_gator_gatorservice.ReportTraceResponse>;
}
