import { __awaiter as e, __generator as t, __assign as a } from "tslib";
import { UNKNOWN as n, UNAUTHORIZED as r } from "@liff/consts";
import { createLiffError as i, HTTPStatusCodes as s } from "@liff/util";
import { getAccessToken as o } from "@liff/store";
function c(a) {
  return e(this, void 0, void 0, function () {
    var e, r, o;
    return t(this, function (t) {
      switch (t.label) {
        case 0:
          if (!a.ok) return [3, 4];
          t.label = 1;
        case 1:
          return t.trys.push([1, 3, , 4]), [4, a.json()];
        case 2:
          return [2, t.sent()];
        case 3:
          return t.sent(), [2, a];
        case 4:
          return (
            (e = String(a.status)),
            (r = s.has(e) ? e : n),
            [
              4,
              a.json().catch(function () {
                throw i(r, a.statusText);
              }),
            ]
          );
        case 5:
          throw (
            ((o = t.sent()), i(o.error || r, o.error_description || o.message))
          );
      }
    });
  });
}
function u(e) {
  var t = (function (e) {
    if (e) return e;
    var t = o();
    if (!t) throw i(r, "Need access_token for api call, Please login first");
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer ".concat(t),
    };
  })(e && e.headers);
  return a(a({}, e), { headers: t });
}
function f(e, t) {
  var a;
  try {
    a = u(t);
  } catch (n) {
    return Promise.reject(n);
  }
  return fetch(e, a).then(c);
}
function p(e, t) {
  var a;
  try {
    a = u(t);
  } catch (n) {
    return Promise.reject(n);
  }
  return fetch(e, a);
}
function h(e) {
  var t = e.subdomain,
    a = void 0 === t ? "api" : t,
    n = e.pathname;
  return "https://".concat(a, ".").concat("line.me", "/").concat(n);
}
var m = {
  token: h({ pathname: "oauth2/v2.1/token" }),
  certs: h({ pathname: "oauth2/v2.1/certs" }),
  "openid-configuration": h({
    subdomain: "access",
    pathname: ".well-known/openid-configuration",
  }),
  authorize: h({ subdomain: "access", pathname: "liff/v1/authorize" }),
  profile: h({ pathname: "v2/profile" }),
  message: h({ pathname: "message/v3/share" }),
  friendship: h({ pathname: "friendship/v1/status" }),
  shareTargetPicker: h({
    subdomain: "access",
    pathname: "oauth2/v2.1/liff/shareTargetPicker",
  }),
  shareTargetPickerOtt: h({ pathname: "liff/v2/apps" }),
  shareTargetPickerResult: h({
    subdomain: "access",
    pathname: "oauth2/v2.1/liff/shareTargetPicker/result",
  }),
  apps: h({ pathname: "liff/v2/apps" }),
  subWindowGetMSIT: h({ pathname: "liff/v2/sub/msit" }),
  subWindowGetMSTByMSIT: h({ pathname: "liff/v2/sub/mst" }),
  subWindowSubscribe: h({
    subdomain: "liff",
    pathname: "liff/v2/sub/waitResult",
  }),
  subWindowPost: h({ pathname: "liff/v2/sub/result" }),
  subWindowGetAppData: h({ pathname: "liff/v2/sub/appData" }),
  subWindowGetOrigin: function (e) {
    return h({ pathname: "liff/v2/sub/".concat(e, "/origin") });
  },
  accessTokenVerify: h({ pathname: "oauth2/v2.1/verify" }),
  unauthorizedPermissions: h({
    subdomain: "liff",
    pathname: "liff/v2/incrementalAgreement/unauthorizedPermissions",
  }),
  permanentLink: h({ subdomain: "liff", pathname: "liff/v2/permanentLink" }),
};
function l(e) {
  return m[e];
}
function v(e) {
  return f(
    ""
      .concat(l("accessTokenVerify"), "?access_token=")
      .concat(encodeURIComponent(e)),
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
}
export {
  f as fetch,
  l as getEndPoint,
  p as requestWithoutErrorHandling,
  v as verifyAccessToken,
};
