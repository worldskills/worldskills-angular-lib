# Library usage

This will contain examples of how components are used.

## App Auth Guard

the app auth guard is a generic role-checking auth guard than can be used.

## Default usage

The App Auth Guard is applicable on Routes only. you can pass through multiple roles per route as well

```TpyeScript
{ path: 'feed', component: FeedComponent,
  canActivate: [AppAuthGuard], data: {roles: [{ appCode: 500, name: 'Admin' }}
},
{ path: 'manage', component: ManageComponent,
  canActivate: [AppAuthGuard], data: {roles: [{ appCode: 500, name: 'Admin' }, { appCode: 3600, name: 'Admin' } }
}
```

if the users role does not match the provided roles then ueer will be kicked to an unauthorized page.
the default route is `/not-authorized`

## overriding the not-authoried route

you will need to use the `forFn` method when registering the module and overide the AppConfig instance.

```TypeScript
WorldskillsAngularLibModule.forFn(mod => {
  mod.service = new ServiceConfig();
  mod.auth = new AuthConfig();
  mod.encoder = new WSHttpConfig();
  mod.app = new AppConfig({notAuthorizedRoute: ['/error']});
  return mod;
}),
```

## Footer

The footer component has been made with 6 columns that can be overriden when needed. overriding a column is optional.

### Default usage

```HTML
<ws-footer
  [currentUser]="user"
  (loginClick)="login()"
  (logoutClick)="logout()"
  [isLoggedIn]="isLoggedIn">
</ws-footer>
```

### Footer Overriding a single column

```HTML
<!-- Create the template -->
<ng-template #override5>
  <h1>Social</h1>
  <ul>
    <li><a href="https://www.facebook.com/WorldSkills" target="_blank"><i class="fa fa-facebook-official mr-3"></i>Facebook</a></li>
    <li><a href="https://twitter.com/WorldSkills" target="_blank"><i class="fa fa-twitter mr-3"></i>Twitter</a></li>
    <li><a href="https://www.youtube.com/user/WorldSkillsTV" target="_blank"><i class="fa fa-youtube-play mr-3"></i>YouTube</a></li>
    <li><a href="https://www.flickr.com/photos/worldskills/collections/" target="_blank"><i class="fa fa-flickr mr-3"></i>Flickr</a></li>
    <li><a href="http://instagram.com/worldskills/" target="_blank"><i class="fa fa-instagram mr-3"></i>Instagram</a></li>
  </ul>
</ng-template>

<!-- Inject the custom template into the component -->
<ws-footer
  [currentUser]="user"
  (loginClick)="login()"
  (logoutClick)="logout()"
  [isLoggedIn]="isLoggedIn"
  [col5Template]="override5">
</ws-footer>
```

### Footer All overridable columns

* `col1Template`
* `col2Template`
* `col3Template`
* `col4Template`
* `col5Template`
* `col6Template`

### Footer Input properties

* `currentUser`: the current logged in user.
* `isLoggedIn`: indicate if the current user is logged in

### Footer Output events

* `loginClick`: when the login button is clicked.
* `logoutClick`: when the logout button is clicked

## Vote Control

### Default usage

```HTML
<app-vote-control
  [showEditButton]="true"
  [showResetButton]="true"
  [showDeleteButton]="true"
  [poll]="poll"
  [results]="results"
  [voted]="voted"
  (viewChange)="viewChanged($event)"
  (voteSelected)="voteSelected($event)"
  (edit)="edit($event)"
  (reset)="reset($event)"
  (delete)="delete($event)">
  </app-vote-control>
```

### Vote Control Input properties

* `poll`: an instance off poll-view.
* `results`: an array of result-view instances.
* `voted`: an intance of the voted-view.
* `showEditButton`: weather or not the edit button will show.
* `showResetButton`: weather or not the reset button will show.
* `showDeleteButton`: weather or not the delete button will show.

### Vote Control Overridable templates

* `beforeOptionsTemplate` - appears before the options are dispalyed
* `afterOptionsTemplate` - appears after the options are displayed
* `beforeResultTemplate` - appears before the results are dispalys
* `afterResultTemplate` - appears after the results are displayed
* `titleTemplate` - replaces the default title template
* `footerTemplate` - replaces the default footer template
* `questionTemplate` - replaces the default question template

### Vote Control Output events

* `viewChange`: triggers when the view changes.
  * `viewChange(view: string)`
  * view names:
    * `question`: the question view the lists options
    * `result`: the view that shows the results
* `voteSelected`: trigger when the user votes
  * `voteSelected(optionId: number)`
* `edit`: triggers when the edit button is clicked
  * `edit(poll: PollView)`
* `reset`: triggers when the reset button is clicked
  * `reset(poll: PollView)`
* `delete`: triggers when the delete button is clicked
  * `delete(poll: PollView)`

## Datetime Picker

### Default Usage

```HTML
  <ws-datetime-picker [(ngModel)]="dateTime" (change)="dateTimeChange($event)"></ws-datetime-picker>
```

## To be continued

As we touch more parts of the library more documentation would be added.
