import { model_common_commonmodel } from '../ixmodel/app/model/com/goindex/proto/model/common/commonmodel.model';
export declare function getDeviceInfo(): model_common_commonmodel.DeviceInfo;
export declare const VERSION_INFO: model_common_commonmodel.VersionInfoPb;
export declare type SemanticVersion = number[];
export declare function extractSemanticVersion(version: string): SemanticVersion;
export declare function isVersionCompatible(minVersion: string, actualVersion: string): boolean;
