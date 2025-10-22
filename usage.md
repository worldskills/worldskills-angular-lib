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
the default route is `/not-authorized` this can be overriden through the config.

## The Config

The config service based.
The ideal place to override config will be from the `app.component.ts' file.

```TypeScript

constructor(private wsi: WorldskillsAngularLibService) {
}
ngOnInit() {
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
    httpConfig.encoderUriPatterns = [];
    httpConfig.authUriPatterns = ['http://localhost:8081'];
    this.wsi.httpConfigSubject.next(httpConfig);

    const serviceConfig = this.wsi.serviceConfigSubject.getValue();
    serviceConfig.appCode = [500];
    serviceConfig.apiEndpoint = 'http://localhost:8081';
    this.wsi.serviceConfigSubject.next(serviceConfig);
}
```

## Footer

The footer component has been made with 6 columns that can be overriden when needed. overriding a column is optional.

### Default Footer usage

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

### Default Vote Control usage

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

## Filtering Data with `wsFilter` Pipe

The `wsFilter` pipe is a versatile tool for filtering arrays in Angular templates.
It supports two modes: **search by string across specific keys** and **filter by custom predicate**.

### 1. Filter by Search Term (with Keys)

Use this form when you want to filter a list by a string value across one or more object properties.

#### Syntax

```html
{{ items | wsFilter: searchTerm : ['key1', 'key2', ...] }}
```

#### Example

```typescript
items = [
  { name: 'Alice', role: 'Admin' },
  { name: 'Bob', role: 'User' },
  { name: 'Charlie', role: 'Moderator' },
];
searchTerm = 'a';
```

```html
<li *ngFor="let user of items | wsFilter: searchTerm : ['name', 'role']">
  {{ user.name }} – {{ user.role }}
</li>
```

**Result:**

* Displays `Alice` and `Charlie` because the letter **a** appears in either `name` or `role`.

---

### 2. Filter by Custom Predicate

If you need more complex filtering logic, pass a predicate function.

#### Syntax

```html
{{ items | wsFilter: predicateFn }}
```

#### Example

```typescript
items = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
];

isAdult = (user: { name: string; age: number }) => user.age >= 25;
```

```html
<li *ngFor="let user of items | wsFilter: isAdult">
  {{ user.name }} ({{ user.age }})
</li>
```

**Result:**

* Displays `Alice` and `Bob` because they meet the condition `age >= 25`.

---

### Notes

* When using the search mode, ensure you pass the `keys` array to specify which fields to search.
* The pipe is **pure**, so it won’t recalculate unless the array or arguments change.
* If `items` is `null`, empty, or the filter argument is falsy, the original array is returned unmodified.

## Copy To Clipboard

```Typescript
// Async usage with modern API
const success = await ClipboardUtil.copyTextToClipboard('Hello World!');
if (success) {
  console.log('Text copied successfully!');
}

// Copy from input element
const inputElement = document.getElementById('myInput') as HTMLInputElement;
const success = await ClipboardUtil.copyInputToClipboard(inputElement);

// Check API support
if (ClipboardUtil.isClipboardAPISupported()) {
  console.log('Modern clipboard API is available');
}
```

## Array util
```Typescript
// Modern deduplication
const unique = ArrayUtil.dedupePrimitive([1, 2, 2, 3, 1]); // [1, 2, 3]

// Object deduplication by key
const users = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}, {id: 1, name: 'John'}];
const uniqueUsers = ArrayUtil.dedupeByKey(users, user => user.id);

// Recursive flattening
const nested = [{id: 1, children: [{id: 2, children: [{id: 3}]}]}];
const flat = ArrayUtil.flatten(nested, true);

// Chunking
const chunks = ArrayUtil.chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]

// Grouping
const grouped = ArrayUtil.groupBy(users, user => user.department);

// Array operations
const common = ArrayUtil.intersection([1, 2, 3], [2, 3, 4]); // [2, 3]
const diff = ArrayUtil.difference([1, 2, 3], [2, 3, 4]); // [1]

// Safe operations
const element = ArrayUtil.safeGet(arr, 100); // undefined if out of bounds
const moved = ArrayUtil.move([1, 2, 3], 0, 2); // [2, 3, 1]
```

## To be continued

As we touch more parts of the library more documentation would be added.
