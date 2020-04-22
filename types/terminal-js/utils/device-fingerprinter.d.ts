import { StorageBin } from '../storage/storage-mgr';
/**
 * DeviceFingerprinter attempts to give a semi stable identifier for each browser
 */
export declare class DeviceFingerprinter {
    private storageBin;
    constructor(storageBin: StorageBin<string>);
    getDeviceFingerprint(): string;
}
export default DeviceFingerprinter;
