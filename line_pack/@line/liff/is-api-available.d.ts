import { IsApiAvailableModule } from '@liff/is-api-available';
export default IsApiAvailableModule;
declare module '@liff/core' {
    interface LiffCore {
        isApiAvailable: ReturnType<typeof IsApiAvailableModule.prototype.install>;
    }
}
