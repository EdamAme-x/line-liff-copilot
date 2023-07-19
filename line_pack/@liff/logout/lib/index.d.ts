import { LiffModule } from '@liff/use';
export declare function logout(): void;
type Api = () => void;
export declare class LogoutModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => void;
}
export {};
