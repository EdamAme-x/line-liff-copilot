import { LiffModule } from '@liff/use';
export interface PermanentLinkModuleAPI {
    createUrl: () => string;
    createUrlBy: (url: string) => Promise<string>;
    setExtraQueryParam: (paramsToAdd: string) => void;
}
export type ExtendLiffCorePermanentLink = {
    permanentLink: PermanentLinkModuleAPI;
};
export declare class PermanentLinkModule extends LiffModule<PermanentLinkModuleAPI, never, unknown> {
    private extraParams;
    get name(): string;
    private getAndValidateContext;
    createUrl: () => string;
    createUrlBy: (url: string) => Promise<string>;
    setExtraQueryParam: (paramsToAdd: string) => void;
    private isAncestor;
    install: () => PermanentLinkModuleAPI;
}
export declare const module: PermanentLinkModule;
