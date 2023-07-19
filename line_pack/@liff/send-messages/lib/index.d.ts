import { LiffError } from '@liff/util';
import { LiffMessage } from './type';
import { LiffModule } from '@liff/use';
export type SendMessagesParams = LiffMessage[];
export declare function sendMessages(messages: SendMessagesParams): Promise<void>;
export declare const alertToPromptUpdate: (e: LiffError) => void;
type Api = (messages: SendMessagesParams) => Promise<void>;
export declare class SendMessagesModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): typeof sendMessages;
}
export {};
