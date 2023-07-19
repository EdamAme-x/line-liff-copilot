import { OpenWindowModule } from '@liff/open-window';
export default OpenWindowModule;
declare module '@liff/core' {
    interface LiffCore {
        openWindow: ReturnType<typeof OpenWindowModule.prototype.install>;
    }
}
