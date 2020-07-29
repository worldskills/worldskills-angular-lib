"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatetimePickerComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const date_helper_1 = require("../../common/helpers/date.helper");
const datetime_1 = require("../datetime");
const i0 = require("@angular/core");
const i1 = require("@ng-bootstrap/ng-bootstrap");
const i2 = require("@angular/forms");
const i3 = require("@angular/common");
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
        this.change = new core_1.EventEmitter();
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
            this.value = datetime_1.Datetime.asToday();
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
        const dt = datetime_1.Datetime.fromLocalString(value);
        if (dt) {
            this.writeValue(dt);
        }
        else if (value.trim() === '') {
            this.writeValue(new datetime_1.Datetime());
        }
    }
    toggleDateTimeState() {
        this.showTimePickerToggle = !this.showTimePickerToggle;
    }
    onDateChange(date) {
        if (!this.value) {
            this.value = new datetime_1.Datetime();
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
        date = date_helper_1.toDate(date);
        return new ng_bootstrap_1.NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
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
            common_1.DatePipe,
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(() => DatetimePickerComponent),
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
        type: core_1.Component,
        args: [{
                selector: 'ws-datetime-picker',
                templateUrl: './datetime-picker.component.html',
                styleUrls: ['./datetime-picker.component.css'],
                providers: [
                    common_1.DatePipe,
                    {
                        provide: forms_1.NG_VALUE_ACCESSOR,
                        useExisting: core_1.forwardRef(() => DatetimePickerComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i1.NgbPopoverConfig }]; }, { disabled: [{
            type: core_1.Input
        }], opacity: [{
            type: core_1.HostBinding,
            args: ['style.opacity']
        }], inputDatetimeFormat: [{
            type: core_1.Input
        }], hourStep: [{
            type: core_1.Input
        }], minuteStep: [{
            type: core_1.Input
        }], secondStep: [{
            type: core_1.Input
        }], seconds: [{
            type: core_1.Input
        }], popover: [{
            type: core_1.ViewChild,
            args: ['popOver']
        }], change: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvZGF0ZS9kYXRldGltZS1waWNrZXIvZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvZGF0ZS9kYXRldGltZS1waWNrZXIvZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFtSDtBQUNuSCwwQ0FBeUU7QUFDekUsNENBQTJDO0FBQzNDLDZEQUFrRztBQUNsRyxrRUFBMEQ7QUFDMUQsMENBQXVDOzs7Ozs7OztJQ1VuQywyQkFDRTtJQUFBLDRDQUFnSDtJQUF4RCxnUEFBc0M7SUFBQyxpQkFBaUI7SUFDaEgsa0NBRUU7SUFEYyxtTkFBZ0M7SUFDOUMsd0JBQTZCO0lBQy9CLGlCQUFTO0lBQ1Qsa0NBQ0U7SUFEZ0UsME1BQW9CO0lBQ3BGLHdCQUEyQjtJQUM3QixpQkFBUztJQUNYLGlCQUFNOzs7O0lBUmtDLGVBQWlCO0lBQWpCLHNDQUFpQjtJQUNILGVBQXdCO0lBQXhCLDRFQUF3QixtQkFBQTs7OztJQVE5RSwyQkFDRTtJQUFBLGtDQUNFO0lBRGdFLHNOQUFnQztJQUNoRyx1QkFBOEI7SUFDaEMsaUJBQVM7SUFDVCxrQ0FDRTtJQURnRSwyTUFBb0I7SUFDcEYsd0JBQTJCO0lBQzdCLGlCQUFTO0lBQ1QsK0JBQ0U7SUFBQSw4Q0FFaUI7SUFGdUMsbVBBQXNDO0lBRTlGLGlCQUFpQjtJQUNuQixpQkFBTTtJQUNSLGlCQUFNOzs7SUFKb0MsZUFBaUI7SUFBakIsc0NBQWlCLDJCQUFBLDZCQUFBLGlDQUFBLGlDQUFBOzs7SUFuQjdELDJCQUNFO0lBQUEsc0ZBQ0U7SUFTRixzRkFD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REFBdkIsdUJBQXVCOzs7Ozs7O3FQQVR2QjtZQUNULGlCQUFRO1lBQ1I7Z0JBQ0UsT0FBTyxFQUFFLHlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLGlCQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3RELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjtRQ2xCSCw4QkFDRTtRQUFBLGdDQUlBO1FBSjRDLHVHQUFRLHFCQUFpQixJQUFDLDhGQUNGLHlCQUFxQixJQURuQjs7UUFBdEUsaUJBSUE7UUFBQSw4QkFDRTtRQUFBLGlDQUNFO1FBQUEsdUJBQThCO1FBQ2hDLGlCQUFTO1FBQ1gsaUJBQU07UUFDUixpQkFBTTtRQUdOLHlIQUNFO1FBMkJGLHlIQUNFOzs7UUF4Q0UsZUFBdUQ7UUFBdkQsNkZBQXVELDBCQUFBLHdDQUFBO1FBSU4sZUFBOEI7UUFBOUIsZ0NBQThCLDBCQUFBOztrRERjdEUsdUJBQXVCO2NBYm5DLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7Z0JBQzlDLFNBQVMsRUFBRTtvQkFDVCxpQkFBUTtvQkFDUjt3QkFDRSxPQUFPLEVBQUUseUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDdEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7a0JBR0UsWUFBSzs7a0JBQ0wsa0JBQVc7bUJBQUMsZUFBZTs7a0JBSzNCLFlBQUs7O2tCQUdMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQUVMLFlBQUs7O2tCQVFMLGdCQUFTO21CQUFDLFNBQVM7O2tCQUluQixhQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBIb3N0QmluZGluZywgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdiRGF0ZSwgTmdiUG9wb3ZlciwgTmdiUG9wb3ZlckNvbmZpZywgTmdiVGltZVN0cnVjdCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzL2RhdGUuaGVscGVyJztcbmltcG9ydCB7IERhdGV0aW1lIH0gZnJvbSAnLi4vZGF0ZXRpbWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3cy1kYXRldGltZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZXRpbWUtcGlja2VyLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGF0ZVBpcGUsXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRldGltZVBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRldGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm9wYWNpdHknKVxuICBnZXQgb3BhY2l0eSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gMC4yNSA6IDE7XG4gIH1cblxuICBASW5wdXQoKVxuICBpbnB1dERhdGV0aW1lRm9ybWF0ID0gJ2RkL01NL3l5eXkgSEg6bW0nO1xuXG4gIEBJbnB1dCgpIGhvdXJTdGVwID0gMTtcblxuICBASW5wdXQoKSBtaW51dGVTdGVwID0gMTtcblxuICBASW5wdXQoKSBzZWNvbmRTdGVwID0gMzA7XG5cbiAgQElucHV0KCkgc2Vjb25kcyA9IGZhbHNlO1xuXG4gIHNob3dUaW1lUGlja2VyVG9nZ2xlID0gZmFsc2U7XG5cbiAgdmFsdWU6IERhdGV0aW1lO1xuXG4gIG1vZGVsOiBOZ2JEYXRlIHwgbnVsbDtcblxuICBAVmlld0NoaWxkKCdwb3BPdmVyJylcbiAgcG9wb3ZlcjogTmdiUG9wb3ZlcjtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW5hdGl2ZVxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRldGltZT4oKTtcblxuICAvLyBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIHJhbmdlIGNoYW5nZXMuXG4gIG9uQ2hhbmdlID0gKHZhbHVlOiBEYXRldGltZSkgPT4ge307XG5cbiAgLy8gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBpbnB1dCBpcyB0b3VjaGVkLlxuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogTmdiUG9wb3ZlckNvbmZpZykge1xuICAgIGNvbmZpZy5hdXRvQ2xvc2UgPSAnb3V0c2lkZSc7XG4gICAgY29uZmlnLnBsYWNlbWVudCA9ICdhdXRvJztcbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBEYXRldGltZSk6IHZvaWQge1xuICAgIC8vIHJlcG9ydCB2YWx1ZSBiYWNrIHRvIHRoZSBtb2RlbFxuICAgIGlmIChvYmogJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubW9kZWwgPSB0aGlzLnRvTmdiRGF0ZShuZXcgRGF0ZShvYmoudG9TdHJpbmcoKSkpO1xuICAgICAgdGhpcy52YWx1ZSA9IG9iajtcbiAgICAgIHRoaXMub25DaGFuZ2Uob2JqKTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2hlbiB0aGVyZSdzIG5vIGlucHV0IG1vZGVsIHJlZ2lzdGVyZWRcbiAgICAgIHRoaXMudmFsdWUgPSBEYXRldGltZS5hc1RvZGF5KCk7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KG9iaik7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKCRldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IGR0ID0gRGF0ZXRpbWUuZnJvbUxvY2FsU3RyaW5nKHZhbHVlKTtcblxuICAgIGlmIChkdCkge1xuICAgICAgdGhpcy53cml0ZVZhbHVlKGR0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZShuZXcgRGF0ZXRpbWUoKSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRGF0ZVRpbWVTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dUaW1lUGlja2VyVG9nZ2xlID0gIXRoaXMuc2hvd1RpbWVQaWNrZXJUb2dnbGU7XG4gIH1cblxuICBvbkRhdGVDaGFuZ2UoZGF0ZTogTmdiRGF0ZSk6IHZvaWQge1xuICAgIGlmICghdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IG5ldyBEYXRldGltZSgpO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUueWVhciA9IGRhdGUueWVhcjtcbiAgICB0aGlzLnZhbHVlLm1vbnRoID0gZGF0ZS5tb250aDtcbiAgICB0aGlzLnZhbHVlLmRheSA9IGRhdGUuZGF5O1xuICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIG9uVGltZUNoYW5nZShldmVudDogTmdiVGltZVN0cnVjdCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUuaG91ciA9IGV2ZW50LmhvdXI7XG4gICAgdGhpcy52YWx1ZS5taW51dGUgPSBldmVudC5taW51dGU7XG4gICAgdGhpcy52YWx1ZS5zZWNvbmQgPSBldmVudC5zZWNvbmQ7XG4gICAgdGhpcy53cml0ZVZhbHVlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgb25BY2NlcHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9wb3Zlci5pc09wZW4oKSkge1xuICAgICAgdGhpcy5wb3BvdmVyLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgaW5wdXRCbHVyKCRldmVudCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICB0b05nYkRhdGUoZGF0ZTogRGF0ZSk6IE5nYkRhdGUge1xuICAgIGRhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gICAgcmV0dXJuIG5ldyBOZ2JEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgZGF0ZS5nZXREYXRlKCkpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtci0yXCI+XG4gIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIiAoYmx1cik9XCJpbnB1dEJsdXIoJGV2ZW50KVwiXG4gICAgW25nTW9kZWxdPVwidmFsdWUudG9TdHJpbmcoKSB8IGRhdGU6aW5wdXREYXRldGltZUZvcm1hdFwiIChjaGFuZ2UpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCIgW2Rpc2FibGVkXT0nZGlzYWJsZWQnXG4gICAgW3BsYWNlaG9sZGVyXT1cImlucHV0RGF0ZXRpbWVGb3JtYXRcIiAvPlxuXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tc21cIiBbbmdiUG9wb3Zlcl09XCJjYWxlbmRhckNvbnRlbnRcIiBbZGlzYWJsZWRdPSdkaXNhYmxlZCcgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG48bmctdGVtcGxhdGUgI2NhbGVuZGFyQ29udGVudD5cbiAgPGRpdj5cbiAgICA8ZGl2ICpuZ0lmPVwiIXNob3dUaW1lUGlja2VyVG9nZ2xlXCI+XG4gICAgICA8bmdiLWRhdGVwaWNrZXIgI2RwIG5hbWU9XCJkYXRlcGlja2VyXCIgW25nTW9kZWxdPVwidmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJvbkRhdGVDaGFuZ2UoJGV2ZW50KVwiPjwvbmdiLWRhdGVwaWNrZXI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiBbZGlzYWJsZWRdPVwiIXZhbHVlPy5kYXlcIiBbbmdiUG9wb3Zlcl09XCJ0aW1lUGlja2VyQ29udGVudFwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlRGF0ZVRpbWVTdGF0ZSgpO1wiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb2NrLW9cIj48L2k+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25BY2NlcHQoKVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cInNob3dUaW1lUGlja2VyVG9nZ2xlXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZURhdGVUaW1lU3RhdGUoKTtcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvbkFjY2VwdCgpXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIj48L2k+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtdC1hdXRvXCI+XG4gICAgICAgIDxuZ2ItdGltZXBpY2tlciAjdHAgbmFtZT1cInRpbWVwaWNrZXJcIiBbbmdNb2RlbF09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uVGltZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICBbc2Vjb25kc109XCJzZWNvbmRzXCIgW2hvdXJTdGVwXT1cImhvdXJTdGVwXCIgW21pbnV0ZVN0ZXBdPVwibWludXRlU3RlcFwiIFtzZWNvbmRTdGVwXT1cInNlY29uZFN0ZXBcIj5cbiAgICAgICAgPC9uZ2ItdGltZXBpY2tlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjdGltZVBpY2tlckNvbnRlbnQ+XG4gIHRpbWVwaWNrZXIgaGVyZSFcbjwvbmctdGVtcGxhdGU+XG4iXX0=