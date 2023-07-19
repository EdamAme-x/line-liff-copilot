"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("@liff/consts"),i=require("@liff/logger"),r=require("@liff/util"),s=require("@liff/store"),n=require("@liff/use"),o=require("@liff/get-version"),u=require("@liff/is-logged-in"),a=require("@liff/get-profile");function f(){return e.__awaiter(this,void 0,void 0,(function(){var t,r;return e.__generator(this,(function(e){switch(e.label){case 0:if(!u.isLoggedIn())return[3,6];e.label=1;case 1:return e.trys.push([1,5,,6]),(t=s.getDecodedIDToken())&&t.sub?[2,t.sub]:[3,2];case 2:return[4,a.getProfile()];case 3:if((r=e.sent())&&r.userId)return[2,r.userId];e.label=4;case 4:return[3,6];case 5:return e.sent(),i.logger.debug("can't retrieve Mid/Uid because of something wrong"),[3,6];case 6:return[2]}}))}))}function c(){return e.__awaiter(this,void 0,void 0,(function(){var t;return e.__generator(this,(function(e){switch(e.label){case 0:return[4,f()];case 1:return(t=e.sent())&&"u"===t.substring(0,1)?[2,t]:[2]}}))}))}var l=function(n){function a(){var e=null!==n&&n.apply(this,arguments)||this;return e.utsExtra={isLiffSuccessful:!1,isLoggedIn:!1,id:"",version:""},e.injected=!1,e}return e.__extends(a,n),Object.defineProperty(a,"CUSTOMPLACEID_INIT",{get:function(){return"liff.init"},enumerable:!1,configurable:!0}),Object.defineProperty(a,"CUSTOMTYPE",{get:function(){return"liffSdk"},enumerable:!1,configurable:!0}),Object.defineProperty(a,"LiffUtsLoginStatus",{get:function(){return{isLoggedIn:1,isLiffSuccessful:2}},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"name",{get:function(){return"analytics"},enumerable:!1,configurable:!0}),a.prototype.install=function(e){var t=e.liff,i=e.internalHooks;this.liffCore=t,i.init.beforeFinished(this.beforeInitFinished.bind(this)),i.init.beforeSuccess(this.beforeInitSuccess.bind(this)),i.init.error(this.initError.bind(this))},a.prototype.changeRatioToUTSFormat=function(e){if(e&&Number.isFinite(e))return Math.round(100*e)},a.prototype.setExtra=function(){var e,t=this.utsExtra,i=t.isLiffSuccessful,r=t.isLoggedIn,s=t.id,n=t.version,o=(r?a.LiffUtsLoginStatus.isLoggedIn:0)|(i?a.LiffUtsLoginStatus.isLiffSuccessful:0);null===(e=this.uts)||void 0===e||e.setExtra("liff",{id:s,loginStatus:o,version:n})},a.prototype.assignUtsExtra=function(e){Object.assign(this.utsExtra,e)},a.prototype.setVersion=function(e){this.assignUtsExtra({version:e}),i.logger.debug("[LIFFUTS][SDK version] ".concat(e)),this.setExtra()},a.prototype.setLiffId=function(e){this.assignUtsExtra({id:e}),i.logger.debug("[LIFFUTS][LIFFID] ".concat(e)),this.setExtra()},a.prototype.setIsLoggedIn=function(e){this.assignUtsExtra({isLoggedIn:e}),i.logger.debug("[LIFFUTS][isLoggedIn] ".concat(e)),this.setExtra()},a.prototype.sendLiffInit=function(){var e;i.logger.debug("[LIFFUTS][sendCustom] liff.init"),null===(e=this.uts)||void 0===e||e.sendCustom({type:a.CUSTOMTYPE,params:{placeId:a.CUSTOMPLACEID_INIT}})},a.prototype.setIsLiffSuccessful=function(e){this.assignUtsExtra({isLiffSuccessful:e}),i.logger.debug("[LIFFUTS][isLiffInitSuccessful] ".concat(e)),this.setExtra()},a.prototype.prepareReferrer=function(e){var i={};Object.keys(e).forEach((function(r){if(t.UTS_REFERRER_QUERY.includes(r)){var s=e[r];"string"==typeof s&&s&&(i[r.replace(/^liff\.ref\./,"")]=s)}})),Object.keys(i).length>0&&(this.referrer=i)},a.prototype.beforeInitFinished=function(){return e.__awaiter(this,void 0,void 0,(function(){var t,n,a,f,l,g,d,h,p,I,b,L;return e.__generator(this,(function(S){switch(S.label){case 0:if(t=r.qs.parse(window.location.search),this.prepareReferrer(t),n=s.getContext(),!(a=null==n?void 0:n.utsTracking))return[2];if(f=s.getConfig(),l=f.liffId,g=f.analytics,"auto"!==a.mode||!g)return[3,6];i.logger.debug("[LIFFUTS] ".concat((new Date).toUTCString())),S.label=1;case 1:return S.trys.push([1,3,,4]),d=this,[4,new Promise((function(e,t){var i=window.uts,r=document.createElement("script");r.type="text/javascript",r.src="https://static.line-scdn.net/uts/edge/4.1.0/uts.js",r.onload=function(){var t=window.uts;e(t),window.uts=i},r.onerror=function(e){t(e)},document.getElementsByTagName("head")[0].appendChild(r)}))];case 2:return d.uts=S.sent(),[3,4];case 3:return h=S.sent(),i.logger.debug("[LIFFUTS] cannot load UTS, reason: ".concat(h)),[2];case 4:return p=e.__assign(e.__assign({},g.context),{utsId:g.context.utsId,appName:g.context.appName,appEnv:g.context.appEnv||"release"}),I=e.__assign(e.__assign({endpoint:"https://uts-front.line-apps.com"},g.options),{sampleRate:this.changeRatioToUTSFormat(a.sendRatio),version:"current"}),this.uts.init(p,I),[4,c()];case 5:(b=S.sent())&&(i.logger.debug("[LIFFUTS][mid] ".concat(b)),this.uts.setMid(b)),(null==n?void 0:n.tid)&&(i.logger.debug("[LIFFUTS][tid] ".concat(n.tid)),this.uts.setTid(n.tid)),this.referrer&&(i.logger.debug("liff.ref.referrer",this.referrer),this.uts.setSessionParams(this.referrer)),l&&this.setLiffId(l),this.setIsLoggedIn(u.isLoggedIn()),this.setVersion(o.getVersion()),L=r.removeCredential(location.href),i.logger.debug("[LIFFUTS][url] ".concat(L)),this.uts.setUrl(L),this.liffCore.analytics=this.uts,this.injected=!0,S.label=6;case 6:return[2]}}))}))},a.prototype.beforeInitSuccess=function(){return this.injected&&(this.setIsLiffSuccessful(!0),this.sendLiffInit()),Promise.resolve()},a.prototype.initError=function(){return this.injected&&(this.setIsLiffSuccessful(!1),this.sendLiffInit()),Promise.resolve()},a}(n.LiffModule);exports.AnalyticsModule=l,exports.sendShareTargetPicker=function(e){i.logger.debug("[LIFFUTS][sendCustom] liff.shareTargetPicker"),e.sendCustom({type:"liffSdk",params:{placeId:"liff.shareTargetPicker"}})};