import { Component, computed, input } from '@angular/core';
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
export class PollResultComponent {

  // ── Inputs ────────────────────────────────────────────────────────────────

  poll = input.required<Poll>();
  results = input.required<PollResult[]>();
  tracks = input<Track[]>([]);
  canSeeWhoVoted = input(false);

  // ── Derived state ─────────────────────────────────────────────────────────

  max = computed(() => this.results().reduce((sum, r) => sum + r.points, 0));

  optionResults = computed<OptionResultView[]>(() => {
    const poll = this.poll();
    const results = this.results();
    if (!results || !poll?.options) return [];
    return [...poll.options]
      .sort((a, b) => a.id - b.id)
      .map(option => ({
        ...option,
        votes: results.find(r => r.option.id === option.id)?.count ?? 0,
        points: results
          .filter(r => r.option.id === option.id)
          .reduce((sum, r) => sum + r.points, 0),
      }))
      .sort((a, b) => b.points - a.points);
  });

  // ── Helpers ───────────────────────────────────────────────────────────────

  progressValue(option: OptionResultView): number {
    const m = this.max();
    if (m === 0) return 0;
    return Math.round((option.points / m) * 100);
  }

  getVoters(option: PollOption): Track[] {
    if (!this.tracks().length || this.poll().anonymousVoting) return [];
    return this.tracks().filter(t => t.option.id === option.id);
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
    return this.poll().type === 'weighted' || this.poll().type === 'multiselect';
  }

  private ordinal(n: number): string {
    if (n <= 0) return '';
    const suffix = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (suffix[(v - 20) % 10] ?? suffix[v] ?? suffix[0]);
  }
}
