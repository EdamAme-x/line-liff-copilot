import { LiffModule } from '@liff/use';
export declare const getIsLegacyExtensionsEnabled: () => boolean;
export declare class LegacyExtensionsModule extends LiffModule<void, unknown, unknown> {
    get name(): string;
    install(): void;
}
