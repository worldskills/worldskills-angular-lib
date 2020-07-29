"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightedPollComponent = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
const i1 = require("@angular/common");
const i2 = require("@angular/forms");
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
        this.optionSelected = new core_1.EventEmitter();
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
    } }, directives: [i1.NgForOf, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WeightedPollComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ws-weighted-poll',
                templateUrl: './weighted-poll.component.html',
                styleUrls: ['./weighted-poll.component.css']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VpZ2h0ZWQtcG9sbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL3BvbGxzL3dlaWdodGVkLXBvbGwvd2VpZ2h0ZWQtcG9sbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL3BvbGxzL3dlaWdodGVkLXBvbGwvd2VpZ2h0ZWQtcG9sbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBK0U7Ozs7O0lDSXpFLGlDQUFvRTtJQUFBLFlBQXNCO0lBQUEsaUJBQVM7OztJQUF2RCwrQ0FBdUI7SUFBQyxlQUFzQjtJQUF0Qix5Q0FBc0I7Ozs7SUFIOUYsNkJBQ0U7SUFBQSxpQ0FDRTtJQUQyQix5UEFBeUIsMk5BQUE7SUFDcEQsaUNBQWtCO0lBQUEsWUFBMkU7SUFBQSxpQkFBUztJQUN0RyxpRkFBb0U7SUFDdEUsaUJBQVM7SUFDWCxpQkFBSzs7OztJQUowQixlQUF5QjtJQUF6QiwrQ0FBeUIsbUNBQUE7SUFDbEMsZUFBMkU7SUFBM0Usd0hBQTJFO0lBQ3JGLGVBQW1DO0lBQW5DLDZDQUFtQzs7QURDakQsTUFLYSxxQkFBcUI7SUFZaEM7UUFSVSxtQkFBYyxHQUE4QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQVF6RCxDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSTtRQUNGLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFakIsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FB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QUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7QUFyRkgsc0RBc0ZDOzBGQWpGWSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1ZsQyw2QkFDRTtRQUFBLG9FQUNFO1FBS0osaUJBQUs7O1FBTnlCLGVBQWlDO1FBQWpDLDJDQUFpQzs7a0REU2xELHFCQUFxQjtjQUxqQyxnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOztrQkFFRSxZQUFLOztrQkFDTCxZQUFLOztrQkFDTCxZQUFLOztrQkFDTCxhQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9sbCB9IGZyb20gJy4uL21vZGVscy9wb2xsJztcbmltcG9ydCB7IFZvdGUgfSBmcm9tICcuLi9tb2RlbHMvdm90ZSc7XG5pbXBvcnQgeyBWb3RlRW50cnkgfSBmcm9tICcuLi9tb2RlbHMvdm90ZS1lbnRyeSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dzLXdlaWdodGVkLXBvbGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2VpZ2h0ZWQtcG9sbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dlaWdodGVkLXBvbGwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdlaWdodGVkUG9sbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHBvbGw6IFBvbGw7XG4gIEBJbnB1dCgpIHZvdGVkOiBWb3RlO1xuICBASW5wdXQoKSBpbml0aWFsU2VsZWN0aW9uOiBWb3RlRW50cnlbXTtcbiAgQE91dHB1dCgpIG9wdGlvblNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8Vm90ZUVudHJ5W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIHNlbGVjdGlvbjogT3B0aW9uVmlld1tdO1xuXG4gIG51bVNlbGVjdGlvbnM6IG51bWJlcltdO1xuXG4gIG1vZGVsczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgLy8gdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICAvLyBlbnN1cmUgdmFyaWFibGVzXG4gICAgdGhpcy5udW1TZWxlY3Rpb25zID0gW107XG4gICAgdGhpcy5tb2RlbHMgPSBbXTtcblxuICAgIC8vIGxvb3AgZm9yIG51bWJlciBvZiBzZWxlY3QgYm94ZXMgdG8gc2hvd1xuICAgIHRoaXMubnVtU2VsZWN0aW9ucyA9IEFycmF5KHRoaXMucG9sbC5udW1iZXJPZlNlbGVjdGlvbnMpLmZpbGwoMCkubWFwKCh4LCBpKSA9PiBpKTtcblxuICAgIC8vIGVuc3VyZSBlYWNoIHNlbGVjdCBib3ggaGFzIGEgbW9kZWwgdG8gYmluZCB0b1xuICAgIHRoaXMubnVtU2VsZWN0aW9ucy5mb3JFYWNoKG51bSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuaW5pdGlhbFNlbGVjdGlvbi5maW5kKHggPT4geC5yYW5rID09PSBudW0gKyAxKTtcbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLm1vZGVscy5wdXNoKHNlbGVjdGVkLm9wdGlvbklkLnRvU3RyaW5nKCkpOyAvLyBoYW5kbGUgaW5pdGlhbCBzZWxlY3Rpb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW9kZWxzLnB1c2goJzAnKTsgLy8gZW5zdXJlIHRoZSBzZWxlY3Rpb24gdGV4dCBpcyBkaXNwbGF5ZWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZShldmVudDogYW55LCBpbmRleCk6IHZvaWQge1xuICAgIC8vIGVuc3VyZSB3ZSBhcmUgbm90IGRlYWxpbmcgd2l0aCBhbiB1bnNldCBhY3Rpb25cbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICE9PSAnMCcpIHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMubW9kZWxzLmZpbmRJbmRleCh4ID0+IHggPT09IGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAvLyBpZiBhbiBvcHRpb24gd2FzIHNlbGVjdGVkIHR3aWNlIGZyb20gZGlmZmVyZW50IGRyb3AgZG93bnMuIHVuc2V0IHRoZSBvbGRlciBzZWxlY3Rpb25cbiAgICAgIGlmIChpZHggIT09IGluZGV4ICYmIGlkeCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5tb2RlbHNbaWR4XSA9ICcwJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBlbWl0IHNlbGVjdGlvbiBvbmx5IGlmIGFsbCBvcHRpb25zIGFyZSBzZWxlY3RlZFxuICAgIGlmICh0aGlzLmhhc01heFNlbGVjdGlvbnMoKSkge1xuICAgICAgY29uc3Qgb3V0cHV0ID0gW107XG4gICAgICB0aGlzLm1vZGVscy5mb3JFYWNoKChpZCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IHtyYW5rOiBpICsgMSwgb3B0aW9uSWQ6IGlkfTtcbiAgICAgICAgb3V0cHV0LnB1c2goZW50cnkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm9wdGlvblNlbGVjdGVkLmVtaXQob3V0cHV0KTtcbiAgICB9XG4gIH1cblxuICBoYXNNYXhTZWxlY3Rpb25zKCk6IGJvb2xlYW4ge1xuICAgIC8vIGlmIHRoZXJlIGFyZSBubyB1bnNldCBvcHRpb25zLCB3ZSBoYXZlIG1heCBzZWxlY3Rpb25cbiAgICByZXR1cm4gdGhpcy5tb2RlbHMuZmlsdGVyKHggPT4geCA9PT0gJzAnKS5sZW5ndGggPT09IDA7XG4gIH1cblxuICAvLyBjb252ZXJ0IHRoaXMgdG8gYW4gYWxnb3JpdGhtIGlmIHRoZSBkZXNpZ24gd29ya3Mgb3V0XG4gIG51bWJlclRvV29yZChudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKG51bSA8IDAgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8gVE9ETzogQ29udmVydCB0aGlzIHRvIGFuIGFsZ29cbiAgICBjb25zdCB3b3JkID0gWyd6ZXJvJywgJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnLCAnZmlmdGgnLCAnc2l4dGgnLCAnc2V2ZW50aCcsICdlaWdodCcsICduaW50aCcsICd0ZW50aCcgXTtcbiAgICByZXR1cm4gd29yZFtudW1dO1xuICB9XG5cbiAgY2FsY1BvaW50c0Zvckl0ZW0obnVtOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBvbGwubnVtYmVyT2ZTZWxlY3Rpb25zIC0gbnVtO1xuICB9XG5cbiAgaXNTZWxlY3RlZChvcHRpb25JZDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWxzLmZpbmRJbmRleCh4ID0+IHggPT09IFN0cmluZyhvcHRpb25JZCkpICE9PSAtMTtcbiAgfVxufVxuIiwiPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIiAqbmdGb3I9XCJsZXQgbnVtIG9mIG51bVNlbGVjdGlvbnNcIj5cbiAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJtb2RlbHNbbnVtXVwiIChjaGFuZ2UpPVwiY2hhbmdlKCRldmVudCwgbnVtKVwiIFtkaXNhYmxlZF09XCJ2b3RlZC5oYXNWb3RlZFwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj57eyBudW1iZXJUb1dvcmQobnVtICsgMSkgfX0gc2VsZWN0aW9uICh7eyBjYWxjUG9pbnRzRm9ySXRlbShudW0pIH19IHBvaW50cyk8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBwb2xsLm9wdGlvbnNcIiB2YWx1ZT1cInt7IG9wdGlvbi5pZCB9fVwiPnt7IG9wdGlvbi50ZXh0LnRleHQgfX08L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgPC9saT5cbjwvdWw+XG4iXX0=