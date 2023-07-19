import { ShareTargetPickerModule } from '@liff/share-target-picker';
export default ShareTargetPickerModule;
declare module '@liff/core' {
    interface LiffCore {
        shareTargetPicker: ReturnType<typeof ShareTargetPickerModule.prototype.install>;
    }
}
