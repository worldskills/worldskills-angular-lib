import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PollResetView } from '../models/votes/poll-reset-view';
import { PageView } from '../models/votes/page-view';
import { ModuleConfigService } from '../config/module-config.service';
import { PollView } from '../models/votes/poll-view';
import { ResultView } from '../models/votes/result-view';
import { VotedView } from '../models/votes/voted-view';
import { OptionView } from '../models/votes/option-view';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  public endpoint: string;

  constructor(protected configService: ModuleConfigService, protected http: HttpClient) {
    this.endpoint = `${configService.serviceConfig.apiEndpoint}/votes`;
  }

  public list(params: any): Observable<PageView<PollView>> {
    return this.http.get<PageView<PollView>>(this.endpoint, {params});
  }

  public get(id: number): Observable<PollView> {
    const url = `${this.endpoint}/${id}`;
    return this.http.get<PollView>(url);
  }

  public getResults(id: number): Observable<ResultView[]> {
    const url = `${this.endpoint}/${id}/results`;
    return this.http.get<ResultView[]>(url);
  }

  public hasVoted(id: number): Observable<VotedView> {
    const url = `${this.endpoint}/${id}/has_voted`;
    return this.http.get<VotedView>(url);
  }

  public create(model: PollView): Observable<PollView> {
    return this.http.post<PollView>(this.endpoint, model);
  }

  public update(id: number, model: PollView): Observable<PollView> {
    const url = `${this.endpoint}/${id}`;
    return this.http.put<PollView>(url, model);
  }

  public delete(id: number) {
    const url = `${this.endpoint}/${id}`;
    return this.http.delete(url);
  }

  public undelete(id: number) {
    const url = `${this.endpoint}/${id}/undelete`;
    return this.http.put(url, {});
  }

  public reset(id: number, model: PollResetView) {
    const url = `${this.endpoint}/${id}/reset`;
    return this.http.put(url, model);
  }

  public addVote(model: OptionView, voteId: number, optionId: number): Observable<OptionView> {
    const url = `${this.endpoint}/${voteId}/options/${optionId}/results/addVote`;
    return this.http.post<OptionView>(url, model);
  }

  public unvote(resultId: number, voteId: number, optionId: number) {
    const url = `${this.endpoint}/${voteId}/options/${optionId}/results/${resultId}`;
    return this.http.delete(url);
  }

}
