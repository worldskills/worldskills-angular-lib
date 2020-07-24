import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { WsHttpEncoder } from '../encoders/ws-http.encoder';
import { GenericUtil } from '../util/generic.util';

@Injectable()
export class WsHttpInterceptor implements HttpInterceptor {

  constructor(private wsi: WorldskillsAngularLibService, private oAuthService: OAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const uriPatterns = GenericUtil.getValueOrDefault(this.wsi.httpConfig.authUriPatterns, []);
    const encoderPatterns = GenericUtil.getValueOrDefault(this.wsi.httpConfig.encoderUriPatterns, []);
    const authorize = uriPatterns.filter(s => req.url.match(s)).length > 0;
    const rewrite = encoderPatterns.filter(s => req.url.match(s)).length > 0;

    // append auth header
    if (authorize) {
      req = req.clone({
        headers: new HttpHeaders({
          Authorization: this.oAuthService.authorizationHeader(),
        })
      });
    }

    // rewrite parameters with encoder
    if (rewrite) {
      const params = new HttpParams({ encoder: new WsHttpEncoder(), fromString: req.params.toString() });
      req = req.clone({ params });
    }

    return next.handle(req);
  }
}
