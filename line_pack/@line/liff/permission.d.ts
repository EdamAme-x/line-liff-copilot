import { PermissionModule } from '@liff/permission';
export default PermissionModule;
declare module '@liff/core' {
    interface LiffCore {
        permission: ReturnType<typeof PermissionModule.prototype.install>;
    }
}
