import { LiffModule } from '@liff/use';
export declare function getIsVideoAutoPlay(): boolean;
type Api = () => boolean;
export declare class GetIsVideoAutoPlayModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => boolean;
}
export {};
