import { HttpClient } from '@angular/common/http';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
import { OAuthService } from 'angular-oauth2-oidc';
import { BaseService } from './base.service';


export class BaseCrudService extends BaseService {
  endpoint: string;

  constructor(protected http: HttpClient, protected oAuthService: OAuthService) {
    super(http, oAuthService);
  }

  public async getAll() {
    const headers = this.getDefaultHeaders();
    return await this.http.get(this.endpoint, {
      headers
    }).toPromise();
  }

  public async get(id: any) {
    const headers = this.getDefaultHeaders();
    const ep = this.endpoint + '/' + id;
    return await this.http.get(ep, {
      headers
    }).toPromise();
  }

  public async update(id: any, model: object) {
    const ep = this.endpoint + '/' + id.toString();
    const headers = this.getDefaultHeaders();

    const converter = new JsonConvert();
    converter.valueCheckingMode = ValueCheckingMode.ALLOW_NULL && ValueCheckingMode.ALLOW_OBJECT_NULL;
    const data = converter.serialize(model);

    return await this.http.put(ep, data, {
      headers,
    }).toPromise();
  }

  public async create(model: object) {
    const headers = this.getDefaultHeaders();
    const converter = new JsonConvert();
    converter.valueCheckingMode = ValueCheckingMode.ALLOW_NULL && ValueCheckingMode.ALLOW_OBJECT_NULL;
    const data = converter.serialize(model);

    return await this.http.post(this.endpoint, data, {
      headers
    }).toPromise();
  }

  public async delete(id: any) {
    const headers = this.getDefaultHeaders();
    const ep = this.endpoint + '/' + id;

    return await this.http.delete(ep, {
      headers
    }).toPromise();
  }
}
