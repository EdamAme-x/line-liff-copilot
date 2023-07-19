import { GetLanguageModule } from '@liff/get-language';
export default GetLanguageModule;
declare module '@liff/core' {
    interface LiffCore {
        getLanguage: ReturnType<typeof GetLanguageModule.prototype.install>;
    }
}
