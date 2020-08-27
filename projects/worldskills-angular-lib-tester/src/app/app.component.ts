import { Component } from '@angular/core';
import { AlertService } from '../../../worldskills-angular-lib/src/lib/alerts/alert.service';
import { AlertType, MenuItem, Language, Poll, Result, Vote } from '../../../worldskills-angular-lib/src/public-api';
import { WorldskillsAngularLibService } from '../../../worldskills-angular-lib/src/lib/worldskills-angular-lib.service';
import { NgAuthService } from '../../../worldskills-angular-lib/src/lib/auth/ng-auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { User } from '../../../../dist/worldskills-angular-lib/lib/auth/models/user';
import { VoteEntry } from '../../../../dist/worldskills-angular-lib/lib/polls/models/vote-entry';
import { Datetime } from '../../../worldskills-angular-lib/src/lib/date/datetime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'worldskills-angular-lib-tester';

  // auth
  user: User;

  // header
  isLoggedIn: boolean;
  menuItems: Array<MenuItem>;

  // breadcrumbs
  showHomeItem = true;
  defaultRoute = '/home';

  languages: Language[];

  poll: Poll;
  results: Result[];
  voted: Vote;

  datetime: Datetime;

  constructor(private alerts: AlertService, private wsi: WorldskillsAngularLibService, private oauth: OAuthService,
              private ngAuth: NgAuthService) {
  }



  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    this.datetime = new Datetime();
    this.configureLib();
    this.alerts.setAlert('test', AlertType.info, 'Alert!', 'A random alert', false);

    this.languages = [
      { code: 'en', name: 'English' }
    ];
    this.isLoggedIn = false;
    this.menuItems = [
      { label: 'Home', url: '/home', hidden: false, requireLogin: false, requiredRoles: [] },
    ];
    this.ngAuth.loadUserProfile(
      user => {
        this.isLoggedIn = true;
        console.log(user);
        this.user = user;
      },
      error => {
        this.isLoggedIn = false;
        console.log(error);
      }
    );
    this.pollInit();
  }

  login(): void {
    this.ngAuth.login();
  }

  logout(): void {
    this.ngAuth.logout();
  }

  configureLib(): void {
    /*
      Overriding all config is completely options.
      you should probably override AuthConfig at least.
    */
    const appConfig = this.wsi.appConfigSubject.getValue();
    appConfig.notAuthorizedRoute = ['/not-authorized'];
    this.wsi.appConfigSubject.next(appConfig);

    this.wsi.authConfigSubject.next({
      loginUrl: 'http://localhost:50300/oauth/authorize',
      clientId: '7221138f6772',
      redirectUri: 'http://localhost:4200/home',
      userinfoEndpoint: 'http://localhost:8081/users/loggedIn?show_child_roles=false&app_code=500',
      oidc: false
    });


    const httpConfig = this.wsi.httpConfigSubject.getValue();
    httpConfig.encoderUriPatterns = []; //
    httpConfig.authUriPatterns = ['http://localhost:8081'];
    this.wsi.httpConfigSubject.next(httpConfig);

    const serviceConfig = this.wsi.serviceConfigSubject.getValue();
    serviceConfig.appCode = [500];
    serviceConfig.apiEndpoint = 'http://localhost:8081';
    this.wsi.serviceConfigSubject.next(serviceConfig);

  }

  pollInit(): void {

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
      type: 'multiselect',
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
      {id: 2, count: 0, option: this.poll.options[1]},
      {id: 3, count: 0, option: this.poll.options[2]},
      {id: 4, count: 0, option: this.poll.options[3]}
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
