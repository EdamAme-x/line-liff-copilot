export declare const INVALID_ALG = "Invalid \"alg\" value in ID_TOKEN";
export declare const FAILED_CRYPTO = "Failed to use Crypto API to verify ID_TOKEN";
export declare const INVALID_KID = "Invalid \"kid\" value in ID_TOKEN";
export declare const INVALID_ISS = "Invalid \"iss\" value in ID_TOKEN";
export declare const INVALID_AUD = "Invalid \"aud\" value in ID_TOKEN";
export declare const INVALID_EXP = "Invalid \"exp\" value in ID_TOKEN";
export declare const INVALID_SIG = "Invalid signature in ID_TOKEN";
export declare function verifyIDToken(idToken: string, liffClientId: string): Promise<unknown>;
