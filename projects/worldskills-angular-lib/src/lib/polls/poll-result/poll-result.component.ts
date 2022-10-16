import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../models/poll';
import { Result } from '../models/result';
import { Option } from '../models/option';
import { Track } from '../models/track';
import { GenericUtil } from '../../common/util/generic.util';
import { OrdinalUtil } from '../../common/util/ordinal.util';
import { ArrayUtil } from '../../common/util/array.util';

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
  @Input() canSeeWhoVoted;

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  // tslint:disable-next-line:use-lifecycle-interface typedef
  ngOnChanges(): void {
    this.init();
  }

  init(): void {
    this.max = this.results.map(x => x.points).reduce((acc, cur) => acc + cur, 0);
  }

  getPeople(option: Option): Track[] {
    let records = [];

    // if anonymous, option id will be blank    this.max = this.tracks.map(x => x.weight).reduce((acc, cur) => acc + cur, 0);

    if (this.poll && this.tracks && !this.poll.anonymousVoting) {
      records = this.tracks.filter(t => t.option.id === option.id);
    }

    return records;
  }

  // displays within the voer tile
  getVoter(track: Track): string {
    if (!GenericUtil.isNullOrUndefined(track.relativePosition)) {
      if (!GenericUtil.isNullOrUndefined(track.relativePosition.memberCode)) {
        return track.relativePosition.memberCode;
      } else {
        return `${track.firstName} ${track.lastName}`;
      }
    }
    return `${track.firstName} ${track.lastName}`;
  }

  // displays when howvering over the voter tile
  getVoterHover(track: Track): string {
    if (!GenericUtil.isNullOrUndefined(track.relativePosition)) {
      if (!GenericUtil.isNullOrUndefined(track.relativePosition.memberCode)) {
        return `${track.firstName} ${track.lastName} - ${track.relativePosition.memberCode} ${track.relativePosition.name}`;
      } else {
        return `${track.firstName} ${track.lastName} - ${track.relativePosition.name}`;
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

  countPoints(option: Option): number {
    if (!this.poll || !this.results) {
      return 0;
    }

    if (this.max === 0) {
      return 0;
    }

    const points = this.results.filter(x => x.option.id === option.id).map(x => x.points);
    return points.length > 0 ? points.reduce((acc, cur) => acc + cur, 0) : 0;
  }

  showVoteIndex(): boolean {
    if (!this.poll) {
      return false;
    }
    return this.poll.type === 'weighted' || this.poll.type === 'multiselect';
  }

  getVoteIndex(track: Track): string {
    return OrdinalUtil.applyDefault(track.voteIndex);
  }
}
