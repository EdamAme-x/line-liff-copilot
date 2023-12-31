import { LiffUTS } from '@liff/types';
declare global {
    interface Window {
        uts: LiffUTS;
    }
}
export declare function loadUtsSdk(): Promise<LiffUTS>;
