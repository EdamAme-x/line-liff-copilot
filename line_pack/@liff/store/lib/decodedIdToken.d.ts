import { LiffModule } from '@liff/use';
interface JWTPayload {
    iss?: string;
    sub?: string;
    aud?: string;
    exp?: number;
    iat?: number;
    auth_time?: number;
    nonce?: string;
    amr?: string[];
    name?: string;
    picture?: string;
    email?: string;
}
export declare function getDecodedIDToken(): JWTPayload | null;
export declare function setDecodedIDToken(value: unknown): void;
type Api = () => JWTPayload | null;
export declare class GetDecodedIDTokenModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => JWTPayload | null;
}
export {};
