export declare type EventResult = 'OK' | 'ERROR';
export interface BaseEvent {
    domain?: string;
    scope?: string;
    event: string;
    result: EventResult;
    error_code?: string;
}
export interface MeterEvent extends BaseEvent {
    type: 'meter';
    duration: number;
}
export interface GaugeEvent extends BaseEvent {
    type: 'gauge';
    measurement: number;
}
export interface CountEvent extends BaseEvent {
    type: 'count';
}
export declare type Event = MeterEvent | GaugeEvent | CountEvent;
