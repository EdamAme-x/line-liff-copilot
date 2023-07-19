import { LiffModule } from '@liff/use';
export declare function closeWindow(): void;
type Api = () => void;
export declare class CloseWindowModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => void;
}
export {};
