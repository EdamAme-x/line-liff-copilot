import { HookTimings, ModuleContext, PluginContext } from './context';
export declare abstract class LiffModule<Api, Option, Liff, Timings extends HookTimings = HookTimings, InternalTimings extends HookTimings = HookTimings> {
    abstract install(context: ModuleContext<Liff>, options?: Option): Api;
    abstract get name(): string;
    hooks?: Timings;
    internalHooks?: InternalTimings;
}
export declare const isLiffModule: (module: unknown) => module is LiffModule<unknown, unknown, unknown, HookTimings, HookTimings>;
export interface LiffPlugin<Api, Option, Liff, Timings extends HookTimings = HookTimings> {
    install(context: PluginContext<Liff>, options?: Option): Api;
    readonly name: string;
    hooks?: Timings;
}
