"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsiAuthService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const http_util_1 = require("../common/util/http.util");
const i0 = require("@angular/core");
const i1 = require("../worldskills-angular-lib.service");
const i2 = require("@angular/common/http");
const i3 = require("angular-oauth2-oidc");
class WsiAuthService {
    constructor(wsi, http, oAuthService) {
        this.wsi = wsi;
        this.http = http;
        this.oAuthService = oAuthService;
        // listen for config changes
        this.wsi.serviceConfigSubject.subscribe(next => {
            this.appCode = next.appCode;
            this.endpoint = next.apiEndpoint + '/auth';
        });
    }
    ping() {
        const url = `${this.endpoint}/ping`;
        return this.http.get(url, {});
    }
    getLoggedInUser(showChildRoles = false) {
        let params = new http_1.HttpParams();
        params = params.set('show_child_roles', String(showChildRoles));
        this.appCode.forEach(code => {
            if (params.has('app_code')) {
                params = params.append('app_code', String(code));
            }
            else {
                params = params.set('app_code', String(code));
            }
        });
        const url = `${this.endpoint}/users/loggedIn`;
        return this.http.get(url, { params });
    }
    logout() {
        const authUrl = `${this.endpoint}/sessions/logout`;
        return this.http.post(authUrl, {});
    }
    /*
      User
    */
    listUsers(filter) {
        const params = http_util_1.HttpUtil.objectToParams(filter);
        const url = `${this.endpoint}/users`;
        return this.http.get(url, { params });
    }
    getUser(id) {
        const url = `${this.endpoint}/users/${id}`;
        return this.http.get(url);
    }
    getUserByPerson(id) {
        const url = `${this.endpoint}/users/person/${id}`;
        return this.http.get(url);
    }
    /*
      User Roles
    */
    addRole(userId, roleId) {
        const url = `${this.endpoint}/users/${userId}/roles`;
        const data = { role_id: roleId };
        return this.http.post(url, data);
    }
    addRoleWithEntity(userId, roleId, entityId) {
        const url = `${this.endpoint}/users/${userId}/roles`;
        const data = { role_id: roleId, ws_entity_id: entityId };
        return this.http.post(url, data);
    }
    deleteRole(userId, roleId) {
        const url = `${this.endpoint}/users/${userId}/roles/${roleId}`;
        return this.http.delete(url);
    }
    deleteRoleWithEntity(userId, roleId, entityId) {
        const url = `${this.endpoint}/users/${userId}/roles/${roleId}?ws_entity_id=${entityId}`;
        return this.http.delete(url);
    }
}
exports.WsiAuthService = WsiAuthService;
WsiAuthService.ɵfac = function WsiAuthService_Factory(t) { return new (t || WsiAuthService)(i0.ɵɵinject(i1.WorldskillsAngularLibService), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i3.OAuthService)); };
WsiAuthService.ɵprov = i0.ɵɵdefineInjectable({ token: WsiAuthService, factory: WsiAuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WsiAuthService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.WorldskillsAngularLibService }, { type: i2.HttpClient }, { type: i3.OAuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3NpLWF1dGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvYXV0aC93c2ktYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUEyQztBQUczQywrQ0FBOEQ7QUFNOUQsd0RBQW9EOzs7OztBQUVwRCxNQUdhLGNBQWM7SUFJekIsWUFBc0IsR0FBaUMsRUFBWSxJQUFnQixFQUFZLFlBQTBCO1FBQW5HLFFBQUcsR0FBSCxHQUFHLENBQThCO1FBQVksU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFZLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ3ZILDRCQUE0QjtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FDckMsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUM3QyxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxJQUFJO1FBQ1QsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxPQUFPLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLGVBQWUsQ0FBQyxpQkFBMEIsS0FBSztRQUNwRCxJQUFJLE1BQU0sR0FBRyxJQUFJLGlCQUFVLEVBQUUsQ0FBQztRQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZ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UUFBUSxFQUFFLENBQUM7UUFDeEYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDOztBQXBGSCx3Q0FxRkM7NEVBbEZZLGNBQWM7c0RBQWQsY0FBYyxXQUFkLGNBQWMsbUJBRmIsTUFBTTtrREFFUCxjQUFjO2NBSDFCLGlCQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcbmltcG9ydCB7IFdvcmxkc2tpbGxzQW5ndWxhckxpYlNlcnZpY2UgfSBmcm9tICcuLi93b3JsZHNraWxscy1hbmd1bGFyLWxpYi5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnLi9tb2RlbHMvcm9sZSc7XG5pbXBvcnQgeyBVc2VyTGlzdCB9IGZyb20gJy4vbW9kZWxzL3VzZXItbGlzdCc7XG5pbXBvcnQgeyBHZXRVc2Vyc1BhcmFtcyB9IGZyb20gJy4vbW9kZWxzL2dldC11c2VyLXBhcmFtcyc7XG5pbXBvcnQgeyBIdHRwVXRpbCB9IGZyb20gJy4uL2NvbW1vbi91dGlsL2h0dHAudXRpbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdzaUF1dGhTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGFwcENvZGU6IG51bWJlcltdO1xuICBwcm90ZWN0ZWQgZW5kcG9pbnQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgd3NpOiBXb3JsZHNraWxsc0FuZ3VsYXJMaWJTZXJ2aWNlLCBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCwgcHJvdGVjdGVkIG9BdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlKSB7XG4gICAgLy8gbGlzdGVuIGZvciBjb25maWcgY2hhbmdlc1xuICAgIHRoaXMud3NpLnNlcnZpY2VDb25maWdTdWJqZWN0LnN1YnNjcmliZShcbiAgICAgIG5leHQgPT4ge1xuICAgICAgICB0aGlzLmFwcENvZGUgPSBuZXh0LmFwcENvZGU7XG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSBuZXh0LmFwaUVuZHBvaW50ICsgJy9hdXRoJztcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIHBpbmcoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmVuZHBvaW50fS9waW5nYDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIHt9ICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TG9nZ2VkSW5Vc2VyKHNob3dDaGlsZFJvbGVzOiBib29sZWFuID0gZmFsc2UpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdzaG93X2NoaWxkX3JvbGVzJywgU3RyaW5nKHNob3dDaGlsZFJvbGVzKSk7XG4gICAgdGhpcy5hcHBDb2RlLmZvckVhY2goY29kZSA9PiB7XG4gICAgICBpZiAocGFyYW1zLmhhcygnYXBwX2NvZGUnKSkge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdhcHBfY29kZScsIFN0cmluZyhjb2RlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdhcHBfY29kZScsIFN0cmluZyhjb2RlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5lbmRwb2ludH0vdXNlcnMvbG9nZ2VkSW5gO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXI+KHVybCwge3BhcmFtc30pO1xuICB9XG5cbiAgcHVibGljIGxvZ291dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGF1dGhVcmwgPSBgJHt0aGlzLmVuZHBvaW50fS9zZXNzaW9ucy9sb2dvdXRgO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChhdXRoVXJsLCB7fSk7XG5cbiAgfVxuXG4gIC8qXG4gICAgVXNlclxuICAqL1xuXG4gIHB1YmxpYyBsaXN0VXNlcnMoZmlsdGVyOiBHZXRVc2Vyc1BhcmFtcyk6IE9ic2VydmFibGU8VXNlckxpc3Q+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBIdHRwVXRpbC5vYmplY3RUb1BhcmFtcyhmaWx0ZXIpO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuZW5kcG9pbnR9L3VzZXJzYDtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxVc2VyTGlzdD4odXJsLCB7cGFyYW1zfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VXNlcihpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5lbmRwb2ludH0vdXNlcnMvJHtpZH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXI+KHVybCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VXNlckJ5UGVyc29uKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmVuZHBvaW50fS91c2Vycy9wZXJzb24vJHtpZH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXI+KHVybCk7XG4gIH1cblxuICAvKlxuICAgIFVzZXIgUm9sZXNcbiAgKi9cblxuICBwdWJsaWMgYWRkUm9sZSh1c2VySWQ6IG51bWJlciwgcm9sZUlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuZW5kcG9pbnR9L3VzZXJzLyR7dXNlcklkfS9yb2xlc2A7XG4gICAgY29uc3QgZGF0YSA9IHsgcm9sZV9pZDogcm9sZUlkIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZGF0YSk7XG4gIH1cbiAgcHVibGljIGFkZFJvbGVXaXRoRW50aXR5KHVzZXJJZDogbnVtYmVyLCByb2xlSWQ6IG51bWJlciwgZW50aXR5SWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5lbmRwb2ludH0vdXNlcnMvJHt1c2VySWR9L3JvbGVzYDtcbiAgICBjb25zdCBkYXRhID0geyByb2xlX2lkOiByb2xlSWQsIHdzX2VudGl0eV9pZDogZW50aXR5SWQgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVSb2xlKHVzZXJJZDogbnVtYmVyLCByb2xlSWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5lbmRwb2ludH0vdXNlcnMvJHt1c2VySWR9L3JvbGVzLyR7cm9sZUlkfWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsKTtcbiAgfVxuICBwdWJsaWMgZGVsZXRlUm9sZVdpdGhFbnRpdHkodXNlcklkOiBudW1iZXIsIHJvbGVJZDogbnVtYmVyLCBlbnRpdHlJZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmVuZHBvaW50fS91c2Vycy8ke3VzZXJJZH0vcm9sZXMvJHtyb2xlSWR9P3dzX2VudGl0eV9pZD0ke2VudGl0eUlkfWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsKTtcbiAgfVxufVxuIl19