import { HttpClient } from '@angular/common/http';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
import { OAuthService } from 'angular-oauth2-oidc';
import { BaseService } from './base.service';


export class BaseCrudService extends BaseService {
  endpoint: string;

  constructor(protected http: HttpClient, protected oAuthService: OAuthService) {
    super(http, oAuthService);
  }

  public getAll() {
    const headers = this.getDefaultHeaders();
    return this.http.get(this.endpoint, {
      headers
    });
  }

  public get(id: any) {
    const headers = this.getDefaultHeaders();
    const ep = this.endpoint + '/' + id;
    return this.http.get(ep, {
      headers
    });
  }

  public async update(id: any, model: object) {
    const ep = this.endpoint + '/' + id.toString();
    const headers = this.getDefaultHeaders();

    const converter = new JsonConvert();
    converter.valueCheckingMode = ValueCheckingMode.ALLOW_NULL && ValueCheckingMode.ALLOW_OBJECT_NULL;
    const data = converter.serialize(model);

    return this.http.put(ep, data, {
      headers,
    });
  }

  public create(model: object) {
    const headers = this.getDefaultHeaders();
    const converter = new JsonConvert();
    converter.valueCheckingMode = ValueCheckingMode.ALLOW_NULL && ValueCheckingMode.ALLOW_OBJECT_NULL;
    const data = converter.serialize(model);

    return this.http.post(this.endpoint, data, {
      headers
    });
  }

  public delete(id: any) {
    const headers = this.getDefaultHeaders();
    const ep = this.endpoint + '/' + id;

    return this.http.delete(ep, {
      headers
    });
  }
}
