import { IsLoggedInModule } from '@liff/is-logged-in';
export default IsLoggedInModule;
declare module '@liff/core' {
    interface LiffCore {
        isLoggedIn: ReturnType<typeof IsLoggedInModule.prototype.install>;
    }
}
