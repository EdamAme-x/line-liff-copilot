import { ExtendLiffCore as ExtendLiffCoreInit } from '@liff/init';
import { ready } from '@liff/ready';
import { dispatch, call, postMessage, addListener, removeListener } from '@liff/native-bridge';
import { Use } from '@liff/use';
import { GetVersionModule } from '@liff/get-version';
type LiffImmutableProperties = {
    id: string | null;
};
type LiffCoreAPIs = {
    ready: typeof ready;
    _dispatchEvent: typeof dispatch;
    _call: typeof call;
    _addListener: typeof addListener;
    _removeListener: typeof removeListener;
    _postMessage: typeof postMessage;
};
type LiffModules = ExtendLiffCoreInit & {
    use: Use<LiffCore>;
    getVersion: ReturnType<(typeof GetVersionModule.prototype)['install']>;
};
export interface LiffCore extends LiffImmutableProperties, LiffCoreAPIs, LiffModules {
}
declare const liffCore: LiffCore;
export { liffCore };
