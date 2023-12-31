import { __awaiter as t, __generator as e, __extends as i } from "tslib";
import {
  CREATE_SUBWINDOW_FAILED as r,
  EXCEPTION_IN_SUBWINDOW as o,
  INVALID_ARGUMENT as n,
  MAX_NUM_OF_SEND_MESSAGES as s,
  INVALID_CONFIG as a,
} from "@liff/consts";
import {
  qs as l,
  getOriginOfUrl as h,
  isIpad as c,
  createLiffError as u,
  LiffError as f,
  compareVersion as p,
} from "@liff/util";
import { getConfig as d } from "@liff/store";
import { isInClient as w } from "@liff/is-in-client";
import { sendShareTargetPicker as g } from "@liff/analytics";
import { getLineVersion as m } from "@liff/get-line-version";
import { logger as b } from "@liff/logger";
import { getEndPoint as y, fetch as v } from "@liff/server-api";
import { getOS as T } from "@liff/get-os";
import {
  messageReceive as k,
  messageTell as P,
  removeListen as C,
} from "@liff/window-postmessage";
import { LiffModule as S } from "@liff/use";
import { validators as W } from "@liff/is-api-available";
var I = (function () {
    function i() {
      (this.payloadToShareTargetPicker = null),
        (this.popupWindow = null),
        (this.doesWaitForSubwindowResult = !1);
    }
    return (
      (i.getInstance = function () {
        return (
          i.instance ? i.instance.reset() : (i.instance = new i()), i.instance
        );
      }),
      (i.prototype.init = function (i) {
        return t(this, void 0, void 0, function () {
          var t, r;
          return e(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  e.trys.push([0, 5, , 6]),
                  (this.liffId = i.referrer.liffId),
                  (this.doesWaitForSubwindowResult = !(
                    !i.options || !i.options.waitForSubwindowResult
                  )),
                  (this.allowPostMessageOrigin =
                    this.initAllowPostMessageOrigin()),
                  (this.payloadToShareTargetPicker =
                    this.buildPayloadToShareTargetPicker(i)),
                  window.AbortController &&
                    (this.abortController = new window.AbortController()),
                  this.prepareAnotherWindow(),
                  [4, this.initOtt()]
                );
              case 1:
                return (
                  e.sent(),
                  this.initListener(),
                  this.openAnotherWindow(),
                  this.doesWaitForSubwindowResult
                    ? [4, this.pollingShareResult()]
                    : [3, 3]
                );
              case 2:
                return (t = e.sent()), this.finalize(), [2, t];
              case 3:
              case 6:
                return [2];
              case 4:
                return [3, 6];
              case 5:
                if (((r = e.sent()), this.finalize(), "AbortError" !== r.name))
                  throw r;
                return [3, 6];
            }
          });
        });
      }),
      (i.prototype.resetAllVariables = function () {
        (this.liffId = ""),
          (this.allowPostMessageOrigin = ""),
          (this.payloadToShareTargetPicker = null),
          (this.ott = ""),
          (this.popupWindow = null),
          (this.timeoutIDForHealthCheck = null),
          (this.abortController = null),
          (this.internalError = null),
          (this.doesWaitForSubwindowResult = !1);
      }),
      (i.prototype.reset = function () {
        this.finalize(), this.resetAllVariables();
      }),
      (i.prototype.finalize = function () {
        var t, e;
        this.abortController && this.abortController.abort(),
          w() ||
            ((t = this.timeoutIDForHealthCheck),
            (e = this.popupWindow),
            C(window, "message.receivedHealthcheck"),
            t && clearTimeout(t),
            e && !e.closed && e.close());
      }),
      (i.prototype.buildPayloadToShareTargetPicker = function (t) {
        return {
          messages: t.messages,
          isMultiple: t.isMultiple,
          referrer: t.referrer,
        };
      }),
      (i.prototype.initAllowPostMessageOrigin = function (t) {
        return void 0 === t && (t = y("shareTargetPicker")), h(t);
      }),
      (i.prototype.initOtt = function () {
        return t(this, void 0, void 0, function () {
          var t, i, r;
          return e(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  this.abortController && (t = this.abortController.signal),
                  (i = ""
                    .concat(y("shareTargetPickerOtt"), "/")
                    .concat(this.liffId, "/ott")),
                  (r = this),
                  [
                    4,
                    v(i, { method: "GET", signal: t }).then(function (t) {
                      return t.ott;
                    }),
                  ]
                );
              case 1:
                return (r.ott = e.sent()), [2];
            }
          });
        });
      }),
      (i.prototype.prepareAnotherWindow = function () {
        w() ||
          ("ios" !== T() || c()
            ? (this.popupWindow = window.open(
                "",
                "liffpopup",
                "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes"
              ))
            : (this.popupWindow = window.open()));
      }),
      (i.prototype.openAnotherWindow = function () {
        if (w() && this.payloadToShareTargetPicker)
          (t = this.liffId),
            (e = this.ott),
            (i = this.payloadToShareTargetPicker),
            (o = {
              liffId: t,
              ott: e,
              data: JSON.stringify(i),
              closeModals: !1,
            }),
            (location.href = ""
              .concat("line://picker", "?")
              .concat(l.stringify(o)));
        else {
          if (
            ((this.timeoutIDForHealthCheck = window.setTimeout(
              this.healthCheck.bind(this),
              1e3
            )),
            !this.popupWindow)
          )
            throw u(r);
          !(function (t, e, i) {
            var r = { liffId: e, ott: i };
            t.location.href = ""
              .concat(y("shareTargetPicker"), "?")
              .concat(l.stringify(r));
          })(this.popupWindow, this.liffId, this.ott);
        }
        var t, e, i, o;
      }),
      (i.prototype.initListener = function () {
        var t, e;
        w() ||
          ((t = this.onReceivedHealthcheck.bind(this)),
          (e = this.allowPostMessageOrigin),
          k(window, "receivedHealthcheck", t, e));
      }),
      (i.prototype.healthCheck = function () {
        return t(this, void 0, void 0, function () {
          var t;
          return e(this, function (e) {
            switch (e.label) {
              case 0:
                if (this.popupWindow && !this.popupWindow.closed) return [3, 7];
                if (!this.doesWaitForSubwindowResult) return [3, 5];
                e.label = 1;
              case 1:
                return e.trys.push([1, 3, , 4]), [4, this.onCanceled()];
              case 2:
                return e.sent(), [3, 4];
              case 3:
                return (t = e.sent()), (this.internalError = t), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                this.finalize(), (e.label = 6);
              case 6:
                return [3, 8];
              case 7:
                (i = this.popupWindow),
                  (r = this.allowPostMessageOrigin),
                  P(i, "healthcheck", void 0, r),
                  (this.timeoutIDForHealthCheck = window.setTimeout(
                    this.healthCheck.bind(this),
                    1e3
                  )),
                  (e.label = 8);
              case 8:
                return [2];
            }
            var i, r;
          });
        });
      }),
      (i.prototype.onReceivedHealthcheck = function () {
        if (!this.popupWindow || !this.payloadToShareTargetPicker) throw u(r);
        var t, e, i;
        (t = this.popupWindow),
          (e = this.payloadToShareTargetPicker),
          (i = this.allowPostMessageOrigin),
          P(t, "ready", e, i);
      }),
      (i.prototype.onCanceled = function () {
        return t(this, void 0, void 0, function () {
          var t, i;
          return e(this, function (e) {
            switch (e.label) {
              case 0:
                if (w() || !this.ott)
                  throw new Error("need to call with ott in client");
                return (
                  this.abortController && (t = this.abortController.signal),
                  (i = { liffId: this.liffId, ott: this.ott }),
                  [
                    4,
                    v(
                      ""
                        .concat(y("shareTargetPickerResult"), "?")
                        .concat(l.stringify(i)),
                      {
                        method: "POST",
                        signal: t,
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: "result=CANCEL",
                      }
                    ),
                  ]
                );
              case 1:
                return [2, "ok" === e.sent().status];
            }
          });
        });
      }),
      (i.prototype.getShareResult = function () {
        return t(this, void 0, void 0, function () {
          var t, i;
          return e(this, function (e) {
            if (!this.ott) throw new Error("need to call with ott in client");
            return (
              this.abortController && (t = this.abortController.signal),
              (i = { liffId: this.liffId, ott: this.ott }),
              b.debug("fetch: getShareResult"),
              [
                2,
                v(
                  ""
                    .concat(y("shareTargetPickerResult"), "?")
                    .concat(l.stringify(i)),
                  {
                    method: "GET",
                    headers: { Accept: "application/json" },
                    signal: t,
                  }
                ),
              ]
            );
          });
        });
      }),
      (i.isPollingTimeOut = function (t, e) {
        return (e - t) / 6e4 >= 10;
      }),
      (i.prototype.pollingShareResult = function () {
        return t(this, void 0, void 0, function () {
          var t, r;
          return e(this, function (e) {
            switch (e.label) {
              case 0:
                (t = Date.now()), (e.label = 1);
              case 1:
                if (i.isPollingTimeOut(t, Date.now())) return [3, 4];
                if (this.internalError) throw this.internalError;
                return [4, this.getShareResult()];
              case 2:
                if ((r = e.sent()) && r.result)
                  switch (r.result) {
                    case "SUCCESS":
                      return [2, { status: "success" }];
                    case "CANCEL":
                      return [2];
                    default:
                      throw new Error(r.resultDescription);
                  }
                return [
                  4,
                  new Promise(function (t) {
                    setTimeout(t, 500);
                  }),
                ];
              case 3:
                return e.sent(), [3, 1];
              case 4:
                throw new Error(
                  "Timeout: not finished within ".concat(10, "min")
                );
            }
          });
        });
      }),
      i
    );
  })(),
  A = (function (r) {
    function l() {
      var i = (null !== r && r.apply(this, arguments)) || this;
      return (
        (i.shareTargetPicker = function (r, l) {
          return (
            void 0 === l && (l = {}),
            t(i, void 0, void 0, function () {
              var t, i, h, c, b, y, v;
              return e(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (
                      (W.shareTargetPicker(),
                      !r || !Array.isArray(r) || 0 === r.length)
                    )
                      throw u(n, "no proper argument");
                    if (r.length > s)
                      throw u(n, "exceed the limit of num of messages");
                    if (!(t = d().liffId)) throw u(a);
                    window.liff &&
                      (i = window.liff).analytics &&
                      g(i.analytics),
                      (h = void 0 === l.isMultiple || l.isMultiple),
                      (e.label = 1);
                  case 1:
                    return (
                      e.trys.push([1, 3, , 4]),
                      (c = I.getInstance()),
                      (b = m()),
                      (y = { waitForSubwindowResult: !0 }),
                      w() &&
                        b &&
                        p(b, "10.11.0") < 0 &&
                        (y.waitForSubwindowResult = !1),
                      [
                        4,
                        c.init({
                          messages: r,
                          isMultiple: h,
                          referrer: { liffId: t, url: location.origin },
                          options: y,
                        }),
                      ]
                    );
                  case 2:
                    return [2, e.sent()];
                  case 3:
                    throw (v = e.sent()) instanceof f ? v : u(o, v.message);
                  case 4:
                    return [2];
                }
              });
            })
          );
        }),
        i
      );
    }
    return (
      i(l, r),
      Object.defineProperty(l.prototype, "name", {
        get: function () {
          return "shareTargetPicker";
        },
        enumerable: !1,
        configurable: !0,
      }),
      (l.prototype.install = function () {
        return this.shareTargetPicker;
      }),
      l
    );
  })(S),
  R = new A();
export { A as ShareTargetPickerModule, R as module };
