import { Component, OnInit } from '@angular/core';
import { PollView } from '../../../../worldskills-angular-lib/src/lib/models/votes/poll-view';
import { ResultView } from '../../../../worldskills-angular-lib/src/lib/models/votes/result-view';
import { VotedView } from '../../../../worldskills-angular-lib/src/lib/models/votes/voted-view';
import { CreatedByView, WsEntityModel, OptionView } from 'projects/worldskills-angular-lib/src/public_api';
import { I18nModel } from '../../../../worldskills-angular-lib/src/lib/models/I18n.model';
import { AddVoteView } from '../../../../worldskills-angular-lib/src/lib/models/votes/add-vote-view';
import { NameModel } from 'projects/worldskills-angular-lib/src/lib/models/name-model';
import { ActivatedRoute } from '@angular/router';
import { AuthService, AddVoteEntryView } from 'worldskills-angular-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  poll: PollView;
  results: ResultView[];
  voted: VotedView;

  // selected: AddVoteView;

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(
      params => {
        if (!this.authService.hasReturnUrl()) {
          sessionStorage.setItem('returnUrl', params.returnUrl);
        }
      }
    );

    this.authService.redirectOrReturn(['/home']);

    this.init();

  }

  init() {

    this.poll = new PollView();
    this.poll.id = 1;
    this.poll.allowingReVote = true;
    this.poll.anonymousResults = false;
    this.poll.anonymousVoting = false;
    this.poll.showingResults = true;
    this.poll.created = new Date();
    this.poll.createdBy = new CreatedByView();
    this.poll.createdBy.id = 1;
    this.poll.createdBy.firstName = 'Waseem';
    this.poll.createdBy.lastName = 'Sbjee';
    this.poll.deleted = false;
    this.poll.entity = new WsEntityModel();
    this.poll.entity.id = 1;
    this.poll.entity.name = new NameModel({ lang_code: 'en', text: 'Worldkills International' });
    this.poll.start = new Date();
    this.poll.expiry = new Date();
    // this.poll.start.setDate(this.poll.start.getDate() + 30);
    this.poll.expiry.setDate(this.poll.expiry.getDate() + 7);
    this.poll.numberOfSelections = 3;
    this.poll.options = [
       new OptionView({ id: 1, deleted: false, text: new I18nModel({lang_code: 'en', text: 'Option 1'})}),
       new OptionView({ id: 2, deleted: false, text: new I18nModel({lang_code: 'en', text: 'Option 2'})}),
       new OptionView({ id: 3, deleted: false, text: new I18nModel({lang_code: 'en', text: 'Option 3'})}),
       new OptionView({ id: 4, deleted: false, text: new I18nModel({lang_code: 'en', text: 'Option 4'})})
    ];
    this.poll.question = new I18nModel({lang_code: 'en', text: 'Which option will you choose ?'});
    this.poll.title = new I18nModel({lang_code: 'en', text: 'Choices...' });
    this.poll.type = 'weighted';

    this.results = [
      new ResultView({id: 1, count: 6, option: this.poll.options[0]}),
      new ResultView({id: 2, count: 3, option: this.poll.options[1]}),
      new ResultView({id: 3, count: 4, option: this.poll.options[2]}),
      new ResultView({id: 4, count: 5, option: this.poll.options[3]})
    ];

    this.voted = new VotedView({hasVoted: false, votes: []});
    // this.voted = new VotedView({
    //   hasVoted: true,
    //   votes: [
    //     new AddVoteEntryView({rank: 1, optionId: 1}),
    //     new AddVoteEntryView({rank: 2, optionId: 4}),
    //     new AddVoteEntryView({rank: 3, optionId: 2})

    //   ]
    // });
    // this.selected = new AddVoteView();
    // this.selected.votes = this.voted.votes;
  }

  voteSelected(result: AddVoteView) {
    console.log(result);
    this.voted.hasVoted = true;
    this.voted.votes = result.votes;
    // this.selected.votes = this.voted.votes;
  }

  viewChange(view: string) {
    console.log(view);
  }

  voteRemoved(result: AddVoteView) {
    console.log(result);
    this.voted.hasVoted = false;
    this.voted.votes = [];
    // this.selected = new AddVoteView();
  }

  edit(poll: PollView) {
    console.log('edit');
  }

  reset(poll: PollView) {
    console.log('reset');
  }

  delete(poll: PollView) {
    console.log('delete');
  }

}
