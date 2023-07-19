import { GetIDTokenModule } from '@liff/store';
export default GetIDTokenModule;
declare module '@liff/core' {
    interface LiffCore {
        getIDToken: ReturnType<typeof GetIDTokenModule.prototype.install>;
    }
}
