import { LiffModule } from '@liff/use';
import { AIdInterface } from './context';
export declare function getAId(): AIdInterface | undefined;
type Api = () => AIdInterface | undefined;
export declare class GetAIdModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => AIdInterface | undefined;
}
export {};
