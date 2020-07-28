import { Injectable } from '@angular/core';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { UploadService } from '../common/services/upload.service';
import { Resource } from './models/resource';
import { ResourceSearch } from './models/resource-search';
import { HttpUtil } from '../common/util/http.util';
import { ResourceType } from './models/resource-type';
import { Observable } from 'rxjs';
import { ResourceMetadataInfo } from './models/resource-metadata-info';
import { ResourceContainer } from './models/resource-container';
import { ResourceUpload } from './models/resourcec-upload';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private url: string;

  constructor(private wsi: WorldskillsAngularLibService, private http: HttpClient, public uploader: UploadService) {
    this.wsi.serviceConfigSubject.subscribe(
      next => {
        this.url = next.apiEndpoint + '/resources';
      }
    );
  }

  /*
    ResourceResource
  */

  // allow a client to user submit an object directly or use a managed object
  public search(filter: ResourceSearch): Observable<ResourceContainer> {
    const params = HttpUtil.objectToParams(filter);
    return this.http.get<ResourceContainer>(this.url, { params });
  }

  public get(id: number): Observable<Resource> {
    const url = `${this.url}/${id}`;
    return this.http.get<Resource>(url);
  }

  public delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  public update(id: number, model: ResourceUpload): Observable<Resource> {
    const url = `${this.url}/${id}`;
    return this.http.put<Resource>(url, model);
  }

  // this more or less saves the resource to the api
  // the client has control over weather it's a POST or a PUT
  public upload(data: ResourceUpload, file: any, method = 'POST', id = 0): HttpRequest<FormData> {
    const url = method === 'POST' ? this.url : `${this.url}/${id}`;
    const formData = new FormData();
    formData.append('key', 'value');
    formData.append('requestData', JSON.stringify(data));
    formData.append('file', file);

    return this.uploader.prepareUpload(url, formData, new HttpParams(), method);
  }

  /* /types
    ResourceTypeResource
  */

  public listTypes(): Observable<ResourceType[]> {
    const url = `${this.url}/types`;
    return this.http.get<ResourceType[]>(url);
  }

  public getType(id: number): Observable<ResourceType> {
    const url = `${this.url}/types/${id}`;
    return this.http.get<ResourceType>(url);
  }

  /* /metadata
    MetadataResource
  */
  public listMetadata(): Observable<ResourceMetadataInfo[]> {
    const url = `${this.url}/metadata`;
    return this.http.get<ResourceMetadataInfo[]>(url);
  }

  public getMetadata(id: number): Observable<ResourceMetadataInfo> {
    const url = `${this.url}/metadata/${id}`;
    return this.http.get<ResourceMetadataInfo>(url);
  }

  public createMetadata(model: ResourceMetadataInfo): Observable<ResourceMetadataInfo> {
    const url = `${this.url}/metadata`;
    return this.http.post<ResourceMetadataInfo>(url, model);
  }

  public updateMetadata(id: number, model: ResourceMetadataInfo): Observable<ResourceMetadataInfo> {
    const url = `${this.url}/metadata/${id}`;
    return this.http.put<ResourceMetadataInfo>(url, model);
  }

  public deleteMetadata(id: number): Observable<any> {
    const url = `${this.url}/metadata/${id}`;
    return this.http.delete(url);
  }
}
