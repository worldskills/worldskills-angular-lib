import { Component, OnInit } from '@angular/core';
import { WorldskillsAngularLibService } from '../../../../worldskills-angular-lib/src/lib/worldskills-angular-lib.service';
import { Poll } from '../../../../worldskills-angular-lib/src/lib/polls/models/poll';
import { Result } from '../../../../worldskills-angular-lib/src/lib/polls/models/result';
import { Vote } from '../../../../worldskills-angular-lib/src/lib/polls/models/vote';
import { VoteEntry } from '../../../../../dist/worldskills-angular-lib/lib/polls/models/vote-entry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  poll: Poll;
  results: Result[];
  voted: Vote;

  // selected: AddVoteView;

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.init();
  }

  init(): void {

    this.poll = {
      id: 1,
      allowingReVote: true,
      anonymousVoting: false,
      anonymousResults: false,
      showingResults: true,
      created: new Date(),
      deleted: false,
      start: new Date(),
      expiry: new Date(),
      numberOfSelections: 3,
      type: 'weighted',
      question: { lang_code: 'en', text: 'Question ?' },
      title: { lang_code: 'en', text: 'Title' },
      options: [
        { id: 1, deleted: false, text: {lang_code: 'en', text: 'Option 1'} },
        { id: 2, deleted: false, text: {lang_code: 'en', text: 'Option 2'} },
        { id: 3, deleted: false, text: {lang_code: 'en', text: 'Option 3'} },
        { id: 4, deleted: false, text: {lang_code: 'en', text: 'Option 4'} }
      ],
      createdBy: {
        id: 1,
        firstName: 'Waseem',
        lastName: 'Sabjee'
      },
      entity: {
        id: 1,
        name: { lang_code: 'en', text: 'WorldSkills International' }
      },
      entityPath: { pieces: [] }
    };
    this.poll.start.setDate(this.poll.start.getDate() - 3);
    this.poll.expiry.setDate(this.poll.start.getDate() + 7);

    this.results = [
      {id: 1, count: 0, option: this.poll.options[0]},
      {id: 2, count: 3, option: this.poll.options[1]},
      {id: 3, count: 1, option: this.poll.options[2]},
      {id: 4, count: 2, option: this.poll.options[3]}
    ];

    this.voted = {hasVoted: false, votes: []};
  }

  voteSelected(result: VoteEntry[]): void {
    console.log(result);
    this.voted.hasVoted = true;
    this.voted.votes = result;
    // this.selected.votes = this.voted.votes;
  }

  viewChange(view: string): void {
    console.log(view);
  }

  voteRemoved(result: VoteEntry[]): void {
    console.log(result);
    this.voted.hasVoted = false;
    this.voted.votes = [];
    // this.selected = new AddVoteView();
  }

  edit(poll: Poll): void {
    console.log('edit');
  }

  reset(poll: Poll): void {
    console.log('reset');
  }

  delete(poll: Poll): void {
    console.log('delete');
  }

}
