import { LiffModule } from '@liff/use';
export interface Profile {
    userId: string;
    displayName: string;
    pictureUrl?: string;
    statusMessage?: string;
}
export declare function getProfile(): Promise<Profile>;
type Api = () => Promise<Profile>;
export declare class GetProfileModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): typeof getProfile;
}
export {};
