import { SendMessagesParams } from '@liff/send-messages';
import { TellEvent } from '@liff/window-postmessage';
export declare const CLOSE_SHARETARGETPICKER_FAIL = 0;
export declare const CLOSE_SHARETARGETPICKER_SUCCEED = 1;
export interface PayloadToShareTargetPicker {
    messages: SendMessagesParams;
    isMultiple: boolean;
    referrer: {
        liffId: string;
        url: string;
    };
}
export interface ClosedBody {
    status?: number;
    res?: {
        message?: string;
    };
    callbackId: string;
}
export interface ClosedWebview extends CustomEvent {
    detail: ClosedBody;
}
export interface ClosedPopupWindow extends TellEvent {
    data: {
        name: string;
        body: ClosedBody;
    };
}
export interface InitParams extends PayloadToShareTargetPicker {
    options?: {
        waitForSubwindowResult: boolean;
    };
}
export interface RetrievedOtt {
    ott: string;
}
export interface RetrievedShareResult {
    result?: 'SUCCESS' | 'FAILURE' | 'CANCEL';
    resultDescription: string;
}
export interface ShareTargetPickerResult {
    status: 'success';
}
