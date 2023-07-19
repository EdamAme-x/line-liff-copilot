import { navigatorLanguagesList } from './consts';
import XLTKeys from './xlt-types';
type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;
export type Languages = ElementType<typeof navigatorLanguagesList>;
export type Keys = ElementType<typeof XLTKeys>;
export type XLTData = {
    [key in Keys]: string;
};
export interface Manifest {
    createdAt: number;
    languages: {
        [key in Languages]?: string;
    };
}
export {};
