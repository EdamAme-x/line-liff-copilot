import { LiffModule } from '@liff/use';
export declare function getLanguage(): string;
type Api = () => string;
export declare class GetLanguageModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => string;
}
export {};
