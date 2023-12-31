import { __read as t } from "tslib";
import { INVALID_ARGUMENT as e } from "@liff/consts";
import { createLiffError as r } from "@liff/util";
import { logger as o } from "@liff/logger";
var n = {};
function i() {
  return n;
}
function s(e, r) {
  var o = i(),
    n = t(r.split("."), 1)[0],
    s = o[r];
  s && e.removeEventListener(n, s), (o[r] = null);
}
var f = !1,
  a = !1;
function c(e, r, o, i) {
  f ||
    ((a = (function () {
      var t = !1;
      try {
        var e = Object.defineProperty({}, "passive", {
          get: function () {
            return (t = !0), !1;
          },
        });
        window.addEventListener("test", e, e),
          window.removeEventListener("test", e, e);
      } catch (r) {
        t = !1;
      }
      return t;
    })()),
    (f = !0));
  var c = t(r.split("."), 1)[0];
  return new Promise(function (t) {
    var f = function (n) {
      t(n), o && o(n), i && i.once && s(e, r);
    };
    !(function (t, e) {
      n[t] = e;
    })(r, f),
      e.addEventListener(c, f, !!a && i);
  });
}
function u(t, o, n, i) {
  if ((void 0 === n && (n = {}), "object" != typeof t || !t.postMessage))
    throw r(e, "target must be window object");
  if ("string" != typeof o) throw r(e, "keyname must be string");
  if ("object" != typeof n)
    throw r(
      e,
      "incorrect body format. It should be Object or Array comprised of Object"
    );
  if (!i)
    throw r(
      e,
      "serverEndPointUrl isn't passed. please fill up with proper url"
    );
  if ("*" === i) throw new Error("serverEndPointUrl doesn't allow to set '*'");
  var s = { name: o, body: n };
  t.postMessage(s, i);
}
function m(t, e, r, n) {
  c(
    t,
    "message.".concat(e),
    (function (t, e, r) {
      return function (n) {
        o.debug("messageReceive", n),
          n.origin === r && n.data.name === t && e(n);
      };
    })(e, r, n)
  );
}
export {
  c as listen,
  m as messageReceive,
  u as messageTell,
  s as removeListen,
};
