import 'whatwg-fetch';
import { InitModule } from '@liff/init';
import { LoginModule } from '@liff/login';
import { getAccessToken, getIDToken, getDecodedIDToken, getContext, getAId, getProfilePlus, getIsVideoAutoPlay, getConfig } from '@liff/store';
import { isInClient } from '@liff/is-in-client';
import { ready } from '@liff/ready';
import { getOS } from '@liff/get-os';
import { getVersion } from '@liff/get-version';
import { getLanguage } from '@liff/get-language';
import { getProfile } from '@liff/get-profile';
import { isLoggedIn } from '@liff/is-logged-in';
import { logout } from '@liff/logout';
import { dispatch, call, addListener, removeListener, postMessage } from '@liff/native-bridge';
import { getLineVersion } from '@liff/get-line-version';
import { isApiAvailable } from '@liff/is-api-available';
import { openWindow } from '@liff/open-window';
import { closeWindow } from '@liff/close-window';
import { sendMessages } from '@liff/send-messages';
import { getFriendship } from '@liff/get-friendship';
import { subWindow } from '@liff/sub-window';
import { ModuleDriverImpl, ContextHolder, UseModule } from '@liff/use';
import { AnalyticsModule } from '@liff/analytics';
import { module as module$1 } from '@liff/permanent-link';
import { module as module$2 } from '@liff/is-sub-window';
import { module } from '@liff/scan-code-v2';
import { attachChecker, module as module$3 } from '@liff/permission';
import { module as module$4 } from '@liff/share-target-picker';
import { module as module$5 } from '@liff/i18n';
import { LegacyExtensionsModule } from '@liff/extensions';

var liffInstance = {};
var liff$1 = Object.defineProperties(liffInstance, {
    getOS: {
        value: getOS,
        enumerable: true,
        writable: true,
    },
    getVersion: {
        value: getVersion,
        enumerable: true,
        writable: true,
    },
    getLanguage: {
        value: getLanguage,
        enumerable: true,
        writable: true,
    },
    isInClient: {
        value: isInClient,
        enumerable: true,
        writable: true,
    },
    isLoggedIn: {
        value: isLoggedIn,
        enumerable: true,
        writable: true,
    },
    logout: {
        value: logout,
        enumerable: true,
        writable: true,
    },
    getAccessToken: {
        value: getAccessToken,
        enumerable: true,
        writable: true,
    },
    getIDToken: {
        value: getIDToken,
        enumerable: true,
        writable: true,
    },
    getDecodedIDToken: {
        value: getDecodedIDToken,
        enumerable: true,
        writable: true,
    },
    getContext: {
        value: getContext,
        enumerable: true,
        writable: true,
    },
    openWindow: {
        value: openWindow,
        enumerable: true,
        writable: true,
    },
    closeWindow: {
        value: closeWindow,
        enumerable: true,
        writable: true,
    },
    getFriendship: {
        value: attachChecker(getFriendship, 'profile'),
        enumerable: true,
        writable: true,
    },
    getAId: {
        value: getAId,
        enumerable: true,
        writable: true,
    },
    getProfilePlus: {
        value: getProfilePlus,
        enumerable: true,
        writable: true,
    },
    getIsVideoAutoPlay: {
        value: getIsVideoAutoPlay,
        enumerable: true,
        writable: true,
    },
    getLineVersion: {
        value: getLineVersion,
        enumerable: true,
        writable: true,
    },
    isApiAvailable: {
        value: isApiAvailable,
        enumerable: true,
        writable: true,
    },
    getProfile: {
        value: attachChecker(getProfile, 'profile'),
        enumerable: true,
        writable: true,
    },
    sendMessages: {
        value: attachChecker(sendMessages, 'chat_message.write'),
        enumerable: true,
        writable: true,
    },
    subWindow: {
        value: subWindow,
        enumerable: true,
        writable: true,
    },
    ready: {
        value: ready,
        enumerable: true,
        writable: true,
    },
    id: {
        get: function () {
            return getConfig().liffId || null;
        },
        enumerable: true,
    },
    _dispatchEvent: {
        value: dispatch,
        enumerable: true,
        writable: true,
    },
    _call: {
        value: call,
        enumerable: true,
        writable: true,
    },
    _addListener: {
        value: addListener,
        enumerable: true,
        writable: true,
    },
    _removeListener: {
        value: removeListener,
        enumerable: true,
        writable: true,
    },
    _postMessage: {
        value: postMessage,
        enumerable: true,
        writable: true,
    },
});
var driver = new ModuleDriverImpl();
var contextHolder = new ContextHolder(driver, liff$1);
var use = new UseModule(driver, contextHolder).install();
function applyModule(module) {
    use.call(liff$1, module);
}
[
    new UseModule(driver, contextHolder),
    new LoginModule(),
    new InitModule(),
    new AnalyticsModule(),
    module,
    module$1,
    module$2,
    module$3,
    module$4,
    module$5,
    new LegacyExtensionsModule(),
].forEach(applyModule);

var liff = liff$1;

export { liff as default, liff };
