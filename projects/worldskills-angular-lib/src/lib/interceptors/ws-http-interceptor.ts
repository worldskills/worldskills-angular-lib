import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpParams, HttpParameterCodec } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WsHttpEncoder } from '../encoders/ws-http-encoder';
import { ModuleConfigService } from '../config/module-config.service';

@Injectable()
export class WsHttpInterceptor implements HttpInterceptor {

  constructor(protected moduleConfig: ModuleConfigService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const rewrite =  this.moduleConfig.encoderConfig.uriPatterns.filter(s => req.url.match(s)).length > 0;

    if (rewrite) {
      const params = new HttpParams({encoder: new WsHttpEncoder(), fromString: req.params.toString()});
      return next.handle(req.clone({params}));
    }

    return next.handle(req);
  }
}
