declare function decode(str: string): string;
declare function decodeUnicode(str: string): string;
declare function encode(str: string): string;
export declare const base64Url: {
    decode: typeof decode;
    encode: typeof encode;
    decodeUnicode: typeof decodeUnicode;
};
export {};
