import{__extends as t}from"tslib";import{getAccessToken as r}from"@liff/store";import{LiffModule as n}from"@liff/use";function e(){return!!r()}var o=function(r){function n(){return null!==r&&r.apply(this,arguments)||this}return t(n,r),Object.defineProperty(n.prototype,"name",{get:function(){return"isLoggedIn"},enumerable:!1,configurable:!0}),n.prototype.install=function(){return function(){return e()}},n}(n);export{o as IsLoggedInModule,e as isLoggedIn};
