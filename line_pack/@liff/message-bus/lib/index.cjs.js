"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("@liff/util"),n=require("@liff/consts"),i="liff.subwindow.cryptokey",r=e.__assign(e.__assign({},n.SUB_WINDOW_STATUS),{GET_DATA:"getData",SET_DATA:"setData",NOT_FOUND:"notFound",TEARDOWN:"teardown"}),s={BROADCAST:"broadcast",COMMAND:"command"},a={MAIN:"main",SUB:"sub"},o=function(i){return e.__awaiter(void 0,void 0,void 0,(function(){var r;return e.__generator(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,window.crypto.subtle.importKey("jwk",{kty:"oct",k:i,alg:"A128GCM",ext:!0},{name:"AES-GCM"},!1,["encrypt","decrypt"])];case 1:return[2,e.sent()];case 2:throw r=e.sent(),t.createLiffError(n.UNKNOWN,r);case 3:return[2]}}))}))},c=function(i,r,s){return e.__awaiter(void 0,void 0,void 0,(function(){var a,c,d,u;return e.__generator(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),a=(new TextEncoder).encode(i),[4,o(r)];case 1:return c=e.sent(),[4,window.crypto.subtle.encrypt({name:"AES-GCM",iv:a},c,(new TextEncoder).encode(s))];case 2:return d=e.sent(),[2,btoa(new Uint8Array(d).reduce((function(e,t){return e+String.fromCharCode(t)}),""))];case 3:throw u=e.sent(),t.createLiffError(n.UNKNOWN,u);case 4:return[2]}}))}))},d=function(i,r,s){return e.__awaiter(void 0,void 0,void 0,(function(){var a,c,d,u,f,l,h;return e.__generator(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),a=(new TextEncoder).encode(i),[4,o(r)];case 1:for(c=e.sent(),d=atob(s),u=new Uint8Array(d.length),f=0;f<d.length;f++)u[f]=d.charCodeAt(f);return[4,window.crypto.subtle.decrypt({name:"AES-GCM",iv:a},c,u.buffer)];case 2:return l=e.sent(),[2,(new TextDecoder).decode(new Uint8Array(l))];case 3:throw h=e.sent(),t.createLiffError(n.UNKNOWN,h);case 4:return[2]}}))}))},u=function(e,t){return f(e)===f(t)},f=function(e){return"".concat(e.identifier,"-").concat(e.action,"-").concat(e.timestamp)},l=function(e){return Object.keys(n.SUB_WINDOW_STATUS).map((function(e){return n.SUB_WINDOW_STATUS[e]})).includes(e)?s.BROADCAST:s.COMMAND};function h(){var e=document.createElement("form");e.method="POST",e.action="$MESSAGE_HANDLER_URL";var t=document.createElement("input");t.type="hidden",t.name="identifier",t.value="$IDENTIFIER",e.appendChild(t),document.body.appendChild(e),e.submit()}var v=function(o){void 0===o&&(o=a.MAIN);var v=this;this.identification={identifier:"",cryptoKey:""},this.messageHandlerInstance=null,this.listeners=new Map,this.sentMessages=[],this.generateIdentification=function(){return e.__awaiter(v,void 0,void 0,(function(){var r,s,o,c,d;return e.__generator(this,(function(u){switch(u.label){case 0:return r=new URLSearchParams(window.location.search),s=function(e){var t=r.get("liff.state");return t?new URLSearchParams(t).get(e):null},o=this,d={identifier:this.windowType===a.MAIN?t.randomAlphaNumericString(12):r.get("liff.subwindow.identifier")||s("liff.subwindow.identifier")||""},this.windowType!==a.MAIN?[3,2]:[4,e.__awaiter(void 0,void 0,void 0,(function(){var i,r,s;return e.__generator(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,window.crypto.subtle.generateKey({name:"AES-GCM",length:128},!0,["encrypt","decrypt"])];case 1:return i=e.sent(),[4,window.crypto.subtle.exportKey("jwk",i)];case 2:if(!(r=e.sent())||!r.k)throw t.createLiffError(n.UNKNOWN,"failed to generate key");return[2,r.k];case 3:throw s=e.sent(),t.createLiffError(n.UNKNOWN,s);case 4:return[2]}}))}))];case 1:return c=u.sent(),[3,3];case 2:c=r.get(i)||s(i)||"",u.label=3;case 3:return o.identification=(d.cryptoKey=c,d),[2]}}))}))},this.hasIdentification=function(){var e=v.identification,t=e.identifier,n=e.cryptoKey;return"string"==typeof t&&"string"==typeof n&&t.length>0&&n.length>0},this.isReady=function(){return v.hasIdentification()&&!!v.messageHandlerInstance},this.setup=function(){return e.__awaiter(v,void 0,void 0,(function(){var i,r,s,a,o,c=this;return e.__generator(this,(function(e){switch(e.label){case 0:return this.messageHandlerInstance?[2]:[4,this.generateIdentification()];case 1:if(e.sent(),!(i=this.identification.identifier))return[2];if(r=/^[a-zA-Z0-9]+$/gm,!i.match(r))throw t.createLiffError(n.UNKNOWN,"Invalid identifier");return(s=document.createElement("iframe")).style.display="none",s.src="about:blank",document.body.appendChild(s),null===(o=null==s?void 0:s.contentWindow)||void 0===o||o.window.eval("(".concat(h.toString().replace("$MESSAGE_HANDLER_URL","".concat("https://liff-subwindow.line.me/liff/v2/sub/messageHandler")).replace("$IDENTIFIER",i.split("'")[0]),")()")),a="iframe-".concat(i,"-ready"),[4,new Promise((function(e){var t=function(n){n.data[a]&&(c.messageHandlerInstance=s,window.addEventListener("message",c.proxyToListeners),e(),document.removeEventListener("message",t))};window.addEventListener("message",t)}))];case 2:return[2,e.sent()]}}))}))},this.teardown=function(){return e.__awaiter(v,void 0,void 0,(function(){var t,n;return e.__generator(this,(function(e){switch(e.label){case 0:return this.isReady()?[4,this.send({eventName:r.TEARDOWN})]:[3,2];case 1:e.sent(),window.removeEventListener("message",this.proxyToListeners),this.listeners.clear(),null===(n=null===(t=this.messageHandlerInstance)||void 0===t?void 0:t.parentNode)||void 0===n||n.removeChild(this.messageHandlerInstance),this.messageHandlerInstance=null,e.label=2;case 2:return[2]}}))}))},this.listen=function(e){v.listeners.set(e,e)},this.listenRepliedEvent=function(e,t){var n=function(i){i.replyTarget&&u(i.replyTarget,e)&&(t(i),v.listeners.delete(n))};v.listeners.set(n,n)},this.send=function(n){return e.__awaiter(v,void 0,void 0,(function(){var i,r,s,a,o=this;return e.__generator(this,(function(e){switch(e.label){case 0:if(!this.isReady())throw t.createLiffError("message bus is not ready to send message");return r={action:l(n.eventName),identifier:this.identification.identifier||"",timestamp:(new Date).getTime()},[4,this.getEncryptedContext(n)];case 1:return r.context=e.sent(),i=r,null===(a=null===(s=this.messageHandlerInstance)||void 0===s?void 0:s.contentWindow)||void 0===a||a.postMessage({messageBusEvent:i},"*"),this.sentMessages.push(f(i)),[4,new Promise((function(e){o.listenRepliedEvent(i,(function(t){e(t.context)}))}))];case 2:return[2,e.sent()]}}))}))},this.reply=function(i,r){return e.__awaiter(v,void 0,void 0,(function(){var a,o,c,d;return e.__generator(this,(function(e){switch(e.label){case 0:if(!this.isReady())throw t.createLiffError("message bus is not ready to send message");if(!i.identifier||!i.timestamp)throw t.createLiffError(n.UNKNOWN,"target message is not valid");return o={action:s.BROADCAST},[4,this.getEncryptedContext(r)];case 1:return o.context=e.sent(),o.identifier=this.identification.identifier||"",o.timestamp=(new Date).getTime(),o.replyTarget={action:i.action,identifier:i.identifier,timestamp:i.timestamp},a=o,null===(d=null===(c=this.messageHandlerInstance)||void 0===c?void 0:c.contentWindow)||void 0===d||d.postMessage({messageBusEvent:a},"*"),this.sentMessages.push(f(a)),[2]}}))}))},this.setData=function(e,t){void 0===e&&(e="appData"),v.send({eventName:r.SET_DATA,key:e,data:t})},this.getData=function(t){return void 0===t&&(t="appData"),e.__awaiter(v,void 0,void 0,(function(){return e.__generator(this,(function(e){switch(e.label){case 0:return[4,this.send({eventName:r.GET_DATA,key:t})];case 1:return[2,e.sent()]}}))}))},this.proxyToListeners=function(t){return e.__awaiter(v,void 0,void 0,(function(){var n,i=this;return e.__generator(this,(function(r){return(n=t.data.messageBusEvent)?(this.sentMessages.includes(f(n))||n.identifier!==this.identification.identifier||n.action!==s.BROADCAST&&!n.replyTarget||this.listeners.forEach((function(t){return e.__awaiter(i,void 0,void 0,(function(){var i,r,s;return e.__generator(this,(function(a){switch(a.label){case 0:return i=t,r=[e.__assign({},n)],s={},[4,this.getDecryptedContext(n.context)];case 1:return i.apply(void 0,[e.__assign.apply(void 0,r.concat([(s.context=a.sent(),s)]))]),[2]}}))}))})),[2]):[2]}))}))},this.getEncryptedContext=function(t){return e.__awaiter(v,void 0,void 0,(function(){var n,i,r,s,a,o,d;return e.__generator(this,(function(e){switch(e.label){case 0:return n=this.identification,i=n.identifier,r=n.cryptoKey,a=(s=JSON).stringify,d={eventName:t.eventName,key:t.key?t.key:void 0},t.data?[4,c(i,r,JSON.stringify(t.data))]:[3,2];case 1:return o=e.sent(),[3,3];case 2:o=void 0,e.label=3;case 3:return[2,a.apply(s,[(d.data=o,d)])]}}))}))},this.getDecryptedContext=function(t){return e.__awaiter(v,void 0,void 0,(function(){var n,i,r,s,a,o,c,u;return e.__generator(this,(function(f){switch(f.label){case 0:return n=this.identification,i=n.identifier,r=n.cryptoKey,(s=JSON.parse(t)).data&&"string"==typeof s.data?(u=(c=JSON).parse,[4,d(i,r,s.data)]):[3,2];case 1:return o=u.apply(c,[f.sent()]),[3,3];case 2:o=void 0,f.label=3;case 3:return a=o,[2,e.__assign(e.__assign({},s),{data:a})]}}))}))},this.windowType=o};exports.ACTION=s,exports.CRYPTO_KEY=i,exports.EVENT_NAME=r,exports.GLOBAL_MESSAGE_BUS_IDENTIFIER="__liff_message_bus__",exports.GLOBAL_MESSAGE_BUS_KEY="bFSQbce18HC7UXe-lS_mgg",exports.IDENTIFIER_KEY="liff.subwindow.identifier",exports.MessageBus=v,exports.WINDOW=a,exports.getEventAction=l,exports.getUniqId=f,exports.isSameEvent=u,exports.loadMessageHandlerPage=h;
