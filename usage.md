# Library usage

This will contain examples of how components are used.

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

### Overriding a single column

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

### All overridable columns

* `col1Template`
* `col2Template`
* `col3Template`
* `col4Template`
* `col5Template`
* `col6Template`

### Input properties

* `currentUser`: the current logged in user.
* `isLoggedIn`: indicate if the current user is logged in

### Output events

* `loginClick`: when the login button is clicked.
* `logoutClick`: when the logout button is clicked

## To be continued

As we touch more parts of the library more documentation would be added.
