import { GetLineVersionModule } from '@liff/get-line-version';
export default GetLineVersionModule;
declare module '@liff/core' {
    interface LiffCore {
        getLineVersion: ReturnType<typeof GetLineVersionModule.prototype.install>;
    }
}
