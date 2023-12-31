import { __read as t, __assign as e, __extends as n } from "tslib";
import { logger as o } from "@liff/logger";
var i = function (t, e) {
    (this._driver = t),
      (this.liff = e),
      (this.hooks = this._driver.hooks),
      (this.internalHooks = this._driver.internalHooks);
  },
  r = function (t, e) {
    (this._driver = t), (this.liff = e), (this.hooks = this._driver.hooks);
  },
  s = (function () {
    function t(t, e) {
      (this.pluginCtx = new r(t, e)), (this.moduleCtx = new i(t, e));
    }
    return (
      Object.defineProperty(t.prototype, "pluginContext", {
        get: function () {
          return this.pluginCtx;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "moduleContext", {
        get: function () {
          return this.moduleCtx;
        },
        enumerable: !1,
        configurable: !0,
      }),
      t
    );
  })(),
  u = (function () {
    function n() {
      (this.modules = new Map()), (this.hooks = {}), (this.internalHooks = {});
    }
    return (
      (n.prototype.addModule = function (n, o) {
        this.modules.set(n, o),
          o.hooks &&
            (this.hooks[n] = Object.entries(o.hooks).reduce(function (n, o) {
              var i,
                r = t(o, 2),
                s = r[0],
                u = r[1];
              return e(e({}, n), (((i = {})[s] = u.on.bind(u)), i));
            }, {})),
          "internalHooks" in o &&
            o.internalHooks &&
            (this.internalHooks[n] = Object.entries(o.internalHooks).reduce(
              function (n, o) {
                var i,
                  r = t(o, 2),
                  s = r[0],
                  u = r[1];
                return e(e({}, n), (((i = {})[s] = u.on.bind(u)), i));
              },
              {}
            ));
      }),
      (n.prototype.hasModule = function (t) {
        return this.modules.has(t);
      }),
      n
    );
  })(),
  a = function () {},
  l = function (t) {
    return t instanceof a;
  },
  c = (function (t) {
    function e(e, n, o) {
      var i = t.call(this) || this;
      return (i.driver = e), (i.contextHolder = n), (i.option = o), i;
    }
    return (
      n(e, t),
      (e.prototype.install = function () {
        return this.factory(this.driver, this.contextHolder);
      }),
      Object.defineProperty(e.prototype, "name", {
        get: function () {
          return "use";
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "defaultOption", {
        get: function () {
          return { namespacePrefix: "$" };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.factory = function (t, e) {
        var n = Object.assign(
          {},
          this.defaultOption,
          this.option
        ).namespacePrefix;
        return function (i, r) {
          if (!i || "function" != typeof i.install || "string" != typeof i.name)
            return (
              o.warn(
                "To install the plugin, you need to define the `name` property and the `install` method."
              ),
              this
            );
          var s = l(i) ? i.name : "".concat(n).concat(i.name);
          if (t.hasModule(s)) return this;
          var u = l(i)
            ? i.install.call(i, e.moduleContext, r)
            : i.install.call(i, e.pluginContext, r);
          return (
            this["".concat(s)]
              ? (o.warn(
                  "There is a duplicate plugin name. `".concat(
                    s,
                    "` plugin namespace will be override."
                  )
                ),
                (this["".concat(s)] = u))
              : void 0 !== u && (this["".concat(s)] = u),
            t.addModule(s, i),
            this
          );
        };
      }),
      e
    );
  })(a);
export {
  s as ContextHolder,
  a as LiffModule,
  u as ModuleDriverImpl,
  c as UseModule,
  l as isLiffModule,
};
