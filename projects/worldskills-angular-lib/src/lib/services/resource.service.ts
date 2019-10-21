import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { UploadService } from './upload.service';
import { ResourceModel } from '../models/resource-model';
import { ModuleConfigService } from '../config/module-config.service';
import { ResourceUploadModel } from '../models/resource-upload.model';
import { ResourceSearchModel } from '../models/resource-search-model';
import { ResourcesContainerModel } from '../models/resources-container-model';
import { ResourceMetadataInfoModel } from '../models/resource-metadata-info-model';

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

    return this.http.get<ResourcesContainerModel>(this.url, { params });
  }

  public get(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.get<ResourceModel>(url);
  }

  public delete(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  public update(id: number, model: ResourceUploadModel) {
    const url = `${this.url}/${id}`;
    return this.http.put<ResourceModel>(url, model);
  }

  // this more or less saves the resource to the api
  // the client has control over weather it's a POST or a PUT
  public upload(data: ResourceUploadModel, file: any, method = 'POST', id = 0): HttpRequest<FormData> {
    const url = method === 'POST' ? this.url : `${this.url}/${id}`;
    const formData = new FormData();
    formData.append('key', 'value');
    formData.append('requestData', JSON.stringify(data));
    formData.append('file', file);

    return this.uploader.prepareUpload(url, formData, new HttpParams(), method);
  }

  /*
    Metadata methods
  */
  public listMetadata() {
    const url = `${this.url}/metadata`;
    return this.http.get<ResourceMetadataInfoModel[]>(url);
  }

  public getMetadata(id: number) {
    const url = `${this.url}/metadata/${id}`;
    return this.http.get<ResourceMetadataInfoModel>(url);
  }

  public createMetadata(model: ResourceMetadataInfoModel) {
    const url = `${this.url}/metadata`;
    return this.http.post<ResourceMetadataInfoModel>(url, model);
  }

  public updateMetadata(id: number, model: ResourceMetadataInfoModel) {
    const url = `${this.url}/metadata/${id}`;
    return this.http.put<ResourceMetadataInfoModel>(url, model);
  }

  public deleteMetadata(id: number) {
    const url = `${this.url}/metadata/${id}`;
    return this.http.delete(url);
  }
}
