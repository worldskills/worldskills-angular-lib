import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { UploadService } from './upload.service';
import { ResourceModel } from '../models/resource-model';
import { ModuleConfigService } from '../config/module-config.service';
import { ResourceUploadModel } from '../models/resource-upload.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private url: string;

  constructor(private config: ModuleConfigService, private http: HttpClient, public uploader: UploadService) {
    this.url = this.config.serviceConfig.resourceApiPath;
  }

  public get(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.get<ResourceModel>(url);
  }

  public delete(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  public upload(data: ResourceUploadModel, file: any): HttpRequest<FormData> {
    const formData = new FormData();
    formData.append('key', 'value');
    formData.append('requestData', JSON.stringify(data));
    formData.append('file', file);

    return this.uploader.prepareUpload(this.url, formData, new HttpParams());
  }
}
