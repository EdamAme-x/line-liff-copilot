import { GetProfilePlusModule } from '@liff/store';
export default GetProfilePlusModule;
declare module '@liff/core' {
    interface LiffCore {
        getProfilePlus: ReturnType<typeof GetProfilePlusModule.prototype.install>;
    }
}
