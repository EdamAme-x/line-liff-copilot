"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var t = require("tslib"),
  e = require("@liff/consts"),
  i = require("@liff/util"),
  r = require("@liff/store"),
  o = require("@liff/is-in-client"),
  n = require("@liff/analytics"),
  s = require("@liff/get-line-version"),
  a = require("@liff/logger"),
  l = require("@liff/server-api"),
  c = require("@liff/get-os"),
  h = require("@liff/window-postmessage"),
  u = require("@liff/use"),
  f = require("@liff/is-api-available");
var d = (function () {
    function r() {
      (this.payloadToShareTargetPicker = null),
        (this.popupWindow = null),
        (this.doesWaitForSubwindowResult = !1);
    }
    return (
      (r.getInstance = function () {
        return (
          r.instance ? r.instance.reset() : (r.instance = new r()), r.instance
        );
      }),
      (r.prototype.init = function (e) {
        return t.__awaiter(this, void 0, void 0, function () {
          var i, r;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  t.trys.push([0, 5, , 6]),
                  (this.liffId = e.referrer.liffId),
                  (this.doesWaitForSubwindowResult = !(
                    !e.options || !e.options.waitForSubwindowResult
                  )),
                  (this.allowPostMessageOrigin =
                    this.initAllowPostMessageOrigin()),
                  (this.payloadToShareTargetPicker =
                    this.buildPayloadToShareTargetPicker(e)),
                  window.AbortController &&
                    (this.abortController = new window.AbortController()),
                  this.prepareAnotherWindow(),
                  [4, this.initOtt()]
                );
              case 1:
                return (
                  t.sent(),
                  this.initListener(),
                  this.openAnotherWindow(),
                  this.doesWaitForSubwindowResult
                    ? [4, this.pollingShareResult()]
                    : [3, 3]
                );
              case 2:
                return (i = t.sent()), this.finalize(), [2, i];
              case 3:
              case 6:
                return [2];
              case 4:
                return [3, 6];
              case 5:
                if (((r = t.sent()), this.finalize(), "AbortError" !== r.name))
                  throw r;
                return [3, 6];
            }
          });
        });
      }),
      (r.prototype.resetAllVariables = function () {
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
      (r.prototype.reset = function () {
        this.finalize(), this.resetAllVariables();
      }),
      (r.prototype.finalize = function () {
        var t, e;
        this.abortController && this.abortController.abort(),
          o.isInClient() ||
            ((t = this.timeoutIDForHealthCheck),
            (e = this.popupWindow),
            h.removeListen(window, "message.receivedHealthcheck"),
            t && clearTimeout(t),
            e && !e.closed && e.close());
      }),
      (r.prototype.buildPayloadToShareTargetPicker = function (t) {
        return {
          messages: t.messages,
          isMultiple: t.isMultiple,
          referrer: t.referrer,
        };
      }),
      (r.prototype.initAllowPostMessageOrigin = function (t) {
        return (
          void 0 === t && (t = l.getEndPoint("shareTargetPicker")),
          i.getOriginOfUrl(t)
        );
      }),
      (r.prototype.initOtt = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          var e, i, r;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  this.abortController && (e = this.abortController.signal),
                  (i = ""
                    .concat(l.getEndPoint("shareTargetPickerOtt"), "/")
                    .concat(this.liffId, "/ott")),
                  (r = this),
                  [
                    4,
                    l.fetch(i, { method: "GET", signal: e }).then(function (t) {
                      return t.ott;
                    }),
                  ]
                );
              case 1:
                return (r.ott = t.sent()), [2];
            }
          });
        });
      }),
      (r.prototype.prepareAnotherWindow = function () {
        o.isInClient() ||
          ("ios" !== c.getOS() || i.isIpad()
            ? (this.popupWindow = window.open(
                "",
                "liffpopup",
                "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes"
              ))
            : (this.popupWindow = window.open()));
      }),
      (r.prototype.openAnotherWindow = function () {
        if (o.isInClient() && this.payloadToShareTargetPicker)
          (t = this.liffId),
            (r = this.ott),
            (n = this.payloadToShareTargetPicker),
            (s = {
              liffId: t,
              ott: r,
              data: JSON.stringify(n),
              closeModals: !1,
            }),
            (location.href = ""
              .concat("line://picker", "?")
              .concat(i.qs.stringify(s)));
        else {
          if (
            ((this.timeoutIDForHealthCheck = window.setTimeout(
              this.healthCheck.bind(this),
              1e3
            )),
            !this.popupWindow)
          )
            throw i.createLiffError(e.CREATE_SUBWINDOW_FAILED);
          !(function (t, e, r) {
            var o = { liffId: e, ott: r };
            t.location.href = ""
              .concat(l.getEndPoint("shareTargetPicker"), "?")
              .concat(i.qs.stringify(o));
          })(this.popupWindow, this.liffId, this.ott);
        }
        var t, r, n, s;
      }),
      (r.prototype.initListener = function () {
        var t, e;
        o.isInClient() ||
          ((t = this.onReceivedHealthcheck.bind(this)),
          (e = this.allowPostMessageOrigin),
          h.messageReceive(window, "receivedHealthcheck", t, e));
      }),
      (r.prototype.healthCheck = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          var e;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                if (this.popupWindow && !this.popupWindow.closed) return [3, 7];
                if (!this.doesWaitForSubwindowResult) return [3, 5];
                t.label = 1;
              case 1:
                return t.trys.push([1, 3, , 4]), [4, this.onCanceled()];
              case 2:
                return t.sent(), [3, 4];
              case 3:
                return (e = t.sent()), (this.internalError = e), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                this.finalize(), (t.label = 6);
              case 6:
                return [3, 8];
              case 7:
                (i = this.popupWindow),
                  (r = this.allowPostMessageOrigin),
                  h.messageTell(i, "healthcheck", void 0, r),
                  (this.timeoutIDForHealthCheck = window.setTimeout(
                    this.healthCheck.bind(this),
                    1e3
                  )),
                  (t.label = 8);
              case 8:
                return [2];
            }
            var i, r;
          });
        });
      }),
      (r.prototype.onReceivedHealthcheck = function () {
        if (!this.popupWindow || !this.payloadToShareTargetPicker)
          throw i.createLiffError(e.CREATE_SUBWINDOW_FAILED);
        var t, r, o;
        (t = this.popupWindow),
          (r = this.payloadToShareTargetPicker),
          (o = this.allowPostMessageOrigin),
          h.messageTell(t, "ready", r, o);
      }),
      (r.prototype.onCanceled = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          var e, r;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                if (o.isInClient() || !this.ott)
                  throw new Error("need to call with ott in client");
                return (
                  this.abortController && (e = this.abortController.signal),
                  (r = { liffId: this.liffId, ott: this.ott }),
                  [
                    4,
                    l.fetch(
                      ""
                        .concat(l.getEndPoint("shareTargetPickerResult"), "?")
                        .concat(i.qs.stringify(r)),
                      {
                        method: "POST",
                        signal: e,
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
                return [2, "ok" === t.sent().status];
            }
          });
        });
      }),
      (r.prototype.getShareResult = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          var e, r;
          return t.__generator(this, function (t) {
            if (!this.ott) throw new Error("need to call with ott in client");
            return (
              this.abortController && (e = this.abortController.signal),
              (r = { liffId: this.liffId, ott: this.ott }),
              a.logger.debug("fetch: getShareResult"),
              [
                2,
                l.fetch(
                  ""
                    .concat(l.getEndPoint("shareTargetPickerResult"), "?")
                    .concat(i.qs.stringify(r)),
                  {
                    method: "GET",
                    headers: { Accept: "application/json" },
                    signal: e,
                  }
                ),
              ]
            );
          });
        });
      }),
      (r.isPollingTimeOut = function (t, e) {
        return (e - t) / 6e4 >= 10;
      }),
      (r.prototype.pollingShareResult = function () {
        return t.__awaiter(this, void 0, void 0, function () {
          var e, i;
          return t.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                (e = Date.now()), (t.label = 1);
              case 1:
                if (r.isPollingTimeOut(e, Date.now())) return [3, 4];
                if (this.internalError) throw this.internalError;
                return [4, this.getShareResult()];
              case 2:
                if ((i = t.sent()) && i.result)
                  switch (i.result) {
                    case "SUCCESS":
                      return [2, { status: "success" }];
                    case "CANCEL":
                      return [2];
                    default:
                      throw new Error(i.resultDescription);
                  }
                return [
                  4,
                  new Promise(function (t) {
                    setTimeout(t, 500);
                  }),
                ];
              case 3:
                return t.sent(), [3, 1];
              case 4:
                throw new Error(
                  "Timeout: not finished within ".concat(10, "min")
                );
            }
          });
        });
      }),
      r
    );
  })(),
  p = (function (a) {
    function l() {
      var l = (null !== a && a.apply(this, arguments)) || this;
      return (
        (l.shareTargetPicker = function (a, c) {
          return (
            void 0 === c && (c = {}),
            t.__awaiter(l, void 0, void 0, function () {
              var l, h, u, p, w, g, b;
              return t.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (
                      (f.validators.shareTargetPicker(),
                      !a || !Array.isArray(a) || 0 === a.length)
                    )
                      throw i.createLiffError(
                        e.INVALID_ARGUMENT,
                        "no proper argument"
                      );
                    if (a.length > e.MAX_NUM_OF_SEND_MESSAGES)
                      throw i.createLiffError(
                        e.INVALID_ARGUMENT,
                        "exceed the limit of num of messages"
                      );
                    if (!(l = r.getConfig().liffId))
                      throw i.createLiffError(e.INVALID_CONFIG);
                    window.liff &&
                      (h = window.liff).analytics &&
                      n.sendShareTargetPicker(h.analytics),
                      (u = void 0 === c.isMultiple || c.isMultiple),
                      (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 3, , 4]),
                      (p = d.getInstance()),
                      (w = s.getLineVersion()),
                      (g = { waitForSubwindowResult: !0 }),
                      o.isInClient() &&
                        w &&
                        i.compareVersion(w, "10.11.0") < 0 &&
                        (g.waitForSubwindowResult = !1),
                      [
                        4,
                        p.init({
                          messages: a,
                          isMultiple: u,
                          referrer: { liffId: l, url: location.origin },
                          options: g,
                        }),
                      ]
                    );
                  case 2:
                    return [2, t.sent()];
                  case 3:
                    throw (b = t.sent()) instanceof i.LiffError
                      ? b
                      : i.createLiffError(e.EXCEPTION_IN_SUBWINDOW, b.message);
                  case 4:
                    return [2];
                }
              });
            })
          );
        }),
        l
      );
    }
    return (
      t.__extends(l, a),
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
  })(u.LiffModule),
  w = new p();
(exports.ShareTargetPickerModule = p), (exports.module = w);
