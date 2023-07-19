import { LiffModule } from '@liff/use';
export interface OpenWindowParams {
    url: string;
    external?: boolean;
}
export declare function openWindow(params: OpenWindowParams): void;
type Api = (params: OpenWindowParams) => void;
export declare class OpenWindowModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): (params: OpenWindowParams) => void;
}
export {};
