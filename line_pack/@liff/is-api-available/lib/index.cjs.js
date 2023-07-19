"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),i=require("@liff/consts"),r=require("@liff/use"),n=require("@liff/util"),a=require("@liff/is-sub-window"),o=require("@liff/store"),t=require("@liff/get-line-version"),s=require("@liff/is-in-client"),l=require("@liff/is-logged-in");function c(e){var i,r=o.getContext();return null===(i=null==r?void 0:r.availability)||void 0===i?void 0:i[e]}function u(e,r){var a=c(e);if(!a||!a.permission)return{available:!1,error:{code:i.FORBIDDEN,message:"".concat(e," is not allowed in this LIFF app")}};var o=a.minVer,l=a.unsupportedFromVer;if(s.isInClient()){var u=function(e,i){var r=t.getLineVersion();return!!r&&!(i&&n.compareVersion(r,i)>0)&&n.compareVersion(r,e)>=0}(o,l);return u?{available:!0}:{available:!1,error:{code:i.FORBIDDEN,message:"".concat(e," is unavailable in this client version.")}}}return r?{available:!0}:{available:!1,error:{code:i.FORBIDDEN,message:"".concat(e," is not allowed in external browser")}}}var d=function(){return l.isLoggedIn()?!n.isLIFFBrowser()&&n.isLINEBrowser()?{available:!1,error:{code:i.FORBIDDEN,message:"Subwindow is not supported in this browser"}}:a.isSubWindow()?{available:!1,error:{code:i.FORBIDDEN,message:"this api can be only called in child window"}}:u("subwindowOpen",!0):{available:!1,error:{code:i.UNAUTHORIZED,message:"Need access_token for api call, Please login first"}}},f=["subwindowOpen","shareTargetPicker","multipleLiffTransition","scanCode","scanCodeV2","getAdvertisingId","addToHomeScreen","bluetoothLeFunction","skipChannelVerificationScreen"],p={scanCode:function(){return u("scanCode")},getAdvertisingId:function(){return u("getAdvertisingId")},bluetoothLeFunction:function(){return u("bluetoothLeFunction")},shareTargetPicker:function(){return a.isSubWindow()?{available:!1,error:{code:i.FORBIDDEN,message:"this api can be only called in child window"}}:l.isLoggedIn()?u("shareTargetPicker",!0):{available:!1,error:{code:i.UNAUTHORIZED,message:"Need access_token for api call, Please login first"}}},multipleLiffTransition:function(){var e=c("multipleLiffTransition");return e&&e.permission?s.isInClient()?{available:!0}:{available:!1,error:{code:i.FORBIDDEN,message:"multipleLiffTransition is available only in the LINE App browser"}}:{available:!1,error:{code:i.FORBIDDEN,message:"multipleLiffTransition is not allowed in this LIFF app"}}},subwindowOpen:d,scanCodeV2:function(){if(!l.isLoggedIn())return{available:!1,error:{code:i.UNAUTHORIZED,message:"Need access_token for api call, Please login first"}};var e=d();return e.available?u("scanCodeV2",!0):e},addToHomeScreen:function(){return a.isSubWindow()?{available:!1,error:{code:i.FORBIDDEN,message:"this api can be only called in child window"}}:u("addToHomeScreen")},skipChannelVerificationScreen:function(){var e=o.getContext();return e?"square_chat"===e.type?{available:!1,error:{code:i.FORBIDDEN,message:"skipChannelVerificationScreen is not allowed in OpenChat"}}:u("skipChannelVerificationScreen"):{available:!1,error:{code:i.FORBIDDEN,message:"Context is not found"}}}},b=function(e){return function(){var i=e();if(!i.available)throw n.createLiffError(i.error.code,i.error.message)}},v={scanCode:b(p.scanCode),getAdvertisingId:b(p.getAdvertisingId),bluetoothLeFunction:b(p.bluetoothLeFunction),shareTargetPicker:b(p.shareTargetPicker),multipleLiffTransition:b(p.multipleLiffTransition),subwindowOpen:b(p.subwindowOpen),scanCodeV2:b(p.scanCodeV2),addToHomeScreen:b(p.addToHomeScreen),skipChannelVerificationScreen:b(p.skipChannelVerificationScreen)};function g(e){if(!function(e){return f.some((function(i){return i===e}))}(e))throw n.createLiffError(i.INVALID_ARGUMENT,"Unexpected API name.");var r=p[e];return!r||r().available}var m=function(i){function r(){var e=null!==i&&i.apply(this,arguments)||this;return e.hooks={},e}return e.__extends(r,i),Object.defineProperty(r.prototype,"name",{get:function(){return"isApiAvailable"},enumerable:!1,configurable:!0}),r.prototype.install=function(){return function(e){return g(e)}},r}(r.LiffModule);exports.IsApiAvailableModule=m,exports.isApiAvailable=g,exports.validators=v;