import { LiffMenuColorSetting } from '@liff/types';
import { PERMISSION_NAMES } from '@liff/consts';
import { ElementType } from '@liff/util';
import { LiffModule } from '@liff/use';
export interface ProfilePlusInterface {
    regionCode: string;
}
export interface AIdInterface {
    id: string;
    t: boolean;
    att?: number;
    skadids?: string;
    atskadvt?: string;
}
export interface Context {
    type: 'utou' | 'room' | 'group' | 'none' | 'square_chat' | 'external';
    utouId?: string;
    roomId?: string;
    groupId: string;
    userId?: string;
    liffId?: string;
    endpointUrl: string;
    viewType?: 'compact' | 'tall' | 'full' | 'frame' | 'full-flex';
    accessTokenHash?: string;
    permanentLinkPattern?: 'concat';
    tid?: string;
    squareId?: string;
    squareChatId?: string;
    squareMemberId?: string;
    profilePlus?: ProfilePlusInterface;
    d?: {
        autoplay: boolean;
        aId: AIdInterface;
    };
    availability: {
        shareTargetPicker: {
            permission: boolean;
            minVer: string;
            unsupportedFromVer?: string;
        };
        multipleLiffTransition: {
            permission: boolean;
            minVer: string;
            unsupportedFromVer?: string;
        };
        subwindowOpen: {
            permission: boolean;
            minVer: string;
            unsupportedFromVer?: string;
        };
        scanCode: {
            permission: boolean;
            minVer: string;
            unsupportedFromVer?: string;
        };
        scanCodeV2: {
            permission: boolean;
            minVer: string;
            minOsVer: string;
        };
        getAdvertisingId: {
            permission: boolean;
            minVer: string;
            unsupportedFromVer?: string;
        };
        addToHomeScreen: {
            permission: boolean;
            minVer: string;
            unsupportedFromVer?: string;
        };
        bluetoothLeFunction: {
            permission: boolean;
            minVer: string;
            unsupportedFromVer?: string;
        };
        skipChannelVerificationScreen: {
            permission: boolean;
            minVer: string;
        };
    };
    utsTracking?: {
        mode: 'auto' | 'none';
        sendRatio: number;
    };
    menuColorSetting?: {
        adaptableColorSchemes: Array<'light' | 'dark'>;
        lightModeColor?: LiffMenuColorSetting;
        darkModeColor?: LiffMenuColorSetting;
    };
    scope: Array<ElementType<typeof PERMISSION_NAMES>>;
}
export declare function getContext(): Context | null;
export declare function setContext(value: Context | null): void;
type Api = () => Context | null;
export declare class GetContextModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): () => Context | null;
}
export {};
