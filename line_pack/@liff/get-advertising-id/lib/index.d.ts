import { InitialLiff } from '@liff/types';
type GetAdvertisingIdResult = null | string;
export type GetAdvertisingId = () => Promise<GetAdvertisingIdResult>;
export declare function createGetAdvertisingId(liff: InitialLiff): GetAdvertisingId;
export {};
