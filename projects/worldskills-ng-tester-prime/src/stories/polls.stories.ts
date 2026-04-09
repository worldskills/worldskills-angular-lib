import { Meta, StoryObj, moduleMetadata, applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import {
  VoteControlComponent,
  Poll, Vote, PollResult, Track,
  DefaultOptionHandler,
  provideWsNgUi,
} from '@worldskills/ng-ui';

const BASE_POLL: Poll = {
  id: 1,
  title: { lang_code: 'en', text: 'Which framework should we adopt for new projects?' },
  question: { lang_code: 'en', text: 'Please select your preferred frontend framework for 2025 and beyond.' },
  type: 'standard',
  numberOfSelections: 1,
  anonymousVoting: false,
  anonymousResults: false,
  showingResults: true,
  allowingAbstain: true,
  allowingReVote: true,
  whitelist: false,
  deleted: false,
  start: new Date(Date.now() - 3600_000).toISOString() as any,
  expiry: new Date(Date.now() + 3600_000 * 24).toISOString() as any,
  created: new Date().toISOString() as any,
  createdBy: { id: 1, firstName: 'Admin', lastName: 'User' },
  entity: { id: 1, name: { lang_code: 'en', text: 'WorldSkills International' } },
  entityPath: { path: [] },
  options: [
    { id: 1, text: { lang_code: 'en', text: 'Angular' }, deleted: false },
    { id: 2, text: { lang_code: 'en', text: 'React' }, deleted: false },
    { id: 3, text: { lang_code: 'en', text: 'Vue.js' }, deleted: false },
    { id: 4, text: { lang_code: 'en', text: 'Svelte' }, deleted: false },
  ],
};

const NOT_VOTED: Vote = { hasVoted: false, votes: [], anonymous: false, abstained: false };
const VOTED: Vote = { hasVoted: true, votes: [{ rank: 1, optionId: 1 }], anonymous: false, abstained: false };
const ABSTAINED: Vote = { hasVoted: true, votes: [], anonymous: false, abstained: true };

const RESULTS: PollResult[] = [
  { id: 1, count: 5, points: 5, option: BASE_POLL.options[0] },
  { id: 2, count: 3, points: 3, option: BASE_POLL.options[1] },
  { id: 3, count: 2, points: 2, option: BASE_POLL.options[2] },
  { id: 4, count: 1, points: 1, option: BASE_POLL.options[3] },
];

const TRACKS: Track[] = [
  { personId: 1, firstName: 'Alice', lastName: 'Smith', option: BASE_POLL.options[0], weight: 1, voteIndex: 1, timestamp: new Date(), relativePosition: null, positions: [], abstain: null },
  { personId: 2, firstName: 'Bob', lastName: 'Jones', option: BASE_POLL.options[0], weight: 1, voteIndex: 1, timestamp: new Date(), relativePosition: { id: 1, memberCode: 'AU', name: 'Australia', entityId: 1, posId: 1, start: '', end: '' }, positions: [], abstain: null },
  { personId: 3, firstName: 'Carol', lastName: 'Lee', option: BASE_POLL.options[1], weight: 1, voteIndex: 1, timestamp: new Date(), relativePosition: null, positions: [], abstain: null },
];

const SHARED_DECORATORS = [
  applicationConfig({
    providers: [
      provideAnimations(),
      provideHttpClient(),
      provideWsNgUi({ api: { apiEndpoint: 'https://api.worldskills.org', appCode: [] } }),
      ConfirmationService,
      MessageService,
    ],
  }),
  moduleMetadata({ imports: [VoteControlComponent] }),
];

const meta: Meta<VoteControlComponent> = {
  title: 'WorldSkills UI / Polls / Vote Control',
  component: VoteControlComponent,
  tags: ['autodocs'],
  decorators: SHARED_DECORATORS,
  parameters: {
    docs: {
      description: {
        component: `
Master poll control component. Handles standard (single-choice), weighted (ranked), and multiselect poll types.
Requires \`ConfirmationService\` and \`MessageService\` in providers (for confirm dialogs and toasts).

\`\`\`html
<ws-ng-ui-vote-control
  [poll]="poll"
  [results]="results"
  [voted]="voted"
  [tracks]="tracks"
  (voteSelected)="onVote($event)"
  (abstainSelected)="onAbstain()"
/>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<VoteControlComponent>;

export const StandardNotVoted: Story = {
  name: 'Standard — not voted',
  args: {
    poll: BASE_POLL,
    voted: NOT_VOTED,
    results: RESULTS,
    tracks: TRACKS,
    optionHandler: new DefaultOptionHandler(),
  },
};

export const StandardVoted: Story = {
  name: 'Standard — voted',
  args: {
    poll: BASE_POLL,
    voted: VOTED,
    results: RESULTS,
    tracks: TRACKS,
    optionHandler: new DefaultOptionHandler(),
  },
};

export const StandardAbstained: Story = {
  name: 'Standard — abstained',
  args: {
    poll: BASE_POLL,
    voted: ABSTAINED,
    results: RESULTS,
    tracks: [],
    optionHandler: new DefaultOptionHandler(),
  },
};

export const WeightedPoll: Story = {
  name: 'Weighted — not voted',
  args: {
    poll: {
      ...BASE_POLL,
      id: 2,
      title: { lang_code: 'en', text: 'Rank your favourite frameworks' },
      question: { lang_code: 'en', text: 'Rank from most to least preferred. Points are awarded based on ranking position.' },
      type: 'weighted',
      numberOfSelections: 3,
    },
    voted: NOT_VOTED,
    results: [],
    tracks: [],
    optionHandler: new DefaultOptionHandler(),
  },
};

export const MultiselectPoll: Story = {
  name: 'Multiselect — not voted',
  args: {
    poll: {
      ...BASE_POLL,
      id: 3,
      title: { lang_code: 'en', text: 'Select your top 2 frameworks' },
      question: { lang_code: 'en', text: 'Select your 2 most preferred frameworks.' },
      type: 'multiselect',
      numberOfSelections: 2,
    },
    voted: NOT_VOTED,
    results: [],
    tracks: [],
    optionHandler: new DefaultOptionHandler(),
  },
};

export const ResultsView: Story = {
  name: 'Results view',
  args: {
    poll: { ...BASE_POLL, showingResults: true },
    voted: VOTED,
    results: RESULTS,
    tracks: TRACKS,
    optionHandler: new DefaultOptionHandler(),
    isOwner: true,
  },
};

export const WithManageButtons: Story = {
  name: 'With manage menu (owner)',
  args: {
    poll: BASE_POLL,
    voted: NOT_VOTED,
    results: RESULTS,
    tracks: TRACKS,
    optionHandler: new DefaultOptionHandler(),
    isOwner: true,
    showEditButton: true,
    showResetButton: true,
    showExtendButton: true,
    showDeleteButton: true,
    showExportButton: true,
    showCloseButton: true,
  },
};

export const NotYetStarted: Story = {
  name: 'Not yet started',
  args: {
    poll: {
      ...BASE_POLL,
      start: new Date(Date.now() + 3600_000 * 2).toISOString() as any,
      expiry: new Date(Date.now() + 3600_000 * 26).toISOString() as any,
    },
    voted: NOT_VOTED,
    results: [],
    tracks: [],
    optionHandler: new DefaultOptionHandler(),
  },
};

export const Expired: Story = {
  name: 'Expired',
  args: {
    poll: {
      ...BASE_POLL,
      start: new Date(Date.now() - 3600_000 * 48).toISOString() as any,
      expiry: new Date(Date.now() - 3600_000 * 24).toISOString() as any,
    },
    voted: NOT_VOTED,
    results: RESULTS,
    tracks: TRACKS,
    optionHandler: new DefaultOptionHandler(),
  },
};
