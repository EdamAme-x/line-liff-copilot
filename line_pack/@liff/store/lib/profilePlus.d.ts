import { LiffModule } from '@liff/use';
import { ProfilePlusInterface } from './context';
export declare function getProfilePlus(): ProfilePlusInterface | undefined;
type Api = () => ProfilePlusInterface | undefined;
export declare class GetProfilePlusModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => ProfilePlusInterface | undefined;
}
export {};
