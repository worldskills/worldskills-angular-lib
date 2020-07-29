(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@angular/core'), require('rxjs'), require('@angular/common'), require('@angular/platform-browser'), require('angular-oauth2-oidc'), require('@angular/router'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/forms'), require('@ng-select/ng-select'), require('uuid'), require('@angular/common/http'), require('rxjs/operators')) :
	typeof define === 'function' && define.amd ? define('worldskills-angular-lib', ['@angular/core', 'rxjs', '@angular/common', '@angular/platform-browser', 'angular-oauth2-oidc', '@angular/router', '@ng-bootstrap/ng-bootstrap', '@angular/forms', '@ng-select/ng-select', 'uuid', '@angular/common/http', 'rxjs/operators'], factory) :
	(global = global || self, global['worldskills-angular-lib'] = factory(global.ng.core, global.rxjs, global.ng.common, global.ng.platformBrowser, global.angularOauth2Oidc, global.ng.router, global.ngBootstrap, global.ng.forms, global.ngSelect, global.uuid, global.ng.common.http, global.rxjs.operators));
}(this, (function (core, rxjs, common, platformBrowser, angularOauth2Oidc, router, ngBootstrap, forms, ngSelect, uuid, http, operators) { 'use strict';

	core = core && Object.prototype.hasOwnProperty.call(core, 'default') ? core['default'] : core;
	rxjs = rxjs && Object.prototype.hasOwnProperty.call(rxjs, 'default') ? rxjs['default'] : rxjs;
	common = common && Object.prototype.hasOwnProperty.call(common, 'default') ? common['default'] : common;
	platformBrowser = platformBrowser && Object.prototype.hasOwnProperty.call(platformBrowser, 'default') ? platformBrowser['default'] : platformBrowser;
	angularOauth2Oidc = angularOauth2Oidc && Object.prototype.hasOwnProperty.call(angularOauth2Oidc, 'default') ? angularOauth2Oidc['default'] : angularOauth2Oidc;
	router = router && Object.prototype.hasOwnProperty.call(router, 'default') ? router['default'] : router;
	ngBootstrap = ngBootstrap && Object.prototype.hasOwnProperty.call(ngBootstrap, 'default') ? ngBootstrap['default'] : ngBootstrap;
	forms = forms && Object.prototype.hasOwnProperty.call(forms, 'default') ? forms['default'] : forms;
	ngSelect = ngSelect && Object.prototype.hasOwnProperty.call(ngSelect, 'default') ? ngSelect['default'] : ngSelect;
	uuid = uuid && Object.prototype.hasOwnProperty.call(uuid, 'default') ? uuid['default'] : uuid;
	http = http && Object.prototype.hasOwnProperty.call(http, 'default') ? http['default'] : http;
	operators = operators && Object.prototype.hasOwnProperty.call(operators, 'default') ? operators['default'] : operators;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
	function createCommonjsModule(fn, basedir, module) {
	    return module = {
	        path: basedir,
	        exports: {},
	        require: function (path, base) {
	            return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	        }
	    }, fn(module, module.exports), module.exports;
	}
	function getCjsExportFromNamespace(n) {
	    return n && n['default'] || n;
	}
	function commonjsRequire() {
	    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */
	var extendStatics = function (d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b)
	            if (b.hasOwnProperty(p))
	                d[p] = b[p]; };
	    return extendStatics(d, b);
	};
	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	var __assign = function () {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s)
	                if (Object.prototype.hasOwnProperty.call(s, p))
	                    t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	function __rest(s, e) {
	    var t = {};
	    for (var p in s)
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	            t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}
	function __decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
	        r = Reflect.decorate(decorators, target, key, desc);
	    else
	        for (var i = decorators.length - 1; i >= 0; i--)
	            if (d = decorators[i])
	                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}
	function __param(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); };
	}
	function __metadata(metadataKey, metadataValue) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
	        return Reflect.metadata(metadataKey, metadataValue);
	}
	function __awaiter(thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try {
	            step(generator.next(value));
	        }
	        catch (e) {
	            reject(e);
	        } }
	        function rejected(value) { try {
	            step(generator["throw"](value));
	        }
	        catch (e) {
	            reject(e);
	        } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}
	function __generator(thisArg, body) {
	    var _ = { label: 0, sent: function () { if (t[0] & 1)
	            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f)
	            throw new TypeError("Generator is already executing.");
	        while (_)
	            try {
	                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
	                    return t;
	                if (y = 0, t)
	                    op = [op[0] & 2, t.value];
	                switch (op[0]) {
	                    case 0:
	                    case 1:
	                        t = op;
	                        break;
	                    case 4:
	                        _.label++;
	                        return { value: op[1], done: false };
	                    case 5:
	                        _.label++;
	                        y = op[1];
	                        op = [0];
	                        continue;
	                    case 7:
	                        op = _.ops.pop();
	                        _.trys.pop();
	                        continue;
	                    default:
	                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
	                            _ = 0;
	                            continue;
	                        }
	                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
	                            _.label = op[1];
	                            break;
	                        }
	                        if (op[0] === 6 && _.label < t[1]) {
	                            _.label = t[1];
	                            t = op;
	                            break;
	                        }
	                        if (t && _.label < t[2]) {
	                            _.label = t[2];
	                            _.ops.push(op);
	                            break;
	                        }
	                        if (t[2])
	                            _.ops.pop();
	                        _.trys.pop();
	                        continue;
	                }
	                op = body.call(thisArg, _);
	            }
	            catch (e) {
	                op = [6, e];
	                y = 0;
	            }
	            finally {
	                f = t = 0;
	            }
	        if (op[0] & 5)
	            throw op[1];
	        return { value: op[0] ? op[1] : void 0, done: true };
	    }
	}
	var __createBinding = Object.create ? (function (o, m, k, k2) {
	    if (k2 === undefined)
	        k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
	}) : (function (o, m, k, k2) {
	    if (k2 === undefined)
	        k2 = k;
	    o[k2] = m[k];
	});
	function __exportStar(m, exports) {
	    for (var p in m)
	        if (p !== "default" && !exports.hasOwnProperty(p))
	            __createBinding(exports, m, p);
	}
	function __values(o) {
	    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	    if (m)
	        return m.call(o);
	    if (o && typeof o.length === "number")
	        return {
	            next: function () {
	                if (o && i >= o.length)
	                    o = void 0;
	                return { value: o && o[i++], done: !o };
	            }
	        };
	    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m)
	        return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
	            ar.push(r.value);
	    }
	    catch (error) {
	        e = { error: error };
	    }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"]))
	                m.call(i);
	        }
	        finally {
	            if (e)
	                throw e.error;
	        }
	    }
	    return ar;
	}
	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}
	function __spreadArrays() {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
	        s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	}
	;
	function __await(v) {
	    return this instanceof __await ? (this.v = v, this) : new __await(v);
	}
	function __asyncGenerator(thisArg, _arguments, generator) {
	    if (!Symbol.asyncIterator)
	        throw new TypeError("Symbol.asyncIterator is not defined.");
	    var g = generator.apply(thisArg, _arguments || []), i, q = [];
	    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	    function verb(n) { if (g[n])
	        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	    function resume(n, v) { try {
	        step(g[n](v));
	    }
	    catch (e) {
	        settle(q[0][3], e);
	    } }
	    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
	    function fulfill(value) { resume("next", value); }
	    function reject(value) { resume("throw", value); }
	    function settle(f, v) { if (f(v), q.shift(), q.length)
	        resume(q[0][0], q[0][1]); }
	}
	function __asyncDelegator(o) {
	    var i, p;
	    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	}
	function __asyncValues(o) {
	    if (!Symbol.asyncIterator)
	        throw new TypeError("Symbol.asyncIterator is not defined.");
	    var m = o[Symbol.asyncIterator], i;
	    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
	}
	function __makeTemplateObject(cooked, raw) {
	    if (Object.defineProperty) {
	        Object.defineProperty(cooked, "raw", { value: raw });
	    }
	    else {
	        cooked.raw = raw;
	    }
	    return cooked;
	}
	;
	var __setModuleDefault = Object.create ? (function (o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function (o, v) {
	    o["default"] = v;
	};
	function __importStar(mod) {
	    if (mod && mod.__esModule)
	        return mod;
	    var result = {};
	    if (mod != null)
	        for (var k in mod)
	            if (Object.hasOwnProperty.call(mod, k))
	                __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	}
	function __importDefault(mod) {
	    return (mod && mod.__esModule) ? mod : { default: mod };
	}
	function __classPrivateFieldGet(receiver, privateMap) {
	    if (!privateMap.has(receiver)) {
	        throw new TypeError("attempted to get private field on non-instance");
	    }
	    return privateMap.get(receiver);
	}
	function __classPrivateFieldSet(receiver, privateMap, value) {
	    if (!privateMap.has(receiver)) {
	        throw new TypeError("attempted to set private field on non-instance");
	    }
	    privateMap.set(receiver, value);
	    return value;
	}

	var tslib_es6 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		__extends: __extends,
		get __assign () { return __assign; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__metadata: __metadata,
		__awaiter: __awaiter,
		__generator: __generator,
		__createBinding: __createBinding,
		__exportStar: __exportStar,
		__values: __values,
		__read: __read,
		__spread: __spread,
		__spreadArrays: __spreadArrays,
		__await: __await,
		__asyncGenerator: __asyncGenerator,
		__asyncDelegator: __asyncDelegator,
		__asyncValues: __asyncValues,
		__makeTemplateObject: __makeTemplateObject,
		__importStar: __importStar,
		__importDefault: __importDefault,
		__classPrivateFieldGet: __classPrivateFieldGet,
		__classPrivateFieldSet: __classPrivateFieldSet
	});

	var worldskillsAngularLib_service = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.WorldskillsAngularLibService = void 0;
	    var i0 = core;
	    var WorldskillsAngularLibService = /** @class */ (function () {
	        function WorldskillsAngularLibService() {
	            // default configuration
	            this.appConfigSubject = new rxjs.BehaviorSubject({ notAuthorizedRoute: ['/not-authorized'] });
	            this.httpConfigSubject = new rxjs.BehaviorSubject({ encoderUriPatterns: [], authUriPatterns: [] });
	            this.serviceConfigSubject = new rxjs.BehaviorSubject({ appCode: [], apiEndpoint: '' });
	            this.authConfigSubject = new rxjs.BehaviorSubject({});
	        }
	        return WorldskillsAngularLibService;
	    }());
	    exports.WorldskillsAngularLibService = WorldskillsAngularLibService;
	    WorldskillsAngularLibService.ɵfac = function WorldskillsAngularLibService_Factory(t) { return new (t || WorldskillsAngularLibService)(); };
	    WorldskillsAngularLibService.ɵprov = i0.ɵɵdefineInjectable({ token: WorldskillsAngularLibService, factory: WorldskillsAngularLibService.ɵfac, providedIn: 'root' });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(WorldskillsAngularLibService, [{
	                type: core.Injectable,
	                args: [{
	                        providedIn: 'root'
	                    }]
	            }], function () { return []; }, null);
	    })();
	    
	});

	var worldskillsAngularLib_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.WorldskillsAngularLibComponent = void 0;
	    var i0 = core;
	    var WorldskillsAngularLibComponent = /** @class */ (function () {
	        function WorldskillsAngularLibComponent() {
	        }
	        WorldskillsAngularLibComponent.prototype.ngOnInit = function () {
	        };
	        return WorldskillsAngularLibComponent;
	    }());
	    exports.WorldskillsAngularLibComponent = WorldskillsAngularLibComponent;
	    WorldskillsAngularLibComponent.ɵfac = function WorldskillsAngularLibComponent_Factory(t) { return new (t || WorldskillsAngularLibComponent)(); };
	    WorldskillsAngularLibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WorldskillsAngularLibComponent, selectors: [["ws-worldskills-angular-lib"]], decls: 2, vars: 0, template: function WorldskillsAngularLibComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵelementStart(0, "p");
	                i0.ɵɵtext(1, " worldskills-angular-lib works! ");
	                i0.ɵɵelementEnd();
	            }
	        }, encapsulation: 2 });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(WorldskillsAngularLibComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-worldskills-angular-lib',
	                        template: "\n    <p>\n      worldskills-angular-lib works!\n    </p>\n  ",
	                        styles: []
	                    }]
	            }], function () { return []; }, null);
	    })();
	    
	});

	var alert_service = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.AlertService = void 0;
	    var i0 = core;
	    var AlertService = /** @class */ (function () {
	        function AlertService() {
	            this.alerts = [];
	        }
	        AlertService.prototype.remove = function (id) {
	            var index = this.alerts.findIndex(function (item) { return item.id === id; });
	            if (index !== -1) {
	                this.alerts.splice(index, 1);
	            }
	        };
	        AlertService.prototype.setAlert = function (id, type, title, message, closable) {
	            title = title || '';
	            message = message || '';
	            closable = closable || false;
	            this.alerts.push({
	                id: id, type: type, title: title, message: message, closable: closable
	            });
	        };
	        return AlertService;
	    }());
	    exports.AlertService = AlertService;
	    AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
	    AlertService.ɵprov = i0.ɵɵdefineInjectable({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(AlertService, [{
	                type: core.Injectable,
	                args: [{
	                        providedIn: 'root'
	                    }]
	            }], function () { return []; }, null);
	    })();
	    
	});

	var alert_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.AlertComponent = void 0;
	    var i0 = core;
	    function AlertComponent_div_0_h4_1_button_2_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r6_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "button", 6);
	            i0.ɵɵlistener("click", function AlertComponent_div_0_h4_1_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(3); return ctx_r5.dismiss(); });
	            i0.ɵɵelementStart(1, "span", 7);
	            i0.ɵɵtext(2, "\u00D7");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	    }
	    function AlertComponent_div_0_h4_1_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "h4", 5);
	            i0.ɵɵtext(1);
	            i0.ɵɵtemplate(2, AlertComponent_div_0_h4_1_button_2_Template, 3, 0, "button", 4);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r1 = i0.ɵɵnextContext(2);
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate1(" ", ctx_r1.alert.title, " ");
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", ctx_r1.canClose());
	        }
	    }
	    function AlertComponent_div_0_span_2_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "span");
	            i0.ɵɵtext(1);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r2 = i0.ɵɵnextContext(2);
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate(ctx_r2.alert.message);
	        }
	    }
	    function AlertComponent_div_0_button_3_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r8_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "button", 6);
	            i0.ɵɵlistener("click", function AlertComponent_div_0_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.dismiss(); });
	            i0.ɵɵelementStart(1, "span", 7);
	            i0.ɵɵtext(2, "\u00D7");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	    }
	    function AlertComponent_div_0_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "div", 1);
	            i0.ɵɵtemplate(1, AlertComponent_div_0_h4_1_Template, 3, 2, "h4", 2);
	            i0.ɵɵtemplate(2, AlertComponent_div_0_span_2_Template, 2, 1, "span", 3);
	            i0.ɵɵtemplate(3, AlertComponent_div_0_button_3_Template, 3, 0, "button", 4);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r0 = i0.ɵɵnextContext();
	            i0.ɵɵclassMapInterpolate1("alert ", ctx_r0.alert.type, "  alert-dismissible");
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", ctx_r0.hasTitle());
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", ctx_r0.hasMessage());
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", ctx_r0.canClose() && !ctx_r0.hasTitle());
	        }
	    }
	    var AlertComponent = /** @class */ (function () {
	        function AlertComponent(alertService) {
	            this.alertService = alertService;
	        }
	        // tslint:disable-next-line:typedef
	        AlertComponent.prototype.ngOnInit = function () {
	        };
	        // tslint:disable-next-line:typedef use-lifecycle-interface
	        AlertComponent.prototype.ngOnChanges = function () {
	        };
	        AlertComponent.prototype.hasMessage = function () {
	            return this.alert.message && this.alert.message.length > 0;
	        };
	        AlertComponent.prototype.hasTitle = function () {
	            return this.alert.title && this.alert.title.length > 0;
	        };
	        AlertComponent.prototype.canClose = function () {
	            return this.alert.closable;
	        };
	        AlertComponent.prototype.dismiss = function () {
	            this.alertService.remove(this.alert.id);
	        };
	        return AlertComponent;
	    }());
	    exports.AlertComponent = AlertComponent;
	    AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(i0.ɵɵdirectiveInject(alert_service.AlertService)); };
	    AlertComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["ws-alert"]], inputs: { alert: "alert" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"], ["class", "alert-heading", 4, "ngIf"], [4, "ngIf"], ["type", "button", "class", "close", "data-dismiss", "alert", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "alert-heading"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function AlertComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵtemplate(0, AlertComponent_div_0_Template, 4, 6, "div", 0);
	            }
	            if (rf & 2) {
	                i0.ɵɵproperty("ngIf", ctx.alert);
	            }
	        }, directives: [common.NgIf], styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(AlertComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-alert',
	                        templateUrl: './alert.component.html',
	                        styleUrls: ['./alert.component.css']
	                    }]
	            }], function () { return [{ type: alert_service.AlertService }]; }, { alert: [{
	                    type: core.Input
	                }] });
	    })();
	    
	});

	var alerts_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.AlertsComponent = void 0;
	    var i0 = core;
	    function AlertsComponent_div_0_ws_alert_1_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelement(0, "ws-alert", 3);
	        }
	        if (rf & 2) {
	            var item_r2 = ctx.$implicit;
	            i0.ɵɵproperty("alert", item_r2);
	        }
	    }
	    function AlertsComponent_div_0_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "div", 1);
	            i0.ɵɵtemplate(1, AlertsComponent_div_0_ws_alert_1_Template, 1, 1, "ws-alert", 2);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r0 = i0.ɵɵnextContext();
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngForOf", ctx_r0.alertService.alerts);
	        }
	    }
	    var AlertsComponent = /** @class */ (function () {
	        function AlertsComponent(alertService) {
	            this.alertService = alertService;
	        }
	        // tslint:disable-next-line:typedef
	        AlertsComponent.prototype.ngOnInit = function () {
	        };
	        Object.defineProperty(AlertsComponent.prototype, "hasAlerts", {
	            get: function () {
	                return this.alertService.alerts.length > 0;
	            },
	            enumerable: false,
	            configurable: true
	        });
	        return AlertsComponent;
	    }());
	    exports.AlertsComponent = AlertsComponent;
	    AlertsComponent.ɵfac = function AlertsComponent_Factory(t) { return new (t || AlertsComponent)(i0.ɵɵdirectiveInject(alert_service.AlertService)); };
	    AlertsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertsComponent, selectors: [["ws-alerts"]], decls: 1, vars: 1, consts: [["class", "alerts", 4, "ngIf"], [1, "alerts"], [3, "alert", 4, "ngFor", "ngForOf"], [3, "alert"]], template: function AlertsComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵtemplate(0, AlertsComponent_div_0_Template, 2, 1, "div", 0);
	            }
	            if (rf & 2) {
	                i0.ɵɵproperty("ngIf", ctx.hasAlerts);
	            }
	        }, directives: [common.NgIf, common.NgForOf, alert_component.AlertComponent], styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(AlertsComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-alerts',
	                        templateUrl: './alerts.component.html',
	                        styleUrls: ['./alerts.component.css']
	                    }]
	            }], function () { return [{ type: alert_service.AlertService }]; }, null);
	    })();
	    
	});

	var puppeteerBanner_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.PuppeteerBannerComponent = void 0;
	    var i0 = core;
	    function PuppeteerBannerComponent_div_0_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "div", 1);
	            i0.ɵɵtext(1);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r0 = i0.ɵɵnextContext();
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate4(" ", ctx_r0.currentUser.puppeteer.first_name, " ", ctx_r0.currentUser.puppeteer.last_name, " logged in as ", ctx_r0.currentUser.firstName, " ", ctx_r0.currentUser.lastName, "\n");
	        }
	    }
	    var PuppeteerBannerComponent = /** @class */ (function () {
	        function PuppeteerBannerComponent() {
	        }
	        PuppeteerBannerComponent.prototype.ngOnInit = function () {
	        };
	        return PuppeteerBannerComponent;
	    }());
	    exports.PuppeteerBannerComponent = PuppeteerBannerComponent;
	    PuppeteerBannerComponent.ɵfac = function PuppeteerBannerComponent_Factory(t) { return new (t || PuppeteerBannerComponent)(); };
	    PuppeteerBannerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PuppeteerBannerComponent, selectors: [["ws-puppeteer-banner"]], inputs: { currentUser: "currentUser" }, decls: 1, vars: 1, consts: [["style", "background-color: #D51067; padding: 10px 20px; color: #fff; text-align: center;", 4, "ngIf"], [2, "background-color", "#D51067", "padding", "10px 20px", "color", "#fff", "text-align", "center"]], template: function PuppeteerBannerComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵtemplate(0, PuppeteerBannerComponent_div_0_Template, 2, 4, "div", 0);
	            }
	            if (rf & 2) {
	                i0.ɵɵproperty("ngIf", ctx.currentUser && ctx.currentUser.puppeteer);
	            }
	        }, directives: [common.NgIf], styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(PuppeteerBannerComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-puppeteer-banner',
	                        templateUrl: './puppeteer-banner.component.html',
	                        styleUrls: ['./puppeteer-banner.component.css']
	                    }]
	            }], function () { return []; }, { currentUser: [{
	                    type: core.Input
	                }] });
	    })();
	    
	});

	var stagingBanner_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.StagingBannerComponent = void 0;
	    var i0 = core;
	    var StagingBannerComponent = /** @class */ (function () {
	        function StagingBannerComponent() {
	        }
	        StagingBannerComponent.prototype.ngOnInit = function () {
	        };
	        return StagingBannerComponent;
	    }());
	    exports.StagingBannerComponent = StagingBannerComponent;
	    StagingBannerComponent.ɵfac = function StagingBannerComponent_Factory(t) { return new (t || StagingBannerComponent)(); };
	    StagingBannerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StagingBannerComponent, selectors: [["ws-staging-banner"]], decls: 2, vars: 0, consts: [[2, "background-color", "#f0ad4e", "padding", "10px 20px", "color", "#fff", "text-align", "center"]], template: function StagingBannerComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵelementStart(0, "div", 0);
	                i0.ɵɵtext(1, "This is the staging environment. Changes in this environment might get overwritten.");
	                i0.ɵɵelementEnd();
	            }
	        }, styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(StagingBannerComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-staging-banner',
	                        templateUrl: './staging-banner.component.html',
	                        styleUrls: ['./staging-banner.component.css']
	                    }]
	            }], function () { return []; }, null);
	    })();
	    
	});

	var array_util = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.ArrayUtil = void 0;
	    var ArrayUtil = /** @class */ (function () {
	        function ArrayUtil() {
	        }
	        // since array concat doesn't trigger UI updates
	        ArrayUtil.pushMany = function (first, second) {
	            second.forEach(function (item) { return first.push(item); });
	            return first;
	        };
	        ArrayUtil.dedupePrimitive = function (arr) {
	            var clean = [];
	            arr.forEach(function (item) {
	                if (clean.indexOf(item) === -1) {
	                    clean.push(item);
	                }
	            });
	            return clean;
	        };
	        ArrayUtil.isArray = function (obj) {
	            return toString.call(obj) === '[object Array]';
	        };
	        return ArrayUtil;
	    }());
	    exports.ArrayUtil = ArrayUtil;
	    
	});

	var generic_util = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.GenericUtil = void 0;
	    var GenericUtil = /** @class */ (function () {
	        function GenericUtil() {
	        }
	        GenericUtil.isNullOrUndefined = function (obj) {
	            return obj === undefined || obj === null;
	        };
	        GenericUtil.getValueOrDefault = function (value, defaultValue) {
	            return GenericUtil.isNullOrUndefined(value) ? defaultValue : value;
	        };
	        return GenericUtil;
	    }());
	    exports.GenericUtil = GenericUtil;
	    
	});

	var breadcrumbs_service = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.BreadcrumbsService = void 0;
	    var i0 = core;
	    var BreadcrumbsService = /** @class */ (function () {
	        function BreadcrumbsService() {
	            this.breadcrumbs = [];
	            this.replacements = [];
	            this.breadcrumbsSubject = new rxjs.BehaviorSubject([]);
	        }
	        BreadcrumbsService.prototype.build = function (route, url) {
	            var _this = this;
	            if (url === void 0) { url = ''; }
	            if (route.outlet === this.targetOutlet) {
	                var path = route.snapshot.url.map(function (segment) { return segment.path; }).join('/');
	                url = url + "/" + path;
	                this.isAtHome = path === this.homeItemRoute.replace('/', '');
	                if (route.snapshot.data.hasOwnProperty('breadcrumb')) {
	                    var breadcrumb_1 = {
	                        key: route.snapshot.data.breadcrumb.key,
	                        label: route.snapshot.data.breadcrumb.label,
	                        params: route.snapshot.params,
	                        url: url
	                    };
	                    // handle key replacements before breadcrumbs are initialized
	                    var replacementIndex = this.replacements.findIndex(function (r) { return r.key === breadcrumb_1.label; });
	                    if (replacementIndex !== -1) {
	                        breadcrumb_1.label = this.replacements[replacementIndex].value;
	                    }
	                    this.breadcrumbs.push(breadcrumb_1);
	                    this.breadcrumbsSubject.next(this.breadcrumbs);
	                }
	                // nothing to do
	                if (route.children.length === 0) {
	                    return;
	                }
	                route.children.forEach(function (child) {
	                    _this.build(child, url);
	                });
	            }
	        };
	        BreadcrumbsService.prototype.createOrUpdateReplacement = function (key, value) {
	            var index = this.replacements.findIndex(function (x) { return x.key === key; });
	            if (index === -1) {
	                var replacement = { key: key, value: value };
	                this.replacements.push(replacement);
	                index = this.replacements.findIndex(function (x) { return x.key === key; });
	            }
	            else {
	                this.replacements[index].value = value;
	            }
	            return index;
	        };
	        BreadcrumbsService.prototype.replaceLabel = function (key, value) {
	            var _this = this;
	            var replacementIndex = this.createOrUpdateReplacement(key, value);
	            if (generic_util.GenericUtil.isNullOrUndefined(this.breadcrumbs)) {
	                return;
	            }
	            if (this.breadcrumbs.length === 0) {
	                return;
	            }
	            this.breadcrumbs.forEach(function (b, i) {
	                if (b.key === key) {
	                    _this.breadcrumbs[i].label = value;
	                }
	            });
	            this.breadcrumbsSubject.next(this.breadcrumbs);
	        };
	        // this method should only be used after the breadcrumb is initialized
	        BreadcrumbsService.prototype.remove = function (key) {
	            var index = this.breadcrumbs.findIndex(function (x) { return x.key === key; });
	            if (index !== -1) {
	                this.breadcrumbs.splice(index, 1);
	                this.breadcrumbsSubject.next(this.breadcrumbs);
	            }
	        };
	        // this method should only be used after the breadcrumb is initialized
	        BreadcrumbsService.prototype.add = function (breadcrumb) {
	            var index = this.breadcrumbs.findIndex(function (x) { return x.key === breadcrumb.key; });
	            if (index !== -1) {
	                rxjs.throwError("key \"" + breadcrumb.key + "\" already exists");
	                return;
	            }
	            this.breadcrumbs.push(breadcrumb);
	            this.breadcrumbsSubject.next(this.breadcrumbs);
	        };
	        return BreadcrumbsService;
	    }());
	    exports.BreadcrumbsService = BreadcrumbsService;
	    BreadcrumbsService.ɵfac = function BreadcrumbsService_Factory(t) { return new (t || BreadcrumbsService)(); };
	    BreadcrumbsService.ɵprov = i0.ɵɵdefineInjectable({ token: BreadcrumbsService, factory: BreadcrumbsService.ɵfac, providedIn: 'root' });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(BreadcrumbsService, [{
	                type: core.Injectable,
	                args: [{
	                        providedIn: 'root'
	                    }]
	            }], function () { return []; }, null);
	    })();
	    
	});

	var breadcrumbs_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.BreadcrumbsComponent = void 0;
	    var i0 = core;
	    var i2 = router;
	    function BreadcrumbsComponent_nav_0_li_2_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "li", 5);
	            i0.ɵɵelementStart(1, "a", 6);
	            i0.ɵɵtext(2);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r1 = i0.ɵɵnextContext(2);
	            i0.ɵɵadvance(1);
	            i0.ɵɵpropertyInterpolate("href", ctx_r1.homeItemRoute, i0.ɵɵsanitizeUrl);
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate(ctx_r1.homeItemText);
	        }
	    }
	    function BreadcrumbsComponent_nav_0_li_3_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "li", 5);
	            i0.ɵɵtext(1);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r2 = i0.ɵɵnextContext(2);
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate1(" ", ctx_r2.homeItemText, " ");
	        }
	    }
	    var _c0 = function (a0, a1) { return [a0, a1]; };
	    function BreadcrumbsComponent_nav_0_li_4_a_1_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "a", 9);
	            i0.ɵɵtext(1);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var breadcrumb_r4 = i0.ɵɵnextContext().$implicit;
	            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(2, _c0, breadcrumb_r4.url, breadcrumb_r4.params));
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate1(" ", breadcrumb_r4.label, " ");
	        }
	    }
	    function BreadcrumbsComponent_nav_0_li_4_span_2_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "span");
	            i0.ɵɵtext(1);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var breadcrumb_r4 = i0.ɵɵnextContext().$implicit;
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate1(" ", breadcrumb_r4.label, " ");
	        }
	    }
	    function BreadcrumbsComponent_nav_0_li_4_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "li");
	            i0.ɵɵtemplate(1, BreadcrumbsComponent_nav_0_li_4_a_1_Template, 2, 5, "a", 7);
	            i0.ɵɵtemplate(2, BreadcrumbsComponent_nav_0_li_4_span_2_Template, 2, 1, "span", 8);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var last_r5 = ctx.last;
	            i0.ɵɵclassMapInterpolate1("breadcrumb-item ", last_r5 ? "active" : "", "");
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", !last_r5);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", last_r5);
	        }
	    }
	    function BreadcrumbsComponent_nav_0_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "nav", 1);
	            i0.ɵɵelementStart(1, "ol", 2);
	            i0.ɵɵtemplate(2, BreadcrumbsComponent_nav_0_li_2_Template, 3, 2, "li", 3);
	            i0.ɵɵtemplate(3, BreadcrumbsComponent_nav_0_li_3_Template, 2, 1, "li", 3);
	            i0.ɵɵtemplate(4, BreadcrumbsComponent_nav_0_li_4_Template, 3, 5, "li", 4);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r0 = i0.ɵɵnextContext();
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("ngIf", ctx_r0.showHomeItem && !ctx_r0.isAtHome);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", ctx_r0.showHomeItem && ctx_r0.isAtHome);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngForOf", ctx_r0.breadcrumbs);
	        }
	    }
	    var BreadcrumbsComponent = /** @class */ (function () {
	        function BreadcrumbsComponent(service, router, route) {
	            this.service = service;
	            this.router = router;
	            this.route = route;
	        }
	        // tslint:disable-next-line:typedef
	        BreadcrumbsComponent.prototype.ngOnInit = function () {
	            var _this = this;
	            // listen for dev changes to the breadcrumbs
	            this.replacementSubscription = this.service.breadcrumbsSubject.subscribe(function (next) {
	                _this.breadcrumbs = [];
	                array_util.ArrayUtil.pushMany(_this.breadcrumbs, next);
	            });
	            // init
	            this.isAtHome = false;
	            this.service.homeItemRoute = this.homeItemRoute;
	            this.service.targetOutlet = 'primary';
	            this.service.build(this.route.root);
	            // rebuild on nav change
	            this.rebuildSubscription = this.router.events.subscribe(function (event) {
	                if (event instanceof router.NavigationEnd) {
	                    _this.service.build(_this.route.root);
	                    _this.isAtHome = _this.service.isAtHome;
	                }
	            });
	        };
	        // tslint:disable-next-line:use-lifecycle-interface typedef
	        BreadcrumbsComponent.prototype.ngOnChanges = function () {
	        };
	        // tslint:disable-next-line:use-lifecycle-interface typedef
	        BreadcrumbsComponent.prototype.ngOnDestroy = function () {
	            if (this.replacementSubscription) {
	                this.replacementSubscription.unsubscribe();
	            }
	            if (this.rebuildSubscription) {
	                this.rebuildSubscription.unsubscribe();
	            }
	        };
	        return BreadcrumbsComponent;
	    }());
	    exports.BreadcrumbsComponent = BreadcrumbsComponent;
	    BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(i0.ɵɵdirectiveInject(breadcrumbs_service.BreadcrumbsService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
	    BreadcrumbsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BreadcrumbsComponent, selectors: [["ws-breadcrumbs"]], inputs: { showHomeItem: "showHomeItem", homeItemRoute: "homeItemRoute", homeItemText: "homeItemText" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["aria-label", "breadcrumb", 4, "ngIf"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["class", "breadcrumb-item", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "href"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"]], template: function BreadcrumbsComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵtemplate(0, BreadcrumbsComponent_nav_0_Template, 5, 3, "nav", 0);
	            }
	            if (rf & 2) {
	                i0.ɵɵproperty("ngIf", ctx.breadcrumbs);
	            }
	        }, directives: [common.NgIf, common.NgForOf], styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(BreadcrumbsComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-breadcrumbs',
	                        templateUrl: './breadcrumbs.component.html',
	                        styleUrls: ['./breadcrumbs.component.css']
	                    }]
	            }], function () { return [{ type: breadcrumbs_service.BreadcrumbsService }, { type: i2.Router }, { type: i2.ActivatedRoute }]; }, { showHomeItem: [{
	                    type: core.Input
	                }], homeItemRoute: [{
	                    type: core.Input
	                }], homeItemText: [{
	                    type: core.Input
	                }] });
	    })();
	    
	});

	var wordmark_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.WordmarkComponent = void 0;
	    var i0 = core;
	    var WordmarkComponent = /** @class */ (function () {
	        function WordmarkComponent() {
	        }
	        WordmarkComponent.prototype.ngOnInit = function () {
	        };
	        return WordmarkComponent;
	    }());
	    exports.WordmarkComponent = WordmarkComponent;
	    WordmarkComponent.ɵfac = function WordmarkComponent_Factory(t) { return new (t || WordmarkComponent)(); };
	    WordmarkComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WordmarkComponent, selectors: [["ws-wordmark"]], decls: 14, vars: 0, consts: [["width", "115px", "height", "22px", "viewBox", "0 0 220 42", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 0, "xmlns", "serif", "http://www.serif.com/", "aria-label", "WorldSkills", 1, "d-inline-block", "align-baseline", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "1.41421"], ["d", "M52.271,39.434c-5.36,0 -8.958,-4.397 -8.958,-10.943c0,-6.546 3.598,-10.945 8.958,-10.945c5.358,0 8.959,4.399 8.959,10.945c0,6.546 -3.601,10.943 -8.959,10.943Zm0,-24.453c-9.152,0 -12.397,7.275 -12.397,13.51c0,6.233 3.245,13.509 12.397,13.509c9.151,0 12.398,-7.276 12.398,-13.509c0,-6.235 -3.247,-13.51 -12.398,-13.51Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M70.618,19.724l0,-4.232l-2.916,0l0.003,25.798l3.122,0l0,-12.745l-0.006,-0.165c0.006,-4.753 1.352,-10.434 7.767,-10.434l0.975,0.046l0.012,-0.101l0.156,-3.009l-0.363,-0.002c-4.333,0 -7.269,1.636 -8.75,4.844Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M134.06,20.521c-2.152,-0.71 -3.726,-1.121 -6.297,-1.121c-1.89,0 -4.145,0.664 -4.145,2.906c0,4.179 12.225,1.529 12.225,11.001c0,6.116 -5.614,8.562 -11.333,8.562c-2.68,0 -5.407,-0.457 -7.977,-1.119l0.419,-5.607c2.203,1.069 4.512,1.733 6.924,1.733c1.788,0 4.62,-0.664 4.62,-3.209c0,-5.146 -12.226,-1.632 -12.226,-11.107c0,-5.653 5.09,-8.153 10.599,-8.153c3.306,0 5.46,0.512 7.662,0.97l-0.471,5.144Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["x", "166.803", "y", "15.051", "width", "7.034", "height", "26.239", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M217.817,20.521c-2.151,-0.71 -3.725,-1.121 -6.296,-1.121c-1.892,0 -4.146,0.664 -4.146,2.906c0,4.179 12.225,1.529 12.225,11.001c0,6.116 -5.613,8.562 -11.333,8.562c-2.678,0 -5.405,-0.457 -7.977,-1.119l0.42,-5.607c2.203,1.069 4.513,1.733 6.926,1.733c1.785,0 4.619,-0.664 4.619,-3.209c0,-5.146 -12.227,-1.632 -12.227,-11.107c0,-5.653 5.09,-8.153 10.602,-8.153c3.305,0 5.454,0.512 7.659,0.97l-0.472,5.144Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M153.067,26.813l9.962,-11.762l-8.292,0l-8.394,10.497l-0.106,0l0,-24.614l-7.032,2.147l0,38.209l7.032,0l0,-12.737l0.106,0l9.027,12.737l8.919,0l-11.222,-14.477Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M101.041,39.334c-7.234,0 -8.017,-7.652 -8.017,-10.942c0,-3.292 0.783,-10.943 8.017,-10.943c5.537,0 8.017,5.495 8.017,10.943c0,5.447 -2.48,10.942 -8.017,10.942Zm11.012,-36.961l-2.995,0.917l0,15.951c-0.652,-1.091 -3.088,-4.428 -8.543,-4.362c-9.031,0.115 -10.927,7.409 -10.927,13.513c0,8.332 4.187,13.512 10.929,13.512c4.014,0 6.73,-1.48 8.541,-4.615l0,4.001l3.121,0l0,-38.956l-0.126,0.039Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M85.984,2.376l-2.997,0.912l0,38.003l3.123,0l0,-38.956l-0.126,0.041Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M178.373,3.081l0,38.209l7.031,0l0,-40.357l-7.031,2.148Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M189.455,3.081l-0.004,0l0,38.209l7.034,0l0,-40.357l-7.03,2.148Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M174.384,5.257c0,-2.165 -1.756,-3.917 -3.917,-3.917c-2.161,0 -3.915,1.752 -3.915,3.917c0,2.163 1.754,3.917 3.915,3.917c2.161,0 3.917,-1.754 3.917,-3.917Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M3.352,15.492l-3.352,0l0.042,0.128c0.16,0.487 8.402,25.375 8.48,25.603l0.022,0.067l3.856,0c0,0 7.249,-22.333 7.292,-22.468l0.239,0c0.045,0.135 7.294,22.468 7.294,22.468l3.858,0l8.753,-25.798l-3.113,0c0,0 -7.354,22.333 -7.4,22.466l-0.238,0c-0.042,-0.133 -7.082,-22.466 -7.082,-22.466l-3.857,0c0,0 -7.407,22.333 -7.453,22.466l-0.237,0c-0.042,-0.136 -7.032,-22.466 -7.032,-22.466l-0.072,0Z", 2, "fill", "#fff", "fill-rule", "nonzero"]], template: function WordmarkComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵnamespaceSVG();
	                i0.ɵɵelementStart(0, "svg", 0);
	                i0.ɵɵelementStart(1, "g");
	                i0.ɵɵelement(2, "path", 1);
	                i0.ɵɵelement(3, "path", 2);
	                i0.ɵɵelement(4, "path", 3);
	                i0.ɵɵelement(5, "rect", 4);
	                i0.ɵɵelement(6, "path", 5);
	                i0.ɵɵelement(7, "path", 6);
	                i0.ɵɵelement(8, "path", 7);
	                i0.ɵɵelement(9, "path", 8);
	                i0.ɵɵelement(10, "path", 9);
	                i0.ɵɵelement(11, "path", 10);
	                i0.ɵɵelement(12, "path", 11);
	                i0.ɵɵelement(13, "path", 12);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	            }
	        }, styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(WordmarkComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-wordmark',
	                        templateUrl: './wordmark.component.html',
	                        styleUrls: ['./wordmark.component.css']
	                    }]
	            }], function () { return []; }, null);
	    })();
	    
	});

	var menuAccess_pipe = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.MenuAccessPipe = void 0;
	    var i0 = core;
	    var MenuAccessPipe = /** @class */ (function () {
	        function MenuAccessPipe() {
	        }
	        MenuAccessPipe.prototype.transform = function (items, isLoggedIn, roles) {
	            if (items === null || items === undefined) {
	                return [];
	            }
	            return items.filter(function (item) {
	                var e_1, _a;
	                // item doesn't exist, don't display it
	                if (item === undefined || item === null) {
	                    return false;
	                }
	                // item is meant to be hidden
	                if (item.hidden) {
	                    return false;
	                }
	                // item requires a logged in user
	                if (item.requireLogin && !isLoggedIn) {
	                    return false;
	                }
	                // item doesn not require role permissions
	                if (item.requiredRoles.length === 0) {
	                    return true;
	                }
	                // item requires role permissions
	                var show = false;
	                var _loop_1 = function (roleName) {
	                    show = roles.findIndex(function (userRoleName) { return userRoleName === roleName; }) !== -1;
	                    if (show) {
	                        return "break";
	                    }
	                };
	                try {
	                    for (var _b = __values(item.requiredRoles), _c = _b.next(); !_c.done; _c = _b.next()) {
	                        var roleName = _c.value;
	                        var state_1 = _loop_1(roleName);
	                        if (state_1 === "break")
	                            break;
	                    }
	                }
	                catch (e_1_1) { e_1 = { error: e_1_1 }; }
	                finally {
	                    try {
	                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	                    }
	                    finally { if (e_1) throw e_1.error; }
	                }
	                return show;
	            });
	        };
	        return MenuAccessPipe;
	    }());
	    exports.MenuAccessPipe = MenuAccessPipe;
	    MenuAccessPipe.ɵfac = function MenuAccessPipe_Factory(t) { return new (t || MenuAccessPipe)(); };
	    MenuAccessPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "wsMenuAccesssFilter", type: MenuAccessPipe, pure: true });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(MenuAccessPipe, [{
	                type: core.Pipe,
	                args: [{
	                        name: 'wsMenuAccesssFilter'
	                    }]
	            }], null, null);
	    })();
	    
	});

	var header_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.HeaderComponent = void 0;
	    var i0 = core;
	    var _c0 = function (a0, a1) { return [a0, a1]; };
	    function HeaderComponent_li_10_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "li");
	            i0.ɵɵelementStart(1, "a", 10);
	            i0.ɵɵtext(2);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var item_r3 = ctx.$implicit;
	            var ctx_r0 = i0.ɵɵnextContext();
	            i0.ɵɵclassMapInterpolate1("nav-item ", ctx_r0.isRouteActive(item_r3.url) ? "active" : "", "");
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(5, _c0, item_r3.url, item_r3.params));
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate1(" ", item_r3.label, " ");
	        }
	    }
	    function HeaderComponent_div_12_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r5_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "div", 11);
	            i0.ɵɵelementStart(1, "button", 12);
	            i0.ɵɵtext(2);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(3, "div", 13);
	            i0.ɵɵelementStart(4, "a", 14);
	            i0.ɵɵtext(5);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelement(6, "div", 15);
	            i0.ɵɵelementStart(7, "a", 16);
	            i0.ɵɵlistener("click", function HeaderComponent_div_12_Template_a_click_7_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); ctx_r4.logout(); return false; });
	            i0.ɵɵtext(8, "Logout");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r1 = i0.ɵɵnextContext();
	            i0.ɵɵadvance(2);
	            i0.ɵɵtextInterpolate1(" ", ctx_r1.getInitials(), " ");
	            i0.ɵɵadvance(3);
	            i0.ɵɵtextInterpolate2("", ctx_r1.currentUser.firstName, " ", ctx_r1.currentUser.lastName, "");
	        }
	    }
	    function HeaderComponent_a_13_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r7_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "a", 17);
	            i0.ɵɵlistener("click", function HeaderComponent_a_13_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7_1); var ctx_r6 = i0.ɵɵnextContext(); ctx_r6.login(); return false; });
	            i0.ɵɵtext(1, "Log in");
	            i0.ɵɵelementEnd();
	        }
	    }
	    var HeaderComponent = /** @class */ (function () {
	        function HeaderComponent(router) {
	            this.router = router;
	            this.logoutClick = new core.EventEmitter();
	            this.loginClick = new core.EventEmitter();
	            this.appName = 'Application';
	            this.isLoggedIn = false;
	            this.showLoginAndLogoutButtons = false;
	            this.menuItems = [];
	            this.currentUser = null;
	        }
	        // tslint:disable-next-line:use-life-cycle-interface typedef
	        HeaderComponent.prototype.ngOnInit = function () { };
	        // tslint:disable-next-line:use-lifecycle-interface typedef
	        HeaderComponent.prototype.ngOnChanges = function () { };
	        HeaderComponent.prototype.userRoles = function () {
	            if (this.currentUser === undefined || this.currentUser === null) {
	                return [];
	            }
	            if (this.currentUser.roles === undefined || this.currentUser.roles === null) {
	                return [];
	            }
	            return this.currentUser.roles.map(function (item) {
	                return item.name;
	            });
	        };
	        HeaderComponent.prototype.isRouteActive = function (route) {
	            return route === this.router.url;
	        };
	        HeaderComponent.prototype.login = function () {
	            this.loginClick.emit();
	        };
	        HeaderComponent.prototype.logout = function () {
	            this.logoutClick.emit();
	        };
	        HeaderComponent.prototype.getInitials = function () {
	            var s = '';
	            if (this.currentUser) {
	                if (this.currentUser.first_name) {
	                    s = this.currentUser.first_name.substr(0, 1);
	                }
	                if (this.currentUser.last_name) {
	                    s += this.currentUser.last_name.substr(0, 1);
	                }
	            }
	            return s.toUpperCase();
	        };
	        return HeaderComponent;
	    }());
	    exports.HeaderComponent = HeaderComponent;
	    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(i0.ɵɵdirectiveInject(router.Router)); };
	    HeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["ws-header"]], inputs: { appName: "appName", isLoggedIn: "isLoggedIn", showLoginAndLogoutButtons: "showLoginAndLogoutButtons", menuItems: "menuItems", currentUser: "currentUser" }, outputs: { logoutClick: "logoutClick", loginClick: "loginClick" }, features: [i0.ɵɵNgOnChangesFeature], decls: 14, vars: 8, consts: [[1, "navbar", "navbar-expand-md", "ws-navbar-main", "ws-navbar-stripe", "wsmember-navbar-main", "wsmember-bg-pink"], [1, "container"], ["href", "#", 1, "navbar-brand"], [1, "ml-1", "text-white"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "collapsed"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "dropdown ml-2", 4, "ngIf"], ["class", "btn btn-light btn-sm ml-2 wsi-login", 3, "click", 4, "ngIf"], [1, "nav-link", 3, "routerLink"], [1, "dropdown", "ml-2"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "btn-white", "rounded-pill"], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", "tabindex", "-1", 1, "dropdown-item", "disabled"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "btn", "btn-light", "btn-sm", "ml-2", "wsi-login", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵelementStart(0, "nav", 0);
	                i0.ɵɵelementStart(1, "div", 1);
	                i0.ɵɵelementStart(2, "a", 2);
	                i0.ɵɵelement(3, "ws-wordmark");
	                i0.ɵɵelementStart(4, "span", 3);
	                i0.ɵɵtext(5);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(6, "button", 4);
	                i0.ɵɵtext(7, " Menu ");
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(8, "div", 5);
	                i0.ɵɵelementStart(9, "ul", 6);
	                i0.ɵɵtemplate(10, HeaderComponent_li_10_Template, 3, 8, "li", 7);
	                i0.ɵɵpipe(11, "wsMenuAccesssFilter");
	                i0.ɵɵelementEnd();
	                i0.ɵɵtemplate(12, HeaderComponent_div_12_Template, 9, 3, "div", 8);
	                i0.ɵɵtemplate(13, HeaderComponent_a_13_Template, 2, 0, "a", 9);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	            }
	            if (rf & 2) {
	                i0.ɵɵadvance(5);
	                i0.ɵɵtextInterpolate(ctx.appName);
	                i0.ɵɵadvance(5);
	                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(11, 4, ctx.menuItems, ctx.isLoggedIn, ctx.userRoles()));
	                i0.ɵɵadvance(2);
	                i0.ɵɵproperty("ngIf", ctx.showLoginAndLogoutButtons && ctx.isLoggedIn);
	                i0.ɵɵadvance(1);
	                i0.ɵɵproperty("ngIf", ctx.showLoginAndLogoutButtons && !ctx.isLoggedIn);
	            }
	        }, directives: [ngBootstrap.NgbNavbar, wordmark_component.WordmarkComponent, common.NgForOf, common.NgIf], pipes: [menuAccess_pipe.MenuAccessPipe], styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(HeaderComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-header',
	                        templateUrl: './header.component.html',
	                        styleUrls: ['./header.component.css']
	                    }]
	            }], function () { return [{ type: router.Router }]; }, { appName: [{
	                    type: core.Input
	                }], isLoggedIn: [{
	                    type: core.Input
	                }], showLoginAndLogoutButtons: [{
	                    type: core.Input
	                }], menuItems: [{
	                    type: core.Input
	                }], currentUser: [{
	                    type: core.Input
	                }], logoutClick: [{
	                    type: core.Output
	                }], loginClick: [{
	                    type: core.Output
	                }] });
	    })();
	    
	});

	var logo_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.LogoComponent = void 0;
	    var i0 = core;
	    var LogoComponent = /** @class */ (function () {
	        function LogoComponent() {
	        }
	        LogoComponent.prototype.ngOnInit = function () {
	        };
	        return LogoComponent;
	    }());
	    exports.LogoComponent = LogoComponent;
	    LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
	    LogoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LogoComponent, selectors: [["ws-logo"]], decls: 22, vars: 0, consts: [["width", "110px", "height", "65px", "viewBox", "0 0 220 129", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 0, "xmlns", "serif", "http://www.serif.com/", "aria-label", "WorldSkills", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "1.41421"], ["d", "M52.271,126.434c-5.36,0 -8.958,-4.395 -8.958,-10.942c0,-6.547 3.598,-10.944 8.958,-10.944c5.358,0 8.959,4.397 8.959,10.944c0,6.547 -3.601,10.942 -8.959,10.942Zm0,-24.453c-9.152,0 -12.397,7.276 -12.397,13.511c0,6.232 3.245,13.509 12.397,13.509c9.151,0 12.398,-7.277 12.398,-13.509c0,-6.235 -3.247,-13.511 -12.398,-13.511Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M70.618,106.725l0,-4.232l-2.916,0l0.003,25.798l3.122,0l0,-12.745l-0.006,-0.165c0.006,-4.753 1.352,-10.434 7.767,-10.434l0.975,0.046l0.012,-0.101l0.156,-3.009l-0.363,-0.002c-4.333,0 -7.269,1.636 -8.75,4.844Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M134.06,107.522c-2.152,-0.71 -3.726,-1.121 -6.297,-1.121c-1.89,0 -4.145,0.664 -4.145,2.905c0,4.18 12.225,1.53 12.225,11.001c0,6.117 -5.614,8.564 -11.333,8.564c-2.68,0 -5.407,-0.457 -7.977,-1.12l0.419,-5.607c2.203,1.069 4.512,1.733 6.924,1.733c1.788,0 4.62,-0.664 4.62,-3.209c0,-5.146 -12.226,-1.631 -12.226,-11.107c0,-5.653 5.09,-8.153 10.599,-8.153c3.306,0 5.46,0.512 7.662,0.97l-0.471,5.144Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["x", "166.803", "y", "102.052", "width", "7.034", "height", "26.24", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M217.817,107.522c-2.151,-0.71 -3.725,-1.121 -6.296,-1.121c-1.892,0 -4.146,0.664 -4.146,2.905c0,4.18 12.225,1.53 12.225,11.001c0,6.117 -5.613,8.564 -11.333,8.564c-2.678,0 -5.405,-0.457 -7.977,-1.12l0.42,-5.607c2.203,1.069 4.513,1.733 6.926,1.733c1.785,0 4.619,-0.664 4.619,-3.209c0,-5.146 -12.227,-1.631 -12.227,-11.107c0,-5.653 5.09,-8.153 10.602,-8.153c3.305,0 5.454,0.512 7.659,0.97l-0.472,5.144Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M153.067,113.813l9.962,-11.761l-8.292,0l-8.394,10.497l-0.106,0l0,-24.615l-7.032,2.148l0,38.21l7.032,0l0,-12.738l0.106,0l9.027,12.738l8.919,0l-11.222,-14.479Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M101.041,126.336c-7.234,0 -8.017,-7.653 -8.017,-10.943c0,-3.292 0.783,-10.944 8.017,-10.944c5.537,0 8.017,5.495 8.017,10.944c0,5.448 -2.48,10.943 -8.017,10.943Zm11.012,-36.962l-2.995,0.917l0,15.95c-0.652,-1.091 -3.088,-4.428 -8.543,-4.36c-9.031,0.114 -10.927,7.409 -10.927,13.512c0,8.332 4.187,13.511 10.929,13.511c4.014,0 6.73,-1.479 8.541,-4.613l0,4.001l3.121,0l0,-38.957l-0.126,0.039Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M85.984,89.376l-2.997,0.913l0,38.003l3.123,0l0,-38.957l-0.126,0.041Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M178.373,90.082l0,38.21l7.031,0l0,-40.359l-7.031,2.149Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M189.455,90.082l-0.004,0l0,38.21l7.034,0l0,-40.359l-7.03,2.149Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M174.384,92.257c0,-2.165 -1.756,-3.917 -3.917,-3.917c-2.161,0 -3.915,1.752 -3.915,3.917c0,2.163 1.754,3.917 3.915,3.917c2.161,0 3.917,-1.754 3.917,-3.917Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M3.352,102.493l-3.352,0l0.042,0.129c0.16,0.486 8.402,25.375 8.48,25.601l0.022,0.069l3.856,0c0,0 7.249,-22.333 7.292,-22.469l0.239,0c0.045,0.136 7.294,22.469 7.294,22.469l3.858,0l8.753,-25.799l-3.113,0c0,0 -7.354,22.334 -7.4,22.467l-0.238,0c-0.042,-0.134 -7.082,-22.467 -7.082,-22.467l-3.857,0c0,0 -7.407,22.334 -7.453,22.467l-0.237,0c-0.042,-0.137 -7.032,-22.467 -7.032,-22.467l-0.072,0Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M160.498,44.986c0,0 12.347,-2.186 16.389,-12.002c0,0 71.891,14.725 29.452,53.074c0,0 15.749,-14.828 6.953,-26.691c0,0 4.909,14.726 -14.316,24.645c0,0 41.695,-29.617 -38.478,-39.026Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M199.888,39.615c5.028,2.487 8.548,4.931 10.604,6.536c0.905,-25.738 -17.55,-40.127 -17.55,-40.127c-0.536,1.65 -2.147,3.49 -4.448,4.333c-2.301,0.844 -3.682,3.605 -3.682,3.605c9.019,7.501 13.351,16.659 15.076,25.653Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M174.979,34.807c1.089,-1.627 1.394,-2.744 1.394,-2.744c4.752,0.844 9.016,1.957 12.814,3.202c-7.877,-22.459 -22.526,-34.751 -22.526,-34.751c-0.409,1.177 -4.704,3.324 -7.619,4.603c-2.914,1.278 -2.147,6.698 -2.147,6.698c8.01,6.619 13.838,14.721 18.084,22.992Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M205.115,59.685c-0.991,11.081 -7.571,22.845 -7.571,22.845c4.646,-7.067 7.822,-13.702 9.875,-19.884c-0.576,-1.045 -1.354,-2.031 -2.304,-2.961Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M204.253,58.898c-1.084,-0.931 -2.337,-1.804 -3.726,-2.621c-1.154,11.922 -5.13,20.884 -5.13,20.884c2.3,-2.608 4.064,-6.826 4.064,-6.826c0.077,2.991 -2.378,8.897 -2.378,8.897c4.222,-6.783 6.242,-15.026 7.17,-20.334Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M179.302,82.112c-2.556,-1.377 -6.263,-2.842 -13.881,-8.742c5.766,4.341 15.394,7.115 15.394,7.115c-21.256,-10.789 -25.89,-20.57 -25.89,-20.57c-2.046,-0.066 -3.279,1.232 -4.089,1.677c-0.811,0.444 -3.021,0.406 -3.021,0.406c8.101,13.061 31.487,20.114 31.487,20.114Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M169.793,46.953c-7.062,-1.17 -12.249,-1.622 -12.249,-1.622c2.823,-0.709 5.225,-1.571 7.279,-2.509c-9.939,-7.239 -19.842,-9.021 -19.842,-9.021c0,0 -1.841,0.613 -2.097,3.682c-0.254,3.067 -2.607,3.477 -2.607,3.477c37.121,9.919 42.694,40.495 42.694,40.495c-2.531,-13.805 -7.9,-22.625 -7.9,-22.625c5.676,5.829 9.587,20.632 9.587,20.632c-1.259,-15.301 -7.604,-25.618 -14.865,-32.509Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M180.901,49.165c5.345,16.489 5.446,30.449 5.446,30.449c3.955,-7.668 2.914,-25.309 2.914,-25.309c3.681,7.209 3.221,26.844 3.221,26.844c1.888,-10.318 1.961,-19.753 0.878,-28.245c-3.92,-1.502 -8.228,-2.736 -12.459,-3.739Z", 2, "fill", "#fff", "fill-rule", "nonzero"]], template: function LogoComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵnamespaceSVG();
	                i0.ɵɵelementStart(0, "svg", 0);
	                i0.ɵɵelementStart(1, "g");
	                i0.ɵɵelement(2, "path", 1);
	                i0.ɵɵelement(3, "path", 2);
	                i0.ɵɵelement(4, "path", 3);
	                i0.ɵɵelement(5, "rect", 4);
	                i0.ɵɵelement(6, "path", 5);
	                i0.ɵɵelement(7, "path", 6);
	                i0.ɵɵelement(8, "path", 7);
	                i0.ɵɵelement(9, "path", 8);
	                i0.ɵɵelement(10, "path", 9);
	                i0.ɵɵelement(11, "path", 10);
	                i0.ɵɵelement(12, "path", 11);
	                i0.ɵɵelement(13, "path", 12);
	                i0.ɵɵelement(14, "path", 13);
	                i0.ɵɵelement(15, "path", 14);
	                i0.ɵɵelement(16, "path", 15);
	                i0.ɵɵelement(17, "path", 16);
	                i0.ɵɵelement(18, "path", 17);
	                i0.ɵɵelement(19, "path", 18);
	                i0.ɵɵelement(20, "path", 19);
	                i0.ɵɵelement(21, "path", 20);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	            }
	        }, styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(LogoComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-logo',
	                        templateUrl: './logo.component.html',
	                        styleUrls: ['./logo.component.css']
	                    }]
	            }], function () { return []; }, null);
	    })();
	    
	});

	var footer_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.FooterComponent = void 0;
	    var i0 = core;
	    var _c0 = ["#col1DefaultTemplate"];
	    var _c1 = ["#col6DefaultTemplate"];
	    var _c2 = ["#colDefaultTemplate"];
	    function FooterComponent_ng_template_0_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "h1");
	            i0.ɵɵelementStart(1, "a", 16);
	            i0.ɵɵtext(2, "myWorldSkills");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(3, "ul");
	            i0.ɵɵelementStart(4, "li");
	            i0.ɵɵelementStart(5, "a", 17);
	            i0.ɵɵtext(6, "Who-is-Who");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(7, "li");
	            i0.ɵɵelementStart(8, "a", 18);
	            i0.ɵɵtext(9, "Glossary");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(10, "li");
	            i0.ɵɵelementStart(11, "a", 19);
	            i0.ɵɵtext(12, "Registrations");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(13, "li");
	            i0.ɵɵelementStart(14, "a", 20);
	            i0.ɵɵtext(15, "Forums");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(16, "li");
	            i0.ɵɵelementStart(17, "a", 21);
	            i0.ɵɵtext(18, "Infrastructure Lists");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(19, "li");
	            i0.ɵɵelementStart(20, "a", 22);
	            i0.ɵɵtext(21, "Skill Management");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	    }
	    function FooterComponent_ng_template_2_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "div", 23);
	            i0.ɵɵelementStart(1, "a", 24);
	            i0.ɵɵelement(2, "ws-logo", 25);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	    }
	    function FooterComponent_ng_template_4_Template(rf, ctx) { }
	    function FooterComponent_ng_container_10_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainer(0);
	        }
	    }
	    function FooterComponent_ng_container_12_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainer(0);
	        }
	    }
	    function FooterComponent_ng_container_14_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainer(0);
	        }
	    }
	    function FooterComponent_ng_container_16_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainer(0);
	        }
	    }
	    function FooterComponent_ng_container_18_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainer(0);
	        }
	    }
	    function FooterComponent_ng_container_20_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainer(0);
	        }
	    }
	    function FooterComponent_div_37_a_5_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r16_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "a", 31);
	            i0.ɵɵlistener("click", function FooterComponent_div_37_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r16_1); var language_r14 = ctx.$implicit; var ctx_r15 = i0.ɵɵnextContext(2); ctx_r15.changeLanguage(language_r14); return false; });
	            i0.ɵɵtext(1);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var language_r14 = ctx.$implicit;
	            var ctx_r13 = i0.ɵɵnextContext(2);
	            i0.ɵɵclassProp("active", ctx_r13.isLanguageSelected(language_r14));
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate1(" ", language_r14.name, " ");
	        }
	    }
	    function FooterComponent_div_37_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "div", 26);
	            i0.ɵɵelementStart(1, "div", 27);
	            i0.ɵɵelementStart(2, "button", 28);
	            i0.ɵɵtext(3, " Language ");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(4, "div", 29);
	            i0.ɵɵtemplate(5, FooterComponent_div_37_a_5_Template, 2, 3, "a", 30);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r12 = i0.ɵɵnextContext();
	            i0.ɵɵadvance(5);
	            i0.ɵɵproperty("ngForOf", ctx_r12.languages);
	        }
	    }
	    var FooterComponent = /** @class */ (function () {
	        function FooterComponent() {
	            this.logoutClick = new core.EventEmitter();
	            this.loginClick = new core.EventEmitter();
	            this.languageChange = new core.EventEmitter();
	        }
	        // tslint:disable-next-line:typedef
	        FooterComponent.prototype.ngOnInit = function () {
	            this.date = new Date();
	        };
	        FooterComponent.prototype.login = function () {
	            this.loginClick.emit();
	        };
	        FooterComponent.prototype.logout = function () {
	            this.logoutClick.emit();
	        };
	        FooterComponent.prototype.changeLanguage = function (model) {
	            this.selectedLanguage = model;
	            this.languageChange.emit(model);
	        };
	        FooterComponent.prototype.isLanguageSelected = function (model) {
	            if (generic_util.GenericUtil.isNullOrUndefined(this.selectedLanguage)) {
	                return model.code === 'en';
	            }
	            return model.code === this.selectedLanguage.code;
	        };
	        return FooterComponent;
	    }());
	    exports.FooterComponent = FooterComponent;
	    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
	    FooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["ws-footer"]], viewQuery: function FooterComponent_Query(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵviewQuery(_c0, true);
	                i0.ɵɵviewQuery(_c1, true);
	                i0.ɵɵviewQuery(_c2, true);
	            }
	            if (rf & 2) {
	                var _t;
	                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.col1DefaultTemplate = _t.first);
	                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.col6DefaultTemplate = _t.first);
	                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.colDefaultTemplate = _t.first);
	            }
	        }, inputs: { languages: "languages", selectedLanguage: "selectedLanguage", isLoggedIn: "isLoggedIn", currentUser: "currentUser", col1Template: "col1Template", col2Template: "col2Template", col3Template: "col3Template", col4Template: "col4Template", col5Template: "col5Template", col6Template: "col6Template" }, outputs: { logoutClick: "logoutClick", loginClick: "loginClick", languageChange: "languageChange" }, decls: 38, vars: 11, consts: [["col1DefaultTemplate", ""], ["col6DefaultTemplate", ""], ["colDefaultTemplate", ""], [1, "ws-page-footer"], [1, "container"], [1, "ws-page-footer-row"], [1, "ws-page-footer-col-sm"], [4, "ngTemplateOutlet"], [1, "ws-page-footer-row", "pb-3"], [1, "ws-page-footer-col-lg"], [1, "list-inline", "mt-2"], [1, "list-inline-item"], ["href", "https://worldskills.org/site/privacy/", "target", "_blank"], ["href", "https://worldskills.org/site/terms/", "target", "_blank"], ["href", "https://worldskills.org/site/contact/", "target", "_blank"], ["class", "btn-toolbar justify-content-end", 4, "ngIf"], ["href", "https://worldskills.org/internal/", "target", "_blank"], ["href", "https://worldskills.org/internal/wiw/", "target", "_blank"], ["href", "https://glossary.worldskills.org/", "target", "_blank"], ["href", "https://registrations.worldskills.org/", "target", "_blank"], ["href", "https://forums.worldskills.org/", "target", "_blank"], ["href", "https://il.worldskills.org/", "target", "_blank"], ["href", "https://skill-management.worldskills.org/", "target", "_blank"], [1, "text-right", "mt-5"], ["href", "https://worldskills.org/", "target", "_blank"], ["mode", "default"], [1, "btn-toolbar", "justify-content-end"], [1, "btn-group", "btn-group-sm", "dropup"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-light", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-right"], ["class", "dropdown-item", "href", "#", 3, "active", "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "dropdown-item", 3, "click"]], template: function FooterComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵtemplate(0, FooterComponent_ng_template_0_Template, 22, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(2, FooterComponent_ng_template_2_Template, 3, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(4, FooterComponent_ng_template_4_Template, 0, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵelementStart(6, "footer", 3);
	                i0.ɵɵelementStart(7, "div", 4);
	                i0.ɵɵelementStart(8, "div", 5);
	                i0.ɵɵelementStart(9, "aside", 6);
	                i0.ɵɵtemplate(10, FooterComponent_ng_container_10_Template, 1, 0, "ng-container", 7);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(11, "aside", 6);
	                i0.ɵɵtemplate(12, FooterComponent_ng_container_12_Template, 1, 0, "ng-container", 7);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(13, "aside", 6);
	                i0.ɵɵtemplate(14, FooterComponent_ng_container_14_Template, 1, 0, "ng-container", 7);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(15, "aside", 6);
	                i0.ɵɵtemplate(16, FooterComponent_ng_container_16_Template, 1, 0, "ng-container", 7);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(17, "aside", 6);
	                i0.ɵɵtemplate(18, FooterComponent_ng_container_18_Template, 1, 0, "ng-container", 7);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(19, "aside", 6);
	                i0.ɵɵtemplate(20, FooterComponent_ng_container_20_Template, 1, 0, "ng-container", 7);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(21, "div", 8);
	                i0.ɵɵelementStart(22, "div", 9);
	                i0.ɵɵelementStart(23, "ul", 10);
	                i0.ɵɵelementStart(24, "li", 11);
	                i0.ɵɵtext(25);
	                i0.ɵɵpipe(26, "date");
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(27, "li", 11);
	                i0.ɵɵelementStart(28, "a", 12);
	                i0.ɵɵtext(29, "Privacy");
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(30, "li", 11);
	                i0.ɵɵelementStart(31, "a", 13);
	                i0.ɵɵtext(32, "Terms");
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(33, "li", 11);
	                i0.ɵɵelementStart(34, "a", 14);
	                i0.ɵɵtext(35, "Contact");
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(36, "div", 9);
	                i0.ɵɵtemplate(37, FooterComponent_div_37_Template, 6, 1, "div", 15);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	            }
	            if (rf & 2) {
	                var _r0 = i0.ɵɵreference(1);
	                var _r2 = i0.ɵɵreference(3);
	                var _r4 = i0.ɵɵreference(5);
	                i0.ɵɵadvance(10);
	                i0.ɵɵproperty("ngTemplateOutlet", ctx.col1Template ? ctx.col1Template : _r0);
	                i0.ɵɵadvance(2);
	                i0.ɵɵproperty("ngTemplateOutlet", ctx.col2Template ? ctx.col2Template : _r4);
	                i0.ɵɵadvance(2);
	                i0.ɵɵproperty("ngTemplateOutlet", ctx.col3Template ? ctx.col3Template : _r4);
	                i0.ɵɵadvance(2);
	                i0.ɵɵproperty("ngTemplateOutlet", ctx.col4Template ? ctx.col4Template : _r4);
	                i0.ɵɵadvance(2);
	                i0.ɵɵproperty("ngTemplateOutlet", ctx.col5Template ? ctx.col5Template : _r4);
	                i0.ɵɵadvance(2);
	                i0.ɵɵproperty("ngTemplateOutlet", ctx.col6Template ? ctx.col6Template : _r2);
	                i0.ɵɵadvance(5);
	                i0.ɵɵtextInterpolate1("\u00A9 ", i0.ɵɵpipeBind2(26, 8, ctx.date, "yyyy"), " WorldSkills International");
	                i0.ɵɵadvance(12);
	                i0.ɵɵproperty("ngIf", ctx.languages);
	            }
	        }, directives: [common.NgTemplateOutlet, common.NgIf, logo_component.LogoComponent, common.NgForOf], pipes: [common.DatePipe], styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(FooterComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-footer',
	                        templateUrl: './footer.component.html',
	                        styleUrls: ['./footer.component.css']
	                    }]
	            }], null, { languages: [{
	                    type: core.Input
	                }], selectedLanguage: [{
	                    type: core.Input
	                }], isLoggedIn: [{
	                    type: core.Input
	                }], currentUser: [{
	                    type: core.Input
	                }], col1Template: [{
	                    type: core.Input
	                }], col2Template: [{
	                    type: core.Input
	                }], col3Template: [{
	                    type: core.Input
	                }], col4Template: [{
	                    type: core.Input
	                }], col5Template: [{
	                    type: core.Input
	                }], col6Template: [{
	                    type: core.Input
	                }], logoutClick: [{
	                    type: core.Output
	                }], loginClick: [{
	                    type: core.Output
	                }], languageChange: [{
	                    type: core.Output
	                }], col1DefaultTemplate: [{
	                    type: core.ViewChild,
	                    args: ['#col1DefaultTemplate']
	                }], col6DefaultTemplate: [{
	                    type: core.ViewChild,
	                    args: ['#col6DefaultTemplate']
	                }], colDefaultTemplate: [{
	                    type: core.ViewChild,
	                    args: ['#colDefaultTemplate']
	                }] });
	    })();
	    
	});

	var date_helper = createCommonjsModule(function (module, exports) {
	    "use strict";
	    /**
	     * @license
	     * Copyright Google LLC All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.isDate = exports.isoStringToDate = exports.toDate = exports.formatDate = exports.ISO8601_DATE_REGEX = void 0;
	    // Source: https://github.com/angular/angular/blob/d1ea1f4c7f3358b730b0d94e65b00bc28cae279c/packages/common/src/i18n/format_date.ts
	    exports.ISO8601_DATE_REGEX = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
	    //    1        2       3         4          5          6          7          8  9     10      11
	    var NAMED_FORMATS = {};
	    var DATE_FORMATS_SPLIT = 
	    // tslint:disable-next-line:max-line-length
	    /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
	    var ZoneWidth;
	    (function (ZoneWidth) {
	        ZoneWidth[ZoneWidth["Short"] = 0] = "Short";
	        ZoneWidth[ZoneWidth["ShortGMT"] = 1] = "ShortGMT";
	        ZoneWidth[ZoneWidth["Long"] = 2] = "Long";
	        ZoneWidth[ZoneWidth["Extended"] = 3] = "Extended";
	    })(ZoneWidth || (ZoneWidth = {}));
	    var DateType;
	    (function (DateType) {
	        DateType[DateType["FullYear"] = 0] = "FullYear";
	        DateType[DateType["Month"] = 1] = "Month";
	        DateType[DateType["Date"] = 2] = "Date";
	        DateType[DateType["Hours"] = 3] = "Hours";
	        DateType[DateType["Minutes"] = 4] = "Minutes";
	        DateType[DateType["Seconds"] = 5] = "Seconds";
	        DateType[DateType["FractionalSeconds"] = 6] = "FractionalSeconds";
	        DateType[DateType["Day"] = 7] = "Day";
	    })(DateType || (DateType = {}));
	    var TranslationType;
	    (function (TranslationType) {
	        TranslationType[TranslationType["DayPeriods"] = 0] = "DayPeriods";
	        TranslationType[TranslationType["Days"] = 1] = "Days";
	        TranslationType[TranslationType["Months"] = 2] = "Months";
	        TranslationType[TranslationType["Eras"] = 3] = "Eras";
	    })(TranslationType || (TranslationType = {}));
	    /**
	     * @ngModule CommonModule
	     * @description
	     *
	     * Formats a date according to locale rules.
	     *
	     * @param value The date to format, as a Date, or a number (milliseconds since UTC epoch)
	     * or an [ISO date-time string](https://www.w3.org/TR/NOTE-datetime).
	     * @param format The date-time components to include. See `DatePipe` for details.
	     * @param locale A locale code for the locale format rules to use.
	     * @param timezone The time zone. A time zone offset from GMT (such as `'+0430'`),
	     * or a standard UTC/GMT or continental US time zone abbreviation.
	     * If not specified, uses host system settings.
	     *
	     * @returns The formatted date string.
	     *
	     * @see `DatePipe`
	     * @see [Internationalization (i18n) Guide](https://angular.io/guide/i18n)
	     *
	     * @publicApi
	     */
	    function formatDate(value, format, locale, timezone) {
	        var date = toDate(value);
	        var namedFormat = getNamedFormat(locale, format);
	        format = namedFormat || format;
	        var parts = [];
	        var match;
	        while (format) {
	            match = DATE_FORMATS_SPLIT.exec(format);
	            if (match) {
	                parts = parts.concat(match.slice(1));
	                var part = parts.pop();
	                if (!part) {
	                    break;
	                }
	                format = part;
	            }
	            else {
	                parts.push(format);
	                break;
	            }
	        }
	        var dateTimezoneOffset = date.getTimezoneOffset();
	        if (timezone) {
	            dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
	            date = convertTimezoneToLocal(date, timezone, true);
	        }
	        var text = '';
	        // tslint:disable-next-line:no-shadowed-variable
	        parts.forEach(function (value) {
	            var dateFormatter = getDateFormatter(value);
	            text += dateFormatter ?
	                dateFormatter(date, locale, dateTimezoneOffset) :
	                value === '\'\'' ? '\'' : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
	        });
	        return text;
	    }
	    exports.formatDate = formatDate;
	    function getNamedFormat(locale, format) {
	        var localeId = common.getLocaleId(locale);
	        NAMED_FORMATS[localeId] = NAMED_FORMATS[localeId] || {};
	        if (NAMED_FORMATS[localeId][format]) {
	            return NAMED_FORMATS[localeId][format];
	        }
	        var formatValue = '';
	        switch (format) {
	            case 'shortDate':
	                formatValue = common.getLocaleDateFormat(locale, common.FormatWidth.Short);
	                break;
	            case 'mediumDate':
	                formatValue = common.getLocaleDateFormat(locale, common.FormatWidth.Medium);
	                break;
	            case 'longDate':
	                formatValue = common.getLocaleDateFormat(locale, common.FormatWidth.Long);
	                break;
	            case 'fullDate':
	                formatValue = common.getLocaleDateFormat(locale, common.FormatWidth.Full);
	                break;
	            case 'shortTime':
	                formatValue = common.getLocaleTimeFormat(locale, common.FormatWidth.Short);
	                break;
	            case 'mediumTime':
	                formatValue = common.getLocaleTimeFormat(locale, common.FormatWidth.Medium);
	                break;
	            case 'longTime':
	                formatValue = common.getLocaleTimeFormat(locale, common.FormatWidth.Long);
	                break;
	            case 'fullTime':
	                formatValue = common.getLocaleTimeFormat(locale, common.FormatWidth.Full);
	                break;
	            case 'short':
	                var shortTime = getNamedFormat(locale, 'shortTime');
	                var shortDate = getNamedFormat(locale, 'shortDate');
	                formatValue = formatDateTime(common.getLocaleDateTimeFormat(locale, common.FormatWidth.Short), [shortTime, shortDate]);
	                break;
	            case 'medium':
	                var mediumTime = getNamedFormat(locale, 'mediumTime');
	                var mediumDate = getNamedFormat(locale, 'mediumDate');
	                formatValue = formatDateTime(common.getLocaleDateTimeFormat(locale, common.FormatWidth.Medium), [mediumTime, mediumDate]);
	                break;
	            case 'long':
	                var longTime = getNamedFormat(locale, 'longTime');
	                var longDate = getNamedFormat(locale, 'longDate');
	                formatValue =
	                    formatDateTime(common.getLocaleDateTimeFormat(locale, common.FormatWidth.Long), [longTime, longDate]);
	                break;
	            case 'full':
	                var fullTime = getNamedFormat(locale, 'fullTime');
	                var fullDate = getNamedFormat(locale, 'fullDate');
	                formatValue =
	                    formatDateTime(common.getLocaleDateTimeFormat(locale, common.FormatWidth.Full), [fullTime, fullDate]);
	                break;
	        }
	        if (formatValue) {
	            NAMED_FORMATS[localeId][format] = formatValue;
	        }
	        return formatValue;
	    }
	    // tslint:disable-next-line:variable-name
	    function formatDateTime(str, opt_values) {
	        if (opt_values) {
	            // tslint:disable-next-line:only-arrow-functions
	            str = str.replace(/\{([^}]+)}/g, function (match, key) {
	                return (opt_values != null && key in opt_values) ? opt_values[key] : match;
	            });
	        }
	        return str;
	    }
	    function padNumber(num, digits, minusSign, trim, negWrap) {
	        if (minusSign === void 0) { minusSign = '-'; }
	        var neg = '';
	        if (num < 0 || (negWrap && num <= 0)) {
	            if (negWrap) {
	                num = -num + 1;
	            }
	            else {
	                num = -num;
	                neg = minusSign;
	            }
	        }
	        var strNum = String(num);
	        while (strNum.length < digits) {
	            strNum = '0' + strNum;
	        }
	        if (trim) {
	            strNum = strNum.substr(strNum.length - digits);
	        }
	        return neg + strNum;
	    }
	    function formatFractionalSeconds(milliseconds, digits) {
	        var strMs = padNumber(milliseconds, 3);
	        return strMs.substr(0, digits);
	    }
	    /**
	     * Returns a date formatter that transforms a date into its locale digit representation
	     */
	    function dateGetter(name, size, offset, trim, negWrap) {
	        if (offset === void 0) { offset = 0; }
	        if (trim === void 0) { trim = false; }
	        if (negWrap === void 0) { negWrap = false; }
	        // tslint:disable-next-line:only-arrow-functions
	        return function (date, locale) {
	            var part = getDatePart(name, date);
	            if (offset > 0 || part > -offset) {
	                part += offset;
	            }
	            if (name === DateType.Hours) {
	                if (part === 0 && offset === -12) {
	                    part = 12;
	                }
	            }
	            else if (name === DateType.FractionalSeconds) {
	                return formatFractionalSeconds(part, size);
	            }
	            var localeMinus = common.getLocaleNumberSymbol(locale, common.NumberSymbol.MinusSign);
	            return padNumber(part, size, localeMinus, trim, negWrap);
	        };
	    }
	    function getDatePart(part, date) {
	        switch (part) {
	            case DateType.FullYear:
	                return date.getFullYear();
	            case DateType.Month:
	                return date.getMonth();
	            case DateType.Date:
	                return date.getDate();
	            case DateType.Hours:
	                return date.getHours();
	            case DateType.Minutes:
	                return date.getMinutes();
	            case DateType.Seconds:
	                return date.getSeconds();
	            case DateType.FractionalSeconds:
	                return date.getMilliseconds();
	            case DateType.Day:
	                return date.getDay();
	            default:
	                throw new Error("Unknown DateType value \"" + part + "\".");
	        }
	    }
	    /**
	     * Returns a date formatter that transforms a date into its locale string representation
	     */
	    function dateStrGetter(name, width, form, extended) {
	        if (form === void 0) { form = common.FormStyle.Format; }
	        if (extended === void 0) { extended = false; }
	        // tslint:disable-next-line:only-arrow-functions
	        return function (date, locale) {
	            return getDateTranslation(date, locale, name, width, form, extended);
	        };
	    }
	    /**
	     * Returns the locale translation of a date for a given form, type and width
	     */
	    // tslint:disable-next-line:typedef
	    function getDateTranslation(date, locale, name, width, form, extended) {
	        switch (name) {
	            case TranslationType.Months:
	                return common.getLocaleMonthNames(locale, form, width)[date.getMonth()];
	            case TranslationType.Days:
	                return common.getLocaleDayNames(locale, form, width)[date.getDay()];
	            case TranslationType.DayPeriods:
	                var currentHours_1 = date.getHours();
	                var currentMinutes_1 = date.getMinutes();
	                if (extended) {
	                    var rules = common.getLocaleExtraDayPeriodRules(locale);
	                    var dayPeriods = common.getLocaleExtraDayPeriods(locale, form, width);
	                    var index = rules.findIndex(function (rule) {
	                        if (Array.isArray(rule)) {
	                            // morning, afternoon, evening, night
	                            var _a = __read(rule, 2), from = _a[0], to = _a[1];
	                            var afterFrom = currentHours_1 >= from.hours && currentMinutes_1 >= from.minutes;
	                            var beforeTo = (currentHours_1 < to.hours ||
	                                (currentHours_1 === to.hours && currentMinutes_1 < to.minutes));
	                            // We must account for normal rules that span a period during the day (e.g. 6am-9am)
	                            // where `from` is less (earlier) than `to`. But also rules that span midnight (e.g.
	                            // 10pm - 5am) where `from` is greater (later!) than `to`.
	                            //
	                            // In the first case the current time must be BOTH after `from` AND before `to`
	                            // (e.g. 8am is after 6am AND before 10am).
	                            //
	                            // In the second case the current time must be EITHER after `from` OR before `to`
	                            // (e.g. 4am is before 5am but not after 10pm; and 11pm is not before 5am but it is
	                            // after 10pm).
	                            if (from.hours < to.hours) {
	                                if (afterFrom && beforeTo) {
	                                    return true;
	                                }
	                            }
	                            else if (afterFrom || beforeTo) {
	                                return true;
	                            }
	                        }
	                        else { // noon or midnight
	                            if (rule.hours === currentHours_1 && rule.minutes === currentMinutes_1) {
	                                return true;
	                            }
	                        }
	                        return false;
	                    });
	                    if (index !== -1) {
	                        return dayPeriods[index];
	                    }
	                }
	                // if no rules for the day periods, we use am/pm by default
	                // tslint:disable-next-line:no-angle-bracket-type-assertion
	                return common.getLocaleDayPeriods(locale, form, width)[currentHours_1 < 12 ? 0 : 1];
	            case TranslationType.Eras:
	                // tslint:disable-next-line:no-angle-bracket-type-assertion
	                return common.getLocaleEraNames(locale, width)[date.getFullYear() <= 0 ? 0 : 1];
	            default:
	                // This default case is not needed by TypeScript compiler, as the switch is exhaustive.
	                // However Closure Compiler does not understand that and reports an error in typed mode.
	                // The `throw new Error` below works around the problem, and the unexpected: never variable
	                // makes sure tsc still checks this code is unreachable.
	                var unexpected = name;
	                throw new Error("unexpected translation type " + unexpected);
	        }
	    }
	    /**
	     * Returns a date formatter that transforms a date and an offset into a timezone with ISO8601 or
	     * GMT format depending on the width (eg: short = +0430, short:GMT = GMT+4, long = GMT+04:30,
	     * extended = +04:30)
	     */
	    function timeZoneGetter(width) {
	        // tslint:disable-next-line:only-arrow-functions typedef
	        return function (date, locale, offset) {
	            var zone = -1 * offset;
	            var minusSign = common.getLocaleNumberSymbol(locale, common.NumberSymbol.MinusSign);
	            var hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);
	            switch (width) {
	                case ZoneWidth.Short:
	                    return ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) +
	                        padNumber(Math.abs(zone % 60), 2, minusSign);
	                case ZoneWidth.ShortGMT:
	                    return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber(hours, 1, minusSign);
	                case ZoneWidth.Long:
	                    return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) + ':' +
	                        padNumber(Math.abs(zone % 60), 2, minusSign);
	                case ZoneWidth.Extended:
	                    if (offset === 0) {
	                        return 'Z';
	                    }
	                    else {
	                        return ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) + ':' +
	                            padNumber(Math.abs(zone % 60), 2, minusSign);
	                    }
	                default:
	                    throw new Error("Unknown zone width \"" + width + "\"");
	            }
	        };
	    }
	    var JANUARY = 0;
	    var THURSDAY = 4;
	    function getFirstThursdayOfYear(year) {
	        var firstDayOfYear = (new Date(year, JANUARY, 1)).getDay();
	        return new Date(year, 0, 1 + ((firstDayOfYear <= THURSDAY) ? THURSDAY : THURSDAY + 7) - firstDayOfYear);
	    }
	    function getThursdayThisWeek(datetime) {
	        return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (THURSDAY - datetime.getDay()));
	    }
	    function weekGetter(size, monthBased) {
	        if (monthBased === void 0) { monthBased = false; }
	        // tslint:disable-next-line:only-arrow-functions typedef
	        return function (date, locale) {
	            var result;
	            if (monthBased) {
	                var nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
	                var today = date.getDate();
	                result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
	            }
	            else {
	                var firstThurs = getFirstThursdayOfYear(date.getFullYear());
	                var thisThurs = getThursdayThisWeek(date);
	                var diff = thisThurs.getTime() - firstThurs.getTime();
	                result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week
	            }
	            return padNumber(result, size, common.getLocaleNumberSymbol(locale, common.NumberSymbol.MinusSign));
	        };
	    }
	    var DATE_FORMATS = {};
	    // Based on CLDR formats:
	    // See complete list: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
	    // See also explanations: http://cldr.unicode.org/translation/date-time
	    // TODO(ocombe): support all missing cldr formats: Y, U, Q, D, F, e, c, j, J, C, A, v, V, X, x
	    function getDateFormatter(format) {
	        if (DATE_FORMATS[format]) {
	            return DATE_FORMATS[format];
	        }
	        var formatter;
	        switch (format) {
	            // Era name (AD/BC)
	            case 'G':
	            case 'GG':
	            case 'GGG':
	                formatter = dateStrGetter(TranslationType.Eras, common.TranslationWidth.Abbreviated);
	                break;
	            case 'GGGG':
	                formatter = dateStrGetter(TranslationType.Eras, common.TranslationWidth.Wide);
	                break;
	            case 'GGGGG':
	                formatter = dateStrGetter(TranslationType.Eras, common.TranslationWidth.Narrow);
	                break;
	            // 1 digit representation of the year, e.g. (AD 1 => 1, AD 199 => 199)
	            case 'y':
	                formatter = dateGetter(DateType.FullYear, 1, 0, false, true);
	                break;
	            // 2 digit representation of the year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
	            case 'yy':
	                formatter = dateGetter(DateType.FullYear, 2, 0, true, true);
	                break;
	            // 3 digit representation of the year, padded (000-999). (e.g. AD 2001 => 01, AD 2010 => 10)
	            case 'yyy':
	                formatter = dateGetter(DateType.FullYear, 3, 0, false, true);
	                break;
	            // 4 digit representation of the year (e.g. AD 1 => 0001, AD 2010 => 2010)
	            case 'yyyy':
	                formatter = dateGetter(DateType.FullYear, 4, 0, false, true);
	                break;
	            // Month of the year (1-12), numeric
	            case 'M':
	            case 'L':
	                formatter = dateGetter(DateType.Month, 1, 1);
	                break;
	            case 'MM':
	            case 'LL':
	                formatter = dateGetter(DateType.Month, 2, 1);
	                break;
	            // Month of the year (January, ...), string, format
	            case 'MMM':
	                formatter = dateStrGetter(TranslationType.Months, common.TranslationWidth.Abbreviated);
	                break;
	            case 'MMMM':
	                formatter = dateStrGetter(TranslationType.Months, common.TranslationWidth.Wide);
	                break;
	            case 'MMMMM':
	                formatter = dateStrGetter(TranslationType.Months, common.TranslationWidth.Narrow);
	                break;
	            // Month of the year (January, ...), string, standalone
	            case 'LLL':
	                formatter =
	                    dateStrGetter(TranslationType.Months, common.TranslationWidth.Abbreviated, common.FormStyle.Standalone);
	                break;
	            case 'LLLL':
	                formatter =
	                    dateStrGetter(TranslationType.Months, common.TranslationWidth.Wide, common.FormStyle.Standalone);
	                break;
	            case 'LLLLL':
	                formatter =
	                    dateStrGetter(TranslationType.Months, common.TranslationWidth.Narrow, common.FormStyle.Standalone);
	                break;
	            // Week of the year (1, ... 52)
	            case 'w':
	                formatter = weekGetter(1);
	                break;
	            case 'ww':
	                formatter = weekGetter(2);
	                break;
	            // Week of the month (1, ...)
	            case 'W':
	                formatter = weekGetter(1, true);
	                break;
	            // Day of the month (1-31)
	            case 'd':
	                formatter = dateGetter(DateType.Date, 1);
	                break;
	            case 'dd':
	                formatter = dateGetter(DateType.Date, 2);
	                break;
	            // Day of the Week
	            case 'E':
	            case 'EE':
	            case 'EEE':
	                formatter = dateStrGetter(TranslationType.Days, common.TranslationWidth.Abbreviated);
	                break;
	            case 'EEEE':
	                formatter = dateStrGetter(TranslationType.Days, common.TranslationWidth.Wide);
	                break;
	            case 'EEEEE':
	                formatter = dateStrGetter(TranslationType.Days, common.TranslationWidth.Narrow);
	                break;
	            case 'EEEEEE':
	                formatter = dateStrGetter(TranslationType.Days, common.TranslationWidth.Short);
	                break;
	            // Generic period of the day (am-pm)
	            case 'a':
	            case 'aa':
	            case 'aaa':
	                formatter = dateStrGetter(TranslationType.DayPeriods, common.TranslationWidth.Abbreviated);
	                break;
	            case 'aaaa':
	                formatter = dateStrGetter(TranslationType.DayPeriods, common.TranslationWidth.Wide);
	                break;
	            case 'aaaaa':
	                formatter = dateStrGetter(TranslationType.DayPeriods, common.TranslationWidth.Narrow);
	                break;
	            // Extended period of the day (midnight, at night, ...), standalone
	            case 'b':
	            case 'bb':
	            case 'bbb':
	                formatter = dateStrGetter(TranslationType.DayPeriods, common.TranslationWidth.Abbreviated, common.FormStyle.Standalone, true);
	                break;
	            case 'bbbb':
	                formatter = dateStrGetter(TranslationType.DayPeriods, common.TranslationWidth.Wide, common.FormStyle.Standalone, true);
	                break;
	            case 'bbbbb':
	                formatter = dateStrGetter(TranslationType.DayPeriods, common.TranslationWidth.Narrow, common.FormStyle.Standalone, true);
	                break;
	            // Extended period of the day (midnight, night, ...), standalone
	            case 'B':
	            case 'BB':
	            case 'BBB':
	                formatter = dateStrGetter(TranslationType.DayPeriods, common.TranslationWidth.Abbreviated, common.FormStyle.Format, true);
	                break;
	            case 'BBBB':
	                formatter =
	                    dateStrGetter(TranslationType.DayPeriods, common.TranslationWidth.Wide, common.FormStyle.Format, true);
	                break;
	            case 'BBBBB':
	                formatter = dateStrGetter(TranslationType.DayPeriods, common.TranslationWidth.Narrow, common.FormStyle.Format, true);
	                break;
	            // Hour in AM/PM, (1-12)
	            case 'h':
	                formatter = dateGetter(DateType.Hours, 1, -12);
	                break;
	            case 'hh':
	                formatter = dateGetter(DateType.Hours, 2, -12);
	                break;
	            // Hour of the day (0-23)
	            case 'H':
	                formatter = dateGetter(DateType.Hours, 1);
	                break;
	            // Hour in day, padded (00-23)
	            case 'HH':
	                formatter = dateGetter(DateType.Hours, 2);
	                break;
	            // Minute of the hour (0-59)
	            case 'm':
	                formatter = dateGetter(DateType.Minutes, 1);
	                break;
	            case 'mm':
	                formatter = dateGetter(DateType.Minutes, 2);
	                break;
	            // Second of the minute (0-59)
	            case 's':
	                formatter = dateGetter(DateType.Seconds, 1);
	                break;
	            case 'ss':
	                formatter = dateGetter(DateType.Seconds, 2);
	                break;
	            // Fractional second
	            case 'S':
	                formatter = dateGetter(DateType.FractionalSeconds, 1);
	                break;
	            case 'SS':
	                formatter = dateGetter(DateType.FractionalSeconds, 2);
	                break;
	            case 'SSS':
	                formatter = dateGetter(DateType.FractionalSeconds, 3);
	                break;
	            // Timezone ISO8601 short format (-0430)
	            case 'Z':
	            case 'ZZ':
	            case 'ZZZ':
	                formatter = timeZoneGetter(ZoneWidth.Short);
	                break;
	            // Timezone ISO8601 extended format (-04:30)
	            case 'ZZZZZ':
	                formatter = timeZoneGetter(ZoneWidth.Extended);
	                break;
	            // Timezone GMT short format (GMT+4)
	            case 'O':
	            case 'OO':
	            case 'OOO':
	            // Should be location, but fallback to format O instead because we don't have the data yet
	            case 'z':
	            case 'zz':
	            case 'zzz':
	                formatter = timeZoneGetter(ZoneWidth.ShortGMT);
	                break;
	            // Timezone GMT long format (GMT+0430)
	            case 'OOOO':
	            case 'ZZZZ':
	            // Should be location, but fallback to format O instead because we don't have the data yet
	            case 'zzzz':
	                formatter = timeZoneGetter(ZoneWidth.Long);
	                break;
	            default:
	                return null;
	        }
	        DATE_FORMATS[format] = formatter;
	        return formatter;
	    }
	    function timezoneToOffset(timezone, fallback) {
	        // Support: IE 9-11 only, Edge 13-15+
	        // IE/Edge do not "understand" colon (`:`) in timezone
	        timezone = timezone.replace(/:/g, '');
	        var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
	        return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
	    }
	    function addDateMinutes(date, minutes) {
	        date = new Date(date.getTime());
	        date.setMinutes(date.getMinutes() + minutes);
	        return date;
	    }
	    function convertTimezoneToLocal(date, timezone, reverse) {
	        var reverseValue = reverse ? -1 : 1;
	        var dateTimezoneOffset = date.getTimezoneOffset();
	        var timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
	        return addDateMinutes(date, reverseValue * (timezoneOffset - dateTimezoneOffset));
	    }
	    /**
	     * Converts a value to date.
	     *
	     * Supported input formats:
	     * - `Date`
	     * - number: timestamp
	     * - string: numeric (e.g. "1234"), ISO and date strings in a format supported by
	     *   [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
	     *   Note: ISO strings without time return a date without timeoffset.
	     *
	     * Throws if unable to convert to a date.
	     */
	    function toDate(value) {
	        if (isDate(value)) {
	            return value;
	        }
	        if (typeof value === 'number' && !isNaN(value)) {
	            return new Date(value);
	        }
	        if (typeof value === 'string') {
	            value = value.trim();
	            var parsedNb = parseFloat(value);
	            // any string that only contains numbers, like "1234" but not like "1234hello"
	            if (!isNaN(value - parsedNb)) {
	                return new Date(parsedNb);
	            }
	            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
	                /* For ISO Strings without time the day, month and year must be extracted from the ISO String
	                before Date creation to avoid time offset and errors in the new Date.
	                If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
	                date, some browsers (e.g. IE 9) will throw an invalid Date error.
	                If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the timeoffset
	                is applied.
	                Note: ISO months are 0 for January, 1 for February, ... */
	                var _a = __read(value.split('-').map(function (val) { return +val; }), 3), y = _a[0], m = _a[1], d = _a[2];
	                return new Date(y, m - 1, d);
	            }
	            var match = void 0;
	            // tslint:disable-next-line:no-conditional-assignment
	            if (match = value.match(exports.ISO8601_DATE_REGEX)) {
	                return isoStringToDate(match);
	            }
	        }
	        var date = new Date(value);
	        if (!isDate(date)) {
	            throw new Error("Unable to convert \"" + value + "\" into a date");
	        }
	        return date;
	    }
	    exports.toDate = toDate;
	    /**
	     * Converts a date in ISO8601 to a Date.
	     * Used instead of `Date.parse` because of browser discrepancies.
	     */
	    function isoStringToDate(match) {
	        var date = new Date(0);
	        var tzHour = 0;
	        var tzMin = 0;
	        // match[8] means that the string contains "Z" (UTC) or a timezone like "+01:00" or "+0100"
	        var dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
	        var timeSetter = match[8] ? date.setUTCHours : date.setHours;
	        // if there is a timezone defined like "+01:00" or "+0100"
	        if (match[9]) {
	            tzHour = Number(match[9] + match[10]);
	            tzMin = Number(match[9] + match[11]);
	        }
	        dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
	        var h = Number(match[4] || 0) - tzHour;
	        var m = Number(match[5] || 0) - tzMin;
	        var s = Number(match[6] || 0);
	        var ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
	        timeSetter.call(date, h, m, s, ms);
	        return date;
	    }
	    exports.isoStringToDate = isoStringToDate;
	    function isDate(value) {
	        return value instanceof Date && !isNaN(value.valueOf());
	    }
	    exports.isDate = isDate;
	    
	});

	var dateRange_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.DateRangeComponent = void 0;
	    var i0 = core;
	    var i1 = ngBootstrap;
	    function DateRangeComponent_ng_template_5_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r8_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "span", 15);
	            i0.ɵɵlistener("mouseenter", function DateRangeComponent_ng_template_5_Template_span_mouseenter_0_listener() { i0.ɵɵrestoreView(_r8_1); var date_r5 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.hoveredDate = date_r5; })("mouseleave", function DateRangeComponent_ng_template_5_Template_span_mouseleave_0_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.hoveredDate = null; });
	            i0.ɵɵtext(1);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var date_r5 = ctx.$implicit;
	            var focused_r6 = ctx.focused;
	            var ctx_r2 = i0.ɵɵnextContext();
	            i0.ɵɵclassProp("focused", focused_r6)("range", ctx_r2.isRange(date_r5))("faded", ctx_r2.isHovered(date_r5) || ctx_r2.isInside(date_r5));
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate1(" ", date_r5.day, " ");
	        }
	    }
	    var DateRangeComponent = /** @class */ (function () {
	        function DateRangeComponent(calendar, formatter) {
	            this.calendar = calendar;
	            this.formatter = formatter;
	            this.disabled = false;
	            this.hoveredDate = null;
	            // tslint:disable-next-line:no-output-native
	            this.change = new core.EventEmitter();
	            // Function to call when the range changes.
	            this.onChange = function (range) { };
	            // Function to call when the input is touched.
	            this.onTouched = function () { };
	        }
	        Object.defineProperty(DateRangeComponent.prototype, "opacity", {
	            get: function () {
	                return this.disabled ? 0.25 : 1;
	            },
	            enumerable: false,
	            configurable: true
	        });
	        DateRangeComponent.prototype.onDateSelection = function (date) {
	            if (!this.fromDate && !this.toDate) {
	                this.fromDate = date;
	            }
	            else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
	                this.toDate = date;
	            }
	            else {
	                this.toDate = null;
	                this.fromDate = date;
	            }
	            if (this.fromDate && this.toDate) {
	                if (!this.value) {
	                    this.value = { start: new Date(), end: new Date() };
	                }
	                this.value.start = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day);
	                this.value.end = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day);
	                this.writeValue(this.value);
	            }
	        };
	        DateRangeComponent.prototype.isHovered = function (date) {
	            return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
	        };
	        DateRangeComponent.prototype.isInside = function (date) {
	            return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	        };
	        DateRangeComponent.prototype.isRange = function (date) {
	            return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
	        };
	        DateRangeComponent.prototype.validateInput = function (currentValue, input) {
	            var parsed = this.formatter.parse(input);
	            return parsed && this.calendar.isValid(ngBootstrap.NgbDate.from(parsed)) ? ngBootstrap.NgbDate.from(parsed) : currentValue;
	        };
	        DateRangeComponent.prototype.writeValue = function (obj) {
	            if (obj && !this.disabled) {
	                this.fromDate = this.toNgbDate(obj.start);
	                this.toDate = this.toNgbDate(obj.end);
	                this.value = obj;
	                this.onChange(obj);
	                this.change.emit(obj);
	            }
	        };
	        DateRangeComponent.prototype.toNgbDate = function (date) {
	            date = date_helper.toDate(date);
	            return new ngBootstrap.NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
	        };
	        DateRangeComponent.prototype.registerOnChange = function (fn) {
	            this.onChange = fn;
	        };
	        DateRangeComponent.prototype.registerOnTouched = function (fn) {
	            this.onTouched = fn;
	        };
	        DateRangeComponent.prototype.setDisabledState = function (isDisabled) {
	            this.disabled = isDisabled;
	        };
	        return DateRangeComponent;
	    }());
	    exports.DateRangeComponent = DateRangeComponent;
	    DateRangeComponent.ɵfac = function DateRangeComponent_Factory(t) { return new (t || DateRangeComponent)(i0.ɵɵdirectiveInject(i1.NgbCalendar), i0.ɵɵdirectiveInject(i1.NgbDateParserFormatter)); };
	    DateRangeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangeComponent, selectors: [["ws-date-range"]], hostVars: 2, hostBindings: function DateRangeComponent_HostBindings(rf, ctx) {
	            if (rf & 2) {
	                i0.ɵɵstyleProp("opacity", ctx.opacity);
	            }
	        }, inputs: { disabled: "disabled" }, outputs: { change: "change" }, features: [i0.ɵɵProvidersFeature([
	                {
	                    provide: forms.NG_VALUE_ACCESSOR,
	                    useExisting: core.forwardRef(function () { return DateRangeComponent; }),
	                    multi: true
	                }
	            ])], decls: 21, vars: 6, consts: [[1, "form-inline"], [1, "form-group"], [1, "input-group", "hidden-group"], ["name", "datepicker", "ngbDatepicker", "", "outsideDays", "hidden", 1, "form-control", 3, "autoClose", "displayMonths", "dayTemplate", "startDate", "dateSelect"], ["datepicker", "ngbDatepicker"], ["t", ""], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dpFromDate", 1, "form-control", 3, "value", "input"], ["dpFromDate", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], [1, "form-group", "ml-2"], ["placeholder", "yyyy-mm-dd", "name", "dpToDate", 1, "form-control", 3, "value", "input"], ["dpToDate", ""], [1, "custom-day", 3, "mouseenter", "mouseleave"]], template: function DateRangeComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                var _r10_1 = i0.ɵɵgetCurrentView();
	                i0.ɵɵelementStart(0, "div", 0);
	                i0.ɵɵelementStart(1, "div", 1);
	                i0.ɵɵelementStart(2, "div", 2);
	                i0.ɵɵelementStart(3, "input", 3, 4);
	                i0.ɵɵlistener("dateSelect", function DateRangeComponent_Template_input_dateSelect_3_listener($event) { return ctx.onDateSelection($event); });
	                i0.ɵɵelementEnd();
	                i0.ɵɵtemplate(5, DateRangeComponent_ng_template_5_Template, 2, 7, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(7, "div", 1);
	                i0.ɵɵelementStart(8, "div", 6);
	                i0.ɵɵelementStart(9, "input", 7, 8);
	                i0.ɵɵlistener("input", function DateRangeComponent_Template_input_input_9_listener() { i0.ɵɵrestoreView(_r10_1); var _r3 = i0.ɵɵreference(10); return ctx.fromDate = ctx.validateInput(ctx.fromDate, _r3.value); });
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(11, "div", 9);
	                i0.ɵɵelementStart(12, "button", 10);
	                i0.ɵɵlistener("click", function DateRangeComponent_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r10_1); var _r0 = i0.ɵɵreference(4); return _r0.toggle(); });
	                i0.ɵɵelement(13, "i", 11);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(14, "div", 12);
	                i0.ɵɵelementStart(15, "div", 6);
	                i0.ɵɵelementStart(16, "input", 13, 14);
	                i0.ɵɵlistener("input", function DateRangeComponent_Template_input_input_16_listener() { i0.ɵɵrestoreView(_r10_1); var _r4 = i0.ɵɵreference(17); return ctx.toDate = ctx.validateInput(ctx.toDate, _r4.value); });
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(18, "div", 9);
	                i0.ɵɵelementStart(19, "button", 10);
	                i0.ɵɵlistener("click", function DateRangeComponent_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r10_1); var _r0 = i0.ɵɵreference(4); return _r0.toggle(); });
	                i0.ɵɵelement(20, "i", 11);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	            }
	            if (rf & 2) {
	                var _r1 = i0.ɵɵreference(6);
	                i0.ɵɵadvance(3);
	                i0.ɵɵproperty("autoClose", "outside")("displayMonths", 2)("dayTemplate", _r1)("startDate", ctx.fromDate);
	                i0.ɵɵadvance(6);
	                i0.ɵɵproperty("value", ctx.formatter.format(ctx.fromDate));
	                i0.ɵɵadvance(7);
	                i0.ɵɵproperty("value", ctx.formatter.format(ctx.toDate));
	            }
	        }, directives: [i1.NgbInputDatepicker], styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(DateRangeComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-date-range',
	                        templateUrl: './date-range.component.html',
	                        styleUrls: ['./date-range.component.css'],
	                        providers: [
	                            {
	                                provide: forms.NG_VALUE_ACCESSOR,
	                                useExisting: core.forwardRef(function () { return DateRangeComponent; }),
	                                multi: true
	                            }
	                        ]
	                    }]
	            }], function () { return [{ type: i1.NgbCalendar }, { type: i1.NgbDateParserFormatter }]; }, { disabled: [{
	                    type: core.Input
	                }], opacity: [{
	                    type: core.HostBinding,
	                    args: ['style.opacity']
	                }], change: [{
	                    type: core.Output
	                }] });
	    })();
	    
	});

	var datetime = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.Datetime = void 0;
	    var Datetime = /** @class */ (function () {
	        function Datetime(init) {
	            Object.assign(this, init);
	        }
	        Datetime.asToday = function () {
	            var date = new Date();
	            return new Datetime({
	                year: date.getFullYear(),
	                month: date.getMonth() + 1,
	                day: date.getDate(),
	                hour: date.getHours(),
	                minute: date.getMinutes(),
	                second: date.getSeconds(),
	                timeZoneOffset: date.getTimezoneOffset()
	            });
	        };
	        Datetime.fromLocalString = function (dateString) {
	            dateString = dateString.trim();
	            var pieces = dateString.split(' ');
	            var date;
	            if (pieces.length > 0) {
	                var dateParts = [];
	                var timeParts = [];
	                if (pieces[0].indexOf('/') > -1) {
	                    dateParts = pieces[0].split('/');
	                }
	                if (pieces.length > 1) {
	                    timeParts = pieces[1].split(':');
	                }
	                if (timeParts.length === 0) {
	                    date = new Date(dateParts[2].substr(0, 4) + '-' + dateParts[1] + '-' + dateParts[0]);
	                }
	                else {
	                    date = new Date(dateParts[2].substr(0, 4) + '-' + dateParts[1] + '-' + dateParts[0] + ' ' + timeParts.join(':'));
	                }
	            }
	            else {
	                date = new Date(dateString);
	            }
	            var isValidDate = !isNaN(date.valueOf());
	            if (!dateString || !isValidDate) {
	                return null;
	            }
	            return new Datetime({
	                year: date.getFullYear(),
	                month: date.getMonth() + 1,
	                day: date.getDate(),
	                hour: date.getHours(),
	                minute: date.getMinutes(),
	                second: date.getSeconds(),
	                timeZoneOffset: date.getTimezoneOffset()
	            });
	        };
	        Datetime.prototype.isInteger = function (value) {
	            return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
	        };
	        Datetime.prototype.toString = function () {
	            if (this.isInteger(this.year) && this.isInteger(this.month) && this.isInteger(this.day)) {
	                var year = this.year.toString().padStart(2, '0');
	                var month = this.month.toString().padStart(2, '0');
	                var day = this.day.toString().padStart(2, '0');
	                if (!this.hour) {
	                    this.hour = 0;
	                }
	                if (!this.minute) {
	                    this.minute = 0;
	                }
	                if (!this.second) {
	                    this.second = 0;
	                }
	                if (!this.timeZoneOffset) {
	                    this.timeZoneOffset = new Date().getTimezoneOffset();
	                }
	                var hour = this.hour.toString().padStart(2, '0');
	                var minute = this.minute.toString().padStart(2, '0');
	                var second = this.second.toString().padStart(2, '0');
	                var tzo = -this.timeZoneOffset;
	                var dif = tzo >= 0 ? '+' : '-';
	                var pad = function (num) {
	                    var norm = Math.floor(Math.abs(num));
	                    return (norm < 10 ? '0' : '') + norm;
	                };
	                // tslint:disable-next-line:max-line-length
	                var isoString = pad(year) + "-" + pad(month) + "-" + pad(day) + "T" + pad(hour) + ":" + pad(minute) + ":" + pad(second) + dif + pad(tzo / 60) + ":" + pad(tzo % 60);
	                return isoString;
	            }
	            return null;
	        };
	        return Datetime;
	    }());
	    exports.Datetime = Datetime;
	    
	});

	var datetimePicker_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.DatetimePickerComponent = void 0;
	    var i0 = core;
	    var i1 = ngBootstrap;
	    var i2 = forms;
	    var i3 = common;
	    var _c0 = ["popOver"];
	    function DatetimePickerComponent_ng_template_6_div_1_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r8_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "div");
	            i0.ɵɵelementStart(1, "ngb-datepicker", 8, 9);
	            i0.ɵɵlistener("ngModelChange", function DatetimePickerComponent_ng_template_6_div_1_Template_ngb_datepicker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.onDateChange($event); });
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(3, "button", 10);
	            i0.ɵɵlistener("click", function DatetimePickerComponent_ng_template_6_div_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.toggleDateTimeState(); });
	            i0.ɵɵelement(4, "i", 11);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(5, "button", 12);
	            i0.ɵɵlistener("click", function DatetimePickerComponent_ng_template_6_div_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onAccept(); });
	            i0.ɵɵelement(6, "i", 13);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r4 = i0.ɵɵnextContext(2);
	            var _r2 = i0.ɵɵreference(9);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngModel", ctx_r4.value);
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("disabled", !(ctx_r4.value == null ? null : ctx_r4.value.day))("ngbPopover", _r2);
	        }
	    }
	    function DatetimePickerComponent_ng_template_6_div_2_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r13_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "div");
	            i0.ɵɵelementStart(1, "button", 12);
	            i0.ɵɵlistener("click", function DatetimePickerComponent_ng_template_6_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.toggleDateTimeState(); });
	            i0.ɵɵelement(2, "i", 4);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(3, "button", 12);
	            i0.ɵɵlistener("click", function DatetimePickerComponent_ng_template_6_div_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r13_1); var ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.onAccept(); });
	            i0.ɵɵelement(4, "i", 13);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(5, "div", 14);
	            i0.ɵɵelementStart(6, "ngb-timepicker", 15, 16);
	            i0.ɵɵlistener("ngModelChange", function DatetimePickerComponent_ng_template_6_div_2_Template_ngb_timepicker_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r13_1); var ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.onTimeChange($event); });
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r5 = i0.ɵɵnextContext(2);
	            i0.ɵɵadvance(6);
	            i0.ɵɵproperty("ngModel", ctx_r5.value)("seconds", ctx_r5.seconds)("hourStep", ctx_r5.hourStep)("minuteStep", ctx_r5.minuteStep)("secondStep", ctx_r5.secondStep);
	        }
	    }
	    function DatetimePickerComponent_ng_template_6_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "div");
	            i0.ɵɵtemplate(1, DatetimePickerComponent_ng_template_6_div_1_Template, 7, 3, "div", 7);
	            i0.ɵɵtemplate(2, DatetimePickerComponent_ng_template_6_div_2_Template, 8, 5, "div", 7);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r1 = i0.ɵɵnextContext();
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", !ctx_r1.showTimePickerToggle);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", ctx_r1.showTimePickerToggle);
	        }
	    }
	    function DatetimePickerComponent_ng_template_8_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵtext(0, " timepicker here!\n");
	        }
	    }
	    var DatetimePickerComponent = /** @class */ (function () {
	        function DatetimePickerComponent(config) {
	            this.config = config;
	            this.disabled = false;
	            this.inputDatetimeFormat = 'dd/MM/yyyy HH:mm';
	            this.hourStep = 1;
	            this.minuteStep = 1;
	            this.secondStep = 30;
	            this.seconds = false;
	            this.showTimePickerToggle = false;
	            // tslint:disable-next-line:no-output-native
	            this.change = new core.EventEmitter();
	            // Function to call when the range changes.
	            this.onChange = function (value) { };
	            // Function to call when the input is touched.
	            this.onTouched = function () { };
	            config.autoClose = 'outside';
	            config.placement = 'auto';
	        }
	        Object.defineProperty(DatetimePickerComponent.prototype, "opacity", {
	            get: function () {
	                return this.disabled ? 0.25 : 1;
	            },
	            enumerable: false,
	            configurable: true
	        });
	        DatetimePickerComponent.prototype.writeValue = function (obj) {
	            // report value back to the model
	            if (obj && !this.disabled) {
	                this.model = this.toNgbDate(new Date(obj.toString()));
	                this.value = obj;
	                this.onChange(obj);
	                this.change.emit(obj);
	            }
	            else {
	                // when there's no input model registered
	                this.value = datetime.Datetime.asToday();
	                this.change.emit(obj);
	            }
	        };
	        DatetimePickerComponent.prototype.registerOnChange = function (fn) {
	            this.onChange = fn;
	        };
	        DatetimePickerComponent.prototype.registerOnTouched = function (fn) {
	            this.onTouched = fn;
	        };
	        DatetimePickerComponent.prototype.setDisabledState = function (isDisabled) {
	            this.disabled = isDisabled;
	        };
	        DatetimePickerComponent.prototype.onInputChange = function ($event) {
	            var value = $event.target.value;
	            var dt = datetime.Datetime.fromLocalString(value);
	            if (dt) {
	                this.writeValue(dt);
	            }
	            else if (value.trim() === '') {
	                this.writeValue(new datetime.Datetime());
	            }
	        };
	        DatetimePickerComponent.prototype.toggleDateTimeState = function () {
	            this.showTimePickerToggle = !this.showTimePickerToggle;
	        };
	        DatetimePickerComponent.prototype.onDateChange = function (date) {
	            if (!this.value) {
	                this.value = new datetime.Datetime();
	            }
	            this.value.year = date.year;
	            this.value.month = date.month;
	            this.value.day = date.day;
	            this.writeValue(this.value);
	        };
	        DatetimePickerComponent.prototype.onTimeChange = function (event) {
	            this.value.hour = event.hour;
	            this.value.minute = event.minute;
	            this.value.second = event.second;
	            this.writeValue(this.value);
	        };
	        DatetimePickerComponent.prototype.onAccept = function () {
	            if (this.popover.isOpen()) {
	                this.popover.close();
	            }
	        };
	        DatetimePickerComponent.prototype.inputBlur = function ($event) {
	            this.onTouched();
	        };
	        DatetimePickerComponent.prototype.toNgbDate = function (date) {
	            date = date_helper.toDate(date);
	            return new ngBootstrap.NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
	        };
	        return DatetimePickerComponent;
	    }());
	    exports.DatetimePickerComponent = DatetimePickerComponent;
	    DatetimePickerComponent.ɵfac = function DatetimePickerComponent_Factory(t) { return new (t || DatetimePickerComponent)(i0.ɵɵdirectiveInject(i1.NgbPopoverConfig)); };
	    DatetimePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DatetimePickerComponent, selectors: [["ws-datetime-picker"]], viewQuery: function DatetimePickerComponent_Query(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵviewQuery(_c0, true);
	            }
	            if (rf & 2) {
	                var _t;
	                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popover = _t.first);
	            }
	        }, hostVars: 2, hostBindings: function DatetimePickerComponent_HostBindings(rf, ctx) {
	            if (rf & 2) {
	                i0.ɵɵstyleProp("opacity", ctx.opacity);
	            }
	        }, inputs: { disabled: "disabled", inputDatetimeFormat: "inputDatetimeFormat", hourStep: "hourStep", minuteStep: "minuteStep", secondStep: "secondStep", seconds: "seconds" }, outputs: { change: "change" }, features: [i0.ɵɵProvidersFeature([
	                common.DatePipe,
	                {
	                    provide: forms.NG_VALUE_ACCESSOR,
	                    useExisting: core.forwardRef(function () { return DatetimePickerComponent; }),
	                    multi: true
	                }
	            ])], decls: 10, vars: 8, consts: [[1, "input-group", "mr-2"], [1, "form-control", "form-control-sm", 3, "ngModel", "disabled", "placeholder", "blur", "change"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "ngbPopover", "disabled"], [1, "fa", "fa-calendar"], ["calendarContent", ""], ["timePickerContent", ""], [4, "ngIf"], ["name", "datepicker", 3, "ngModel", "ngModelChange"], ["dp", ""], ["type", "button", 1, "btn", "btn-block", "btn-outline-secondary", 3, "disabled", "ngbPopover", "click"], [1, "fa", "fa-clock-o"], ["type", "button", 1, "btn", "btn-block", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-check"], [1, "mt-auto"], ["name", "timepicker", 3, "ngModel", "seconds", "hourStep", "minuteStep", "secondStep", "ngModelChange"], ["tp", ""]], template: function DatetimePickerComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵelementStart(0, "div", 0);
	                i0.ɵɵelementStart(1, "input", 1);
	                i0.ɵɵlistener("blur", function DatetimePickerComponent_Template_input_blur_1_listener($event) { return ctx.inputBlur($event); })("change", function DatetimePickerComponent_Template_input_change_1_listener($event) { return ctx.onInputChange($event); });
	                i0.ɵɵpipe(2, "date");
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementStart(3, "div", 2);
	                i0.ɵɵelementStart(4, "button", 3);
	                i0.ɵɵelement(5, "i", 4);
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵelementEnd();
	                i0.ɵɵtemplate(6, DatetimePickerComponent_ng_template_6_Template, 3, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(8, DatetimePickerComponent_ng_template_8_Template, 1, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
	            }
	            if (rf & 2) {
	                var _r0 = i0.ɵɵreference(7);
	                i0.ɵɵadvance(1);
	                i0.ɵɵproperty("ngModel", i0.ɵɵpipeBind2(2, 5, ctx.value.toString(), ctx.inputDatetimeFormat))("disabled", ctx.disabled)("placeholder", ctx.inputDatetimeFormat);
	                i0.ɵɵadvance(3);
	                i0.ɵɵproperty("ngbPopover", _r0)("disabled", ctx.disabled);
	            }
	        }, directives: [i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgbPopover, i3.NgIf, i1.NgbDatepicker, i1.NgbTimepicker], pipes: [i3.DatePipe], styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(DatetimePickerComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-datetime-picker',
	                        templateUrl: './datetime-picker.component.html',
	                        styleUrls: ['./datetime-picker.component.css'],
	                        providers: [
	                            common.DatePipe,
	                            {
	                                provide: forms.NG_VALUE_ACCESSOR,
	                                useExisting: core.forwardRef(function () { return DatetimePickerComponent; }),
	                                multi: true
	                            }
	                        ]
	                    }]
	            }], function () { return [{ type: i1.NgbPopoverConfig }]; }, { disabled: [{
	                    type: core.Input
	                }], opacity: [{
	                    type: core.HostBinding,
	                    args: ['style.opacity']
	                }], inputDatetimeFormat: [{
	                    type: core.Input
	                }], hourStep: [{
	                    type: core.Input
	                }], minuteStep: [{
	                    type: core.Input
	                }], secondStep: [{
	                    type: core.Input
	                }], seconds: [{
	                    type: core.Input
	                }], popover: [{
	                    type: core.ViewChild,
	                    args: ['popOver']
	                }], change: [{
	                    type: core.Output
	                }] });
	    })();
	    
	});

	var dateSort_pipe = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.SortPipe = void 0;
	    var i0 = core;
	    var SortPipe = /** @class */ (function () {
	        function SortPipe() {
	        }
	        SortPipe.prototype.transform = function (items, direction, property) {
	            // default direction ascending
	            direction = direction === null || direction === undefined ? 'asc' : direction;
	            return items.sort(function (a, b) {
	                // handle arrays or objects
	                var left = property === null || property === undefined ? a : a[property];
	                var right = property === null || property === undefined ? b : b[property];
	                // if equal weighting is the same
	                if (left === right) {
	                    return 0;
	                }
	                // handle ascending and descening sorts
	                if (direction === 'desc') {
	                    return left < right ? 1 : -1;
	                }
	                else {
	                    return left < right ? -1 : 1;
	                }
	            });
	        };
	        return SortPipe;
	    }());
	    exports.SortPipe = SortPipe;
	    SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
	    SortPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "wsSort", type: SortPipe, pure: true });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(SortPipe, [{
	                type: core.Pipe,
	                args: [{
	                        name: 'wsSort'
	                    }]
	            }], null, null);
	    })();
	    
	});

	var pollResult_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.PollResultComponent = void 0;
	    var i0 = core;
	    function PollResultComponent_div_0_p_1_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "p");
	            i0.ɵɵelementStart(1, "strong");
	            i0.ɵɵtext(2);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelement(3, "br");
	            i0.ɵɵelementStart(4, "ngb-progressbar", 2);
	            i0.ɵɵtext(5);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var option_r2 = ctx.$implicit;
	            var ctx_r1 = i0.ɵɵnextContext(2);
	            i0.ɵɵadvance(2);
	            i0.ɵɵtextInterpolate(option_r2.text.text);
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("showValue", false)("value", ctx_r1.countVotes(option_r2))("max", ctx_r1.max);
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate1(" ", ctx_r1.countVotes(option_r2), "");
	        }
	    }
	    function PollResultComponent_div_0_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "div");
	            i0.ɵɵtemplate(1, PollResultComponent_div_0_p_1_Template, 6, 5, "p", 1);
	            i0.ɵɵpipe(2, "wsSort");
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r0 = i0.ɵɵnextContext();
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 1, ctx_r0.poll.options, "asc", "id"));
	        }
	    }
	    var PollResultComponent = /** @class */ (function () {
	        function PollResultComponent() {
	        }
	        PollResultComponent.prototype.ngOnInit = function () {
	            this.init();
	        };
	        // tslint:disable-next-line:use-lifecycle-interface typedef
	        PollResultComponent.prototype.ngOnChanges = function () {
	            this.init();
	        };
	        PollResultComponent.prototype.init = function () {
	            this.max = this.results.map(function (x) { return x.count; }).reduce(function (sum, current) { return sum + current; }, 0);
	        };
	        PollResultComponent.prototype.countVotes = function (option) {
	            if (!this.poll || !this.results) {
	                return 0;
	            }
	            if (this.max === 0) {
	                return 0;
	            }
	            var result = this.results.find(function (x) { return x.option.id === option.id; });
	            return result ? result.count : 0;
	        };
	        return PollResultComponent;
	    }());
	    exports.PollResultComponent = PollResultComponent;
	    PollResultComponent.ɵfac = function PollResultComponent_Factory(t) { return new (t || PollResultComponent)(); };
	    PollResultComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PollResultComponent, selectors: [["ws-poll-result"]], inputs: { poll: "poll", results: "results" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "success", 3, "showValue", "value", "max"]], template: function PollResultComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵtemplate(0, PollResultComponent_div_0_Template, 3, 5, "div", 0);
	            }
	            if (rf & 2) {
	                i0.ɵɵproperty("ngIf", ctx.results);
	            }
	        }, directives: [common.NgIf, common.NgForOf, ngBootstrap.NgbProgressbar], pipes: [dateSort_pipe.SortPipe], styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(PollResultComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-poll-result',
	                        templateUrl: './poll-result.component.html',
	                        styleUrls: ['./poll-result.component.css']
	                    }]
	            }], function () { return []; }, { poll: [{
	                    type: core.Input
	                }], results: [{
	                    type: core.Input
	                }] });
	    })();
	    
	});

	var standardPoll_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.StandardPollComponent = void 0;
	    var i0 = core;
	    var _c0 = function (a0) { return { active: a0 }; };
	    function StandardPollComponent_li_1_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r3_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "li", 2);
	            i0.ɵɵelementStart(1, "div", 3);
	            i0.ɵɵelementStart(2, "label", 4);
	            i0.ɵɵelementStart(3, "input", 5);
	            i0.ɵɵlistener("ngModelChange", function StandardPollComponent_li_1_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.selection.optionId = $event; })("click", function StandardPollComponent_li_1_Template_input_click_3_listener() { i0.ɵɵrestoreView(_r3_1); var option_r1 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onOptionSelect(option_r1); });
	            i0.ɵɵelementEnd();
	            i0.ɵɵtext(4);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var option_r1 = ctx.$implicit;
	            var ctx_r0 = i0.ɵɵnextContext();
	            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx_r0.voted.hasVoted && ctx_r0.isSelected(option_r1)));
	            i0.ɵɵadvance(3);
	            i0.ɵɵproperty("disabled", ctx_r0.voted.hasVoted)("checked", ctx_r0.isSelected(option_r1))("value", option_r1.id)("ngModel", ctx_r0.selection.optionId);
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate1("", option_r1.text.text, " ");
	        }
	    }
	    var StandardPollComponent = /** @class */ (function () {
	        function StandardPollComponent() {
	            this.optionSelected = new core.EventEmitter();
	        }
	        StandardPollComponent.prototype.ngOnInit = function () {
	            this.init();
	        };
	        // tslint:disable-next-line:use-lifecycle-interface typedef
	        StandardPollComponent.prototype.ngOnChanges = function () {
	            this.init();
	        };
	        StandardPollComponent.prototype.init = function () {
	            if (this.initialSelection) {
	                if (this.initialSelection.length > 0) {
	                    this.selection = this.initialSelection[0];
	                }
	                else {
	                    this.loadDefaultSelection();
	                }
	            }
	            else {
	                this.loadDefaultSelection();
	            }
	        };
	        StandardPollComponent.prototype.loadDefaultSelection = function () {
	            this.selection = { rank: 1, optionId: null };
	        };
	        StandardPollComponent.prototype.isSelected = function (option) {
	            if (!this.selection) {
	                return false;
	            }
	            return this.selection.optionId === option.id;
	        };
	        StandardPollComponent.prototype.onOptionSelect = function (option) {
	            var entry = { rank: 1, optionId: option.id };
	            this.optionSelected.emit([entry]);
	        };
	        return StandardPollComponent;
	    }());
	    exports.StandardPollComponent = StandardPollComponent;
	    StandardPollComponent.ɵfac = function StandardPollComponent_Factory(t) { return new (t || StandardPollComponent)(); };
	    StandardPollComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StandardPollComponent, selectors: [["ws-standard-poll"]], inputs: { poll: "poll", voted: "voted", initialSelection: "initialSelection" }, outputs: { optionSelected: "optionSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 5, consts: [[1, "list-group"], ["class", "list-group-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "ngClass"], [1, "form-check"], [1, "form-check-label"], ["type", "radio", "name", "questions", 1, "form-check-input", 3, "disabled", "checked", "value", "ngModel", "ngModelChange", "click"]], template: function StandardPollComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵelementStart(0, "ul", 0);
	                i0.ɵɵtemplate(1, StandardPollComponent_li_1_Template, 5, 8, "li", 1);
	                i0.ɵɵpipe(2, "wsSort");
	                i0.ɵɵelementEnd();
	            }
	            if (rf & 2) {
	                i0.ɵɵadvance(1);
	                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 1, ctx.poll.options, "asc", "id"));
	            }
	        }, directives: [common.NgForOf, common.NgClass, forms.RadioControlValueAccessor, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel], pipes: [dateSort_pipe.SortPipe], styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(StandardPollComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-standard-poll',
	                        templateUrl: './standard-poll.component.html',
	                        styleUrls: ['./standard-poll.component.css']
	                    }]
	            }], function () { return []; }, { poll: [{
	                    type: core.Input
	                }], voted: [{
	                    type: core.Input
	                }], initialSelection: [{
	                    type: core.Input
	                }], optionSelected: [{
	                    type: core.Output
	                }] });
	    })();
	    
	});

	var weightedPoll_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.WeightedPollComponent = void 0;
	    var i0 = core;
	    function WeightedPollComponent_li_1_option_4_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "option", 6);
	            i0.ɵɵtext(1);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var option_r3 = ctx.$implicit;
	            i0.ɵɵpropertyInterpolate("value", option_r3.id);
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate(option_r3.text.text);
	        }
	    }
	    function WeightedPollComponent_li_1_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r5_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "li", 2);
	            i0.ɵɵelementStart(1, "select", 3);
	            i0.ɵɵlistener("ngModelChange", function WeightedPollComponent_li_1_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5_1); var num_r1 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(); return (ctx_r4.models[num_r1] = $event); })("change", function WeightedPollComponent_li_1_Template_select_change_1_listener($event) { i0.ɵɵrestoreView(_r5_1); var num_r1 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.change($event, num_r1); });
	            i0.ɵɵelementStart(2, "option", 4);
	            i0.ɵɵtext(3);
	            i0.ɵɵelementEnd();
	            i0.ɵɵtemplate(4, WeightedPollComponent_li_1_option_4_Template, 2, 2, "option", 5);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var num_r1 = ctx.$implicit;
	            var ctx_r0 = i0.ɵɵnextContext();
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngModel", ctx_r0.models[num_r1])("disabled", ctx_r0.voted.hasVoted);
	            i0.ɵɵadvance(2);
	            i0.ɵɵtextInterpolate2("", ctx_r0.numberToWord(num_r1 + 1), " selection (", ctx_r0.calcPointsForItem(num_r1), " points)");
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngForOf", ctx_r0.poll.options);
	        }
	    }
	    var WeightedPollComponent = /** @class */ (function () {
	        function WeightedPollComponent() {
	            this.optionSelected = new core.EventEmitter();
	        }
	        WeightedPollComponent.prototype.ngOnInit = function () {
	            this.init();
	        };
	        WeightedPollComponent.prototype.init = function () {
	            var _this = this;
	            // this.selection = [];
	            // ensure variables
	            this.numSelections = [];
	            this.models = [];
	            // loop for number of select boxes to show
	            this.numSelections = Array(this.poll.numberOfSelections).fill(0).map(function (x, i) { return i; });
	            // ensure each select box has a model to bind to
	            this.numSelections.forEach(function (num) {
	                var selected = _this.initialSelection.find(function (x) { return x.rank === num + 1; });
	                if (selected) {
	                    _this.models.push(selected.optionId.toString()); // handle initial selection
	                }
	                else {
	                    _this.models.push('0'); // ensure the selection text is displayed
	                }
	            });
	        };
	        WeightedPollComponent.prototype.change = function (event, index) {
	            // ensure we are not dealing with an unset action
	            if (event.target.value !== '0') {
	                var idx = this.models.findIndex(function (x) { return x === event.target.value; });
	                // if an option was selected twice from different drop downs. unset the older selection
	                if (idx !== index && idx !== -1) {
	                    this.models[idx] = '0';
	                }
	            }
	            // emit selection only if all options are selected
	            if (this.hasMaxSelections()) {
	                var output_1 = [];
	                this.models.forEach(function (id, i) {
	                    var entry = { rank: i + 1, optionId: id };
	                    output_1.push(entry);
	                });
	                this.optionSelected.emit(output_1);
	            }
	        };
	        WeightedPollComponent.prototype.hasMaxSelections = function () {
	            // if there are no unset options, we have max selection
	            return this.models.filter(function (x) { return x === '0'; }).length === 0;
	        };
	        // convert this to an algorithm if the design works out
	        WeightedPollComponent.prototype.numberToWord = function (num) {
	            if (num < 0) {
	                return null;
	            }
	            // TODO: Convert this to an algo
	            var word = ['zero', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eight', 'ninth', 'tenth'];
	            return word[num];
	        };
	        WeightedPollComponent.prototype.calcPointsForItem = function (num) {
	            return this.poll.numberOfSelections - num;
	        };
	        WeightedPollComponent.prototype.isSelected = function (optionId) {
	            return this.models.findIndex(function (x) { return x === String(optionId); }) !== -1;
	        };
	        return WeightedPollComponent;
	    }());
	    exports.WeightedPollComponent = WeightedPollComponent;
	    WeightedPollComponent.ɵfac = function WeightedPollComponent_Factory(t) { return new (t || WeightedPollComponent)(); };
	    WeightedPollComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WeightedPollComponent, selectors: [["ws-weighted-poll"]], inputs: { poll: "poll", voted: "voted", initialSelection: "initialSelection" }, outputs: { optionSelected: "optionSelected" }, decls: 2, vars: 1, consts: [[1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function WeightedPollComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵelementStart(0, "ul", 0);
	                i0.ɵɵtemplate(1, WeightedPollComponent_li_1_Template, 5, 5, "li", 1);
	                i0.ɵɵelementEnd();
	            }
	            if (rf & 2) {
	                i0.ɵɵadvance(1);
	                i0.ɵɵproperty("ngForOf", ctx.numSelections);
	            }
	        }, directives: [common.NgForOf, forms.SelectControlValueAccessor, forms.NgControlStatus, forms.NgModel, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x], styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(WeightedPollComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-weighted-poll',
	                        templateUrl: './weighted-poll.component.html',
	                        styleUrls: ['./weighted-poll.component.css']
	                    }]
	            }], function () { return []; }, { poll: [{
	                    type: core.Input
	                }], voted: [{
	                    type: core.Input
	                }], initialSelection: [{
	                    type: core.Input
	                }], optionSelected: [{
	                    type: core.Output
	                }] });
	    })();
	    
	});

	var voteControl_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.VoteControlComponent = void 0;
	    var i0 = core;
	    function VoteControlComponent_ng_template_0_Template(rf, ctx) { }
	    function VoteControlComponent_ng_template_2_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵtext(0);
	            i0.ɵɵelement(1, "br");
	            i0.ɵɵelementStart(2, "small", 5);
	            i0.ɵɵtext(3);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r3 = i0.ɵɵnextContext();
	            i0.ɵɵtextInterpolate1(" ", ctx_r3.poll.title.text, " ");
	            i0.ɵɵadvance(3);
	            i0.ɵɵtextInterpolate2("Created By: ", ctx_r3.poll.createdBy.firstName, " ", ctx_r3.poll.createdBy.lastName, "");
	        }
	    }
	    function VoteControlComponent_ng_template_4_small_5_small_3_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "small", 5);
	            i0.ɵɵelementStart(1, "strong");
	            i0.ɵɵtext(2, "Starts:");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	    }
	    function VoteControlComponent_ng_template_4_small_5_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "small", 5);
	            i0.ɵɵelementStart(1, "strong");
	            i0.ɵɵtext(2, "Started:");
	            i0.ɵɵelementEnd();
	            i0.ɵɵtemplate(3, VoteControlComponent_ng_template_4_small_5_small_3_Template, 3, 0, "small", 6);
	            i0.ɵɵtext(4);
	            i0.ɵɵpipe(5, "date");
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r9 = i0.ɵɵnextContext(2);
	            i0.ɵɵadvance(3);
	            i0.ɵɵproperty("ngIf", ctx_r9.state == "Not yet started");
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 2, ctx_r9.poll.start, "EEEE, MMMM d, y, HH:mm zzzz"), "");
	        }
	    }
	    function VoteControlComponent_ng_template_4_small_7_small_3_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "small", 5);
	            i0.ɵɵelementStart(1, "strong");
	            i0.ɵɵtext(2, "Finished:");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	    }
	    function VoteControlComponent_ng_template_4_small_7_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "small", 5);
	            i0.ɵɵelementStart(1, "strong");
	            i0.ɵɵtext(2, "Finishes:");
	            i0.ɵɵelementEnd();
	            i0.ɵɵtemplate(3, VoteControlComponent_ng_template_4_small_7_small_3_Template, 3, 0, "small", 6);
	            i0.ɵɵtext(4);
	            i0.ɵɵpipe(5, "date");
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r10 = i0.ɵɵnextContext(2);
	            i0.ɵɵadvance(3);
	            i0.ɵɵproperty("ngIf", ctx_r10.state == "expired");
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 2, ctx_r10.poll.expiry, "EEEE, MMMM d, y, HH:mm zzzz"), "");
	        }
	    }
	    function VoteControlComponent_ng_template_4_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "small", 5);
	            i0.ɵɵelementStart(1, "strong");
	            i0.ɵɵtext(2, "Status:");
	            i0.ɵɵelementEnd();
	            i0.ɵɵtext(3);
	            i0.ɵɵelementEnd();
	            i0.ɵɵtext(4, "\u00A0|\u00A0 ");
	            i0.ɵɵtemplate(5, VoteControlComponent_ng_template_4_small_5_Template, 6, 5, "small", 6);
	            i0.ɵɵtext(6, "\u00A0 ");
	            i0.ɵɵtemplate(7, VoteControlComponent_ng_template_4_small_7_Template, 6, 5, "small", 6);
	        }
	        if (rf & 2) {
	            var ctx_r5 = i0.ɵɵnextContext();
	            i0.ɵɵadvance(3);
	            i0.ɵɵtextInterpolate1(" ", ctx_r5.state, " ");
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("ngIf", ctx_r5.state != "Not yet started");
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("ngIf", ctx_r5.state != "expired");
	        }
	    }
	    function VoteControlComponent_ng_template_6_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵtext(0);
	        }
	        if (rf & 2) {
	            var ctx_r7 = i0.ɵɵnextContext();
	            i0.ɵɵtextInterpolate1(" ", ctx_r7.poll.question.text, "\n");
	        }
	    }
	    function VoteControlComponent_div_8_ng_container_2_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainer(0);
	        }
	    }
	    function VoteControlComponent_div_8_ng_container_5_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainer(0);
	        }
	    }
	    function VoteControlComponent_div_8_div_6_ng_container_1_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainer(0);
	        }
	    }
	    function VoteControlComponent_div_8_div_6_em_2_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "em");
	            i0.ɵɵtext(1, "You have already voted!");
	            i0.ɵɵelementEnd();
	        }
	    }
	    function VoteControlComponent_div_8_div_6_ws_standard_poll_3_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r32_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "ws-standard-poll", 23);
	            i0.ɵɵlistener("optionSelected", function VoteControlComponent_div_8_div_6_ws_standard_poll_3_Template_ws_standard_poll_optionSelected_0_listener($event) { i0.ɵɵrestoreView(_r32_1); var ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.selected($event); });
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r28 = i0.ɵɵnextContext(3);
	            i0.ɵɵproperty("poll", ctx_r28.poll)("voted", ctx_r28.voted)("initialSelection", ctx_r28.selection);
	        }
	    }
	    function VoteControlComponent_div_8_div_6_ws_weighted_poll_4_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r34_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "ws-weighted-poll", 23);
	            i0.ɵɵlistener("optionSelected", function VoteControlComponent_div_8_div_6_ws_weighted_poll_4_Template_ws_weighted_poll_optionSelected_0_listener($event) { i0.ɵɵrestoreView(_r34_1); var ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.selected($event); });
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r29 = i0.ɵɵnextContext(3);
	            i0.ɵɵproperty("poll", ctx_r29.poll)("voted", ctx_r29.voted)("initialSelection", ctx_r29.selection);
	        }
	    }
	    function VoteControlComponent_div_8_div_6_ng_container_5_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainer(0);
	        }
	    }
	    function VoteControlComponent_div_8_div_6_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "div", 20);
	            i0.ɵɵtemplate(1, VoteControlComponent_div_8_div_6_ng_container_1_Template, 1, 0, "ng-container", 9);
	            i0.ɵɵtemplate(2, VoteControlComponent_div_8_div_6_em_2_Template, 2, 0, "em", 21);
	            i0.ɵɵtemplate(3, VoteControlComponent_div_8_div_6_ws_standard_poll_3_Template, 1, 3, "ws-standard-poll", 22);
	            i0.ɵɵtemplate(4, VoteControlComponent_div_8_div_6_ws_weighted_poll_4_Template, 1, 3, "ws-weighted-poll", 22);
	            i0.ɵɵtemplate(5, VoteControlComponent_div_8_div_6_ng_container_5_Template, 1, 0, "ng-container", 9);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r15 = i0.ɵɵnextContext(2);
	            var _r0 = i0.ɵɵreference(1);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.beforeOptionsTemplate ? ctx_r15.beforeOptionsTemplate : _r0);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", ctx_r15.voted.hasVoted);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", ctx_r15.poll.type === "standard");
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", ctx_r15.poll.type === "weighted");
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.afterOptionsTemplate ? ctx_r15.afterOptionsTemplate : _r0);
	        }
	    }
	    function VoteControlComponent_div_8_div_7_ng_container_1_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainer(0);
	        }
	    }
	    function VoteControlComponent_div_8_div_7_ws_poll_result_2_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelement(0, "ws-poll-result", 25);
	        }
	        if (rf & 2) {
	            var ctx_r36 = i0.ɵɵnextContext(3);
	            i0.ɵɵproperty("poll", ctx_r36.poll)("results", ctx_r36.results);
	        }
	    }
	    function VoteControlComponent_div_8_div_7_ng_container_3_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainer(0);
	        }
	    }
	    function VoteControlComponent_div_8_div_7_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "div", 20);
	            i0.ɵɵtemplate(1, VoteControlComponent_div_8_div_7_ng_container_1_Template, 1, 0, "ng-container", 9);
	            i0.ɵɵtemplate(2, VoteControlComponent_div_8_div_7_ws_poll_result_2_Template, 1, 2, "ws-poll-result", 24);
	            i0.ɵɵtemplate(3, VoteControlComponent_div_8_div_7_ng_container_3_Template, 1, 0, "ng-container", 9);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r16 = i0.ɵɵnextContext(2);
	            var _r0 = i0.ɵɵreference(1);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r16.beforeResultTemplate ? ctx_r16.beforeResultTemplate : _r0);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", ctx_r16.results);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r16.afterResultTemplate ? ctx_r16.afterResultTemplate : _r0);
	        }
	    }
	    function VoteControlComponent_div_8_button_10_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r39_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "button", 26);
	            i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r39_1); var ctx_r38 = i0.ɵɵnextContext(2); ctx_r38.vote(); return false; });
	            i0.ɵɵelement(1, "i", 27);
	            i0.ɵɵtext(2, "\u00A0 Vote");
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r17 = i0.ɵɵnextContext(2);
	            i0.ɵɵproperty("disabled", ctx_r17.hasVotesSelected());
	        }
	    }
	    function VoteControlComponent_div_8_button_12_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r41_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "button", 28);
	            i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r41_1); var ctx_r40 = i0.ɵɵnextContext(2); ctx_r40.unvote(); return false; });
	            i0.ɵɵelement(1, "i", 29);
	            i0.ɵɵtext(2, "\u00A0 Clear Vote");
	            i0.ɵɵelementEnd();
	        }
	    }
	    function VoteControlComponent_div_8_button_14_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r43_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "button", 30);
	            i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r43_1); var ctx_r42 = i0.ɵɵnextContext(2); ctx_r42.changeView("result"); return false; });
	            i0.ɵɵelement(1, "i", 31);
	            i0.ɵɵtext(2, "\u00A0 View Results");
	            i0.ɵɵelementEnd();
	        }
	    }
	    function VoteControlComponent_div_8_button_16_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r45_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "button", 30);
	            i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r45_1); var ctx_r44 = i0.ɵɵnextContext(2); ctx_r44.changeView("question"); return false; });
	            i0.ɵɵelement(1, "i", 32);
	            i0.ɵɵtext(2, "\u00A0 View Choices");
	            i0.ɵɵelementEnd();
	        }
	    }
	    function VoteControlComponent_div_8_button_19_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r47_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "button", 30);
	            i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r47_1); var ctx_r46 = i0.ɵɵnextContext(2); ctx_r46.resetClick(ctx_r46.poll); return false; });
	            i0.ɵɵelement(1, "i", 33);
	            i0.ɵɵtext(2, "\u00A0 Reset");
	            i0.ɵɵelementEnd();
	        }
	    }
	    function VoteControlComponent_div_8_button_21_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r49_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "button", 30);
	            i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_21_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r49_1); var ctx_r48 = i0.ɵɵnextContext(2); ctx_r48.extendClick(ctx_r48.poll); return false; });
	            i0.ɵɵelement(1, "i", 34);
	            i0.ɵɵtext(2, "\u00A0 Extend");
	            i0.ɵɵelementEnd();
	        }
	    }
	    function VoteControlComponent_div_8_button_23_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r51_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "button", 30);
	            i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_23_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r51_1); var ctx_r50 = i0.ɵɵnextContext(2); ctx_r50.editClick(ctx_r50.poll); return false; });
	            i0.ɵɵelement(1, "i", 35);
	            i0.ɵɵtext(2, "\u00A0 Edit");
	            i0.ɵɵelementEnd();
	        }
	    }
	    function VoteControlComponent_div_8_button_25_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r53_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "button", 36);
	            i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r53_1); var ctx_r52 = i0.ɵɵnextContext(2); ctx_r52.deleteClick(ctx_r52.poll); return false; });
	            i0.ɵɵelement(1, "i", 37);
	            i0.ɵɵtext(2, "\u00A0 Delete");
	            i0.ɵɵelementEnd();
	        }
	    }
	    function VoteControlComponent_div_8_ng_container_28_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainer(0);
	        }
	    }
	    function VoteControlComponent_div_8_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "div", 7);
	            i0.ɵɵelementStart(1, "div", 8);
	            i0.ɵɵtemplate(2, VoteControlComponent_div_8_ng_container_2_Template, 1, 0, "ng-container", 9);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(3, "div", 10);
	            i0.ɵɵelementStart(4, "div", 11);
	            i0.ɵɵtemplate(5, VoteControlComponent_div_8_ng_container_5_Template, 1, 0, "ng-container", 9);
	            i0.ɵɵelementEnd();
	            i0.ɵɵtemplate(6, VoteControlComponent_div_8_div_6_Template, 6, 5, "div", 12);
	            i0.ɵɵtemplate(7, VoteControlComponent_div_8_div_7_Template, 4, 3, "div", 12);
	            i0.ɵɵelement(8, "hr");
	            i0.ɵɵelementStart(9, "div", 13);
	            i0.ɵɵtemplate(10, VoteControlComponent_div_8_button_10_Template, 3, 1, "button", 14);
	            i0.ɵɵtext(11, "\u00A0 ");
	            i0.ɵɵtemplate(12, VoteControlComponent_div_8_button_12_Template, 3, 0, "button", 15);
	            i0.ɵɵtext(13, "\u00A0 ");
	            i0.ɵɵtemplate(14, VoteControlComponent_div_8_button_14_Template, 3, 0, "button", 16);
	            i0.ɵɵtext(15, "\u00A0 ");
	            i0.ɵɵtemplate(16, VoteControlComponent_div_8_button_16_Template, 3, 0, "button", 16);
	            i0.ɵɵtext(17, "\u00A0 ");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(18, "div", 17);
	            i0.ɵɵtemplate(19, VoteControlComponent_div_8_button_19_Template, 3, 0, "button", 16);
	            i0.ɵɵtext(20, "\u00A0 ");
	            i0.ɵɵtemplate(21, VoteControlComponent_div_8_button_21_Template, 3, 0, "button", 16);
	            i0.ɵɵtext(22, "\u00A0 ");
	            i0.ɵɵtemplate(23, VoteControlComponent_div_8_button_23_Template, 3, 0, "button", 16);
	            i0.ɵɵtext(24, "\u00A0 ");
	            i0.ɵɵtemplate(25, VoteControlComponent_div_8_button_25_Template, 3, 0, "button", 18);
	            i0.ɵɵtext(26, "\u00A0 ");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(27, "div", 19);
	            i0.ɵɵtemplate(28, VoteControlComponent_div_8_ng_container_28_Template, 1, 0, "ng-container", 9);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r8 = i0.ɵɵnextContext();
	            var _r2 = i0.ɵɵreference(3);
	            var _r6 = i0.ɵɵreference(7);
	            var _r4 = i0.ɵɵreference(5);
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.titleTemplate ? ctx_r8.titleTemplate : _r2);
	            i0.ɵɵadvance(3);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.questionTemplate ? ctx_r8.questionTemplate : _r6);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", ctx_r8.view === "question");
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", ctx_r8.view === "result");
	            i0.ɵɵadvance(3);
	            i0.ɵɵproperty("ngIf", ctx_r8.showVoteButton());
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("ngIf", ctx_r8.showClearVoteButton());
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("ngIf", ctx_r8.viewResultsState() && ctx_r8.state === "running");
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("ngIf", ctx_r8.view === "result" && ctx_r8.state === "running");
	            i0.ɵɵadvance(3);
	            i0.ɵɵproperty("ngIf", ctx_r8.showResetButton);
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("ngIf", ctx_r8.showExtendButton);
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("ngIf", ctx_r8.showEditButton);
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("ngIf", ctx_r8.showDeleteButton);
	            i0.ɵɵadvance(3);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.footerTemplate ? ctx_r8.footerTemplate : _r4);
	        }
	    }
	    var VoteControlComponent = /** @class */ (function () {
	        function VoteControlComponent() {
	            // events
	            this.edit = new core.EventEmitter();
	            this.extend = new core.EventEmitter();
	            // tslint:disable-next-line:no-output-native
	            this.reset = new core.EventEmitter();
	            this.delete = new core.EventEmitter();
	            this.viewChange = new core.EventEmitter();
	            this.voteSelected = new core.EventEmitter();
	            this.voteRemoved = new core.EventEmitter();
	        }
	        VoteControlComponent.prototype.ngOnInit = function () {
	            this.view = 'question';
	            this.init();
	        };
	        // tslint:disable-next-line:use-lifecycle-interface typedef
	        VoteControlComponent.prototype.ngOnChanges = function () {
	            this.init();
	        };
	        VoteControlComponent.prototype.init = function () {
	            if (this.poll && this.results && this.voted) {
	                this.selection = this.voted.votes;
	                this.calculateState();
	            }
	        };
	        VoteControlComponent.prototype.calculateState = function () {
	            this.state = 'running';
	            var now = new Date();
	            var start = this.parseDate(this.poll.start);
	            var expiry = this.parseDate(this.poll.expiry);
	            if (now < start) {
	                this.state = 'Not yet started';
	                this.view = 'result';
	                return;
	            }
	            if (now > expiry) {
	                this.state = 'expired';
	                this.view = 'result';
	                return;
	            }
	        };
	        VoteControlComponent.prototype.selected = function (model) {
	            this.selection = model;
	        };
	        VoteControlComponent.prototype.vote = function () {
	            if (this.voted.hasVoted) {
	                alert('You have already voted');
	            }
	            else {
	                this.voteSelected.emit(this.selection);
	            }
	        };
	        VoteControlComponent.prototype.unvote = function () {
	            this.voteRemoved.emit(this.selection);
	        };
	        VoteControlComponent.prototype.changeView = function (view) {
	            this.view = view;
	            this.viewChange.emit(view);
	        };
	        VoteControlComponent.prototype.viewResultsState = function () {
	            if (this.view === 'result') {
	                return false;
	            }
	            if (!this.poll) {
	                return false;
	            }
	            if (this.poll.anonymousResults) {
	                return false;
	            }
	            var time = new Date().getTime();
	            var end = this.parseDate(this.poll.expiry).getTime();
	            if (this.poll.showingResults || time > end) {
	                return true;
	            }
	            return false;
	        };
	        VoteControlComponent.prototype.parseDate = function (value) {
	            if (typeof value === 'string') {
	                return new Date(value);
	            }
	            return value;
	        };
	        VoteControlComponent.prototype.hasVotesSelected = function () {
	            if (generic_util.GenericUtil.isNullOrUndefined(this.selection)) {
	                return true;
	            }
	            return this.selection.length === 0;
	        };
	        VoteControlComponent.prototype.editClick = function (poll) {
	            this.edit.emit(poll);
	        };
	        VoteControlComponent.prototype.extendClick = function (poll) {
	            this.extend.emit(poll);
	        };
	        VoteControlComponent.prototype.resetClick = function (poll) {
	            this.reset.emit(poll);
	        };
	        VoteControlComponent.prototype.deleteClick = function (poll) {
	            this.delete.emit(poll);
	        };
	        VoteControlComponent.prototype.showVoteButton = function () {
	            return this.voted && !this.voted.hasVoted && this.view === 'question' && this.state === 'running';
	        };
	        VoteControlComponent.prototype.showClearVoteButton = function () {
	            return this.poll && this.voted && this.voted.hasVoted && this.view === 'question' && this.poll.allowingReVote
	                && this.state === 'running';
	        };
	        return VoteControlComponent;
	    }());
	    exports.VoteControlComponent = VoteControlComponent;
	    VoteControlComponent.ɵfac = function VoteControlComponent_Factory(t) { return new (t || VoteControlComponent)(); };
	    VoteControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: VoteControlComponent, selectors: [["ws-vote-control"]], inputs: { showEditButton: "showEditButton", showExtendButton: "showExtendButton", showResetButton: "showResetButton", showDeleteButton: "showDeleteButton", poll: "poll", results: "results", voted: "voted", beforeOptionsTemplate: "beforeOptionsTemplate", afterOptionsTemplate: "afterOptionsTemplate", beforeResultTemplate: "beforeResultTemplate", afterResultTemplate: "afterResultTemplate", titleTemplate: "titleTemplate", footerTemplate: "footerTemplate", questionTemplate: "questionTemplate" }, outputs: { edit: "edit", extend: "extend", reset: "reset", delete: "delete", viewChange: "viewChange", voteSelected: "voteSelected", voteRemoved: "voteRemoved" }, features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 1, consts: [["voteControlEmptyTemplate", ""], ["voteControlDefaultTitleTemplate", ""], ["voteControlDefaultFooterTemplate", ""], ["voteControlDefaultQuestionTemplate", ""], ["class", "card", 4, "ngIf"], [1, "text-muted"], ["class", "text-muted", 4, "ngIf"], [1, "card"], [1, "card-header"], [4, "ngTemplateOutlet"], [1, "card-body"], [1, "card-title"], ["class", "card-text", 4, "ngIf"], [1, "pull-left"], ["class", "btn btn-success", "href", "#", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-warning", "href", "#", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", "href", "#", 3, "click", 4, "ngIf"], [1, "pull-right"], ["class", "btn btn-danger", "href", "#", 3, "click", 4, "ngIf"], [1, "card-footer", "text-muted"], [1, "card-text"], [4, "ngIf"], [3, "poll", "voted", "initialSelection", "optionSelected", 4, "ngIf"], [3, "poll", "voted", "initialSelection", "optionSelected"], [3, "poll", "results", 4, "ngIf"], [3, "poll", "results"], ["href", "#", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "fa", "fa-check"], ["href", "#", 1, "btn", "btn-warning", 3, "click"], [1, "fa", "fa-close"], ["href", "#", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-area-chart"], [1, "fa", "fa-question-circle"], [1, "fa", "fa-refresh"], [1, "fa", "fa-arrows-h"], [1, "fa", "fa-edit"], ["href", "#", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-trash"]], template: function VoteControlComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵtemplate(0, VoteControlComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(2, VoteControlComponent_ng_template_2_Template, 4, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(4, VoteControlComponent_ng_template_4_Template, 8, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(6, VoteControlComponent_ng_template_6_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(8, VoteControlComponent_div_8_Template, 29, 13, "div", 4);
	            }
	            if (rf & 2) {
	                i0.ɵɵadvance(8);
	                i0.ɵɵproperty("ngIf", ctx.poll);
	            }
	        }, directives: [common.NgIf, common.NgTemplateOutlet, standardPoll_component.StandardPollComponent, weightedPoll_component.WeightedPollComponent, pollResult_component.PollResultComponent], pipes: [common.DatePipe], styles: [""] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(VoteControlComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-vote-control',
	                        templateUrl: './vote-control.component.html',
	                        styleUrls: ['./vote-control.component.css']
	                    }]
	            }], function () { return []; }, { showEditButton: [{
	                    type: core.Input
	                }], showExtendButton: [{
	                    type: core.Input
	                }], showResetButton: [{
	                    type: core.Input
	                }], showDeleteButton: [{
	                    type: core.Input
	                }], poll: [{
	                    type: core.Input
	                }], results: [{
	                    type: core.Input
	                }], voted: [{
	                    type: core.Input
	                }], beforeOptionsTemplate: [{
	                    type: core.Input
	                }], afterOptionsTemplate: [{
	                    type: core.Input
	                }], beforeResultTemplate: [{
	                    type: core.Input
	                }], afterResultTemplate: [{
	                    type: core.Input
	                }], titleTemplate: [{
	                    type: core.Input
	                }], footerTemplate: [{
	                    type: core.Input
	                }], questionTemplate: [{
	                    type: core.Input
	                }], edit: [{
	                    type: core.Output
	                }], extend: [{
	                    type: core.Output
	                }], reset: [{
	                    type: core.Output
	                }], delete: [{
	                    type: core.Output
	                }], viewChange: [{
	                    type: core.Output
	                }], voteSelected: [{
	                    type: core.Output
	                }], voteRemoved: [{
	                    type: core.Output
	                }] });
	    })();
	    
	});

	var defaultLabels = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.DEFAULT_LABELS = void 0;
	    exports.DEFAULT_LABELS = {
	        clearAllText: 'Clear all',
	        loadingText: 'Loading entities...',
	        notFoundText: 'No entities found',
	        typeToSearchText: 'Type to search',
	        placeholder: 'Select entity'
	    };
	    
	});

	var entityTree_service = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.EntityTreeService = void 0;
	    var i0 = core;
	    var i2 = http;
	    var EntityTreeService = /** @class */ (function () {
	        function EntityTreeService(wsi, http) {
	            var _this = this;
	            this.wsi = wsi;
	            this.http = http;
	            this.subjects = [];
	            this.subject = new rxjs.BehaviorSubject(null);
	            this.wsi.serviceConfigSubject.subscribe(function (next) {
	                _this.endpoint = next.apiEndpoint + '/auth/ws_entities';
	            });
	        }
	        EntityTreeService.equals = function (a, b) {
	            return (a.limit === b.limit &&
	                a.offset === b.offset &&
	                a.depth === b.depth &&
	                a.member_of === b.member_of &&
	                a.name === b.name &&
	                a.role === b.role &&
	                a.roleApp === b.roleApp &&
	                a.sort === b.sort);
	        };
	        EntityTreeService.prototype.clearCache = function (params) {
	            if (params === void 0) { params = null; }
	            if (params === null) {
	                this.subjects = [];
	            }
	            else {
	                var cacheEntryIndex = this.subjects.findIndex(function (cE) { return EntityTreeService.equals(cE.params, params); });
	                if (cacheEntryIndex >= 0) {
	                    this.subjects.splice(cacheEntryIndex, 1);
	                }
	            }
	        };
	        EntityTreeService.prototype.getCachedSubject = function (params, fetchOnCreate) {
	            if (params === void 0) { params = {}; }
	            if (fetchOnCreate === void 0) { fetchOnCreate = true; }
	            var cacheEntry = this.subjects.find(function (cE) { return EntityTreeService.equals(cE.params, params); });
	            if (cacheEntry) {
	                return cacheEntry.subject;
	            }
	            else {
	                var newCacheEntry = {
	                    params: params,
	                    subject: new rxjs.BehaviorSubject(null),
	                };
	                this.subjects.push(newCacheEntry);
	                if (fetchOnCreate) {
	                    this.list(params);
	                }
	                return newCacheEntry.subject;
	            }
	        };
	        EntityTreeService.prototype.list = function (params) {
	            var _this = this;
	            if (params === void 0) { params = {}; }
	            var httpParams = new http.HttpParams();
	            if (params.limit !== undefined) {
	                httpParams = httpParams.set('limit', params.limit.toString());
	            }
	            if (params.offset !== undefined) {
	                httpParams = httpParams.set('offset', params.offset.toString());
	            }
	            if (params.depth !== undefined) {
	                httpParams = httpParams.set('depth', params.depth.toString());
	            }
	            if (params.member_of !== undefined) {
	                httpParams = httpParams.set('member_of', params.member_of.toString());
	            }
	            if (params.name !== undefined) {
	                httpParams = httpParams.set('name', params.name.toString());
	            }
	            if (params.role !== undefined) {
	                httpParams = httpParams.set('role', params.role.toString());
	            }
	            if (params.roleApp !== undefined) {
	                httpParams = httpParams.set('roleApp', params.roleApp.toString());
	            }
	            if (params.sort !== undefined) {
	                httpParams = httpParams.set('sort', params.sort.toString());
	            }
	            var observable = this.http.get(this.endpoint, { params: httpParams });
	            var cacheEntry = this.subjects.find(function (cE) { return EntityTreeService.equals(cE.params, params); });
	            if (cacheEntry) {
	                observable.subscribe(function (value) { return cacheEntry.subject.next(value); });
	            }
	            observable.subscribe(function (value) { return _this.subject.next(value); });
	            return observable;
	        };
	        return EntityTreeService;
	    }());
	    exports.EntityTreeService = EntityTreeService;
	    EntityTreeService.ɵfac = function EntityTreeService_Factory(t) { return new (t || EntityTreeService)(i0.ɵɵinject(worldskillsAngularLib_service.WorldskillsAngularLibService), i0.ɵɵinject(i2.HttpClient)); };
	    EntityTreeService.ɵprov = i0.ɵɵdefineInjectable({ token: EntityTreeService, factory: EntityTreeService.ɵfac, providedIn: 'root' });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(EntityTreeService, [{
	                type: core.Injectable,
	                args: [{
	                        providedIn: 'root'
	                    }]
	            }], function () { return [{ type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: i2.HttpClient }]; }, null);
	    })();
	    
	});

	var entityTreeSelect_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.EntityTreeSelectComponent = void 0;
	    var i0 = core;
	    var _c0 = ["ngSelectComponent"];
	    var _c1 = ["wrapperControl"];
	    var _c2 = ["expandControl"];
	    var _c3 = ["expandAllControl"];
	    var _c4 = ["collapseControl"];
	    var _c5 = ["collapseAllControl"];
	    var _c6 = ["separatorControl"];
	    var _c7 = ["showingControl"];
	    function EntityTreeSelectComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
	    function EntityTreeSelectComponent_ng_template_0_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "div", 12);
	            i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 13);
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var template_r20 = ctx.$implicit;
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngTemplateOutlet", template_r20);
	        }
	    }
	    function EntityTreeSelectComponent_ng_template_2_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r25_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "button", 14);
	            i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var click_r23 = ctx.click; $event.preventDefault(); return click_r23(); });
	            i0.ɵɵtext(1, "Expand");
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var enabled_r22 = ctx.enabled;
	            i0.ɵɵproperty("disabled", !enabled_r22);
	        }
	    }
	    function EntityTreeSelectComponent_ng_template_4_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "button", 15);
	            i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_4_Template_button_click_0_listener() { var click_r26 = ctx.click; return click_r26(); });
	            i0.ɵɵtext(1, "Expand all");
	            i0.ɵɵelementEnd();
	        }
	    }
	    function EntityTreeSelectComponent_ng_template_6_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "button", 14);
	            i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_6_Template_button_click_0_listener() { var click_r29 = ctx.click; return click_r29(); });
	            i0.ɵɵtext(1, "Collapse");
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var enabled_r28 = ctx.enabled;
	            i0.ɵɵproperty("disabled", !enabled_r28);
	        }
	    }
	    function EntityTreeSelectComponent_ng_template_8_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r33_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementStart(0, "button", 15);
	            i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r33_1); var click_r31 = ctx.click; $event.preventDefault(); return click_r31(); });
	            i0.ɵɵtext(1, "Collapse all");
	            i0.ɵɵelementEnd();
	        }
	    }
	    function EntityTreeSelectComponent_ng_template_10_Template(rf, ctx) { }
	    function EntityTreeSelectComponent_ng_template_12_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵtext(0);
	        }
	        if (rf & 2) {
	            var showing_r34 = ctx.showing;
	            var total_r35 = ctx.total;
	            i0.ɵɵtextInterpolate2(" Showing ", showing_r34, " of ", total_r35, "\n");
	        }
	    }
	    function EntityTreeSelectComponent_ng_template_14_ng_template_0_Template(rf, ctx) { }
	    function EntityTreeSelectComponent_ng_template_14_ng_template_1_Template(rf, ctx) { }
	    function EntityTreeSelectComponent_ng_template_14_ng_template_2_Template(rf, ctx) { }
	    function EntityTreeSelectComponent_ng_template_14_ng_template_3_Template(rf, ctx) { }
	    function EntityTreeSelectComponent_ng_template_14_ng_template_4_Template(rf, ctx) { }
	    function EntityTreeSelectComponent_ng_template_14_ng_template_5_Template(rf, ctx) { }
	    function EntityTreeSelectComponent_ng_template_14_ng_template_6_Template(rf, ctx) { }
	    var _c8 = function (a0, a1) { return { enabled: a0, click: a1 }; };
	    var _c9 = function (a0) { return { click: a0 }; };
	    function EntityTreeSelectComponent_ng_template_14_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵtemplate(0, EntityTreeSelectComponent_ng_template_14_ng_template_0_Template, 0, 0, "ng-template", 16);
	            i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_14_ng_template_1_Template, 0, 0, "ng-template", 13);
	            i0.ɵɵtemplate(2, EntityTreeSelectComponent_ng_template_14_ng_template_2_Template, 0, 0, "ng-template", 16);
	            i0.ɵɵtemplate(3, EntityTreeSelectComponent_ng_template_14_ng_template_3_Template, 0, 0, "ng-template", 13);
	            i0.ɵɵtemplate(4, EntityTreeSelectComponent_ng_template_14_ng_template_4_Template, 0, 0, "ng-template", 16);
	            i0.ɵɵtemplate(5, EntityTreeSelectComponent_ng_template_14_ng_template_5_Template, 0, 0, "ng-template", 13);
	            i0.ɵɵtemplate(6, EntityTreeSelectComponent_ng_template_14_ng_template_6_Template, 0, 0, "ng-template", 16);
	        }
	        if (rf & 2) {
	            var ctx_r15 = i0.ɵɵnextContext();
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.collapse)("ngTemplateOutletContext", i0.ɵɵpureFunction2(11, _c8, ctx_r15.currentMarkedEntity && ctx_r15.isExpandable(ctx_r15.currentMarkedEntity) && ctx_r15.isExpanded(ctx_r15.currentMarkedEntity), ctx_r15.collapseFn(ctx_r15.currentMarkedEntity)));
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.separator);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.expand)("ngTemplateOutletContext", i0.ɵɵpureFunction2(14, _c8, ctx_r15.currentMarkedEntity && ctx_r15.isExpandable(ctx_r15.currentMarkedEntity) && ctx_r15.isCollapsed(ctx_r15.currentMarkedEntity), ctx_r15.expandFn(ctx_r15.currentMarkedEntity)));
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.separator);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.collapseAll)("ngTemplateOutletContext", i0.ɵɵpureFunction1(17, _c9, ctx_r15.collapseAllFn()));
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.separator);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.controls.expandAll)("ngTemplateOutletContext", i0.ɵɵpureFunction1(19, _c9, ctx_r15.expandAllFn()));
	        }
	    }
	    function EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_ng_template_2_Template(rf, ctx) { }
	    function EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_ng_template_4_Template(rf, ctx) { }
	    var _c10 = function (a0, a1) { return { showing: a0, total: a1 }; };
	    var _c11 = function (a0) { return { $implicit: a0 }; };
	    function EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "div", 25);
	            i0.ɵɵelementStart(1, "div");
	            i0.ɵɵtemplate(2, EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_ng_template_2_Template, 0, 0, "ng-template", 16);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(3, "div");
	            i0.ɵɵtemplate(4, EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_ng_template_4_Template, 0, 0, "ng-template", 16);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	        }
	        if (rf & 2) {
	            var ctx_r49 = i0.ɵɵnextContext(3);
	            var _r14 = i0.ɵɵreference(15);
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r49.controls.showing)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c10, ctx_r49.filtered, ctx_r49.total));
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("ngTemplateOutlet", ctx_r49.controls.wrapper)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c11, _r14));
	        }
	    }
	    function EntityTreeSelectComponent_ng_template_18_ng_container_0_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainerStart(0);
	            i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_Template, 5, 9, "ng-template", 24);
	            i0.ɵɵelementContainerEnd();
	        }
	    }
	    function EntityTreeSelectComponent_ng_template_18_ng_template_1_ng_container_2_Template(rf, ctx) {
	        if (rf & 1) {
	            var _r57_1 = i0.ɵɵgetCurrentView();
	            i0.ɵɵelementContainerStart(0);
	            i0.ɵɵelementStart(1, "span", 26);
	            i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_18_ng_template_1_ng_container_2_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r57_1); var ctx_r56 = i0.ɵɵnextContext(); var entity_r52 = ctx_r56.item; var clear_r53 = ctx_r56.clear; return clear_r53(entity_r52); });
	            i0.ɵɵtext(2, "\u00D7");
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementContainerEnd();
	        }
	    }
	    function EntityTreeSelectComponent_ng_template_18_ng_template_1_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementStart(0, "span");
	            i0.ɵɵtext(1);
	            i0.ɵɵelementEnd();
	            i0.ɵɵtemplate(2, EntityTreeSelectComponent_ng_template_18_ng_template_1_ng_container_2_Template, 3, 0, "ng-container", 17);
	        }
	        if (rf & 2) {
	            var entity_r52 = ctx.item;
	            var ctx_r47 = i0.ɵɵnextContext(2);
	            i0.ɵɵclassMap(ctx_r47.multiple ? "px-2" : "");
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate(ctx_r47.showFullPath ? entity_r52.fullPathName : entity_r52.name.text);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngIf", ctx_r47.multiple);
	        }
	    }
	    function EntityTreeSelectComponent_ng_template_18_ng_container_9_ng_template_1_Template(rf, ctx) { }
	    var _c12 = function (a0, a1) { return { $implicit: a0, depth: a1 }; };
	    function EntityTreeSelectComponent_ng_template_18_ng_container_9_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainerStart(0);
	            i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_18_ng_container_9_ng_template_1_Template, 0, 0, "ng-template", 16);
	            i0.ɵɵelementContainerEnd();
	        }
	        if (rf & 2) {
	            var child_r58 = ctx.$implicit;
	            var depth_r44 = i0.ɵɵnextContext().depth;
	            i0.ɵɵnextContext();
	            var _r17 = i0.ɵɵreference(19);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngTemplateOutlet", _r17)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c12, child_r58, depth_r44 + 1));
	        }
	    }
	    var _c13 = function (a1, a2, a3, a4, a5, a6, a7, a8, a9) { return { "item-wrapper": true, "level-0": a1, "level-1": a2, "level-2": a3, "level-3": a4, "level-4": a5, "level-5": a6, "level-6": a7, "expanded": a8, "collapsed": a9 }; };
	    function EntityTreeSelectComponent_ng_template_18_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵtemplate(0, EntityTreeSelectComponent_ng_template_18_ng_container_0_Template, 2, 0, "ng-container", 17);
	            i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_18_ng_template_1_Template, 3, 5, "ng-template", 18);
	            i0.ɵɵelementStart(2, "ng-option", 19);
	            i0.ɵɵelementStart(3, "div", 20);
	            i0.ɵɵelementStart(4, "div", 21);
	            i0.ɵɵelementStart(5, "div", 22);
	            i0.ɵɵtext(6);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementStart(7, "div", 23);
	            i0.ɵɵtext(8);
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵelementEnd();
	            i0.ɵɵtemplate(9, EntityTreeSelectComponent_ng_template_18_ng_container_9_Template, 2, 5, "ng-container", 11);
	        }
	        if (rf & 2) {
	            var entity_r43 = ctx.$implicit;
	            var depth_r44 = ctx.depth;
	            var ctx_r18 = i0.ɵɵnextContext();
	            i0.ɵɵproperty("ngIf", ctx_r18.showControls && !!ctx_r18.treeEntities);
	            i0.ɵɵadvance(2);
	            i0.ɵɵproperty("value", entity_r43)("disabled", !entity_r43.selectable);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("id", ctx_r18.getDomIdentifier("entity-" + entity_r43.id))("ngClass", i0.ɵɵpureFunctionV(9, _c13, [depth_r44 === 0, depth_r44 === 1, depth_r44 === 2, depth_r44 === 3, depth_r44 === 4, depth_r44 === 5, depth_r44 === 6, ctx_r18.isExpandable(entity_r43) && ctx_r18.isExpanded(entity_r43), ctx_r18.isExpandable(entity_r43) && ctx_r18.isCollapsed(entity_r43)]));
	            i0.ɵɵadvance(2);
	            i0.ɵɵattribute("data-entity-expander-id", ctx_r18.getDomIdentifier(entity_r43.id));
	            i0.ɵɵadvance(1);
	            i0.ɵɵtextInterpolate1(" ", ctx_r18.isExpandable(entity_r43) && ctx_r18.isExpanded(entity_r43) ? "expanded" : ctx_r18.isExpandable(entity_r43) && ctx_r18.isCollapsed(entity_r43) ? "collapsed" : "", " ");
	            i0.ɵɵadvance(2);
	            i0.ɵɵtextInterpolate(entity_r43.name.text);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngForOf", entity_r43.children);
	        }
	    }
	    function EntityTreeSelectComponent_ng_container_20_ng_template_1_Template(rf, ctx) { }
	    var _c14 = function (a0) { return { $implicit: a0, depth: 0 }; };
	    function EntityTreeSelectComponent_ng_container_20_Template(rf, ctx) {
	        if (rf & 1) {
	            i0.ɵɵelementContainerStart(0);
	            i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_container_20_ng_template_1_Template, 0, 0, "ng-template", 16);
	            i0.ɵɵelementContainerEnd();
	        }
	        if (rf & 2) {
	            var entity_r61 = ctx.$implicit;
	            i0.ɵɵnextContext();
	            var _r17 = i0.ɵɵreference(19);
	            i0.ɵɵadvance(1);
	            i0.ɵɵproperty("ngTemplateOutlet", _r17)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c14, entity_r61));
	        }
	    }
	    function isTreeEntity(obj) {
	        return obj && typeof obj === 'object' && 'type' in obj && obj.type === 'treeEntity';
	    }
	    var EntityTreeSelectComponent = /** @class */ (function () {
	        function EntityTreeSelectComponent(entityTreeService) {
	            var _this = this;
	            this.entityTreeService = entityTreeService;
	            /** labels for ng-select */
	            this.labels = {};
	            /** control templates for the toolbar buttons */
	            this.controls = {};
	            /** entities input array */
	            this.entities = null;
	            /** always make children selectable of passed entities */
	            this.selectableChildren = true;
	            /** show unselectable parents */
	            this.showUnselectableParents = true;
	            /** whether or not to show the full path for selected entities */
	            this.showFullPath = true;
	            /** whether or not to show the header controls */
	            this.showControls = true;
	            /** whether to use api caching or not, caching is done per query request object, see EntityTreeService for more details */
	            this.cache = true;
	            /** if the tree is expanded by default */
	            this.defaultExpand = false;
	            this.expandedSearch = [];
	            this.flattenedEntities = [];
	            this.flattenedTreeEntities = [];
	            this.lastTerm = ' ';
	            this.refreshing = false;
	            this.update = new rxjs.Subject();
	            this.fetchedTreeEntities = [];
	            this.cachedWriteValueSubject = new rxjs.Subject();
	            this.treeEntitiesSubject = new rxjs.Subject();
	            this.hasFocus = false;
	            this.loading = true;
	            this.treeEntities = [];
	            this.expanded = [];
	            /** ng-select input */
	            this.appendTo = null;
	            /** ng-select input */
	            this.closeOnSelect = true;
	            /** ng-select input */
	            this.clearable = true;
	            /** ng-select input */
	            this.clearOnBackspace = true;
	            /** ng-select input */
	            this.dropdownPosition = 'auto';
	            /** ng-select input */
	            this.markFirst = true;
	            /** ng-select input */
	            this.isOpen = undefined;
	            /** ng-select input */
	            this.maxSelectedItems = undefined;
	            /** ng-select input */
	            this.hideSelected = false;
	            /** ng-select input */
	            this.multiple = false;
	            /** ng-select input */
	            this.searchable = true;
	            /** ng-select input */
	            this.readonly = false;
	            /** ng-select input */
	            this.searchWhileComposing = true;
	            /** ng-select input */
	            this.selectOnTab = false;
	            /** ng-select input */
	            this.openOnEnter = true;
	            /** ng-select input */
	            this.virtualScroll = false;
	            /** ng-select input */
	            this.inputAttrs = undefined;
	            /** ng-select input */
	            this.tabIndex = undefined;
	            /** ng-select output */
	            // tslint:disable-next-line:no-output-native
	            this.blur = new core.EventEmitter();
	            /** ng-select output */
	            // tslint:disable-next-line:no-output-native
	            this.focus = new core.EventEmitter();
	            /** ng-select output */
	            // tslint:disable-next-line:no-output-native
	            this.change = new core.EventEmitter();
	            /** ng-select output */
	            // tslint:disable-next-line:no-output-native
	            this.open = new core.EventEmitter();
	            /** ng-select output */
	            // tslint:disable-next-line:no-output-native
	            this.close = new core.EventEmitter();
	            /** ng-select output */
	            this.search = new core.EventEmitter();
	            /** ng-select output */
	            this.clear = new core.EventEmitter();
	            /** ng-select output */
	            this.add = new core.EventEmitter();
	            /** ng-select output */
	            this.remove = new core.EventEmitter();
	            /** ng-select output */
	            // tslint:disable-next-line:no-output-native
	            this.scroll = new core.EventEmitter();
	            /** ng-select output */
	            this.scrollToEnd = new core.EventEmitter();
	            /** the id callback function for the Input entities */
	            this.entityIdCallback = function (entity) { return entity ? entity.id : undefined; };
	            this.htmlId = uuid.v4();
	            this.compareWith = this.compareWith || (function (a, b) {
	                var aId = _this.toId(a);
	                var bId = _this.toId(b);
	                return aId && bId && aId === bId;
	            });
	            this.onKeyDown = this.onKeyDown.bind(this);
	            this.onClick = this.onClick.bind(this);
	            this.searchFn = this.searchFn.bind(this);
	        }
	        Object.defineProperty(EntityTreeSelectComponent.prototype, "currentMarkedEntity", {
	            get: function () {
	                return (this.ngSelectComponent.itemsList.markedItem ? this.ngSelectComponent.itemsList.markedItem.value : null);
	            },
	            enumerable: false,
	            configurable: true
	        });
	        Object.defineProperty(EntityTreeSelectComponent.prototype, "filtered", {
	            get: function () {
	                return this.getFiltered(this.treeEntities);
	            },
	            enumerable: false,
	            configurable: true
	        });
	        Object.defineProperty(EntityTreeSelectComponent.prototype, "total", {
	            get: function () {
	                return this.ngSelectComponent.itemsList.items.length;
	            },
	            enumerable: false,
	            configurable: true
	        });
	        Object.defineProperty(EntityTreeSelectComponent.prototype, "queryParams", {
	            get: function () {
	                return Object.assign({ limit: 9999, depth: 10 }, this.query);
	            },
	            enumerable: false,
	            configurable: true
	        });
	        EntityTreeSelectComponent.prototype.ngOnChanges = function (changes) {
	            if ('entities' in changes) {
	                this.createTreeEntities();
	            }
	        };
	        EntityTreeSelectComponent.prototype.ngOnInit = function () {
	            var _this = this;
	            this.labels = Object.assign(Object.assign({}, defaultLabels.DEFAULT_LABELS), this.labels);
	            this.controls = Object.assign({ wrapper: this.wrapperControl, expand: this.expandControl, expandAll: this.expandAllControl, collapse: this.collapseControl, collapseAll: this.collapseAllControl, separator: this.separatorControl, showing: this.showingControl }, this.controls);
	            var observable;
	            if (this.cache === false) {
	                observable = this.entityTreeService.list(this.queryParams);
	            }
	            else {
	                observable = this.entityTreeService.getCachedSubject(this.queryParams);
	            }
	            this.writeValueSubscription = rxjs.combineLatest([
	                this.cachedWriteValueSubject,
	                this.treeEntitiesSubject,
	            ]).subscribe(function (_a) {
	                var _b = __read(_a, 1), value = _b[0];
	                return _this.ngSelectComponent.writeValue(_this.multiple ?
	                    (value || []).map(function (o) { return _this.toTreeEntity(o); }).filter(function (o) { return !!o; }) :
	                    _this.toTreeEntity(value));
	            });
	            observable.subscribe(function (entities) {
	                if (!!entities) {
	                    _this.fetchedTreeEntities = entities.ws_entity_list.map(function (entity) { return _this.deepCopyEntity(entity); });
	                    _this.createTreeEntities();
	                    _this.loading = false;
	                    _this.treeEntitiesSubject.next();
	                }
	            });
	            this.update.subscribe(function () {
	                _this.refreshing = true;
	                _this.ngSelectComponent.filter(_this.lastTerm);
	                _this.refreshing = false;
	            });
	            document.addEventListener('click', this.onClick, true);
	            document.addEventListener('keydown', this.onKeyDown, true);
	        };
	        EntityTreeSelectComponent.prototype.createTreeEntities = function () {
	            var _this = this;
	            this.treeEntities = this.fetchedTreeEntities.map(function (e) { return _this.deepCopyEntity(e); });
	            this.flattenedEntities = this.flatten(this.entities || []);
	            this.setSelectable(this.treeEntities, this.entities === null ? true : this.flattenedEntities.map(function (entity) { return entity.id; }));
	            if (this.selectableChildren) {
	                this.setSelectableForChildren(this.treeEntities);
	            }
	            this.clearUnselectableTrees(this.treeEntities);
	            this.setParentsForEntities(this.treeEntities);
	            this.setPathNamesAndTypes(this.treeEntities);
	            if (!this.showUnselectableParents) {
	                this.treeEntities = this.flattenUnselectableParents(this.treeEntities);
	            }
	            this.flattenedTreeEntities = this.flatten(this.treeEntities);
	            if (this.defaultExpand) {
	                this.expandAll(this.treeEntities, false);
	            }
	            if (this.hasFocus) {
	                setTimeout(function () { return _this.update.next(null); });
	            }
	        };
	        EntityTreeSelectComponent.prototype.deepCopyEntity = function (entity) {
	            var _this = this;
	            return Object.assign(Object.assign({}, entity), { children: entity.children.map(function (e) { return _this.deepCopyEntity(e); }) });
	        };
	        EntityTreeSelectComponent.prototype.ngOnDestroy = function () {
	            this.writeValueSubscription.unsubscribe();
	            document.removeEventListener('click', this.onClick, true);
	            document.removeEventListener('keydown', this.onKeyDown, true);
	        };
	        EntityTreeSelectComponent.prototype.isDomIdentifier = function (name) {
	            return name.startsWith("_" + this.htmlId);
	        };
	        EntityTreeSelectComponent.prototype.getDomIdentifier = function (name) {
	            return "_" + this.htmlId + "-" + name;
	        };
	        EntityTreeSelectComponent.prototype.stripDomIdentifier = function (name) {
	            return name.replace("_" + this.htmlId + "-", '');
	        };
	        EntityTreeSelectComponent.prototype.flatten = function (entities) {
	            var _this = this;
	            return entities.reduce(function (acc, entity) { return entity.children ? __spread(acc, [entity], _this.flatten(entity.children)) : __spread(acc, [entity]); }, []);
	        };
	        EntityTreeSelectComponent.prototype.setParentsForEntities = function (entities) {
	            var _this = this;
	            entities.forEach(function (e) {
	                e.children.forEach(function (c) {
	                    c.parent = e;
	                });
	                _this.setParentsForEntities(e.children);
	            });
	        };
	        EntityTreeSelectComponent.prototype.setPathNamesAndTypes = function (entities) {
	            var _this = this;
	            entities.forEach(function (e) {
	                var paths = [];
	                var p = e;
	                while (p) {
	                    paths.push(p.name.text);
	                    p = p.parent;
	                }
	                e.allPaths = paths.reverse();
	                e.fullPathName = e.allPaths.join(' > ');
	                e.allPaths = e.allPaths.map(function (n) { return n.toLowerCase(); });
	                e.paths = __spread(e.allPaths);
	                e.paths.pop();
	                e.type = 'treeEntity';
	                _this.setPathNamesAndTypes(e.children);
	            });
	        };
	        EntityTreeSelectComponent.prototype.setSelectable = function (entities, selectables) {
	            var _this = this;
	            entities.forEach(function (e) {
	                e.filtered = true;
	                e.selectable = selectables === true ? true : selectables.includes(e.id);
	                _this.setSelectable(e.children, selectables);
	            });
	        };
	        EntityTreeSelectComponent.prototype.setSelectableForChildren = function (entities) {
	            var _this = this;
	            entities.forEach(function (e) {
	                if (e.selectable) {
	                    e.children.forEach(function (c) {
	                        c.selectable = true;
	                    });
	                }
	                _this.setSelectableForChildren(e.children);
	            });
	        };
	        EntityTreeSelectComponent.prototype.clearSafeChildren = function (entity) {
	            var _this = this;
	            return entity.children.every(function (e) { return !e.selectable && _this.clearSafeChildren(e); });
	        };
	        EntityTreeSelectComponent.prototype.clearUnselectableTrees = function (entities) {
	            var clear = true;
	            while (clear) {
	                clear = false;
	                for (var i = 0; i < entities.length; i++) {
	                    this.clearUnselectableTrees(entities[i].children);
	                    if (!entities[i].selectable && this.clearSafeChildren(entities[i])) {
	                        entities.splice(i, 1);
	                        clear = true;
	                        break;
	                    }
	                }
	            }
	        };
	        EntityTreeSelectComponent.prototype.clearUnselectableTree = function (entity) {
	            if (entity.children.length === 0 || entity.children.every(function (c) { return !c.selectable; })) {
	                return false;
	            }
	            else {
	                this.clearUnselectableTrees(entity.children);
	                return true;
	            }
	        };
	        EntityTreeSelectComponent.prototype.flattenUnselectableParents = function (entities) {
	            entities = __spread(entities);
	            var modified = true;
	            while (modified) {
	                modified = false;
	                var _loop_1 = function (i) {
	                    if (!entities[i].selectable) {
	                        var children = __spread(entities[i].children);
	                        children.forEach(function (c) {
	                            c.parent = entities[i].parent;
	                        });
	                        entities.splice.apply(entities, __spread([i, 1], children));
	                        modified = true;
	                        return "break";
	                    }
	                };
	                for (var i = 0; i < entities.length; i++) {
	                    var state_1 = _loop_1(i);
	                    if (state_1 === "break")
	                        break;
	                }
	            }
	            // tslint:disable-next-line:prefer-for-of
	            for (var i = 0; i < entities.length; i++) {
	                entities[i].children = this.flattenUnselectableParents(entities[i].children);
	            }
	            return entities;
	        };
	        EntityTreeSelectComponent.prototype.isExpandable = function (entity) {
	            return entity.children.length > 0;
	        };
	        EntityTreeSelectComponent.prototype.expandFn = function (entity) {
	            var _this = this;
	            return function () { return entity && _this.expand(entity); };
	        };
	        EntityTreeSelectComponent.prototype.expand = function (entity) {
	            if (!this.expanded.includes(entity.id)) {
	                this.expanded.push(entity.id);
	            }
	            this.update.next(entity);
	        };
	        EntityTreeSelectComponent.prototype.expandAllFn = function () {
	            var _this = this;
	            return function () { return _this.expandAll(_this.treeEntities); };
	        };
	        EntityTreeSelectComponent.prototype.expandAll = function (entities, update) {
	            var _this = this;
	            if (update === void 0) { update = true; }
	            entities.forEach(function (entity) {
	                if (_this.isExpandable(entity) && !_this.expanded.includes(entity.id)) {
	                    _this.expanded.push(entity.id);
	                }
	                _this.expandAll(entity.children, false);
	            });
	            if (update) {
	                this.update.next(null);
	            }
	        };
	        EntityTreeSelectComponent.prototype.expandArray = function (entities) {
	            var _this = this;
	            entities.forEach(function (entity) {
	                if (!_this.expanded.includes(entity.id)) {
	                    _this.expanded.push(entity.id);
	                }
	            });
	            this.update.next(null);
	        };
	        EntityTreeSelectComponent.prototype.expandTree = function (entity) {
	            var currentEntity = entity;
	            while (currentEntity) {
	                if (!this.expanded.includes(currentEntity.id)) {
	                    this.expanded.push(currentEntity.id);
	                }
	                currentEntity = currentEntity.parent;
	            }
	            this.update.next(null);
	        };
	        EntityTreeSelectComponent.prototype.expandTrees = function (entities) {
	            var _this = this;
	            entities.forEach(function (entity) {
	                var currentEntity = entity;
	                while (currentEntity) {
	                    if (!_this.expanded.includes(currentEntity.id)) {
	                        _this.expanded.push(currentEntity.id);
	                    }
	                    currentEntity = currentEntity.parent;
	                }
	            });
	            this.update.next(null);
	        };
	        EntityTreeSelectComponent.prototype.collapseFn = function (entity) {
	            var _this = this;
	            return function () { return entity && _this.collapse(entity); };
	        };
	        EntityTreeSelectComponent.prototype.collapse = function (entity) {
	            if (this.expanded.includes(entity.id)) {
	                this.expanded.splice(this.expanded.findIndex(function (e) { return e === entity.id; }), 1);
	            }
	            this.update.next(entity);
	        };
	        EntityTreeSelectComponent.prototype.collapseAllFn = function () {
	            var _this = this;
	            return function () { return _this.collapseAll(_this.treeEntities); };
	        };
	        EntityTreeSelectComponent.prototype.collapseAll = function (entities, update) {
	            var _this = this;
	            if (update === void 0) { update = true; }
	            entities.forEach(function (entity) {
	                if (_this.isExpandable(entity) && _this.expanded.includes(entity.id)) {
	                    _this.expanded.splice(_this.expanded.findIndex(function (e) { return e === entity.id; }), 1);
	                }
	                _this.collapseAll(entity.children, false);
	            });
	            if (update) {
	                this.update.next(null);
	            }
	        };
	        EntityTreeSelectComponent.prototype.toggleExpanded = function (entity) {
	            if (this.expanded.includes(entity.id)) {
	                this.expanded.splice(this.expanded.findIndex(function (e) { return e === entity.id; }), 1);
	            }
	            else {
	                this.expanded.push(entity.id);
	            }
	            this.update.next(entity);
	        };
	        EntityTreeSelectComponent.prototype.toggleExpandedById = function (id) {
	            if (this.expanded.includes(id)) {
	                this.expanded.splice(this.expanded.findIndex(function (e) { return e === id; }), 1);
	            }
	            else {
	                this.expanded.push(id);
	            }
	            this.update.next(null);
	        };
	        EntityTreeSelectComponent.prototype.isTreeExpanded = function (entity) {
	            var currentEntity = entity;
	            while (currentEntity) {
	                if (!this.isExpanded(currentEntity)) {
	                    return false;
	                }
	                else {
	                    currentEntity = currentEntity.parent;
	                }
	            }
	            return true;
	        };
	        EntityTreeSelectComponent.prototype.isExpanded = function (entity) {
	            return this.expanded.includes(entity.id);
	        };
	        EntityTreeSelectComponent.prototype.isCollapsed = function (entity) {
	            return !this.expanded.includes(entity.id);
	        };
	        EntityTreeSelectComponent.prototype.isVisible = function (entity) {
	            return !entity.parent || this.isTreeExpanded(entity.parent);
	        };
	        EntityTreeSelectComponent.prototype.trackByFn = function (entity) {
	            return entity.id;
	        };
	        EntityTreeSelectComponent.prototype.onClear = function (event) {
	            this.lastTerm = ' ';
	            this.update.next(null);
	            this.clear.emit(event);
	        };
	        EntityTreeSelectComponent.prototype.onOpen = function (event) {
	            var _this = this;
	            setTimeout(function () {
	                _this.update.next(null);
	            });
	            this.open.emit(event);
	        };
	        EntityTreeSelectComponent.prototype.onSearch = function (event) {
	            if (!this.refreshing) {
	                if (!!event.term.trim() && !this.lastSearch.trim()) {
	                    this.expandedSearch = __spread(this.expanded);
	                }
	                else if (!event.term.trim() && !!this.lastSearch.trim()) {
	                    this.expanded = __spread(this.expandedSearch);
	                    this.update.next(null);
	                }
	                if (!!event.term.trim()) {
	                    this.expandTrees(event.items);
	                }
	            }
	            if (event.term === '') {
	                this.lastTerm = ' ';
	                this.update.next(null);
	            }
	            this.lastSearch = event.term;
	            this.search.emit(event);
	        };
	        EntityTreeSelectComponent.prototype.searchFn = function (term, entity) {
	            this.lastTerm = term;
	            var terms = !!term.trim() ? term.split(/\s*>\s*/) : [];
	            var visible = this.entityContainsSearchTerm(terms, entity);
	            entity.filtered = visible;
	            return visible && this.isVisible(entity);
	        };
	        EntityTreeSelectComponent.prototype.entityContainsSearchTerm = function (terms, entity) {
	            if (terms.length > 0) {
	                var copyOfTerms = __spread(terms);
	                var actualTerm = copyOfTerms.pop().trim();
	                if (entity.name.text.toLowerCase().includes(actualTerm) &&
	                    copyOfTerms.every(function (term) { return entity.paths.some(function (path) { return path.includes(term.trim()); }); })) {
	                    return true;
	                }
	                else {
	                    return this.childrenContainSearchTerm(terms, entity.children);
	                }
	            }
	            else {
	                return true;
	            }
	        };
	        EntityTreeSelectComponent.prototype.childrenContainSearchTerm = function (terms, entities) {
	            var _this = this;
	            return entities.some(function (e) { return _this.entityContainsSearchTerm(terms, e); });
	        };
	        EntityTreeSelectComponent.prototype.onChange = function (entity) {
	            var _this = this;
	            this.change.emit(this.multiple ? entity.map(function (o) { return _this.toId(o); }) : this.toId(entity));
	        };
	        EntityTreeSelectComponent.prototype.onClick = function (event) {
	            var target = event.target;
	            if (target.dataset && target.dataset.entityExpanderId && this.isDomIdentifier(target.dataset.entityExpanderId)) {
	                var entityId = parseInt(this.stripDomIdentifier(target.dataset.entityExpanderId), 0);
	                this.toggleExpandedById(entityId);
	                event.preventDefault();
	                event.stopImmediatePropagation();
	            }
	        };
	        EntityTreeSelectComponent.prototype.onKeyDown = function (event) {
	            if (this.hasFocus) {
	                var itemsList = this.ngSelectComponent.itemsList;
	                var entity_1 = itemsList.markedItem ? itemsList.markedItem.value : null;
	                if (entity_1) {
	                    if (event.metaKey) {
	                        var prevent = false;
	                        var scrollAndUpdate = false;
	                        if (event.key === 'ArrowLeft') {
	                            if (this.isExpandable(entity_1) && this.isExpanded(entity_1)) {
	                                this.collapse(entity_1);
	                            }
	                            else if (entity_1.parent) {
	                                var option = itemsList.filteredItems.find(function (item) { return item.value.id === entity_1.parent.id; });
	                                if (option) {
	                                    itemsList.markItem(option);
	                                    scrollAndUpdate = true;
	                                }
	                            }
	                            else {
	                                itemsList.markPreviousItem();
	                                scrollAndUpdate = true;
	                            }
	                            prevent = true;
	                        }
	                        if (event.key === 'ArrowRight') {
	                            if (this.isExpandable(entity_1) && this.isCollapsed(entity_1)) {
	                                this.expand(entity_1);
	                            }
	                            else if (this.isExpandable(entity_1) && this.isExpanded(entity_1)) {
	                                var option = itemsList.filteredItems.find(function (item) { return item.value.parent_id && item.value.parent_id === entity_1.id; });
	                                if (option) {
	                                    itemsList.markItem(option);
	                                    scrollAndUpdate = true;
	                                }
	                            }
	                            else {
	                                itemsList.markNextItem();
	                                scrollAndUpdate = true;
	                            }
	                            prevent = true;
	                        }
	                        if (scrollAndUpdate) {
	                            var dom = document.getElementById(itemsList.markedItem.htmlId);
	                            if (dom) {
	                                dom.scrollIntoView();
	                            }
	                            this.update.next(null);
	                        }
	                        if (prevent) {
	                            event.preventDefault();
	                            event.stopImmediatePropagation();
	                        }
	                    }
	                }
	            }
	        };
	        EntityTreeSelectComponent.prototype.getFiltered = function (entities) {
	            var _this = this;
	            return entities.reduce(function (acc, e) { return (e.filtered ? acc + 1 : acc) + _this.getFiltered(e.children); }, 0);
	        };
	        EntityTreeSelectComponent.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.ngSelectComponent.registerOnChange(function (obj) { return fn(_this.multiple ? obj.map(function (o) { return _this.toId(o); }) : _this.toId(obj)); });
	        };
	        EntityTreeSelectComponent.prototype.registerOnTouched = function (fn) {
	            this.ngSelectComponent.registerOnTouched(fn);
	        };
	        EntityTreeSelectComponent.prototype.setDisabledState = function (isDisabled) {
	            this.ngSelectComponent.setDisabledState(isDisabled);
	        };
	        EntityTreeSelectComponent.prototype.writeValue = function (obj) {
	            this.cachedWriteValueSubject.next(obj);
	        };
	        EntityTreeSelectComponent.prototype.toId = function (obj) {
	            if (isTreeEntity(obj)) {
	                return obj.id;
	            }
	            else if (typeof obj === 'number') {
	                return obj;
	            }
	            else if (typeof obj === 'object') {
	                return this.entityIdCallback(obj);
	            }
	            else {
	                return null;
	            }
	        };
	        EntityTreeSelectComponent.prototype.toTreeEntity = function (obj) {
	            var _this = this;
	            if (isTreeEntity(obj)) {
	                return this.flattenedTreeEntities.find(function (e) { return e.id === obj.id; });
	            }
	            else if (typeof obj === 'number') {
	                return this.flattenedTreeEntities.find(function (e) { return e.id === obj; });
	            }
	            else if (typeof obj === 'object') {
	                return this.flattenedTreeEntities.find(function (e) { return e.id === _this.entityIdCallback(obj); });
	            }
	            else {
	                return null;
	            }
	        };
	        EntityTreeSelectComponent.prototype.toEntity = function (obj) {
	            var _this = this;
	            if (isTreeEntity(obj)) {
	                return this.flattenedEntities.find(function (e) { return _this.entityIdCallback(e) === obj.id; });
	            }
	            else if (typeof obj === 'number') {
	                return this.flattenedEntities.find(function (e) { return _this.entityIdCallback(e) === obj; });
	            }
	            else if (typeof obj === 'object') {
	                return this.flattenedEntities.find(function (e) { return _this.entityIdCallback(e) === _this.entityIdCallback(obj); });
	            }
	            else {
	                return null;
	            }
	        };
	        return EntityTreeSelectComponent;
	    }());
	    exports.EntityTreeSelectComponent = EntityTreeSelectComponent;
	    EntityTreeSelectComponent.ɵfac = function EntityTreeSelectComponent_Factory(t) { return new (t || EntityTreeSelectComponent)(i0.ɵɵdirectiveInject(entityTree_service.EntityTreeService)); };
	    EntityTreeSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EntityTreeSelectComponent, selectors: [["ws-entity-tree-select"]], viewQuery: function EntityTreeSelectComponent_Query(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵstaticViewQuery(_c0, true);
	                i0.ɵɵstaticViewQuery(_c1, true);
	                i0.ɵɵstaticViewQuery(_c2, true);
	                i0.ɵɵstaticViewQuery(_c3, true);
	                i0.ɵɵstaticViewQuery(_c4, true);
	                i0.ɵɵstaticViewQuery(_c5, true);
	                i0.ɵɵstaticViewQuery(_c6, true);
	                i0.ɵɵstaticViewQuery(_c7, true);
	            }
	            if (rf & 2) {
	                var _t;
	                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ngSelectComponent = _t.first);
	                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.wrapperControl = _t.first);
	                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.expandControl = _t.first);
	                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.expandAllControl = _t.first);
	                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.collapseControl = _t.first);
	                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.collapseAllControl = _t.first);
	                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.separatorControl = _t.first);
	                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.showingControl = _t.first);
	            }
	        }, inputs: { labels: "labels", controls: "controls", query: "query", entities: "entities", selectableChildren: "selectableChildren", showUnselectableParents: "showUnselectableParents", showFullPath: "showFullPath", showControls: "showControls", cache: "cache", defaultExpand: "defaultExpand", appendTo: "appendTo", closeOnSelect: "closeOnSelect", clearable: "clearable", clearOnBackspace: "clearOnBackspace", dropdownPosition: "dropdownPosition", markFirst: "markFirst", isOpen: "isOpen", maxSelectedItems: "maxSelectedItems", hideSelected: "hideSelected", multiple: "multiple", searchable: "searchable", readonly: "readonly", searchWhileComposing: "searchWhileComposing", selectOnTab: "selectOnTab", openOnEnter: "openOnEnter", virtualScroll: "virtualScroll", inputAttrs: "inputAttrs", tabIndex: "tabIndex", compareWith: "compareWith", entityIdCallback: "entityIdCallback" }, outputs: { blur: "blur", focus: "focus", change: "change", open: "open", close: "close", search: "search", clear: "clear", add: "add", remove: "remove", scroll: "scroll", scrollToEnd: "scrollToEnd" }, features: [i0.ɵɵProvidersFeature([
	                {
	                    provide: forms.NG_VALUE_ACCESSOR,
	                    useExisting: core.forwardRef(function () { return EntityTreeSelectComponent; }),
	                    multi: true
	                }
	            ]), i0.ɵɵNgOnChangesFeature], decls: 21, vars: 28, consts: [["wrapperControl", ""], ["expandControl", ""], ["expandAllControl", ""], ["collapseControl", ""], ["collapseAllControl", ""], ["separatorControl", ""], ["showingControl", ""], ["controlsWrapper", ""], [3, "appendTo", "closeOnSelect", "clearAllText", "clearable", "clearOnBackspace", "compareWith", "dropdownPosition", "loadingText", "markFirst", "isOpen", "maxSelectedItems", "hideSelected", "multiple", "notFoundText", "searchable", "readonly", "searchFn", "searchWhileComposing", "selectOnTab", "openOnEnter", "typeToSearchText", "placeholder", "virtualScroll", "inputAttrs", "loading", "tabIndex", "trackByFn", "blur", "focus", "change", "open", "close", "search", "clear", "add", "remove", "scroll", "scrollToEnd"], ["ngSelectComponent", ""], ["entityOption", ""], [4, "ngFor", "ngForOf"], ["role", "group", 1, "btn-group", "btn-group-sm"], [3, "ngTemplateOutlet"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "btn", "btn-primary", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], ["ng-label-tmp", ""], [3, "value", "disabled"], [3, "id", "ngClass"], [1, "expander"], [1, "arrow"], [1, "item"], ["ng-header-tmp", ""], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center"], [1, "font-weight-bold", "px-2", "border-left", 2, "cursor", "pointer", 3, "click"]], template: function EntityTreeSelectComponent_Template(rf, ctx) {
	            if (rf & 1) {
	                i0.ɵɵtemplate(0, EntityTreeSelectComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(2, EntityTreeSelectComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(4, EntityTreeSelectComponent_ng_template_4_Template, 2, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(6, EntityTreeSelectComponent_ng_template_6_Template, 2, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(8, EntityTreeSelectComponent_ng_template_8_Template, 2, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(10, EntityTreeSelectComponent_ng_template_10_Template, 0, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(12, EntityTreeSelectComponent_ng_template_12_Template, 1, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(14, EntityTreeSelectComponent_ng_template_14_Template, 7, 21, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵelementStart(16, "ng-select", 8, 9);
	                i0.ɵɵlistener("blur", function EntityTreeSelectComponent_Template_ng_select_blur_16_listener($event) { ctx.hasFocus = false; return ctx.blur.emit($event); })("focus", function EntityTreeSelectComponent_Template_ng_select_focus_16_listener($event) { ctx.hasFocus = true; return ctx.focus.emit($event); })("change", function EntityTreeSelectComponent_Template_ng_select_change_16_listener($event) { return ctx.onChange($event); })("open", function EntityTreeSelectComponent_Template_ng_select_open_16_listener($event) { return ctx.onOpen($event); })("close", function EntityTreeSelectComponent_Template_ng_select_close_16_listener($event) { return ctx.close.emit($event); })("search", function EntityTreeSelectComponent_Template_ng_select_search_16_listener($event) { return ctx.onSearch($event); })("clear", function EntityTreeSelectComponent_Template_ng_select_clear_16_listener($event) { return ctx.onClear($event); })("add", function EntityTreeSelectComponent_Template_ng_select_add_16_listener($event) { return ctx.add.emit($event); })("remove", function EntityTreeSelectComponent_Template_ng_select_remove_16_listener($event) { return ctx.remove.emit($event); })("scroll", function EntityTreeSelectComponent_Template_ng_select_scroll_16_listener($event) { return ctx.scroll.emit($event); })("scrollToEnd", function EntityTreeSelectComponent_Template_ng_select_scrollToEnd_16_listener($event) { return ctx.scrollToEnd.emit($event); });
	                i0.ɵɵtemplate(18, EntityTreeSelectComponent_ng_template_18_Template, 10, 19, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
	                i0.ɵɵtemplate(20, EntityTreeSelectComponent_ng_container_20_Template, 2, 4, "ng-container", 11);
	                i0.ɵɵelementEnd();
	            }
	            if (rf & 2) {
	                i0.ɵɵadvance(16);
	                i0.ɵɵproperty("appendTo", ctx.appendTo)("closeOnSelect", ctx.closeOnSelect)("clearAllText", ctx.labels.clearAllText)("clearable", ctx.clearable)("clearOnBackspace", ctx.clearOnBackspace)("compareWith", ctx.compareWith)("dropdownPosition", ctx.dropdownPosition)("loadingText", ctx.labels.loadingText)("markFirst", ctx.markFirst)("isOpen", ctx.isOpen)("maxSelectedItems", ctx.maxSelectedItems)("hideSelected", ctx.hideSelected)("multiple", ctx.multiple)("notFoundText", ctx.labels.notFoundText)("searchable", ctx.searchable)("readonly", ctx.readonly)("searchFn", ctx.searchFn)("searchWhileComposing", ctx.searchWhileComposing)("selectOnTab", ctx.selectOnTab)("openOnEnter", ctx.openOnEnter)("typeToSearchText", ctx.labels.typeToSearchText)("placeholder", ctx.labels.placeholder)("virtualScroll", ctx.virtualScroll)("inputAttrs", ctx.inputAttrs)("loading", ctx.loading)("tabIndex", ctx.tabIndex)("trackByFn", ctx.trackByFn);
	                i0.ɵɵadvance(4);
	                i0.ɵɵproperty("ngForOf", ctx.treeEntities);
	            }
	        }, directives: [ngSelect.NgSelectComponent, common.NgForOf, common.NgTemplateOutlet, common.NgIf, ngSelect.ɵh, ngSelect.ɵr, common.NgClass, ngSelect.ɵj], styles: [".level-0[_ngcontent-%COMP%]{margin-left:0}.level-1[_ngcontent-%COMP%]{margin-left:20px}.level-2[_ngcontent-%COMP%]{margin-left:40px}.level-3[_ngcontent-%COMP%]{margin-left:60px}.level-4[_ngcontent-%COMP%]{margin-left:80px}.level-5[_ngcontent-%COMP%]{margin-left:100px}.level-6[_ngcontent-%COMP%]{margin-left:120px}.item-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row}.item[_ngcontent-%COMP%]{flex:1}.expander[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center;text-align:center;width:20px}.arrow[_ngcontent-%COMP%]{border:5px solid transparent;font-size:0;height:0;visibility:hidden;width:0}.item-wrapper.collapsed[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{border-left-color:#000;margin:0 0 0 3px;visibility:visible}.item-wrapper.expanded[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{border-top-color:#000;margin:3px 0 0;visibility:visible}"] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(EntityTreeSelectComponent, [{
	                type: core.Component,
	                args: [{
	                        selector: 'ws-entity-tree-select',
	                        templateUrl: './entity-tree-select.component.html',
	                        styleUrls: ['./entity-tree-select.component.css'],
	                        providers: [
	                            {
	                                provide: forms.NG_VALUE_ACCESSOR,
	                                useExisting: core.forwardRef(function () { return EntityTreeSelectComponent; }),
	                                multi: true
	                            }
	                        ]
	                    }]
	            }], function () { return [{ type: entityTree_service.EntityTreeService }]; }, { labels: [{
	                    type: core.Input
	                }], controls: [{
	                    type: core.Input
	                }], query: [{
	                    type: core.Input
	                }], entities: [{
	                    type: core.Input
	                }], selectableChildren: [{
	                    type: core.Input
	                }], showUnselectableParents: [{
	                    type: core.Input
	                }], showFullPath: [{
	                    type: core.Input
	                }], showControls: [{
	                    type: core.Input
	                }], cache: [{
	                    type: core.Input
	                }], defaultExpand: [{
	                    type: core.Input
	                }], appendTo: [{
	                    type: core.Input
	                }], closeOnSelect: [{
	                    type: core.Input
	                }], clearable: [{
	                    type: core.Input
	                }], clearOnBackspace: [{
	                    type: core.Input
	                }], dropdownPosition: [{
	                    type: core.Input
	                }], markFirst: [{
	                    type: core.Input
	                }], isOpen: [{
	                    type: core.Input
	                }], maxSelectedItems: [{
	                    type: core.Input
	                }], hideSelected: [{
	                    type: core.Input
	                }], multiple: [{
	                    type: core.Input
	                }], searchable: [{
	                    type: core.Input
	                }], readonly: [{
	                    type: core.Input
	                }], searchWhileComposing: [{
	                    type: core.Input
	                }], selectOnTab: [{
	                    type: core.Input
	                }], openOnEnter: [{
	                    type: core.Input
	                }], virtualScroll: [{
	                    type: core.Input
	                }], inputAttrs: [{
	                    type: core.Input
	                }], tabIndex: [{
	                    type: core.Input
	                }], blur: [{
	                    type: core.Output
	                }], focus: [{
	                    type: core.Output
	                }], change: [{
	                    type: core.Output
	                }], open: [{
	                    type: core.Output
	                }], close: [{
	                    type: core.Output
	                }], search: [{
	                    type: core.Output
	                }], clear: [{
	                    type: core.Output
	                }], add: [{
	                    type: core.Output
	                }], remove: [{
	                    type: core.Output
	                }], scroll: [{
	                    type: core.Output
	                }], scrollToEnd: [{
	                    type: core.Output
	                }], ngSelectComponent: [{
	                    type: core.ViewChild,
	                    args: ['ngSelectComponent', { static: true }]
	                }], wrapperControl: [{
	                    type: core.ViewChild,
	                    args: ['wrapperControl', { static: true }]
	                }], expandControl: [{
	                    type: core.ViewChild,
	                    args: ['expandControl', { static: true }]
	                }], expandAllControl: [{
	                    type: core.ViewChild,
	                    args: ['expandAllControl', { static: true }]
	                }], collapseControl: [{
	                    type: core.ViewChild,
	                    args: ['collapseControl', { static: true }]
	                }], collapseAllControl: [{
	                    type: core.ViewChild,
	                    args: ['collapseAllControl', { static: true }]
	                }], separatorControl: [{
	                    type: core.ViewChild,
	                    args: ['separatorControl', { static: true }]
	                }], showingControl: [{
	                    type: core.ViewChild,
	                    args: ['showingControl', { static: true }]
	                }], compareWith: [{
	                    type: core.Input
	                }], entityIdCallback: [{
	                    type: core.Input
	                }] });
	    })();
	    
	});

	var worldskillsAngularLib_module = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.WorldskillsAngularLibModule = void 0;
	    var i0 = core;
	    var i1 = angularOauth2Oidc;
	    var WorldskillsAngularLibModule = /** @class */ (function () {
	        function WorldskillsAngularLibModule() {
	        }
	        return WorldskillsAngularLibModule;
	    }());
	    exports.WorldskillsAngularLibModule = WorldskillsAngularLibModule;
	    WorldskillsAngularLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: WorldskillsAngularLibModule });
	    WorldskillsAngularLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function WorldskillsAngularLibModule_Factory(t) { return new (t || WorldskillsAngularLibModule)(); }, imports: [[
	                platformBrowser.BrowserModule,
	                forms.FormsModule,
	                angularOauth2Oidc.OAuthModule.forRoot(),
	                ngBootstrap.NgbModule,
	                ngSelect.NgSelectModule
	            ]] });
	    (function () {
	        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WorldskillsAngularLibModule, { declarations: [worldskillsAngularLib_component.WorldskillsAngularLibComponent,
	                alert_component.AlertComponent,
	                alerts_component.AlertsComponent,
	                breadcrumbs_component.BreadcrumbsComponent,
	                dateRange_component.DateRangeComponent,
	                datetimePicker_component.DatetimePickerComponent,
	                entityTreeSelect_component.EntityTreeSelectComponent,
	                footer_component.FooterComponent,
	                header_component.HeaderComponent,
	                logo_component.LogoComponent,
	                menuAccess_pipe.MenuAccessPipe,
	                pollResult_component.PollResultComponent,
	                puppeteerBanner_component.PuppeteerBannerComponent,
	                dateSort_pipe.SortPipe,
	                stagingBanner_component.StagingBannerComponent,
	                standardPoll_component.StandardPollComponent,
	                voteControl_component.VoteControlComponent,
	                wordmark_component.WordmarkComponent,
	                weightedPoll_component.WeightedPollComponent], imports: [platformBrowser.BrowserModule,
	                forms.FormsModule, i1.OAuthModule, ngBootstrap.NgbModule,
	                ngSelect.NgSelectModule], exports: [worldskillsAngularLib_component.WorldskillsAngularLibComponent,
	                alert_component.AlertComponent,
	                alerts_component.AlertsComponent,
	                breadcrumbs_component.BreadcrumbsComponent,
	                dateRange_component.DateRangeComponent,
	                datetimePicker_component.DatetimePickerComponent,
	                entityTreeSelect_component.EntityTreeSelectComponent,
	                footer_component.FooterComponent,
	                header_component.HeaderComponent,
	                logo_component.LogoComponent,
	                menuAccess_pipe.MenuAccessPipe,
	                pollResult_component.PollResultComponent,
	                puppeteerBanner_component.PuppeteerBannerComponent,
	                dateSort_pipe.SortPipe,
	                stagingBanner_component.StagingBannerComponent,
	                standardPoll_component.StandardPollComponent,
	                voteControl_component.VoteControlComponent,
	                wordmark_component.WordmarkComponent,
	                weightedPoll_component.WeightedPollComponent] });
	    })();
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(WorldskillsAngularLibModule, [{
	                type: core.NgModule,
	                args: [{
	                        declarations: [
	                            worldskillsAngularLib_component.WorldskillsAngularLibComponent,
	                            alert_component.AlertComponent,
	                            alerts_component.AlertsComponent,
	                            breadcrumbs_component.BreadcrumbsComponent,
	                            dateRange_component.DateRangeComponent,
	                            datetimePicker_component.DatetimePickerComponent,
	                            entityTreeSelect_component.EntityTreeSelectComponent,
	                            footer_component.FooterComponent,
	                            header_component.HeaderComponent,
	                            logo_component.LogoComponent,
	                            menuAccess_pipe.MenuAccessPipe,
	                            pollResult_component.PollResultComponent,
	                            puppeteerBanner_component.PuppeteerBannerComponent,
	                            dateSort_pipe.SortPipe,
	                            stagingBanner_component.StagingBannerComponent,
	                            standardPoll_component.StandardPollComponent,
	                            voteControl_component.VoteControlComponent,
	                            wordmark_component.WordmarkComponent,
	                            weightedPoll_component.WeightedPollComponent
	                        ],
	                        imports: [
	                            platformBrowser.BrowserModule,
	                            forms.FormsModule,
	                            angularOauth2Oidc.OAuthModule.forRoot(),
	                            ngBootstrap.NgbModule,
	                            ngSelect.NgSelectModule
	                        ],
	                        exports: [
	                            worldskillsAngularLib_component.WorldskillsAngularLibComponent,
	                            alert_component.AlertComponent,
	                            alerts_component.AlertsComponent,
	                            breadcrumbs_component.BreadcrumbsComponent,
	                            dateRange_component.DateRangeComponent,
	                            datetimePicker_component.DatetimePickerComponent,
	                            entityTreeSelect_component.EntityTreeSelectComponent,
	                            footer_component.FooterComponent,
	                            header_component.HeaderComponent,
	                            logo_component.LogoComponent,
	                            menuAccess_pipe.MenuAccessPipe,
	                            pollResult_component.PollResultComponent,
	                            puppeteerBanner_component.PuppeteerBannerComponent,
	                            dateSort_pipe.SortPipe,
	                            stagingBanner_component.StagingBannerComponent,
	                            standardPoll_component.StandardPollComponent,
	                            voteControl_component.VoteControlComponent,
	                            wordmark_component.WordmarkComponent,
	                            weightedPoll_component.WeightedPollComponent
	                        ]
	                    }]
	            }], null, null);
	    })();
	    
	});

	var i18nText = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var link = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var pair = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var app_config = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var http_config = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var service_config = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var dateRange = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var date_util = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.DateUtil = void 0;
	    var DateUtil = /** @class */ (function () {
	        function DateUtil() {
	        }
	        // example: '2019-04-25T16:10:25+0200'
	        DateUtil.toJavaDateString = function (date, locale) {
	            return common.formatDate(date, 'yyyy-MM-ddTHH:mm:ssZ', locale);
	        };
	        return DateUtil;
	    }());
	    exports.DateUtil = DateUtil;
	    
	});

	var http_util = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.HttpUtil = void 0;
	    var HttpUtil = /** @class */ (function () {
	        function HttpUtil() {
	        }
	        HttpUtil.objectToParams = function (obj) {
	            var params = new http.HttpParams();
	            Object.getOwnPropertyNames(params).forEach(function (propName, propIndex) {
	                var prop = obj[propName];
	                if (array_util.ArrayUtil.isArray(prop)) {
	                    prop.forEach(function (item, valueIndex) {
	                        if (valueIndex === 0) {
	                            params = params.set(propName, item);
	                        }
	                        else {
	                            params = params.append(propName, item);
	                        }
	                    });
	                }
	                else {
	                    params = params.set(propName, prop);
	                }
	            });
	            return params;
	        };
	        return HttpUtil;
	    }());
	    exports.HttpUtil = HttpUtil;
	    
	});

	var ws_component = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.WsComponent = void 0;
	    var i0 = core;
	    var WsComponent = /** @class */ (function () {
	        function WsComponent() {
	            this.subscriptions = new rxjs.Subscription();
	        }
	        WsComponent.prototype.ngOnDestroy = function () {
	            this.subscriptions.unsubscribe();
	        };
	        // tslint:disable-next-line:typedef
	        WsComponent.prototype.subscribe = function () {
	            var _this = this;
	            var teardowns = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                teardowns[_i] = arguments[_i];
	            }
	            teardowns.forEach(function (teardown) { return _this.subscriptions.add(teardown); });
	        };
	        return WsComponent;
	    }());
	    exports.WsComponent = WsComponent;
	    WsComponent.ɵfac = function WsComponent_Factory(t) { return new (t || WsComponent)(); };
	    WsComponent.ɵdir = i0.ɵɵdefineDirective({ type: WsComponent });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(WsComponent, [{
	                type: core.Directive
	            }], function () { return []; }, null);
	    })();
	    
	});

	var ws_service = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.WsService = exports.NO_SUBJECT = exports.LOADER_ONLY = exports.FULL = exports.isRequestOptions = exports.isFetchParams = exports.isMulticastOptions = void 0;
	    function isMulticastOptions(object) {
	        return object && ('subject' in object || 'loader' in object || 'subscription' in object || 'onError' in object);
	    }
	    exports.isMulticastOptions = isMulticastOptions;
	    // Fetch params can be empty and probably is most of the time, so hard to check this in a signature
	    function isFetchParams(object) {
	        return object && ('limit' in object || 'offset' in object || 'sort' in object || 'l' in object);
	    }
	    exports.isFetchParams = isFetchParams;
	    function isRequestOptions(object) {
	        return object && ('url' in object);
	    }
	    exports.isRequestOptions = isRequestOptions;
	    exports.FULL = {
	        subject: true,
	        loader: true,
	        subscription: true
	    };
	    exports.LOADER_ONLY = {
	        loader: true
	    };
	    exports.NO_SUBJECT = {
	        loader: true,
	        subscription: true
	    };
	    var WsService = /** @class */ (function () {
	        function WsService() {
	            var _this = this;
	            this.loaders = new rxjs.BehaviorSubject(0);
	            this.subscription = null;
	            this.subject = new rxjs.ReplaySubject(1);
	            this.loading = new rxjs.ReplaySubject(1);
	            this.loaders.subscribe(function (numLoaders) { return _this.loading.next(numLoaders !== 0); });
	        }
	        WsService.prototype.resolveArgs = function (p1, p2, p3, defaultMulticastOptions, defaultFetchParams) {
	            var fetchParams;
	            var multicastOptions;
	            var requestOptions;
	            if (isRequestOptions(p3)) {
	                fetchParams = p1;
	                multicastOptions = p2;
	                requestOptions = p3;
	            }
	            else if (isRequestOptions(p2)) {
	                requestOptions = p2;
	                if (isMulticastOptions(p1)) {
	                    multicastOptions = p1;
	                }
	                else if (!isMulticastOptions(p1)) {
	                    fetchParams = p1;
	                }
	            }
	            else if (isRequestOptions(p1)) {
	                requestOptions = p1;
	            }
	            else {
	                if (isMulticastOptions(p2) && !isMulticastOptions(p1)) {
	                    fetchParams = p1;
	                    multicastOptions = p2;
	                }
	                else {
	                    if (isMulticastOptions(p1)) {
	                        multicastOptions = p1;
	                    }
	                    else if (!isMulticastOptions(p1)) {
	                        fetchParams = p1;
	                    }
	                }
	            }
	            if (fetchParams === undefined) {
	                fetchParams = defaultFetchParams;
	            }
	            if (multicastOptions === undefined) {
	                multicastOptions = defaultMulticastOptions;
	            }
	            if (requestOptions === undefined) {
	                requestOptions = {};
	            }
	            return {
	                fetchParams: fetchParams,
	                multicastOptions: multicastOptions,
	                requestOptions: requestOptions
	            };
	        };
	        WsService.prototype.incrementLoader = function () {
	            var _this = this;
	            this.loaders.pipe(operators.take(1)).subscribe(function (v) {
	                _this.loaders.next(++v);
	            });
	        };
	        WsService.prototype.decrementLoader = function () {
	            var _this = this;
	            this.loaders.pipe(operators.take(1)).subscribe(function (v) {
	                var loaders = Math.max(0, v - 1);
	                _this.loaders.next(loaders);
	            });
	        };
	        WsService.prototype.multicast = function (observable, options) {
	            var _this = this;
	            if (options === void 0) { options = exports.FULL; }
	            var loader = options.loader, subject = options.subject, subscription = options.subscription, onError = options.onError;
	            if (loader) {
	                this.incrementLoader();
	            }
	            if (subscription && this.subscription) {
	                if (loader && !this.subscription.closed) {
	                    this.decrementLoader();
	                    this.subscription.unsubscribe();
	                }
	            }
	            var s = observable.subscribe(function (value) {
	                if (loader) {
	                    _this.decrementLoader();
	                }
	                if (subject) {
	                    _this.subject.next(value);
	                }
	            }, function (error) {
	                if (loader) {
	                    _this.decrementLoader();
	                }
	                if (onError) {
	                    onError(error);
	                }
	            });
	            if (subscription) {
	                this.subscription = s;
	            }
	        };
	        WsService.prototype.request = function (observable, options) {
	            if (options === void 0) { options = exports.FULL; }
	            this.multicast(observable, options);
	            return observable;
	        };
	        WsService.prototype.requestMany = function (observables, options) {
	            if (options === void 0) { options = exports.NO_SUBJECT; }
	            var forkJoined = rxjs.forkJoin(observables);
	            this.multicast(forkJoined, options);
	            return forkJoined;
	        };
	        return WsService;
	    }());
	    exports.WsService = WsService;
	    
	});

	var alertType = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.AlertType = void 0;
	    var AlertType;
	    (function (AlertType) {
	        AlertType["error"] = "alert-danger";
	        AlertType["info"] = "alert-info";
	        AlertType["success"] = "alert-success";
	        AlertType["warning"] = "alert-warning";
	    })(AlertType = exports.AlertType || (exports.AlertType = {}));
	    
	});

	var alert$1 = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var redirect_handler = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.RedirectHandler = exports.RETURN_URL_KEY = void 0;
	    exports.RETURN_URL_KEY = 'returnUrl';
	    var RedirectHandler = /** @class */ (function () {
	        function RedirectHandler(service, router) {
	            this.service = service;
	            this.router = router;
	        }
	        RedirectHandler.prototype.redirectOrReturn = function (redirectRoute, failure) {
	            var _this = this;
	            if (!this.service.isLoggedIn()) {
	                this.service.login();
	            }
	            else {
	                if (this.hasReturnUrl()) {
	                    this.handleReturnUrl(function (error) { return failure(error); });
	                }
	                else {
	                    this.service.loadUserProfile(function (next) {
	                        sessionStorage.removeItem(exports.RETURN_URL_KEY);
	                        _this.redirectUserToRoute(next, redirectRoute);
	                    }, function (error) {
	                        failure(error);
	                    });
	                }
	            }
	        };
	        RedirectHandler.prototype.hasReturnUrl = function () {
	            var returnUrl = sessionStorage.getItem(exports.RETURN_URL_KEY);
	            return returnUrl !== null && returnUrl !== undefined && returnUrl !== 'undefined';
	        };
	        RedirectHandler.prototype.handleReturnUrl = function (failure) {
	            var _this = this;
	            var returnUrl = sessionStorage.getItem(exports.RETURN_URL_KEY);
	            sessionStorage.removeItem(exports.RETURN_URL_KEY);
	            this.service.loadUserProfile(function (next) { return _this.redirectUserToUrl(next, returnUrl); }, function (error) { return failure(error); });
	        };
	        // override this method to catch a user being redirected to a specific returnUrl (when a user pastes a link in the browser)
	        RedirectHandler.prototype.redirectUserToUrl = function (user, returnUrl) {
	            this.router.navigateByUrl(returnUrl);
	        };
	        // override this method to catcch a user being redirected to the homepage route. useful if you need to load the homepage from the DB
	        RedirectHandler.prototype.redirectUserToRoute = function (user, route) {
	            this.router.navigate(route);
	        };
	        return RedirectHandler;
	    }());
	    exports.RedirectHandler = RedirectHandler;
	    
	});

	var authGuardAccess = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var entityTreeView = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.EntityTreeView = void 0;
	    var EntityTreeView = /** @class */ (function () {
	        function EntityTreeView(obj) {
	            this.id = obj && obj.id || undefined;
	            this.name = obj && obj.name || { lang_code: 'en', text: null };
	            this.parent_id = obj && obj.parent_id || undefined;
	            this.children = obj && obj.children || [];
	        }
	        return EntityTreeView;
	    }());
	    exports.EntityTreeView = EntityTreeView;
	    
	});

	var getUserParams = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var roleApplication = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var role = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var userList = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var user = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var wsEntity = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var wsiAuth_service = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.WsiAuthService = void 0;
	    var i0 = core;
	    var i2 = http;
	    var WsiAuthService = /** @class */ (function () {
	        function WsiAuthService(wsi, http, oAuthService) {
	            var _this = this;
	            this.wsi = wsi;
	            this.http = http;
	            this.oAuthService = oAuthService;
	            // listen for config changes
	            this.wsi.serviceConfigSubject.subscribe(function (next) {
	                _this.appCode = next.appCode;
	                _this.endpoint = next.apiEndpoint + '/auth';
	            });
	        }
	        WsiAuthService.prototype.ping = function () {
	            var url = this.endpoint + "/ping";
	            return this.http.get(url, {});
	        };
	        WsiAuthService.prototype.getLoggedInUser = function (showChildRoles) {
	            if (showChildRoles === void 0) { showChildRoles = false; }
	            var params = new http.HttpParams();
	            params = params.set('show_child_roles', String(showChildRoles));
	            this.appCode.forEach(function (code) {
	                if (params.has('app_code')) {
	                    params = params.append('app_code', String(code));
	                }
	                else {
	                    params = params.set('app_code', String(code));
	                }
	            });
	            var url = this.endpoint + "/users/loggedIn";
	            return this.http.get(url, { params: params });
	        };
	        WsiAuthService.prototype.logout = function () {
	            var authUrl = this.endpoint + "/sessions/logout";
	            return this.http.post(authUrl, {});
	        };
	        /*
	          User
	        */
	        WsiAuthService.prototype.listUsers = function (filter) {
	            var params = http_util.HttpUtil.objectToParams(filter);
	            var url = this.endpoint + "/users";
	            return this.http.get(url, { params: params });
	        };
	        WsiAuthService.prototype.getUser = function (id) {
	            var url = this.endpoint + "/users/" + id;
	            return this.http.get(url);
	        };
	        WsiAuthService.prototype.getUserByPerson = function (id) {
	            var url = this.endpoint + "/users/person/" + id;
	            return this.http.get(url);
	        };
	        /*
	          User Roles
	        */
	        WsiAuthService.prototype.addRole = function (userId, roleId) {
	            var url = this.endpoint + "/users/" + userId + "/roles";
	            var data = { role_id: roleId };
	            return this.http.post(url, data);
	        };
	        WsiAuthService.prototype.addRoleWithEntity = function (userId, roleId, entityId) {
	            var url = this.endpoint + "/users/" + userId + "/roles";
	            var data = { role_id: roleId, ws_entity_id: entityId };
	            return this.http.post(url, data);
	        };
	        WsiAuthService.prototype.deleteRole = function (userId, roleId) {
	            var url = this.endpoint + "/users/" + userId + "/roles/" + roleId;
	            return this.http.delete(url);
	        };
	        WsiAuthService.prototype.deleteRoleWithEntity = function (userId, roleId, entityId) {
	            var url = this.endpoint + "/users/" + userId + "/roles/" + roleId + "?ws_entity_id=" + entityId;
	            return this.http.delete(url);
	        };
	        return WsiAuthService;
	    }());
	    exports.WsiAuthService = WsiAuthService;
	    WsiAuthService.ɵfac = function WsiAuthService_Factory(t) { return new (t || WsiAuthService)(i0.ɵɵinject(worldskillsAngularLib_service.WorldskillsAngularLibService), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(angularOauth2Oidc.OAuthService)); };
	    WsiAuthService.ɵprov = i0.ɵɵdefineInjectable({ token: WsiAuthService, factory: WsiAuthService.ɵfac, providedIn: 'root' });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(WsiAuthService, [{
	                type: core.Injectable,
	                args: [{
	                        providedIn: 'root'
	                    }]
	            }], function () { return [{ type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: i2.HttpClient }, { type: angularOauth2Oidc.OAuthService }]; }, null);
	    })();
	    
	});

	var wsiNgAuth_service = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.WsiNgAuthService = void 0;
	    var i0 = core;
	    // TODO: This class can be cleanup up and optimized
	    // TODO: Generate auth state
	    var WsiNgAuthService = /** @class */ (function () {
	        function WsiNgAuthService(wsi, oAuthService, router, service) {
	            var _this = this;
	            this.wsi = wsi;
	            this.oAuthService = oAuthService;
	            this.router = router;
	            this.service = service;
	            this.wsi.authConfigSubject.subscribe(function (next) {
	                _this.oAuthService.configure(next);
	                _this.currentUserSubject = new rxjs.BehaviorSubject(JSON.parse(sessionStorage.getItem('user.current')));
	                _this.currentUser = _this.currentUserSubject.asObservable();
	                _this.oAuthService.setStorage(sessionStorage);
	                _this.oAuthService.tryLogin();
	            });
	        }
	        WsiNgAuthService.prototype.keepAlive = function () {
	            var _this = this;
	            this.service.ping().subscribe(function (error) {
	                console.log(error);
	                _this.logout();
	            });
	        };
	        Object.defineProperty(WsiNgAuthService.prototype, "currentUserValue", {
	            get: function () {
	                return this.currentUserSubject.value;
	            },
	            enumerable: false,
	            configurable: true
	        });
	        WsiNgAuthService.prototype.isLoggedIn = function () {
	            return this.oAuthService.hasValidAccessToken();
	        };
	        WsiNgAuthService.prototype.loadUserProfile = function (success, failure) {
	            return tslib_es6.__awaiter(this, void 0, void 0, function () {
	                var _this = this;
	                return __generator(this, function (_a) {
	                    this.service.getLoggedInUser().subscribe(function (next) {
	                        if (next != null) {
	                            sessionStorage.setItem('user.current', JSON.stringify(next));
	                            _this.currentUserSubject.next(next);
	                        }
	                    }, function (error) {
	                        _this.currentUser = null;
	                        failure(error);
	                    }, function () { return success(_this.currentUserSubject.value); });
	                    return [2 /*return*/];
	                });
	            });
	        };
	        WsiNgAuthService.prototype.login = function () {
	            this.oAuthService.initImplicitFlow();
	        };
	        WsiNgAuthService.prototype.logout = function () {
	            var _this = this;
	            this.service.logout().subscribe(function (result) { return _this.clearSession(); }, function (error) { return _this.clearSession(); }, function () { });
	        };
	        WsiNgAuthService.prototype.clearSession = function () {
	            sessionStorage.removeItem('nonce');
	            sessionStorage.removeItem('user.current');
	            sessionStorage.removeItem('access_token_stored_at');
	            sessionStorage.removeItem('access_token');
	            sessionStorage.removeItem('token');
	            this.oAuthService.logOut();
	            this.currentUserSubject.next(null);
	        };
	        return WsiNgAuthService;
	    }());
	    exports.WsiNgAuthService = WsiNgAuthService;
	    WsiNgAuthService.ɵfac = function WsiNgAuthService_Factory(t) { return new (t || WsiNgAuthService)(i0.ɵɵinject(worldskillsAngularLib_service.WorldskillsAngularLibService), i0.ɵɵinject(angularOauth2Oidc.OAuthService), i0.ɵɵinject(router.Router), i0.ɵɵinject(wsiAuth_service.WsiAuthService)); };
	    WsiNgAuthService.ɵprov = i0.ɵɵdefineInjectable({ token: WsiNgAuthService, factory: WsiNgAuthService.ɵfac, providedIn: 'root' });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(WsiNgAuthService, [{
	                type: core.Injectable,
	                args: [{
	                        providedIn: 'root'
	                    }]
	            }], function () { return [{ type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: angularOauth2Oidc.OAuthService }, { type: router.Router }, { type: wsiAuth_service.WsiAuthService }]; }, null);
	    })();
	    
	});

	var appAuth_guard = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.AppAuthGuard = void 0;
	    var i0 = core;
	    var AppAuthGuard = /** @class */ (function () {
	        function AppAuthGuard(auth, wsi, router) {
	            this.auth = auth;
	            this.wsi = wsi;
	            this.router = router;
	        }
	        AppAuthGuard.prototype.canActivate = function (route, state) {
	            var user = sessionStorage.getItem('user.current');
	            // ensure the user session exists
	            if (generic_util.GenericUtil.isNullOrUndefined(user)) {
	                return this.login(state);
	            }
	            var userModel = JSON.parse(user);
	            // ensure the user model is valid
	            if (generic_util.GenericUtil.isNullOrUndefined(userModel)) {
	                return this.login(state);
	            }
	            var roles = route.data.roles;
	            if (generic_util.GenericUtil.isNullOrUndefined(roles)) {
	                return false;
	            }
	            var userRoles = userModel.roles
	                .filter(function (x) { return roles.findIndex(function (y) { return y.appCode === x.role_application.application_code && y.name === x.name; }) !== -1; });
	            return userRoles.length > 0;
	        };
	        AppAuthGuard.prototype.login = function (state) {
	            sessionStorage.setItem('returnUrl', state.url);
	            this.auth.login();
	            return false;
	        };
	        return AppAuthGuard;
	    }());
	    exports.AppAuthGuard = AppAuthGuard;
	    AppAuthGuard.ɵfac = function AppAuthGuard_Factory(t) { i0.ɵɵinvalidFactory(); };
	    AppAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ token: AppAuthGuard, factory: AppAuthGuard.ɵfac, providedIn: 'root' });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(AppAuthGuard, [{
	                type: core.Injectable,
	                args: [{
	                        providedIn: 'root'
	                    }]
	            }], function () { return [{ type: wsiNgAuth_service.WsiNgAuthService }, { type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: undefined }]; }, null);
	    })();
	    
	});

	var select_directive = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.SelectDirective = void 0;
	    var i0 = core;
	    var SelectDirective = /** @class */ (function () {
	        function SelectDirective(ngSelectComponent) {
	            this.ngSelectComponent = ngSelectComponent;
	            this.wsChange = new core.EventEmitter();
	        }
	        SelectDirective.prototype.ngOnChanges = function (changes) {
	            if (this.ngSelectComponent && changes.items) {
	                this.updateItems(changes.items.currentValue, changes.items.isFirstChange());
	            }
	        };
	        SelectDirective.prototype.ngOnInit = function () {
	            var _this = this;
	            if (this.ngSelectComponent) {
	                var labelReaderFromMainSelector = void 0;
	                var valueReaderFromMainSelector = void 0;
	                var groupReaderFromMainSelector = void 0;
	                if (this.entryReader) {
	                    if (Array.isArray(this.entryReader)) {
	                        var _a = __read(this.entryReader, 3), valueReaderFromMainArray = _a[0], labelReaderFromMainArray = _a[1], groupReaderFromMainArray = _a[2];
	                        labelReaderFromMainSelector = labelReaderFromMainArray;
	                        valueReaderFromMainSelector = valueReaderFromMainArray;
	                        groupReaderFromMainSelector = groupReaderFromMainArray;
	                    }
	                    else {
	                        var _b = this.entryReader, labelReaderFromMainObject = _b.labelReader, valueReaderFromMainObject = _b.valueReader, groupReaderFromMainObject = _b.groupReader;
	                        labelReaderFromMainSelector = labelReaderFromMainObject;
	                        valueReaderFromMainSelector = valueReaderFromMainObject;
	                        groupReaderFromMainSelector = groupReaderFromMainObject;
	                    }
	                    if (!this.labelReader) {
	                        this.labelReader = labelReaderFromMainSelector;
	                    }
	                    if (!this.valueReader) {
	                        this.valueReader = valueReaderFromMainSelector;
	                    }
	                    if (!this.groupReader) {
	                        this.groupReader = groupReaderFromMainSelector;
	                    }
	                }
	                if (!this.labelReader || !this.valueReader) {
	                    throw new Error('Provide both a means to read the label and the value');
	                }
	                if (typeof this.labelReader === 'string') {
	                    this.labelReader = this.labelReader.split('.');
	                }
	                if (typeof this.valueReader === 'string') {
	                    this.valueReader = this.valueReader.split('.');
	                }
	                this.ngSelectComponent.bindLabel = 'label';
	                this.ngSelectComponent.bindValue = 'value';
	                if (this.groupReader) {
	                    this.ngSelectComponent.groupBy = 'group';
	                }
	                if (this.wsChange) {
	                    var currentChangeEvent_1 = this.ngSelectComponent.changeEvent;
	                    var newEventEmitter_1 = new core.EventEmitter();
	                    newEventEmitter_1.subscribe(function (original) {
	                        if (original) {
	                            _this.wsChange.emit({
	                                item: _this.originalItems.find(function (i) { return _this.readObjectValue(i) === original.value; }),
	                                original: original,
	                                value: original.value
	                            });
	                        }
	                        else {
	                            _this.wsChange.emit(null);
	                        }
	                    });
	                    if (currentChangeEvent_1) {
	                        var overrideEventEmitter = new core.EventEmitter();
	                        overrideEventEmitter.subscribe(function (obj) {
	                            currentChangeEvent_1.emit(obj);
	                            newEventEmitter_1.emit(obj);
	                        });
	                        this.ngSelectComponent.changeEvent = overrideEventEmitter;
	                    }
	                    else {
	                        this.ngSelectComponent.changeEvent = newEventEmitter_1;
	                    }
	                }
	                this.updateItems(this.items);
	            }
	        };
	        SelectDirective.prototype.updateItems = function (items, firstChange) {
	            var _this = this;
	            if (firstChange === void 0) { firstChange = false; }
	            if (items) {
	                this.originalItems = __spread(items);
	                this.ngSelectComponent.items = items.map(function (obj) { return ({
	                    label: _this.readObjectLabel(obj),
	                    value: _this.readObjectValue(obj),
	                    group: _this.groupReader ? _this.readObjectGroup(obj) : undefined
	                }); });
	                this.ngSelectComponent.ngOnChanges({ items: new core.SimpleChange(null, this.ngSelectComponent.items, firstChange) });
	            }
	        };
	        SelectDirective.prototype.readObjectLabel = function (obj) {
	            var e_1, _a;
	            var label;
	            if (Array.isArray(this.labelReader)) {
	                if (this.labelReader.length === 1) {
	                    label = obj[this.labelReader[0]];
	                }
	                else {
	                    label = obj;
	                    try {
	                        for (var _b = __values(this.labelReader), _c = _b.next(); !_c.done; _c = _b.next()) {
	                            var entry = _c.value;
	                            label = label[entry];
	                            if (label === undefined) {
	                                break;
	                            }
	                        }
	                    }
	                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
	                    finally {
	                        try {
	                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	                        }
	                        finally { if (e_1) throw e_1.error; }
	                    }
	                }
	            }
	            else if (typeof this.labelReader === 'function') {
	                label = this.labelReader(obj);
	            }
	            return label;
	        };
	        SelectDirective.prototype.readObjectValue = function (obj) {
	            var e_2, _a;
	            var value;
	            if (Array.isArray(this.valueReader)) {
	                if (this.valueReader.length === 1) {
	                    value = obj[this.valueReader[0]];
	                }
	                else {
	                    value = obj;
	                    try {
	                        for (var _b = __values(this.valueReader), _c = _b.next(); !_c.done; _c = _b.next()) {
	                            var entry = _c.value;
	                            value = value[entry];
	                            if (value === undefined) {
	                                break;
	                            }
	                        }
	                    }
	                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
	                    finally {
	                        try {
	                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	                        }
	                        finally { if (e_2) throw e_2.error; }
	                    }
	                }
	            }
	            else if (typeof this.valueReader === 'function') {
	                value = this.valueReader(obj);
	            }
	            return value;
	        };
	        SelectDirective.prototype.readObjectGroup = function (obj) {
	            var e_3, _a;
	            var group;
	            if (Array.isArray(this.groupReader)) {
	                if (this.groupReader.length === 1) {
	                    group = obj[this.groupReader[0]];
	                }
	                else {
	                    group = obj;
	                    try {
	                        for (var _b = __values(this.groupReader), _c = _b.next(); !_c.done; _c = _b.next()) {
	                            var entry = _c.value;
	                            group = group[entry];
	                            if (group === undefined) {
	                                break;
	                            }
	                        }
	                    }
	                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
	                    finally {
	                        try {
	                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	                        }
	                        finally { if (e_3) throw e_3.error; }
	                    }
	                }
	            }
	            else if (typeof this.groupReader === 'function') {
	                group = this.groupReader(obj);
	            }
	            return group;
	        };
	        return SelectDirective;
	    }());
	    exports.SelectDirective = SelectDirective;
	    SelectDirective.ɵfac = function SelectDirective_Factory(t) { return new (t || SelectDirective)(i0.ɵɵdirectiveInject(ngSelect.NgSelectComponent, 11)); };
	    SelectDirective.ɵdir = i0.ɵɵdefineDirective({ type: SelectDirective, selectors: [["", "wsSelect", ""]], inputs: { entryReader: ["wsSelect", "entryReader"], items: "items", labelReader: "labelReader", valueReader: "valueReader", groupReader: "groupReader" }, outputs: { wsChange: "wsChange" }, features: [i0.ɵɵNgOnChangesFeature] });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(SelectDirective, [{
	                type: core.Directive,
	                args: [{
	                        selector: '[wsSelect]'
	                    }]
	            }], function () {
	            return [{ type: ngSelect.NgSelectComponent, decorators: [{
	                            type: core.Host
	                        }, {
	                            type: core.Optional
	                        }, {
	                            type: core.Self
	                        }] }];
	        }, { entryReader: [{
	                    type: core.Input,
	                    args: ['wsSelect']
	                }], items: [{
	                    type: core.Input
	                }], wsChange: [{
	                    type: core.Output
	                }], labelReader: [{
	                    type: core.Input
	                }], valueReader: [{
	                    type: core.Input
	                }], groupReader: [{
	                    type: core.Input
	                }] });
	    })();
	    
	});

	var entityTreeFetchParams = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var entityTreeSelectControls = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var entityTreeSelectLabels = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var wsSelectChangeEvent = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var treeEntity = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var breadcrumb = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var wsHttp_encoder = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.WsHttpEncoder = void 0;
	    // this incoder handles reserved characters such as the '+' symbol for special cases
	    var WsHttpEncoder = /** @class */ (function () {
	        function WsHttpEncoder() {
	        }
	        WsHttpEncoder.prototype.encodeKey = function (key) {
	            return encodeURIComponent(key);
	        };
	        WsHttpEncoder.prototype.encodeValue = function (value) {
	            return encodeURIComponent(value);
	        };
	        WsHttpEncoder.prototype.decodeKey = function (key) {
	            return decodeURIComponent(key);
	        };
	        WsHttpEncoder.prototype.decodeValue = function (value) {
	            return decodeURIComponent(value);
	        };
	        return WsHttpEncoder;
	    }());
	    exports.WsHttpEncoder = WsHttpEncoder;
	    
	});

	var menuItem = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var language = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var wsHttp_interceptor = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.WsHttpInterceptor = void 0;
	    var i0 = core;
	    var WsHttpInterceptor = /** @class */ (function () {
	        function WsHttpInterceptor(wsi, oAuthService) {
	            this.wsi = wsi;
	            this.oAuthService = oAuthService;
	        }
	        WsHttpInterceptor.prototype.intercept = function (req, next) {
	            var config = this.wsi.httpConfigSubject.getValue();
	            var uriPatterns = generic_util.GenericUtil.getValueOrDefault(config.authUriPatterns, []);
	            var encoderPatterns = generic_util.GenericUtil.getValueOrDefault(config.encoderUriPatterns, []);
	            var authorize = uriPatterns.filter(function (s) { return req.url.match(s); }).length > 0;
	            var rewrite = encoderPatterns.filter(function (s) { return req.url.match(s); }).length > 0;
	            // append auth header
	            if (authorize) {
	                req = req.clone({
	                    headers: new http.HttpHeaders({
	                        Authorization: this.oAuthService.authorizationHeader(),
	                    })
	                });
	            }
	            // rewrite parameters with encoder
	            if (rewrite) {
	                var params = new http.HttpParams({ encoder: new wsHttp_encoder.WsHttpEncoder(), fromString: req.params.toString() });
	                req = req.clone({ params: params });
	            }
	            return next.handle(req);
	        };
	        return WsHttpInterceptor;
	    }());
	    exports.WsHttpInterceptor = WsHttpInterceptor;
	    WsHttpInterceptor.ɵfac = function WsHttpInterceptor_Factory(t) { return new (t || WsHttpInterceptor)(i0.ɵɵinject(worldskillsAngularLib_service.WorldskillsAngularLibService), i0.ɵɵinject(angularOauth2Oidc.OAuthService)); };
	    WsHttpInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: WsHttpInterceptor, factory: WsHttpInterceptor.ɵfac });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(WsHttpInterceptor, [{
	                type: core.Injectable
	            }], function () { return [{ type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: angularOauth2Oidc.OAuthService }]; }, null);
	    })();
	    
	});

	var resource = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var resourceContainer = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var resourceMetadata = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var resourceMetadataInfo = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var resourceSearch = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var resourceType = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var resourceTypeMetadata = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var resourcecUpload = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.ResourceUpload = void 0;
	    var ResourceUpload = /** @class */ (function () {
	        function ResourceUpload(obj) {
	            this.tags = []; // do not create tags
	            this.name = obj && obj.name || { lang_code: 'en', text: null };
	            this.ws_entity = obj && obj.ws_entity;
	            this.types = obj && obj.types || [];
	            this.version = obj && obj.version || { name: '1.0', };
	            this.metadata = obj && obj.metadata || [];
	        }
	        ResourceUpload.fromResource = function (resource) {
	            var version = resource.versions[resource.versions.length - 1];
	            var translation = version.translations[version.translations.length - 1];
	            return new ResourceUpload({
	                name: resource.name,
	                ws_entity: resource.ws_entity.id,
	                tags: resource.tags,
	                types: resource.resource_types.map(function (x) { return x.id; }),
	                metadata: resource.metadata.map(function (x) {
	                    return { metadata: x.metadata.id, value: x.value };
	                }),
	                version: {
	                    name: version.name,
	                    date: version.date,
	                    tags: version.tags,
	                    translation: {
	                        version: version.id,
	                        lang_code: translation.lang_code,
	                        storage_data: translation.storage_data,
	                        storage_type: translation.storage_type.id
	                    }
	                }
	            });
	        };
	        return ResourceUpload;
	    }());
	    exports.ResourceUpload = ResourceUpload;
	    
	});

	var sotrageType = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var translation = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var translationCreate = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var version = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var versionCreate = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var upload_service = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.UploadService = void 0;
	    var i0 = core;
	    var i1 = http;
	    var UploadService = /** @class */ (function () {
	        function UploadService(http) {
	            this.http = http;
	        }
	        UploadService.prototype.prepareUpload = function (url, data, params, method) {
	            if (method === void 0) { method = 'POST'; }
	            var options = {
	                params: params,
	                reportProgress: true,
	            };
	            return new http.HttpRequest(method, url, data, options);
	        };
	        // Full list of events: https://angular.io/api/common/http/HttpEventType
	        // event specific classes: https://angular.io/api/common/http/HttpEvent#description
	        UploadService.prototype.listen = function (request, progress, complete) {
	            this.http.request(request).subscribe(function (event) {
	                switch (event.type) {
	                    case http.HttpEventType.UploadProgress:
	                        progress(event);
	                        break;
	                    case http.HttpEventType.Response:
	                        complete(event);
	                        break;
	                }
	            });
	        };
	        return UploadService;
	    }());
	    exports.UploadService = UploadService;
	    UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(i0.ɵɵinject(i1.HttpClient)); };
	    UploadService.ɵprov = i0.ɵɵdefineInjectable({ token: UploadService, factory: UploadService.ɵfac, providedIn: 'root' });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(UploadService, [{
	                type: core.Injectable,
	                args: [{
	                        providedIn: 'root'
	                    }]
	            }], function () { return [{ type: i1.HttpClient }]; }, null);
	    })();
	    
	});

	var resource_service = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.ResourceService = void 0;
	    var i0 = core;
	    var i2 = http;
	    var ResourceService = /** @class */ (function () {
	        function ResourceService(wsi, http, uploader) {
	            var _this = this;
	            this.wsi = wsi;
	            this.http = http;
	            this.uploader = uploader;
	            this.wsi.serviceConfigSubject.subscribe(function (next) {
	                _this.url = next.apiEndpoint + '/resources';
	            });
	        }
	        /*
	          ResourceResource
	        */
	        // allow a client to user submit an object directly or use a managed object
	        ResourceService.prototype.search = function (filter) {
	            var params = http_util.HttpUtil.objectToParams(filter);
	            return this.http.get(this.url, { params: params });
	        };
	        ResourceService.prototype.get = function (id) {
	            var url = this.url + "/" + id;
	            return this.http.get(url);
	        };
	        ResourceService.prototype.delete = function (id) {
	            var url = this.url + "/" + id;
	            return this.http.delete(url);
	        };
	        ResourceService.prototype.update = function (id, model) {
	            var url = this.url + "/" + id;
	            return this.http.put(url, model);
	        };
	        // this more or less saves the resource to the api
	        // the client has control over weather it's a POST or a PUT
	        ResourceService.prototype.upload = function (data, file, method, id) {
	            if (method === void 0) { method = 'POST'; }
	            if (id === void 0) { id = 0; }
	            var url = method === 'POST' ? this.url : this.url + "/" + id;
	            var formData = new FormData();
	            formData.append('key', 'value');
	            formData.append('requestData', JSON.stringify(data));
	            formData.append('file', file);
	            return this.uploader.prepareUpload(url, formData, new http.HttpParams(), method);
	        };
	        /* /types
	          ResourceTypeResource
	        */
	        ResourceService.prototype.listTypes = function () {
	            var url = this.url + "/types";
	            return this.http.get(url);
	        };
	        ResourceService.prototype.getType = function (id) {
	            var url = this.url + "/types/" + id;
	            return this.http.get(url);
	        };
	        /* /metadata
	          MetadataResource
	        */
	        ResourceService.prototype.listMetadata = function () {
	            var url = this.url + "/metadata";
	            return this.http.get(url);
	        };
	        ResourceService.prototype.getMetadata = function (id) {
	            var url = this.url + "/metadata/" + id;
	            return this.http.get(url);
	        };
	        ResourceService.prototype.createMetadata = function (model) {
	            var url = this.url + "/metadata";
	            return this.http.post(url, model);
	        };
	        ResourceService.prototype.updateMetadata = function (id, model) {
	            var url = this.url + "/metadata/" + id;
	            return this.http.put(url, model);
	        };
	        ResourceService.prototype.deleteMetadata = function (id) {
	            var url = this.url + "/metadata/" + id;
	            return this.http.delete(url);
	        };
	        return ResourceService;
	    }());
	    exports.ResourceService = ResourceService;
	    ResourceService.ɵfac = function ResourceService_Factory(t) { return new (t || ResourceService)(i0.ɵɵinject(worldskillsAngularLib_service.WorldskillsAngularLibService), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(upload_service.UploadService)); };
	    ResourceService.ɵprov = i0.ɵɵdefineInjectable({ token: ResourceService, factory: ResourceService.ɵfac, providedIn: 'root' });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(ResourceService, [{
	                type: core.Injectable,
	                args: [{
	                        providedIn: 'root'
	                    }]
	            }], function () { return [{ type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: i2.HttpClient }, { type: upload_service.UploadService }]; }, null);
	    })();
	    
	});

	var createdBy = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var entityPath = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var entityPathItem = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var option = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var page = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var poll = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var result = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var voteEntry = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var vote = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    
	});

	var poll_service = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.PollService = void 0;
	    var i0 = core;
	    var PollService = /** @class */ (function () {
	        function PollService(wsi, http) {
	            var _this = this;
	            this.wsi = wsi;
	            this.http = http;
	            this.wsi.serviceConfigSubject.subscribe(function (next) {
	                _this.endpoint = next.apiEndpoint + '/votes';
	            });
	        }
	        PollService.prototype.list = function (params) {
	            return this.http.get(this.endpoint, { params: params });
	        };
	        PollService.prototype.select = function (params) {
	            var url = this.endpoint + "/select";
	            return this.http.get(url, { params: params });
	        };
	        PollService.prototype.get = function (id) {
	            var url = this.endpoint + "/" + id;
	            return this.http.get(url);
	        };
	        PollService.prototype.getResults = function (id) {
	            var url = this.endpoint + "/" + id + "/results";
	            return this.http.get(url);
	        };
	        PollService.prototype.hasVoted = function (id) {
	            var url = this.endpoint + "/" + id + "/has_voted";
	            return this.http.get(url);
	        };
	        PollService.prototype.create = function (model) {
	            return this.http.post(this.endpoint, model);
	        };
	        PollService.prototype.update = function (id, model) {
	            var url = this.endpoint + "/" + id;
	            return this.http.put(url, model);
	        };
	        PollService.prototype.delete = function (id) {
	            var url = this.endpoint + "/" + id;
	            return this.http.delete(url);
	        };
	        PollService.prototype.undelete = function (id) {
	            var url = this.endpoint + "/" + id + "/undelete";
	            return this.http.put(url, {});
	        };
	        PollService.prototype.reset = function (id, start, expiry) {
	            var model = { start: start, expiry: expiry };
	            var url = this.endpoint + "/" + id + "/reset";
	            return this.http.put(url, model);
	        };
	        PollService.prototype.extend = function (id, expiry) {
	            var model = { expiry: expiry };
	            var url = this.endpoint + "/" + id + "/extend";
	            return this.http.put(url, model);
	        };
	        PollService.prototype.addVote = function (pollId, votes) {
	            var model = { votes: votes };
	            var url = this.endpoint + "/" + pollId + "/addVote";
	            return this.http.post(url, model);
	        };
	        PollService.prototype.unvote = function (pollId) {
	            var url = this.endpoint + "/" + pollId + "/removeVote";
	            return this.http.delete(url);
	        };
	        return PollService;
	    }());
	    exports.PollService = PollService;
	    PollService.ɵfac = function PollService_Factory(t) { return new (t || PollService)(i0.ɵɵinject(worldskillsAngularLib_service.WorldskillsAngularLibService), i0.ɵɵinject(http.HttpClient)); };
	    PollService.ɵprov = i0.ɵɵdefineInjectable({ token: PollService, factory: PollService.ɵfac, providedIn: 'root' });
	    /*@__PURE__*/ (function () {
	        i0.ɵsetClassMetadata(PollService, [{
	                type: core.Injectable,
	                args: [{
	                        providedIn: 'root'
	                    }]
	            }], function () { return [{ type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: http.HttpClient }]; }, null);
	    })();
	    
	});

	var publicApi = createCommonjsModule(function (module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    /*
	     * Public API Surface of worldskills-angular-lib
	     */
	    tslib_es6.__exportStar(worldskillsAngularLib_service, exports);
	    tslib_es6.__exportStar(worldskillsAngularLib_component, exports);
	    tslib_es6.__exportStar(worldskillsAngularLib_module, exports);
	    /*
	      Shared Models
	    */
	    tslib_es6.__exportStar(i18nText, exports);
	    tslib_es6.__exportStar(link, exports);
	    tslib_es6.__exportStar(pair, exports);
	    /*
	      Config
	    */
	    tslib_es6.__exportStar(app_config, exports);
	    tslib_es6.__exportStar(http_config, exports);
	    tslib_es6.__exportStar(service_config, exports);
	    /*
	      Date
	    */
	    tslib_es6.__exportStar(dateRange, exports);
	    tslib_es6.__exportStar(dateRange_component, exports);
	    tslib_es6.__exportStar(datetime, exports);
	    tslib_es6.__exportStar(datetimePicker_component, exports);
	    /*
	      Util
	    */
	    tslib_es6.__exportStar(array_util, exports);
	    tslib_es6.__exportStar(date_util, exports);
	    tslib_es6.__exportStar(generic_util, exports);
	    tslib_es6.__exportStar(http_util, exports);
	    tslib_es6.__exportStar(ws_component, exports);
	    tslib_es6.__exportStar(ws_service, exports);
	    /*
	      Helpers
	    */
	    tslib_es6.__exportStar(date_helper, exports);
	    /*
	      Pipes
	    */
	    tslib_es6.__exportStar(dateSort_pipe, exports);
	    /*
	      Alerts
	    */
	    tslib_es6.__exportStar(alertType, exports);
	    tslib_es6.__exportStar(alert$1, exports);
	    tslib_es6.__exportStar(alerts_component, exports);
	    tslib_es6.__exportStar(worldskillsAngularLib_service, exports);
	    tslib_es6.__exportStar(alert_component, exports);
	    /*
	      Auth
	    */
	    tslib_es6.__exportStar(redirect_handler, exports);
	    tslib_es6.__exportStar(authGuardAccess, exports);
	    tslib_es6.__exportStar(entityTreeView, exports);
	    tslib_es6.__exportStar(entityTreeView, exports);
	    tslib_es6.__exportStar(getUserParams, exports);
	    tslib_es6.__exportStar(roleApplication, exports);
	    tslib_es6.__exportStar(role, exports);
	    tslib_es6.__exportStar(userList, exports);
	    tslib_es6.__exportStar(user, exports);
	    tslib_es6.__exportStar(wsEntity, exports);
	    tslib_es6.__exportStar(appAuth_guard, exports);
	    tslib_es6.__exportStar(wsiAuth_service, exports);
	    tslib_es6.__exportStar(wsiNgAuth_service, exports);
	    /*
	      entity-tree
	    */
	    // TODO: perhaps look at refactoring entity-tree as there's a lot of overlap with auth
	    tslib_es6.__exportStar(defaultLabels, exports);
	    tslib_es6.__exportStar(select_directive, exports);
	    tslib_es6.__exportStar(entityTreeSelect_component, exports);
	    tslib_es6.__exportStar(entityTree_service, exports);
	    tslib_es6.__exportStar(entityTreeFetchParams, exports);
	    tslib_es6.__exportStar(entityTreeSelectControls, exports);
	    tslib_es6.__exportStar(entityTreeSelectLabels, exports);
	    tslib_es6.__exportStar(wsSelectChangeEvent, exports);
	    tslib_es6.__exportStar(treeEntity, exports);
	    /*
	      Banners
	    */
	    tslib_es6.__exportStar(puppeteerBanner_component, exports);
	    tslib_es6.__exportStar(stagingBanner_component, exports);
	    /*
	      Breadcrumbs
	    */
	    tslib_es6.__exportStar(breadcrumbs_component, exports);
	    tslib_es6.__exportStar(breadcrumb, exports);
	    tslib_es6.__exportStar(breadcrumbs_service, exports);
	    /*
	      Encoders
	    */
	    tslib_es6.__exportStar(wsHttp_encoder, exports);
	    /*
	      Footer
	    */
	    tslib_es6.__exportStar(footer_component, exports);
	    /*
	      Header
	    */
	    tslib_es6.__exportStar(header_component, exports);
	    tslib_es6.__exportStar(menuItem, exports);
	    tslib_es6.__exportStar(menuAccess_pipe, exports);
	    /*
	      i18n
	    */
	    tslib_es6.__exportStar(language, exports);
	    /*
	      Interceptors
	    */
	    tslib_es6.__exportStar(wsHttp_interceptor, exports);
	    /*
	      Logos
	    */
	    tslib_es6.__exportStar(logo_component, exports);
	    tslib_es6.__exportStar(wordmark_component, exports);
	    /*
	      Resource
	    */
	    tslib_es6.__exportStar(resource, exports);
	    tslib_es6.__exportStar(resourceContainer, exports);
	    tslib_es6.__exportStar(resourceMetadata, exports);
	    tslib_es6.__exportStar(resourceMetadataInfo, exports);
	    tslib_es6.__exportStar(resourceSearch, exports);
	    tslib_es6.__exportStar(resourceType, exports);
	    tslib_es6.__exportStar(resourceTypeMetadata, exports);
	    tslib_es6.__exportStar(resourcecUpload, exports);
	    tslib_es6.__exportStar(sotrageType, exports);
	    tslib_es6.__exportStar(translation, exports);
	    tslib_es6.__exportStar(translationCreate, exports);
	    tslib_es6.__exportStar(version, exports);
	    tslib_es6.__exportStar(versionCreate, exports);
	    tslib_es6.__exportStar(resource_service, exports);
	    /*
	      Polls
	    */
	    tslib_es6.__exportStar(createdBy, exports);
	    tslib_es6.__exportStar(entityPath, exports);
	    tslib_es6.__exportStar(entityPathItem, exports);
	    tslib_es6.__exportStar(option, exports);
	    tslib_es6.__exportStar(page, exports);
	    tslib_es6.__exportStar(poll, exports);
	    tslib_es6.__exportStar(result, exports);
	    tslib_es6.__exportStar(voteEntry, exports);
	    tslib_es6.__exportStar(vote, exports);
	    tslib_es6.__exportStar(pollResult_component, exports);
	    tslib_es6.__exportStar(standardPoll_component, exports);
	    tslib_es6.__exportStar(voteControl_component, exports);
	    tslib_es6.__exportStar(weightedPoll_component, exports);
	    tslib_es6.__exportStar(poll_service, exports);
	    
	});

	var worldskillsAngularLib = createCommonjsModule(function (module, exports) {
	    "use strict";
	    /**
	     * Generated bundle index. Do not edit.
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    tslib_es6.__exportStar(publicApi, exports);
	    
	});

	return worldskillsAngularLib;

})));
//# sourceMappingURL=worldskills-angular-lib.umd.js.map
