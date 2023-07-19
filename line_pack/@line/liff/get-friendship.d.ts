import { GetFriendshipModule } from '@liff/get-friendship';
export default GetFriendshipModule;
declare module '@liff/core' {
    interface LiffCore {
        getFriendship: ReturnType<typeof GetFriendshipModule.prototype.install>;
    }
}
