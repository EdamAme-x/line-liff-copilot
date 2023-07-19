import { SubWindowModule } from '@liff/sub-window';
export default SubWindowModule;
declare module '@liff/core' {
    interface LiffCore {
        subWindow: ReturnType<typeof SubWindowModule.prototype.install>;
    }
}
