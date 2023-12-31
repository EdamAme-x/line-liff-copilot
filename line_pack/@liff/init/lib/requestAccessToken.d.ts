interface AccessToken {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
    id_token?: string;
}
export declare function requestAccessToken(): Promise<AccessToken>;
export {};
