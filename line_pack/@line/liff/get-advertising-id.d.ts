import { LegacyExtensionsModule, LiffExtendableAll } from '@liff/extensions';
export default LegacyExtensionsModule;
declare module '@liff/core' {
    interface LiffCore {
        getAdvertisingId: LiffExtendableAll['getAdvertisingId'];
    }
}
