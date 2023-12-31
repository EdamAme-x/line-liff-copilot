"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("tslib"),
  r = require("@liff/consts"),
  t = require("@liff/util"),
  n = require("@liff/server-api"),
  i = require("@liff/get-line-version"),
  s = require("@liff/get-os"),
  o = require("@liff/use"),
  u = require("@liff/permission"),
  a = function (e) {
    return (
      "object" == typeof e &&
      null !== e &&
      (function (e) {
        return "string" == typeof e || e instanceof String;
      })(e.type)
    );
  };
function f(e) {
  return Promise.reject(t.createLiffError(r.INVALID_ARGUMENT, e));
}
function l(e) {
  if (
    !(function (e) {
      return Array.isArray(e) && e.every(a);
    })(e)
  )
    return f("Parameter 'messages' must be an array of { type, ... }");
  var r = e.length;
  return r < 1 || r > 5
    ? f("Number of messages should be in range 1 to ".concat(5, "."))
    : n
        .fetch(n.getEndPoint("message"), {
          method: "POST",
          body: JSON.stringify({ messages: e }),
        })
        .catch(c);
}
var c = function (e) {
    if ("403" === e.code) {
      var r = "12.0.0" === i.getLineVersion(),
        n = "ios" === s.getOS(),
        o = t.isIpad();
      r &&
        (n || o) &&
        window.alert(
          "LINEアプリをLINE 12.0.1以降にアップデートしてください。\nPlease update your LINE app to LINE 12.0.1 or later."
        );
    }
    throw e;
  },
  p = (function (r) {
    function t() {
      return (null !== r && r.apply(this, arguments)) || this;
    }
    return (
      e.__extends(t, r),
      Object.defineProperty(t.prototype, "name", {
        get: function () {
          return "sendMessages";
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.install = function () {
        return u.attachChecker(l, "chat_message.write");
      }),
      t
    );
  })(o.LiffModule);
(exports.SendMessagesModule = p),
  (exports.alertToPromptUpdate = c),
  (exports.sendMessages = l);
