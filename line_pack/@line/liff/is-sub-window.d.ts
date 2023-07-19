import { IsSubWindowModule } from '@liff/is-sub-window';
export default IsSubWindowModule;
declare module '@liff/core' {
    interface LiffCore {
        isSubWindow: ReturnType<typeof IsSubWindowModule.prototype.install>;
    }
}
