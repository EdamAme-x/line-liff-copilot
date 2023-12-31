import { LiffError } from '@liff/util';
import { SuccessMessage, EventType } from '../def';
export declare let _callbacksMap: {};
export declare function _getCallbacks(): Record<string, Function>;
export declare function _resetCallbacks(): void;
export declare function _emit(eventName: EventType, message?: SuccessMessage | LiffError): void;
export declare function on(eventName: EventType, fn: Function): void;
export declare function off(eventName: EventType, fn: Function): void;
