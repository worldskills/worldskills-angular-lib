"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsComponent = void 0;
const rxjs_1 = require("rxjs");
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
class WsComponent {
    constructor() {
        this.subscriptions = new rxjs_1.Subscription();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    // tslint:disable-next-line:typedef
    subscribe(...teardowns) {
        teardowns.forEach(teardown => this.subscriptions.add(teardown));
    }
}
exports.WsComponent = WsComponent;
WsComponent.ɵfac = function WsComponent_Factory(t) { return new (t || WsComponent)(); };
WsComponent.ɵdir = i0.ɵɵdefineDirective({ type: WsComponent });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WsComponent, [{
        type: core_1.Directive
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvd29ybGRza2lsbHMtYW5ndWxhci1saWIvc3JjL2xpYi9jb21tb24vdXRpbC93cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQW1EO0FBQ25ELHdDQUFxRDs7QUFHckQsTUFFc0IsV0FBVztJQUcvQjtRQUZVLGtCQUFhLEdBQWlCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBRTVDLENBQUM7SUFFaEIsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELG1DQUFtQztJQUN6QixTQUFTLENBQUMsR0FBRyxTQUErQjtRQUNwRCxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDOztBQWRILGtDQWdCQztzRUFkcUIsV0FBVztnREFBWCxXQUFXO2tEQUFYLFdBQVc7Y0FGaEMsZ0JBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24sIFRlYXJkb3duTG9naWMgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9uRGVzdHJveSwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQERpcmVjdGl2ZSgpXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdzQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHlwZWRlZlxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlKC4uLnRlYXJkb3duczogQXJyYXk8VGVhcmRvd25Mb2dpYz4pIHtcbiAgICB0ZWFyZG93bnMuZm9yRWFjaCh0ZWFyZG93biA9PiB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHRlYXJkb3duKSk7XG4gIH1cblxufVxuIl19