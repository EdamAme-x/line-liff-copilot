import { InitialLiff } from '@liff/types';
export declare class CheckAvailability {
    private static get SDK_VERSION_SUPPORTING_NEW();
    private impl;
    constructor(liff: InitialLiff);
    invoke(apiName: string): boolean;
}
