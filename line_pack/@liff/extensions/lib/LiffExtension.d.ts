import { ScanCode } from '@liff/scan-code';
import { GetAdvertisingId } from '@liff/get-advertising-id';
import { AddToHomeScreen } from '@liff/add-to-home-screen';
import { InitPlugins } from './initPlugins';
import { InitialLiff } from '@liff/types';
export interface LiffExtendableAll {
    addToHomeScreen: AddToHomeScreen;
    scanCode: ScanCode;
    getAdvertisingId: GetAdvertisingId;
    initPlugins: InitPlugins;
}
export type ExtendableKeys = keyof LiffExtendableAll;
export type LiffExtendableFunctions = Partial<LiffExtendableAll>;
export type PermissionChecker = (liff: InitialLiff) => void | Promise<unknown>;
export interface LiffExtension {
    install: (liff: unknown, permissionChecker: Record<ExtendableKeys, PermissionChecker>) => void;
}
