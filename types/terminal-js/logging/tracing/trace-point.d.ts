import { model_common_commonmodel } from '../../ixmodel/app/model/com/goindex/proto/model/common/commonmodel.model';
import { MeterEvent } from '../events/event-point';
import { Log } from '../logs/log-point';
export interface TracePointBase {
    time_offset_ms: number;
}
export interface MeterPoint extends TracePointBase {
    type: 'meter';
    meter: MeterEvent;
}
export interface LogPoint extends TracePointBase {
    type: 'log';
    log: Log;
}
export declare type TracePoint = LogPoint | MeterPoint;
export interface TraceBase {
    id: string;
    parent_trace_id: string;
    transaction_id?: string;
    start_time_ms: number;
    total_time_ms?: number;
    service?: string;
    method: string;
    request: string;
    version_info: model_common_commonmodel.VersionInfoPb;
    trace_points: TracePoint[];
}
export interface SuccessTrace extends TraceBase {
    type: 'success';
    response: string;
}
export interface ExceptionTrace extends TraceBase {
    type: 'exception';
    exception: string;
}
export declare type Trace = SuccessTrace | ExceptionTrace;
