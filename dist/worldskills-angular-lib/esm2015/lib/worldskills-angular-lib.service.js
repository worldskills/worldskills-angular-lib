"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldskillsAngularLibService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const i0 = require("@angular/core");
class WorldskillsAngularLibService {
    constructor() {
        // default configuration
        this.appConfigSubject = new rxjs_1.BehaviorSubject({ notAuthorizedRoute: ['/not-authorized'] });
        this.httpConfigSubject = new rxjs_1.BehaviorSubject({ encoderUriPatterns: [], authUriPatterns: [] });
        this.serviceConfigSubject = new rxjs_1.BehaviorSubject({ appCode: [], apiEndpoint: '' });
        this.authConfigSubject = new rxjs_1.BehaviorSubject({});
    }
}
exports.WorldskillsAngularLibService = WorldskillsAngularLibService;
WorldskillsAngularLibService.ɵfac = function WorldskillsAngularLibService_Factory(t) { return new (t || WorldskillsAngularLibService)(); };
WorldskillsAngularLibService.ɵprov = i0.ɵɵdefineInjectable({ token: WorldskillsAngularLibService, factory: WorldskillsAngularLibService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WorldskillsAngularLibService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ybGRza2lsbHMtYW5ndWxhci1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvd29ybGRza2lsbHMtYW5ndWxhci1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBMkM7QUFLM0MsK0JBQXVDOztBQUV2QyxNQUdhLDRCQUE0QjtJQVF2QztRQUNFLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxzQkFBZSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxzQkFBZSxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLHNCQUFlLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLHNCQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7QUFqQkgsb0VBa0JDO3dHQWZZLDRCQUE0QjtvRUFBNUIsNEJBQTRCLFdBQTVCLDRCQUE0QixtQkFGM0IsTUFBTTtrREFFUCw0QkFBNEI7Y0FIeEMsaUJBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgSHR0cENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2h0dHAuY29uZmlnJztcbmltcG9ydCB7IFNlcnZpY2VDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zZXJ2aWNlLmNvbmZpZyc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgV29ybGRza2lsbHNBbmd1bGFyTGliU2VydmljZSB7XG5cbiAgLy8gYmVoYXZpb3VyIHN1YmplY3RzIHRvIGxpc3RlbiBmb3IgY2NvbmZpZyBjaGFuZ2VcbiAgcHVibGljIGFwcENvbmZpZ1N1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxBcHBDb25maWc+O1xuICBwdWJsaWMgaHR0cENvbmZpZ1N1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxIdHRwQ29uZmlnPjtcbiAgcHVibGljIHNlcnZpY2VDb25maWdTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8U2VydmljZUNvbmZpZz47XG4gIHB1YmxpYyBhdXRoQ29uZmlnU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PEF1dGhDb25maWc+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICAgIHRoaXMuYXBwQ29uZmlnU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QoeyBub3RBdXRob3JpemVkUm91dGU6IFsnL25vdC1hdXRob3JpemVkJ10gfSk7XG4gICAgdGhpcy5odHRwQ29uZmlnU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QoeyBlbmNvZGVyVXJpUGF0dGVybnM6IFtdLCBhdXRoVXJpUGF0dGVybnM6IFtdIH0pO1xuICAgIHRoaXMuc2VydmljZUNvbmZpZ1N1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHsgYXBwQ29kZTogW10sIGFwaUVuZHBvaW50OiAnJ30pO1xuICAgIHRoaXMuYXV0aENvbmZpZ1N1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcbiAgfVxufVxuIl19