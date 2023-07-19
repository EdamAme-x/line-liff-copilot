import { LiffModule } from '@liff/use';
type OS = 'ios' | 'android' | 'web' | undefined;
export declare function getOS(): OS;
export declare function _cleanupCachedOS(): void;
type Api = () => OS;
export declare class GetOSModule extends LiffModule<Api, never, {}> {
    get name(): string;
    constructor();
    install(): () => OS;
}
export {};
