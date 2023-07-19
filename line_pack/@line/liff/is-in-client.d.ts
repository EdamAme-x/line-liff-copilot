import { IsInClientModule } from '@liff/is-in-client';
export default IsInClientModule;
declare module '@liff/core' {
    interface LiffCore {
        isInClient: ReturnType<typeof IsInClientModule.prototype.install>;
    }
}
