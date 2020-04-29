import { Event } from './event-point';
import { PeriodicFlusher } from '../../utils/flusher';
import GatorRpcService from '../gator-rpc-service';
import { api_gator_gatorservice } from '../../ixmodel/app/model/com/goindex/proto/api/gator/gatorservice.model';
import EventResultPb = api_gator_gatorservice.EventResultPb;
export interface EventCollector {
    collect(event: Event): void;
}
export declare function mapEventToEventResultPb(event: Event): EventResultPb;
export declare class GatorEventCollector extends PeriodicFlusher<Event> implements EventCollector {
    private posDeviceId;
    private gator;
    constructor(posDeviceId: string, gator: GatorRpcService, flushInterval?: number);
    doFlush(t: Event[]): Promise<api_gator_gatorservice.ReportEventResponse>;
}
