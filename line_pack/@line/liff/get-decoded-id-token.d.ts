import { GetDecodedIDTokenModule } from '@liff/store';
export default GetDecodedIDTokenModule;
declare module '@liff/core' {
    interface LiffCore {
        getDecodedIDToken: ReturnType<typeof GetDecodedIDTokenModule.prototype.install>;
    }
}
