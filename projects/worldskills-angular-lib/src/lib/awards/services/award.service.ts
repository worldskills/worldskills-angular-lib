import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { share } from 'rxjs/operators';
import {
    FetchParams,
    FULL,
    MulticastOptions,
    RequestOptions,
    WsService,
    WsServiceRequestP1,
    WsServiceRequestP2,
    WsServiceRequestP3
} from '../../common/services/ws.service';
import { WorldskillsAngularLibService } from '../../worldskills-angular-lib.service';
import { Award, AwardContainer, AwardRequest } from '../models/award';
import { GenericUtil } from '../../common/util/generic.util';
import { HttpUtil } from '../../common/util/http.util';


@Injectable({
    providedIn: 'root'
})
export class AwardService extends WsService<any> {

    private apiAwardsURL: string;

    constructor(private wsi: WorldskillsAngularLibService, private http: HttpClient) {
        super();
        this.wsi.serviceConfigSubject.subscribe(
            next => {
                this.apiAwardsURL = next.apiEndpoint + '/awards';
            }
        );
    }

    public getList(entityId?: number): Observable<AwardContainer> {
        let params = new HttpParams();
        if (!GenericUtil.isNullOrUndefined(entityId)) {
            params = params.set('entityId', entityId.toString());
        }
        const observable = this.http.get<AwardContainer>(`${this.apiAwardsURL}/awards`, {params}).pipe(share());
        return this.request(observable);
    }

    public getListUnderWSIEntity(): Observable<AwardContainer> {
        return this.getList(1);
    }

    public get(awardId: number): Observable<Award> {
        const observable = this.http.get<Award>(`${this.apiAwardsURL}/${awardId}`).pipe(share());
        return this.request(observable);
    }

    create(awardRequest: AwardRequest, rOpt?: RequestOptions): Observable<Award>;
    create(awardRequest: AwardRequest, params: FetchParams, rOpt?: RequestOptions): Observable<Award>;
    create(awardRequest: AwardRequest, mOpt: MulticastOptions, rOpt?: RequestOptions): Observable<Award>;
    create(awardRequest: AwardRequest, params: FetchParams, mOpt: MulticastOptions, rOpt?: RequestOptions): Observable<Award>;
    create(awardRequest: AwardRequest, p1: WsServiceRequestP1, p2?: WsServiceRequestP2, p3?: WsServiceRequestP3): Observable<Award> {
        const {fetchParams, multicastOptions, requestOptions} = this.resolveArgs(p1, p2, p3, FULL);
        const params = HttpUtil.objectToParams(fetchParams || {});
        const observable = this.http.post<Award>(
            requestOptions.url ?? `${this.apiAwardsURL}`, awardRequest, {params}
        ).pipe(share());
        return this.request(observable, multicastOptions);
    }

    update(awardId: number, awardRequest: AwardRequest, rOpt?: RequestOptions): Observable<Award>;
    update(awardId: number, awardRequest: AwardRequest, params: FetchParams, rOpt?: RequestOptions): Observable<Award>;
    update(awardId: number, awardRequest: AwardRequest, mOpt: MulticastOptions, rOpt?: RequestOptions): Observable<Award>;
    // tslint:disable-next-line:max-line-length
    update(awardId: number, awardRequest: AwardRequest, params: FetchParams, mOpt: MulticastOptions, rOpt?: RequestOptions): Observable<Award>;
    // tslint:disable-next-line:max-line-length
    update(awardId: number, awardRequest: AwardRequest, p1: WsServiceRequestP1, p2?: WsServiceRequestP2, p3?: WsServiceRequestP3): Observable<Award> {
        const {fetchParams, multicastOptions, requestOptions} = this.resolveArgs(p1, p2, p3, FULL);
        const params = HttpUtil.objectToParams(fetchParams || {});
        const observable = this.http.put<Award>(
            requestOptions.url ?? `${this.apiAwardsURL}/${awardId}`, awardRequest, {params}
        ).pipe(share());
        return this.request(observable, multicastOptions);
    }

    delete(awardId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiAwardsURL}/${awardId}`);
    }
}
