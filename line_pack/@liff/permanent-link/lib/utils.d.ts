export declare const parseUrl: (url: string) => {
    username: string;
    password: string;
    pathname: string;
    hash: string;
    origin: string;
    search: string;
};
export declare const ignoreLiffParams: (search: string) => string[];
export declare const removeDuplicateQueries: (currentQueries: string[], endpointQueries: string[]) => string[];
export declare const getRelativePath: (pathname: string, base: string) => string;
export declare const parseSearchQuery: (query: string) => string[];
export declare const queryBuilder: (currentQuery: string, endpointUrlQuery: string) => string;
export declare const removeCredentialsFromHash: (hash: string) => string;
