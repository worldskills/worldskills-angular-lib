"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppAuthGuard = void 0;
const core_1 = require("@angular/core");
const generic_util_1 = require("../common/util/generic.util");
const i0 = require("@angular/core");
const i1 = require("./wsi-ng-auth.service");
const i2 = require("../worldskills-angular-lib.service");
class AppAuthGuard {
    constructor(auth, wsi, router) {
        this.auth = auth;
        this.wsi = wsi;
        this.router = router;
    }
    canActivate(route, state) {
        const user = sessionStorage.getItem('user.current');
        // ensure the user session exists
        if (generic_util_1.GenericUtil.isNullOrUndefined(user)) {
            return this.login(state);
        }
        const userModel = JSON.parse(user);
        // ensure the user model is valid
        if (generic_util_1.GenericUtil.isNullOrUndefined(userModel)) {
            return this.login(state);
        }
        const roles = route.data.roles;
        if (generic_util_1.GenericUtil.isNullOrUndefined(roles)) {
            return false;
        }
        const userRoles = userModel.roles
            .filter(x => roles.findIndex(y => y.appCode === x.role_application.application_code && y.name === x.name) !== -1);
        return userRoles.length > 0;
    }
    login(state) {
        sessionStorage.setItem('returnUrl', state.url);
        this.auth.login();
        return false;
    }
}
exports.AppAuthGuard = AppAuthGuard;
AppAuthGuard.ɵfac = function AppAuthGuard_Factory(t) { i0.ɵɵinvalidFactory(); };
AppAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ token: AppAuthGuard, factory: AppAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppAuthGuard, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.WsiNgAuthService }, { type: i2.WorldskillsAngularLibService }, { type: undefined }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWF1dGguZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3JsZHNraWxscy1hbmd1bGFyLWxpYi9zcmMvbGliL2F1dGgvYXBwLWF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQTJDO0FBTzNDLDhEQUEwRDs7OztBQUUxRCxNQUdhLFlBQVk7SUFDdkIsWUFBc0IsSUFBc0IsRUFBWSxHQUFpQyxFQUFZLE1BQWE7UUFBNUYsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUE4QjtRQUFZLFdBQU0sR0FBTixNQUFNLENBQU87SUFBSSxDQUFDO0lBQ3ZILFdBQVcsQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBRWpFLE1BQU0sSUFBSSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFcEQsaUNBQWlDO1FBQ2pDLElBQUksMEJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBUyxDQUFDO1FBRTNDLGlDQUFpQztRQUNqQyxJQUFJLDBCQUFXLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO1FBRUQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUEwQixDQUFDO1FBRXBELElBQUksMEJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUs7YUFDOUIsTUFBTSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQ1gsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNwRyxDQUFDO1FBRUosT0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQTBCO1FBQzlCLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7QUF2Q0gsb0NBd0NDOztvREFyQ1ksWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTtrREFFUCxZQUFZO2NBSHhCLGlCQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgV29ybGRza2lsbHNBbmd1bGFyTGliU2VydmljZSB9IGZyb20gJy4uL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliLnNlcnZpY2UnO1xuaW1wb3J0IHsgV3NpTmdBdXRoU2VydmljZSB9IGZyb20gJy4vd3NpLW5nLWF1dGguc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoR3VhcmRBY2Nlc3MgfSBmcm9tICcuL21vZGVscy9hdXRoLWd1YXJkLWFjY2Vzcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgeyBHZW5lcmljVXRpbCB9IGZyb20gJy4uL2NvbW1vbi91dGlsL2dlbmVyaWMudXRpbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFwcEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGF1dGg6IFdzaU5nQXV0aFNlcnZpY2UsIHByb3RlY3RlZCB3c2k6IFdvcmxkc2tpbGxzQW5ndWxhckxpYlNlcnZpY2UsIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlKSB7IH1cbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KVxuICAgICAgOiBib29sZWFuIHwgVXJsVHJlZSB8IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgICAgY29uc3QgdXNlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXIuY3VycmVudCcpO1xuXG4gICAgICAvLyBlbnN1cmUgdGhlIHVzZXIgc2Vzc2lvbiBleGlzdHNcbiAgICAgIGlmIChHZW5lcmljVXRpbC5pc051bGxPclVuZGVmaW5lZCh1c2VyKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmxvZ2luKHN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXNlck1vZGVsID0gSlNPTi5wYXJzZSh1c2VyKSBhcyBVc2VyO1xuXG4gICAgICAvLyBlbnN1cmUgdGhlIHVzZXIgbW9kZWwgaXMgdmFsaWRcbiAgICAgIGlmIChHZW5lcmljVXRpbC5pc051bGxPclVuZGVmaW5lZCh1c2VyTW9kZWwpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubG9naW4oc3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb2xlcyA9IHJvdXRlLmRhdGEucm9sZXMgYXMgQXV0aEd1YXJkQWNjZXNzW107XG5cbiAgICAgIGlmIChHZW5lcmljVXRpbC5pc051bGxPclVuZGVmaW5lZChyb2xlcykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1c2VyUm9sZXMgPSB1c2VyTW9kZWwucm9sZXNcbiAgICAgICAgLmZpbHRlciggeCA9PlxuICAgICAgICAgIHJvbGVzLmZpbmRJbmRleCh5ID0+IHkuYXBwQ29kZSA9PT0geC5yb2xlX2FwcGxpY2F0aW9uLmFwcGxpY2F0aW9uX2NvZGUgJiYgeS5uYW1lID09PSB4Lm5hbWUpICE9PSAtMVxuICAgICAgICApO1xuXG4gICAgICByZXR1cm4gdXNlclJvbGVzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBsb2dpbihzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JldHVyblVybCcsIHN0YXRlLnVybCk7XG4gICAgdGhpcy5hdXRoLmxvZ2luKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=