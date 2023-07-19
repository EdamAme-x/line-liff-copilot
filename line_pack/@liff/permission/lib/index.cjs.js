"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),r=require("@liff/consts"),t=require("@liff/util"),n=require("@liff/store"),i=require("@liff/server-api"),o=require("@liff/is-in-client"),s=require("@liff/sub-window"),a=require("@liff/is-api-available"),c=require("@liff/use");function u(o){return e.__awaiter(this,void 0,void 0,(function(){var s,a,c,u,f,l,h;return e.__generator(this,(function(d){switch(d.label){case 0:return function(e){if(!r.PERMISSION_NAMES.includes(e))throw t.createLiffError(r.INVALID_ARGUMENT,"Unexpected permission name.");var i=n.getContext();return!!(null==i?void 0:i.scope.includes(e))}(o)?(s=n.getAccessToken())?[4,i.verifyAccessToken(s)]:[3,2]:[2,{state:"unavailable"}];case 1:a=d.sent(),c=unescape(a.scope).split(" ");try{for(u=e.__values(c),f=u.next();!f.done;f=u.next())if(f.value.includes(o))return[2,{state:"granted"}]}catch(p){l={error:p}}finally{try{f&&!f.done&&(h=u.return)&&h.call(u)}finally{if(l)throw l.error}}return[2,{state:"prompt"}];case 2:throw t.createLiffError(r.UNAUTHORIZED,"LiffId is not found.")}}))}))}function f(){var e,r,t=n.getContext();return!!t&&("square_chat"!==t.type&&(a.isApiAvailable("skipChannelVerificationScreen")||!o.isInClient()&&(null===(r=null===(e=t.availability)||void 0===e?void 0:e.skipChannelVerificationScreen)||void 0===r?void 0:r.permission)))}function l(){var e=n.getConfig().liffId;if(e)return i.fetch("".concat(i.getEndPoint("unauthorizedPermissions"),"?liffId=").concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(n.getAccessToken())}});throw t.createLiffError(r.UNAUTHORIZED,"liffId is required")}var h,d=s.subWindow.on,p=s.subWindow.off,v=s.subWindow.open,_=function(){function i(n,i){var o=this;this.onSubmit=function(n){var i=n.newAccessToken,s=n.ICA_ERROR;return e.__awaiter(o,void 0,void 0,(function(){return e.__generator(this,(function(e){return i?this.resolve({newAccessToken:i}):s&&this.reject(t.createLiffError(r.UNKNOWN,s)),this.teardown(),[2]}))}))},this.onClose=function(){return e.__awaiter(o,void 0,void 0,(function(){return e.__generator(this,(function(e){return this.reject(t.createLiffError(r.UNAUTHORIZED,"user didn't allow the agreement")),this.teardown(),[2]}))}))},this.onCancel=function(){return e.__awaiter(o,void 0,void 0,(function(){return e.__generator(this,(function(e){return this.reject(t.createLiffError(r.UNAUTHORIZED,"user didn't allow the agreement")),this.teardown(),[2]}))}))},this.onError=function(r){return e.__awaiter(o,void 0,void 0,(function(){return e.__generator(this,(function(e){return this.reject(r),this.teardown(),[2]}))}))},this.resolve=n,this.reject=i,this.setup()}return i.prototype.setup=function(){d("submit",this.onSubmit),d("close",this.onClose),d("cancel",this.onCancel),d("error",this.onError)},i.prototype.teardown=function(){p("submit",this.onSubmit),p("close",this.onClose),p("cancel",this.onCancel),p("error",this.onError),h=void 0},i.prototype.open=function(){var e=n.getConfig().liffId;e?v({url:"".concat("https://liff.line.me/1656032314-Xgrw5Pmk"),appData:{liffId:e,channelId:t.extractChannelIdFromLiffId(e),accessToken:n.getAccessToken()}}):this.reject(t.createLiffError(r.UNAUTHORIZED,"liffId is required"))},i}();function w(){return e.__awaiter(this,void 0,void 0,(function(){var i,s;return e.__generator(this,(function(e){switch(e.label){case 0:if(!f())throw t.createLiffError(r.FORBIDDEN,"SkipChannelVerificationScreen is unavailable.");return h&&h.teardown(),[4,l()];case 1:return i=e.sent(),(o.isInClient()?i:i.filter((function(e){return"chat_message.write"!==e}))).length>0?[4,new Promise((function(e,r){(h=new _(e,r)).open()}))]:[3,3];case 2:return s=e.sent().newAccessToken,n.setAccessToken(s),[3,4];case 3:throw t.createLiffError(r.FORBIDDEN,"All permissions have already been approved.");case 4:return[2]}}))}))}var g=function(r){function t(){return null!==r&&r.apply(this,arguments)||this}return e.__extends(t,r),Object.defineProperty(t.prototype,"name",{get:function(){return"permission"},enumerable:!1,configurable:!0}),t.prototype.install=function(){return{query:u,requestAll:w}},t}(c.LiffModule),m=new g;exports.PermissionModule=g,exports.attachChecker=function(n,i){var s=this;return function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];return e.__awaiter(s,void 0,void 0,(function(){var s,c,l;return e.__generator(this,(function(h){switch(h.label){case 0:return s=(a.length>0?a[a.length-1]:{}).ignorePermissionCheck,c=void 0!==s&&s,[4,u(i)];case 1:if("unavailable"!==(l=h.sent().state))return[3,2];throw t.createLiffError(r.FORBIDDEN,"The permission is not in LIFF app scope.");case 2:return"prompt"!==l||!f()||c||!o.isInClient()&&"chat_message.write"===i?[3,4]:[4,w()];case 3:return h.sent(),[3,5];case 4:c&&a.pop(),h.label=5;case 5:return[4,n.apply(void 0,e.__spreadArray([],e.__read(a),!1))];case 6:return[2,h.sent()]}}))}))}},exports.module=m;
