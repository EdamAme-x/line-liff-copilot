import{__assign as e,__awaiter as t,__generator as r,__read as n,__values as o,__extends as i}from"tslib";import{LiffModule as a}from"@liff/use";import{done as c}from"@liff/ready";import{isLoggedIn as s}from"@liff/is-logged-in";import{convertHexToRgb as l,convertArgbToRgba as f,createLiffError as u,base64Url as d,convertArrayBuffer as h,compareVersion as p,qs as v,extractChannelIdFromLiffId as m,addParamsToUrl as w,randomAlphaNumericString as g,replaceUrlCredentialRemoved as b}from"@liff/util";import{getContext as k,getLoginTmp as C,getExpireTime as F,getIsSubsequentLiffApp as I,getFeatureToken as y,setIsSubsequentLiffApp as _,getMST as B,getAccessToken as x,getRawContext as S,getIDToken as A,getClientId as T,getMSTChallenge as E,getMSTVerifier as L,getMSIT as N,getConfig as D,setDecodedIDToken as U,setAppData as O,setMST as P,setFeatureToken as W,setExpireTime as j,setAccessToken as H,setContext as K,setMSTChallenge as M,setMSTVerifier as R,setClientId as V,setMSIT as J,setIDToken as q,getDecodedIDToken as z,removeLoginTmp as G,setConfig as Q}from"@liff/store";import{CheckAvailability as X}from"@liff/check-availability";import{FORBIDDEN as Y,INIT_FAILED as Z,INVALID_ID_TOKEN as $,SUB_WINDOW_STATUS as ee,SUB_WINDOW_HEALTH_CHECK_MESSAGE as te,INVALID_CONFIG as re}from"@liff/consts";import{load as ne}from"@liff/extensions";import{isInClient as oe}from"@liff/is-in-client";import{logout as ie}from"@liff/logout";import{isSubWindow as ae}from"@liff/is-sub-window";import{getMSTByMSIT as ce,getAppData as se,getMainWindowOrigin as le,getMessageBus as fe,initMessageBus as ue,setMainWindowOrigin as de}from"@liff/sub-window";import{fetch as he,getEndPoint as pe,verifyAccessToken as ve}from"@liff/server-api";import{logger as me}from"@liff/logger";import{getLineVersion as we}from"@liff/get-line-version";import{addListener as ge,removeListener as be}from"@liff/native-bridge";import{isApiAvailable as ke}from"@liff/is-api-available";import{getOS as Ce}from"@liff/get-os";import{login as Fe}from"@liff/login";import{closeWindow as Ie}from"@liff/close-window";import{EVENT_NAME as ye,WINDOW as _e,IDENTIFIER_KEY as Be}from"@liff/message-bus";import{AsyncHook as xe}from"@liff/hooks";import{t as Se}from"@liff/i18n";var Ae={iconColor:"#111111",statusBarColor:"BLACK",titleTextColor:"#111111",titleSubtextColor:"#B7B7B7",titleButtonColor:"#111111",titleBackgroundColor:"#FFFFFF",progressBarColor:"#06C755",progressBackgroundColor:"#FFFFFF",titleButtonAreaBackgroundColor:"#1FFFFFFF",titleButtonAreaBorderColor:"#26000000",baseBackgroundColor:"#FFFFFF",baseTextColor:"#000000",lightButtonBorderColor:"rgba(0, 0, 0, 0.15)"},Te={iconColor:"#FFFFFF",statusBarColor:"WHITE",titleTextColor:"#FFFFFF",titleSubtextColor:"#949494",titleButtonColor:"#FFFFFF",titleBackgroundColor:"#111111",progressBarColor:"#06C755",progressBackgroundColor:"#111111",titleButtonAreaBackgroundColor:"#1FFFFFFF",titleButtonAreaBorderColor:"#26000000",baseBackgroundColor:"#000000",baseTextColor:"#FFFFFF",lightButtonBorderColor:"rgba(255, 255, 255, 0.5)"};function Ee(){var e;De("color-scheme",((null==(e=k())?void 0:e.menuColorSetting)||{adaptableColorSchemes:["light"]}).adaptableColorSchemes.join(" "));var t=window.matchMedia("(prefers-color-scheme: dark)");Le({matches:null==t?void 0:t.matches,media:null==t?void 0:t.media}),t.addEventListener?t.addEventListener("change",Le):t.addListener&&t.addListener(Le)}function Le(t){var r=k(),n=(null==r?void 0:r.menuColorSetting)||{adaptableColorSchemes:["light"],lightModeColor:Ae,darkModeColor:Te},o=n.adaptableColorSchemes,i=n.lightModeColor,a=n.darkModeColor,c=o.includes("dark");t.matches&&c?Ne(e(e({},Te),a)):Ne(e(e({},Ae),i))}function Ne(e){var t=e.iconColor,r=e.statusBarColor,n=e.titleTextColor,o=e.titleSubtextColor,i=e.titleButtonColor,a=e.titleBackgroundColor,c=e.progressBarColor,s=e.progressBackgroundColor,u=e.titleButtonAreaBackgroundColor,d=e.titleButtonAreaBorderColor,h=e.baseBackgroundColor,p=e.baseTextColor,v=e.lightButtonBorderColor;De("--liff-base-background-color",h),De("--liff-base-text-color",p),De("--liff-base-background-rgb-color",l(h)),De("--liff-base-text-rgb-color",l(p)),De("--liff-light-button-border-color",v),De("--liff-title-text-color",n),De("--liff-title-background-color",a),De("--liff-title-button-color",i),De("--liff-icon-color",t),De("--liff-status-bar-color",r),De("--liff-title-subtext-color",o),De("--liff-progress-bar-color",c),De("--liff-progress-background-color",s),De("--liff-title-button-area-background-color",f(u)),De("--liff-title-button-area-border-color",f(d))}function De(e,t){document.documentElement.style.setProperty(e,t)}var Ue={addToHomeScreen:function(e){if(!new X(e).invoke("addToHomeScreen"))throw u(Y,"No permission for liff.addToHomeScreen()")},scanCode:function(e){if(!new X(e).invoke("scanCode"))return Promise.reject(u(Y,"No permission for liff.scanCode()"))},getAdvertisingId:function(e){if(!new X(e).invoke("getAdvertisingId"))return Promise.reject(u(Y,"No permission for liff.getAdvertisingId()"))},initPlugins:function(){}};function Oe(e){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){switch(r.label){case 0:return[4,ne()];case 1:return(t=r.sent())?(t.install(e,Ue),[2]):[2]}}))}))}function Pe(){return t(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,he(pe("certs"))];case 1:return[2,e.sent()]}}))}))}function We(e,n,o){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){switch(r.label){case 0:return[4,crypto.subtle.importKey("jwk",e,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"])];case 1:return t=r.sent(),[4,crypto.subtle.verify({name:"ECDSA",hash:{name:"SHA-256"}},t,o,n)];case 2:return[2,r.sent()]}}))}))}function je(e,o){return t(this,void 0,void 0,(function(){var t,i,a,c,s,l,f,p,v,m,w,g,b,k,C,F;return r(this,(function(r){switch(r.label){case 0:return t=e.split("."),i=n(t,3),a=i[0],c=i[1],s=i[2],l=JSON.parse(d.decode(a)),f=JSON.parse(d.decodeUnicode(c)),p=h(d.decode(s)),v=h("".concat(a,".").concat(c)),[4,Pe()];case 1:if(m=r.sent(),!(w=m.keys.find((function(e){return e.kid===l.kid}))))return[3,6];if(delete w.alg,"ES256"!==l.alg)throw u($,'Invalid "alg" value in ID_TOKEN');g=void 0,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,We(w,v,p)];case 3:return g=r.sent(),[3,5];case 4:throw b=r.sent(),u($,"".concat("Failed to use Crypto API to verify ID_TOKEN",": ").concat(b));case 5:if(g){if(k=f.iss!=="https://access.".concat("line.me"),C=f.aud!==o,F=1e3*f.exp<Date.now(),k)throw u($,'Invalid "iss" value in ID_TOKEN');if(C)throw u($,'Invalid "aud" value in ID_TOKEN');if(F)throw u($,'Invalid "exp" value in ID_TOKEN');return[2,f]}throw u($,"Invalid signature in ID_TOKEN");case 6:throw u($,'Invalid "kid" value in ID_TOKEN');case 7:return[2]}}))}))}function He(e){var t=e.split(".");if(t[1])try{var r=t[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(window.atob(r))}catch(n){return null}return null}function Ke(e){var t=e.pathname,r=e.query,n=r?"?".concat(v.stringify(r)):"",o="".concat("liff://").concat(t).concat(n);location.href=o}var Me=null;function Re(){"boolean"==typeof Me&&me.warn("liff.init is not expected to be called more than once"),Me=!!I()||!(!oe()||v.parse(window.location.hash).feature_token||y())&&(_(!0),!0)}function Ve(){return Boolean(Me)}function Je(e,n){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){switch(r.label){case 0:return(t=B())?[2,t]:e&&n?[4,ce({msit:e,mstVerifier:n})]:[3,2];case 1:return[2,r.sent().mst];case 2:return[2,null]}}))}))}function qe(e){return he("".concat(pe("apps"),"/").concat(e,"/featureToken"))}function ze(e){return t(this,void 0,void 0,(function(){var t,n,i,a;return r(this,(function(r){switch(r.label){case 0:return t=v.parse(window.location.hash),n=function(e){for(var t,r,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var a=function(t){Object.keys(t).filter((function(e){return null!==t[e]&&void 0!==t[e]})).forEach((function(r){e[r]=t[r]}))};try{for(var c=o(n),s=c.next();!s.done;s=c.next()){a(s.value)}}catch(l){t={error:l}}finally{try{s&&!s.done&&(r=c.return)&&r.call(c)}finally{if(t)throw t.error}}return e}({access_token:x(),context_token:S(),feature_token:y(),id_token:A(),client_id:T(),mst_challenge:E(),mst_verifier:L(),msit:N()},t),Ve()?s()?[4,qe(e)]:[3,2]:[3,3];case 1:i=r.sent().featureToken,n.feature_token||(n.feature_token=i),r.label=2;case 2:(a=m(e))&&(n.client_id=a),r.label=3;case 3:return[2,n]}}))}))}function Ge(e){if(e.persisted&&ke("multipleLiffTransition"))if("ios"===Ce())window.location.reload();else{var t=D().liffId,r=y();if(!t)throw u(Z,"Invalid LIFF ID.");if(!r)throw u(Y,"Invalid featureToken for client features");Ke({pathname:"app/".concat(t),query:{feature_token:r}})}}function Qe(e){var n,o;return t(this,void 0,void 0,(function(){var t,i,a,c,l,f,d,h,v,g,b,C,F,I,y,_,B;return r(this,(function(r){switch(r.label){case 0:return[4,new Promise((function(e){var t=we();if(!t||p(t,"9.5.0")<0)e();else if(window._liff&&window._liff.features)e();else{me.debug("cannot find window._liff.features, listen to ready event");var r=function(){me.debug("ready event is fired"),be("ready",r),e()};ge("ready",r)}}))];case 1:return r.sent(),Re(),[4,ze(e.liffId)];case 2:if(t=r.sent(),i=t.access_token,a=t.context_token,c=t.feature_token,l=t.id_token,f=t.client_id,d=t.mst_verifier,h=t.mst_challenge,v=t.msit,a){if("string"!=typeof a)throw u(Z,"Cannot get context token, perhaps there is an incorrect parameter in permanent link");K(He(a))}if(void 0!==(null===(n=k())||void 0===n?void 0:n.liffId)&&(null===(o=k())||void 0===o?void 0:o.liffId)!==e.liffId)throw u(Z,"Invalid LIFF ID");return!ae()&&c&&(!function(e,t){ke("multipleLiffTransition")&&Ke({pathname:"app/".concat(e),query:{feature_token:t}})}(e.liffId,c),Ve()&&W(c)),h&&M(h),d&&R(d),f&&V(f),v&&J(v),window.addEventListener("pageshow",Ge),s()?[3,5]:c&&i?[3,5]:Ve()?(g=w(location.href,{"liff.hback":"2"}),Fe({redirectUri:g}),[4,new Promise((function(){}))]):[3,4];case 3:r.sent(),r.label=4;case 4:throw Fe(),u(Z,"Failed to parse feature_token or access_token");case 5:return i&&c?[4,ve(i)]:[3,7];case 6:if(b=r.sent(),C=b.client_id,F=b.expires_in,I=m(e.liffId),C!==I)throw Fe(),u(Z,"Failed to verify access_token");W(c),j(new Date(Date.now()+1e3*F)),H(i),r.label=7;case 7:return[4,Je(v,d)];case 8:return(y=r.sent())?(P(y),[4,se({mst:y})]):[3,10];case 9:(_=r.sent().data)&&O(JSON.stringify(_)),r.label=10;case 10:return l&&!A()&&q(l),l&&f&&!z()?[4,je(l,f)]:[3,12];case 11:(B=r.sent())&&U(B),r.label=12;case 12:return[2]}}))}))}function Xe(e){return t(this,void 0,void 0,(function(){var t,n,o,i,a,c,s;return r(this,(function(r){switch(r.label){case 0:return t=pe("apps"),n="".concat(t,"/").concat(e,"/contextToken"),o=x(),i={"Content-Type":"application/json",Accept:"application/json"},o&&(i.Authorization="Bearer ".concat(o)),[4,he(n,{headers:i})];case 1:if(a=r.sent(),!(c=a.contextToken))throw u(Z,"Can not get context from server.");if(!(s=He(c)))throw u(Z,"Invalid context token.");return[2,s]}}))}))}function Ye(){return t(this,void 0,void 0,(function(){var e,t;return r(this,(function(r){switch(r.label){case 0:if(!(e=D().liffId))throw u(Z,"Invalid LIFF ID.");return[4,Xe(e)];case 1:return t=r.sent(),K(t),[2]}}))}))}function Ze(e){return t(this,void 0,void 0,(function(){var n,o,i,a=this;return r(this,(function(c){switch(c.label){case 0:n=function(){return t(a,void 0,void 0,(function(){var t,n,o,i,a,c;return r(this,(function(r){switch(r.label){case 0:return[4,(s=D(),l=v.parse(window.location.search),f=C(),u={grant_type:"authorization_code",client_id:l.liffClientId,appId:s.liffId,code:l.code,code_verifier:f.codeVerifier,redirect_uri:s.redirectUri||l.liffRedirectUri,id_token_key_type:"JWK"},d=v.stringify(u),he(pe("token"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:d}))];case 1:return t=r.sent(),n=t.access_token,o=t.id_token,i=t.expires_in,V(e),H(n),j(new Date(Date.now()+1e3*i)),G(),o?(q(o),[4,je(o,e)]):[3,3];case 2:(a=r.sent())&&U(a),r.label=3;case 3:return(c=v.parse(location.hash).context_token)?(K(He(c)),[3,6]):[3,4];case 4:return[4,Ye()];case 5:r.sent(),r.label=6;case 6:return[2]}var s,l,f,u,d}))}))},c.label=1;case 1:return c.trys.push([1,3,,4]),[4,n()];case 2:return c.sent(),[3,4];case 3:throw o=c.sent(),i=o,G(),i;case 4:return[2]}}))}))}function $e(){return t(this,void 0,void 0,(function(){var e,n,o,i,a,c,l=this;return r(this,(function(f){switch(f.label){case 0:return(n=fe())?[3,2]:[4,ue(_e.SUB)];case 1:n=f.sent(),f.label=2;case 2:return(e=n).isReady()?(o=g(8),[4,e.getData("appData")]):[3,8];case 3:return i=f.sent(),a=i.eventName,c=i.data,a!==ye.NOT_FOUND?[3,6]:[4,e.teardown()];case 4:return f.sent(),[4,$e()];case 5:return[2,f.sent()];case 6:c&&O(JSON.stringify(c)),f.label=7;case 7:return e.listen((function(n){return t(l,void 0,void 0,(function(){var t,i;return r(this,(function(r){return t=n.context,i=t.data,t.eventName===ee.INIT&&(null==i?void 0:i.subWindowId)!==o&&Ie(),t.eventName!==ee.CANCEL&&t.eventName!==ee.SUBMIT||e.teardown(),[2]}))}))})),s()&&e.send({eventName:ee.INIT,data:{subWindowId:o,hasOpener:!!window.opener}}),[3,10];case 8:return le()?[3,10]:[4,new Promise((function(e){window.addEventListener("message",function(e){return function t(r){var n=r.data,o=r.source,i=r.origin;if(n){var a=n.type,c=n.message;a===te&&(window.removeEventListener("message",t),c&&O(c),de(i),o&&o.postMessage&&o.postMessage({status:te},i),e())}}}(e))}))];case 9:return[2,f.sent()];case 10:return[2]}}))}))}var et=new(function(){function e(){var e=this;this.getAndValidateContext=function(){var e=k();if(!e)throw u(Z,"Could not get Context from server.");if(!e.endpointUrl)throw u(Z,"Could not get endpointUrl from server.");if(!e.permanentLinkPattern)throw u(Z,"Could not get permanentLinkPattern from server.");return e},this.decodeState=function(t){var r=e.getAndValidateContext();t=t.replace(/\n/g,"%0D%0A");var n=!r.endpointUrl.startsWith("/?")&&r.endpointUrl.includes("/?")||!r.endpointUrl.startsWith("/#")&&r.endpointUrl.includes("/#")||r.endpointUrl.endsWith("/")||!t.startsWith("/?")&&t.includes("/?")||!t.startsWith("/#")&&t.includes("/#")||t.endsWith("/"),o=new URL(r.endpointUrl),i=o.origin,a=o.pathname,c=o.search,s=new URL("".concat(i).concat(e.attachSlashAtStart(t))),l=s.pathname,f=s.search,u=s.hash,d="".concat(c).concat(c?f.replace(/\?/g,"&"):f),h="".concat(a).concat(e.attachSlashAtStart(l)).replace("//","/");return(h=e.attachSlashAtStart("".concat(h))).endsWith("/")&&!n&&(h=h.substring(0,h.length-1)),"".concat(i).concat(h).concat(d).concat(u).replace(/%0D%0A/g,"\n")}}return e.prototype.attachSlashAtStart=function(e){return"".concat(e&&e.length>0&&!e.startsWith("/")?"/":"").concat(e)},e.prototype.invoke=function(){return t(this,void 0,void 0,(function(){var e,t,n,o,i;return r(this,(function(r){switch(r.label){case 0:if(e=v.parse(window.location.search),"string"!=typeof(t=e["liff.state"]))return[2];r.label=1;case 1:return r.trys.push([1,4,,5]),n=location.href,(o=this.decodeState(t))===n?[3,3]:(e["liff.hback"]?location.replace(w(o,{"liff.hback":e["liff.hback"]})):location.replace(o),[4,new Promise((function(){}))]);case 2:r.sent(),r.label=3;case 3:return[3,5];case 4:if((i=r.sent()).code===Z)throw i;return me.debug(i),[3,5];case 5:return[2]}}))}))},e}());function tt(e,n){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){switch(r.label){case 0:if(!e.liffId)throw u(re,"liffId is necessary for liff.init()");return Q(e),!oe()&&s()&&(F()||ie()),t=v.parse(window.location.search),!ae()||oe()?[3,2]:[4,$e()];case 1:r.sent(),r.label=2;case 2:if(t.error&&t.liffOAuth2Error)throw a=t.error,c=t.error_description,l=c.replace(/\+/g," "),f="".concat(a,": ").concat(l),u(Z,f);return o=t.code,i=C(),Boolean(o&&!s()&&i&&i.codeVerifier)?[4,Ze(t.liffClientId)]:[3,4];case 3:r.sent(),r.label=4;case 4:return oe()?[4,Qe(e)]:[3,6];case 5:return r.sent(),[3,8];case 6:return s()?[3,8]:[4,Ye()];case 7:r.sent(),r.label=8;case 8:return[4,et.invoke()];case 9:return r.sent(),[4,n()];case 10:return r.sent(),b(window.location.href),[2]}var o,i,a,c,l,f}))}))}var rt=function(e,t){return new Promise((function(r,n){if(e){var o=document.createElement("script");o.type="module",o.onload=function(){r()},o.src=e,document.head.appendChild(o)}else n(u(re,t))}))},nt=function(e){var t="https://static.line-scdn.net/lui/edge/versions/1.13.0/lui-alert.js";return t&&e&&(t=t.replace(/\d{1,2}\.\d{1,2}\.\d{1,3}/,e)),rt(t,"LUI_ALERT_URL is not defined")},ot=function(){return t(void 0,void 0,void 0,(function(){var e;return r(this,(function(t){switch(t.label){case 0:return e=function(){var e,t=document.querySelector('script[src*="luivendor.js"]');if(t&&(null===(e=t.src.match(/\d{1,2}\.\d{1,2}\.\d{1,3}/g))||void 0===e?void 0:e.length))return t.src.match(/\d{1,2}\.\d{1,2}\.\d{1,3}/g)[0]}(),e?[3,2]:[4,rt("https://static.line-scdn.net/lui/edge/versions/1.13.0/luivendor.js","LUI_VENDOR_URL is not defined")];case 1:t.sent(),t.label=2;case 2:return[4,nt(e)];case 3:return t.sent(),[4,(r=g(6),new Promise((function(){var e=document.createElement("div");e.innerHTML='<lui-alert id="'.concat("liffAlert","-").concat(r,'" shown title="').concat(Se("alert.android.extBrowser.autoLoginWorkaround.title"),'" message="').concat(Se("alert.android.extBrowser.autoLoginWorkaround.desc"),'" button="').concat(Se("alert.android.extBrowser.autoLoginWorkaround.button.text"),'"></lui-alert>'),document.body.appendChild(e);var t=document.getElementById("".concat("liffAlert","-").concat(r));t&&t.addEventListener("lui-button-click",(function(){var e=window.open(w(window.location.href,{liffIsEscapedFromApp:"true"}),"_blank");e&&(e.location.href=w(window.location.href,{liffIsEscapedFromApp:"true"}),window.close())}))})))];case 4:return t.sent(),[2]}var r}))}))},it=function(e){try{return new URL(e).searchParams.get("lineAppVersion")}catch(t){return null}};function at(){var e;return t(this,void 0,void 0,(function(){var t,n;return r(this,(function(r){switch(r.label){case 0:return t=null!==(e=it(window.location.href))&&void 0!==e?e:it(window.document.referrer),!!t&&p(t,"13.10.0")>=0?[2]:oe()||"android"!==Ce()||(n=v.parse(window.location.search))[Be]||n.liffIsEscapedFromApp?[2]:n.liffClientId&&document.referrer.includes("access.".concat("line.me"))?(window.location.href=w(window.location.href,{liffIsEscapedFromApp:"true"}),[2]):n.liffClientId&&document.referrer.includes("android-app://")?[4,ot()]:[3,2];case 1:r.sent(),r.label=2;case 2:return n.liffClientId&&""===document.referrer&&1===window.history.length?[4,ot()]:[3,4];case 3:r.sent(),r.label=4;case 4:return!document.referrer.includes("liffClientId")||document.referrer.includes("liffIsEscapedFromApp")?[3,6]:[4,ot()];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}var ct=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.hooks={before:new xe,after:new xe},t.internalHooks={beforeFinished:new xe,beforeSuccess:new xe,error:new xe},t}return i(n,e),Object.defineProperty(n.prototype,"name",{get:function(){return"init"},enumerable:!1,configurable:!0}),n.prototype.install=function(e){var t=e.liff;return this.liffForWindow=t,this.init.bind(this)},n.prototype.init=function(e,n,o){return t(this,void 0,void 0,(function(){var t;return r(this,(function(r){switch(r.label){case 0:return[4,this.hooks.before.call()];case 1:r.sent(),i=this.liffForWindow,window&&!window.liff&&(window.liff=i),r.label=2;case 2:return r.trys.push([2,9,,11]),[4,Promise.all([Oe(this.liffForWindow),tt(e,this.internalHooks.beforeFinished.call)])];case 3:return r.sent(),Ee(),[4,this.internalHooks.beforeSuccess.call()];case 4:return r.sent(),!e.withLoginOnExternalBrowser||s()?[3,6]:(Fe(),[4,new Promise((function(){}))]);case 5:r.sent(),r.label=6;case 6:return[4,at()];case 7:return r.sent(),[4,this.hooks.after.call()];case 8:return r.sent(),"function"==typeof n&&n(),c(),[3,11];case 9:return t=r.sent(),[4,this.internalHooks.error.call(t)];case 10:throw r.sent(),"function"==typeof o&&o(t),t;case 11:return[2]}var i}))}))},n}(a);export{ct as InitModule};