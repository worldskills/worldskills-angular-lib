"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollResultComponent = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
const i1 = require("@angular/common");
const i2 = require("@ng-bootstrap/ng-bootstrap");
const i3 = require("../../common/pipes/date-sort.pipe");
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
    } }, directives: [i1.NgIf, i1.NgForOf, i2.NgbProgressbar], pipes: [i3.SortPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PollResultComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ws-poll-result',
                templateUrl: './poll-result.component.html',
                styleUrls: ['./poll-result.component.css']
            }]
    }], function () { return []; }, { poll: [{
            type: core_1.Input
        }], results: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sbC1yZXN1bHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ybGRza2lsbHMtYW5ndWxhci1saWIvc3JjL2xpYi9wb2xscy9wb2xsLXJlc3VsdC9wb2xsLXJlc3VsdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL3BvbGxzL3BvbGwtcmVzdWx0L3BvbGwtcmVzdWx0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF5RDs7Ozs7O0lDQ3ZELHlCQUNFO0lBQUEsOEJBQVE7SUFBQSxZQUFzQjtJQUFBLGlCQUFTO0lBQUEscUJBQ3ZDO0lBQUEsMENBQ0U7SUFBQSxZQUF3QjtJQUFBLGlCQUFrQjtJQUM5QyxpQkFBSTs7OztJQUhNLGVBQXNCO0lBQXRCLHlDQUFzQjtJQUNiLGVBQW1CO0lBQW5CLGlDQUFtQix1Q0FBQSxtQkFBQTtJQUNsQyxlQUF3QjtJQUF4Qiw0REFBd0I7OztJQUo5QiwyQkFDRTtJQUFBLHNFQUNFOztJQUlKLGlCQUFNOzs7SUFMRCxlQUF5RDtJQUF6RCxnRkFBeUQ7O0FESTlELE1BS2EsbUJBQW1CO0lBTTlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsMkRBQTJEO0lBQzNELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFFRCxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7O0FBckNILGtEQXNDQztzRkFqQ1ksbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNWaEMsb0VBQ0U7O1FBREcsa0NBQWU7O2tERFVQLG1CQUFtQjtjQUwvQixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOztrQkFJRSxZQUFLOztrQkFDTCxZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb2xsIH0gZnJvbSAnLi4vbW9kZWxzL3BvbGwnO1xuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3VsdCc7XG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi9tb2RlbHMvb3B0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd3MtcG9sbC1yZXN1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9sbC1yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wb2xsLXJlc3VsdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUG9sbFJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbWF4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBvbGw6IFBvbGw7XG4gIEBJbnB1dCgpIHJlc3VsdHM6IFJlc3VsdFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWxpZmVjeWNsZS1pbnRlcmZhY2UgdHlwZWRlZlxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXggPSB0aGlzLnJlc3VsdHMubWFwKHggPT4geC5jb3VudCkucmVkdWNlKChzdW0sIGN1cnJlbnQpID0+IHN1bSArIGN1cnJlbnQsIDApO1xuICB9XG5cbiAgY291bnRWb3RlcyhvcHRpb246IE9wdGlvbik6IG51bWJlciB7XG4gICAgaWYgKCF0aGlzLnBvbGwgfHwgIXRoaXMucmVzdWx0cykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWF4ID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnJlc3VsdHMuZmluZCh4ID0+IHgub3B0aW9uLmlkID09PSBvcHRpb24uaWQpO1xuICAgIHJldHVybiByZXN1bHQgPyByZXN1bHQuY291bnQgOiAwO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwicmVzdWx0c1wiPlxuICA8cCAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHBvbGwub3B0aW9ucyB8IHdzU29ydDogJ2FzYyc6ICdpZCdcIj5cbiAgICA8c3Ryb25nPnt7IG9wdGlvbi50ZXh0LnRleHQgfX08L3N0cm9uZz48YnIgLz5cbiAgICA8bmdiLXByb2dyZXNzYmFyIFtzaG93VmFsdWVdPVwiZmFsc2VcIiB0eXBlPVwic3VjY2Vzc1wiIFt2YWx1ZV09XCJjb3VudFZvdGVzKG9wdGlvbilcIiBbbWF4XT1cIm1heFwiPlxuICAgICAge3sgY291bnRWb3RlcyhvcHRpb24pIH19PC9uZ2ItcHJvZ3Jlc3NiYXI+XG4gIDwvcD5cbjwvZGl2PlxuIl19