interface Response {
    scope: string;
    client_id: string;
    expires_in: number;
}
export declare function verifyAccessToken(accessToken: string): Promise<Response>;
export {};
