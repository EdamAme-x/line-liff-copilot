import { InitialLiff } from '@liff/types';
export interface ScanCodeResult {
    value: string | null;
}
export type ScanCode = () => Promise<ScanCodeResult>;
export declare function createScanCode(liff: InitialLiff): ScanCode;
