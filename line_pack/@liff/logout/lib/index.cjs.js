"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("@liff/store");function r(){t.clean()}var n=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e.__extends(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"logout"},enumerable:!1,configurable:!0}),n.prototype.install=function(){return function(){return r()}},n}(require("@liff/use").LiffModule);exports.LogoutModule=n,exports.logout=r;