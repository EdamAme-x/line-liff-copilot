import { LiffModule } from '@liff/use';
type IsSubWindow = () => boolean;
export type ExtendLiffCore = {
    isSubWindow: IsSubWindow;
};
export declare class IsSubWindowModule extends LiffModule<IsSubWindow, never, unknown> {
    private impl;
    constructor();
    get name(): string;
    install(): IsSubWindow;
}
export declare const module: IsSubWindowModule;
export declare const isSubWindow: IsSubWindow;
export {};
