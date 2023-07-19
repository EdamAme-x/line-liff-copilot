import { SendMessagesParams } from '@liff/send-messages';
import { ShareTargetPickerResult } from './def';
import { LiffModule } from '@liff/use';
type ShareTargetPickerOptions = {
    isMultiple?: boolean;
};
type ShareTargetPickerMethod = (messages: SendMessagesParams, options?: ShareTargetPickerOptions) => Promise<ShareTargetPickerResult | void>;
export interface ExtendLiffCore {
    shareTargetPicker: ShareTargetPickerMethod;
}
export declare class ShareTargetPickerModule extends LiffModule<ShareTargetPickerMethod, never, unknown> {
    get name(): string;
    install(): ShareTargetPickerMethod;
    private shareTargetPicker;
}
export declare const module: ShareTargetPickerModule;
export {};
