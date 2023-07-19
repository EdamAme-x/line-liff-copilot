"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("@liff/use"),n=require("@liff/consts"),r=require("@liff/is-in-client"),o=require("@liff/util");function i(){var e;return null!==(e=window.__liffConfig)&&void 0!==e?e:{}}function u(e,t){if(!t)throw o.createLiffError(n.INVALID_CONFIG,"liffId is necessary for liff.init()");var i=(r.isInClient()?sessionStorage:localStorage).getItem("".concat(n.STORE_KEY,":").concat(t,":").concat(e));try{return null===i?null:JSON.parse(i)}catch(u){return null}}function f(e){return u(e,i().liffId)}function c(e,t){var u=i().liffId;if(!u)throw o.createLiffError(n.INVALID_CONFIG,"liffId is necessary for liff.init()");(r.isInClient()?sessionStorage:localStorage).setItem("".concat(n.STORE_KEY,":").concat(u,":").concat(e),JSON.stringify(t))}function s(){return f(n.STORE_OBJECT.CONTEXT)}var T=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e.__extends(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"getContext"},enumerable:!1,configurable:!0}),n.prototype.install=function(){return function(){return s()}},n}(t.LiffModule);function E(){return((s()||{}).d||{}).aId}var l=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e.__extends(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"getAId"},enumerable:!1,configurable:!0}),n.prototype.install=function(){return function(){return E()}},n}(t.LiffModule);function p(){return((s()||{}).d||{}).autoplay||!1}var a=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e.__extends(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"getIsVideoAutoPlay"},enumerable:!1,configurable:!0}),n.prototype.install=function(){return function(){return p()}},n}(t.LiffModule);function O(){return(s()||{}).profilePlus}var _=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e.__extends(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"getProfilePlus"},enumerable:!1,configurable:!0}),n.prototype.install=function(){return function(){return O()}},n}(t.LiffModule);function S(){return f(n.STORE_OBJECT.ID_TOKEN)}var I=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e.__extends(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"getIDToken"},enumerable:!1,configurable:!0}),n.prototype.install=function(){return function(){return S()}},n}(t.LiffModule);function C(){return f(n.STORE_OBJECT.ACCESS_TOKEN)}var x=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e.__extends(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"getAccessToken"},enumerable:!1,configurable:!0}),n.prototype.install=function(){return function(){return C()}},n}(t.LiffModule);function d(e){var t=i().liffId;if(!t)throw o.createLiffError(n.INVALID_CONFIG,"liffId is necessary for liff.init()");(r.isInClient()?sessionStorage:localStorage).removeItem("".concat(n.STORE_KEY,":").concat(t,":").concat(e))}function g(){var e=i();o.cookie.remove("".concat(n.STORE_KEY,":").concat(n.STORE_OBJECT.EXPIRES,":").concat(e.liffId),{path:"/"})}function R(){return f(n.STORE_OBJECT.DECODED_ID_TOKEN)}var y=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e.__extends(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"getDecodedIDToken"},enumerable:!1,configurable:!0}),n.prototype.install=function(){return function(){return R()}},n}(t.LiffModule);exports.GetAIdModule=l,exports.GetAccessTokenModule=x,exports.GetContextModule=T,exports.GetDecodedIDTokenModule=y,exports.GetIDTokenModule=I,exports.GetIsVideoAutoPlayModule=a,exports.GetProfilePlusModule=_,exports.clean=function(){Object.keys(n.STORE_OBJECT).forEach((function(e){d(n.STORE_OBJECT[e])})),g()},exports.get=f,exports.getAId=E,exports.getAccessToken=C,exports.getAppData=function(){return f(n.STORE_OBJECT.APP_DATA)},exports.getByLiffId=u,exports.getClientId=function(){return f(n.STORE_OBJECT.CLIENT_ID)},exports.getConfig=i,exports.getContext=s,exports.getDecodedIDToken=R,exports.getExpireTime=function(){var e=i();return o.cookie.get("".concat(n.STORE_KEY,":").concat(n.STORE_OBJECT.EXPIRES,":").concat(e.liffId))},exports.getFeatureToken=function(){return f(n.STORE_OBJECT.FEATURE_TOKEN)},exports.getIDToken=S,exports.getIsSubsequentLiffApp=function(){return Boolean(f(n.STORE_OBJECT.IS_SUBSEQUENT_LIFF_APP))},exports.getIsVideoAutoPlay=p,exports.getLoginTmp=function(){return f(n.STORE_OBJECT.LOGIN_TMP)},exports.getMSIT=function(){return f(n.STORE_OBJECT.MSIT)},exports.getMST=function(){return f(n.STORE_OBJECT.MST)},exports.getMSTChallenge=function(){return f(n.STORE_OBJECT.MST_CHALLENGE)},exports.getMSTVerifier=function(){return f(n.STORE_OBJECT.MST_VERIFIER)},exports.getProfilePlus=O,exports.getRawContext=function(){return f(n.STORE_OBJECT.RAW_CONTEXT)},exports.remove=d,exports.removeExpireTime=g,exports.removeLoginTmp=function(){d(n.STORE_OBJECT.LOGIN_TMP)},exports.set=c,exports.setAccessToken=function(e){c(n.STORE_OBJECT.ACCESS_TOKEN,e)},exports.setAppData=function(e){c(n.STORE_OBJECT.APP_DATA,e)},exports.setClientId=function(e){c(n.STORE_OBJECT.CLIENT_ID,e)},exports.setConfig=function(e){window.__liffConfig=e},exports.setContext=function(e){c(n.STORE_OBJECT.CONTEXT,e)},exports.setDecodedIDToken=function(e){c(n.STORE_OBJECT.DECODED_ID_TOKEN,e)},exports.setExpireTime=function(e){var t=i();o.cookie.set("".concat(n.STORE_KEY,":").concat(n.STORE_OBJECT.EXPIRES,":").concat(t.liffId),e.getTime(),{expires:e.toUTCString(),path:"/",secure:null})},exports.setFeatureToken=function(e){c(n.STORE_OBJECT.FEATURE_TOKEN,e)},exports.setIDToken=function(e){c(n.STORE_OBJECT.ID_TOKEN,e)},exports.setIsSubsequentLiffApp=function(e){c(n.STORE_OBJECT.IS_SUBSEQUENT_LIFF_APP,e)},exports.setLoginTmp=function(e){c(n.STORE_OBJECT.LOGIN_TMP,e)},exports.setMSIT=function(e){c(n.STORE_OBJECT.MSIT,e)},exports.setMST=function(e){c(n.STORE_OBJECT.MST,e)},exports.setMSTChallenge=function(e){c(n.STORE_OBJECT.MST_CHALLENGE,e)},exports.setMSTVerifier=function(e){c(n.STORE_OBJECT.MST_VERIFIER,e)};