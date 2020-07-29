"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRangeComponent = void 0;
const core_1 = require("@angular/core");
const date_helper_1 = require("../../common/helpers/date.helper");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const forms_1 = require("@angular/forms");
const i0 = require("@angular/core");
const i1 = require("@ng-bootstrap/ng-bootstrap");
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
        this.change = new core_1.EventEmitter();
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
        return parsed && this.calendar.isValid(ng_bootstrap_1.NgbDate.from(parsed)) ? ng_bootstrap_1.NgbDate.from(parsed) : currentValue;
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
        date = date_helper_1.toDate(date);
        return new ng_bootstrap_1.NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
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
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(() => DateRangeComponent),
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
        type: core_1.Component,
        args: [{
                selector: 'ws-date-range',
                templateUrl: './date-range.component.html',
                styleUrls: ['./date-range.component.css'],
                providers: [
                    {
                        provide: forms_1.NG_VALUE_ACCESSOR,
                        useExisting: core_1.forwardRef(() => DateRangeComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i1.NgbCalendar }, { type: i1.NgbDateParserFormatter }]; }, { disabled: [{
            type: core_1.Input
        }], opacity: [{
            type: core_1.HostBinding,
            args: ['style.opacity']
        }], change: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL2RhdGUvZGF0ZS1yYW5nZS9kYXRlLXJhbmdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvZGF0ZS9kYXRlLXJhbmdlL2RhdGUtcmFuZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQXdHO0FBQ3hHLGtFQUEwRDtBQUMxRCw2REFBMEY7QUFDMUYsMENBQXlFOzs7OztJQ0lqRSxnQ0FHRTtJQUZrRCw4T0FBaUMsdUxBQ3ZELElBQUksSUFEbUQ7SUFFbkYsWUFDRjtJQUFBLGlCQUFPOzs7OztJQUprQixxQ0FBeUIsa0NBQUEsZ0VBQUE7SUFHaEQsZUFDRjtJQURFLDRDQUNGOztBRExSLE1BWWEsa0JBQWtCO0lBa0I3QixZQUFvQixRQUFxQixFQUFTLFNBQWlDO1FBQS9ELGFBQVEsR0FBUixRQUFRLENBQWE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUF3QjtRQWhCMUUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQU0xQixnQkFBVyxHQUFtQixJQUFJLENBQUM7UUFPbkMsNENBQTRDO1FBQ2xDLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQWEsQ0FBQztRQTBDakQsMkNBQTJDO1FBQzNDLGFBQVEsR0FBRyxDQUFDLEtBQWdCLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUVwQyw4Q0FBOEM7UUFDOUMsY0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQTNDckIsQ0FBQztJQWhCRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lB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T25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcsIGZvcndhcmRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tICcuLi8uLi9jb21tb24vaGVscGVycy9kYXRlLmhlbHBlcic7XG5pbXBvcnQgeyBOZ2JEYXRlLCBOZ2JDYWxlbmRhciwgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERhdGVSYW5nZSB9IGZyb20gJy4uL2RhdGUtcmFuZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3cy1kYXRlLXJhbmdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcmFuZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlLXJhbmdlLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlUmFuZ2VDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IgIHtcblxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm9wYWNpdHknKVxuICBnZXQgb3BhY2l0eSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gMC4yNSA6IDE7XG4gIH1cblxuICBob3ZlcmVkRGF0ZTogTmdiRGF0ZSB8IG51bGwgPSBudWxsO1xuXG4gIGZyb21EYXRlOiBOZ2JEYXRlIHwgbnVsbDtcbiAgdG9EYXRlOiBOZ2JEYXRlIHwgbnVsbDtcblxuICB2YWx1ZTogRGF0ZVJhbmdlO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVSYW5nZT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbGVuZGFyOiBOZ2JDYWxlbmRhciwgcHVibGljIGZvcm1hdHRlcjogTmdiRGF0ZVBhcnNlckZvcm1hdHRlcikge1xuICB9XG5cbiAgb25EYXRlU2VsZWN0aW9uKGRhdGU6IE5nYkRhdGUpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZnJvbURhdGUgJiYgIXRoaXMudG9EYXRlKSB7XG4gICAgICB0aGlzLmZyb21EYXRlID0gZGF0ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZnJvbURhdGUgJiYgIXRoaXMudG9EYXRlICYmIGRhdGUgJiYgZGF0ZS5hZnRlcih0aGlzLmZyb21EYXRlKSkge1xuICAgICAgdGhpcy50b0RhdGUgPSBkYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvRGF0ZSA9IG51bGw7XG4gICAgICB0aGlzLmZyb21EYXRlID0gZGF0ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mcm9tRGF0ZSAmJiB0aGlzLnRvRGF0ZSkge1xuICAgICAgaWYgKCF0aGlzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB7IHN0YXJ0OiBuZXcgRGF0ZSgpLCBlbmQ6IG5ldyBEYXRlKCkgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUuc3RhcnQgPSBuZXcgRGF0ZSh0aGlzLmZyb21EYXRlLnllYXIsIHRoaXMuZnJvbURhdGUubW9udGggLSAxLCB0aGlzLmZyb21EYXRlLmRheSk7XG4gICAgICB0aGlzLnZhbHVlLmVuZCA9IG5ldyBEYXRlKHRoaXMudG9EYXRlLnllYXIsIHRoaXMudG9EYXRlLm1vbnRoIC0gMSwgdGhpcy50b0RhdGUuZGF5KTtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpc0hvdmVyZWQoZGF0ZTogTmdiRGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZyb21EYXRlICYmICF0aGlzLnRvRGF0ZSAmJiB0aGlzLmhvdmVyZWREYXRlICYmIGRhdGUuYWZ0ZXIodGhpcy5mcm9tRGF0ZSkgJiYgZGF0ZS5iZWZvcmUodGhpcy5ob3ZlcmVkRGF0ZSk7XG4gIH1cblxuICBpc0luc2lkZShkYXRlOiBOZ2JEYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG9EYXRlICYmIGRhdGUuYWZ0ZXIodGhpcy5mcm9tRGF0ZSkgJiYgZGF0ZS5iZWZvcmUodGhpcy50b0RhdGUpO1xuICB9XG5cbiAgaXNSYW5nZShkYXRlOiBOZ2JEYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGRhdGUuZXF1YWxzKHRoaXMuZnJvbURhdGUpIHx8ICh0aGlzLnRvRGF0ZSAmJiBkYXRlLmVxdWFscyh0aGlzLnRvRGF0ZSkpIHx8IHRoaXMuaXNJbnNpZGUoZGF0ZSkgfHwgdGhpcy5pc0hvdmVyZWQoZGF0ZSk7XG4gIH1cblxuICB2YWxpZGF0ZUlucHV0KGN1cnJlbnRWYWx1ZTogTmdiRGF0ZSB8IG51bGwsIGlucHV0OiBzdHJpbmcpOiBOZ2JEYXRlIHwgbnVsbCB7XG4gICAgY29uc3QgcGFyc2VkID0gdGhpcy5mb3JtYXR0ZXIucGFyc2UoaW5wdXQpO1xuICAgIHJldHVybiBwYXJzZWQgJiYgdGhpcy5jYWxlbmRhci5pc1ZhbGlkKE5nYkRhdGUuZnJvbShwYXJzZWQpKSA/IE5nYkRhdGUuZnJvbShwYXJzZWQpIDogY3VycmVudFZhbHVlO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSByYW5nZSBjaGFuZ2VzLlxuICBvbkNoYW5nZSA9IChyYW5nZTogRGF0ZVJhbmdlKSA9PiB7fTtcblxuICAvLyBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGlucHV0IGlzIHRvdWNoZWQuXG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUob2JqOiBEYXRlUmFuZ2UpOiB2b2lkIHtcbiAgICBpZiAob2JqICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmZyb21EYXRlID0gIHRoaXMudG9OZ2JEYXRlKG9iai5zdGFydCk7XG4gICAgICB0aGlzLnRvRGF0ZSA9ICB0aGlzLnRvTmdiRGF0ZShvYmouZW5kKTtcbiAgICAgIHRoaXMudmFsdWUgPSBvYmo7XG4gICAgICB0aGlzLm9uQ2hhbmdlKG9iaik7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KG9iaik7XG4gICAgfVxuICB9XG5cbiAgdG9OZ2JEYXRlKGRhdGU6IERhdGUpOiBOZ2JEYXRlIHtcbiAgICBkYXRlID0gdG9EYXRlKGRhdGUpO1xuICAgIHJldHVybiBuZXcgTmdiRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmb3JtLWlubGluZVwiPlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBoaWRkZW4tZ3JvdXBcIj5cbiAgICAgIDxpbnB1dCBuYW1lPVwiZGF0ZXBpY2tlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmdiRGF0ZXBpY2tlciAjZGF0ZXBpY2tlcj1cIm5nYkRhdGVwaWNrZXJcIiBbYXV0b0Nsb3NlXT1cIidvdXRzaWRlJ1wiXG4gICAgICAgIChkYXRlU2VsZWN0KT1cIm9uRGF0ZVNlbGVjdGlvbigkZXZlbnQpXCIgW2Rpc3BsYXlNb250aHNdPVwiMlwiIFtkYXlUZW1wbGF0ZV09XCJ0XCIgb3V0c2lkZURheXM9XCJoaWRkZW5cIlxuICAgICAgICBbc3RhcnREYXRlXT1cImZyb21EYXRlIVwiPlxuICAgICAgPG5nLXRlbXBsYXRlICN0IGxldC1kYXRlIGxldC1mb2N1c2VkPVwiZm9jdXNlZFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImN1c3RvbS1kYXlcIiBbY2xhc3MuZm9jdXNlZF09XCJmb2N1c2VkXCIgW2NsYXNzLnJhbmdlXT1cImlzUmFuZ2UoZGF0ZSlcIlxuICAgICAgICAgIFtjbGFzcy5mYWRlZF09XCJpc0hvdmVyZWQoZGF0ZSkgfHwgaXNJbnNpZGUoZGF0ZSlcIiAobW91c2VlbnRlcik9XCJob3ZlcmVkRGF0ZSA9IGRhdGVcIlxuICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhvdmVyZWREYXRlID0gbnVsbFwiPlxuICAgICAgICAgIHt7IGRhdGUuZGF5IH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgPGlucHV0ICNkcEZyb21EYXRlIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJ5eXl5LW1tLWRkXCIgbmFtZT1cImRwRnJvbURhdGVcIlxuICAgICAgICBbdmFsdWVdPVwiZm9ybWF0dGVyLmZvcm1hdChmcm9tRGF0ZSlcIiAoaW5wdXQpPVwiZnJvbURhdGUgPSB2YWxpZGF0ZUlucHV0KGZyb21EYXRlLCBkcEZyb21EYXRlLnZhbHVlKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBjYWxlbmRhclwiIChjbGljayk9XCJkYXRlcGlja2VyLnRvZ2dsZSgpXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtbC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICA8aW5wdXQgI2RwVG9EYXRlIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJ5eXl5LW1tLWRkXCIgbmFtZT1cImRwVG9EYXRlXCIgW3ZhbHVlXT1cImZvcm1hdHRlci5mb3JtYXQodG9EYXRlKVwiXG4gICAgICAgIChpbnB1dCk9XCJ0b0RhdGUgPSB2YWxpZGF0ZUlucHV0KHRvRGF0ZSwgZHBUb0RhdGUudmFsdWUpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGNhbGVuZGFyXCIgKGNsaWNrKT1cImRhdGVwaWNrZXIudG9nZ2xlKClcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==