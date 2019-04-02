import { BaseCrudService } from './base-crud.service';
import { HttpClient, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { LinkModel } from '../models/link-model';

// NOTES:
// TestBed only works on Injectable classes
// we are not testing http, we are testing the formation of the Request object
describe('BaseCrudService', () => {
  let url: string;
  let body: object;
  class MockHttpHandler extends HttpHandler {
    handle(req: HttpRequest<any>) {
      const event = new  Observable<HttpEvent<any>>();
      body = req.body;
      url = req.params === null ? req.url : req.urlWithParams;
      return event;
    }
  }

  class MockOAuthService extends OAuthService {
  }

  const http = new HttpClient(new MockHttpHandler());
  const oAuthService = new MockOAuthService(null, http, localStorage, null, {}, null, null);

  it('should be created', () => {
    const service = new BaseCrudService(http, oAuthService);
    expect(service).toBeTruthy();
  });

  it('getAll', () => {
    const service = new BaseCrudService(http, oAuthService);
    service.endpoint = 'http://localhost';
    const result = service.getAll({}).toPromise();
    expect(url).toEqual('http://localhost');

  });

  it('getAll - offset=0', () => {
    const service = new BaseCrudService(http, oAuthService);
    service.endpoint = 'http://localhost';
    const result = service.getAll({offset: 0}).toPromise();
    expect(url).toEqual('http://localhost?offset=0');
  });

  it('get 12345', () => {
    const service = new BaseCrudService(http, oAuthService);
    service.endpoint = 'http://localhost';
    const result = service.get(12345).toPromise();
    expect(url).toEqual('http://localhost/12345');
  });

  it('update 12345', () => {
    const service = new BaseCrudService(http, oAuthService);
    const model = new LinkModel({});
    model.rel = 'rel';
    model.contentType = '';
    model.description = '';
    model.href = '#';
    service.endpoint = 'http://localhost';
    const result = service.update(12345, model).toPromise();
    const expectedModel = body as LinkModel;
    expect(expectedModel.rel).toEqual(model.rel);
  });

  it('Create Object', () => {
    const service = new BaseCrudService(http, oAuthService);
    const model = new LinkModel({});
    model.rel = 'rel';
    model.contentType = '';
    model.description = '';
    model.href = '#';
    service.endpoint = 'http://localhost';
    const result = service.create(model).toPromise();
    const expectedModel = body as LinkModel;
    expect(expectedModel.rel).toEqual(model.rel);
  });

  it('Delete 12345', () => {
    const service = new BaseCrudService(http, oAuthService);
    service.endpoint = 'http://localhost';
    const result = service.delete(12345).toPromise();
    expect(url).toEqual('http://localhost/12345');
  });
});
