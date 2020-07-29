import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../models/poll';
import { Result } from '../models/result';
import { Option } from '../models/option';

@Component({
  selector: 'ws-poll-result',
  templateUrl: './poll-result.component.html',
  styleUrls: ['./poll-result.component.css']
})
export class PollResultComponent implements OnInit {

  max: number;
  @Input() poll: Poll;
  @Input() results: Result[];

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  // tslint:disable-next-line:use-lifecycle-interface typedef
  ngOnChanges(): void {
    this.init();
  }

  init(): void {
    this.max = this.results.map(x => x.count).reduce((sum, current) => sum + current, 0);
  }

  countVotes(option: Option): number {
    if (!this.poll || !this.results) {
      return 0;
    }

    if (this.max === 0) {
      return 0;
    }

    const result = this.results.find(x => x.option.id === option.id);
    return result ? result.count : 0;
  }
}
