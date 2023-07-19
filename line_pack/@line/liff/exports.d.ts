import type { Liff as LiffAPIs, OfficialHooks } from '@liff/liff-types';
import type { LiffExtendableFunctions } from '@liff/extensions';
import type { ApiHooks, HooksRegistersFromApiHooks, HookTimings, LiffPlugin as _LiffPlugin, PluginContext as _LiffPluginContext } from '@liff/use';
export interface Liff extends LiffAPIs, LiffExtendableFunctions {
}
export type LiffPluginContext<UserDefineHooks extends ApiHooks = ApiHooks> = _LiffPluginContext<Liff, HooksRegistersFromApiHooks<UserDefineHooks & OfficialHooks>>;
export type LiffPlugin<LiffPluginApi, LiffPluginOption = never, LiffHookTimings extends HookTimings = HookTimings> = _LiffPlugin<LiffPluginApi, LiffPluginOption, Liff, LiffHookTimings>;
export declare const liff: Liff;
