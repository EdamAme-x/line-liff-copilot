import { LiffModule } from '@liff/use';
import { SyncHook } from '@liff/hooks';
type Login = (config?: {
    redirectUri?: string;
}) => void;
export interface ExtendLiffCore {
    login: Login;
}
type Option = void | {
    redirectUri?: string;
};
export type LoginHooks = {
    before: SyncHook<[Option]>;
};
export declare const login: (loginConfig: Option) => void;
export declare class LoginModule extends LiffModule<Login, never, unknown, LoginHooks, never> {
    hooks: {
        before: SyncHook<[Option]>;
    };
    get name(): string;
    install(): Login;
    private _login;
}
export {};
