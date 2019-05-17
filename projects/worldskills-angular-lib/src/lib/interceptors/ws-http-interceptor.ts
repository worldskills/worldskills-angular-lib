import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpParams, HttpParameterCodec, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WsHttpEncoder } from '../encoders/ws-http-encoder';
import { ModuleConfigService } from '../config/module-config.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class WsHttpInterceptor implements HttpInterceptor {

  constructor(protected moduleConfig: ModuleConfigService, private oAuthService: OAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authorize = this.moduleConfig.wsHttpConfigConfig.authUriPatterns.filter(s => req.url.match(s)).length > 0;
    const rewrite = this.moduleConfig.wsHttpConfigConfig.encoderUriPatterns.filter(s => req.url.match(s)).length > 0;

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
