import { ContextHolder } from './context';
import { ModuleDriver } from './driver';
import { LiffModule, LiffPlugin } from './module';
export type Use<Liff> = <Api, Option>(this: Liff, module: LiffModule<Api, Option, Liff> | LiffPlugin<Api, Option, Liff>, option?: Option) => Liff;
export type ExtendLiffCoreUse<Liff> = {
    use: Use<Liff>;
};
type Option = {
    namespacePrefix?: string;
};
type UseApi<Liff> = Use<Liff>;
type UseOption = never;
export declare class UseModule<Liff> extends LiffModule<UseApi<Liff>, UseOption, Liff> {
    private driver;
    private contextHolder;
    private option?;
    constructor(driver: ModuleDriver, contextHolder: ContextHolder<Liff>, option?: Option | undefined);
    install(): Use<Liff>;
    get name(): string;
    private get defaultOption();
    private factory;
}
export {};
