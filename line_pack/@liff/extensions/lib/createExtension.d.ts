import { InitialLiff } from '@liff/types';
import { LiffExtension, ExtendableKeys } from './LiffExtension';
type ExtendedFunctionCreator = (liff: InitialLiff) => Function;
export type CreatorDefPair = [ExtendableKeys, ExtendedFunctionCreator];
export declare function createExtension(creatorDefPairs: CreatorDefPair[]): LiffExtension;
export {};
