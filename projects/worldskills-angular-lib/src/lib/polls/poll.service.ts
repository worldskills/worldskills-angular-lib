import { Injectable } from '@angular/core';
import { WorldskillsAngularLibService } from '../worldskills-angular-lib.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poll } from './models/poll';
import { Option } from './models/option';
import { Page } from './models/page';
import { Result } from './models/result';
import { Vote } from './models/vote';
import { VoteEntry } from './models/vote-entry';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  public endpoint: string;

  constructor(protected wsi: WorldskillsAngularLibService, protected http: HttpClient) {
    this.wsi.serviceConfigSubject.subscribe(
      next => {
        this.endpoint = next.apiEndpoint + '/votes';
      }
    );
  }

  public list(params: any): Observable<Page<Poll>> {
    return this.http.get<Page<Poll>>(this.endpoint, {params});
  }

  public select(params: any): Observable<Poll[]> {
    const url = `${this.endpoint}/select`;
    return this.http.get<Poll[]>(url, {params});
  }

  public get(id: number): Observable<Poll> {
    const url = `${this.endpoint}/${id}`;
    return this.http.get<Poll>(url);
  }

  public getResults(id: number): Observable<Result[]> {
    const url = `${this.endpoint}/${id}/results`;
    return this.http.get<Result[]>(url);
  }

  public hasVoted(id: number): Observable<Vote> {
    const url = `${this.endpoint}/${id}/has_voted`;
    return this.http.get<Vote>(url);
  }

  public create(model: Poll): Observable<Poll> {
    return this.http.post<Poll>(this.endpoint, model);
  }

  public update(id: number, model: Poll): Observable<Poll> {
    const url = `${this.endpoint}/${id}`;
    return this.http.put<Poll>(url, model);
  }

  public delete(id: number): Observable<any> {
    const url = `${this.endpoint}/${id}`;
    return this.http.delete(url);
  }

  public undelete(id: number): Observable<any> {
    const url = `${this.endpoint}/${id}/undelete`;
    return this.http.put(url, {});
  }

  public reset(id: number, start: Date, expiry: Date): Observable<any> {
    const model = { start, expiry };
    const url = `${this.endpoint}/${id}/reset`;
    return this.http.put(url, model);
  }

  public extend(id: number, expiry: Date): Observable<any> {
    const model = { expiry };
    const url = `${this.endpoint}/${id}/extend`;
    return this.http.put(url, model);
  }

  public addVote(pollId: number, votes: VoteEntry): Observable<Option> {
    const model =  { votes };
    const url = `${this.endpoint}/${pollId}/addVote`;
    return this.http.post<Option>(url, model);
  }

  public unvote(pollId: number): Observable<any> {
    const url = `${this.endpoint}/${pollId}/removeVote`;
    return this.http.delete(url);
  }
}