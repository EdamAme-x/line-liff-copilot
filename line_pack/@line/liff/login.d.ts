import { LoginModule } from '@liff/login';
export default LoginModule;
declare module '@liff/core' {
    interface LiffCore {
        login: ReturnType<typeof LoginModule.prototype.install>;
    }
}
