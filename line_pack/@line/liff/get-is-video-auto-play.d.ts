import { GetIsVideoAutoPlayModule } from '@liff/store';
export default GetIsVideoAutoPlayModule;
declare module '@liff/core' {
    interface LiffCore {
        getIsVideoAutoPlay: ReturnType<typeof GetIsVideoAutoPlayModule.prototype.install>;
    }
}
