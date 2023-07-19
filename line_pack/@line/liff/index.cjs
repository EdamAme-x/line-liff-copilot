'use strict';

require('whatwg-fetch');
var init = require('@liff/init');
var login = require('@liff/login');
var store = require('@liff/store');
var isInClient = require('@liff/is-in-client');
var ready = require('@liff/ready');
var getOs = require('@liff/get-os');
var getVersion = require('@liff/get-version');
var getLanguage = require('@liff/get-language');
var getProfile = require('@liff/get-profile');
var isLoggedIn = require('@liff/is-logged-in');
var logout = require('@liff/logout');
var nativeBridge = require('@liff/native-bridge');
var getLineVersion = require('@liff/get-line-version');
var isApiAvailable = require('@liff/is-api-available');
var openWindow = require('@liff/open-window');
var closeWindow = require('@liff/close-window');
var sendMessages = require('@liff/send-messages');
var getFriendship = require('@liff/get-friendship');
var subWindow = require('@liff/sub-window');
var use$1 = require('@liff/use');
var analytics = require('@liff/analytics');
var permanentLink = require('@liff/permanent-link');
var isSubWindow = require('@liff/is-sub-window');
var scanCodeV2 = require('@liff/scan-code-v2');
var permission = require('@liff/permission');
var shareTargetPicker = require('@liff/share-target-picker');
var i18n = require('@liff/i18n');
var extensions = require('@liff/extensions');

var liffInstance = {};
var liff$1 = Object.defineProperties(liffInstance, {
    getOS: {
        value: getOs.getOS,
        enumerable: true,
        writable: true,
    },
    getVersion: {
        value: getVersion.getVersion,
        enumerable: true,
        writable: true,
    },
    getLanguage: {
        value: getLanguage.getLanguage,
        enumerable: true,
        writable: true,
    },
    isInClient: {
        value: isInClient.isInClient,
        enumerable: true,
        writable: true,
    },
    isLoggedIn: {
        value: isLoggedIn.isLoggedIn,
        enumerable: true,
        writable: true,
    },
    logout: {
        value: logout.logout,
        enumerable: true,
        writable: true,
    },
    getAccessToken: {
        value: store.getAccessToken,
        enumerable: true,
        writable: true,
    },
    getIDToken: {
        value: store.getIDToken,
        enumerable: true,
        writable: true,
    },
    getDecodedIDToken: {
        value: store.getDecodedIDToken,
        enumerable: true,
        writable: true,
    },
    getContext: {
        value: store.getContext,
        enumerable: true,
        writable: true,
    },
    openWindow: {
        value: openWindow.openWindow,
        enumerable: true,
        writable: true,
    },
    closeWindow: {
        value: closeWindow.closeWindow,
        enumerable: true,
        writable: true,
    },
    getFriendship: {
        value: permission.attachChecker(getFriendship.getFriendship, 'profile'),
        enumerable: true,
        writable: true,
    },
    getAId: {
        value: store.getAId,
        enumerable: true,
        writable: true,
    },
    getProfilePlus: {
        value: store.getProfilePlus,
        enumerable: true,
        writable: true,
    },
    getIsVideoAutoPlay: {
        value: store.getIsVideoAutoPlay,
        enumerable: true,
        writable: true,
    },
    getLineVersion: {
        value: getLineVersion.getLineVersion,
        enumerable: true,
        writable: true,
    },
    isApiAvailable: {
        value: isApiAvailable.isApiAvailable,
        enumerable: true,
        writable: true,
    },
    getProfile: {
        value: permission.attachChecker(getProfile.getProfile, 'profile'),
        enumerable: true,
        writable: true,
    },
    sendMessages: {
        value: permission.attachChecker(sendMessages.sendMessages, 'chat_message.write'),
        enumerable: true,
        writable: true,
    },
    subWindow: {
        value: subWindow.subWindow,
        enumerable: true,
        writable: true,
    },
    ready: {
        value: ready.ready,
        enumerable: true,
        writable: true,
    },
    id: {
        get: function () {
            return store.getConfig().liffId || null;
        },
        enumerable: true,
    },
    _dispatchEvent: {
        value: nativeBridge.dispatch,
        enumerable: true,
        writable: true,
    },
    _call: {
        value: nativeBridge.call,
        enumerable: true,
        writable: true,
    },
    _addListener: {
        value: nativeBridge.addListener,
        enumerable: true,
        writable: true,
    },
    _removeListener: {
        value: nativeBridge.removeListener,
        enumerable: true,
        writable: true,
    },
    _postMessage: {
        value: nativeBridge.postMessage,
        enumerable: true,
        writable: true,
    },
});
var driver = new use$1.ModuleDriverImpl();
var contextHolder = new use$1.ContextHolder(driver, liff$1);
var use = new use$1.UseModule(driver, contextHolder).install();
function applyModule(module) {
    use.call(liff$1, module);
}
[
    new use$1.UseModule(driver, contextHolder),
    new login.LoginModule(),
    new init.InitModule(),
    new analytics.AnalyticsModule(),
    scanCodeV2.module,
    permanentLink.module,
    isSubWindow.module,
    permission.module,
    shareTargetPicker.module,
    i18n.module,
    new extensions.LegacyExtensionsModule(),
].forEach(applyModule);

var liff = liff$1;

module.exports = liff;
