"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbsComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const array_util_1 = require("../../common/util/array.util");
const i0 = require("@angular/core");
const i1 = require("../breadcrumbs.service");
const i2 = require("@angular/router");
const i3 = require("@angular/common");
function BreadcrumbsComponent_nav_0_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵelementStart(1, "a", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", ctx_r1.homeItemRoute, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.homeItemText);
} }
function BreadcrumbsComponent_nav_0_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.homeItemText, " ");
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function BreadcrumbsComponent_nav_0_li_4_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(2, _c0, breadcrumb_r4.url, breadcrumb_r4.params));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", breadcrumb_r4.label, " ");
} }
function BreadcrumbsComponent_nav_0_li_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", breadcrumb_r4.label, " ");
} }
function BreadcrumbsComponent_nav_0_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, BreadcrumbsComponent_nav_0_li_4_a_1_Template, 2, 5, "a", 7);
    i0.ɵɵtemplate(2, BreadcrumbsComponent_nav_0_li_4_span_2_Template, 2, 1, "span", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const last_r5 = ctx.last;
    i0.ɵɵclassMapInterpolate1("breadcrumb-item ", last_r5 ? "active" : "", "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !last_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", last_r5);
} }
function BreadcrumbsComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 1);
    i0.ɵɵelementStart(1, "ol", 2);
    i0.ɵɵtemplate(2, BreadcrumbsComponent_nav_0_li_2_Template, 3, 2, "li", 3);
    i0.ɵɵtemplate(3, BreadcrumbsComponent_nav_0_li_3_Template, 2, 1, "li", 3);
    i0.ɵɵtemplate(4, BreadcrumbsComponent_nav_0_li_4_Template, 3, 5, "li", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showHomeItem && !ctx_r0.isAtHome);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showHomeItem && ctx_r0.isAtHome);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.breadcrumbs);
} }
class BreadcrumbsComponent {
    constructor(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    // tslint:disable-next-line:typedef
    ngOnInit() {
        // listen for dev changes to the breadcrumbs
        this.replacementSubscription = this.service.breadcrumbsSubject.subscribe(next => {
            this.breadcrumbs = [];
            array_util_1.ArrayUtil.pushMany(this.breadcrumbs, next);
        });
        // init
        this.isAtHome = false;
        this.service.homeItemRoute = this.homeItemRoute;
        this.service.targetOutlet = 'primary';
        this.service.build(this.route.root);
        // rebuild on nav change
        this.rebuildSubscription = this.router.events.subscribe((event) => {
            if (event instanceof router_1.NavigationEnd) {
                this.service.build(this.route.root);
                this.isAtHome = this.service.isAtHome;
            }
        });
    }
    // tslint:disable-next-line:use-lifecycle-interface typedef
    ngOnChanges() {
    }
    // tslint:disable-next-line:use-lifecycle-interface typedef
    ngOnDestroy() {
        if (this.replacementSubscription) {
            this.replacementSubscription.unsubscribe();
        }
        if (this.rebuildSubscription) {
            this.rebuildSubscription.unsubscribe();
        }
    }
}
exports.BreadcrumbsComponent = BreadcrumbsComponent;
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(i0.ɵɵdirectiveInject(i1.BreadcrumbsService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
BreadcrumbsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BreadcrumbsComponent, selectors: [["ws-breadcrumbs"]], inputs: { showHomeItem: "showHomeItem", homeItemRoute: "homeItemRoute", homeItemText: "homeItemText" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["aria-label", "breadcrumb", 4, "ngIf"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["class", "breadcrumb-item", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "href"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BreadcrumbsComponent_nav_0_Template, 5, 3, "nav", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.breadcrumbs);
    } }, directives: [i3.NgIf, i3.NgForOf], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BreadcrumbsComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ws-breadcrumbs',
                templateUrl: './breadcrumbs.component.html',
                styleUrls: ['./breadcrumbs.component.css']
            }]
    }], function () { return [{ type: i1.BreadcrumbsService }, { type: i2.Router }, { type: i2.ActivatedRoute }]; }, { showHomeItem: [{
            type: core_1.Input
        }], homeItemRoute: [{
            type: core_1.Input
        }], homeItemText: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ybGRza2lsbHMtYW5ndWxhci1saWIvc3JjL2xpYi9icmVhZGNydW1icy9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF5RDtBQUV6RCw0Q0FBd0U7QUFHeEUsNkRBQXlEOzs7Ozs7SUNIckQsNkJBQ0U7SUFBQSw0QkFBOEI7SUFBQSxZQUFrQjtJQUFBLGlCQUFJO0lBQ3RELGlCQUFLOzs7SUFEQSxlQUEwQjtJQUExQix3RUFBMEI7SUFBQyxlQUFrQjtJQUFsQix5Q0FBa0I7OztJQUVsRCw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBREgsZUFDRjtJQURFLG9EQUNGOzs7O0lBR0UsNEJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQUk7OztJQUZhLGdHQUFrRDtJQUNqRSxlQUNGO0lBREUsb0RBQ0Y7OztJQUNBLDRCQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFPOzs7SUFETCxlQUNGO0lBREUsb0RBQ0Y7OztJQVBGLDBCQUVFO0lBQUEsNEVBQ0U7SUFFRixrRkFDRTtJQUVKLGlCQUFLOzs7SUFSRCwwRUFBa0Q7SUFFakQsZUFBYTtJQUFiLCtCQUFhO0lBR1YsZUFBWTtJQUFaLDhCQUFZOzs7SUFieEIsOEJBQ0U7SUFBQSw2QkFDRTtJQUFBLHlFQUNFO0lBRUYseUVBQ0U7SUFFRix5RUFFRTtJQU9KLGlCQUFLO0lBQ1AsaUJBQU07OztJQWhCMEIsZUFBaUM7SUFBakMsOERBQWlDO0lBR2pDLGVBQWdDO0lBQWhDLDZEQUFnQztJQUkxRCxlQUF3RDtJQUF4RCw0Q0FBd0Q7O0FERjlELE1BS2Esb0JBQW9CO0lBWS9CLFlBQW1CLE9BQTJCLEVBQVUsTUFBYyxFQUFVLEtBQXFCO1FBQWxGLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQUksQ0FBQztJQUUxRyxtQ0FBbUM7SUFDbkMsUUFBUTtRQUNOLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQ3RFLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdEIsc0JBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQ0YsQ0FBQztRQUVGLE9BQU87UUFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBDLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDaEUsSUFBSSxLQUFLLFlBQVksc0JBQWEsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzthQUN2QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxXQUFXO0lBRVgsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7QUF6REgsb0RBMERDO3dGQXJEWSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ1pqQyxxRUFDRTs7UUFEMkIsc0NBQW1COztrRERZbkMsb0JBQW9CO2NBTGhDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7O2tCQUVFLFlBQUs7O2tCQUNMLFlBQUs7O2tCQUNMLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJzU2VydmljZSB9IGZyb20gJy4uL2JyZWFkY3J1bWJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCcmVhZGNydW1iIH0gZnJvbSAnLi4vYnJlYWRjcnVtYic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFycmF5VXRpbCB9IGZyb20gJy4uLy4uL2NvbW1vbi91dGlsL2FycmF5LnV0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3cy1icmVhZGNydW1icycsXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1icy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNob3dIb21lSXRlbTogYm9vbGVhbjtcbiAgQElucHV0KCkgaG9tZUl0ZW1Sb3V0ZTogc3RyaW5nO1xuICBASW5wdXQoKSBob21lSXRlbVRleHQ6IHN0cmluZztcblxuICByZXBsYWNlbWVudFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICByZWJ1aWxkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJbXTtcblxuICBpc0F0SG9tZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogQnJlYWRjcnVtYnNTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnR5cGVkZWZcbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gbGlzdGVuIGZvciBkZXYgY2hhbmdlcyB0byB0aGUgYnJlYWRjcnVtYnNcbiAgICB0aGlzLnJlcGxhY2VtZW50U3Vic2NyaXB0aW9uID0gdGhpcy5zZXJ2aWNlLmJyZWFkY3J1bWJzU3ViamVjdC5zdWJzY3JpYmUoXG4gICAgICBuZXh0ID0+IHtcbiAgICAgICAgdGhpcy5icmVhZGNydW1icyA9IFtdO1xuICAgICAgICBBcnJheVV0aWwucHVzaE1hbnkodGhpcy5icmVhZGNydW1icywgbmV4dCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIGluaXRcbiAgICB0aGlzLmlzQXRIb21lID0gZmFsc2U7XG4gICAgdGhpcy5zZXJ2aWNlLmhvbWVJdGVtUm91dGUgPSB0aGlzLmhvbWVJdGVtUm91dGU7XG4gICAgdGhpcy5zZXJ2aWNlLnRhcmdldE91dGxldCA9ICdwcmltYXJ5JztcbiAgICB0aGlzLnNlcnZpY2UuYnVpbGQodGhpcy5yb3V0ZS5yb290KTtcblxuICAgIC8vIHJlYnVpbGQgb24gbmF2IGNoYW5nZVxuICAgIHRoaXMucmVidWlsZFN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5idWlsZCh0aGlzLnJvdXRlLnJvb3QpO1xuICAgICAgICB0aGlzLmlzQXRIb21lID0gdGhpcy5zZXJ2aWNlLmlzQXRIb21lO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1saWZlY3ljbGUtaW50ZXJmYWNlIHR5cGVkZWZcbiAgbmdPbkNoYW5nZXMoKSB7XG5cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtbGlmZWN5Y2xlLWludGVyZmFjZSB0eXBlZGVmXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnJlcGxhY2VtZW50U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlcGxhY2VtZW50U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlYnVpbGRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVidWlsZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiICpuZ0lmPVwiYnJlYWRjcnVtYnNcIj5cbiAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxuICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiICpuZ0lmPVwic2hvd0hvbWVJdGVtICYmICFpc0F0SG9tZVwiPlxuICAgICAgPGEgaHJlZj1cInt7IGhvbWVJdGVtUm91dGUgfX1cIj57eyBob21lSXRlbVRleHQgfX08L2E+XG4gICAgPC9saT5cbiAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIiAqbmdJZj1cInNob3dIb21lSXRlbSAmJiBpc0F0SG9tZVwiPlxuICAgICAge3sgaG9tZUl0ZW1UZXh0IH19XG4gICAgPC9saT5cbiAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW0ge3sgbGFzdCA/ICdhY3RpdmUnIDogJycgfX1cIlxuICAgICAgKm5nRm9yPVwibGV0IGJyZWFkY3J1bWIgb2YgYnJlYWRjcnVtYnM7IGxldCBsYXN0ID0gbGFzdDtcIj5cbiAgICAgIDxhICpuZ0lmPVwiIWxhc3RcIiBbcm91dGVyTGlua109XCJbYnJlYWRjcnVtYi51cmwsIGJyZWFkY3J1bWIucGFyYW1zXVwiPlxuICAgICAgICB7eyBicmVhZGNydW1iLmxhYmVsIH19XG4gICAgICA8L2E+XG4gICAgICA8c3BhbiAqbmdJZj1cImxhc3RcIj5cbiAgICAgICAge3sgYnJlYWRjcnVtYi5sYWJlbCB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvbGk+XG4gIDwvb2w+XG48L25hdj5cbiJdfQ==