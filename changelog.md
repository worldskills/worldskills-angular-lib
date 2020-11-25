# Changelog

## 10.14

* 10.14.1 - introduced person specific details in the vote traccking records
* 10.14.0 - Introduced voer images for non-anonymous results

## 10.13

* 10.13.4 - Small fix auth header
* 10.13.3 - Allow Poll Owners to view poll results at any time
* 10.13.2 - FIX option selection on weighted polls
* 10.13.1 - Introduce copy-poll method
* 10.13.0 - Implement Poll Copy api method
* 10.13.0 - Vote Control - confirm before abstain is fires is optional

## 10.12

* 10.12.7 - FIXED typo within the vote control
* 10.13.6 - FIXED ref to the parent item when the sunmenu is active
* 10.12.4 - FIXED submenu detection
* 10.12.3 - improved null detection on menu items
* 10.12.3 - updated redirect examples
* 10.12.2 - Refactor: constants in the auth feature
* 10.12.1 - Allow Nullable sub-menu items on a menu item.

## 10.11

* 10.11.0 - Sub-menu support
* 10.11.0 - Fix disabled in date-range

## 10.10

* 10.10.3 - the `Poll` object now has an option `userVote` property
* 10.10.2 - Add `message` attribute for `ws-staging-banner`
* 10.10.0 - Template positions for header components
  * `appNameTemplate`
  * `menuTemplate`

## 10.9.0

* The breadcrumb home item can now be manipulated by the BreadCrumbSerbice
* upgraded redirect handler with some new features and some behavioural fixes:  
  * instead of passing a fail handler, the redirect handler now is returning an observable, which is the angular way of handling async operations  
  * added an option to only redirect if the route is exact (this way you can nest children in the home component without always redirecting)  
  * turned into service
* fixes/additions to custom elements form styles

## 10.8.0

* servicec method for abstaining and clearing an abstain.

## 10.7.0

* Abstain mechanism for votes
* Vote Control result messsages for abained votes and anonymous poll.
* fixed option ordering on weighed and multi-select votes

## 10.6.0

* intorduced a handler for poll option handling.

## 10.5.0

* added config based not-authorized redirect to GuardService.
* created behavioral user subject to check for latest user on auth service.
* made all configs replay subjects rather than behavioral subjects.
* added zero config header / footer.

## 10.4.0

* Added overidable templates for the vote control.
  * `optionsTemplate` - override the option selection area.
  * `resultTemplate` - override the results display area.
  * `controlBarLeftTemplate` - override the left control buttons.
  * `controlBarRightTemplate` - override the right management buttons.

## 10.3.0

* Added `[wsUserRole]` directive
* Refactored code base
* Added `html` util
* Added `i18n` util
* Added `router` util
* Added `rxjs` util
* Added `user-role` util

## 10.2.0

* Poll track records
* Small fix `datetime-picker`

## 10.1.0

* Vote control now supports the `multiselect` type.
* Added async search functions for `[wsSelect]`
* Added `disableEntities` attribute for `ws-entity-tree-select`
* Added form styles for `ng-select` and `ws-entity-tree-select`
* Updated examples

## 10.0.0

* Port to angular 10
* Changed project structure to be more modular
* Config is now service based and does not need to be done at the module level
* Shared code (not specificc to any feature) now exists under a common subfolder
* Refactor of auth
* Redirection code has been moved to a handler class - this will be easier to extend and override

## 9.1.0

* You can now overwrite the redirect functionality when user logs and and the there is no return URL

## 9.0.0

* fixes to entity tree selector

## 8.8

* 8.8.1 - Small fix for wsSelect items (accept undefined items during initialization)
* 8.8.1 - Added grouping function to wsSelect
* 8.8.0 - Cross Browser date helper functions
* 8.8.0 - Added simplified `wsSelect` directive for easy `ng-select` setups
* 8.8.0 - fixes and services behaviour input to entity tree

## 8.7.0

* Added entity tree select component
* userService.getUser
* userService.getUserByPerson

## 8.6.0

* Introduced configurable language selector

## 8.5.0

* Introduced models for WS Auth Service
* Introduce the listUsers service method onto the UserService

## 8.4.0

* Added DateTime Picker

## 8.3.0

* Added template positions to the vote control.
* Added default templates to vote control.

## 8.2.0

* Visual and wording tweaks to the vote control.
* Improved vote control logic.

## 8.1.0

* Added `Extend` button to the vote control

## 8.0.0

* Allow multiple App Codes

## 7.11.0

* Introduced methods for handing the returnUrl

## 7.10.0

* Conditions edit, delete, and reset buttons for the vote control.

## 7.9.0

* Introduced the poll server

## 7.8.0

* session key `returnUrl` is now populated by the `AppAuthGuard` when a user tries to access a route while not logged in. this gives the app an opportunity to act on this `returnUrl` if that app chooses to.

## 7.7.0

* Introduced weighted voting Interface.

## 7.6.0

* The vote control is now modular.
* The poll results graph is now available as a separate component.
* The standard poll mechanism is now available as a separate component.

## 7.5.0

* Added a generic AppAuthGuard

## 7.4.0

* Introduced `forFn` method to allow for optional configuration.
* NOTE: the `forConfig` method will be falling away in the future.

## 7.3.0

* Added un-vote feature to the vote control.

## 7.2.0

* Introduced the poll service and related models.

## 7.1.0

* Introduced the vote-control and related models.

## 7.0.0

* Simplified the service config.

## 6.0.0

* Rework of the footer component.
* Footer now has 6 columns that ng-templates can be injected into.
* The first and last columns have  default templates that can be overridden.
* The columns in-between are blank by default
