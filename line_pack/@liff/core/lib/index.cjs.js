"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),r=require("@liff/init"),i=require("@liff/store"),l=require("@liff/ready"),a=require("@liff/native-bridge"),t=require("@liff/use"),n=require("@liff/get-version"),u={id:{get:function(){return i.getConfig().liffId||null},enumerable:!0}},s={ready:{value:l.ready,enumerable:!0,writable:!0},_dispatchEvent:{value:a.dispatch,enumerable:!0,writable:!0},_call:{value:a.call,enumerable:!0,writable:!0},_addListener:{value:a.addListener,enumerable:!0,writable:!0},_removeListener:{value:a.removeListener,enumerable:!0,writable:!0},_postMessage:{value:a.postMessage,enumerable:!0,writable:!0}},o=Object.defineProperties({},e.__assign(e.__assign({},u),s)),f=new t.ModuleDriverImpl,d=new t.ContextHolder(f,o),b=new t.UseModule(f,d).install();[new t.UseModule(f,d),new r.InitModule,new n.GetVersionModule].forEach((function(e){b.call(o,e)}));var v=o;exports.liffCore=v;
