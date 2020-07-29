"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsHttpInterceptor = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const ws_http_encoder_1 = require("../common/encoders/ws-http.encoder");
const generic_util_1 = require("../common/util/generic.util");
const i0 = require("@angular/core");
const i1 = require("../worldskills-angular-lib.service");
const i2 = require("angular-oauth2-oidc");
class WsHttpInterceptor {
    constructor(wsi, oAuthService) {
        this.wsi = wsi;
        this.oAuthService = oAuthService;
    }
    intercept(req, next) {
        const config = this.wsi.httpConfigSubject.getValue();
        const uriPatterns = generic_util_1.GenericUtil.getValueOrDefault(config.authUriPatterns, []);
        const encoderPatterns = generic_util_1.GenericUtil.getValueOrDefault(config.encoderUriPatterns, []);
        const authorize = uriPatterns.filter(s => req.url.match(s)).length > 0;
        const rewrite = encoderPatterns.filter(s => req.url.match(s)).length > 0;
        // append auth header
        if (authorize) {
            req = req.clone({
                headers: new http_1.HttpHeaders({
                    Authorization: this.oAuthService.authorizationHeader(),
                })
            });
        }
        // rewrite parameters with encoder
        if (rewrite) {
            const params = new http_1.HttpParams({ encoder: new ws_http_encoder_1.WsHttpEncoder(), fromString: req.params.toString() });
            req = req.clone({ params });
        }
        return next.handle(req);
    }
}
exports.WsHttpInterceptor = WsHttpInterceptor;
WsHttpInterceptor.ɵfac = function WsHttpInterceptor_Factory(t) { return new (t || WsHttpInterceptor)(i0.ɵɵinject(i1.WorldskillsAngularLibService), i0.ɵɵinject(i2.OAuthService)); };
WsHttpInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: WsHttpInterceptor, factory: WsHttpInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WsHttpInterceptor, [{
        type: core_1.Injectable
    }], function () { return [{ type: i1.WorldskillsAngularLibService }, { type: i2.OAuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3MtaHR0cC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3dvcmxkc2tpbGxzLWFuZ3VsYXItbGliL3NyYy9saWIvaW50ZXJjZXB0b3JzL3dzLWh0dHAuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQTJDO0FBQzNDLCtDQUFxSDtBQUlySCx3RUFBbUU7QUFDbkUsOERBQTBEOzs7O0FBRTFELE1BQ2EsaUJBQWlCO0lBRTVCLFlBQW9CLEdBQWlDLEVBQVUsWUFBMEI7UUFBckUsUUFBRyxHQUFILEdBQUcsQ0FBOEI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7SUFFOUYsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyRCxNQUFNLFdBQVcsR0FBRywwQkFBVyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUUsTUFBTSxlQUFlLEdBQUcsMEJBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckYsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN2RSxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXpFLHFCQUFxQjtRQUNyQixJQUFJLFNBQVMsRUFBRTtZQUNiLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUNkLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUM7b0JBQ3ZCLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFO2lCQUN2RCxDQUFDO2FBQ0gsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxNQUFNLE1BQU0sR0FBRyxJQUFJLGlCQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSwrQkFBYSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25HLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUM3QjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOztBQTVCSCw4Q0E2QkM7a0ZBNUJZLGlCQUFpQjt5REFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBRDdCLGlCQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFdvcmxkc2tpbGxzQW5ndWxhckxpYlNlcnZpY2UgfSBmcm9tICcuLi93b3JsZHNraWxscy1hbmd1bGFyLWxpYi5zZXJ2aWNlJztcbmltcG9ydCB7IFdzSHR0cEVuY29kZXIgfSBmcm9tICcuLi9jb21tb24vZW5jb2RlcnMvd3MtaHR0cC5lbmNvZGVyJztcbmltcG9ydCB7IEdlbmVyaWNVdGlsIH0gZnJvbSAnLi4vY29tbW9uL3V0aWwvZ2VuZXJpYy51dGlsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdzSHR0cEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdzaTogV29ybGRza2lsbHNBbmd1bGFyTGliU2VydmljZSwgcHJpdmF0ZSBvQXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSkgeyB9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy53c2kuaHR0cENvbmZpZ1N1YmplY3QuZ2V0VmFsdWUoKTtcbiAgICBjb25zdCB1cmlQYXR0ZXJucyA9IEdlbmVyaWNVdGlsLmdldFZhbHVlT3JEZWZhdWx0KGNvbmZpZy5hdXRoVXJpUGF0dGVybnMsIFtdKTtcbiAgICBjb25zdCBlbmNvZGVyUGF0dGVybnMgPSBHZW5lcmljVXRpbC5nZXRWYWx1ZU9yRGVmYXVsdChjb25maWcuZW5jb2RlclVyaVBhdHRlcm5zLCBbXSk7XG4gICAgY29uc3QgYXV0aG9yaXplID0gdXJpUGF0dGVybnMuZmlsdGVyKHMgPT4gcmVxLnVybC5tYXRjaChzKSkubGVuZ3RoID4gMDtcbiAgICBjb25zdCByZXdyaXRlID0gZW5jb2RlclBhdHRlcm5zLmZpbHRlcihzID0+IHJlcS51cmwubWF0Y2gocykpLmxlbmd0aCA+IDA7XG5cbiAgICAvLyBhcHBlbmQgYXV0aCBoZWFkZXJcbiAgICBpZiAoYXV0aG9yaXplKSB7XG4gICAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IHRoaXMub0F1dGhTZXJ2aWNlLmF1dGhvcml6YXRpb25IZWFkZXIoKSxcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHJld3JpdGUgcGFyYW1ldGVycyB3aXRoIGVuY29kZXJcbiAgICBpZiAocmV3cml0ZSkge1xuICAgICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBlbmNvZGVyOiBuZXcgV3NIdHRwRW5jb2RlcigpLCBmcm9tU3RyaW5nOiByZXEucGFyYW1zLnRvU3RyaW5nKCkgfSk7XG4gICAgICByZXEgPSByZXEuY2xvbmUoeyBwYXJhbXMgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gIH1cbn1cbiJdfQ==