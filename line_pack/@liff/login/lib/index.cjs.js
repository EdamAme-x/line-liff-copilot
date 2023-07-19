"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),i=require("@liff/consts"),r=require("@liff/logger"),o=require("@liff/util"),t=require("@liff/store"),n=require("@liff/server-api"),f=require("@liff/use"),l=require("@liff/get-version"),u=require("@liff/is-sub-window"),s=require("@liff/is-in-client"),a=require("tiny-sha256"),d=require("@liff/hooks"),c=require("@liff/sub-window");function g(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=g(a);var h=function(e){var f,a,d=o.randomAlphaNumericString(43),g=(a=d,o.hexToBase64(p.default(a)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")),h=t.getConfig();if(!h||!h.liffId)throw o.createLiffError(i.INVALID_CONFIG,"You need to define `liffId` for liff.login()");var _={app_id:h.liffId,state:o.randomAlphaNumericString(12),response_type:"code",code_challenge_method:"S256",code_challenge:g,liff_sdk_version:l.getVersion()};e&&e.redirectUri&&(_.redirect_uri=e.redirectUri),u.isSubWindow()&&!s.isInClient()&&((null===(f=c.getMessageBus())||void 0===f?void 0:f.isReady())?_.redirect_uri=window.location.href:_.disable_auto_login="true"),t.setLoginTmp({codeVerifier:d});var b=n.getEndPoint("authorize")+"?"+o.qs.stringify(_);r.logger.debug("[Redirect] ".concat(b)),window.location.href=b},_=function(i){function r(){var e=null!==i&&i.apply(this,arguments)||this;return e.hooks={before:new d.SyncHook},e}return e.__extends(r,i),Object.defineProperty(r.prototype,"name",{get:function(){return"login"},enumerable:!1,configurable:!0}),r.prototype.install=function(){return this._login.bind(this)},r.prototype._login=function(e){this.hooks.before.call(e),h(e)},r}(f.LiffModule);exports.LoginModule=_,exports.login=h;