import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {WorldskillsAngularLibService} from '../../worldskills-angular-lib.service';
import {EntityFetchParams} from '../models/entity-tree-fetch-params';
import {EntityTreeListView} from '../../auth/models/entity-tree-list-view';


@Injectable({
    providedIn: 'root'
})
export class EntityTreeService {

    constructor(protected wsi: WorldskillsAngularLibService, protected http: HttpClient) {
        this.wsi.serviceConfigSubject.subscribe(
            next => {
                this.endpoint = next.apiEndpoint + '/auth/ws_entities';
            }
        );
    }

    private subjects: Array<{
        params: EntityFetchParams,
        subject: BehaviorSubject<EntityTreeListView>,
    }> = [];
    public endpoint: string;
    public subject: BehaviorSubject<EntityTreeListView> = new BehaviorSubject<EntityTreeListView>(null);

    public static equals(a: EntityFetchParams, b: EntityFetchParams): boolean {
        return (
            a.limit === b.limit &&
            a.offset === b.offset &&
            a.depth === b.depth &&
            a.member_of === b.member_of &&
            a.name === b.name &&
            a.role === b.role &&
            a.roleApp === b.roleApp &&
            a.sort === b.sort
        );
    }

    public clearCache(params: EntityFetchParams = null): void {
        if (params === null) {
            this.subjects = [];
        } else {
            const cacheEntryIndex = this.subjects.findIndex(cE => EntityTreeService.equals(cE.params, params));
            if (cacheEntryIndex >= 0) {
                this.subjects.splice(cacheEntryIndex, 1);
            }
        }
    }

    public getCachedSubject(params: EntityFetchParams = {}, fetchOnCreate = true): BehaviorSubject<EntityTreeListView> {
        const cacheEntry = this.subjects.find(cE => EntityTreeService.equals(cE.params, params));
        if (cacheEntry) {
            return cacheEntry.subject;
        } else {
            const newCacheEntry = {
                params,
                subject: new BehaviorSubject<EntityTreeListView>(null),
            };
            this.subjects.push(newCacheEntry);
            if (fetchOnCreate) {
                this.list(params);
            }
            return newCacheEntry.subject;
        }
    }

    public list(params: EntityFetchParams = {}): Observable<EntityTreeListView> {
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
        const cacheEntry = this.subjects.find(cE => EntityTreeService.equals(cE.params, params));
        if (cacheEntry) {
            observable.subscribe(value => cacheEntry.subject.next(value));
        }
        observable.subscribe(value => this.subject.next(value));
        return observable;
    }
}
