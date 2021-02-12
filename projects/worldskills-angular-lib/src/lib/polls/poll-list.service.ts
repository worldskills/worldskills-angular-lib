import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { Observable } from 'rxjs';
import { PollList } from './models/poll-list';
import { Page } from './models/page';

@Injectable({
  providedIn: 'root'
})
export class PollListService {
  public endpoint: string;

  constructor(protected wsi: WorldskillsAngularLibService, protected http: HttpClient) {
    this.wsi.serviceConfigSubject.subscribe(
      next => {
        this.endpoint = next.apiEndpoint + '/votes/list';
      }
    );
  }

  public list(params: any): Observable<Page<PollList>> {
    return this.http.get<Page<PollList>>(this.endpoint, {params});
  }

  public get(id: number): Observable<PollList> {
    const url = `${this.endpoint}/${id}`;
    return this.http.get<PollList>(url);
  }

  public create(model: PollList): Observable<PollList> {
    return this.http.post<PollList>(this.endpoint, model);
  }

  public update(id: number, model: PollList): Observable<PollList> {
    const url = `${this.endpoint}/${id}`;
    return this.http.put<PollList>(url, model);
  }

  public delete(id: number): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this.http.delete(url);
  }

  public undelete(id: number): Observable<any> {
    const url = `${this.endpoint}/${id}/undelete`;
    return this.http.put(url, {});
  }
}
