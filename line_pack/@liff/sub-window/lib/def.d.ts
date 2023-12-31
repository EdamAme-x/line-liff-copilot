import { SUB_WINDOW_STATUS, SUB_WINDOW_HEALTH_CHECK_MESSAGE } from '@liff/consts';
import { LiffError } from '@liff/util';
interface Base {
    error?: string;
    error_description?: string;
}
export type EventType = (typeof SUB_WINDOW_STATUS)[keyof typeof SUB_WINDOW_STATUS];
export interface AppData {
    [propName: string]: unknown;
}
export interface SubWindowMessage {
    [propName: string]: unknown;
}
export interface SuccessMessage {
    [propName: string]: unknown;
}
export interface CommonNativeType {
    height?: 'full' | 'tall' | 'compact';
    closeButtonPosition?: 'right' | 'left';
    closeButtonLabel?: string;
}
export interface ExternalNativeType extends CommonNativeType {
    closeButtonColor?: 'black' | 'white';
}
export interface InternalNativeType extends CommonNativeType {
    closeButtonColor?: '#000000' | '#ffffff';
}
export interface OpenModalParams {
    url: string;
    appData?: AppData;
    native?: ExternalNativeType;
}
export interface MSITResponse extends Base {
    msit: string;
}
export interface MSTResponse extends Base {
    mst: string;
}
export interface PostResponse extends Base {
    status: string;
    result: string;
}
export interface OriginResponse extends Base {
    origin: string;
    subwindowCommonModule: boolean;
}
export interface AppDataResponse extends Base {
    data: AppData;
}
export interface WaitResultResponse {
    status: EventType;
    errorDetail?: string;
    result?: SuccessMessage;
}
export interface GetMSTByMSITParams {
    msit: string;
    mstVerifier: string;
}
export interface GetMSITParams {
    mainLiffId: string;
    subLiffId: string;
    mstChallenge: string;
    appData?: AppData;
    view?: InternalNativeType;
}
export interface GetAppDataParams {
    mst: string;
}
export interface PostParams {
    mst: string;
    status: EventType;
    result?: SubWindowMessage;
}
export interface SubscribeParams {
    msit: string;
    mstChallenge: string;
    onSuccess: (status: EventType, result?: SuccessMessage) => void;
    onError: (error: LiffError) => void;
    reconnectCount?: number;
}
export interface HealthCheckMessage {
    type: typeof SUB_WINDOW_HEALTH_CHECK_MESSAGE;
    message?: string;
}
export {};
