"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),i=require("@liff/util"),o=require("@liff/get-os"),n=require("@liff/get-line-version"),r=require("@liff/native-bridge");function t(){var e=n.getLineVersion();null!==e&&("ios"===o.getOS()&&i.compareVersion(e,"9.19")>=0||"android"===o.getOS()&&i.compareVersion(e,"11.6.0")>=0)?location.href="liff://close":window._liff&&window._liff.postMessage?null!==e&&i.compareVersion(e,"10.15.0")>=0?"ios"===o.getOS()?window._liff.postMessage("closeWindow",""):window._liff.postMessage("closeWindow","","",""):r.call("closeWindow"):window.close()}var l=function(i){function o(){return null!==i&&i.apply(this,arguments)||this}return e.__extends(o,i),Object.defineProperty(o.prototype,"name",{get:function(){return"closeWindow"},enumerable:!1,configurable:!0}),o.prototype.install=function(){return function(){return t()}},o}(require("@liff/use").LiffModule);exports.CloseWindowModule=l,exports.closeWindow=t;
