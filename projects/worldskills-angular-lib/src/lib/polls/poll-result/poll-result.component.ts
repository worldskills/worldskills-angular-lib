import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../models/poll';
import { Result } from '../models/result';
import { Option } from '../models/option';
import { Track } from '../models/track';
import { GenericUtil } from '../../common/util/generic.util';

@Component({
  selector: 'ws-poll-result',
  templateUrl: './poll-result.component.html',
  styleUrls: ['./poll-result.component.css']
})
export class PollResultComponent implements OnInit {

  max: number;
  @Input() poll: Poll;
  @Input() results: Result[];
  @Input() tracks: Track[];

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

  getPeople(option: Option): Track[] {
    let records = [];

    // if anonymous, option id will be blank
    if (this.poll && this.tracks && !this.poll.anonymousVoting) {
      records = this.tracks.filter(t => t.option.id === option.id);
    }

    return records;
  }

  getName(track: Track): string {
    if (!GenericUtil.isNullOrUndefined(track.relativePosition)) {
      // TODO need a better solution for this.
      switch (track.relativePosition.name.toLowerCase()) {
        case 'secretariat':
          return `${track.firstName} ${track.lastName}`;
        case 'skill competition manager':
          return `${track.firstName} ${track.lastName}`;
        default:
          if (GenericUtil.isNullOrUndefined(track.relativePosition.memberCode)) {
            return `${track.firstName} ${track.lastName}`;
          } else {
            return `${track.firstName} ${track.lastName} - ${track.relativePosition.memberCode}`;
          }
      }
    }
    return `${track.firstName} ${track.lastName}`;
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
