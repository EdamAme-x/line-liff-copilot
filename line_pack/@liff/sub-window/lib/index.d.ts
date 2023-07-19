import { LiffModule } from '@liff/use';
import { open } from './open';
import { cancel } from './cancel';
import { submit } from './submit';
import { close } from './close';
import { getAppData } from './getAppData';
import { on, off } from './shared/events';
export { getMSTByMSIT } from './server/getMSTByMSIT';
export { getAppData } from './server/getAppData';
export { getMainWindowOrigin, setMainWindowOrigin, getMessageBus, initMessageBus, } from './browser/internal';
export declare const subWindow: {
    on: typeof on;
    off: typeof off;
    open: typeof open;
    cancel: typeof cancel;
    submit: typeof submit;
    close: typeof close;
    getAppData: typeof getAppData;
};
type Api = typeof subWindow;
export declare class SubWindowModule extends LiffModule<Api, never, {}> {
    get name(): string;
    install(): {
        on: typeof on;
        off: typeof off;
        open: typeof open;
        cancel: typeof cancel;
        submit: typeof submit;
        close: typeof close;
        getAppData: typeof getAppData;
    };
}
