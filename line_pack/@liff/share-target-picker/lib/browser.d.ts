import { PayloadToShareTargetPicker } from './def';
export declare function openAnotherWindow(popupWindow: Window, liffId: string, ott: string): void;
export declare function initListener(cb: Function, allowPostMessageOrigin: string): void;
export declare function healthCheck(popupWindow: Window, allowPostMessageOrigin: string): void;
export declare function finalize(timeoutIDForHealthCheck: number | null, popupWindow: Window | null): void;
export declare function onReceivedHealthcheck(popupWindow: Window, payloadToShareTargetPicker: PayloadToShareTargetPicker, allowPostMessageOrigin: string): void;
