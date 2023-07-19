import { LiffModule } from '@liff/use';
export declare function getAccessToken(): string | null;
export declare function setAccessToken(value: string): void;
type Api = () => string | null;
export declare class GetAccessTokenModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => string | null;
}
export {};
