"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderComponent = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
const i1 = require("@angular/router");
const i2 = require("@ng-bootstrap/ng-bootstrap");
const i3 = require("../../logos/wordmark/wordmark.component");
const i4 = require("@angular/common");
const i5 = require("../menu-access.pipe");
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
        this.logoutClick = new core_1.EventEmitter();
        this.loginClick = new core_1.EventEmitter();
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
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
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
    } }, directives: [i2.NgbNavbar, i3.WordmarkComponent, i4.NgForOf, i4.NgIf], pipes: [i5.MenuAccessPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ws-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: i1.Router }]; }, { appName: [{
            type: core_1.Input
        }], isLoggedIn: [{
            type: core_1.Input
        }], showLoginAndLogoutButtons: [{
            type: core_1.Input
        }], menuItems: [{
            type: core_1.Input
        }], currentUser: [{
            type: core_1.Input
        }], logoutClick: [{
            type: core_1.Output
        }], loginClick: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvaGVhZGVycy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvaGVhZGVycy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUErRTs7Ozs7Ozs7O0lDV3ZFLDBCQUNFO0lBQUEsNkJBQ0k7SUFBQSxZQUNKO0lBQUEsaUJBQUk7SUFDTixpQkFBSzs7OztJQUpELDZGQUE4RDtJQUM1QyxlQUFzQztJQUF0QyxvRkFBc0M7SUFDdEQsZUFDSjtJQURJLDhDQUNKOzs7O0lBR0osK0JBQ0U7SUFBQSxrQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBUztJQUNULCtCQUNFO0lBQUEsNkJBQXlEO0lBQUEsWUFBc0Q7SUFBQSxpQkFBSTtJQUNuSCwwQkFBb0M7SUFDcEMsNkJBQTZEO0lBQTNCLHlLQUFtQixLQUFLLElBQUU7SUFBQyxzQkFBTTtJQUFBLGlCQUFJO0lBQ3pFLGlCQUFNO0lBQ1IsaUJBQU07OztJQVBGLGVBQ0Y7SUFERSxxREFDRjtJQUUyRCxlQUFzRDtJQUF0RCw2RkFBc0Q7Ozs7SUFLbkgsNkJBQTBIO0lBQTNFLHNLQUFrQixLQUFLLElBQUU7SUFBa0Qsc0JBQU07SUFBQSxpQkFBSTs7QUR0QjFJLE1BS2EsZUFBZTtJQVUxQixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUhqQixnQkFBVyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNwRCxlQUFVLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBR2xFLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELDREQUE0RDtJQUM1RCxRQUFRLEtBQUksQ0FBQztJQUViLDJEQUEyRDtJQUMzRCxXQUFXLEtBQUksQ0FBQztJQUVoQixTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUMvRCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQzNFLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQUs7UUFDakIsT0FBTyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDbkMsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNYLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO2dCQUMvQixDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM5QztZQUVELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7Z0JBQzlCLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDOztBQXBFSCwwQ0FxRUM7OEVBaEVZLGVBQWU7b0RBQWYsZUFBZTtRQ1Y1Qiw4QkFDRTtRQUFBLDhCQUNFO1FBQUEsNEJBQ0U7UUFBQSw4QkFBMkI7UUFDM0IsK0JBQThCO1FBQUEsWUFBYTtRQUFBLGlCQUFPO1FBQ3BELGlCQUFJO1FBQ0osaUNBQ0k7UUFBQSxzQkFDSjtRQUFBLGlCQUFTO1FBQ1QsOEJBQ0U7UUFBQSw2QkFDRTtRQUFBLGdFQUNFOztRQUlKLGlCQUFLO1FBQ0wsa0VBQ0U7UUFTRiw4REFBMEg7UUFDNUgsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOztRQTFCOEIsZUFBYTtRQUFiLGlDQUFhO1FBTzBCLGVBQTZFO1FBQTdFLCtGQUE2RTtRQU12SCxlQUErQztRQUEvQyxzRUFBK0M7UUFVRCxlQUFnRDtRQUFoRCx1RUFBZ0Q7O2tERGpCbEgsZUFBZTtjQUwzQixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0Qzs7a0JBR0UsWUFBSzs7a0JBQ0wsWUFBSzs7a0JBQ0wsWUFBSzs7a0JBQ0wsWUFBSzs7a0JBQ0wsWUFBSzs7a0JBQ0wsYUFBTTs7a0JBQ04sYUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJy4uL21lbnUtaXRlbSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vYXV0aC9tb2RlbHMvdXNlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dzLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgYXBwTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgaXNMb2dnZWRJbjogYm9vbGVhbjtcbiAgQElucHV0KCkgcHVibGljIHNob3dMb2dpbkFuZExvZ291dEJ1dHRvbnM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1lbnVJdGVtczogQXJyYXk8TWVudUl0ZW0+O1xuICBASW5wdXQoKSBjdXJyZW50VXNlcjogVXNlcjtcbiAgQE91dHB1dCgpIHB1YmxpYyBsb2dvdXRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgbG9naW5DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuYXBwTmFtZSA9ICdBcHBsaWNhdGlvbic7XG4gICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgdGhpcy5zaG93TG9naW5BbmRMb2dvdXRCdXR0b25zID0gZmFsc2U7XG4gICAgdGhpcy5tZW51SXRlbXMgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRVc2VyID0gbnVsbDtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtbGlmZS1jeWNsZS1pbnRlcmZhY2UgdHlwZWRlZlxuICBuZ09uSW5pdCgpIHt9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1saWZlY3ljbGUtaW50ZXJmYWNlIHR5cGVkZWZcbiAgbmdPbkNoYW5nZXMoKSB7fVxuXG4gIHVzZXJSb2xlcygpOiBzdHJpbmdbXSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFVzZXIgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmN1cnJlbnRVc2VyID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3VycmVudFVzZXIucm9sZXMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmN1cnJlbnRVc2VyLnJvbGVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXIucm9sZXMubWFwKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzUm91dGVBY3RpdmUocm91dGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcm91dGUgPT09IHRoaXMucm91dGVyLnVybDtcbiAgfVxuXG4gIGxvZ2luKCk6IHZvaWQge1xuICAgIHRoaXMubG9naW5DbGljay5lbWl0KCk7XG4gIH1cblxuICBsb2dvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2dvdXRDbGljay5lbWl0KCk7XG4gIH1cblxuICBnZXRJbml0aWFscygpOiBzdHJpbmcge1xuICAgIGxldCBzID0gJyc7XG4gICAgaWYgKHRoaXMuY3VycmVudFVzZXIpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyLmZpcnN0X25hbWUpIHtcbiAgICAgICAgcyA9IHRoaXMuY3VycmVudFVzZXIuZmlyc3RfbmFtZS5zdWJzdHIoMCwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyLmxhc3RfbmFtZSkge1xuICAgICAgICBzICs9IHRoaXMuY3VycmVudFVzZXIubGFzdF9uYW1lLnN1YnN0cigwLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcy50b1VwcGVyQ2FzZSgpO1xuICB9XG59XG4iLCI8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbWQgd3MtbmF2YmFyLW1haW4gd3MtbmF2YmFyLXN0cmlwZSB3c21lbWJlci1uYXZiYXItbWFpbiB3c21lbWJlci1iZy1waW5rXCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XG4gICAgICA8d3Mtd29yZG1hcms+PC93cy13b3JkbWFyaz5cbiAgICAgIDxzcGFuIGNsYXNzPVwibWwtMSB0ZXh0LXdoaXRlXCI+e3sgYXBwTmFtZSB9fTwvc3Bhbj5cbiAgICA8L2E+XG4gICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGNvbGxhcHNlZFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgIE1lbnVcbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0ge3sgaXNSb3V0ZUFjdGl2ZShpdGVtLnVybCkgPyAnYWN0aXZlJyA6ICcnIH19XCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbWVudUl0ZW1zIHwgd3NNZW51QWNjZXNzc0ZpbHRlcjogaXNMb2dnZWRJbjogdXNlclJvbGVzKClcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgW3JvdXRlckxpbmtdPVwiW2l0ZW0udXJsLCBpdGVtLnBhcmFtc11cIj5cbiAgICAgICAgICAgICAge3sgaXRlbS5sYWJlbCB9fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gbWwtMlwiICpuZ0lmPVwic2hvd0xvZ2luQW5kTG9nb3V0QnV0dG9ucyAmJiBpc0xvZ2dlZEluXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdoaXRlIHJvdW5kZWQtcGlsbFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAge3sgZ2V0SW5pdGlhbHMoKSB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBkaXNhYmxlZFwiIGhyZWY9XCIjXCIgdGFiaW5kZXg9XCItMVwiPnt7IGN1cnJlbnRVc2VyLmZpcnN0TmFtZSB9fSB7eyBjdXJyZW50VXNlci5sYXN0TmFtZSB9fTwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCIgKGNsaWNrKT1cImxvZ291dCgpOyBmYWxzZTtcIj5Mb2dvdXQ8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YSBjbGFzcz1cImJ0biBidG4tbGlnaHQgYnRuLXNtIG1sLTIgd3NpLWxvZ2luXCIgKGNsaWNrKT1cImxvZ2luKCk7IGZhbHNlO1wiICpuZ0lmPVwic2hvd0xvZ2luQW5kTG9nb3V0QnV0dG9ucyAmJiAhaXNMb2dnZWRJblwiPkxvZyBpbjwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25hdj5cbiJdfQ==