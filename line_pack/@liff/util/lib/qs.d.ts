type Value = undefined | string;
export type Query = Record<string, Value | Value[]>;
declare function parse(search: string): Query;
type CanBeEncoded = Parameters<typeof encodeURIComponent>[0] | undefined;
type StringifiableValue = CanBeEncoded | CanBeEncoded[];
type ParsedUrlQuery = Record<string, StringifiableValue>;
declare function stringify(query: ParsedUrlQuery): string;
export declare const qs: {
    parse: typeof parse;
    stringify: typeof stringify;
};
export {};
