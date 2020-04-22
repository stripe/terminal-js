import { LogCollector } from './logs/log-collector';
import { EventCollector } from './events/event-collector';
import { TraceCollector } from './tracing/trace-collector';
export default class ConsoleCollector implements LogCollector, EventCollector, TraceCollector {
    collect(logPoint: any): void;
}
