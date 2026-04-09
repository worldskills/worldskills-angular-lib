import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressBarModule } from 'primeng/progressbar';
import { TranslatePipe } from '@ngx-translate/core';
import { Poll } from '../models/poll';
import { PollResult } from '../models/result';
import { PollOption } from '../models/option';
import { Track } from '../models/track';
import { OptionResultView } from '../models/option-result-view';

@Component({
  selector: 'ws-ng-ui-poll-result',
  standalone: true,
  imports: [TooltipModule, ProgressBarModule, TranslatePipe],
  templateUrl: './poll-result.component.html',
})
export class PollResultComponent implements OnInit, OnChanges {
  @Input({ required: true }) poll!: Poll;
  @Input({ required: true }) results!: PollResult[];
  @Input() tracks: Track[] = [];
  @Input() canSeeWhoVoted = false;

  optionResults: OptionResultView[] = [];
  max = 0;

  ngOnInit(): void { this.init(); }
  ngOnChanges(): void { this.init(); }

  init(): void {
    if (!this.results || !this.poll?.options) return;
    this.max = this.results.reduce((sum, r) => sum + r.points, 0);
    this.optionResults = [...this.poll.options]
      .sort((a, b) => a.id - b.id)
      .map(option => ({
        ...option,
        votes: this.countVotes(option),
        points: this.countPoints(option),
      }))
      .sort((a, b) => b.points - a.points);
  }

  countVotes(option: PollOption): number {
    const result = this.results.find(r => r.option.id === option.id);
    return result?.count ?? 0;
  }

  countPoints(option: PollOption): number {
    return this.results
      .filter(r => r.option.id === option.id)
      .reduce((sum, r) => sum + r.points, 0);
  }

  progressValue(option: OptionResultView): number {
    if (this.max === 0) return 0;
    return Math.round((option.points / this.max) * 100);
  }

  getVoters(option: PollOption): Track[] {
    if (!this.tracks || this.poll.anonymousVoting) return [];
    return this.tracks.filter(t => t.option.id === option.id);
  }

  getVoterLabel(track: Track): string {
    if (track.relativePosition?.memberCode) return track.relativePosition.memberCode;
    return `${track.firstName} ${track.lastName}`;
  }

  getVoterTooltip(track: Track): string {
    const name = `${track.firstName} ${track.lastName}`;
    if (track.relativePosition?.memberCode) {
      return `${name} · ${track.relativePosition.memberCode} ${track.relativePosition.name}`;
    }
    if (track.relativePosition?.name) return `${name} · ${track.relativePosition.name}`;
    return name;
  }

  getVoteIndex(track: Track): string {
    return this.ordinal(track.voteIndex);
  }

  showVoteIndex(): boolean {
    return this.poll.type === 'weighted' || this.poll.type === 'multiselect';
  }

  private ordinal(n: number): string {
    if (n <= 0) return '';
    const suffix = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (suffix[(v - 20) % 10] ?? suffix[v] ?? suffix[0]);
  }
}
