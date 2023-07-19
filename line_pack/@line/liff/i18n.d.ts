import { I18nModule } from '@liff/i18n';
export default I18nModule;
declare module '@liff/core' {
    interface LiffCore {
        i18n: ReturnType<typeof I18nModule.prototype.install>;
    }
}
