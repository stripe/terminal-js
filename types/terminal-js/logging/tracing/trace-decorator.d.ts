import { TraceFnConfig } from './tracer';
export default function TraceMethod(config?: TraceFnConfig): (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    value: (this: any, ...args: any[]) => any;
    enumerable?: boolean;
    configurable?: boolean;
    writable?: boolean;
    get?: () => any;
    set?: (value: any) => void;
};
