import { SendMessagesModule } from '@liff/send-messages';
export default SendMessagesModule;
declare module '@liff/core' {
    interface LiffCore {
        sendMessages: ReturnType<typeof SendMessagesModule.prototype.install>;
    }
}
