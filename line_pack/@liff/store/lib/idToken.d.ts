import { LiffModule } from '@liff/use';
export declare function getIDToken(): string | null;
export declare function setIDToken(value: string): void;
type Api = () => string | null;
export declare class GetIDTokenModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => string | null;
}
export {};
