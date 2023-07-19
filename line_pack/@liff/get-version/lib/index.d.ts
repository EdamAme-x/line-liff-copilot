import { LiffModule } from '@liff/use';
export declare function getVersion(): string;
type Api = () => string;
export declare class GetVersionModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => string;
}
export {};
