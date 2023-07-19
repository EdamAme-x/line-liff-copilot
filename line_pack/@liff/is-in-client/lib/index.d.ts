import { LiffModule } from '@liff/use';
export declare function isInClient(): boolean;
export declare function _cleanupCachedIsInClient(): void;
type Api = () => boolean;
export declare class IsInClientModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => boolean;
}
export {};
