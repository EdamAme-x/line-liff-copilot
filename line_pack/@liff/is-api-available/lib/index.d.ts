import { LiffModule } from '@liff/use';
declare const LIFF_PUBLIC_API_NAMES: readonly ["subwindowOpen", "shareTargetPicker", "multipleLiffTransition", "scanCode", "scanCodeV2", "getAdvertisingId", "addToHomeScreen", "bluetoothLeFunction", "skipChannelVerificationScreen"];
type LIFF_PUBLIC_API_NAME_KEYS = (typeof LIFF_PUBLIC_API_NAMES)[number];
type Validator = () => void;
export declare const validators: {
    [key in LIFF_PUBLIC_API_NAME_KEYS]: Validator;
};
export declare function isApiAvailable(apiName: string): boolean;
type Api = (apiName: string) => boolean;
export declare class IsApiAvailableModule extends LiffModule<Api, never, {}> {
    hooks: {};
    get name(): string;
    install(): (apiName: string) => boolean;
}
export {};
