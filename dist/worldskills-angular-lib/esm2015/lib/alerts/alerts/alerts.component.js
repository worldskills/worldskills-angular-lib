"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertsComponent = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
const i1 = require("../alert.service");
const i2 = require("@angular/common");
const i3 = require("../alert/alert.component");
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
AlertsComponent.ɵfac = function AlertsComponent_Factory(t) { return new (t || AlertsComponent)(i0.ɵɵdirectiveInject(i1.AlertService)); };
AlertsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertsComponent, selectors: [["ws-alerts"]], decls: 1, vars: 1, consts: [["class", "alerts", 4, "ngIf"], [1, "alerts"], [3, "alert", 4, "ngFor", "ngForOf"], [3, "alert"]], template: function AlertsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AlertsComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.hasAlerts);
    } }, directives: [i2.NgIf, i2.NgForOf, i3.AlertComponent], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ws-alerts',
                templateUrl: './alerts.component.html',
                styleUrls: ['./alerts.component.css']
            }]
    }], function () { return [{ type: i1.AlertService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvYWxlcnRzL2FsZXJ0cy9hbGVydHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ybGRza2lsbHMtYW5ndWxhci1saWIvc3JjL2xpYi9hbGVydHMvYWxlcnRzL2FsZXJ0cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBa0Q7Ozs7OztJQ0NoRCw4QkFBa0Y7OztJQUExQiwrQkFBYzs7O0lBRHhFLDhCQUNFO0lBQUEsZ0ZBQXVFO0lBQ3pFLGlCQUFNOzs7SUFETSxlQUE2QztJQUE3QyxvREFBNkM7O0FER3pELE1BS2EsZUFBZTtJQUUxQixZQUFtQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7SUFFbEQsbUNBQW1DO0lBQ25DLFFBQVE7SUFDUixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O0FBZkgsMENBZ0JDOzhFQVhZLGVBQWU7b0RBQWYsZUFBZTtRQ1Q1QixnRUFDRTs7UUFERyxvQ0FBaUI7O2tERFNULGVBQWU7Y0FMM0IsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICcuLi9hbGVydCc7XG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi9hbGVydC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd3MtYWxlcnRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0cy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UpIHsgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0eXBlZGVmXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0IGhhc0FsZXJ0cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbGVydFNlcnZpY2UuYWxlcnRzLmxlbmd0aCA+IDA7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJoYXNBbGVydHNcIiBjbGFzcz1cImFsZXJ0c1wiPlxuICA8d3MtYWxlcnQgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGhpcy5hbGVydFNlcnZpY2UuYWxlcnRzXCIgW2FsZXJ0XT1cIml0ZW1cIj48L3dzLWFsZXJ0PlxuPC9kaXY+XG4iXX0=