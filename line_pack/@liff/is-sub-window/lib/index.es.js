import{__extends as t}from"tslib";import{SUB_WINDOW_IDNTIFICATION_KEY as n,STORE_KEY as i,INVALID_CONFIG as e}from"@liff/consts";import{createLiffError as o,isNonBrowserEnvironment as r,isSubWindow as f}from"@liff/util";import{getConfig as u}from"@liff/store";import{isInClient as s}from"@liff/is-in-client";import{LiffModule as c}from"@liff/use";var a=function(){function t(){}return t.prototype.invoke=function(){return f()},t}(),l=function(){function t(t){this.storage=t}return Object.defineProperty(t,"IN_SUB_WINDOW_KEY",{get:function(){return"inSubWindow"},enumerable:!1,configurable:!0}),t.prototype.invoke=function(){return new URLSearchParams(window.location.search).has(n)&&this.setInSubWindow(!0),!(!this.getInSubWindow()&&!this.getSubWindowIdentifier())},t.prototype.getInSubWindow=function(){var n=this.storage.getItem("".concat(i,":").concat(this.getLiffId(),":").concat(t.IN_SUB_WINDOW_KEY));return null!==n&&JSON.parse(n)},t.prototype.getSubWindowIdentifier=function(){var t,n,i="liff.subwindow.identifier",e=new URLSearchParams(window.location.search);return e.get(i)||(t=i,(n=e.get("liff.state"))?new URLSearchParams(n).get(t):null)||null},t.prototype.setInSubWindow=function(n){this.storage.setItem("".concat(i,":").concat(this.getLiffId(),":").concat(t.IN_SUB_WINDOW_KEY),String(n))},t.prototype.getLiffId=function(){var t=u().liffId;if(!t)throw o(e,"liffId is necessary for liff.init()");return t},t}(),p=function(n){function i(){var t=n.call(this)||this;return r()?t.impl={invoke:function(){return!1}}:s()?t.impl=new a:t.impl=new l(window.sessionStorage),t}return t(i,n),Object.defineProperty(i.prototype,"name",{get:function(){return"isSubWindow"},enumerable:!1,configurable:!0}),i.prototype.install=function(){return this.impl.invoke.bind(this.impl)},i}(c),m=new p,d=m.install();export{p as IsSubWindowModule,d as isSubWindow,m as module};