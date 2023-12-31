import { __extends as r } from "tslib";
import { INVALID_ARGUMENT as e } from "@liff/consts";
import { isIpad as t, createLiffError as o } from "@liff/util";
import { fetch as n, getEndPoint as i } from "@liff/server-api";
import { getLineVersion as f } from "@liff/get-line-version";
import { getOS as s } from "@liff/get-os";
import { LiffModule as a } from "@liff/use";
import { attachChecker as u } from "@liff/permission";
var m = function (r) {
  return (
    "object" == typeof r &&
    null !== r &&
    (function (r) {
      return "string" == typeof r || r instanceof String;
    })(r.type)
  );
};
function p(r) {
  return Promise.reject(o(e, r));
}
function l(r) {
  if (
    !(function (r) {
      return Array.isArray(r) && r.every(m);
    })(r)
  )
    return p("Parameter 'messages' must be an array of { type, ... }");
  var e = r.length;
  return e < 1 || e > 5
    ? p("Number of messages should be in range 1 to ".concat(5, "."))
    : n(i("message"), {
        method: "POST",
        body: JSON.stringify({ messages: r }),
      }).catch(c);
}
var c = function (r) {
    if ("403" === r.code) {
      var e = "12.0.0" === f(),
        o = "ios" === s(),
        n = t();
      e &&
        (o || n) &&
        window.alert(
          "LINEアプリをLINE 12.0.1以降にアップデートしてください。\nPlease update your LINE app to LINE 12.0.1 or later."
        );
    }
    throw r;
  },
  g = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      r(t, e),
      Object.defineProperty(t.prototype, "name", {
        get: function () {
          return "sendMessages";
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.install = function () {
        return u(l, "chat_message.write");
      }),
      t
    );
  })(a);
export { g as SendMessagesModule, c as alertToPromptUpdate, l as sendMessages };


// send

