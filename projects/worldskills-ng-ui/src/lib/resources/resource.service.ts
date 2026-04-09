import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UI_LIBRARY_CONFIG } from '../ui-lib-config';
import { Resource } from './models/resource';
import { ResourceContainer } from './models/resource-container';
import { ResourceSearch } from './models/resource-search';
import { ResourceType } from './models/resource-type';
import { ResourceMetadataInfo } from './models/resource-metadata-info';
import { ResourceUpload } from './models/resource-upload';

@Injectable({ providedIn: 'root' })
export class ResourceService {
  private http = inject(HttpClient);
  private get url(): string {
    return (inject(UI_LIBRARY_CONFIG).api?.apiEndpoint ?? '') + '/resources';
  }

  search(filter: ResourceSearch): Observable<ResourceContainer> {
    return this.http.get<ResourceContainer>(this.url, { params: this.buildParams(filter) });
  }

  get(id: number): Observable<Resource> {
    return this.http.get<Resource>(`${this.url}/${id}`);
  }

  update(id: number, model: ResourceUpload): Observable<Resource> {
    return this.http.put<Resource>(`${this.url}/${id}`, model);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  upload(data: ResourceUpload, file: File, method = 'POST', id = 0): Observable<Resource> {
    const url = method === 'POST' ? this.url : `${this.url}/${id}`;
    const formData = new FormData();
    formData.append('requestData', JSON.stringify(data));
    formData.append('file', file);
    return method === 'POST'
      ? this.http.post<Resource>(url, formData)
      : this.http.put<Resource>(url, formData);
  }

  listTypes(): Observable<ResourceType[]> {
    return this.http.get<ResourceType[]>(`${this.url}/types`);
  }

  getType(id: number): Observable<ResourceType> {
    return this.http.get<ResourceType>(`${this.url}/types/${id}`);
  }

  listMetadata(): Observable<ResourceMetadataInfo[]> {
    return this.http.get<ResourceMetadataInfo[]>(`${this.url}/metadata`);
  }

  getMetadata(id: number): Observable<ResourceMetadataInfo> {
    return this.http.get<ResourceMetadataInfo>(`${this.url}/metadata/${id}`);
  }

  createMetadata(model: ResourceMetadataInfo): Observable<ResourceMetadataInfo> {
    return this.http.post<ResourceMetadataInfo>(`${this.url}/metadata`, model);
  }

  updateMetadata(id: number, model: ResourceMetadataInfo): Observable<ResourceMetadataInfo> {
    return this.http.put<ResourceMetadataInfo>(`${this.url}/metadata/${id}`, model);
  }

  deleteMetadata(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/metadata/${id}`);
  }

  downloadResources(resourceIds: number[]): Observable<ArrayBuffer> {
    const unique = [...new Set(resourceIds)];
    let params = new HttpParams();
    unique.forEach(id => params = params.append('resource_ids', id.toString()));
    return this.http.get(`${this.url}/download/resources`, { params, responseType: 'arraybuffer' });
  }

  private buildParams(filter: ResourceSearch): HttpParams {
    let params = new HttpParams();
    (Object.entries(filter) as [string, unknown][]).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      if (Array.isArray(value)) {
        value.forEach(v => params = params.append(key, String(v)));
      } else {
        params = params.set(key, String(value));
      }
    });
    return params;
  }
}
