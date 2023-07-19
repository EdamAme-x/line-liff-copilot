import { LiffModule } from '@liff/use';
interface Friendship {
    friendFlag: boolean;
}
export declare function getFriendship(): Promise<Friendship>;
type Api = () => Promise<Friendship>;
export declare class GetFriendshipModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): typeof getFriendship;
}
export {};
