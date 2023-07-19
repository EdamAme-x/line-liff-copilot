import { GetProfileModule } from '@liff/get-profile';
export default GetProfileModule;
declare module '@liff/core' {
    interface LiffCore {
        getProfile: ReturnType<typeof GetProfileModule.prototype.install>;
    }
}
