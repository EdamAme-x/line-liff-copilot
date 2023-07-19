import { GetContextModule } from '@liff/store';
export default GetContextModule;
declare module '@liff/core' {
    interface LiffCore {
        getContext: ReturnType<typeof GetContextModule.prototype.install>;
    }
}
