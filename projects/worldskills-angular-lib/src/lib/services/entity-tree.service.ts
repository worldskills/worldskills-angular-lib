import {Injectable} from '@angular/core';
import {ModuleConfigService} from '../config/module-config.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {EntityTreeListView} from '../models/auth/entity-tree-view';

export interface EntityFetchParams {
  limit?: number;
  offset?: number;
  depth?: number;
  member_of?: number;
  name?: string;
  role?: string;
  roleApp?: number;
  sort?: 'name' | 'name_desc';
}

@Injectable({
  providedIn: 'root'
})
export class EntityTreeService {

  public endpoint: string;
  public subject: BehaviorSubject<EntityTreeListView> = new BehaviorSubject<EntityTreeListView>(null);

  constructor(protected configService: ModuleConfigService, protected http: HttpClient) {
    this.endpoint = `${configService.serviceConfig.apiEndpoint}/auth/ws_entities`;
  }

  public list(params: EntityFetchParams = {}, updateSubject = true): Observable<EntityTreeListView> {
    let httpParams = new HttpParams();
    if (params.limit !== undefined) {
      httpParams = httpParams.set('limit', params.limit.toString());
    }
    if (params.offset !== undefined) {
      httpParams = httpParams.set('offset', params.offset.toString());
    }
    if (params.depth !== undefined) {
      httpParams = httpParams.set('depth', params.depth.toString());
    }
    if (params.member_of !== undefined) {
      httpParams = httpParams.set('member_of', params.member_of.toString());
    }
    if (params.name !== undefined) {
      httpParams = httpParams.set('name', params.name.toString());
    }
    if (params.role !== undefined) {
      httpParams = httpParams.set('role', params.role.toString());
    }
    if (params.roleApp !== undefined) {
      httpParams = httpParams.set('roleApp', params.roleApp.toString());
    }
    if (params.sort !== undefined) {
      httpParams = httpParams.set('sort', params.sort.toString());
    }
    const observable = this.http.get<EntityTreeListView>(this.endpoint, {params: httpParams});
    if (updateSubject) {
      observable.subscribe(value => this.subject.next(value));
    }
    return observable;
  }
}
