import { PermanentLinkModule } from '@liff/permanent-link';
export default PermanentLinkModule;
declare module '@liff/core' {
    interface LiffCore {
        permanentLink: ReturnType<typeof PermanentLinkModule.prototype.install>;
    }
}
