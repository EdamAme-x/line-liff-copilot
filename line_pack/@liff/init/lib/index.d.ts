import { Config } from '@liff/types';
import { LiffModule, ModuleContext } from '@liff/use';
import { AsyncHook } from '@liff/hooks';
type Init = (config: Config, successCallback?: () => void, errorCallback?: (error: Error) => void) => Promise<void>;
export type ExtendLiffCore = {
    init: Init;
};
export type InitHooks = {
    before: AsyncHook;
    after: AsyncHook;
};
export type InitInternalHooks = {
    beforeFinished: AsyncHook;
    beforeSuccess: AsyncHook;
    error: AsyncHook<[any]>;
};
type MaybeLiff = {};
export declare class InitModule extends LiffModule<Init, unknown, unknown> {
    private liffForWindow;
    hooks: InitHooks;
    internalHooks: InitInternalHooks;
    get name(): string;
    install({ liff }: ModuleContext<MaybeLiff>): Init;
    init(config: Config, successCallback?: () => void, errorCallback?: (error: Error) => void): Promise<void>;
}
export {};
