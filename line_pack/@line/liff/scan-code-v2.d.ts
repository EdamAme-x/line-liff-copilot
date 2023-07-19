import { ScanCodeV2Module } from '@liff/scan-code-v2';
export default ScanCodeV2Module;
declare module '@liff/core' {
    interface LiffCore {
        scanCodeV2: ReturnType<typeof ScanCodeV2Module.prototype.install>;
    }
}
