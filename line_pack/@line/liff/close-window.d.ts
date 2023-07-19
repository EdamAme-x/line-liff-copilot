import { CloseWindowModule } from '@liff/close-window';
export default CloseWindowModule;
declare module '@liff/core' {
    interface LiffCore {
        closeWindow: ReturnType<typeof CloseWindowModule.prototype.install>;
    }
}
