import { LiffModule } from '@liff/use';
export declare function isLoggedIn(): boolean;
type Api = () => boolean;
export declare class IsLoggedInModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => boolean;
}
export {};
