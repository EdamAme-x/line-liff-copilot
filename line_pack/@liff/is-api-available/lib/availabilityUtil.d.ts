declare const Errors: readonly ["FORBIDDEN", "UNAUTHORIZED"];
export type IsApiAvailableErrorCode = (typeof Errors)[number];
export type IsApiAvailable = () => ReturnIsApiAvailable;
type ReturnIsApiAvailable = {
    available: true;
} | {
    available: false;
    error: {
        code: IsApiAvailableErrorCode;
        message: string;
    };
};
type Availability = {
    permission: boolean;
    minVer: string;
    unsupportedFromVer?: string;
};
export declare function getAvailability(api: string): Availability | undefined;
export declare function compareClientVersion(minVer: string, unsupportedFromVer?: string): boolean;
export declare function checkPermissionAndCompareClientVersion(api: string, allowExternalBrowser?: boolean): ReturnIsApiAvailable;
export {};
