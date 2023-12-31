import {
  __awaiter as t,
  __generator as e,
  __extends as i,
  __assign as s,
} from "tslib";
import { UTS_REFERRER_QUERY as r } from "@liff/consts";
import { logger as n } from "@liff/logger";
import { removeCredential as o, qs as f } from "@liff/util";
import {
  getDecodedIDToken as u,
  getContext as c,
  getConfig as a,
} from "@liff/store";
import { LiffModule as d } from "@liff/use";
import { getVersion as l } from "@liff/get-version";
import { isLoggedIn as p } from "@liff/is-logged-in";
import { getProfile as h } from "@liff/get-profile";
function g() {
  return t(this, void 0, void 0, function () {
    var t, i;
    return e(this, function (e) {
      switch (e.label) {
        case 0:
          if (!p()) return [3, 6];
          e.label = 1;
        case 1:
          return (
            e.trys.push([1, 5, , 6]), (t = u()) && t.sub ? [2, t.sub] : [3, 2]
          );
        case 2:
          return [4, h()];
        case 3:
          if ((i = e.sent()) && i.userId) return [2, i.userId];
          e.label = 4;
        case 4:
          return [3, 6];
        case 5:
          return (
            e.sent(),
            n.debug("can't retrieve Mid/Uid because of something wrong"),
            [3, 6]
          );
        case 6:
          return [2];
      }
    });
  });
}
function b() {
  return t(this, void 0, void 0, function () {
    var t;
    return e(this, function (e) {
      switch (e.label) {
        case 0:
          return [4, g()];
        case 1:
          return (t = e.sent()) && "u" === t.substring(0, 1) ? [2, t] : [2];
      }
    });
  });
}
var I = (function (u) {
    function d() {
      var t = (null !== u && u.apply(this, arguments)) || this;
      return (
        (t.utsExtra = {
          isLiffSuccessful: !1,
          isLoggedIn: !1,
          id: "",
          version: "",
        }),
        (t.injected = !1),
        t
      );
    }
    return (
      i(d, u),
      Object.defineProperty(d, "CUSTOMPLACEID_INIT", {
        get: function () {
          return "liff.init";
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(d, "CUSTOMTYPE", {
        get: function () {
          return "liffSdk";
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(d, "LiffUtsLoginStatus", {
        get: function () {
          return { isLoggedIn: 1, isLiffSuccessful: 2 };
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(d.prototype, "name", {
        get: function () {
          return "analytics";
        },
        enumerable: !1,
        configurable: !0,
      }),
      (d.prototype.install = function (t) {
        var e = t.liff,
          i = t.internalHooks;
        (this.liffCore = e),
          i.init.beforeFinished(this.beforeInitFinished.bind(this)),
          i.init.beforeSuccess(this.beforeInitSuccess.bind(this)),
          i.init.error(this.initError.bind(this));
      }),
      (d.prototype.changeRatioToUTSFormat = function (t) {
        if (t && Number.isFinite(t)) return Math.round(100 * t);
      }),
      (d.prototype.setExtra = function () {
        var t,
          e = this.utsExtra,
          i = e.isLiffSuccessful,
          s = e.isLoggedIn,
          r = e.id,
          n = e.version,
          o =
            (s ? d.LiffUtsLoginStatus.isLoggedIn : 0) |
            (i ? d.LiffUtsLoginStatus.isLiffSuccessful : 0);
        null === (t = this.uts) ||
          void 0 === t ||
          t.setExtra("liff", { id: r, loginStatus: o, version: n });
      }),
      (d.prototype.assignUtsExtra = function (t) {
        Object.assign(this.utsExtra, t);
      }),
      (d.prototype.setVersion = function (t) {
        this.assignUtsExtra({ version: t }),
          n.debug("[LIFFUTS][SDK version] ".concat(t)),
          this.setExtra();
      }),
      (d.prototype.setLiffId = function (t) {
        this.assignUtsExtra({ id: t }),
          n.debug("[LIFFUTS][LIFFID] ".concat(t)),
          this.setExtra();
      }),
      (d.prototype.setIsLoggedIn = function (t) {
        this.assignUtsExtra({ isLoggedIn: t }),
          n.debug("[LIFFUTS][isLoggedIn] ".concat(t)),
          this.setExtra();
      }),
      (d.prototype.sendLiffInit = function () {
        var t;
        n.debug("[LIFFUTS][sendCustom] liff.init"),
          null === (t = this.uts) ||
            void 0 === t ||
            t.sendCustom({
              type: d.CUSTOMTYPE,
              params: { placeId: d.CUSTOMPLACEID_INIT },
            });
      }),
      (d.prototype.setIsLiffSuccessful = function (t) {
        this.assignUtsExtra({ isLiffSuccessful: t }),
          n.debug("[LIFFUTS][isLiffInitSuccessful] ".concat(t)),
          this.setExtra();
      }),
      (d.prototype.prepareReferrer = function (t) {
        var e = {};
        Object.keys(t).forEach(function (i) {
          if (r.includes(i)) {
            var s = t[i];
            "string" == typeof s && s && (e[i.replace(/^liff\.ref\./, "")] = s);
          }
        }),
          Object.keys(e).length > 0 && (this.referrer = e);
      }),
      (d.prototype.beforeInitFinished = function () {
        return t(this, void 0, void 0, function () {
          var t, i, r, u, d, h, g, I, m, L, S, v;
          return e(this, function (e) {
            switch (e.label) {
              case 0:
                if (
                  ((t = f.parse(window.location.search)),
                  this.prepareReferrer(t),
                  (i = c()),
                  !(r = null == i ? void 0 : i.utsTracking))
                )
                  return [2];
                if (
                  ((u = a()),
                  (d = u.liffId),
                  (h = u.analytics),
                  "auto" !== r.mode || !h)
                )
                  return [3, 6];
                n.debug("[LIFFUTS] ".concat(new Date().toUTCString())),
                  (e.label = 1);
              case 1:
                return (
                  e.trys.push([1, 3, , 4]),
                  (g = this),
                  [
                    4,
                    new Promise(function (t, e) {
                      var i = window.uts,
                        s = document.createElement("script");
                      (s.type = "text/javascript"),
                        (s.src =
                          "https://static.line-scdn.net/uts/edge/4.1.0/uts.js"),
                        (s.onload = function () {
                          var e = window.uts;
                          t(e), (window.uts = i);
                        }),
                        (s.onerror = function (t) {
                          e(t);
                        }),
                        document.getElementsByTagName("head")[0].appendChild(s);
                    }),
                  ]
                );
              case 2:
                return (g.uts = e.sent()), [3, 4];
              case 3:
                return (
                  (I = e.sent()),
                  n.debug("[LIFFUTS] cannot load UTS, reason: ".concat(I)),
                  [2]
                );
              case 4:
                return (
                  (m = s(s({}, h.context), {
                    utsId: h.context.utsId,
                    appName: h.context.appName,
                    appEnv: h.context.appEnv || "release",
                  })),
                  (L = s(
                    s(
                      { endpoint: "https://uts-front.line-apps.com" },
                      h.options
                    ),
                    {
                      sampleRate: this.changeRatioToUTSFormat(r.sendRatio),
                      version: "current",
                    }
                  )),
                  this.uts.init(m, L),
                  [4, b()]
                );
              case 5:
                (S = e.sent()) &&
                  (n.debug("[LIFFUTS][mid] ".concat(S)), this.uts.setMid(S)),
                  (null == i ? void 0 : i.tid) &&
                    (n.debug("[LIFFUTS][tid] ".concat(i.tid)),
                    this.uts.setTid(i.tid)),
                  this.referrer &&
                    (n.debug("liff.ref.referrer", this.referrer),
                    this.uts.setSessionParams(this.referrer)),
                  d && this.setLiffId(d),
                  this.setIsLoggedIn(p()),
                  this.setVersion(l()),
                  (v = o(location.href)),
                  n.debug("[LIFFUTS][url] ".concat(v)),
                  this.uts.setUrl(v),
                  (this.liffCore.analytics = this.uts),
                  (this.injected = !0),
                  (e.label = 6);
              case 6:
                return [2];
            }
          });
        });
      }),
      (d.prototype.beforeInitSuccess = function () {
        return (
          this.injected && (this.setIsLiffSuccessful(!0), this.sendLiffInit()),
          Promise.resolve()
        );
      }),
      (d.prototype.initError = function () {
        return (
          this.injected && (this.setIsLiffSuccessful(!1), this.sendLiffInit()),
          Promise.resolve()
        );
      }),
      d
    );
  })(d),
  m = function (t) {
    n.debug("[LIFFUTS][sendCustom] liff.shareTargetPicker"),
      t.sendCustom({
        type: "liffSdk",
        params: { placeId: "liff.shareTargetPicker" },
      });
  };
export { I as AnalyticsModule, m as sendShareTargetPicker };
