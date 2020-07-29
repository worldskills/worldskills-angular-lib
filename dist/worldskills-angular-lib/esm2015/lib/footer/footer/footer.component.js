"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterComponent = void 0;
const core_1 = require("@angular/core");
const generic_util_1 = require("../../common/util/generic.util");
const i0 = require("@angular/core");
const i1 = require("@angular/common");
const i2 = require("../../logos/logo/logo.component");
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
        this.logoutClick = new core_1.EventEmitter();
        this.loginClick = new core_1.EventEmitter();
        this.languageChange = new core_1.EventEmitter();
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
        if (generic_util_1.GenericUtil.isNullOrUndefined(this.selectedLanguage)) {
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
    } }, directives: [i1.NgTemplateOutlet, i1.NgIf, i2.LogoComponent, i1.NgForOf], pipes: [i1.DatePipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FooterComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ws-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], null, { languages: [{
            type: core_1.Input
        }], selectedLanguage: [{
            type: core_1.Input
        }], isLoggedIn: [{
            type: core_1.Input
        }], currentUser: [{
            type: core_1.Input
        }], col1Template: [{
            type: core_1.Input
        }], col2Template: [{
            type: core_1.Input
        }], col3Template: [{
            type: core_1.Input
        }], col4Template: [{
            type: core_1.Input
        }], col5Template: [{
            type: core_1.Input
        }], col6Template: [{
            type: core_1.Input
        }], logoutClick: [{
            type: core_1.Output
        }], loginClick: [{
            type: core_1.Output
        }], languageChange: [{
            type: core_1.Output
        }], col1DefaultTemplate: [{
            type: core_1.ViewChild,
            args: ['#col1DefaultTemplate']
        }], col6DefaultTemplate: [{
            type: core_1.ViewChild,
            args: ['#col6DefaultTemplate']
        }], colDefaultTemplate: [{
            type: core_1.ViewChild,
            args: ['#colDefaultTemplate']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvZm9vdGVyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ybGRza2lsbHMtYW5ndWxhci1saWIvc3JjL2xpYi9mb290ZXIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBdUc7QUFHdkcsaUVBQTZEOzs7Ozs7OztJQ0YzRCwwQkFBSTtJQUFBLDZCQUE0RDtJQUFBLDZCQUFhO0lBQUEsaUJBQUk7SUFBQSxpQkFBSztJQUN0RiwwQkFDRTtJQUFBLDBCQUFJO0lBQUEsNkJBQWdFO0lBQUEsMEJBQVU7SUFBQSxpQkFBSTtJQUFBLGlCQUFLO0lBQ3ZGLDBCQUFJO0lBQUEsNkJBQTREO0lBQUEsd0JBQVE7SUFBQSxpQkFBSTtJQUFBLGlCQUFLO0lBQ2pGLDJCQUFJO0lBQUEsOEJBQWlFO0lBQUEsOEJBQWE7SUFBQSxpQkFBSTtJQUFBLGlCQUFLO0lBQzNGLDJCQUFJO0lBQUEsOEJBQTBEO0lBQUEsdUJBQU07SUFBQSxpQkFBSTtJQUFBLGlCQUFLO0lBQzdFLDJCQUFJO0lBQUEsOEJBQXNEO0lBQUEscUNBQW9CO0lBQUEsaUJBQUk7SUFBQSxpQkFBSztJQUN2RiwyQkFBSTtJQUFBLDhCQUFvRTtJQUFBLGlDQUFnQjtJQUFBLGlCQUFJO0lBQUEsaUJBQUs7SUFDbkcsaUJBQUs7OztJQUdMLCtCQUNFO0lBQUEsNkJBQ0U7SUFBQSw4QkFBa0M7SUFDcEMsaUJBQUk7SUFDTixpQkFBTTs7OztJQVVBLHdCQUFtRzs7O0lBR25HLHdCQUFrRzs7O0lBR2xHLHdCQUFpRzs7O0lBR2pHLHdCQUFpRzs7O0lBR2pHLHdCQUFpRzs7O0lBR2pHLHdCQUFrRzs7OztJQW1C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QUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0Qzs7a0JBSUUsWUFBSzs7a0JBQ0wsWUFBSzs7a0JBQ0wsWUFBSzs7a0JBQ0wsWUFBSzs7a0JBQ0wsWUFBSzs7a0JBQ0wsWUFBSzs7a0JBQ0wsWUFBSzs7a0JBQ0wsWUFBSzs7a0JBQ0wsWUFBSzs7a0JBQ0wsWUFBSzs7a0JBRUwsYUFBTTs7a0JBQ04sYUFBTTs7a0JBQ04sYUFBTTs7a0JBRU4sZ0JBQVM7bUJBQUMsc0JBQXNCOztrQkFHaEMsZ0JBQVM7bUJBQUMsc0JBQXNCOztrQkFHaEMsZ0JBQVM7bUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi9pMThuL2xhbmd1YWdlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9hdXRoL21vZGVscy91c2VyJztcbmltcG9ydCB7IEdlbmVyaWNVdGlsIH0gZnJvbSAnLi4vLi4vY29tbW9uL3V0aWwvZ2VuZXJpYy51dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd3MtZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvb3Rlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGF0ZTtcblxuICBASW5wdXQoKSBsYW5ndWFnZXM6IExhbmd1YWdlW107XG4gIEBJbnB1dCgpIHNlbGVjdGVkTGFuZ3VhZ2U6IExhbmd1YWdlO1xuICBASW5wdXQoKSBpc0xvZ2dlZEluOiBib29sZWFuO1xuICBASW5wdXQoKSBjdXJyZW50VXNlcjogVXNlcjtcbiAgQElucHV0KCkgY29sMVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBjb2wyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGNvbDNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgY29sNFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBjb2w1VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGNvbDZUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KCkgbG9nb3V0Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbG9naW5DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsYW5ndWFnZUNoYW5nZTogRXZlbnRFbWl0dGVyPExhbmd1YWdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCcjY29sMURlZmF1bHRUZW1wbGF0ZScpXG4gIGNvbDFEZWZhdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQFZpZXdDaGlsZCgnI2NvbDZEZWZhdWx0VGVtcGxhdGUnKVxuICBjb2w2RGVmYXVsdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBWaWV3Q2hpbGQoJyNjb2xEZWZhdWx0VGVtcGxhdGUnKVxuICBjb2xEZWZhdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnR5cGVkZWZcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIGxvZ2luKCk6IHZvaWQge1xuICAgIHRoaXMubG9naW5DbGljay5lbWl0KCk7XG4gIH1cblxuICBsb2dvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2dvdXRDbGljay5lbWl0KCk7XG4gIH1cblxuICBjaGFuZ2VMYW5ndWFnZShtb2RlbDogTGFuZ3VhZ2UpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkTGFuZ3VhZ2UgPSBtb2RlbDtcbiAgICB0aGlzLmxhbmd1YWdlQ2hhbmdlLmVtaXQobW9kZWwpO1xuICB9XG5cbiAgaXNMYW5ndWFnZVNlbGVjdGVkKG1vZGVsOiBMYW5ndWFnZSk6IGJvb2xlYW4ge1xuICAgIGlmIChHZW5lcmljVXRpbC5pc051bGxPclVuZGVmaW5lZCh0aGlzLnNlbGVjdGVkTGFuZ3VhZ2UpKSB7XG4gICAgICByZXR1cm4gbW9kZWwuY29kZSA9PT0gJ2VuJztcbiAgICB9XG5cbiAgICByZXR1cm4gbW9kZWwuY29kZSA9PT0gdGhpcy5zZWxlY3RlZExhbmd1YWdlLmNvZGU7XG4gIH1cblxufVxuIiwiPG5nLXRlbXBsYXRlICNjb2wxRGVmYXVsdFRlbXBsYXRlPlxuICA8aDE+PGEgaHJlZj1cImh0dHBzOi8vd29ybGRza2lsbHMub3JnL2ludGVybmFsL1wiIHRhcmdldD1cIl9ibGFua1wiPm15V29ybGRTa2lsbHM8L2E+PC9oMT5cbiAgPHVsPlxuICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93b3JsZHNraWxscy5vcmcvaW50ZXJuYWwvd2l3L1wiIHRhcmdldD1cIl9ibGFua1wiPldoby1pcy1XaG88L2E+PC9saT5cbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2xvc3Nhcnkud29ybGRza2lsbHMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPkdsb3NzYXJ5PC9hPjwvbGk+XG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3JlZ2lzdHJhdGlvbnMud29ybGRza2lsbHMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPlJlZ2lzdHJhdGlvbnM8L2E+PC9saT5cbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZm9ydW1zLndvcmxkc2tpbGxzLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Gb3J1bXM8L2E+PC9saT5cbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vaWwud29ybGRza2lsbHMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPkluZnJhc3RydWN0dXJlIExpc3RzPC9hPjwvbGk+XG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3NraWxsLW1hbmFnZW1lbnQud29ybGRza2lsbHMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPlNraWxsIE1hbmFnZW1lbnQ8L2E+PC9saT5cbiAgPC91bD5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2NvbDZEZWZhdWx0VGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0IG10LTVcIj5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93b3JsZHNraWxscy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICA8d3MtbG9nbyBtb2RlPVwiZGVmYXVsdFwiPjwvd3MtbG9nbz5cbiAgICA8L2E+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNjb2xEZWZhdWx0VGVtcGxhdGU+XG48L25nLXRlbXBsYXRlPlxuXG48Zm9vdGVyIGNsYXNzPVwid3MtcGFnZS1mb290ZXJcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJ3cy1wYWdlLWZvb3Rlci1yb3dcIj5cbiAgICAgIDxhc2lkZSBjbGFzcz1cIndzLXBhZ2UtZm9vdGVyLWNvbC1zbVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sMVRlbXBsYXRlID8gY29sMVRlbXBsYXRlIDogY29sMURlZmF1bHRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxhc2lkZSBjbGFzcz1cIndzLXBhZ2UtZm9vdGVyLWNvbC1zbVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sMlRlbXBsYXRlID8gY29sMlRlbXBsYXRlIDogY29sRGVmYXVsdFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2FzaWRlPlxuICAgICAgPGFzaWRlIGNsYXNzPVwid3MtcGFnZS1mb290ZXItY29sLXNtXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb2wzVGVtcGxhdGU/IGNvbDNUZW1wbGF0ZSA6IGNvbERlZmF1bHRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxhc2lkZSBjbGFzcz1cIndzLXBhZ2UtZm9vdGVyLWNvbC1zbVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sNFRlbXBsYXRlPyBjb2w0VGVtcGxhdGUgOiBjb2xEZWZhdWx0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvYXNpZGU+XG4gICAgICA8YXNpZGUgY2xhc3M9XCJ3cy1wYWdlLWZvb3Rlci1jb2wtc21cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbDVUZW1wbGF0ZT8gY29sNVRlbXBsYXRlIDogY29sRGVmYXVsdFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2FzaWRlPlxuICAgICAgPGFzaWRlIGNsYXNzPVwid3MtcGFnZS1mb290ZXItY29sLXNtXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb2w2VGVtcGxhdGU/IGNvbDZUZW1wbGF0ZSA6IGNvbDZEZWZhdWx0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvYXNpZGU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIndzLXBhZ2UtZm9vdGVyLXJvdyBwYi0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwid3MtcGFnZS1mb290ZXItY29sLWxnXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lIG10LTJcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWlubGluZS1pdGVtXCI+wqkge3tkYXRlIHwgZGF0ZToneXl5eSd9fSBXb3JsZFNraWxscyBJbnRlcm5hdGlvbmFsPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWlubGluZS1pdGVtXCI+PGEgaHJlZj1cImh0dHBzOi8vd29ybGRza2lsbHMub3JnL3NpdGUvcHJpdmFjeS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Qcml2YWN5PC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbVwiPjxhIGhyZWY9XCJodHRwczovL3dvcmxkc2tpbGxzLm9yZy9zaXRlL3Rlcm1zL1wiIHRhcmdldD1cIl9ibGFua1wiPlRlcm1zPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1pbmxpbmUtaXRlbVwiPjxhIGhyZWY9XCJodHRwczovL3dvcmxkc2tpbGxzLm9yZy9zaXRlL2NvbnRhY3QvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q29udGFjdDwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwid3MtcGFnZS1mb290ZXItY29sLWxnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidG4tdG9vbGJhciBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgKm5nSWY9XCJsYW5ndWFnZXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC1zbSBkcm9wdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICBMYW5ndWFnZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxhICpuZ0Zvcj1cImxldCBsYW5ndWFnZSBvZiBsYW5ndWFnZXNcIiAoY2xpY2spPVwiY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2UpOyBmYWxzZTtcIiBbY2xhc3MuYWN0aXZlXT1cImlzTGFuZ3VhZ2VTZWxlY3RlZChsYW5ndWFnZSlcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIHt7IGxhbmd1YWdlLm5hbWUgfX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9mb290ZXI+XG4iXX0=