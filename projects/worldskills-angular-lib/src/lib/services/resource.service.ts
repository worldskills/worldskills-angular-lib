import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { UploadService } from './upload.service';
import { ResourceModel } from '../models/resource-model';
import { ModuleConfigService } from '../config/module-config.service';
import { ResourceUploadModel } from '../models/resource-upload.model';
import { ResourceSearchModel } from '../models/resource-search-model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private url: string;

  constructor(private config: ModuleConfigService, private http: HttpClient, public uploader: UploadService) {
    this.url = this.config.serviceConfig.resourceApiPath;
  }

  // allow a client to user submit an object directly or use a managed object
  public search(params: ResourceSearchModel | any) {
    if (params instanceof ResourceSearchModel) {
      params = (params as ResourceSearchModel).toParams();
    }

    return this.http.get<ResourceModel>(this.url, { params });
  }

  public get(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.get<ResourceModel>(url);
  }

  public delete(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  // this more or less saves the resource to the api
  // the client has control over weather it's a POST or a PUT
  public upload(data: ResourceUploadModel, file: any, method = 'POST'): HttpRequest<FormData> {
    const formData = new FormData();
    formData.append('key', 'value');
    formData.append('requestData', JSON.stringify(data));
    formData.append('file', file);

    return this.uploader.prepareUpload(this.url, formData, new HttpParams(), method);
  }
}