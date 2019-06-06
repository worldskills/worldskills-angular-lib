import { HttpClient } from '@angular/common/http';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
import { OAuthService } from 'angular-oauth2-oidc';


export class BaseCrudService {
  endpoint: string;

  public serializeData = true;

  constructor(protected http: HttpClient, protected oAuthService: OAuthService) {
  }

  public serialize(model: object): any {
    const converter = new JsonConvert();
    converter.valueCheckingMode = ValueCheckingMode.ALLOW_NULL && ValueCheckingMode.ALLOW_OBJECT_NULL;
    return converter.serialize(model);
  }

  public getAll(params: {}) {
    return this.http.get(this.endpoint, {
      params
    });
  }

  public get(id: any) {
    const ep = this.endpoint + '/' + id;
    return this.http.get(ep, {});
  }

  public update(id: any, model: object) {
    const ep = this.endpoint + '/' + id.toString();
    const data = this.serializeData ? this.serialize(model) : model;
    return this.http.put(ep, data, {});
  }

  public create(model: object) {
    const data = this.serializeData ? this.serialize(model) : model;
    return this.http.post(this.endpoint, data, {});
  }

  public delete(id: any) {
    const ep = this.endpoint + '/' + id;

    return this.http.delete(ep, {});
  }
}
