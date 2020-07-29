import tslib from 'tslib';
import core from '@angular/core';
import rxjs from 'rxjs';
import common from '@angular/common';
import platformBrowser from '@angular/platform-browser';
import angularOauth2Oidc from 'angular-oauth2-oidc';
import router from '@angular/router';
import ngBootstrap from '@ng-bootstrap/ng-bootstrap';
import forms from '@angular/forms';
import ngSelect from '@ng-select/ng-select';
import uuid from 'uuid';
import http from '@angular/common/http';
import operators from 'rxjs/operators';

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

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var worldskillsAngularLib_service = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldskillsAngularLibService = void 0;


const i0 = core;
class WorldskillsAngularLibService {
    constructor() {
        // default configuration
        this.appConfigSubject = new rxjs.BehaviorSubject({ notAuthorizedRoute: ['/not-authorized'] });
        this.httpConfigSubject = new rxjs.BehaviorSubject({ encoderUriPatterns: [], authUriPatterns: [] });
        this.serviceConfigSubject = new rxjs.BehaviorSubject({ appCode: [], apiEndpoint: '' });
        this.authConfigSubject = new rxjs.BehaviorSubject({});
    }
}
exports.WorldskillsAngularLibService = WorldskillsAngularLibService;
WorldskillsAngularLibService.ɵfac = function WorldskillsAngularLibService_Factory(t) { return new (t || WorldskillsAngularLibService)(); };
WorldskillsAngularLibService.ɵprov = i0.ɵɵdefineInjectable({ token: WorldskillsAngularLibService, factory: WorldskillsAngularLibService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WorldskillsAngularLibService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

});

var worldskillsAngularLib_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldskillsAngularLibComponent = void 0;

const i0 = core;
class WorldskillsAngularLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.WorldskillsAngularLibComponent = WorldskillsAngularLibComponent;
WorldskillsAngularLibComponent.ɵfac = function WorldskillsAngularLibComponent_Factory(t) { return new (t || WorldskillsAngularLibComponent)(); };
WorldskillsAngularLibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WorldskillsAngularLibComponent, selectors: [["ws-worldskills-angular-lib"]], decls: 2, vars: 0, template: function WorldskillsAngularLibComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " worldskills-angular-lib works! ");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WorldskillsAngularLibComponent, [{
        type: core.Component,
        args: [{
                selector: 'ws-worldskills-angular-lib',
                template: `
    <p>
      worldskills-angular-lib works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

});

var alert_service = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertService = void 0;

const i0 = core;
class AlertService {
    constructor() {
        this.alerts = [];
    }
    remove(id) {
        const index = this.alerts.findIndex(item => item.id === id);
        if (index !== -1) {
            this.alerts.splice(index, 1);
        }
    }
    setAlert(id, type, title, message, closable) {
        title = title || '';
        message = message || '';
        closable = closable || false;
        this.alerts.push({
            id, type, title, message, closable
        });
    }
}
exports.AlertService = AlertService;
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = i0.ɵɵdefineInjectable({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

});

var alert_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertComponent = void 0;

const i0 = core;


function AlertComponent_div_0_h4_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function AlertComponent_div_0_h4_1_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(3); return ctx_r5.dismiss(); });
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function AlertComponent_div_0_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 5);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, AlertComponent_div_0_h4_1_button_2_Template, 3, 0, "button", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.alert.title, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.canClose());
} }
function AlertComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.alert.message);
} }
function AlertComponent_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function AlertComponent_div_0_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.dismiss(); });
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, AlertComponent_div_0_h4_1_Template, 3, 2, "h4", 2);
    i0.ɵɵtemplate(2, AlertComponent_div_0_span_2_Template, 2, 1, "span", 3);
    i0.ɵɵtemplate(3, AlertComponent_div_0_button_3_Template, 3, 0, "button", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("alert ", ctx_r0.alert.type, "  alert-dismissible");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.hasTitle());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.hasMessage());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.canClose() && !ctx_r0.hasTitle());
} }
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
    }
    // tslint:disable-next-line:typedef use-lifecycle-interface
    ngOnChanges() {
    }
    hasMessage() {
        return this.alert.message && this.alert.message.length > 0;
    }
    hasTitle() {
        return this.alert.title && this.alert.title.length > 0;
    }
    canClose() {
        return this.alert.closable;
    }
    dismiss() {
        this.alertService.remove(this.alert.id);
    }
}
exports.AlertComponent = AlertComponent;
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(i0.ɵɵdirectiveInject(alert_service.AlertService)); };
AlertComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["ws-alert"]], inputs: { alert: "alert" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"], ["class", "alert-heading", 4, "ngIf"], [4, "ngIf"], ["type", "button", "class", "close", "data-dismiss", "alert", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "alert-heading"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AlertComponent_div_0_Template, 4, 6, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.alert);
    } }, directives: [common.NgIf], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertComponent, [{
        type: core.Component,
        args: [{
                selector: 'ws-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.css']
            }]
    }], function () { return [{ type: alert_service.AlertService }]; }, { alert: [{
            type: core.Input
        }] }); })();

});

var alerts_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertsComponent = void 0;

const i0 = core;



function AlertsComponent_div_0_ws_alert_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ws-alert", 3);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("alert", item_r2);
} }
function AlertsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, AlertsComponent_div_0_ws_alert_1_Template, 1, 1, "ws-alert", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.alertService.alerts);
} }
class AlertsComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
    }
    get hasAlerts() {
        return this.alertService.alerts.length > 0;
    }
}
exports.AlertsComponent = AlertsComponent;
AlertsComponent.ɵfac = function AlertsComponent_Factory(t) { return new (t || AlertsComponent)(i0.ɵɵdirectiveInject(alert_service.AlertService)); };
AlertsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertsComponent, selectors: [["ws-alerts"]], decls: 1, vars: 1, consts: [["class", "alerts", 4, "ngIf"], [1, "alerts"], [3, "alert", 4, "ngFor", "ngForOf"], [3, "alert"]], template: function AlertsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AlertsComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.hasAlerts);
    } }, directives: [common.NgIf, common.NgForOf, alert_component.AlertComponent], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertsComponent, [{
        type: core.Component,
        args: [{
                selector: 'ws-alerts',
                templateUrl: './alerts.component.html',
                styleUrls: ['./alerts.component.css']
            }]
    }], function () { return [{ type: alert_service.AlertService }]; }, null); })();

});

var puppeteerBanner_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuppeteerBannerComponent = void 0;

const i0 = core;

function PuppeteerBannerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate4(" ", ctx_r0.currentUser.puppeteer.first_name, " ", ctx_r0.currentUser.puppeteer.last_name, " logged in as ", ctx_r0.currentUser.firstName, " ", ctx_r0.currentUser.lastName, "\n");
} }
class PuppeteerBannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.PuppeteerBannerComponent = PuppeteerBannerComponent;
PuppeteerBannerComponent.ɵfac = function PuppeteerBannerComponent_Factory(t) { return new (t || PuppeteerBannerComponent)(); };
PuppeteerBannerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PuppeteerBannerComponent, selectors: [["ws-puppeteer-banner"]], inputs: { currentUser: "currentUser" }, decls: 1, vars: 1, consts: [["style", "background-color: #D51067; padding: 10px 20px; color: #fff; text-align: center;", 4, "ngIf"], [2, "background-color", "#D51067", "padding", "10px 20px", "color", "#fff", "text-align", "center"]], template: function PuppeteerBannerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PuppeteerBannerComponent_div_0_Template, 2, 4, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.currentUser && ctx.currentUser.puppeteer);
    } }, directives: [common.NgIf], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PuppeteerBannerComponent, [{
        type: core.Component,
        args: [{
                selector: 'ws-puppeteer-banner',
                templateUrl: './puppeteer-banner.component.html',
                styleUrls: ['./puppeteer-banner.component.css']
            }]
    }], function () { return []; }, { currentUser: [{
            type: core.Input
        }] }); })();

});

var stagingBanner_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StagingBannerComponent = void 0;

const i0 = core;
class StagingBannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.StagingBannerComponent = StagingBannerComponent;
StagingBannerComponent.ɵfac = function StagingBannerComponent_Factory(t) { return new (t || StagingBannerComponent)(); };
StagingBannerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StagingBannerComponent, selectors: [["ws-staging-banner"]], decls: 2, vars: 0, consts: [[2, "background-color", "#f0ad4e", "padding", "10px 20px", "color", "#fff", "text-align", "center"]], template: function StagingBannerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1, "This is the staging environment. Changes in this environment might get overwritten.");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StagingBannerComponent, [{
        type: core.Component,
        args: [{
                selector: 'ws-staging-banner',
                templateUrl: './staging-banner.component.html',
                styleUrls: ['./staging-banner.component.css']
            }]
    }], function () { return []; }, null); })();

});

var array_util = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtil = void 0;
class ArrayUtil {
    // since array concat doesn't trigger UI updates
    static pushMany(first, second) {
        second.forEach(item => first.push(item));
        return first;
    }
    static dedupePrimitive(arr) {
        const clean = [];
        arr.forEach(item => {
            if (clean.indexOf(item) === -1) {
                clean.push(item);
            }
        });
        return clean;
    }
    static isArray(obj) {
        return toString.call(obj) === '[object Array]';
    }
}
exports.ArrayUtil = ArrayUtil;

});

var generic_util = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericUtil = void 0;
class GenericUtil {
    static isNullOrUndefined(obj) {
        return obj === undefined || obj === null;
    }
    static getValueOrDefault(value, defaultValue) {
        return GenericUtil.isNullOrUndefined(value) ? defaultValue : value;
    }
}
exports.GenericUtil = GenericUtil;

});

var breadcrumbs_service = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbsService = void 0;



const i0 = core;
class BreadcrumbsService {
    constructor() {
        this.breadcrumbs = [];
        this.replacements = [];
        this.breadcrumbsSubject = new rxjs.BehaviorSubject([]);
    }
    build(route, url = '') {
        if (route.outlet === this.targetOutlet) {
            const path = route.snapshot.url.map(segment => segment.path).join('/');
            url = `${url}/${path}`;
            this.isAtHome = path === this.homeItemRoute.replace('/', '');
            if (route.snapshot.data.hasOwnProperty('breadcrumb')) {
                const breadcrumb = {
                    key: route.snapshot.data.breadcrumb.key,
                    label: route.snapshot.data.breadcrumb.label,
                    params: route.snapshot.params,
                    url
                };
                // handle key replacements before breadcrumbs are initialized
                const replacementIndex = this.replacements.findIndex(r => r.key === breadcrumb.label);
                if (replacementIndex !== -1) {
                    breadcrumb.label = this.replacements[replacementIndex].value;
                }
                this.breadcrumbs.push(breadcrumb);
                this.breadcrumbsSubject.next(this.breadcrumbs);
            }
            // nothing to do
            if (route.children.length === 0) {
                return;
            }
            route.children.forEach(child => {
                this.build(child, url);
            });
        }
    }
    createOrUpdateReplacement(key, value) {
        let index = this.replacements.findIndex(x => x.key === key);
        if (index === -1) {
            const replacement = { key, value };
            this.replacements.push(replacement);
            index = this.replacements.findIndex(x => x.key === key);
        }
        else {
            this.replacements[index].value = value;
        }
        return index;
    }
    replaceLabel(key, value) {
        const replacementIndex = this.createOrUpdateReplacement(key, value);
        if (generic_util.GenericUtil.isNullOrUndefined(this.breadcrumbs)) {
            return;
        }
        if (this.breadcrumbs.length === 0) {
            return;
        }
        this.breadcrumbs.forEach((b, i) => {
            if (b.key === key) {
                this.breadcrumbs[i].label = value;
            }
        });
        this.breadcrumbsSubject.next(this.breadcrumbs);
    }
    // this method should only be used after the breadcrumb is initialized
    remove(key) {
        const index = this.breadcrumbs.findIndex(x => x.key === key);
        if (index !== -1) {
            this.breadcrumbs.splice(index, 1);
            this.breadcrumbsSubject.next(this.breadcrumbs);
        }
    }
    // this method should only be used after the breadcrumb is initialized
    add(breadcrumb) {
        const index = this.breadcrumbs.findIndex(x => x.key === breadcrumb.key);
        if (index !== -1) {
            rxjs.throwError(`key "${breadcrumb.key}" already exists`);
            return;
        }
        this.breadcrumbs.push(breadcrumb);
        this.breadcrumbsSubject.next(this.breadcrumbs);
    }
}
exports.BreadcrumbsService = BreadcrumbsService;
BreadcrumbsService.ɵfac = function BreadcrumbsService_Factory(t) { return new (t || BreadcrumbsService)(); };
BreadcrumbsService.ɵprov = i0.ɵɵdefineInjectable({ token: BreadcrumbsService, factory: BreadcrumbsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbsService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

});

var breadcrumbs_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbsComponent = void 0;



const i0 = core;

const i2 = router;

function BreadcrumbsComponent_nav_0_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵelementStart(1, "a", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", ctx_r1.homeItemRoute, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.homeItemText);
} }
function BreadcrumbsComponent_nav_0_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.homeItemText, " ");
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function BreadcrumbsComponent_nav_0_li_4_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(2, _c0, breadcrumb_r4.url, breadcrumb_r4.params));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", breadcrumb_r4.label, " ");
} }
function BreadcrumbsComponent_nav_0_li_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", breadcrumb_r4.label, " ");
} }
function BreadcrumbsComponent_nav_0_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, BreadcrumbsComponent_nav_0_li_4_a_1_Template, 2, 5, "a", 7);
    i0.ɵɵtemplate(2, BreadcrumbsComponent_nav_0_li_4_span_2_Template, 2, 1, "span", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const last_r5 = ctx.last;
    i0.ɵɵclassMapInterpolate1("breadcrumb-item ", last_r5 ? "active" : "", "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !last_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", last_r5);
} }
function BreadcrumbsComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 1);
    i0.ɵɵelementStart(1, "ol", 2);
    i0.ɵɵtemplate(2, BreadcrumbsComponent_nav_0_li_2_Template, 3, 2, "li", 3);
    i0.ɵɵtemplate(3, BreadcrumbsComponent_nav_0_li_3_Template, 2, 1, "li", 3);
    i0.ɵɵtemplate(4, BreadcrumbsComponent_nav_0_li_4_Template, 3, 5, "li", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showHomeItem && !ctx_r0.isAtHome);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showHomeItem && ctx_r0.isAtHome);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.breadcrumbs);
} }
class BreadcrumbsComponent {
    constructor(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        // listen for dev changes to the breadcrumbs
        this.replacementSubscription = this.service.breadcrumbsSubject.subscribe(next => {
            this.breadcrumbs = [];
            array_util.ArrayUtil.pushMany(this.breadcrumbs, next);
        });
        // init
        this.isAtHome = false;
        this.service.homeItemRoute = this.homeItemRoute;
        this.service.targetOutlet = 'primary';
        this.service.build(this.route.root);
        // rebuild on nav change
        this.rebuildSubscription = this.router.events.subscribe((event) => {
            if (event instanceof router.NavigationEnd) {
                this.service.build(this.route.root);
                this.isAtHome = this.service.isAtHome;
            }
        });
    }
    // tslint:disable-next-line:use-lifecycle-interface typedef
    ngOnChanges() {
    }
    // tslint:disable-next-line:use-lifecycle-interface typedef
    ngOnDestroy() {
        if (this.replacementSubscription) {
            this.replacementSubscription.unsubscribe();
        }
        if (this.rebuildSubscription) {
            this.rebuildSubscription.unsubscribe();
        }
    }
}
exports.BreadcrumbsComponent = BreadcrumbsComponent;
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(i0.ɵɵdirectiveInject(breadcrumbs_service.BreadcrumbsService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
BreadcrumbsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BreadcrumbsComponent, selectors: [["ws-breadcrumbs"]], inputs: { showHomeItem: "showHomeItem", homeItemRoute: "homeItemRoute", homeItemText: "homeItemText" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["aria-label", "breadcrumb", 4, "ngIf"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["class", "breadcrumb-item", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "href"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BreadcrumbsComponent_nav_0_Template, 5, 3, "nav", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.breadcrumbs);
    } }, directives: [common.NgIf, common.NgForOf], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbsComponent, [{
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
        }] }); })();

});

var wordmark_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordmarkComponent = void 0;

const i0 = core;
class WordmarkComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.WordmarkComponent = WordmarkComponent;
WordmarkComponent.ɵfac = function WordmarkComponent_Factory(t) { return new (t || WordmarkComponent)(); };
WordmarkComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WordmarkComponent, selectors: [["ws-wordmark"]], decls: 14, vars: 0, consts: [["width", "115px", "height", "22px", "viewBox", "0 0 220 42", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 0, "xmlns", "serif", "http://www.serif.com/", "aria-label", "WorldSkills", 1, "d-inline-block", "align-baseline", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "1.41421"], ["d", "M52.271,39.434c-5.36,0 -8.958,-4.397 -8.958,-10.943c0,-6.546 3.598,-10.945 8.958,-10.945c5.358,0 8.959,4.399 8.959,10.945c0,6.546 -3.601,10.943 -8.959,10.943Zm0,-24.453c-9.152,0 -12.397,7.275 -12.397,13.51c0,6.233 3.245,13.509 12.397,13.509c9.151,0 12.398,-7.276 12.398,-13.509c0,-6.235 -3.247,-13.51 -12.398,-13.51Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M70.618,19.724l0,-4.232l-2.916,0l0.003,25.798l3.122,0l0,-12.745l-0.006,-0.165c0.006,-4.753 1.352,-10.434 7.767,-10.434l0.975,0.046l0.012,-0.101l0.156,-3.009l-0.363,-0.002c-4.333,0 -7.269,1.636 -8.75,4.844Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M134.06,20.521c-2.152,-0.71 -3.726,-1.121 -6.297,-1.121c-1.89,0 -4.145,0.664 -4.145,2.906c0,4.179 12.225,1.529 12.225,11.001c0,6.116 -5.614,8.562 -11.333,8.562c-2.68,0 -5.407,-0.457 -7.977,-1.119l0.419,-5.607c2.203,1.069 4.512,1.733 6.924,1.733c1.788,0 4.62,-0.664 4.62,-3.209c0,-5.146 -12.226,-1.632 -12.226,-11.107c0,-5.653 5.09,-8.153 10.599,-8.153c3.306,0 5.46,0.512 7.662,0.97l-0.471,5.144Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["x", "166.803", "y", "15.051", "width", "7.034", "height", "26.239", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M217.817,20.521c-2.151,-0.71 -3.725,-1.121 -6.296,-1.121c-1.892,0 -4.146,0.664 -4.146,2.906c0,4.179 12.225,1.529 12.225,11.001c0,6.116 -5.613,8.562 -11.333,8.562c-2.678,0 -5.405,-0.457 -7.977,-1.119l0.42,-5.607c2.203,1.069 4.513,1.733 6.926,1.733c1.785,0 4.619,-0.664 4.619,-3.209c0,-5.146 -12.227,-1.632 -12.227,-11.107c0,-5.653 5.09,-8.153 10.602,-8.153c3.305,0 5.454,0.512 7.659,0.97l-0.472,5.144Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M153.067,26.813l9.962,-11.762l-8.292,0l-8.394,10.497l-0.106,0l0,-24.614l-7.032,2.147l0,38.209l7.032,0l0,-12.737l0.106,0l9.027,12.737l8.919,0l-11.222,-14.477Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M101.041,39.334c-7.234,0 -8.017,-7.652 -8.017,-10.942c0,-3.292 0.783,-10.943 8.017,-10.943c5.537,0 8.017,5.495 8.017,10.943c0,5.447 -2.48,10.942 -8.017,10.942Zm11.012,-36.961l-2.995,0.917l0,15.951c-0.652,-1.091 -3.088,-4.428 -8.543,-4.362c-9.031,0.115 -10.927,7.409 -10.927,13.513c0,8.332 4.187,13.512 10.929,13.512c4.014,0 6.73,-1.48 8.541,-4.615l0,4.001l3.121,0l0,-38.956l-0.126,0.039Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M85.984,2.376l-2.997,0.912l0,38.003l3.123,0l0,-38.956l-0.126,0.041Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M178.373,3.081l0,38.209l7.031,0l0,-40.357l-7.031,2.148Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M189.455,3.081l-0.004,0l0,38.209l7.034,0l0,-40.357l-7.03,2.148Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M174.384,5.257c0,-2.165 -1.756,-3.917 -3.917,-3.917c-2.161,0 -3.915,1.752 -3.915,3.917c0,2.163 1.754,3.917 3.915,3.917c2.161,0 3.917,-1.754 3.917,-3.917Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M3.352,15.492l-3.352,0l0.042,0.128c0.16,0.487 8.402,25.375 8.48,25.603l0.022,0.067l3.856,0c0,0 7.249,-22.333 7.292,-22.468l0.239,0c0.045,0.135 7.294,22.468 7.294,22.468l3.858,0l8.753,-25.798l-3.113,0c0,0 -7.354,22.333 -7.4,22.466l-0.238,0c-0.042,-0.133 -7.082,-22.466 -7.082,-22.466l-3.857,0c0,0 -7.407,22.333 -7.453,22.466l-0.237,0c-0.042,-0.136 -7.032,-22.466 -7.032,-22.466l-0.072,0Z", 2, "fill", "#fff", "fill-rule", "nonzero"]], template: function WordmarkComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WordmarkComponent, [{
        type: core.Component,
        args: [{
                selector: 'ws-wordmark',
                templateUrl: './wordmark.component.html',
                styleUrls: ['./wordmark.component.css']
            }]
    }], function () { return []; }, null); })();

});

var menuAccess_pipe = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuAccessPipe = void 0;

const i0 = core;
class MenuAccessPipe {
    transform(items, isLoggedIn, roles) {
        if (items === null || items === undefined) {
            return [];
        }
        return items.filter(item => {
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
            let show = false;
            for (const roleName of item.requiredRoles) {
                show = roles.findIndex(userRoleName => userRoleName === roleName) !== -1;
                if (show) {
                    break;
                }
            }
            return show;
        });
    }
}
exports.MenuAccessPipe = MenuAccessPipe;
MenuAccessPipe.ɵfac = function MenuAccessPipe_Factory(t) { return new (t || MenuAccessPipe)(); };
MenuAccessPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "wsMenuAccesssFilter", type: MenuAccessPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuAccessPipe, [{
        type: core.Pipe,
        args: [{
                name: 'wsMenuAccesssFilter'
            }]
    }], null, null); })();

});

var header_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderComponent = void 0;

const i0 = core;





const _c0 = function (a0, a1) { return [a0, a1]; };
function HeaderComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "a", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("nav-item ", ctx_r0.isRouteActive(item_r3.url) ? "active" : "", "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(5, _c0, item_r3.url, item_r3.params));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r3.label, " ");
} }
function HeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("click", function HeaderComponent_div_12_Template_a_click_7_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); ctx_r4.logout(); return false; });
    i0.ɵɵtext(8, "Logout");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getInitials(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.currentUser.firstName, " ", ctx_r1.currentUser.lastName, "");
} }
function HeaderComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 17);
    i0.ɵɵlistener("click", function HeaderComponent_a_13_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); ctx_r6.login(); return false; });
    i0.ɵɵtext(1, "Log in");
    i0.ɵɵelementEnd();
} }
class HeaderComponent {
    constructor(router) {
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
    ngOnInit() { }
    // tslint:disable-next-line:use-lifecycle-interface typedef
    ngOnChanges() { }
    userRoles() {
        if (this.currentUser === undefined || this.currentUser === null) {
            return [];
        }
        if (this.currentUser.roles === undefined || this.currentUser.roles === null) {
            return [];
        }
        return this.currentUser.roles.map(item => {
            return item.name;
        });
    }
    isRouteActive(route) {
        return route === this.router.url;
    }
    login() {
        this.loginClick.emit();
    }
    logout() {
        this.logoutClick.emit();
    }
    getInitials() {
        let s = '';
        if (this.currentUser) {
            if (this.currentUser.first_name) {
                s = this.currentUser.first_name.substr(0, 1);
            }
            if (this.currentUser.last_name) {
                s += this.currentUser.last_name.substr(0, 1);
            }
        }
        return s.toUpperCase();
    }
}
exports.HeaderComponent = HeaderComponent;
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(i0.ɵɵdirectiveInject(router.Router)); };
HeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["ws-header"]], inputs: { appName: "appName", isLoggedIn: "isLoggedIn", showLoginAndLogoutButtons: "showLoginAndLogoutButtons", menuItems: "menuItems", currentUser: "currentUser" }, outputs: { logoutClick: "logoutClick", loginClick: "loginClick" }, features: [i0.ɵɵNgOnChangesFeature], decls: 14, vars: 8, consts: [[1, "navbar", "navbar-expand-md", "ws-navbar-main", "ws-navbar-stripe", "wsmember-navbar-main", "wsmember-bg-pink"], [1, "container"], ["href", "#", 1, "navbar-brand"], [1, "ml-1", "text-white"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "collapsed"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "dropdown ml-2", 4, "ngIf"], ["class", "btn btn-light btn-sm ml-2 wsi-login", 3, "click", 4, "ngIf"], [1, "nav-link", 3, "routerLink"], [1, "dropdown", "ml-2"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "btn-white", "rounded-pill"], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", "tabindex", "-1", 1, "dropdown-item", "disabled"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "btn", "btn-light", "btn-sm", "ml-2", "wsi-login", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.appName);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(11, 4, ctx.menuItems, ctx.isLoggedIn, ctx.userRoles()));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showLoginAndLogoutButtons && ctx.isLoggedIn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showLoginAndLogoutButtons && !ctx.isLoggedIn);
    } }, directives: [ngBootstrap.NgbNavbar, wordmark_component.WordmarkComponent, common.NgForOf, common.NgIf], pipes: [menuAccess_pipe.MenuAccessPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderComponent, [{
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
        }] }); })();

});

var logo_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoComponent = void 0;

const i0 = core;
class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
exports.LogoComponent = LogoComponent;
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LogoComponent, selectors: [["ws-logo"]], decls: 22, vars: 0, consts: [["width", "110px", "height", "65px", "viewBox", "0 0 220 129", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xml", "space", "preserve", 0, "xmlns", "serif", "http://www.serif.com/", "aria-label", "WorldSkills", 2, "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "1.41421"], ["d", "M52.271,126.434c-5.36,0 -8.958,-4.395 -8.958,-10.942c0,-6.547 3.598,-10.944 8.958,-10.944c5.358,0 8.959,4.397 8.959,10.944c0,6.547 -3.601,10.942 -8.959,10.942Zm0,-24.453c-9.152,0 -12.397,7.276 -12.397,13.511c0,6.232 3.245,13.509 12.397,13.509c9.151,0 12.398,-7.277 12.398,-13.509c0,-6.235 -3.247,-13.511 -12.398,-13.511Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M70.618,106.725l0,-4.232l-2.916,0l0.003,25.798l3.122,0l0,-12.745l-0.006,-0.165c0.006,-4.753 1.352,-10.434 7.767,-10.434l0.975,0.046l0.012,-0.101l0.156,-3.009l-0.363,-0.002c-4.333,0 -7.269,1.636 -8.75,4.844Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M134.06,107.522c-2.152,-0.71 -3.726,-1.121 -6.297,-1.121c-1.89,0 -4.145,0.664 -4.145,2.905c0,4.18 12.225,1.53 12.225,11.001c0,6.117 -5.614,8.564 -11.333,8.564c-2.68,0 -5.407,-0.457 -7.977,-1.12l0.419,-5.607c2.203,1.069 4.512,1.733 6.924,1.733c1.788,0 4.62,-0.664 4.62,-3.209c0,-5.146 -12.226,-1.631 -12.226,-11.107c0,-5.653 5.09,-8.153 10.599,-8.153c3.306,0 5.46,0.512 7.662,0.97l-0.471,5.144Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["x", "166.803", "y", "102.052", "width", "7.034", "height", "26.24", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M217.817,107.522c-2.151,-0.71 -3.725,-1.121 -6.296,-1.121c-1.892,0 -4.146,0.664 -4.146,2.905c0,4.18 12.225,1.53 12.225,11.001c0,6.117 -5.613,8.564 -11.333,8.564c-2.678,0 -5.405,-0.457 -7.977,-1.12l0.42,-5.607c2.203,1.069 4.513,1.733 6.926,1.733c1.785,0 4.619,-0.664 4.619,-3.209c0,-5.146 -12.227,-1.631 -12.227,-11.107c0,-5.653 5.09,-8.153 10.602,-8.153c3.305,0 5.454,0.512 7.659,0.97l-0.472,5.144Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M153.067,113.813l9.962,-11.761l-8.292,0l-8.394,10.497l-0.106,0l0,-24.615l-7.032,2.148l0,38.21l7.032,0l0,-12.738l0.106,0l9.027,12.738l8.919,0l-11.222,-14.479Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M101.041,126.336c-7.234,0 -8.017,-7.653 -8.017,-10.943c0,-3.292 0.783,-10.944 8.017,-10.944c5.537,0 8.017,5.495 8.017,10.944c0,5.448 -2.48,10.943 -8.017,10.943Zm11.012,-36.962l-2.995,0.917l0,15.95c-0.652,-1.091 -3.088,-4.428 -8.543,-4.36c-9.031,0.114 -10.927,7.409 -10.927,13.512c0,8.332 4.187,13.511 10.929,13.511c4.014,0 6.73,-1.479 8.541,-4.613l0,4.001l3.121,0l0,-38.957l-0.126,0.039Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M85.984,89.376l-2.997,0.913l0,38.003l3.123,0l0,-38.957l-0.126,0.041Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M178.373,90.082l0,38.21l7.031,0l0,-40.359l-7.031,2.149Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M189.455,90.082l-0.004,0l0,38.21l7.034,0l0,-40.359l-7.03,2.149Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M174.384,92.257c0,-2.165 -1.756,-3.917 -3.917,-3.917c-2.161,0 -3.915,1.752 -3.915,3.917c0,2.163 1.754,3.917 3.915,3.917c2.161,0 3.917,-1.754 3.917,-3.917Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M3.352,102.493l-3.352,0l0.042,0.129c0.16,0.486 8.402,25.375 8.48,25.601l0.022,0.069l3.856,0c0,0 7.249,-22.333 7.292,-22.469l0.239,0c0.045,0.136 7.294,22.469 7.294,22.469l3.858,0l8.753,-25.799l-3.113,0c0,0 -7.354,22.334 -7.4,22.467l-0.238,0c-0.042,-0.134 -7.082,-22.467 -7.082,-22.467l-3.857,0c0,0 -7.407,22.334 -7.453,22.467l-0.237,0c-0.042,-0.137 -7.032,-22.467 -7.032,-22.467l-0.072,0Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M160.498,44.986c0,0 12.347,-2.186 16.389,-12.002c0,0 71.891,14.725 29.452,53.074c0,0 15.749,-14.828 6.953,-26.691c0,0 4.909,14.726 -14.316,24.645c0,0 41.695,-29.617 -38.478,-39.026Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M199.888,39.615c5.028,2.487 8.548,4.931 10.604,6.536c0.905,-25.738 -17.55,-40.127 -17.55,-40.127c-0.536,1.65 -2.147,3.49 -4.448,4.333c-2.301,0.844 -3.682,3.605 -3.682,3.605c9.019,7.501 13.351,16.659 15.076,25.653Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M174.979,34.807c1.089,-1.627 1.394,-2.744 1.394,-2.744c4.752,0.844 9.016,1.957 12.814,3.202c-7.877,-22.459 -22.526,-34.751 -22.526,-34.751c-0.409,1.177 -4.704,3.324 -7.619,4.603c-2.914,1.278 -2.147,6.698 -2.147,6.698c8.01,6.619 13.838,14.721 18.084,22.992Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M205.115,59.685c-0.991,11.081 -7.571,22.845 -7.571,22.845c4.646,-7.067 7.822,-13.702 9.875,-19.884c-0.576,-1.045 -1.354,-2.031 -2.304,-2.961Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M204.253,58.898c-1.084,-0.931 -2.337,-1.804 -3.726,-2.621c-1.154,11.922 -5.13,20.884 -5.13,20.884c2.3,-2.608 4.064,-6.826 4.064,-6.826c0.077,2.991 -2.378,8.897 -2.378,8.897c4.222,-6.783 6.242,-15.026 7.17,-20.334Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M179.302,82.112c-2.556,-1.377 -6.263,-2.842 -13.881,-8.742c5.766,4.341 15.394,7.115 15.394,7.115c-21.256,-10.789 -25.89,-20.57 -25.89,-20.57c-2.046,-0.066 -3.279,1.232 -4.089,1.677c-0.811,0.444 -3.021,0.406 -3.021,0.406c8.101,13.061 31.487,20.114 31.487,20.114Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M169.793,46.953c-7.062,-1.17 -12.249,-1.622 -12.249,-1.622c2.823,-0.709 5.225,-1.571 7.279,-2.509c-9.939,-7.239 -19.842,-9.021 -19.842,-9.021c0,0 -1.841,0.613 -2.097,3.682c-0.254,3.067 -2.607,3.477 -2.607,3.477c37.121,9.919 42.694,40.495 42.694,40.495c-2.531,-13.805 -7.9,-22.625 -7.9,-22.625c5.676,5.829 9.587,20.632 9.587,20.632c-1.259,-15.301 -7.604,-25.618 -14.865,-32.509Z", 2, "fill", "#fff", "fill-rule", "nonzero"], ["d", "M180.901,49.165c5.345,16.489 5.446,30.449 5.446,30.449c3.955,-7.668 2.914,-25.309 2.914,-25.309c3.681,7.209 3.221,26.844 3.221,26.844c1.888,-10.318 1.961,-19.753 0.878,-28.245c-3.92,-1.502 -8.228,-2.736 -12.459,-3.739Z", 2, "fill", "#fff", "fill-rule", "nonzero"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LogoComponent, [{
        type: core.Component,
        args: [{
                selector: 'ws-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.css']
            }]
    }], function () { return []; }, null); })();

});

var footer_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterComponent = void 0;


const i0 = core;


const _c0 = ["#col1DefaultTemplate"];
const _c1 = ["#col6DefaultTemplate"];
const _c2 = ["#colDefaultTemplate"];
function FooterComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
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
} }
function FooterComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "a", 24);
    i0.ɵɵelement(2, "ws-logo", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function FooterComponent_ng_template_4_Template(rf, ctx) { }
function FooterComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function FooterComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function FooterComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function FooterComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function FooterComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function FooterComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function FooterComponent_div_37_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 31);
    i0.ɵɵlistener("click", function FooterComponent_div_37_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r16); const language_r14 = ctx.$implicit; const ctx_r15 = i0.ɵɵnextContext(2); ctx_r15.changeLanguage(language_r14); return false; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const language_r14 = ctx.$implicit;
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r13.isLanguageSelected(language_r14));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", language_r14.name, " ");
} }
function FooterComponent_div_37_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r12.languages);
} }
class FooterComponent {
    constructor() {
        this.logoutClick = new core.EventEmitter();
        this.loginClick = new core.EventEmitter();
        this.languageChange = new core.EventEmitter();
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.date = new Date();
    }
    login() {
        this.loginClick.emit();
    }
    logout() {
        this.logoutClick.emit();
    }
    changeLanguage(model) {
        this.selectedLanguage = model;
        this.languageChange.emit(model);
    }
    isLanguageSelected(model) {
        if (generic_util.GenericUtil.isNullOrUndefined(this.selectedLanguage)) {
            return model.code === 'en';
        }
        return model.code === this.selectedLanguage.code;
    }
}
exports.FooterComponent = FooterComponent;
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["ws-footer"]], viewQuery: function FooterComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
        i0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.col1DefaultTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.col6DefaultTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.colDefaultTemplate = _t.first);
    } }, inputs: { languages: "languages", selectedLanguage: "selectedLanguage", isLoggedIn: "isLoggedIn", currentUser: "currentUser", col1Template: "col1Template", col2Template: "col2Template", col3Template: "col3Template", col4Template: "col4Template", col5Template: "col5Template", col6Template: "col6Template" }, outputs: { logoutClick: "logoutClick", loginClick: "loginClick", languageChange: "languageChange" }, decls: 38, vars: 11, consts: [["col1DefaultTemplate", ""], ["col6DefaultTemplate", ""], ["colDefaultTemplate", ""], [1, "ws-page-footer"], [1, "container"], [1, "ws-page-footer-row"], [1, "ws-page-footer-col-sm"], [4, "ngTemplateOutlet"], [1, "ws-page-footer-row", "pb-3"], [1, "ws-page-footer-col-lg"], [1, "list-inline", "mt-2"], [1, "list-inline-item"], ["href", "https://worldskills.org/site/privacy/", "target", "_blank"], ["href", "https://worldskills.org/site/terms/", "target", "_blank"], ["href", "https://worldskills.org/site/contact/", "target", "_blank"], ["class", "btn-toolbar justify-content-end", 4, "ngIf"], ["href", "https://worldskills.org/internal/", "target", "_blank"], ["href", "https://worldskills.org/internal/wiw/", "target", "_blank"], ["href", "https://glossary.worldskills.org/", "target", "_blank"], ["href", "https://registrations.worldskills.org/", "target", "_blank"], ["href", "https://forums.worldskills.org/", "target", "_blank"], ["href", "https://il.worldskills.org/", "target", "_blank"], ["href", "https://skill-management.worldskills.org/", "target", "_blank"], [1, "text-right", "mt-5"], ["href", "https://worldskills.org/", "target", "_blank"], ["mode", "default"], [1, "btn-toolbar", "justify-content-end"], [1, "btn-group", "btn-group-sm", "dropup"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-light", "dropdown-toggle"], [1, "dropdown-menu", "dropdown-menu-right"], ["class", "dropdown-item", "href", "#", 3, "active", "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "dropdown-item", 3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        const _r2 = i0.ɵɵreference(3);
        const _r4 = i0.ɵɵreference(5);
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
    } }, directives: [common.NgTemplateOutlet, common.NgIf, logo_component.LogoComponent, common.NgForOf], pipes: [common.DatePipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterComponent, [{
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
        }] }); })();

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
const NAMED_FORMATS = {};
const DATE_FORMATS_SPLIT = 
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
    let date = toDate(value);
    const namedFormat = getNamedFormat(locale, format);
    format = namedFormat || format;
    let parts = [];
    let match;
    while (format) {
        match = DATE_FORMATS_SPLIT.exec(format);
        if (match) {
            parts = parts.concat(match.slice(1));
            const part = parts.pop();
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
    let dateTimezoneOffset = date.getTimezoneOffset();
    if (timezone) {
        dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
        date = convertTimezoneToLocal(date, timezone, true);
    }
    let text = '';
    // tslint:disable-next-line:no-shadowed-variable
    parts.forEach(value => {
        const dateFormatter = getDateFormatter(value);
        text += dateFormatter ?
            dateFormatter(date, locale, dateTimezoneOffset) :
            value === '\'\'' ? '\'' : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
    });
    return text;
}
exports.formatDate = formatDate;
function getNamedFormat(locale, format) {
    const localeId = common.getLocaleId(locale);
    NAMED_FORMATS[localeId] = NAMED_FORMATS[localeId] || {};
    if (NAMED_FORMATS[localeId][format]) {
        return NAMED_FORMATS[localeId][format];
    }
    let formatValue = '';
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
            const shortTime = getNamedFormat(locale, 'shortTime');
            const shortDate = getNamedFormat(locale, 'shortDate');
            formatValue = formatDateTime(common.getLocaleDateTimeFormat(locale, common.FormatWidth.Short), [shortTime, shortDate]);
            break;
        case 'medium':
            const mediumTime = getNamedFormat(locale, 'mediumTime');
            const mediumDate = getNamedFormat(locale, 'mediumDate');
            formatValue = formatDateTime(common.getLocaleDateTimeFormat(locale, common.FormatWidth.Medium), [mediumTime, mediumDate]);
            break;
        case 'long':
            const longTime = getNamedFormat(locale, 'longTime');
            const longDate = getNamedFormat(locale, 'longDate');
            formatValue =
                formatDateTime(common.getLocaleDateTimeFormat(locale, common.FormatWidth.Long), [longTime, longDate]);
            break;
        case 'full':
            const fullTime = getNamedFormat(locale, 'fullTime');
            const fullDate = getNamedFormat(locale, 'fullDate');
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
function padNumber(num, digits, minusSign = '-', trim, negWrap) {
    let neg = '';
    if (num < 0 || (negWrap && num <= 0)) {
        if (negWrap) {
            num = -num + 1;
        }
        else {
            num = -num;
            neg = minusSign;
        }
    }
    let strNum = String(num);
    while (strNum.length < digits) {
        strNum = '0' + strNum;
    }
    if (trim) {
        strNum = strNum.substr(strNum.length - digits);
    }
    return neg + strNum;
}
function formatFractionalSeconds(milliseconds, digits) {
    const strMs = padNumber(milliseconds, 3);
    return strMs.substr(0, digits);
}
/**
 * Returns a date formatter that transforms a date into its locale digit representation
 */
function dateGetter(name, size, offset = 0, trim = false, negWrap = false) {
    // tslint:disable-next-line:only-arrow-functions
    return function (date, locale) {
        let part = getDatePart(name, date);
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
        const localeMinus = common.getLocaleNumberSymbol(locale, common.NumberSymbol.MinusSign);
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
            throw new Error(`Unknown DateType value "${part}".`);
    }
}
/**
 * Returns a date formatter that transforms a date into its locale string representation
 */
function dateStrGetter(name, width, form = common.FormStyle.Format, extended = false) {
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
            const currentHours = date.getHours();
            const currentMinutes = date.getMinutes();
            if (extended) {
                const rules = common.getLocaleExtraDayPeriodRules(locale);
                const dayPeriods = common.getLocaleExtraDayPeriods(locale, form, width);
                const index = rules.findIndex(rule => {
                    if (Array.isArray(rule)) {
                        // morning, afternoon, evening, night
                        const [from, to] = rule;
                        const afterFrom = currentHours >= from.hours && currentMinutes >= from.minutes;
                        const beforeTo = (currentHours < to.hours ||
                            (currentHours === to.hours && currentMinutes < to.minutes));
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
                        if (rule.hours === currentHours && rule.minutes === currentMinutes) {
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
            return common.getLocaleDayPeriods(locale, form, width)[currentHours < 12 ? 0 : 1];
        case TranslationType.Eras:
            // tslint:disable-next-line:no-angle-bracket-type-assertion
            return common.getLocaleEraNames(locale, width)[date.getFullYear() <= 0 ? 0 : 1];
        default:
            // This default case is not needed by TypeScript compiler, as the switch is exhaustive.
            // However Closure Compiler does not understand that and reports an error in typed mode.
            // The `throw new Error` below works around the problem, and the unexpected: never variable
            // makes sure tsc still checks this code is unreachable.
            const unexpected = name;
            throw new Error(`unexpected translation type ${unexpected}`);
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
        const zone = -1 * offset;
        const minusSign = common.getLocaleNumberSymbol(locale, common.NumberSymbol.MinusSign);
        const hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);
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
                throw new Error(`Unknown zone width "${width}"`);
        }
    };
}
const JANUARY = 0;
const THURSDAY = 4;
function getFirstThursdayOfYear(year) {
    const firstDayOfYear = (new Date(year, JANUARY, 1)).getDay();
    return new Date(year, 0, 1 + ((firstDayOfYear <= THURSDAY) ? THURSDAY : THURSDAY + 7) - firstDayOfYear);
}
function getThursdayThisWeek(datetime) {
    return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (THURSDAY - datetime.getDay()));
}
function weekGetter(size, monthBased = false) {
    // tslint:disable-next-line:only-arrow-functions typedef
    return function (date, locale) {
        let result;
        if (monthBased) {
            const nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
            const today = date.getDate();
            result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
        }
        else {
            const firstThurs = getFirstThursdayOfYear(date.getFullYear());
            const thisThurs = getThursdayThisWeek(date);
            const diff = thisThurs.getTime() - firstThurs.getTime();
            result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week
        }
        return padNumber(result, size, common.getLocaleNumberSymbol(locale, common.NumberSymbol.MinusSign));
    };
}
const DATE_FORMATS = {};
// Based on CLDR formats:
// See complete list: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
// See also explanations: http://cldr.unicode.org/translation/date-time
// TODO(ocombe): support all missing cldr formats: Y, U, Q, D, F, e, c, j, J, C, A, v, V, X, x
function getDateFormatter(format) {
    if (DATE_FORMATS[format]) {
        return DATE_FORMATS[format];
    }
    let formatter;
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
    const requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
    return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
}
function addDateMinutes(date, minutes) {
    date = new Date(date.getTime());
    date.setMinutes(date.getMinutes() + minutes);
    return date;
}
function convertTimezoneToLocal(date, timezone, reverse) {
    const reverseValue = reverse ? -1 : 1;
    const dateTimezoneOffset = date.getTimezoneOffset();
    const timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
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
        const parsedNb = parseFloat(value);
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
            const [y, m, d] = value.split('-').map((val) => +val);
            return new Date(y, m - 1, d);
        }
        let match;
        // tslint:disable-next-line:no-conditional-assignment
        if (match = value.match(exports.ISO8601_DATE_REGEX)) {
            return isoStringToDate(match);
        }
    }
    const date = new Date(value);
    if (!isDate(date)) {
        throw new Error(`Unable to convert "${value}" into a date`);
    }
    return date;
}
exports.toDate = toDate;
/**
 * Converts a date in ISO8601 to a Date.
 * Used instead of `Date.parse` because of browser discrepancies.
 */
function isoStringToDate(match) {
    const date = new Date(0);
    let tzHour = 0;
    let tzMin = 0;
    // match[8] means that the string contains "Z" (UTC) or a timezone like "+01:00" or "+0100"
    const dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
    const timeSetter = match[8] ? date.setUTCHours : date.setHours;
    // if there is a timezone defined like "+01:00" or "+0100"
    if (match[9]) {
        tzHour = Number(match[9] + match[10]);
        tzMin = Number(match[9] + match[11]);
    }
    dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    const h = Number(match[4] || 0) - tzHour;
    const m = Number(match[5] || 0) - tzMin;
    const s = Number(match[6] || 0);
    const ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
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




const i0 = core;
const i1 = ngBootstrap;
function DateRangeComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵlistener("mouseenter", function DateRangeComponent_ng_template_5_Template_span_mouseenter_0_listener() { i0.ɵɵrestoreView(_r8); const date_r5 = ctx.$implicit; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.hoveredDate = date_r5; })("mouseleave", function DateRangeComponent_ng_template_5_Template_span_mouseleave_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.hoveredDate = null; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const date_r5 = ctx.$implicit;
    const focused_r6 = ctx.focused;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("focused", focused_r6)("range", ctx_r2.isRange(date_r5))("faded", ctx_r2.isHovered(date_r5) || ctx_r2.isInside(date_r5));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", date_r5.day, " ");
} }
class DateRangeComponent {
    constructor(calendar, formatter) {
        this.calendar = calendar;
        this.formatter = formatter;
        this.disabled = false;
        this.hoveredDate = null;
        // tslint:disable-next-line:no-output-native
        this.change = new core.EventEmitter();
        // Function to call when the range changes.
        this.onChange = (range) => { };
        // Function to call when the input is touched.
        this.onTouched = () => { };
    }
    get opacity() {
        return this.disabled ? 0.25 : 1;
    }
    onDateSelection(date) {
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
    }
    isHovered(date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
    }
    validateInput(currentValue, input) {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(ngBootstrap.NgbDate.from(parsed)) ? ngBootstrap.NgbDate.from(parsed) : currentValue;
    }
    writeValue(obj) {
        if (obj && !this.disabled) {
            this.fromDate = this.toNgbDate(obj.start);
            this.toDate = this.toNgbDate(obj.end);
            this.value = obj;
            this.onChange(obj);
            this.change.emit(obj);
        }
    }
    toNgbDate(date) {
        date = date_helper.toDate(date);
        return new ngBootstrap.NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
exports.DateRangeComponent = DateRangeComponent;
DateRangeComponent.ɵfac = function DateRangeComponent_Factory(t) { return new (t || DateRangeComponent)(i0.ɵɵdirectiveInject(i1.NgbCalendar), i0.ɵɵdirectiveInject(i1.NgbDateParserFormatter)); };
DateRangeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangeComponent, selectors: [["ws-date-range"]], hostVars: 2, hostBindings: function DateRangeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("opacity", ctx.opacity);
    } }, inputs: { disabled: "disabled" }, outputs: { change: "change" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: forms.NG_VALUE_ACCESSOR,
                useExisting: core.forwardRef(() => DateRangeComponent),
                multi: true
            }
        ])], decls: 21, vars: 6, consts: [[1, "form-inline"], [1, "form-group"], [1, "input-group", "hidden-group"], ["name", "datepicker", "ngbDatepicker", "", "outsideDays", "hidden", 1, "form-control", 3, "autoClose", "displayMonths", "dayTemplate", "startDate", "dateSelect"], ["datepicker", "ngbDatepicker"], ["t", ""], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dpFromDate", 1, "form-control", 3, "value", "input"], ["dpFromDate", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], [1, "form-group", "ml-2"], ["placeholder", "yyyy-mm-dd", "name", "dpToDate", 1, "form-control", 3, "value", "input"], ["dpToDate", ""], [1, "custom-day", 3, "mouseenter", "mouseleave"]], template: function DateRangeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = i0.ɵɵgetCurrentView();
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
        i0.ɵɵlistener("input", function DateRangeComponent_Template_input_input_9_listener() { i0.ɵɵrestoreView(_r10); const _r3 = i0.ɵɵreference(10); return ctx.fromDate = ctx.validateInput(ctx.fromDate, _r3.value); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 9);
        i0.ɵɵelementStart(12, "button", 10);
        i0.ɵɵlistener("click", function DateRangeComponent_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r10); const _r0 = i0.ɵɵreference(4); return _r0.toggle(); });
        i0.ɵɵelement(13, "i", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 12);
        i0.ɵɵelementStart(15, "div", 6);
        i0.ɵɵelementStart(16, "input", 13, 14);
        i0.ɵɵlistener("input", function DateRangeComponent_Template_input_input_16_listener() { i0.ɵɵrestoreView(_r10); const _r4 = i0.ɵɵreference(17); return ctx.toDate = ctx.validateInput(ctx.toDate, _r4.value); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "div", 9);
        i0.ɵɵelementStart(19, "button", 10);
        i0.ɵɵlistener("click", function DateRangeComponent_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r10); const _r0 = i0.ɵɵreference(4); return _r0.toggle(); });
        i0.ɵɵelement(20, "i", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(6);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("autoClose", "outside")("displayMonths", 2)("dayTemplate", _r1)("startDate", ctx.fromDate);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("value", ctx.formatter.format(ctx.fromDate));
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("value", ctx.formatter.format(ctx.toDate));
    } }, directives: [i1.NgbInputDatepicker], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateRangeComponent, [{
        type: core.Component,
        args: [{
                selector: 'ws-date-range',
                templateUrl: './date-range.component.html',
                styleUrls: ['./date-range.component.css'],
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(() => DateRangeComponent),
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
        }] }); })();

});

var datetime = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datetime = void 0;
class Datetime {
    constructor(init) {
        Object.assign(this, init);
    }
    static asToday() {
        const date = new Date();
        return new Datetime({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
            timeZoneOffset: date.getTimezoneOffset()
        });
    }
    static fromLocalString(dateString) {
        dateString = dateString.trim();
        const pieces = dateString.split(' ');
        let date;
        if (pieces.length > 0) {
            let dateParts = [];
            let timeParts = [];
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
        const isValidDate = !isNaN(date.valueOf());
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
    }
    isInteger(value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    }
    toString() {
        if (this.isInteger(this.year) && this.isInteger(this.month) && this.isInteger(this.day)) {
            const year = this.year.toString().padStart(2, '0');
            const month = this.month.toString().padStart(2, '0');
            const day = this.day.toString().padStart(2, '0');
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
            const hour = this.hour.toString().padStart(2, '0');
            const minute = this.minute.toString().padStart(2, '0');
            const second = this.second.toString().padStart(2, '0');
            const tzo = -this.timeZoneOffset;
            const dif = tzo >= 0 ? '+' : '-';
            const pad = (num) => {
                const norm = Math.floor(Math.abs(num));
                return (norm < 10 ? '0' : '') + norm;
            };
            // tslint:disable-next-line:max-line-length
            const isoString = `${pad(year)}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(minute)}:${pad(second)}${dif}${pad(tzo / 60)}:${pad(tzo % 60)}`;
            return isoString;
        }
        return null;
    }
}
exports.Datetime = Datetime;

});

var datetimePicker_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatetimePickerComponent = void 0;






const i0 = core;
const i1 = ngBootstrap;
const i2 = forms;
const i3 = common;
const _c0 = ["popOver"];
function DatetimePickerComponent_ng_template_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "ngb-datepicker", 8, 9);
    i0.ɵɵlistener("ngModelChange", function DatetimePickerComponent_ng_template_6_div_1_Template_ngb_datepicker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.onDateChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 10);
    i0.ɵɵlistener("click", function DatetimePickerComponent_ng_template_6_div_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.toggleDateTimeState(); });
    i0.ɵɵelement(4, "i", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 12);
    i0.ɵɵlistener("click", function DatetimePickerComponent_ng_template_6_div_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onAccept(); });
    i0.ɵɵelement(6, "i", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r4.value);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !(ctx_r4.value == null ? null : ctx_r4.value.day))("ngbPopover", _r2);
} }
function DatetimePickerComponent_ng_template_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "button", 12);
    i0.ɵɵlistener("click", function DatetimePickerComponent_ng_template_6_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.toggleDateTimeState(); });
    i0.ɵɵelement(2, "i", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 12);
    i0.ɵɵlistener("click", function DatetimePickerComponent_ng_template_6_div_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.onAccept(); });
    i0.ɵɵelement(4, "i", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 14);
    i0.ɵɵelementStart(6, "ngb-timepicker", 15, 16);
    i0.ɵɵlistener("ngModelChange", function DatetimePickerComponent_ng_template_6_div_2_Template_ngb_timepicker_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.onTimeChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r5.value)("seconds", ctx_r5.seconds)("hourStep", ctx_r5.hourStep)("minuteStep", ctx_r5.minuteStep)("secondStep", ctx_r5.secondStep);
} }
function DatetimePickerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, DatetimePickerComponent_ng_template_6_div_1_Template, 7, 3, "div", 7);
    i0.ɵɵtemplate(2, DatetimePickerComponent_ng_template_6_div_2_Template, 8, 5, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.showTimePickerToggle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.showTimePickerToggle);
} }
function DatetimePickerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " timepicker here!\n");
} }
class DatetimePickerComponent {
    constructor(config) {
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
        this.onChange = (value) => { };
        // Function to call when the input is touched.
        this.onTouched = () => { };
        config.autoClose = 'outside';
        config.placement = 'auto';
    }
    get opacity() {
        return this.disabled ? 0.25 : 1;
    }
    writeValue(obj) {
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
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onInputChange($event) {
        const value = $event.target.value;
        const dt = datetime.Datetime.fromLocalString(value);
        if (dt) {
            this.writeValue(dt);
        }
        else if (value.trim() === '') {
            this.writeValue(new datetime.Datetime());
        }
    }
    toggleDateTimeState() {
        this.showTimePickerToggle = !this.showTimePickerToggle;
    }
    onDateChange(date) {
        if (!this.value) {
            this.value = new datetime.Datetime();
        }
        this.value.year = date.year;
        this.value.month = date.month;
        this.value.day = date.day;
        this.writeValue(this.value);
    }
    onTimeChange(event) {
        this.value.hour = event.hour;
        this.value.minute = event.minute;
        this.value.second = event.second;
        this.writeValue(this.value);
    }
    onAccept() {
        if (this.popover.isOpen()) {
            this.popover.close();
        }
    }
    inputBlur($event) {
        this.onTouched();
    }
    toNgbDate(date) {
        date = date_helper.toDate(date);
        return new ngBootstrap.NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    }
}
exports.DatetimePickerComponent = DatetimePickerComponent;
DatetimePickerComponent.ɵfac = function DatetimePickerComponent_Factory(t) { return new (t || DatetimePickerComponent)(i0.ɵɵdirectiveInject(i1.NgbPopoverConfig)); };
DatetimePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DatetimePickerComponent, selectors: [["ws-datetime-picker"]], viewQuery: function DatetimePickerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popover = _t.first);
    } }, hostVars: 2, hostBindings: function DatetimePickerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("opacity", ctx.opacity);
    } }, inputs: { disabled: "disabled", inputDatetimeFormat: "inputDatetimeFormat", hourStep: "hourStep", minuteStep: "minuteStep", secondStep: "secondStep", seconds: "seconds" }, outputs: { change: "change" }, features: [i0.ɵɵProvidersFeature([
            common.DatePipe,
            {
                provide: forms.NG_VALUE_ACCESSOR,
                useExisting: core.forwardRef(() => DatetimePickerComponent),
                multi: true
            }
        ])], decls: 10, vars: 8, consts: [[1, "input-group", "mr-2"], [1, "form-control", "form-control-sm", 3, "ngModel", "disabled", "placeholder", "blur", "change"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "ngbPopover", "disabled"], [1, "fa", "fa-calendar"], ["calendarContent", ""], ["timePickerContent", ""], [4, "ngIf"], ["name", "datepicker", 3, "ngModel", "ngModelChange"], ["dp", ""], ["type", "button", 1, "btn", "btn-block", "btn-outline-secondary", 3, "disabled", "ngbPopover", "click"], [1, "fa", "fa-clock-o"], ["type", "button", 1, "btn", "btn-block", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-check"], [1, "mt-auto"], ["name", "timepicker", 3, "ngModel", "seconds", "hourStep", "minuteStep", "secondStep", "ngModelChange"], ["tp", ""]], template: function DatetimePickerComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(7);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", i0.ɵɵpipeBind2(2, 5, ctx.value.toString(), ctx.inputDatetimeFormat))("disabled", ctx.disabled)("placeholder", ctx.inputDatetimeFormat);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngbPopover", _r0)("disabled", ctx.disabled);
    } }, directives: [i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgbPopover, i3.NgIf, i1.NgbDatepicker, i1.NgbTimepicker], pipes: [i3.DatePipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatetimePickerComponent, [{
        type: core.Component,
        args: [{
                selector: 'ws-datetime-picker',
                templateUrl: './datetime-picker.component.html',
                styleUrls: ['./datetime-picker.component.css'],
                providers: [
                    common.DatePipe,
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(() => DatetimePickerComponent),
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
        }] }); })();

});

var dateSort_pipe = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortPipe = void 0;

const i0 = core;
class SortPipe {
    transform(items, direction, property) {
        // default direction ascending
        direction = direction === null || direction === undefined ? 'asc' : direction;
        return items.sort((a, b) => {
            // handle arrays or objects
            const left = property === null || property === undefined ? a : a[property];
            const right = property === null || property === undefined ? b : b[property];
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
    }
}
exports.SortPipe = SortPipe;
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "wsSort", type: SortPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SortPipe, [{
        type: core.Pipe,
        args: [{
                name: 'wsSort'
            }]
    }], null, null); })();

});

var pollResult_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollResultComponent = void 0;

const i0 = core;



function PollResultComponent_div_0_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "ngb-progressbar", 2);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r2.text.text);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("showValue", false)("value", ctx_r1.countVotes(option_r2))("max", ctx_r1.max);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.countVotes(option_r2), "");
} }
function PollResultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, PollResultComponent_div_0_p_1_Template, 6, 5, "p", 1);
    i0.ɵɵpipe(2, "wsSort");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 1, ctx_r0.poll.options, "asc", "id"));
} }
class PollResultComponent {
    constructor() { }
    ngOnInit() {
        this.init();
    }
    // tslint:disable-next-line:use-lifecycle-interface typedef
    ngOnChanges() {
        this.init();
    }
    init() {
        this.max = this.results.map(x => x.count).reduce((sum, current) => sum + current, 0);
    }
    countVotes(option) {
        if (!this.poll || !this.results) {
            return 0;
        }
        if (this.max === 0) {
            return 0;
        }
        const result = this.results.find(x => x.option.id === option.id);
        return result ? result.count : 0;
    }
}
exports.PollResultComponent = PollResultComponent;
PollResultComponent.ɵfac = function PollResultComponent_Factory(t) { return new (t || PollResultComponent)(); };
PollResultComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PollResultComponent, selectors: [["ws-poll-result"]], inputs: { poll: "poll", results: "results" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "success", 3, "showValue", "value", "max"]], template: function PollResultComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PollResultComponent_div_0_Template, 3, 5, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.results);
    } }, directives: [common.NgIf, common.NgForOf, ngBootstrap.NgbProgressbar], pipes: [dateSort_pipe.SortPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PollResultComponent, [{
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
        }] }); })();

});

var standardPoll_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardPollComponent = void 0;

const i0 = core;



const _c0 = function (a0) { return { active: a0 }; };
function StandardPollComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "label", 4);
    i0.ɵɵelementStart(3, "input", 5);
    i0.ɵɵlistener("ngModelChange", function StandardPollComponent_li_1_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.selection.optionId = $event; })("click", function StandardPollComponent_li_1_Template_input_click_3_listener() { i0.ɵɵrestoreView(_r3); const option_r1 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onOptionSelect(option_r1); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx_r0.voted.hasVoted && ctx_r0.isSelected(option_r1)));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r0.voted.hasVoted)("checked", ctx_r0.isSelected(option_r1))("value", option_r1.id)("ngModel", ctx_r0.selection.optionId);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", option_r1.text.text, " ");
} }
class StandardPollComponent {
    constructor() {
        this.optionSelected = new core.EventEmitter();
    }
    ngOnInit() {
        this.init();
    }
    // tslint:disable-next-line:use-lifecycle-interface typedef
    ngOnChanges() {
        this.init();
    }
    init() {
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
    }
    loadDefaultSelection() {
        this.selection = { rank: 1, optionId: null };
    }
    isSelected(option) {
        if (!this.selection) {
            return false;
        }
        return this.selection.optionId === option.id;
    }
    onOptionSelect(option) {
        const entry = { rank: 1, optionId: option.id };
        this.optionSelected.emit([entry]);
    }
}
exports.StandardPollComponent = StandardPollComponent;
StandardPollComponent.ɵfac = function StandardPollComponent_Factory(t) { return new (t || StandardPollComponent)(); };
StandardPollComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StandardPollComponent, selectors: [["ws-standard-poll"]], inputs: { poll: "poll", voted: "voted", initialSelection: "initialSelection" }, outputs: { optionSelected: "optionSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 5, consts: [[1, "list-group"], ["class", "list-group-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "ngClass"], [1, "form-check"], [1, "form-check-label"], ["type", "radio", "name", "questions", 1, "form-check-input", 3, "disabled", "checked", "value", "ngModel", "ngModelChange", "click"]], template: function StandardPollComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 0);
        i0.ɵɵtemplate(1, StandardPollComponent_li_1_Template, 5, 8, "li", 1);
        i0.ɵɵpipe(2, "wsSort");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 1, ctx.poll.options, "asc", "id"));
    } }, directives: [common.NgForOf, common.NgClass, forms.RadioControlValueAccessor, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel], pipes: [dateSort_pipe.SortPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StandardPollComponent, [{
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
        }] }); })();

});

var weightedPoll_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightedPollComponent = void 0;

const i0 = core;


function WeightedPollComponent_li_1_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", option_r3.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r3.text.text);
} }
function WeightedPollComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 2);
    i0.ɵɵelementStart(1, "select", 3);
    i0.ɵɵlistener("ngModelChange", function WeightedPollComponent_li_1_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const num_r1 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return (ctx_r4.models[num_r1] = $event); })("change", function WeightedPollComponent_li_1_Template_select_change_1_listener($event) { i0.ɵɵrestoreView(_r5); const num_r1 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.change($event, num_r1); });
    i0.ɵɵelementStart(2, "option", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, WeightedPollComponent_li_1_option_4_Template, 2, 2, "option", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const num_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.models[num_r1])("disabled", ctx_r0.voted.hasVoted);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.numberToWord(num_r1 + 1), " selection (", ctx_r0.calcPointsForItem(num_r1), " points)");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.poll.options);
} }
class WeightedPollComponent {
    constructor() {
        this.optionSelected = new core.EventEmitter();
    }
    ngOnInit() {
        this.init();
    }
    init() {
        // this.selection = [];
        // ensure variables
        this.numSelections = [];
        this.models = [];
        // loop for number of select boxes to show
        this.numSelections = Array(this.poll.numberOfSelections).fill(0).map((x, i) => i);
        // ensure each select box has a model to bind to
        this.numSelections.forEach(num => {
            const selected = this.initialSelection.find(x => x.rank === num + 1);
            if (selected) {
                this.models.push(selected.optionId.toString()); // handle initial selection
            }
            else {
                this.models.push('0'); // ensure the selection text is displayed
            }
        });
    }
    change(event, index) {
        // ensure we are not dealing with an unset action
        if (event.target.value !== '0') {
            const idx = this.models.findIndex(x => x === event.target.value);
            // if an option was selected twice from different drop downs. unset the older selection
            if (idx !== index && idx !== -1) {
                this.models[idx] = '0';
            }
        }
        // emit selection only if all options are selected
        if (this.hasMaxSelections()) {
            const output = [];
            this.models.forEach((id, i) => {
                const entry = { rank: i + 1, optionId: id };
                output.push(entry);
            });
            this.optionSelected.emit(output);
        }
    }
    hasMaxSelections() {
        // if there are no unset options, we have max selection
        return this.models.filter(x => x === '0').length === 0;
    }
    // convert this to an algorithm if the design works out
    numberToWord(num) {
        if (num < 0) {
            return null;
        }
        // TODO: Convert this to an algo
        const word = ['zero', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eight', 'ninth', 'tenth'];
        return word[num];
    }
    calcPointsForItem(num) {
        return this.poll.numberOfSelections - num;
    }
    isSelected(optionId) {
        return this.models.findIndex(x => x === String(optionId)) !== -1;
    }
}
exports.WeightedPollComponent = WeightedPollComponent;
WeightedPollComponent.ɵfac = function WeightedPollComponent_Factory(t) { return new (t || WeightedPollComponent)(); };
WeightedPollComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WeightedPollComponent, selectors: [["ws-weighted-poll"]], inputs: { poll: "poll", voted: "voted", initialSelection: "initialSelection" }, outputs: { optionSelected: "optionSelected" }, decls: 2, vars: 1, consts: [[1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "form-control", 3, "ngModel", "disabled", "ngModelChange", "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function WeightedPollComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 0);
        i0.ɵɵtemplate(1, WeightedPollComponent_li_1_Template, 5, 5, "li", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.numSelections);
    } }, directives: [common.NgForOf, forms.SelectControlValueAccessor, forms.NgControlStatus, forms.NgModel, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WeightedPollComponent, [{
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
        }] }); })();

});

var voteControl_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteControlComponent = void 0;


const i0 = core;




function VoteControlComponent_ng_template_0_Template(rf, ctx) { }
function VoteControlComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵelement(1, "br");
    i0.ɵɵelementStart(2, "small", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.poll.title.text, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("Created By: ", ctx_r3.poll.createdBy.firstName, " ", ctx_r3.poll.createdBy.lastName, "");
} }
function VoteControlComponent_ng_template_4_small_5_small_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 5);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2, "Starts:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_ng_template_4_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 5);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2, "Started:");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, VoteControlComponent_ng_template_4_small_5_small_3_Template, 3, 0, "small", 6);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r9.state == "Not yet started");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 2, ctx_r9.poll.start, "EEEE, MMMM d, y, HH:mm zzzz"), "");
} }
function VoteControlComponent_ng_template_4_small_7_small_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 5);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2, "Finished:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_ng_template_4_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 5);
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2, "Finishes:");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, VoteControlComponent_ng_template_4_small_7_small_3_Template, 3, 0, "small", 6);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r10.state == "expired");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 2, ctx_r10.poll.expiry, "EEEE, MMMM d, y, HH:mm zzzz"), "");
} }
function VoteControlComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.state, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.state != "Not yet started");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.state != "expired");
} }
function VoteControlComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r7.poll.question.text, "\n");
} }
function VoteControlComponent_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_div_6_em_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em");
    i0.ɵɵtext(1, "You have already voted!");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_div_6_ws_standard_poll_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ws-standard-poll", 23);
    i0.ɵɵlistener("optionSelected", function VoteControlComponent_div_8_div_6_ws_standard_poll_3_Template_ws_standard_poll_optionSelected_0_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.selected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("poll", ctx_r28.poll)("voted", ctx_r28.voted)("initialSelection", ctx_r28.selection);
} }
function VoteControlComponent_div_8_div_6_ws_weighted_poll_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ws-weighted-poll", 23);
    i0.ɵɵlistener("optionSelected", function VoteControlComponent_div_8_div_6_ws_weighted_poll_4_Template_ws_weighted_poll_optionSelected_0_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.selected($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("poll", ctx_r29.poll)("voted", ctx_r29.voted)("initialSelection", ctx_r29.selection);
} }
function VoteControlComponent_div_8_div_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, VoteControlComponent_div_8_div_6_ng_container_1_Template, 1, 0, "ng-container", 9);
    i0.ɵɵtemplate(2, VoteControlComponent_div_8_div_6_em_2_Template, 2, 0, "em", 21);
    i0.ɵɵtemplate(3, VoteControlComponent_div_8_div_6_ws_standard_poll_3_Template, 1, 3, "ws-standard-poll", 22);
    i0.ɵɵtemplate(4, VoteControlComponent_div_8_div_6_ws_weighted_poll_4_Template, 1, 3, "ws-weighted-poll", 22);
    i0.ɵɵtemplate(5, VoteControlComponent_div_8_div_6_ng_container_5_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
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
} }
function VoteControlComponent_div_8_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_div_7_ws_poll_result_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ws-poll-result", 25);
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("poll", ctx_r36.poll)("results", ctx_r36.results);
} }
function VoteControlComponent_div_8_div_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, VoteControlComponent_div_8_div_7_ng_container_1_Template, 1, 0, "ng-container", 9);
    i0.ɵɵtemplate(2, VoteControlComponent_div_8_div_7_ws_poll_result_2_Template, 1, 2, "ws-poll-result", 24);
    i0.ɵɵtemplate(3, VoteControlComponent_div_8_div_7_ng_container_3_Template, 1, 0, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r16.beforeResultTemplate ? ctx_r16.beforeResultTemplate : _r0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r16.results);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r16.afterResultTemplate ? ctx_r16.afterResultTemplate : _r0);
} }
function VoteControlComponent_div_8_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 26);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(2); ctx_r38.vote(); return false; });
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵtext(2, "\u00A0 Vote");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r17.hasVotesSelected());
} }
function VoteControlComponent_div_8_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(2); ctx_r40.unvote(); return false; });
    i0.ɵɵelement(1, "i", 29);
    i0.ɵɵtext(2, "\u00A0 Clear Vote");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(2); ctx_r42.changeView("result"); return false; });
    i0.ɵɵelement(1, "i", 31);
    i0.ɵɵtext(2, "\u00A0 View Results");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(2); ctx_r44.changeView("question"); return false; });
    i0.ɵɵelement(1, "i", 32);
    i0.ɵɵtext(2, "\u00A0 View Choices");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r47); const ctx_r46 = i0.ɵɵnextContext(2); ctx_r46.resetClick(ctx_r46.poll); return false; });
    i0.ɵɵelement(1, "i", 33);
    i0.ɵɵtext(2, "\u00A0 Reset");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_21_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r49); const ctx_r48 = i0.ɵɵnextContext(2); ctx_r48.extendClick(ctx_r48.poll); return false; });
    i0.ɵɵelement(1, "i", 34);
    i0.ɵɵtext(2, "\u00A0 Extend");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_23_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(2); ctx_r50.editClick(ctx_r50.poll); return false; });
    i0.ɵɵelement(1, "i", 35);
    i0.ɵɵtext(2, "\u00A0 Edit");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵlistener("click", function VoteControlComponent_div_8_button_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(2); ctx_r52.deleteClick(ctx_r52.poll); return false; });
    i0.ɵɵelement(1, "i", 37);
    i0.ɵɵtext(2, "\u00A0 Delete");
    i0.ɵɵelementEnd();
} }
function VoteControlComponent_div_8_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function VoteControlComponent_div_8_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    const _r6 = i0.ɵɵreference(7);
    const _r4 = i0.ɵɵreference(5);
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
} }
class VoteControlComponent {
    constructor() {
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
    ngOnInit() {
        this.view = 'question';
        this.init();
    }
    // tslint:disable-next-line:use-lifecycle-interface typedef
    ngOnChanges() {
        this.init();
    }
    init() {
        if (this.poll && this.results && this.voted) {
            this.selection = this.voted.votes;
            this.calculateState();
        }
    }
    calculateState() {
        this.state = 'running';
        const now = new Date();
        const start = this.parseDate(this.poll.start);
        const expiry = this.parseDate(this.poll.expiry);
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
    }
    selected(model) {
        this.selection = model;
    }
    vote() {
        if (this.voted.hasVoted) {
            alert('You have already voted');
        }
        else {
            this.voteSelected.emit(this.selection);
        }
    }
    unvote() {
        this.voteRemoved.emit(this.selection);
    }
    changeView(view) {
        this.view = view;
        this.viewChange.emit(view);
    }
    viewResultsState() {
        if (this.view === 'result') {
            return false;
        }
        if (!this.poll) {
            return false;
        }
        if (this.poll.anonymousResults) {
            return false;
        }
        const time = new Date().getTime();
        const end = this.parseDate(this.poll.expiry).getTime();
        if (this.poll.showingResults || time > end) {
            return true;
        }
        return false;
    }
    parseDate(value) {
        if (typeof value === 'string') {
            return new Date(value);
        }
        return value;
    }
    hasVotesSelected() {
        if (generic_util.GenericUtil.isNullOrUndefined(this.selection)) {
            return true;
        }
        return this.selection.length === 0;
    }
    editClick(poll) {
        this.edit.emit(poll);
    }
    extendClick(poll) {
        this.extend.emit(poll);
    }
    resetClick(poll) {
        this.reset.emit(poll);
    }
    deleteClick(poll) {
        this.delete.emit(poll);
    }
    showVoteButton() {
        return this.voted && !this.voted.hasVoted && this.view === 'question' && this.state === 'running';
    }
    showClearVoteButton() {
        return this.poll && this.voted && this.voted.hasVoted && this.view === 'question' && this.poll.allowingReVote
            && this.state === 'running';
    }
}
exports.VoteControlComponent = VoteControlComponent;
VoteControlComponent.ɵfac = function VoteControlComponent_Factory(t) { return new (t || VoteControlComponent)(); };
VoteControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: VoteControlComponent, selectors: [["ws-vote-control"]], inputs: { showEditButton: "showEditButton", showExtendButton: "showExtendButton", showResetButton: "showResetButton", showDeleteButton: "showDeleteButton", poll: "poll", results: "results", voted: "voted", beforeOptionsTemplate: "beforeOptionsTemplate", afterOptionsTemplate: "afterOptionsTemplate", beforeResultTemplate: "beforeResultTemplate", afterResultTemplate: "afterResultTemplate", titleTemplate: "titleTemplate", footerTemplate: "footerTemplate", questionTemplate: "questionTemplate" }, outputs: { edit: "edit", extend: "extend", reset: "reset", delete: "delete", viewChange: "viewChange", voteSelected: "voteSelected", voteRemoved: "voteRemoved" }, features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 1, consts: [["voteControlEmptyTemplate", ""], ["voteControlDefaultTitleTemplate", ""], ["voteControlDefaultFooterTemplate", ""], ["voteControlDefaultQuestionTemplate", ""], ["class", "card", 4, "ngIf"], [1, "text-muted"], ["class", "text-muted", 4, "ngIf"], [1, "card"], [1, "card-header"], [4, "ngTemplateOutlet"], [1, "card-body"], [1, "card-title"], ["class", "card-text", 4, "ngIf"], [1, "pull-left"], ["class", "btn btn-success", "href", "#", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-warning", "href", "#", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", "href", "#", 3, "click", 4, "ngIf"], [1, "pull-right"], ["class", "btn btn-danger", "href", "#", 3, "click", 4, "ngIf"], [1, "card-footer", "text-muted"], [1, "card-text"], [4, "ngIf"], [3, "poll", "voted", "initialSelection", "optionSelected", 4, "ngIf"], [3, "poll", "voted", "initialSelection", "optionSelected"], [3, "poll", "results", 4, "ngIf"], [3, "poll", "results"], ["href", "#", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "fa", "fa-check"], ["href", "#", 1, "btn", "btn-warning", 3, "click"], [1, "fa", "fa-close"], ["href", "#", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-area-chart"], [1, "fa", "fa-question-circle"], [1, "fa", "fa-refresh"], [1, "fa", "fa-arrows-h"], [1, "fa", "fa-edit"], ["href", "#", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-trash"]], template: function VoteControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, VoteControlComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, VoteControlComponent_ng_template_2_Template, 4, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, VoteControlComponent_ng_template_4_Template, 8, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, VoteControlComponent_ng_template_6_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, VoteControlComponent_div_8_Template, 29, 13, "div", 4);
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", ctx.poll);
    } }, directives: [common.NgIf, common.NgTemplateOutlet, standardPoll_component.StandardPollComponent, weightedPoll_component.WeightedPollComponent, pollResult_component.PollResultComponent], pipes: [common.DatePipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(VoteControlComponent, [{
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
        }] }); })();

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



const i0 = core;

const i2 = http;
class EntityTreeService {
    constructor(wsi, http) {
        this.wsi = wsi;
        this.http = http;
        this.subjects = [];
        this.subject = new rxjs.BehaviorSubject(null);
        this.wsi.serviceConfigSubject.subscribe(next => {
            this.endpoint = next.apiEndpoint + '/auth/ws_entities';
        });
    }
    static equals(a, b) {
        return (a.limit === b.limit &&
            a.offset === b.offset &&
            a.depth === b.depth &&
            a.member_of === b.member_of &&
            a.name === b.name &&
            a.role === b.role &&
            a.roleApp === b.roleApp &&
            a.sort === b.sort);
    }
    clearCache(params = null) {
        if (params === null) {
            this.subjects = [];
        }
        else {
            const cacheEntryIndex = this.subjects.findIndex(cE => EntityTreeService.equals(cE.params, params));
            if (cacheEntryIndex >= 0) {
                this.subjects.splice(cacheEntryIndex, 1);
            }
        }
    }
    getCachedSubject(params = {}, fetchOnCreate = true) {
        const cacheEntry = this.subjects.find(cE => EntityTreeService.equals(cE.params, params));
        if (cacheEntry) {
            return cacheEntry.subject;
        }
        else {
            const newCacheEntry = {
                params,
                subject: new rxjs.BehaviorSubject(null),
            };
            this.subjects.push(newCacheEntry);
            if (fetchOnCreate) {
                this.list(params);
            }
            return newCacheEntry.subject;
        }
    }
    list(params = {}) {
        let httpParams = new http.HttpParams();
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
        const observable = this.http.get(this.endpoint, { params: httpParams });
        const cacheEntry = this.subjects.find(cE => EntityTreeService.equals(cE.params, params));
        if (cacheEntry) {
            observable.subscribe(value => cacheEntry.subject.next(value));
        }
        observable.subscribe(value => this.subject.next(value));
        return observable;
    }
}
exports.EntityTreeService = EntityTreeService;
EntityTreeService.ɵfac = function EntityTreeService_Factory(t) { return new (t || EntityTreeService)(i0.ɵɵinject(worldskillsAngularLib_service.WorldskillsAngularLibService), i0.ɵɵinject(i2.HttpClient)); };
EntityTreeService.ɵprov = i0.ɵɵdefineInjectable({ token: EntityTreeService, factory: EntityTreeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EntityTreeService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: i2.HttpClient }]; }, null); })();

});

var entityTreeSelect_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityTreeSelectComponent = void 0;





const i0 = core;



const _c0 = ["ngSelectComponent"];
const _c1 = ["wrapperControl"];
const _c2 = ["expandControl"];
const _c3 = ["expandAllControl"];
const _c4 = ["collapseControl"];
const _c5 = ["collapseAllControl"];
const _c6 = ["separatorControl"];
const _c7 = ["showingControl"];
function EntityTreeSelectComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const template_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", template_r20);
} }
function EntityTreeSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r25); const click_r23 = ctx.click; $event.preventDefault(); return click_r23(); });
    i0.ɵɵtext(1, "Expand");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const enabled_r22 = ctx.enabled;
    i0.ɵɵproperty("disabled", !enabled_r22);
} }
function EntityTreeSelectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_4_Template_button_click_0_listener() { const click_r26 = ctx.click; return click_r26(); });
    i0.ɵɵtext(1, "Expand all");
    i0.ɵɵelementEnd();
} }
function EntityTreeSelectComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_6_Template_button_click_0_listener() { const click_r29 = ctx.click; return click_r29(); });
    i0.ɵɵtext(1, "Collapse");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const enabled_r28 = ctx.enabled;
    i0.ɵɵproperty("disabled", !enabled_r28);
} }
function EntityTreeSelectComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r33); const click_r31 = ctx.click; $event.preventDefault(); return click_r31(); });
    i0.ɵɵtext(1, "Collapse all");
    i0.ɵɵelementEnd();
} }
function EntityTreeSelectComponent_ng_template_10_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const showing_r34 = ctx.showing;
    const total_r35 = ctx.total;
    i0.ɵɵtextInterpolate2(" Showing ", showing_r34, " of ", total_r35, "\n");
} }
function EntityTreeSelectComponent_ng_template_14_ng_template_0_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_14_ng_template_1_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_14_ng_template_2_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_14_ng_template_3_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_14_ng_template_4_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_14_ng_template_5_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_14_ng_template_6_Template(rf, ctx) { }
const _c8 = function (a0, a1) { return { enabled: a0, click: a1 }; };
const _c9 = function (a0) { return { click: a0 }; };
function EntityTreeSelectComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, EntityTreeSelectComponent_ng_template_14_ng_template_0_Template, 0, 0, "ng-template", 16);
    i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_14_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵtemplate(2, EntityTreeSelectComponent_ng_template_14_ng_template_2_Template, 0, 0, "ng-template", 16);
    i0.ɵɵtemplate(3, EntityTreeSelectComponent_ng_template_14_ng_template_3_Template, 0, 0, "ng-template", 13);
    i0.ɵɵtemplate(4, EntityTreeSelectComponent_ng_template_14_ng_template_4_Template, 0, 0, "ng-template", 16);
    i0.ɵɵtemplate(5, EntityTreeSelectComponent_ng_template_14_ng_template_5_Template, 0, 0, "ng-template", 13);
    i0.ɵɵtemplate(6, EntityTreeSelectComponent_ng_template_14_ng_template_6_Template, 0, 0, "ng-template", 16);
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
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
} }
function EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_ng_template_2_Template(rf, ctx) { }
function EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_ng_template_4_Template(rf, ctx) { }
const _c10 = function (a0, a1) { return { showing: a0, total: a1 }; };
const _c11 = function (a0) { return { $implicit: a0 }; };
function EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_ng_template_2_Template, 0, 0, "ng-template", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtemplate(4, EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_ng_template_4_Template, 0, 0, "ng-template", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext(3);
    const _r14 = i0.ɵɵreference(15);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r49.controls.showing)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c10, ctx_r49.filtered, ctx_r49.total));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r49.controls.wrapper)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c11, _r14));
} }
function EntityTreeSelectComponent_ng_template_18_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_18_ng_container_0_ng_template_1_Template, 5, 9, "ng-template", 24);
    i0.ɵɵelementContainerEnd();
} }
function EntityTreeSelectComponent_ng_template_18_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 26);
    i0.ɵɵlistener("click", function EntityTreeSelectComponent_ng_template_18_ng_template_1_ng_container_2_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r57); const ctx_r56 = i0.ɵɵnextContext(); const entity_r52 = ctx_r56.item; const clear_r53 = ctx_r56.clear; return clear_r53(entity_r52); });
    i0.ɵɵtext(2, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function EntityTreeSelectComponent_ng_template_18_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, EntityTreeSelectComponent_ng_template_18_ng_template_1_ng_container_2_Template, 3, 0, "ng-container", 17);
} if (rf & 2) {
    const entity_r52 = ctx.item;
    const ctx_r47 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r47.multiple ? "px-2" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r47.showFullPath ? entity_r52.fullPathName : entity_r52.name.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r47.multiple);
} }
function EntityTreeSelectComponent_ng_template_18_ng_container_9_ng_template_1_Template(rf, ctx) { }
const _c12 = function (a0, a1) { return { $implicit: a0, depth: a1 }; };
function EntityTreeSelectComponent_ng_template_18_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_template_18_ng_container_9_ng_template_1_Template, 0, 0, "ng-template", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_r58 = ctx.$implicit;
    const depth_r44 = i0.ɵɵnextContext().depth;
    i0.ɵɵnextContext();
    const _r17 = i0.ɵɵreference(19);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r17)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c12, child_r58, depth_r44 + 1));
} }
const _c13 = function (a1, a2, a3, a4, a5, a6, a7, a8, a9) { return { "item-wrapper": true, "level-0": a1, "level-1": a2, "level-2": a3, "level-3": a4, "level-4": a5, "level-5": a6, "level-6": a7, "expanded": a8, "collapsed": a9 }; };
function EntityTreeSelectComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const entity_r43 = ctx.$implicit;
    const depth_r44 = ctx.depth;
    const ctx_r18 = i0.ɵɵnextContext();
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
} }
function EntityTreeSelectComponent_ng_container_20_ng_template_1_Template(rf, ctx) { }
const _c14 = function (a0) { return { $implicit: a0, depth: 0 }; };
function EntityTreeSelectComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, EntityTreeSelectComponent_ng_container_20_ng_template_1_Template, 0, 0, "ng-template", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entity_r61 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r17 = i0.ɵɵreference(19);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r17)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c14, entity_r61));
} }
function isTreeEntity(obj) {
    return obj && typeof obj === 'object' && 'type' in obj && obj.type === 'treeEntity';
}
class EntityTreeSelectComponent {
    constructor(entityTreeService) {
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
        this.entityIdCallback = (entity) => entity ? entity.id : undefined;
        this.htmlId = uuid.v4();
        this.compareWith = this.compareWith || ((a, b) => {
            const aId = this.toId(a);
            const bId = this.toId(b);
            return aId && bId && aId === bId;
        });
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onClick = this.onClick.bind(this);
        this.searchFn = this.searchFn.bind(this);
    }
    get currentMarkedEntity() {
        return (this.ngSelectComponent.itemsList.markedItem ? this.ngSelectComponent.itemsList.markedItem.value : null);
    }
    get filtered() {
        return this.getFiltered(this.treeEntities);
    }
    get total() {
        return this.ngSelectComponent.itemsList.items.length;
    }
    get queryParams() {
        return Object.assign({ limit: 9999, depth: 10 }, this.query);
    }
    ngOnChanges(changes) {
        if ('entities' in changes) {
            this.createTreeEntities();
        }
    }
    ngOnInit() {
        this.labels = Object.assign(Object.assign({}, defaultLabels.DEFAULT_LABELS), this.labels);
        this.controls = Object.assign({ wrapper: this.wrapperControl, expand: this.expandControl, expandAll: this.expandAllControl, collapse: this.collapseControl, collapseAll: this.collapseAllControl, separator: this.separatorControl, showing: this.showingControl }, this.controls);
        let observable;
        if (this.cache === false) {
            observable = this.entityTreeService.list(this.queryParams);
        }
        else {
            observable = this.entityTreeService.getCachedSubject(this.queryParams);
        }
        this.writeValueSubscription = rxjs.combineLatest([
            this.cachedWriteValueSubject,
            this.treeEntitiesSubject,
        ]).subscribe(([value]) => this.ngSelectComponent.writeValue(this.multiple ?
            (value || []).map(o => this.toTreeEntity(o)).filter(o => !!o) :
            this.toTreeEntity(value)));
        observable.subscribe(entities => {
            if (!!entities) {
                this.fetchedTreeEntities = entities.ws_entity_list.map(entity => this.deepCopyEntity(entity));
                this.createTreeEntities();
                this.loading = false;
                this.treeEntitiesSubject.next();
            }
        });
        this.update.subscribe(() => {
            this.refreshing = true;
            this.ngSelectComponent.filter(this.lastTerm);
            this.refreshing = false;
        });
        document.addEventListener('click', this.onClick, true);
        document.addEventListener('keydown', this.onKeyDown, true);
    }
    createTreeEntities() {
        this.treeEntities = this.fetchedTreeEntities.map(e => this.deepCopyEntity(e));
        this.flattenedEntities = this.flatten(this.entities || []);
        this.setSelectable(this.treeEntities, this.entities === null ? true : this.flattenedEntities.map(entity => entity.id));
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
            setTimeout(() => this.update.next(null));
        }
    }
    deepCopyEntity(entity) {
        return Object.assign(Object.assign({}, entity), { children: entity.children.map(e => this.deepCopyEntity(e)) });
    }
    ngOnDestroy() {
        this.writeValueSubscription.unsubscribe();
        document.removeEventListener('click', this.onClick, true);
        document.removeEventListener('keydown', this.onKeyDown, true);
    }
    isDomIdentifier(name) {
        return name.startsWith(`_${this.htmlId}`);
    }
    getDomIdentifier(name) {
        return `_${this.htmlId}-${name}`;
    }
    stripDomIdentifier(name) {
        return name.replace(`_${this.htmlId}-`, '');
    }
    flatten(entities) {
        return entities.reduce((acc, entity) => entity.children ? [...acc, entity, ...this.flatten(entity.children)] : [...acc, entity], []);
    }
    setParentsForEntities(entities) {
        entities.forEach(e => {
            e.children.forEach(c => {
                c.parent = e;
            });
            this.setParentsForEntities(e.children);
        });
    }
    setPathNamesAndTypes(entities) {
        entities.forEach(e => {
            const paths = [];
            let p = e;
            while (p) {
                paths.push(p.name.text);
                p = p.parent;
            }
            e.allPaths = paths.reverse();
            e.fullPathName = e.allPaths.join(' > ');
            e.allPaths = e.allPaths.map(n => n.toLowerCase());
            e.paths = [...e.allPaths];
            e.paths.pop();
            e.type = 'treeEntity';
            this.setPathNamesAndTypes(e.children);
        });
    }
    setSelectable(entities, selectables) {
        entities.forEach(e => {
            e.filtered = true;
            e.selectable = selectables === true ? true : selectables.includes(e.id);
            this.setSelectable(e.children, selectables);
        });
    }
    setSelectableForChildren(entities) {
        entities.forEach(e => {
            if (e.selectable) {
                e.children.forEach(c => {
                    c.selectable = true;
                });
            }
            this.setSelectableForChildren(e.children);
        });
    }
    clearSafeChildren(entity) {
        return entity.children.every(e => !e.selectable && this.clearSafeChildren(e));
    }
    clearUnselectableTrees(entities) {
        let clear = true;
        while (clear) {
            clear = false;
            for (let i = 0; i < entities.length; i++) {
                this.clearUnselectableTrees(entities[i].children);
                if (!entities[i].selectable && this.clearSafeChildren(entities[i])) {
                    entities.splice(i, 1);
                    clear = true;
                    break;
                }
            }
        }
    }
    clearUnselectableTree(entity) {
        if (entity.children.length === 0 || entity.children.every(c => !c.selectable)) {
            return false;
        }
        else {
            this.clearUnselectableTrees(entity.children);
            return true;
        }
    }
    flattenUnselectableParents(entities) {
        entities = [...entities];
        let modified = true;
        while (modified) {
            modified = false;
            for (let i = 0; i < entities.length; i++) {
                if (!entities[i].selectable) {
                    const children = [...entities[i].children];
                    children.forEach(c => {
                        c.parent = entities[i].parent;
                    });
                    entities.splice(i, 1, ...children);
                    modified = true;
                    break;
                }
            }
        }
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < entities.length; i++) {
            entities[i].children = this.flattenUnselectableParents(entities[i].children);
        }
        return entities;
    }
    isExpandable(entity) {
        return entity.children.length > 0;
    }
    expandFn(entity) {
        return () => entity && this.expand(entity);
    }
    expand(entity) {
        if (!this.expanded.includes(entity.id)) {
            this.expanded.push(entity.id);
        }
        this.update.next(entity);
    }
    expandAllFn() {
        return () => this.expandAll(this.treeEntities);
    }
    expandAll(entities, update = true) {
        entities.forEach(entity => {
            if (this.isExpandable(entity) && !this.expanded.includes(entity.id)) {
                this.expanded.push(entity.id);
            }
            this.expandAll(entity.children, false);
        });
        if (update) {
            this.update.next(null);
        }
    }
    expandArray(entities) {
        entities.forEach(entity => {
            if (!this.expanded.includes(entity.id)) {
                this.expanded.push(entity.id);
            }
        });
        this.update.next(null);
    }
    expandTree(entity) {
        let currentEntity = entity;
        while (currentEntity) {
            if (!this.expanded.includes(currentEntity.id)) {
                this.expanded.push(currentEntity.id);
            }
            currentEntity = currentEntity.parent;
        }
        this.update.next(null);
    }
    expandTrees(entities) {
        entities.forEach(entity => {
            let currentEntity = entity;
            while (currentEntity) {
                if (!this.expanded.includes(currentEntity.id)) {
                    this.expanded.push(currentEntity.id);
                }
                currentEntity = currentEntity.parent;
            }
        });
        this.update.next(null);
    }
    collapseFn(entity) {
        return () => entity && this.collapse(entity);
    }
    collapse(entity) {
        if (this.expanded.includes(entity.id)) {
            this.expanded.splice(this.expanded.findIndex(e => e === entity.id), 1);
        }
        this.update.next(entity);
    }
    collapseAllFn() {
        return () => this.collapseAll(this.treeEntities);
    }
    collapseAll(entities, update = true) {
        entities.forEach(entity => {
            if (this.isExpandable(entity) && this.expanded.includes(entity.id)) {
                this.expanded.splice(this.expanded.findIndex(e => e === entity.id), 1);
            }
            this.collapseAll(entity.children, false);
        });
        if (update) {
            this.update.next(null);
        }
    }
    toggleExpanded(entity) {
        if (this.expanded.includes(entity.id)) {
            this.expanded.splice(this.expanded.findIndex(e => e === entity.id), 1);
        }
        else {
            this.expanded.push(entity.id);
        }
        this.update.next(entity);
    }
    toggleExpandedById(id) {
        if (this.expanded.includes(id)) {
            this.expanded.splice(this.expanded.findIndex(e => e === id), 1);
        }
        else {
            this.expanded.push(id);
        }
        this.update.next(null);
    }
    isTreeExpanded(entity) {
        let currentEntity = entity;
        while (currentEntity) {
            if (!this.isExpanded(currentEntity)) {
                return false;
            }
            else {
                currentEntity = currentEntity.parent;
            }
        }
        return true;
    }
    isExpanded(entity) {
        return this.expanded.includes(entity.id);
    }
    isCollapsed(entity) {
        return !this.expanded.includes(entity.id);
    }
    isVisible(entity) {
        return !entity.parent || this.isTreeExpanded(entity.parent);
    }
    trackByFn(entity) {
        return entity.id;
    }
    onClear(event) {
        this.lastTerm = ' ';
        this.update.next(null);
        this.clear.emit(event);
    }
    onOpen(event) {
        setTimeout(() => {
            this.update.next(null);
        });
        this.open.emit(event);
    }
    onSearch(event) {
        if (!this.refreshing) {
            if (!!event.term.trim() && !this.lastSearch.trim()) {
                this.expandedSearch = [...this.expanded];
            }
            else if (!event.term.trim() && !!this.lastSearch.trim()) {
                this.expanded = [...this.expandedSearch];
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
    }
    searchFn(term, entity) {
        this.lastTerm = term;
        const terms = !!term.trim() ? term.split(/\s*>\s*/) : [];
        const visible = this.entityContainsSearchTerm(terms, entity);
        entity.filtered = visible;
        return visible && this.isVisible(entity);
    }
    entityContainsSearchTerm(terms, entity) {
        if (terms.length > 0) {
            const copyOfTerms = [...terms];
            const actualTerm = copyOfTerms.pop().trim();
            if (entity.name.text.toLowerCase().includes(actualTerm) &&
                copyOfTerms.every(term => entity.paths.some(path => path.includes(term.trim())))) {
                return true;
            }
            else {
                return this.childrenContainSearchTerm(terms, entity.children);
            }
        }
        else {
            return true;
        }
    }
    childrenContainSearchTerm(terms, entities) {
        return entities.some(e => this.entityContainsSearchTerm(terms, e));
    }
    onChange(entity) {
        this.change.emit(this.multiple ? entity.map(o => this.toId(o)) : this.toId(entity));
    }
    onClick(event) {
        const target = event.target;
        if (target.dataset && target.dataset.entityExpanderId && this.isDomIdentifier(target.dataset.entityExpanderId)) {
            const entityId = parseInt(this.stripDomIdentifier(target.dataset.entityExpanderId), 0);
            this.toggleExpandedById(entityId);
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    onKeyDown(event) {
        if (this.hasFocus) {
            const itemsList = this.ngSelectComponent.itemsList;
            const entity = itemsList.markedItem ? itemsList.markedItem.value : null;
            if (entity) {
                if (event.metaKey) {
                    let prevent = false;
                    let scrollAndUpdate = false;
                    if (event.key === 'ArrowLeft') {
                        if (this.isExpandable(entity) && this.isExpanded(entity)) {
                            this.collapse(entity);
                        }
                        else if (entity.parent) {
                            const option = itemsList.filteredItems.find(item => item.value.id === entity.parent.id);
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
                        if (this.isExpandable(entity) && this.isCollapsed(entity)) {
                            this.expand(entity);
                        }
                        else if (this.isExpandable(entity) && this.isExpanded(entity)) {
                            const option = itemsList.filteredItems.find(item => item.value.parent_id && item.value.parent_id === entity.id);
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
                        const dom = document.getElementById(itemsList.markedItem.htmlId);
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
    }
    getFiltered(entities) {
        return entities.reduce((acc, e) => (e.filtered ? acc + 1 : acc) + this.getFiltered(e.children), 0);
    }
    registerOnChange(fn) {
        this.ngSelectComponent.registerOnChange(obj => fn(this.multiple ? obj.map(o => this.toId(o)) : this.toId(obj)));
    }
    registerOnTouched(fn) {
        this.ngSelectComponent.registerOnTouched(fn);
    }
    setDisabledState(isDisabled) {
        this.ngSelectComponent.setDisabledState(isDisabled);
    }
    writeValue(obj) {
        this.cachedWriteValueSubject.next(obj);
    }
    toId(obj) {
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
    }
    toTreeEntity(obj) {
        if (isTreeEntity(obj)) {
            return this.flattenedTreeEntities.find(e => e.id === obj.id);
        }
        else if (typeof obj === 'number') {
            return this.flattenedTreeEntities.find(e => e.id === obj);
        }
        else if (typeof obj === 'object') {
            return this.flattenedTreeEntities.find(e => e.id === this.entityIdCallback(obj));
        }
        else {
            return null;
        }
    }
    toEntity(obj) {
        if (isTreeEntity(obj)) {
            return this.flattenedEntities.find(e => this.entityIdCallback(e) === obj.id);
        }
        else if (typeof obj === 'number') {
            return this.flattenedEntities.find(e => this.entityIdCallback(e) === obj);
        }
        else if (typeof obj === 'object') {
            return this.flattenedEntities.find(e => this.entityIdCallback(e) === this.entityIdCallback(obj));
        }
        else {
            return null;
        }
    }
}
exports.EntityTreeSelectComponent = EntityTreeSelectComponent;
EntityTreeSelectComponent.ɵfac = function EntityTreeSelectComponent_Factory(t) { return new (t || EntityTreeSelectComponent)(i0.ɵɵdirectiveInject(entityTree_service.EntityTreeService)); };
EntityTreeSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EntityTreeSelectComponent, selectors: [["ws-entity-tree-select"]], viewQuery: function EntityTreeSelectComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
        i0.ɵɵstaticViewQuery(_c1, true);
        i0.ɵɵstaticViewQuery(_c2, true);
        i0.ɵɵstaticViewQuery(_c3, true);
        i0.ɵɵstaticViewQuery(_c4, true);
        i0.ɵɵstaticViewQuery(_c5, true);
        i0.ɵɵstaticViewQuery(_c6, true);
        i0.ɵɵstaticViewQuery(_c7, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ngSelectComponent = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.wrapperControl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.expandControl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.expandAllControl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.collapseControl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.collapseAllControl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.separatorControl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.showingControl = _t.first);
    } }, inputs: { labels: "labels", controls: "controls", query: "query", entities: "entities", selectableChildren: "selectableChildren", showUnselectableParents: "showUnselectableParents", showFullPath: "showFullPath", showControls: "showControls", cache: "cache", defaultExpand: "defaultExpand", appendTo: "appendTo", closeOnSelect: "closeOnSelect", clearable: "clearable", clearOnBackspace: "clearOnBackspace", dropdownPosition: "dropdownPosition", markFirst: "markFirst", isOpen: "isOpen", maxSelectedItems: "maxSelectedItems", hideSelected: "hideSelected", multiple: "multiple", searchable: "searchable", readonly: "readonly", searchWhileComposing: "searchWhileComposing", selectOnTab: "selectOnTab", openOnEnter: "openOnEnter", virtualScroll: "virtualScroll", inputAttrs: "inputAttrs", tabIndex: "tabIndex", compareWith: "compareWith", entityIdCallback: "entityIdCallback" }, outputs: { blur: "blur", focus: "focus", change: "change", open: "open", close: "close", search: "search", clear: "clear", add: "add", remove: "remove", scroll: "scroll", scrollToEnd: "scrollToEnd" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: forms.NG_VALUE_ACCESSOR,
                useExisting: core.forwardRef(() => EntityTreeSelectComponent),
                multi: true
            }
        ]), i0.ɵɵNgOnChangesFeature], decls: 21, vars: 28, consts: [["wrapperControl", ""], ["expandControl", ""], ["expandAllControl", ""], ["collapseControl", ""], ["collapseAllControl", ""], ["separatorControl", ""], ["showingControl", ""], ["controlsWrapper", ""], [3, "appendTo", "closeOnSelect", "clearAllText", "clearable", "clearOnBackspace", "compareWith", "dropdownPosition", "loadingText", "markFirst", "isOpen", "maxSelectedItems", "hideSelected", "multiple", "notFoundText", "searchable", "readonly", "searchFn", "searchWhileComposing", "selectOnTab", "openOnEnter", "typeToSearchText", "placeholder", "virtualScroll", "inputAttrs", "loading", "tabIndex", "trackByFn", "blur", "focus", "change", "open", "close", "search", "clear", "add", "remove", "scroll", "scrollToEnd"], ["ngSelectComponent", ""], ["entityOption", ""], [4, "ngFor", "ngForOf"], ["role", "group", 1, "btn-group", "btn-group-sm"], [3, "ngTemplateOutlet"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "btn", "btn-primary", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], ["ng-label-tmp", ""], [3, "value", "disabled"], [3, "id", "ngClass"], [1, "expander"], [1, "arrow"], [1, "item"], ["ng-header-tmp", ""], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center"], [1, "font-weight-bold", "px-2", "border-left", 2, "cursor", "pointer", 3, "click"]], template: function EntityTreeSelectComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("appendTo", ctx.appendTo)("closeOnSelect", ctx.closeOnSelect)("clearAllText", ctx.labels.clearAllText)("clearable", ctx.clearable)("clearOnBackspace", ctx.clearOnBackspace)("compareWith", ctx.compareWith)("dropdownPosition", ctx.dropdownPosition)("loadingText", ctx.labels.loadingText)("markFirst", ctx.markFirst)("isOpen", ctx.isOpen)("maxSelectedItems", ctx.maxSelectedItems)("hideSelected", ctx.hideSelected)("multiple", ctx.multiple)("notFoundText", ctx.labels.notFoundText)("searchable", ctx.searchable)("readonly", ctx.readonly)("searchFn", ctx.searchFn)("searchWhileComposing", ctx.searchWhileComposing)("selectOnTab", ctx.selectOnTab)("openOnEnter", ctx.openOnEnter)("typeToSearchText", ctx.labels.typeToSearchText)("placeholder", ctx.labels.placeholder)("virtualScroll", ctx.virtualScroll)("inputAttrs", ctx.inputAttrs)("loading", ctx.loading)("tabIndex", ctx.tabIndex)("trackByFn", ctx.trackByFn);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.treeEntities);
    } }, directives: [ngSelect.NgSelectComponent, common.NgForOf, common.NgTemplateOutlet, common.NgIf, ngSelect.ɵh, ngSelect.ɵr, common.NgClass, ngSelect.ɵj], styles: [".level-0[_ngcontent-%COMP%]{margin-left:0}.level-1[_ngcontent-%COMP%]{margin-left:20px}.level-2[_ngcontent-%COMP%]{margin-left:40px}.level-3[_ngcontent-%COMP%]{margin-left:60px}.level-4[_ngcontent-%COMP%]{margin-left:80px}.level-5[_ngcontent-%COMP%]{margin-left:100px}.level-6[_ngcontent-%COMP%]{margin-left:120px}.item-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row}.item[_ngcontent-%COMP%]{flex:1}.expander[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center;text-align:center;width:20px}.arrow[_ngcontent-%COMP%]{border:5px solid transparent;font-size:0;height:0;visibility:hidden;width:0}.item-wrapper.collapsed[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{border-left-color:#000;margin:0 0 0 3px;visibility:visible}.item-wrapper.expanded[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{border-top-color:#000;margin:3px 0 0;visibility:visible}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EntityTreeSelectComponent, [{
        type: core.Component,
        args: [{
                selector: 'ws-entity-tree-select',
                templateUrl: './entity-tree-select.component.html',
                styleUrls: ['./entity-tree-select.component.css'],
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(() => EntityTreeSelectComponent),
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
        }] }); })();

});

var worldskillsAngularLib_module = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldskillsAngularLibModule = void 0;

























const i0 = core;
const i1 = angularOauth2Oidc;
class WorldskillsAngularLibModule {
}
exports.WorldskillsAngularLibModule = WorldskillsAngularLibModule;
WorldskillsAngularLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: WorldskillsAngularLibModule });
WorldskillsAngularLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function WorldskillsAngularLibModule_Factory(t) { return new (t || WorldskillsAngularLibModule)(); }, imports: [[
            platformBrowser.BrowserModule,
            forms.FormsModule,
            angularOauth2Oidc.OAuthModule.forRoot(),
            ngBootstrap.NgbModule,
            ngSelect.NgSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WorldskillsAngularLibModule, { declarations: [worldskillsAngularLib_component.WorldskillsAngularLibComponent,
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
        weightedPoll_component.WeightedPollComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WorldskillsAngularLibModule, [{
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
    }], null, null); })();

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

class DateUtil {
    // example: '2019-04-25T16:10:25+0200'
    static toJavaDateString(date, locale) {
        return common.formatDate(date, 'yyyy-MM-ddTHH:mm:ssZ', locale);
    }
}
exports.DateUtil = DateUtil;

});

var http_util = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpUtil = void 0;


class HttpUtil {
    static objectToParams(obj) {
        let params = new http.HttpParams();
        Object.getOwnPropertyNames(params).forEach((propName, propIndex) => {
            const prop = obj[propName];
            if (array_util.ArrayUtil.isArray(prop)) {
                prop.forEach((item, valueIndex) => {
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
    }
}
exports.HttpUtil = HttpUtil;

});

var ws_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsComponent = void 0;


const i0 = core;
class WsComponent {
    constructor() {
        this.subscriptions = new rxjs.Subscription();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    // tslint:disable-next-line:typedef
    subscribe(...teardowns) {
        teardowns.forEach(teardown => this.subscriptions.add(teardown));
    }
}
exports.WsComponent = WsComponent;
WsComponent.ɵfac = function WsComponent_Factory(t) { return new (t || WsComponent)(); };
WsComponent.ɵdir = i0.ɵɵdefineDirective({ type: WsComponent });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WsComponent, [{
        type: core.Directive
    }], function () { return []; }, null); })();

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
class WsService {
    constructor() {
        this.loaders = new rxjs.BehaviorSubject(0);
        this.subscription = null;
        this.subject = new rxjs.ReplaySubject(1);
        this.loading = new rxjs.ReplaySubject(1);
        this.loaders.subscribe(numLoaders => this.loading.next(numLoaders !== 0));
    }
    resolveArgs(p1, p2, p3, defaultMulticastOptions, defaultFetchParams) {
        let fetchParams;
        let multicastOptions;
        let requestOptions;
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
            fetchParams,
            multicastOptions,
            requestOptions
        };
    }
    incrementLoader() {
        this.loaders.pipe(operators.take(1)).subscribe(v => {
            this.loaders.next(++v);
        });
    }
    decrementLoader() {
        this.loaders.pipe(operators.take(1)).subscribe(v => {
            const loaders = Math.max(0, v - 1);
            this.loaders.next(loaders);
        });
    }
    multicast(observable, options = exports.FULL) {
        const { loader, subject, subscription, onError } = options;
        if (loader) {
            this.incrementLoader();
        }
        if (subscription && this.subscription) {
            if (loader && !this.subscription.closed) {
                this.decrementLoader();
                this.subscription.unsubscribe();
            }
        }
        const s = observable.subscribe(value => {
            if (loader) {
                this.decrementLoader();
            }
            if (subject) {
                this.subject.next(value);
            }
        }, error => {
            if (loader) {
                this.decrementLoader();
            }
            if (onError) {
                onError(error);
            }
        });
        if (subscription) {
            this.subscription = s;
        }
    }
    request(observable, options = exports.FULL) {
        this.multicast(observable, options);
        return observable;
    }
    requestMany(observables, options = exports.NO_SUBJECT) {
        const forkJoined = rxjs.forkJoin(observables);
        this.multicast(forkJoined, options);
        return forkJoined;
    }
}
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
class RedirectHandler {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    redirectOrReturn(redirectRoute, failure) {
        if (!this.service.isLoggedIn()) {
            this.service.login();
        }
        else {
            if (this.hasReturnUrl()) {
                this.handleReturnUrl(error => failure(error));
            }
            else {
                this.service.loadUserProfile(next => {
                    sessionStorage.removeItem(exports.RETURN_URL_KEY);
                    this.redirectUserToRoute(next, redirectRoute);
                }, error => {
                    failure(error);
                });
            }
        }
    }
    hasReturnUrl() {
        const returnUrl = sessionStorage.getItem(exports.RETURN_URL_KEY);
        return returnUrl !== null && returnUrl !== undefined && returnUrl !== 'undefined';
    }
    handleReturnUrl(failure) {
        const returnUrl = sessionStorage.getItem(exports.RETURN_URL_KEY);
        sessionStorage.removeItem(exports.RETURN_URL_KEY);
        this.service.loadUserProfile(next => this.redirectUserToUrl(next, returnUrl), error => failure(error));
    }
    // override this method to catch a user being redirected to a specific returnUrl (when a user pastes a link in the browser)
    redirectUserToUrl(user, returnUrl) {
        this.router.navigateByUrl(returnUrl);
    }
    // override this method to catcch a user being redirected to the homepage route. useful if you need to load the homepage from the DB
    redirectUserToRoute(user, route) {
        this.router.navigate(route);
    }
}
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
class EntityTreeView {
    constructor(obj) {
        this.id = obj && obj.id || undefined;
        this.name = obj && obj.name || { lang_code: 'en', text: null };
        this.parent_id = obj && obj.parent_id || undefined;
        this.children = obj && obj.children || [];
    }
}
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



const i0 = core;

const i2 = http;

class WsiAuthService {
    constructor(wsi, http, oAuthService) {
        this.wsi = wsi;
        this.http = http;
        this.oAuthService = oAuthService;
        // listen for config changes
        this.wsi.serviceConfigSubject.subscribe(next => {
            this.appCode = next.appCode;
            this.endpoint = next.apiEndpoint + '/auth';
        });
    }
    ping() {
        const url = `${this.endpoint}/ping`;
        return this.http.get(url, {});
    }
    getLoggedInUser(showChildRoles = false) {
        let params = new http.HttpParams();
        params = params.set('show_child_roles', String(showChildRoles));
        this.appCode.forEach(code => {
            if (params.has('app_code')) {
                params = params.append('app_code', String(code));
            }
            else {
                params = params.set('app_code', String(code));
            }
        });
        const url = `${this.endpoint}/users/loggedIn`;
        return this.http.get(url, { params });
    }
    logout() {
        const authUrl = `${this.endpoint}/sessions/logout`;
        return this.http.post(authUrl, {});
    }
    /*
      User
    */
    listUsers(filter) {
        const params = http_util.HttpUtil.objectToParams(filter);
        const url = `${this.endpoint}/users`;
        return this.http.get(url, { params });
    }
    getUser(id) {
        const url = `${this.endpoint}/users/${id}`;
        return this.http.get(url);
    }
    getUserByPerson(id) {
        const url = `${this.endpoint}/users/person/${id}`;
        return this.http.get(url);
    }
    /*
      User Roles
    */
    addRole(userId, roleId) {
        const url = `${this.endpoint}/users/${userId}/roles`;
        const data = { role_id: roleId };
        return this.http.post(url, data);
    }
    addRoleWithEntity(userId, roleId, entityId) {
        const url = `${this.endpoint}/users/${userId}/roles`;
        const data = { role_id: roleId, ws_entity_id: entityId };
        return this.http.post(url, data);
    }
    deleteRole(userId, roleId) {
        const url = `${this.endpoint}/users/${userId}/roles/${roleId}`;
        return this.http.delete(url);
    }
    deleteRoleWithEntity(userId, roleId, entityId) {
        const url = `${this.endpoint}/users/${userId}/roles/${roleId}?ws_entity_id=${entityId}`;
        return this.http.delete(url);
    }
}
exports.WsiAuthService = WsiAuthService;
WsiAuthService.ɵfac = function WsiAuthService_Factory(t) { return new (t || WsiAuthService)(i0.ɵɵinject(worldskillsAngularLib_service.WorldskillsAngularLibService), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(angularOauth2Oidc.OAuthService)); };
WsiAuthService.ɵprov = i0.ɵɵdefineInjectable({ token: WsiAuthService, factory: WsiAuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WsiAuthService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: i2.HttpClient }, { type: angularOauth2Oidc.OAuthService }]; }, null); })();

});

var wsiNgAuth_service = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsiNgAuthService = void 0;



const i0 = core;




// TODO: This class can be cleanup up and optimized
// TODO: Generate auth state
class WsiNgAuthService {
    constructor(wsi, oAuthService, router, service) {
        this.wsi = wsi;
        this.oAuthService = oAuthService;
        this.router = router;
        this.service = service;
        this.wsi.authConfigSubject.subscribe(next => {
            this.oAuthService.configure(next);
            this.currentUserSubject = new rxjs.BehaviorSubject(JSON.parse(sessionStorage.getItem('user.current')));
            this.currentUser = this.currentUserSubject.asObservable();
            this.oAuthService.setStorage(sessionStorage);
            this.oAuthService.tryLogin();
        });
    }
    keepAlive() {
        this.service.ping().subscribe(error => {
            console.log(error);
            this.logout();
        });
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    isLoggedIn() {
        return this.oAuthService.hasValidAccessToken();
    }
    loadUserProfile(success, failure) {
        return tslib.__awaiter(this, void 0, void 0, function* () {
            this.service.getLoggedInUser().subscribe(next => {
                if (next != null) {
                    sessionStorage.setItem('user.current', JSON.stringify(next));
                    this.currentUserSubject.next(next);
                }
            }, error => {
                this.currentUser = null;
                failure(error);
            }, () => success(this.currentUserSubject.value));
        });
    }
    login() {
        this.oAuthService.initImplicitFlow();
    }
    logout() {
        this.service.logout().subscribe(result => this.clearSession(), error => this.clearSession(), () => { });
    }
    clearSession() {
        sessionStorage.removeItem('nonce');
        sessionStorage.removeItem('user.current');
        sessionStorage.removeItem('access_token_stored_at');
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('token');
        this.oAuthService.logOut();
        this.currentUserSubject.next(null);
    }
}
exports.WsiNgAuthService = WsiNgAuthService;
WsiNgAuthService.ɵfac = function WsiNgAuthService_Factory(t) { return new (t || WsiNgAuthService)(i0.ɵɵinject(worldskillsAngularLib_service.WorldskillsAngularLibService), i0.ɵɵinject(angularOauth2Oidc.OAuthService), i0.ɵɵinject(router.Router), i0.ɵɵinject(wsiAuth_service.WsiAuthService)); };
WsiNgAuthService.ɵprov = i0.ɵɵdefineInjectable({ token: WsiNgAuthService, factory: WsiNgAuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WsiNgAuthService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: angularOauth2Oidc.OAuthService }, { type: router.Router }, { type: wsiAuth_service.WsiAuthService }]; }, null); })();

});

var appAuth_guard = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppAuthGuard = void 0;


const i0 = core;


class AppAuthGuard {
    constructor(auth, wsi, router) {
        this.auth = auth;
        this.wsi = wsi;
        this.router = router;
    }
    canActivate(route, state) {
        const user = sessionStorage.getItem('user.current');
        // ensure the user session exists
        if (generic_util.GenericUtil.isNullOrUndefined(user)) {
            return this.login(state);
        }
        const userModel = JSON.parse(user);
        // ensure the user model is valid
        if (generic_util.GenericUtil.isNullOrUndefined(userModel)) {
            return this.login(state);
        }
        const roles = route.data.roles;
        if (generic_util.GenericUtil.isNullOrUndefined(roles)) {
            return false;
        }
        const userRoles = userModel.roles
            .filter(x => roles.findIndex(y => y.appCode === x.role_application.application_code && y.name === x.name) !== -1);
        return userRoles.length > 0;
    }
    login(state) {
        sessionStorage.setItem('returnUrl', state.url);
        this.auth.login();
        return false;
    }
}
exports.AppAuthGuard = AppAuthGuard;
AppAuthGuard.ɵfac = function AppAuthGuard_Factory(t) { i0.ɵɵinvalidFactory(); };
AppAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ token: AppAuthGuard, factory: AppAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppAuthGuard, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: wsiNgAuth_service.WsiNgAuthService }, { type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: undefined }]; }, null); })();

});

var select_directive = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectDirective = void 0;

const i0 = core;

class SelectDirective {
    constructor(ngSelectComponent) {
        this.ngSelectComponent = ngSelectComponent;
        this.wsChange = new core.EventEmitter();
    }
    ngOnChanges(changes) {
        if (this.ngSelectComponent && changes.items) {
            this.updateItems(changes.items.currentValue, changes.items.isFirstChange());
        }
    }
    ngOnInit() {
        if (this.ngSelectComponent) {
            let labelReaderFromMainSelector;
            let valueReaderFromMainSelector;
            let groupReaderFromMainSelector;
            if (this.entryReader) {
                if (Array.isArray(this.entryReader)) {
                    const [valueReaderFromMainArray, labelReaderFromMainArray, groupReaderFromMainArray] = this.entryReader;
                    labelReaderFromMainSelector = labelReaderFromMainArray;
                    valueReaderFromMainSelector = valueReaderFromMainArray;
                    groupReaderFromMainSelector = groupReaderFromMainArray;
                }
                else {
                    const { labelReader: labelReaderFromMainObject, valueReader: valueReaderFromMainObject, groupReader: groupReaderFromMainObject } = this.entryReader;
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
                const currentChangeEvent = this.ngSelectComponent.changeEvent;
                const newEventEmitter = new core.EventEmitter();
                newEventEmitter.subscribe(original => {
                    if (original) {
                        this.wsChange.emit({
                            item: this.originalItems.find(i => this.readObjectValue(i) === original.value),
                            original,
                            value: original.value
                        });
                    }
                    else {
                        this.wsChange.emit(null);
                    }
                });
                if (currentChangeEvent) {
                    const overrideEventEmitter = new core.EventEmitter();
                    overrideEventEmitter.subscribe(obj => {
                        currentChangeEvent.emit(obj);
                        newEventEmitter.emit(obj);
                    });
                    this.ngSelectComponent.changeEvent = overrideEventEmitter;
                }
                else {
                    this.ngSelectComponent.changeEvent = newEventEmitter;
                }
            }
            this.updateItems(this.items);
        }
    }
    updateItems(items, firstChange = false) {
        if (items) {
            this.originalItems = [...items];
            this.ngSelectComponent.items = items.map(obj => ({
                label: this.readObjectLabel(obj),
                value: this.readObjectValue(obj),
                group: this.groupReader ? this.readObjectGroup(obj) : undefined
            }));
            this.ngSelectComponent.ngOnChanges({ items: new core.SimpleChange(null, this.ngSelectComponent.items, firstChange) });
        }
    }
    readObjectLabel(obj) {
        let label;
        if (Array.isArray(this.labelReader)) {
            if (this.labelReader.length === 1) {
                label = obj[this.labelReader[0]];
            }
            else {
                label = obj;
                for (const entry of this.labelReader) {
                    label = label[entry];
                    if (label === undefined) {
                        break;
                    }
                }
            }
        }
        else if (typeof this.labelReader === 'function') {
            label = this.labelReader(obj);
        }
        return label;
    }
    readObjectValue(obj) {
        let value;
        if (Array.isArray(this.valueReader)) {
            if (this.valueReader.length === 1) {
                value = obj[this.valueReader[0]];
            }
            else {
                value = obj;
                for (const entry of this.valueReader) {
                    value = value[entry];
                    if (value === undefined) {
                        break;
                    }
                }
            }
        }
        else if (typeof this.valueReader === 'function') {
            value = this.valueReader(obj);
        }
        return value;
    }
    readObjectGroup(obj) {
        let group;
        if (Array.isArray(this.groupReader)) {
            if (this.groupReader.length === 1) {
                group = obj[this.groupReader[0]];
            }
            else {
                group = obj;
                for (const entry of this.groupReader) {
                    group = group[entry];
                    if (group === undefined) {
                        break;
                    }
                }
            }
        }
        else if (typeof this.groupReader === 'function') {
            group = this.groupReader(obj);
        }
        return group;
    }
}
exports.SelectDirective = SelectDirective;
SelectDirective.ɵfac = function SelectDirective_Factory(t) { return new (t || SelectDirective)(i0.ɵɵdirectiveInject(ngSelect.NgSelectComponent, 11)); };
SelectDirective.ɵdir = i0.ɵɵdefineDirective({ type: SelectDirective, selectors: [["", "wsSelect", ""]], inputs: { entryReader: ["wsSelect", "entryReader"], items: "items", labelReader: "labelReader", valueReader: "valueReader", groupReader: "groupReader" }, outputs: { wsChange: "wsChange" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectDirective, [{
        type: core.Directive,
        args: [{
                selector: '[wsSelect]'
            }]
    }], function () { return [{ type: ngSelect.NgSelectComponent, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }, {
                type: core.Self
            }] }]; }, { entryReader: [{
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
        }] }); })();

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
class WsHttpEncoder {
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
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




const i0 = core;


class WsHttpInterceptor {
    constructor(wsi, oAuthService) {
        this.wsi = wsi;
        this.oAuthService = oAuthService;
    }
    intercept(req, next) {
        const config = this.wsi.httpConfigSubject.getValue();
        const uriPatterns = generic_util.GenericUtil.getValueOrDefault(config.authUriPatterns, []);
        const encoderPatterns = generic_util.GenericUtil.getValueOrDefault(config.encoderUriPatterns, []);
        const authorize = uriPatterns.filter(s => req.url.match(s)).length > 0;
        const rewrite = encoderPatterns.filter(s => req.url.match(s)).length > 0;
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
            const params = new http.HttpParams({ encoder: new wsHttp_encoder.WsHttpEncoder(), fromString: req.params.toString() });
            req = req.clone({ params });
        }
        return next.handle(req);
    }
}
exports.WsHttpInterceptor = WsHttpInterceptor;
WsHttpInterceptor.ɵfac = function WsHttpInterceptor_Factory(t) { return new (t || WsHttpInterceptor)(i0.ɵɵinject(worldskillsAngularLib_service.WorldskillsAngularLibService), i0.ɵɵinject(angularOauth2Oidc.OAuthService)); };
WsHttpInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: WsHttpInterceptor, factory: WsHttpInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WsHttpInterceptor, [{
        type: core.Injectable
    }], function () { return [{ type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: angularOauth2Oidc.OAuthService }]; }, null); })();

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
class ResourceUpload {
    constructor(obj) {
        this.tags = []; // do not create tags
        this.name = obj && obj.name || { lang_code: 'en', text: null };
        this.ws_entity = obj && obj.ws_entity;
        this.types = obj && obj.types || [];
        this.version = obj && obj.version || { name: '1.0', };
        this.metadata = obj && obj.metadata || [];
    }
    static fromResource(resource) {
        const version = resource.versions[resource.versions.length - 1];
        const translation = version.translations[version.translations.length - 1];
        return new ResourceUpload({
            name: resource.name,
            ws_entity: resource.ws_entity.id,
            tags: resource.tags,
            types: resource.resource_types.map(x => x.id),
            metadata: resource.metadata.map(x => {
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
    }
}
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


const i0 = core;
const i1 = http;
class UploadService {
    constructor(http) {
        this.http = http;
    }
    prepareUpload(url, data, params, method = 'POST') {
        const options = {
            params,
            reportProgress: true,
        };
        return new http.HttpRequest(method, url, data, options);
    }
    // Full list of events: https://angular.io/api/common/http/HttpEventType
    // event specific classes: https://angular.io/api/common/http/HttpEvent#description
    listen(request, progress, complete) {
        this.http.request(request).subscribe((event) => {
            switch (event.type) {
                case http.HttpEventType.UploadProgress:
                    progress(event);
                    break;
                case http.HttpEventType.Response:
                    complete(event);
                    break;
            }
        });
    }
}
exports.UploadService = UploadService;
UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(i0.ɵɵinject(i1.HttpClient)); };
UploadService.ɵprov = i0.ɵɵdefineInjectable({ token: UploadService, factory: UploadService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UploadService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();

});

var resource_service = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceService = void 0;



const i0 = core;

const i2 = http;

class ResourceService {
    constructor(wsi, http, uploader) {
        this.wsi = wsi;
        this.http = http;
        this.uploader = uploader;
        this.wsi.serviceConfigSubject.subscribe(next => {
            this.url = next.apiEndpoint + '/resources';
        });
    }
    /*
      ResourceResource
    */
    // allow a client to user submit an object directly or use a managed object
    search(filter) {
        const params = http_util.HttpUtil.objectToParams(filter);
        return this.http.get(this.url, { params });
    }
    get(id) {
        const url = `${this.url}/${id}`;
        return this.http.get(url);
    }
    delete(id) {
        const url = `${this.url}/${id}`;
        return this.http.delete(url);
    }
    update(id, model) {
        const url = `${this.url}/${id}`;
        return this.http.put(url, model);
    }
    // this more or less saves the resource to the api
    // the client has control over weather it's a POST or a PUT
    upload(data, file, method = 'POST', id = 0) {
        const url = method === 'POST' ? this.url : `${this.url}/${id}`;
        const formData = new FormData();
        formData.append('key', 'value');
        formData.append('requestData', JSON.stringify(data));
        formData.append('file', file);
        return this.uploader.prepareUpload(url, formData, new http.HttpParams(), method);
    }
    /* /types
      ResourceTypeResource
    */
    listTypes() {
        const url = `${this.url}/types`;
        return this.http.get(url);
    }
    getType(id) {
        const url = `${this.url}/types/${id}`;
        return this.http.get(url);
    }
    /* /metadata
      MetadataResource
    */
    listMetadata() {
        const url = `${this.url}/metadata`;
        return this.http.get(url);
    }
    getMetadata(id) {
        const url = `${this.url}/metadata/${id}`;
        return this.http.get(url);
    }
    createMetadata(model) {
        const url = `${this.url}/metadata`;
        return this.http.post(url, model);
    }
    updateMetadata(id, model) {
        const url = `${this.url}/metadata/${id}`;
        return this.http.put(url, model);
    }
    deleteMetadata(id) {
        const url = `${this.url}/metadata/${id}`;
        return this.http.delete(url);
    }
}
exports.ResourceService = ResourceService;
ResourceService.ɵfac = function ResourceService_Factory(t) { return new (t || ResourceService)(i0.ɵɵinject(worldskillsAngularLib_service.WorldskillsAngularLibService), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(upload_service.UploadService)); };
ResourceService.ɵprov = i0.ɵɵdefineInjectable({ token: ResourceService, factory: ResourceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ResourceService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: i2.HttpClient }, { type: upload_service.UploadService }]; }, null); })();

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

const i0 = core;


class PollService {
    constructor(wsi, http) {
        this.wsi = wsi;
        this.http = http;
        this.wsi.serviceConfigSubject.subscribe(next => {
            this.endpoint = next.apiEndpoint + '/votes';
        });
    }
    list(params) {
        return this.http.get(this.endpoint, { params });
    }
    select(params) {
        const url = `${this.endpoint}/select`;
        return this.http.get(url, { params });
    }
    get(id) {
        const url = `${this.endpoint}/${id}`;
        return this.http.get(url);
    }
    getResults(id) {
        const url = `${this.endpoint}/${id}/results`;
        return this.http.get(url);
    }
    hasVoted(id) {
        const url = `${this.endpoint}/${id}/has_voted`;
        return this.http.get(url);
    }
    create(model) {
        return this.http.post(this.endpoint, model);
    }
    update(id, model) {
        const url = `${this.endpoint}/${id}`;
        return this.http.put(url, model);
    }
    delete(id) {
        const url = `${this.endpoint}/${id}`;
        return this.http.delete(url);
    }
    undelete(id) {
        const url = `${this.endpoint}/${id}/undelete`;
        return this.http.put(url, {});
    }
    reset(id, start, expiry) {
        const model = { start, expiry };
        const url = `${this.endpoint}/${id}/reset`;
        return this.http.put(url, model);
    }
    extend(id, expiry) {
        const model = { expiry };
        const url = `${this.endpoint}/${id}/extend`;
        return this.http.put(url, model);
    }
    addVote(pollId, votes) {
        const model = { votes };
        const url = `${this.endpoint}/${pollId}/addVote`;
        return this.http.post(url, model);
    }
    unvote(pollId) {
        const url = `${this.endpoint}/${pollId}/removeVote`;
        return this.http.delete(url);
    }
}
exports.PollService = PollService;
PollService.ɵfac = function PollService_Factory(t) { return new (t || PollService)(i0.ɵɵinject(worldskillsAngularLib_service.WorldskillsAngularLibService), i0.ɵɵinject(http.HttpClient)); };
PollService.ɵprov = i0.ɵɵdefineInjectable({ token: PollService, factory: PollService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PollService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: worldskillsAngularLib_service.WorldskillsAngularLibService }, { type: http.HttpClient }]; }, null); })();

});

var publicApi = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

/*
 * Public API Surface of worldskills-angular-lib
 */
tslib.__exportStar(worldskillsAngularLib_service, exports);
tslib.__exportStar(worldskillsAngularLib_component, exports);
tslib.__exportStar(worldskillsAngularLib_module, exports);
/*
  Shared Models
*/
tslib.__exportStar(i18nText, exports);
tslib.__exportStar(link, exports);
tslib.__exportStar(pair, exports);
/*
  Config
*/
tslib.__exportStar(app_config, exports);
tslib.__exportStar(http_config, exports);
tslib.__exportStar(service_config, exports);
/*
  Date
*/
tslib.__exportStar(dateRange, exports);
tslib.__exportStar(dateRange_component, exports);
tslib.__exportStar(datetime, exports);
tslib.__exportStar(datetimePicker_component, exports);
/*
  Util
*/
tslib.__exportStar(array_util, exports);
tslib.__exportStar(date_util, exports);
tslib.__exportStar(generic_util, exports);
tslib.__exportStar(http_util, exports);
tslib.__exportStar(ws_component, exports);
tslib.__exportStar(ws_service, exports);
/*
  Helpers
*/
tslib.__exportStar(date_helper, exports);
/*
  Pipes
*/
tslib.__exportStar(dateSort_pipe, exports);
/*
  Alerts
*/
tslib.__exportStar(alertType, exports);
tslib.__exportStar(alert$1, exports);
tslib.__exportStar(alerts_component, exports);
tslib.__exportStar(worldskillsAngularLib_service, exports);
tslib.__exportStar(alert_component, exports);
/*
  Auth
*/
tslib.__exportStar(redirect_handler, exports);
tslib.__exportStar(authGuardAccess, exports);
tslib.__exportStar(entityTreeView, exports);
tslib.__exportStar(entityTreeView, exports);
tslib.__exportStar(getUserParams, exports);
tslib.__exportStar(roleApplication, exports);
tslib.__exportStar(role, exports);
tslib.__exportStar(userList, exports);
tslib.__exportStar(user, exports);
tslib.__exportStar(wsEntity, exports);
tslib.__exportStar(appAuth_guard, exports);
tslib.__exportStar(wsiAuth_service, exports);
tslib.__exportStar(wsiNgAuth_service, exports);
/*
  entity-tree
*/
// TODO: perhaps look at refactoring entity-tree as there's a lot of overlap with auth
tslib.__exportStar(defaultLabels, exports);
tslib.__exportStar(select_directive, exports);
tslib.__exportStar(entityTreeSelect_component, exports);
tslib.__exportStar(entityTree_service, exports);
tslib.__exportStar(entityTreeFetchParams, exports);
tslib.__exportStar(entityTreeSelectControls, exports);
tslib.__exportStar(entityTreeSelectLabels, exports);
tslib.__exportStar(wsSelectChangeEvent, exports);
tslib.__exportStar(treeEntity, exports);
/*
  Banners
*/
tslib.__exportStar(puppeteerBanner_component, exports);
tslib.__exportStar(stagingBanner_component, exports);
/*
  Breadcrumbs
*/
tslib.__exportStar(breadcrumbs_component, exports);
tslib.__exportStar(breadcrumb, exports);
tslib.__exportStar(breadcrumbs_service, exports);
/*
  Encoders
*/
tslib.__exportStar(wsHttp_encoder, exports);
/*
  Footer
*/
tslib.__exportStar(footer_component, exports);
/*
  Header
*/
tslib.__exportStar(header_component, exports);
tslib.__exportStar(menuItem, exports);
tslib.__exportStar(menuAccess_pipe, exports);
/*
  i18n
*/
tslib.__exportStar(language, exports);
/*
  Interceptors
*/
tslib.__exportStar(wsHttp_interceptor, exports);
/*
  Logos
*/
tslib.__exportStar(logo_component, exports);
tslib.__exportStar(wordmark_component, exports);
/*
  Resource
*/
tslib.__exportStar(resource, exports);
tslib.__exportStar(resourceContainer, exports);
tslib.__exportStar(resourceMetadata, exports);
tslib.__exportStar(resourceMetadataInfo, exports);
tslib.__exportStar(resourceSearch, exports);
tslib.__exportStar(resourceType, exports);
tslib.__exportStar(resourceTypeMetadata, exports);
tslib.__exportStar(resourcecUpload, exports);
tslib.__exportStar(sotrageType, exports);
tslib.__exportStar(translation, exports);
tslib.__exportStar(translationCreate, exports);
tslib.__exportStar(version, exports);
tslib.__exportStar(versionCreate, exports);
tslib.__exportStar(resource_service, exports);
/*
  Polls
*/
tslib.__exportStar(createdBy, exports);
tslib.__exportStar(entityPath, exports);
tslib.__exportStar(entityPathItem, exports);
tslib.__exportStar(option, exports);
tslib.__exportStar(page, exports);
tslib.__exportStar(poll, exports);
tslib.__exportStar(result, exports);
tslib.__exportStar(voteEntry, exports);
tslib.__exportStar(vote, exports);
tslib.__exportStar(pollResult_component, exports);
tslib.__exportStar(standardPoll_component, exports);
tslib.__exportStar(voteControl_component, exports);
tslib.__exportStar(weightedPoll_component, exports);
tslib.__exportStar(poll_service, exports);

});

var worldskillsAngularLib = createCommonjsModule(function (module, exports) {
"use strict";
/**
 * Generated bundle index. Do not edit.
 */
Object.defineProperty(exports, "__esModule", { value: true });

tslib.__exportStar(publicApi, exports);

});

export default worldskillsAngularLib;
//# sourceMappingURL=worldskills-angular-lib.js.map
