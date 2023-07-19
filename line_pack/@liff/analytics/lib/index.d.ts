import { LiffUTS } from '@liff/types';
import { LiffModule, ModuleContext } from '@liff/use';
import { LiffCore } from '@liff/core';
export interface ExtendLiffCore {
    analytics?: LiffUTS;
}
type Liff = {
    analytics?: LiffUTS;
} & LiffCore;
export declare class AnalyticsModule extends LiffModule<void, never, Liff> {
    private static get CUSTOMPLACEID_INIT();
    private static get CUSTOMTYPE();
    private static get LiffUtsLoginStatus();
    private uts?;
    private utsExtra;
    private referrer;
    private injected;
    get name(): string;
    private liffCore;
    install({ liff, internalHooks, }: ModuleContext<Liff, {}, {
        init: {
            beforeFinished: any;
            beforeSuccess: any;
            error: any;
        };
    }>): void;
    private changeRatioToUTSFormat;
    private setExtra;
    private assignUtsExtra;
    private setVersion;
    private setLiffId;
    private setIsLoggedIn;
    private sendLiffInit;
    private setIsLiffSuccessful;
    private prepareReferrer;
    private beforeInitFinished;
    private beforeInitSuccess;
    private initError;
}
export declare const sendShareTargetPicker: (uts: LiffUTS) => void;
export {};
