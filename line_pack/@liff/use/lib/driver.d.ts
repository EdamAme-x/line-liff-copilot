import { SyncHook, AsyncHook } from '@liff/hooks';
import { LiffModule, LiffPlugin } from './module';
type AddHookListener = SyncHook['on'] | AsyncHook['on'];
export type HooksRegisters = {
    [apiName: string]: {
        [timing: string]: AddHookListener;
    };
};
type LiffModuleOrLiffPlugin = LiffModule<unknown, unknown, unknown> | LiffPlugin<unknown, unknown, unknown>;
export interface ModuleDriver {
    addModule(name: string, module: LiffModuleOrLiffPlugin): void;
    hasModule(name: string): boolean;
    hooks: HooksRegisters;
    internalHooks: HooksRegisters;
}
export declare class ModuleDriverImpl implements ModuleDriver {
    private modules;
    hooks: HooksRegisters;
    internalHooks: HooksRegisters;
    addModule(name: string, module: LiffModuleOrLiffPlugin): void;
    hasModule(name: string): boolean;
}
export {};
