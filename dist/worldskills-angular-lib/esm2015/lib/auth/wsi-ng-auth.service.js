"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsiNgAuthService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const i0 = require("@angular/core");
const i1 = require("../worldskills-angular-lib.service");
const i2 = require("angular-oauth2-oidc");
const i3 = require("@angular/router");
const i4 = require("./wsi-auth.service");
// TODO: This class can be cleanup up and optimized
// TODO: Generate auth state
class WsiNgAuthService {
    constructor(wsi, oAuthService, router, service) {
        this.wsi = wsi;
        this.oAuthService = oAuthService;
        this.router = router;
        this.service = service;
        this.wsi.authConfigSubject.subscribe(next => {
            this.oAuthService.configure(next);
            this.currentUserSubject = new rxjs_1.BehaviorSubject(JSON.parse(sessionStorage.getItem('user.current')));
            this.currentUser = this.currentUserSubject.asObservable();
            this.oAuthService.setStorage(sessionStorage);
            this.oAuthService.tryLogin();
        });
    }
    keepAlive() {
        this.service.ping().subscribe(error => {
            console.log(error);
            this.logout();
        });
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    isLoggedIn() {
        return this.oAuthService.hasValidAccessToken();
    }
    loadUserProfile(success, failure) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.service.getLoggedInUser().subscribe(next => {
                if (next != null) {
                    sessionStorage.setItem('user.current', JSON.stringify(next));
                    this.currentUserSubject.next(next);
                }
            }, error => {
                this.currentUser = null;
                failure(error);
            }, () => success(this.currentUserSubject.value));
        });
    }
    login() {
        this.oAuthService.initImplicitFlow();
    }
    logout() {
        this.service.logout().subscribe(result => this.clearSession(), error => this.clearSession(), () => { });
    }
    clearSession() {
        sessionStorage.removeItem('nonce');
        sessionStorage.removeItem('user.current');
        sessionStorage.removeItem('access_token_stored_at');
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('token');
        this.oAuthService.logOut();
        this.currentUserSubject.next(null);
    }
}
exports.WsiNgAuthService = WsiNgAuthService;
WsiNgAuthService.ɵfac = function WsiNgAuthService_Factory(t) { return new (t || WsiNgAuthService)(i0.ɵɵinject(i1.WorldskillsAngularLibService), i0.ɵɵinject(i2.OAuthService), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.WsiAuthService)); };
WsiNgAuthService.ɵprov = i0.ɵɵdefineInjectable({ token: WsiNgAuthService, factory: WsiNgAuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WsiNgAuthService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.WorldskillsAngularLibService }, { type: i2.OAuthService }, { type: i3.Router }, { type: i4.WsiAuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3NpLW5nLWF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvYXV0aC93c2ktbmctYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx3Q0FBMkM7QUFDM0MsK0JBQW1EOzs7Ozs7QUFPbkQsbURBQW1EO0FBQ25ELDRCQUE0QjtBQUM1QixNQUdhLGdCQUFnQjtJQUkzQixZQUFvQixHQUFpQyxFQUFVLFlBQTBCLEVBQVUsTUFBYyxFQUM5RixPQUF1QjtRQUR0QixRQUFHLEdBQUgsR0FBRyxDQUE4QjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM5RixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FDbEMsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxzQkFBZSxDQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQzNCLEtBQUssQ0FBQyxFQUFFO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxVQUFVO1FBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVZLGVBQWUsQ0FBQyxPQUE2QixFQUFFLE9BQTZCOztZQUN2RixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FDdEMsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO29CQUNoQixjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzdELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3BDO1lBQ0gsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFO2dCQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakIsQ0FBQyxFQUNELEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQzdDLENBQUM7UUFDSixDQUFDO0tBQUE7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxNQUFNO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQzdCLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUM3QixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFDNUIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUNULENBQUM7SUFDSixDQUFDO0lBRVMsWUFBWTtRQUNwQixjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLGNBQWMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3BELGNBQWMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7QUF6RUgsNENBMEVDO2dGQXZFWSxnQkFBZ0I7d0RBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmYsTUFBTTtrREFFUCxnQkFBZ0I7Y0FINUIsaUJBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IHsgV29ybGRza2lsbHNBbmd1bGFyTGliU2VydmljZSB9IGZyb20gJy4uL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliLnNlcnZpY2UnO1xuaW1wb3J0IHsgV3NpQXV0aFNlcnZpY2UgfSBmcm9tICcuL3dzaS1hdXRoLnNlcnZpY2UnO1xuXG4vLyBUT0RPOiBUaGlzIGNsYXNzIGNhbiBiZSBjbGVhbnVwIHVwIGFuZCBvcHRpbWl6ZWRcbi8vIFRPRE86IEdlbmVyYXRlIGF1dGggc3RhdGVcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdzaU5nQXV0aFNlcnZpY2Uge1xuICBwcml2YXRlIGN1cnJlbnRVc2VyU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PFVzZXI+O1xuICBwdWJsaWMgY3VycmVudFVzZXI6IE9ic2VydmFibGU8VXNlcj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3c2k6IFdvcmxkc2tpbGxzQW5ndWxhckxpYlNlcnZpY2UsIHByaXZhdGUgb0F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHB1YmxpYyBzZXJ2aWNlOiBXc2lBdXRoU2VydmljZSkge1xuICAgIHRoaXMud3NpLmF1dGhDb25maWdTdWJqZWN0LnN1YnNjcmliZShcbiAgICAgIG5leHQgPT4ge1xuICAgICAgICB0aGlzLm9BdXRoU2VydmljZS5jb25maWd1cmUobmV4dCk7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyPihKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXIuY3VycmVudCcpKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5vQXV0aFNlcnZpY2Uuc2V0U3RvcmFnZShzZXNzaW9uU3RvcmFnZSk7XG4gICAgICAgIHRoaXMub0F1dGhTZXJ2aWNlLnRyeUxvZ2luKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBrZWVwQWxpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLnBpbmcoKS5zdWJzY3JpYmUoXG4gICAgICBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgdGhpcy5sb2dvdXQoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXJyZW50VXNlclZhbHVlKCk6IFVzZXIge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdC52YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9BdXRoU2VydmljZS5oYXNWYWxpZEFjY2Vzc1Rva2VuKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgbG9hZFVzZXJQcm9maWxlKHN1Y2Nlc3M6ICh1c2VyOiBVc2VyKSA9PiB2b2lkLCBmYWlsdXJlOiAoZXJyb3I6IGFueSkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuc2VydmljZS5nZXRMb2dnZWRJblVzZXIoKS5zdWJzY3JpYmUoXG4gICAgICBuZXh0ID0+IHtcbiAgICAgICAgaWYgKG5leHQgIT0gbnVsbCkge1xuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXIuY3VycmVudCcsIEpTT04uc3RyaW5naWZ5KG5leHQpKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdC5uZXh0KG5leHQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gbnVsbDtcbiAgICAgICAgZmFpbHVyZShlcnJvcik7XG4gICAgICB9LFxuICAgICAgKCkgPT4gc3VjY2Vzcyh0aGlzLmN1cnJlbnRVc2VyU3ViamVjdC52YWx1ZSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGxvZ2luKCk6IHZvaWQge1xuICAgIHRoaXMub0F1dGhTZXJ2aWNlLmluaXRJbXBsaWNpdEZsb3coKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmxvZ291dCgpLnN1YnNjcmliZShcbiAgICAgIHJlc3VsdCA9PiB0aGlzLmNsZWFyU2Vzc2lvbigpLFxuICAgICAgZXJyb3IgPT4gdGhpcy5jbGVhclNlc3Npb24oKSxcbiAgICAgICgpID0+IHt9XG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjbGVhclNlc3Npb24oKTogdm9pZCB7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnbm9uY2UnKTtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyLmN1cnJlbnQnKTtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NfdG9rZW5fc3RvcmVkX2F0Jyk7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICB0aGlzLm9BdXRoU2VydmljZS5sb2dPdXQoKTtcbiAgICB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdC5uZXh0KG51bGwpO1xuICB9XG59XG4iXX0=