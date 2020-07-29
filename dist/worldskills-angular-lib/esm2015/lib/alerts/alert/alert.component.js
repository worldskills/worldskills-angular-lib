"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertComponent = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
const i1 = require("../alert.service");
const i2 = require("@angular/common");
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
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(i0.ɵɵdirectiveInject(i1.AlertService)); };
AlertComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["ws-alert"]], inputs: { alert: "alert" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"], ["class", "alert-heading", 4, "ngIf"], [4, "ngIf"], ["type", "button", "class", "close", "data-dismiss", "alert", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "alert-heading"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AlertComponent_div_0_Template, 4, 6, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.alert);
    } }, directives: [i2.NgIf], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ws-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.css']
            }]
    }], function () { return [{ type: i1.AlertService }]; }, { alert: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ybGRza2lsbHMtYW5ndWxhci1saWIvc3JjL2xpYi9hbGVydHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ybGRza2lsbHMtYW5ndWxhci1saWIvc3JjL2xpYi9hbGVydHMvYWxlcnQvYWxlcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQXlEOzs7Ozs7SUNJckQsaUNBRUU7SUFGeUIsOExBQW1CO0lBRTVDLCtCQUF5QjtJQUFBLHNCQUFPO0lBQUEsaUJBQU87SUFDekMsaUJBQVM7OztJQUxYLDZCQUNFO0lBQUEsWUFDQTtJQUFBLGdGQUVFO0lBRUosaUJBQUs7OztJQUxILGVBQ0E7SUFEQSxtREFDQTtJQUFRLGVBQWtCO0lBQWxCLHdDQUFrQjs7O0lBSzVCLDRCQUEyQjtJQUFBLFlBQW1CO0lBQUEsaUJBQU87OztJQUExQixlQUFtQjtJQUFuQiwwQ0FBbUI7Ozs7SUFDOUMsaUNBRUU7SUFGd0MseUxBQW1CO0lBRTNELCtCQUF5QjtJQUFBLHNCQUFPO0lBQUEsaUJBQU87SUFDekMsaUJBQVM7OztJQVpYLDhCQUNFO0lBQUEsbUVBQ0U7SUFNRix1RUFBMkI7SUFDM0IsMkVBRUU7SUFFSixpQkFBTTs7O0lBYmEsNkVBQWlEO0lBQzlELGVBQWtCO0lBQWxCLHdDQUFrQjtJQU9oQixlQUFvQjtJQUFwQiwwQ0FBb0I7SUFDbEIsZUFBaUM7SUFBakMsOERBQWlDOztBRE4zQyxNQUthLGNBQWM7SUFJekIsWUFBbUIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBSSxDQUFDO0lBRWxELG1DQUFtQztJQUNuQyxRQUFRO0lBQ1IsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxXQUFXO0lBQ1gsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOztBQWpDSCx3Q0FtQ0M7NEVBOUJZLGNBQWM7bURBQWQsY0FBYztRQ1IzQiwrREFDRTs7UUFERyxnQ0FBYTs7a0REUUwsY0FBYztjQUwxQixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNyQzs7a0JBR0UsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vYWxlcnQuc2VydmljZSc7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJy4uL2FsZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd3MtYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGFsZXJ0OiBBbGVydDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UpIHsgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0eXBlZGVmXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnR5cGVkZWYgdXNlLWxpZmVjeWNsZS1pbnRlcmZhY2VcbiAgbmdPbkNoYW5nZXMoKSB7XG4gIH1cblxuICBoYXNNZXNzYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFsZXJ0Lm1lc3NhZ2UgJiYgdGhpcy5hbGVydC5tZXNzYWdlLmxlbmd0aCA+IDA7XG4gIH1cblxuICBoYXNUaXRsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbGVydC50aXRsZSAmJiB0aGlzLmFsZXJ0LnRpdGxlLmxlbmd0aCA+IDA7XG4gIH1cblxuICBjYW5DbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbGVydC5jbG9zYWJsZTtcbiAgfVxuXG4gIGRpc21pc3MoKTogdm9pZCB7XG4gICAgdGhpcy5hbGVydFNlcnZpY2UucmVtb3ZlKHRoaXMuYWxlcnQuaWQpO1xuICB9XG5cbn1cbiIsIlxuPGRpdiAqbmdJZj1cImFsZXJ0XCIgY2xhc3M9XCJhbGVydCB7eyBhbGVydC50eXBlIH19ICBhbGVydC1kaXNtaXNzaWJsZVwiIHJvbGU9XCJhbGVydFwiPlxuICA8aDQgKm5nSWY9XCJoYXNUaXRsZSgpXCIgY2xhc3M9XCJhbGVydC1oZWFkaW5nXCI+XG4gICAge3sgYWxlcnQudGl0bGUgfX1cbiAgICA8YnV0dG9uICpuZ0lmPVwiY2FuQ2xvc2UoKVwiIChjbGljayk9XCJkaXNtaXNzKClcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCJcbiAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9oND5cbiAgPHNwYW4gKm5nSWY9XCJoYXNNZXNzYWdlKClcIj57eyBhbGVydC5tZXNzYWdlIH19PC9zcGFuPlxuICA8YnV0dG9uICpuZ0lmPVwiY2FuQ2xvc2UoKSAmJiAhaGFzVGl0bGUoKVwiIChjbGljayk9XCJkaXNtaXNzKClcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19