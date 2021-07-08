import { Component, ViewChild } from '@angular/core';
import { AlertService } from '../../../worldskills-angular-lib/src/lib/alerts/alert.service';
import { WorldskillsAngularLibService } from '../../../worldskills-angular-lib/src/lib/worldskills-angular-lib.service';
import { Datetime } from '../../../worldskills-angular-lib/src/lib/date/datetime';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { OptionHandler } from '../../../worldskills-angular-lib/src/lib/polls/models/optionHandler';
import { DefaultOptionHandler } from '../../../worldskills-angular-lib/src/lib/polls/models/defaultOptionHandler';
import { User } from '../../../worldskills-angular-lib/src/lib/auth/models/user';
import { MenuItem } from '../../../worldskills-angular-lib/src/lib/headers/menu-item';
import { Language } from '../../../worldskills-angular-lib/src/lib/i18n/language';
import { Poll } from '../../../worldskills-angular-lib/src/lib/polls/models/poll';
import { Result } from '../../../worldskills-angular-lib/src/lib/polls/models/result';
import { Vote } from '../../../worldskills-angular-lib/src/lib/polls/models/vote';
import { AlertType } from '../../../worldskills-angular-lib/src/lib/alerts/alert-type';
import { VoteEntry } from '../../../worldskills-angular-lib/src/lib/polls/models/vote-entry';
import { DateRange } from '../../../worldskills-angular-lib/src/lib/date/date-range';
import { Track } from '../../../worldskills-angular-lib/src/lib/polls/models/track';
import { ResourceThumbnail } from '../../../worldskills-angular-lib/src/lib/file/resource-thumbnail/resource-thumbnail.component';
import { EntityFetchParams } from 'projects/worldskills-angular-lib/src/lib/entity-tree-select/models/entity-tree-fetch-params';

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
    dropDownMenuItems: Array<MenuItem>;
    wsHeaderMenuItems: Array<MenuItem>;

    // breadcrumbs
    showHomeItem = true;
    defaultRoute = '/home';

    languages: Language[];

    poll: Poll;
    tracks: Track[];
    pollOptionHandler: OptionHandler;
    results: Result[];
    voted: Vote;

    datetime: Datetime;

    range: DateRange;

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


    fileThumbnailView1: ResourceThumbnail;
    fileThumbnailView2: ResourceThumbnail;

    entitySearchParams: EntityFetchParams;

    constructor(
        private alerts: AlertService,
        private wsi: WorldskillsAngularLibService
    ) {
    }

    // tslint:disable-next-line:typedef use-lifecycle-interface
    ngOnInit() {
        this.testFileThumbnailPreview();
        this.entitySearchParams = {
            sort: 'name'
        };

        this.range = {
            start: new Date(),
            end: new Date()
        };
        this.datetime = new Datetime();
        this.configureLib();
        this.alerts.setAlert('test', AlertType.info, 'Alert!', 'A random alert', false);

        this.languages = [
            {code: 'en', name: 'English'}
        ];
        this.isLoggedIn = false;
        this.dropDownMenuItems = [
            { label: 'Sample', url: '/authorized', hidden: false, requireLogin: false, requiredRoles: []}
        ];
        this.menuItems = [
            {label: 'Home', url: '/home', hidden: false, requireLogin: false, requiredRoles: []},
            {label: 'Home Nested', url: '/home/nested', hidden: false, requireLogin: false, requiredRoles: []},
            {label: 'Authorized', url: '/authorized', hidden: false, requireLogin: false, requiredRoles: []},
        ];

        this.wsHeaderMenuItems = [
            {
                label: 'Home', url: '/home', hidden: false, requireLogin: false, requiredRoles: [], subMenuItems: [
                    {label: 'Submenu 1', url: '/home/submenu1', hidden: false, requireLogin: false, requiredRoles: []},
                    {label: 'Submenu 2', url: '/home/submenu2', hidden: false, requireLogin: false, requiredRoles: []},
                ]
            },
            {
                label: 'Home Nested',
                url: '/home/nested',
                hidden: false,
                requireLogin: false,
                requiredRoles: []
            },
            {label: 'Authorized', url: '/authorized', hidden: false, requireLogin: false, requiredRoles: []},
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

    private testFileThumbnailPreview(): void {
        this.fileThumbnailView1 = {
            fileSize: 1000_000,
            downloadLink: '',
            filename: 'WSC2011 Final Report: Competition - Health, Public Services and Care.pdf',
            thumbnailLink: 'assets/images/thumbnail_upload_21599558244800.png'
        };

        this.fileThumbnailView2 = {
            fileSize: 1000_000,
            downloadLink: '',
            filename: 'file2.png',
            // thumbnailImageLink: 'https://picsum.photos/256/256'
            thumbnailLink: 'https://api.worldskills.show/resources/thumbnail/13239/14657/15584',
            description: 'here is the description for file 2'
        };
    }

    displayInSecondAlert(): void {
        this.alerts.setAlert('test', AlertType.warning, 'Alert!', 'Test second alert', false, 'mySecondAlert');
    }

    displayInAllAlerts(): void {
        this.alerts.setAlert('test', AlertType.warning, 'Alert!', 'Test second alert', false);
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
            authUriPatterns: ['api.worldskills.show', 'localhost:8081'],
        });

        this.wsi.serviceConfigSubject.next({
            appCode: [500],
            // apiEndpoint: 'https://api.worldskills.show',
            apiEndpoint: 'http://localhost:8081'
        });
    }


    pollInit(): void {
        this.pollOptionHandler = new DefaultOptionHandler();
        this.poll = {
            id: 1,
            allowingReVote: true,
            anonymousVoting: false,
            anonymousResults: false,
            showingResults: false,
            allowingAbstain: true,
            created: new Date(),
            deleted: false,
            start: new Date(),
            expiry: new Date(),
            numberOfSelections: 3,
            type: 'weighted',
            question: {lang_code: 'en', text: 'Question ?'},
            title: {lang_code: 'en', text: 'Title'},
            options: [
                {id: 1, deleted: false, text: {lang_code: 'en', text: 'Option 1'}},
                {id: 2, deleted: false, text: {lang_code: 'en', text: 'Option 2'}},
                {id: 3, deleted: false, text: {lang_code: 'en', text: 'Option 3'}},
                {id: 4, deleted: false, text: {lang_code: 'en', text: 'Option 4'}}
            ],
            createdBy: {
                id: 1,
                firstName: 'Waseem',
                lastName: 'Sabjee'
            },
            entity: {
                id: 1,
                name: {lang_code: 'en', text: 'WorldSkills International'}
            },
            entityPath: {pieces: []}
        };
        const date = new Date();
        this.poll.start.setDate(date.getDate() - 5);
        this.poll.expiry.setDate(date.getDate() + 15);

        this.results = [
            {id: 1, count: 2, points: 2, option: this.poll.options[0]},
            {id: 2, count: 0, points: 0, option: this.poll.options[1]},
            {id: 3, count: 0, points: 0, option: this.poll.options[2]},
            {id: 4, count: 0, points: 0, option: this.poll.options[3]}
        ];

        this.voted = {hasVoted: false, votes: [], anonymous: false, abstained: false};

        this.tracks = [
            {
                personId: 2091, firstName: 'Adam', lastName: 'Walsh',
                option: {
                    id: 1, text: {lang_code: 'en', text: 'Option 1'}, deleted: false
                }, weight: 1, timestamp: new Date(2020, 1, 1), abstain: null,
                // tslint:disable-next-line:max-line-length
                imagePath: 'https://images.worldskillsusercontent.show/wsf3/wsd1/30306/wsf3d156d5-9d60-4ff2-894c-94aa125bfeda_accreditation',
                relativePosition: null,
                positions: [],
                voteIndex: 1
            },
            {
                personId: 4935, firstName: 'Fabian', lastName: 'Vogler',
                option: {
                    id: 1, text: {lang_code: 'en', text: 'Option 1'}, deleted: false
                }, weight: 1, timestamp: new Date(2020, 1, 1), abstain: null,
                imagePath: 'https://images.worldskillsusercontent.show/ws8c/ws7d/29431/ws8c7dc020-6131-42da-8fee-cb96e4fce757',
                relativePosition: null,
                positions: [],
                voteIndex: 1
            },
            {
                personId: 167, firstName: 'John', lastName: 'Cox',
                option: {
                    id: 1, text: {lang_code: 'en', text: 'Option 1'}, deleted: false
                }, weight: 1, timestamp: new Date(2020, 1, 1), abstain: null,
                imagePath: 'https://images.worldskillsusercontent.show/ws82/wsa5/22458/ws82a59042-1875-4a07-a0ec-aab95799ae29',
                relativePosition: null,
                positions: [],
                voteIndex: 1
            },
            {
                personId: 5705, firstName: 'Waseem', lastName: 'Sabjee',
                option: {
                    id: 1, text: {lang_code: 'en', text: 'Option 1'}, deleted: false
                }, weight: 1, timestamp: new Date(2020, 1, 1), abstain: null,
                imagePath: 'https://images.worldskillsusercontent.show/ws24/ws93/30464/ws24939281-57ed-49aa-8dbb-0235e1590af7',
                relativePosition: {
                    end: null,
                    entityId: 1,
                    id: 34946,
                    memberCode: 'ZA',
                    name: 'Developer',
                    posId: 12,
                    start: new Date()
                },
                positions: [],
                voteIndex: 1
            },
            {
                personId: 238, firstName: 'David', lastName: 'Hoey',
                option: {
                    id: 1, text: {lang_code: 'en', text: 'Option 1'}, deleted: false
                }, weight: 1, timestamp: new Date(2020, 1, 1), abstain: null,
                imagePath: 'https://images.worldskillsusercontent.show/ws05/wsa4/22452/ws05a4cdfb-620b-4417-b1a1-b2048c12c86c',
                relativePosition: null,
                positions: [],
                voteIndex: 1
            }
        ];
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

    labelReader(item: { key: number, label: { lang: string, name: string } }): string {
        return `${item.label.name} (${item.label.lang})`;
    }

    valueReader(item: { key: number, label: { lang: string, name: string } }): string {
        return `VALUE-${item.key}`;
    }

    asyncSearchFn(searchTerm: string): Promise<Array<{ id: number, name: string }>> {
        return new Promise<Array<{ id: number, name: string }>>(resolve => {
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
            first_name: 'John',
            last_name: 'Doe',
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
