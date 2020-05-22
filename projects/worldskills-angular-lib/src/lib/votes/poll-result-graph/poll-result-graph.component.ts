import { Component, OnInit, Input } from '@angular/core';
import { PollView } from '../../models/votes/poll-view';
import { ResultView } from '../../models/votes/result-view';
import { OptionView } from '../../models/votes/option-view';

@Component({
  selector: 'ws-poll-result-graph',
  templateUrl: './poll-result-graph.component.html',
  styleUrls: ['./poll-result-graph.component.css']
})
export class PollResultGraphComponent implements OnInit {

  max: number;
  @Input() poll: PollView;
  @Input() results: ResultView[];

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(): void {
    this.init();
  }

  init() {
    this.max = this.results.map(x => x.count).reduce((sum, current) => sum + current, 0);
  }

  countVotes(option: OptionView) {
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
