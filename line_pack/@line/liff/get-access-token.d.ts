import { GetAccessTokenModule } from '@liff/store';
export default GetAccessTokenModule;
declare module '@liff/core' {
    interface LiffCore {
        getAccessToken: ReturnType<typeof GetAccessTokenModule.prototype.install>;
    }
}
