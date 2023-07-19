import { LiffModule, ModuleContext } from '@liff/use';
import { Languages, Keys } from './types';
type I18nModuleAPI = {
    setLang: typeof setLang;
};
export type ExtendLiffCore = {
    i18n: I18nModuleAPI;
};
declare function setLang(newLang: Languages): Promise<void>;
export declare function t(xltKey: Keys): string;
export declare class I18nModule extends LiffModule<I18nModuleAPI, never, unknown> {
    get name(): string;
    install({ internalHooks }: ModuleContext<{}>): I18nModuleAPI;
    beforeInitFinished(): Promise<void>;
}
export declare const module: I18nModule;
export {};
