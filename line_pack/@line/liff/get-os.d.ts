import { GetOSModule } from '@liff/get-os';
export default GetOSModule;
declare module '@liff/core' {
    interface LiffCore {
        getOS: ReturnType<typeof GetOSModule.prototype.install>;
    }
}
