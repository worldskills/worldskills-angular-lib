import { Component, ViewChild } from '@angular/core';
import { AlertService } from '../../../worldskills-angular-lib/src/lib/alerts/alert.service';
import {
  AlertType,
  MenuItem,
  Language,
  Poll,
  Result,
  Vote,
  User,
  VoteEntry,
} from '../../../worldskills-angular-lib/src/public-api';
import { WorldskillsAngularLibService } from '../../../worldskills-angular-lib/src/lib/worldskills-angular-lib.service';
import { Datetime } from '../../../worldskills-angular-lib/src/lib/date/datetime';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { OptionHandler } from '../../../worldskills-angular-lib/src/lib/polls/models/optionHandler';
import { DefaultOptionHandler } from '../../../worldskills-angular-lib/src/lib/polls/models/defaultOptionHandler';

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
  pollOptionHandler: OptionHandler;
  results: Result[];
  voted: Vote;

  datetime: Datetime;

  // wsSelect
  @ViewChild('form', {static: true}) form: NgForm;
  selectChange1 = '';
  wsSelectChange1 = '';
  selectChange2 = '';
  wsSelectChange2 = '';
  selectChange3 = '';
  wsSelectChange3 = '';
  selectChange4 = '';
  wsSelectChange4 = '';
  asyncSearchItems = [];
  asyncSearchSubscription: (value: string) => void;
  ngSelectItems = [
    {
      key: 1,
      label: {lang: 'en', name: 'A'},
    },
    {
      key: 2,
      label: {lang: 'en', name: 'B'},
    },
    {
      key: 3,
      label: {lang: 'en', name: 'C'},
    },
    {
      key: 4,
      label: {lang: 'en', name: 'D'},
    },
    {
      key: 5,
      label: {lang: 'en', name: 'E'},
    },
  ];

  constructor(
      private alerts: AlertService,
      private wsi: WorldskillsAngularLibService
  ) {
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
      { label: 'Authorized', url: '/authorized', hidden: false, requireLogin: false, requiredRoles: [] },
    ];
    this.asyncSearchSubscription = (value: string) => {
      const observable = from(this.asyncSearchFn(value));
      observable.subscribe(items => {
        this.asyncSearchItems = items;
      });
      return observable;
    };
    this.pollInit();
    this.form.ngSubmit.emit();
  }

  configureLib(): void {
    this.wsi.appConfigSubject.next({
      notAuthorizedRoute: ['/not-authorized']
    });

    this.wsi.authConfigSubject.next({
      loginUrl: 'http://localhost:50300/oauth/authorize',
      clientId: '7221138f6772',
      redirectUri: 'http://localhost:4200/home',
      userinfoEndpoint: 'http://localhost:8081/users/loggedIn?show_child_roles=false&app_code=500',
      oidc: false
    });

    this.wsi.httpConfigSubject.next({
      encoderUriPatterns: [],
      authUriPatterns: ['api.worldskills.show'],
    });

    this.wsi.serviceConfigSubject.next({
      appCode: [500],
      apiEndpoint: 'https://api.worldskills.show',
    });
  }


  pollInit(): void {
    this.pollOptionHandler = new DefaultOptionHandler();
    this.poll = {
      id: 1,
      allowingReVote: true,
      anonymousVoting: false,
      anonymousResults: false,
      showingResults: true,
      allowingAbstain: true,
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

    this.voted = {hasVoted: false, votes: [], anonymous: false, abstained: false};
  }

  abstain(): void {
    this.voted.hasVoted = true;
    this.voted.abstained = true;
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

  selectChange(selection: object, field: string): void {
    this[field] = JSON.stringify(selection);
  }

  labelReader(item: {key: number, label: {lang: string, name: string}}): string {
    return `${item.label.name} (${item.label.lang})`;
  }

  valueReader(item: {key: number, label: {lang: string, name: string}}): string {
    return `VALUE-${item.key}`;
  }

  asyncSearchFn(searchTerm: string): Promise<Array<{id: number, name: string}>> {
    return new Promise<Array<{id: number, name: string}>>(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Apple',
          },
          {
            id: 2,
            name: 'Banana',
          },
          {
            id: 3,
            name: 'Lemon',
          },
          {
            id: 4,
            name: 'Orange',
          },
          {
            id: 5,
            name: 'Kiwi',
          },
          {
            id: 6,
            name: 'Nectarine',
          },
          {
            id: 7,
            name: 'Apricot',
          },
          {
            id: 8,
            name: 'Pear',
          },
          {
            id: 9,
            name: 'Mango',
          },
        ].filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase())));
      }, 2000);
    });
  }

  onSelectValid(valid: boolean): void {
    console.log('is select search length valid', valid);
  }

  get fakeUser(): User {
    return {
      roles: [
        {
          name: 'roleA',
          apply_per_entity: true,
          ws_entity: {id: 1},
          role_application: {application_code: 100},
        },
        {
          name: 'roleB',
          apply_per_entity: true,
          ws_entity: {id: 1},
          role_application: {application_code: 100},
        },
        {
          name: 'roleC',
          apply_per_entity: true,
          ws_entity: {id: 2},
          role_application: {application_code: 200},
        }
      ]
    } as Partial<User> as User;
  }

}
