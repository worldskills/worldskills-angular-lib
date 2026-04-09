import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UI_LIBRARY_CONFIG } from '../ui-lib-config';
import { Award, AwardContainer } from './models/award';

@Injectable({ providedIn: 'root' })
export class AwardService {
  private http = inject(HttpClient);

  private get url(): string {
    return (inject(UI_LIBRARY_CONFIG).api?.apiEndpoint ?? '') + '/awards';
  }

  getList(entityId?: number): Observable<AwardContainer> {
    let params = new HttpParams();
    if (entityId != null) params = params.set('entityId', entityId);
    return this.http.get<AwardContainer>(`${this.url}/awards`, { params });
  }

  getListUnderWSIEntity(): Observable<AwardContainer> {
    return this.getList(1);
  }

  get(awardId: number): Observable<Award> {
    return this.http.get<Award>(`${this.url}/awards/${awardId}`);
  }
}
