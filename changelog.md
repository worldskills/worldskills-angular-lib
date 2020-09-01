# Changelog

## 10.4.0

* Added overidable templates for the vote control
  * `optionsTemplate` - override the option selection area
  * `resultTemplate` - override the results display area
  * `controlBarLeftTemplate` - override the left control buttons
  * `controlBarRightTemplate` - override the right management buttons

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

## 8.8.1

* Small fix for wsSelect items (accept undefined items during initialization)
* Added grouping function to wsSelect

## 8.8.0

* Cross Browser date helper functions
* Added simplified `wsSelect` directive for easy `ng-select` setups
* fixes and services behaviour input to entity tree

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
