import { INIT_FAILED as t } from "@liff/consts";
import { createLiffError as n, compareVersion as e } from "@liff/util";
import { getOS as o } from "@liff/get-os";
import { getLineVersion as r } from "@liff/get-line-version";
import { LiffModule as i } from "@liff/use";
var c = function (t, n) {
  return (
    (c =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, n) {
          t.__proto__ = n;
        }) ||
      function (t, n) {
        for (var e in n)
          Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
      }),
    c(t, n)
  );
};
function u(t, n, e, o) {
  return new (e || (e = Promise))(function (r, i) {
    function c(t) {
      try {
        l(o.next(t));
      } catch (n) {
        i(n);
      }
    }
    function u(t) {
      try {
        l(o.throw(t));
      } catch (n) {
        i(n);
      }
    }
    function l(t) {
      var n;
      t.done
        ? r(t.value)
        : ((n = t.value),
          n instanceof e
            ? n
            : new e(function (t) {
                t(n);
              })).then(c, u);
    }
    l((o = o.apply(t, n || [])).next());
  });
}
function l(t, n) {
  var e,
    o,
    r,
    i,
    c = {
      label: 0,
      sent: function () {
        if (1 & r[0]) throw r[1];
        return r[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (i = { next: u(0), throw: u(1), return: u(2) }),
    "function" == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function u(i) {
    return function (u) {
      return (function (i) {
        if (e) throw new TypeError("Generator is already executing.");
        for (; c; )
          try {
            if (
              ((e = 1),
              o &&
                (r =
                  2 & i[0]
                    ? o.return
                    : i[0]
                    ? o.throw || ((r = o.return) && r.call(o), 0)
                    : o.next) &&
                !(r = r.call(o, i[1])).done)
            )
              return r;
            switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
              case 0:
              case 1:
                r = i;
                break;
              case 4:
                return c.label++, { value: i[1], done: !1 };
              case 5:
                c.label++, (o = i[1]), (i = [0]);
                continue;
              case 7:
                (i = c.ops.pop()), c.trys.pop();
                continue;
              default:
                if (
                  !((r = c.trys),
                  (r = r.length > 0 && r[r.length - 1]) ||
                    (6 !== i[0] && 2 !== i[0]))
                ) {
                  c = 0;
                  continue;
                }
                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                  c.label = i[1];
                  break;
                }
                if (6 === i[0] && c.label < r[1]) {
                  (c.label = r[1]), (r = i);
                  break;
                }
                if (r && c.label < r[2]) {
                  (c.label = r[2]), c.ops.push(i);
                  break;
                }
                r[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            i = n.call(t, c);
          } catch (u) {
            (i = [6, u]), (o = 0);
          } finally {
            e = r = 0;
          }
        if (5 & i[0]) throw i[1];
        return { value: i[0] ? i[1] : void 0, done: !0 };
      })([i, u]);
    };
  }
}
var s = !1,
  a = function () {
    return s;
  },
  f = (function (t) {
    function n() {
      return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
      (function (t, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        function e() {
          this.constructor = t;
        }
        c(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((e.prototype = n.prototype), new e()));
      })(n, t),
      Object.defineProperty(n.prototype, "name", {
        get: function () {
          return "_legacyExtensionsEnabled";
        },
        enumerable: !1,
        configurable: !0,
      }),
      (n.prototype.install = function () {
        s = !0;
      }),
      n
    );
  })(i);
function p() {
  var t;
  return "ios" === o()
    ? (t = r()) && e(t, "9.19.0") < 0
      ? "https://static.line-scdn.net/liff/edge/2/ios-918-extensions_2_22_0.js"
      : "https://static.line-scdn.net/liff/edge/2/ios-extensions_2_22_0.js"
    : "https://static.line-scdn.net/liff/edge/2/non-ios-extensions_2_22_0.js";
}
function y() {
  return a()
    ? (function () {
        return u(this, void 0, void 0, function () {
          return l(this, function (e) {
            switch (e.label) {
              case 0:
                return [3, 2];
              case 1:
                return [2, e.sent().default];
              case 2:
                return [
                  2,
                  new Promise(function (e, o) {
                    var r = document.createElement("script"),
                      i = p();
                    (r.onload = function () {
                      var r = window.liffClientExtension;
                      r
                        ? e(r)
                        : o(
                            n(
                              t,
                              "Unable to load client features. (Extension is empty)"
                            )
                          );
                    }),
                      (r.onerror = function () {
                        o(n(t, "Unable to load client features."));
                      }),
                      (r.src = i),
                      (r.type = "text/javascript"),
                      document.body.appendChild(r);
                  }),
                ];
            }
          });
        });
      })()
    : Promise.resolve(void 0);
}
export { f as LegacyExtensionsModule, y as load };
