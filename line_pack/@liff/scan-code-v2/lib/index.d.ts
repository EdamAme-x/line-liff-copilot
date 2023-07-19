import { LiffModule } from '@liff/use';
interface ScanCodeResult {
    value: string | null;
}
declare function scanCodeV2(): Promise<ScanCodeResult>;
type ScanCodeV2 = typeof scanCodeV2;
export interface ExtendLiffCore {
    scanCodeV2: ScanCodeV2;
}
export declare class ScanCodeV2Module extends LiffModule<ScanCodeV2, never, unknown> {
    get name(): string;
    install(): ScanCodeV2;
}
export declare const module: ScanCodeV2Module;
export {};
