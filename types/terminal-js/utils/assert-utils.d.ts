import { LogLevel } from '../logging/logs/log-point';
import { ErrorCodes } from './error-templates';
export declare type AssertErrorCode = ErrorCodes.INVALID_ARGUMENT | ErrorCodes.ILLEGAL_STATE | ErrorCodes.INVALID_TYPE;
export declare class AssertUtils {
    static assert(condition: boolean, code: ErrorCodes, msgContext?: {
        [key: string]: string;
    }, assertCode?: AssertErrorCode, level?: LogLevel): void | never;
    static checkUserGivenArg(condition: boolean, code: ErrorCodes, msgContext?: {
        [key: string]: string;
    }): void;
    static checkState(condition: boolean, code: ErrorCodes, msgContext?: {
        [key: string]: string;
    }): void;
    static checkType(expectedType: TypeChecker, value: any, code?: ErrorCodes): void;
}
export interface TypeChecker {
    matchesType(value: any): boolean;
    getTypeDescriptor(): any;
}
export declare class NullType implements TypeChecker {
    matchesType(value: any): boolean;
    getTypeDescriptor(): string;
}
export declare class RegexType implements TypeChecker {
    private regex;
    private regexName?;
    constructor(regex: RegExp, regexName?: string);
    matchesType(value: any): boolean;
    getTypeDescriptor(): string;
}
export declare class ExactValueType implements TypeChecker {
    private expected;
    constructor(expected: any);
    matchesType(value: any): boolean;
    getTypeDescriptor(): any;
}
export declare class OneofType implements TypeChecker {
    private checker1;
    private checker2;
    constructor(checker1: TypeChecker, checker2: TypeChecker);
    matchesType(value: any): boolean;
    getTypeDescriptor(): {
        '<oneOf>': any[];
    };
}
export declare function NullableType(checker: TypeChecker): OneofType;
export declare class TypeofChecker implements TypeChecker {
    private type;
    constructor(type: string);
    matchesType(value: any): boolean;
    getTypeDescriptor(): string;
}
export declare class ArrayChecker implements TypeChecker {
    private checker;
    constructor(checker: TypeChecker);
    matchesType(value: any): any;
    getTypeDescriptor(): any[];
}
export declare class ObjectChecker implements TypeChecker {
    private objectTypeDef;
    private strictMode;
    constructor(objectTypeDef: {
        [key: string]: TypeChecker;
    }, strictMode?: boolean);
    matchesType(value: any): boolean;
    getTypeDescriptor(): any;
}
