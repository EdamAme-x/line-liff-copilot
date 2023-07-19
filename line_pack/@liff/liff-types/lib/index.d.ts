import { getAccessToken, getContext, getIDToken, getDecodedIDToken, getAId, getProfilePlus, getIsVideoAutoPlay } from '@liff/store';
import { isInClient } from '@liff/is-in-client';
import { ready } from '@liff/ready';
import { getOS } from '@liff/get-os';
import { getVersion } from '@liff/get-version';
import { getLanguage } from '@liff/get-language';
import { getProfile } from '@liff/get-profile';
import { isLoggedIn } from '@liff/is-logged-in';
import { logout } from '@liff/logout';
import { dispatch, call, postMessage, addListener, removeListener } from '@liff/native-bridge';
import { getLineVersion } from '@liff/get-line-version';
import { isApiAvailable } from '@liff/is-api-available';
import { openWindow } from '@liff/open-window';
import { closeWindow } from '@liff/close-window';
import { sendMessages } from '@liff/send-messages';
import { getFriendship } from '@liff/get-friendship';
import { subWindow } from '@liff/sub-window';
import { ExtendLiffCoreUse } from '@liff/use';
import { ExtendLiffCore as ExtendLiffCoreInit, InitHooks, InitInternalHooks } from '@liff/init';
import { ExtendLiffCore as ExtendLiffCoreLogin, LoginHooks } from '@liff/login';
import { ExtendLiffCore as ExtendLiffCoreAnalytics } from '@liff/analytics';
import { ExtendLiffCorePermanentLink } from '@liff/permanent-link';
import { ExtendLiffCore as ExtendLiffCorePermission } from '@liff/permission';
import { ExtendLiffCore as ExtendLiffCoreIsInSubWindow } from '@liff/is-sub-window';
import { ExtendLiffCore as ExtendLiffCoreShareTargetPicker } from '@liff/share-target-picker';
import { ExtendLiffCore as ExtendLiffCoreScanCodeV2 } from '@liff/scan-code-v2';
import { ExtendLiffCore as ExtendLiffCoreI18n } from '@liff/i18n';
type LiffAPIs = {
    getOS: typeof getOS;
    getVersion: typeof getVersion;
    getLanguage: typeof getLanguage;
    isInClient: typeof isInClient;
    isLoggedIn: typeof isLoggedIn;
    logout: typeof logout;
    getAccessToken: typeof getAccessToken;
    getIDToken: typeof getIDToken;
    getDecodedIDToken: typeof getDecodedIDToken;
    getContext: typeof getContext;
    openWindow: typeof openWindow;
    closeWindow: typeof closeWindow;
    getFriendship: typeof getFriendship;
    getAId: typeof getAId;
    getProfilePlus: typeof getProfilePlus;
    getIsVideoAutoPlay: typeof getIsVideoAutoPlay;
    getLineVersion: typeof getLineVersion;
    isApiAvailable: typeof isApiAvailable;
    getProfile: typeof getProfile;
    sendMessages: typeof sendMessages;
    subWindow: typeof subWindow;
    ready: typeof ready;
    id: string | null;
    _dispatchEvent: typeof dispatch;
    _call: typeof call;
    _addListener: typeof addListener;
    _removeListener: typeof removeListener;
    _postMessage: typeof postMessage;
};
type LiffModules = ExtendLiffCoreIsInSubWindow & ExtendLiffCorePermanentLink & ExtendLiffCoreInit & ExtendLiffCoreScanCodeV2 & ExtendLiffCoreAnalytics & ExtendLiffCoreLogin & ExtendLiffCorePermission & ExtendLiffCoreShareTargetPicker & ExtendLiffCoreI18n & ExtendLiffCoreUse<Liff>;
export interface Liff extends LiffAPIs, LiffModules {
}
export type OfficialHooks = {
    init: InitHooks;
    login: LoginHooks;
};
export type InternalHooks = {
    init: InitInternalHooks;
};
export {};