"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),r=require("@liff/store");function t(){return!!r.getAccessToken()}var n=function(r){function n(){return null!==r&&r.apply(this,arguments)||this}return e.__extends(n,r),Object.defineProperty(n.prototype,"name",{get:function(){return"isLoggedIn"},enumerable:!1,configurable:!0}),n.prototype.install=function(){return function(){return t()}},n}(require("@liff/use").LiffModule);exports.IsLoggedInModule=n,exports.isLoggedIn=t;
