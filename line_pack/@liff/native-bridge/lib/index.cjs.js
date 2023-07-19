"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@liff/consts"),t=require("@liff/logger"),i=require("@liff/util"),r=require("@liff/store"),o=require("tslib");function a(t){return new CustomEvent(e.LIFF_EVENT,{detail:t})}!function(){if("undefined"!=typeof window&&"function"!=typeof window.CustomEvent){function e(e,t){var i=t||{},r=i.bubbles,o=void 0!==r&&r,a=i.cancelable,n=void 0!==a&&a,l=i.detail,d=void 0===l?void 0:l,s=document.createEvent("CustomEvent");return s.initCustomEvent(e,o,n,d),s}e.prototype=Event.prototype,window.CustomEvent=e}}();var n={},l=!1;function d(t,i){l||(l=!0,window.addEventListener(e.LIFF_EVENT,(function(e){e&&e.detail&&e.detail.type&&n[e.detail.type]&&n[e.detail.type].forEach((function(t){return t(e)}))}))),n[t]?n[t].push(i):n[t]=[i]}function s(e,t){var i=n[e];if(i&&Array.isArray(i)){var r=i.indexOf(t);r>=0&&i.splice(r,1)}}function c(o,a,n){void 0===a&&(a={}),void 0===n&&(n="");var l=r.getFeatureToken();if(!l)throw i.createLiffError(e.FORBIDDEN,"Invalid featureToken for client features");if(!window._liff||!window._liff.postMessage)throw i.createLiffError(e.INVALID_ARGUMENT,"postMessage is not available from client");t.logger.debug("[js postMessage to client]",o,n,a),window._liff.postMessage(o,l,n,JSON.stringify(a))}exports.addListener=d,exports.call=function(a,n,l){return void 0===n&&(n={}),void 0===l&&(l={once:!0}),r.getFeatureToken()?(l=o.__assign({callbackId:i.randomAlphaNumericString(12),once:!0},l),new Promise((function(e,i){var r=function(o){if(o&&o.detail){var n=o.detail.callbackId===l.callbackId,d="string"!=typeof o.detail.callbackId;(n||d)&&(l.once&&s(a,r),t.logger.debug("[callback detail]",o.detail),o.detail.error?i(o.detail.error):o.detail.data?e(o.detail.data):i(o.detail))}i()};d(a,r),c(a,n,l.callbackId)}))):Promise.reject(i.createLiffError(e.FORBIDDEN,"Invalid featureToken for client features"))},exports.createEvent=a,exports.dispatch=function(r){var o={};try{o=JSON.parse(r)}catch(l){throw i.createLiffError(e.INVALID_ARGUMENT,l.message)}var n=a(o);t.logger.debug("[client dispatchEvent to js]",{type:n.type,detail:n.detail}),window.dispatchEvent(n)},exports.postMessage=c,exports.removeListener=s;
