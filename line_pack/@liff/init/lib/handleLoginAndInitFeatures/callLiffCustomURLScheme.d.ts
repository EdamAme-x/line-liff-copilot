import { qs } from '@liff/util';
interface Param {
    pathname: string;
    query?: Parameters<typeof qs.stringify>[0];
}
export declare function callLiffCustomURLScheme({ pathname, query }: Param): void;
export {};
