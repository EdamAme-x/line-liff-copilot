import { LogoutModule } from '@liff/logout';
export default LogoutModule;
declare module '@liff/core' {
    interface LiffCore {
        logout: ReturnType<typeof LogoutModule.prototype.install>;
    }
}
