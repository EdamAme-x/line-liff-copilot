import { UNAUTHORIZED, INVALID_ARGUMENT, INIT_FAILED, FORBIDDEN, INVALID_CONFIG, INVALID_ID_TOKEN, CREATE_SUBWINDOW_FAILED, EXCEPTION_IN_SUBWINDOW } from '@liff/consts';
declare const HTTPStatusCodeArray: string[];
export declare const HTTPStatusCodes: Set<string>;
type PublicErrorCode = (typeof HTTPStatusCodeArray)[number] | typeof FORBIDDEN | typeof INVALID_CONFIG | typeof INVALID_ID_TOKEN | typeof UNAUTHORIZED | typeof INVALID_ARGUMENT | typeof INIT_FAILED | 'THINGS_NO_LINKED_DEVICES' | 'BLUETOOTH_SETTING_OFF' | 'THINGS_TERMS_NOT_AGREED' | 'BLUETOOTH_NO_LOCATION_PERMISSION' | 'BLUETOOTH_LOCATION_DISABLED' | 'BLUETOOTH_LE_API_UNAVAILABLE' | 'BLUETOOTH_CONNECT_FAILED' | 'BLUETOOTH_ALREADY_CONNECTED' | 'BLUETOOTH_CONNECTION_LOST' | 'BLUETOOTH_UNSUPPORTED_OPERATION' | 'BLUETOOTH_SERVICE_NOT_FOUND' | 'BLUETOOTH_CHARACTERISTIC_NOT_FOUND' | 'UNKNOWN';
type InternalErrorCode = typeof CREATE_SUBWINDOW_FAILED | typeof EXCEPTION_IN_SUBWINDOW;
type AdErrorValue = 'ADS_APP_ID_NOT_SET' | 'ADS_FREQUENT_LOAD' | 'ADS_ALREADY_LOADED' | 'ADS_NO_FILL' | 'ADS_NOT_LOADED' | 'ADS_ADNETWORK_NOT_SUPPORTED' | 'CLIENT_UNSUPPORTED_OPERATION' | 'NETWORK_FAILURE' | 'INVALID_MESSAGE' | 'INVALID_ARGUMENTS' | 'INTERNAL_ERROR';
type UnpublishedErrorCode = 'LIFF.STATE_INVALID' | AdErrorValue;
export type ErrorCode = PublicErrorCode | InternalErrorCode | UnpublishedErrorCode;
export declare class LiffError extends Error {
    code: string | number;
    constructor(code: ErrorCode, message: string);
}
export declare function createLiffError(code: ErrorCode, message?: string): LiffError;
export {};
