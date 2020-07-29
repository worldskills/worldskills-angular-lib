"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuppeteerBannerComponent = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
const i1 = require("@angular/common");
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
    } }, directives: [i1.NgIf], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PuppeteerBannerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ws-puppeteer-banner',
                templateUrl: './puppeteer-banner.component.html',
                styleUrls: ['./puppeteer-banner.component.css']
            }]
    }], function () { return []; }, { currentUser: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVwcGV0ZWVyLWJhbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL2Jhbm5lcnMvcHVwcGV0ZWVyLWJhbm5lci9wdXBwZXRlZXItYmFubmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvYmFubmVycy9wdXBwZXRlZXItYmFubmVyL3B1cHBldGVlci1iYW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQXlEOzs7O0lDQXpELDhCQUVFO0lBQUEsWUFFRjtJQUFBLGlCQUFNOzs7SUFGSixlQUVGO0lBRkUsd01BRUY7O0FEREEsTUFLYSx3QkFBd0I7SUFJbkMsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7O0FBWkgsNERBY0M7Z0dBVFksd0JBQXdCOzZEQUF4Qix3QkFBd0I7UUNSckMseUVBRUU7O1FBREEsbUVBQTRDOztrRERPakMsd0JBQXdCO2NBTHBDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7O2tCQUdFLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9hdXRoL21vZGVscy91c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd3MtcHVwcGV0ZWVyLWJhbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wdXBwZXRlZXItYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHVwcGV0ZWVyLWJhbm5lci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHVwcGV0ZWVyQmFubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBjdXJyZW50VXNlcjogVXNlcjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRDUxMDY3OyBwYWRkaW5nOiAxMHB4IDIwcHg7IGNvbG9yOiAjZmZmOyB0ZXh0LWFsaWduOiBjZW50ZXI7XCJcbiAgKm5nSWY9XCJjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci5wdXBwZXRlZXJcIj5cbiAge3tjdXJyZW50VXNlci5wdXBwZXRlZXIuZmlyc3RfbmFtZX19IHt7Y3VycmVudFVzZXIucHVwcGV0ZWVyLmxhc3RfbmFtZX19IGxvZ2dlZCBpbiBhcyB7e2N1cnJlbnRVc2VyLmZpcnN0TmFtZX19XG4gIHt7Y3VycmVudFVzZXIubGFzdE5hbWV9fVxuPC9kaXY+XG4iXX0=