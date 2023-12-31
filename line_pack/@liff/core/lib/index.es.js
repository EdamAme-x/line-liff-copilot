import { __assign as e } from "tslib";
import { InitModule as r } from "@liff/init";
import { getConfig as i } from "@liff/store";
import { ready as l } from "@liff/ready";
import {
  dispatch as a,
  call as t,
  addListener as n,
  removeListener as f,
  postMessage as o,
} from "@liff/native-bridge";
import {
  ModuleDriverImpl as m,
  ContextHolder as u,
  UseModule as b,
} from "@liff/use";
import { GetVersionModule as s } from "@liff/get-version";
var v = {
    id: {
      get: function () {
        return i().liffId || null;
      },
      enumerable: !0,
    },
  },
  w = {
    ready: { value: l, enumerable: !0, writable: !0 },
    _dispatchEvent: { value: a, enumerable: !0, writable: !0 },
    _call: { value: t, enumerable: !0, writable: !0 },
    _addListener: { value: n, enumerable: !0, writable: !0 },
    _removeListener: { value: f, enumerable: !0, writable: !0 },
    _postMessage: { value: o, enumerable: !0, writable: !0 },
  },
  p = Object.defineProperties({}, e(e({}, v), w)),
  d = new m(),
  c = new u(d, p),
  _ = new b(d, c).install();
[new b(d, c), new r(), new s()].forEach(function (e) {
  _.call(p, e);
});
var g = p;
export { g as liffCore };
