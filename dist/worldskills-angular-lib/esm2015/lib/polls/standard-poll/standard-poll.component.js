"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardPollComponent = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
const i1 = require("@angular/common");
const i2 = require("@angular/forms");
const i3 = require("../../common/pipes/date-sort.pipe");
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
        this.optionSelected = new core_1.EventEmitter();
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
    } }, directives: [i1.NgForOf, i1.NgClass, i2.RadioControlValueAccessor, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], pipes: [i3.SortPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StandardPollComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ws-standard-poll',
                templateUrl: './standard-poll.component.html',
                styleUrls: ['./standard-poll.component.css']
            }]
    }], function () { return []; }, { poll: [{
            type: core_1.Input
        }], voted: [{
            type: core_1.Input
        }], initialSelection: [{
            type: core_1.Input
        }], optionSelected: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbmRhcmQtcG9sbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL3BvbGxzL3N0YW5kYXJkLXBvbGwvc3RhbmRhcmQtcG9sbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL3BvbGxzL3N0YW5kYXJkLXBvbGwvc3RhbmRhcmQtcG9sbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBK0U7Ozs7Ozs7O0lDQzdFLDZCQUVFO0lBQUEsOEJBQ0U7SUFBQSxnQ0FDRTtJQUFBLGdDQUVxQztJQURnQiw0TkFBZ0Msd05BQUE7SUFEckYsaUJBRXFDO0lBQUEsWUFDdkM7SUFBQSxpQkFBUTtJQUNWLGlCQUFNO0lBQ1IsaUJBQUs7Ozs7SUFSSCwyR0FBMEQ7SUFHUSxlQUEyQjtJQUEzQixnREFBMkIseUNBQUEsdUJBQUEsc0NBQUE7SUFFcEQsZUFDdkM7SUFEdUMsbURBQ3ZDOztBREZOLE1BS2EscUJBQXFCO0lBU2hDO1FBSlUsbUJBQWMsR0FBOEIsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFJekQsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUM3QjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBYztRQUMzQixNQUFNLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7QUFwREgsc0RBcURDOzBGQWhEWSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1hsQyw2QkFDRTtRQUFBLG9FQUVFOztRQVFKLGlCQUFLOztRQVZDLGVBQXlEO1FBQXpELDZFQUF5RDs7a0REVWxELHFCQUFxQjtjQUxqQyxnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOztrQkFHRSxZQUFLOztrQkFDTCxZQUFLOztrQkFDTCxZQUFLOztrQkFDTCxhQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9sbCB9IGZyb20gJy4uL21vZGVscy9wb2xsJztcbmltcG9ydCB7IFZvdGUgfSBmcm9tICcuLi9tb2RlbHMvdm90ZSc7XG5pbXBvcnQgeyBWb3RlRW50cnkgfSBmcm9tICcuLi9tb2RlbHMvdm90ZS1lbnRyeSc7XG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi9tb2RlbHMvb3B0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd3Mtc3RhbmRhcmQtcG9sbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGFuZGFyZC1wb2xsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RhbmRhcmQtcG9sbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhbmRhcmRQb2xsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwb2xsOiBQb2xsO1xuICBASW5wdXQoKSB2b3RlZDogVm90ZTtcbiAgQElucHV0KCkgaW5pdGlhbFNlbGVjdGlvbjogVm90ZUVudHJ5W107XG4gIEBPdXRwdXQoKSBvcHRpb25TZWxlY3RlZDogRXZlbnRFbWl0dGVyPFZvdGVFbnRyeVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBzZWxlY3Rpb246IFZvdGVFbnRyeTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1saWZlY3ljbGUtaW50ZXJmYWNlIHR5cGVkZWZcbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRpYWxTZWxlY3Rpb24pIHtcbiAgICAgIGlmICh0aGlzLmluaXRpYWxTZWxlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHRoaXMuaW5pdGlhbFNlbGVjdGlvblswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZERlZmF1bHRTZWxlY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkRGVmYXVsdFNlbGVjdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWREZWZhdWx0U2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9uID0geyByYW5rOiAxLCBvcHRpb25JZDogbnVsbCB9O1xuICB9XG5cbiAgaXNTZWxlY3RlZChvcHRpb246IE9wdGlvbik6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24ub3B0aW9uSWQgPT09IG9wdGlvbi5pZDtcbiAgfVxuXG4gIG9uT3B0aW9uU2VsZWN0KG9wdGlvbjogT3B0aW9uKTogdm9pZCB7XG4gICAgY29uc3QgZW50cnkgPSB7IHJhbms6IDEsIG9wdGlvbklkOiBvcHRpb24uaWQgfTtcbiAgICB0aGlzLm9wdGlvblNlbGVjdGVkLmVtaXQoW2VudHJ5XSk7XG4gIH1cbn1cbiIsIjx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgPGxpICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcG9sbC5vcHRpb25zIHwgd3NTb3J0OiAnYXNjJzogJ2lkJ1wiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCJcbiAgICBbbmdDbGFzc109XCJ7YWN0aXZlOiB2b3RlZC5oYXNWb3RlZCAmJiBpc1NlbGVjdGVkKG9wdGlvbil9XCI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIG5hbWU9XCJxdWVzdGlvbnNcIiBbZGlzYWJsZWRdPVwidm90ZWQuaGFzVm90ZWRcIlxuICAgICAgICAgIFtjaGVja2VkXT1cImlzU2VsZWN0ZWQob3B0aW9uKVwiIFt2YWx1ZV09XCJvcHRpb24uaWRcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGlvbi5vcHRpb25JZFwiXG4gICAgICAgICAgKGNsaWNrKT1cIm9uT3B0aW9uU2VsZWN0KG9wdGlvbilcIiAvPnt7IG9wdGlvbi50ZXh0LnRleHQgfX1cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG48L3VsPlxuIl19