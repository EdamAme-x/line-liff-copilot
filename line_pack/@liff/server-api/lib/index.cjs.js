"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("@liff/consts"),a=require("@liff/util"),n=require("@liff/store");function r(n){return e.__awaiter(this,void 0,void 0,(function(){var r,i,s;return e.__generator(this,(function(e){switch(e.label){case 0:if(!n.ok)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,n.json()];case 2:return[2,e.sent()];case 3:return e.sent(),[2,n];case 4:return r=String(n.status),i=a.HTTPStatusCodes.has(r)?r:t.UNKNOWN,[4,n.json().catch((function(){throw a.createLiffError(i,n.statusText)}))];case 5:throw s=e.sent(),a.createLiffError(s.error||i,s.error_description||s.message)}}))}))}function i(r){var i=function(e){if(e)return e;var r=n.getAccessToken();if(!r)throw a.createLiffError(t.UNAUTHORIZED,"Need access_token for api call, Please login first");return{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(r)}}(r&&r.headers);return e.__assign(e.__assign({},r),{headers:i})}function s(e,t){var a;try{a=i(t)}catch(n){return Promise.reject(n)}return fetch(e,a).then(r)}function o(e){var t=e.subdomain,a=void 0===t?"api":t,n=e.pathname;return"https://".concat(a,".").concat("line.me","/").concat(n)}var c={token:o({pathname:"oauth2/v2.1/token"}),certs:o({pathname:"oauth2/v2.1/certs"}),"openid-configuration":o({subdomain:"access",pathname:".well-known/openid-configuration"}),authorize:o({subdomain:"access",pathname:"liff/v1/authorize"}),profile:o({pathname:"v2/profile"}),message:o({pathname:"message/v3/share"}),friendship:o({pathname:"friendship/v1/status"}),shareTargetPicker:o({subdomain:"access",pathname:"oauth2/v2.1/liff/shareTargetPicker"}),shareTargetPickerOtt:o({pathname:"liff/v2/apps"}),shareTargetPickerResult:o({subdomain:"access",pathname:"oauth2/v2.1/liff/shareTargetPicker/result"}),apps:o({pathname:"liff/v2/apps"}),subWindowGetMSIT:o({pathname:"liff/v2/sub/msit"}),subWindowGetMSTByMSIT:o({pathname:"liff/v2/sub/mst"}),subWindowSubscribe:o({subdomain:"liff",pathname:"liff/v2/sub/waitResult"}),subWindowPost:o({pathname:"liff/v2/sub/result"}),subWindowGetAppData:o({pathname:"liff/v2/sub/appData"}),subWindowGetOrigin:function(e){return o({pathname:"liff/v2/sub/".concat(e,"/origin")})},accessTokenVerify:o({pathname:"oauth2/v2.1/verify"}),unauthorizedPermissions:o({subdomain:"liff",pathname:"liff/v2/incrementalAgreement/unauthorizedPermissions"}),permanentLink:o({subdomain:"liff",pathname:"liff/v2/permanentLink"})};function u(e){return c[e]}exports.fetch=s,exports.getEndPoint=u,exports.requestWithoutErrorHandling=function(e,t){var a;try{a=i(t)}catch(n){return Promise.reject(n)}return fetch(e,a)},exports.verifyAccessToken=function(e){return s("".concat(u("accessTokenVerify"),"?access_token=").concat(encodeURIComponent(e)),{headers:{"Content-Type":"application/json",Accept:"application/json"}})};
