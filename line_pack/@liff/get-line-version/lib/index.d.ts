import { LiffModule } from '@liff/use';
export declare function getLineVersion(): string | null;
type Api = () => string | null;
export declare class GetLineVersionModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => string | null;
}
export {};
