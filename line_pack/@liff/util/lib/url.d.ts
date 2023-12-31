export declare function removeCredential(url: string): string;
export declare function removeOrigin(href: string): string;
export declare const replaceUrlCredentialRemoved: (url: string) => void;
export declare function addParamsToUrl(url: string, params: {
    [key: string]: string;
}): string;
export declare function extractLiffId(url: string): string | null;
export declare function getOriginOfUrl(url: string): string;
