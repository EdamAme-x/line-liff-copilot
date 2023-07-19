import { SyncHook, AsyncHook } from '@liff/hooks';
import { HooksRegisters, ModuleDriver } from './driver';
export type HookTimings = {
    [timing: string]: SyncHook | AsyncHook;
};
export type ApiHooks = Record<string, HookTimings>;
export type HooksRegistersFromApiHooks<Hooks extends ApiHooks> = {
    [apiName in keyof Hooks]: {
        [timing in keyof Hooks[apiName]]: Hooks[apiName][timing]['on'];
    };
};
interface BaseModuleContext<Liff, Hooks extends HooksRegisters = HooksRegisters, InternalHooks extends HooksRegisters = HooksRegisters> {
    liff: Liff;
    hooks: Hooks;
    internalHooks: InternalHooks;
}
export type ModuleContext<Liff, Hooks extends ApiHooks = ApiHooks, InternalHooks extends ApiHooks = ApiHooks> = BaseModuleContext<Liff, HooksRegistersFromApiHooks<Hooks>, HooksRegistersFromApiHooks<InternalHooks>>;
declare class ModuleContextImpl<Liff> implements ModuleContext<Liff> {
    private _driver;
    liff: Liff;
    constructor(_driver: ModuleDriver, liff: Liff);
    hooks: HooksRegisters;
    internalHooks: HooksRegisters;
}
export interface PluginContext<Liff, Hooks extends HooksRegisters = HooksRegisters> {
    liff: Liff;
    hooks: Hooks;
}
declare class PluginContextImpl<Liff> implements PluginContext<Liff> {
    private _driver;
    liff: Liff;
    constructor(_driver: ModuleDriver, liff: Liff);
    hooks: HooksRegisters;
}
export declare class ContextHolder<Liff> {
    private pluginCtx;
    private moduleCtx;
    constructor(driver: ModuleDriver, liff: Liff);
    get pluginContext(): PluginContextImpl<Liff>;
    get moduleContext(): ModuleContextImpl<Liff>;
}
export {};
