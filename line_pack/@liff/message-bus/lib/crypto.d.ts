export declare const generateKey: () => Promise<string>;
export declare const importKey: (k: string) => Promise<CryptoKey>;
export declare const encrypt: (identifier: string, keyStr: string, dataStr: string) => Promise<string>;
export declare const decrypt: (identifier: string, keyStr: string, encryptedBase64Str: string) => Promise<string>;
