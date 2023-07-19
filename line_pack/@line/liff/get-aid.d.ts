import { GetAIdModule } from '@liff/store';
export default GetAIdModule;
declare module '@liff/core' {
    interface LiffCore {
        getAId: ReturnType<typeof GetAIdModule.prototype.install>;
    }
}
