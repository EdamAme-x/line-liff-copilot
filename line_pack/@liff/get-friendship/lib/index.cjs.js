"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),r=require("@liff/server-api"),t=require("@liff/use"),i=require("@liff/permission");function n(){return r.fetch(r.getEndPoint("friendship"))}var u=function(r){function t(){return null!==r&&r.apply(this,arguments)||this}return e.__extends(t,r),Object.defineProperty(t.prototype,"name",{get:function(){return"getFriendship"},enumerable:!1,configurable:!0}),t.prototype.install=function(){return i.attachChecker(n,"profile")},t}(t.LiffModule);exports.GetFriendshipModule=u,exports.getFriendship=n;
