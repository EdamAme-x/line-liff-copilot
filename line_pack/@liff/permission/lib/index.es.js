import{__awaiter as e,__generator as t,__values as n,__spreadArray as r,__read as i,__extends as o}from"tslib";import{PERMISSION_NAMES as s,INVALID_ARGUMENT as a,UNAUTHORIZED as c,FORBIDDEN as u,UNKNOWN as f}from"@liff/consts";import{createLiffError as l,extractChannelIdFromLiffId as h}from"@liff/util";import{getContext as p,getAccessToken as d,getConfig as v,setAccessToken as m}from"@liff/store";import{verifyAccessToken as w,fetch as b,getEndPoint as y}from"@liff/server-api";import{isInClient as g}from"@liff/is-in-client";import{subWindow as C}from"@liff/sub-window";import{isApiAvailable as I}from"@liff/is-api-available";import{LiffModule as j}from"@liff/use";function k(r){return e(this,void 0,void 0,(function(){var e,i,o,u,f,h,v;return t(this,(function(t){switch(t.label){case 0:return function(e){if(!s.includes(e))throw l(a,"Unexpected permission name.");var t=p();return!!(null==t?void 0:t.scope.includes(e))}(r)?(e=d())?[4,w(e)]:[3,2]:[2,{state:"unavailable"}];case 1:i=t.sent(),o=unescape(i.scope).split(" ");try{for(u=n(o),f=u.next();!f.done;f=u.next())if(f.value.includes(r))return[2,{state:"granted"}]}catch(m){h={error:m}}finally{try{f&&!f.done&&(v=u.return)&&v.call(u)}finally{if(h)throw h.error}}return[2,{state:"prompt"}];case 2:throw l(c,"LiffId is not found.")}}))}))}function A(){var e,t,n=p();return!!n&&("square_chat"!==n.type&&(I("skipChannelVerificationScreen")||!g()&&(null===(t=null===(e=n.availability)||void 0===e?void 0:e.skipChannelVerificationScreen)||void 0===t?void 0:t.permission)))}function S(){var e=v().liffId;if(e)return b("".concat(y("unauthorizedPermissions"),"?liffId=").concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(d())}});throw l(c,"liffId is required")}var T,q=C.on,P=C.off,x=C.open,E=function(){function n(n,r){var i=this;this.onSubmit=function(n){var r=n.newAccessToken,o=n.ICA_ERROR;return e(i,void 0,void 0,(function(){return t(this,(function(e){return r?this.resolve({newAccessToken:r}):o&&this.reject(l(f,o)),this.teardown(),[2]}))}))},this.onClose=function(){return e(i,void 0,void 0,(function(){return t(this,(function(e){return this.reject(l(c,"user didn't allow the agreement")),this.teardown(),[2]}))}))},this.onCancel=function(){return e(i,void 0,void 0,(function(){return t(this,(function(e){return this.reject(l(c,"user didn't allow the agreement")),this.teardown(),[2]}))}))},this.onError=function(n){return e(i,void 0,void 0,(function(){return t(this,(function(e){return this.reject(n),this.teardown(),[2]}))}))},this.resolve=n,this.reject=r,this.setup()}return n.prototype.setup=function(){q("submit",this.onSubmit),q("close",this.onClose),q("cancel",this.onCancel),q("error",this.onError)},n.prototype.teardown=function(){P("submit",this.onSubmit),P("close",this.onClose),P("cancel",this.onCancel),P("error",this.onError),T=void 0},n.prototype.open=function(){var e=v().liffId;e?x({url:"".concat("https://liff.line.me/1656032314-Xgrw5Pmk"),appData:{liffId:e,channelId:h(e),accessToken:d()}}):this.reject(l(c,"liffId is required"))},n}();function _(){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:if(!A())throw l(u,"SkipChannelVerificationScreen is unavailable.");return T&&T.teardown(),[4,S()];case 1:return e=t.sent(),(g()?e:e.filter((function(e){return"chat_message.write"!==e}))).length>0?[4,new Promise((function(e,t){(T=new E(e,t)).open()}))]:[3,3];case 2:return n=t.sent().newAccessToken,m(n),[3,4];case 3:throw l(u,"All permissions have already been approved.");case 4:return[2]}}))}))}function R(n,o){var s=this;return function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];return e(s,void 0,void 0,(function(){var e,s,c;return t(this,(function(t){switch(t.label){case 0:return e=(a.length>0?a[a.length-1]:{}).ignorePermissionCheck,s=void 0!==e&&e,[4,k(o)];case 1:if("unavailable"!==(c=t.sent().state))return[3,2];throw l(u,"The permission is not in LIFF app scope.");case 2:return"prompt"!==c||!A()||s||!g()&&"chat_message.write"===o?[3,4]:[4,_()];case 3:return t.sent(),[3,5];case 4:s&&a.pop(),t.label=5;case 5:return[4,n.apply(void 0,r([],i(a),!1))];case 6:return[2,t.sent()]}}))}))}}var V=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),Object.defineProperty(t.prototype,"name",{get:function(){return"permission"},enumerable:!1,configurable:!0}),t.prototype.install=function(){return{query:k,requestAll:_}},t}(j),z=new V;export{V as PermissionModule,R as attachChecker,z as module};