import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { HttpClient } from '@angular/common/http';
import { EntityFetchParams } from './models/entity-tree-fetch-params';
import { BehaviorSubject, Observable } from 'rxjs';
import { EntityTreeListView } from '../auth/models/entity-tree-list-view';
import * as i0 from "@angular/core";
export declare class EntityTreeService {
    protected wsi: WorldskillsAngularLibService;
    protected http: HttpClient;
    constructor(wsi: WorldskillsAngularLibService, http: HttpClient);
    private subjects;
    endpoint: string;
    subject: BehaviorSubject<EntityTreeListView>;
    static equals(a: EntityFetchParams, b: EntityFetchParams): boolean;
    clearCache(params?: EntityFetchParams): void;
    getCachedSubject(params?: EntityFetchParams, fetchOnCreate?: boolean): BehaviorSubject<EntityTreeListView>;
    list(params?: EntityFetchParams): Observable<EntityTreeListView>;
    static ɵfac: i0.ɵɵFactoryDef<EntityTreeService, never>;
    static ɵprov: i0.ɵɵInjectableDef<EntityTreeService>;
}
