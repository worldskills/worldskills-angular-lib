# Changelog

## 12.0
* Upgrade to angular 15
* upgrade libraries to more modern versions

## 11.6
* 11.6.0 Add sentry as a dependany and include a sentry helper method

## 11.5
* 11.5.12 FIX Vote controller not refreshing
* 11.5.11 FIX circular dep error
* 11.5.10 Improve null handling in vote control
* 11.5.8/9 FIX: sorting markup
* 11.5.7 Order poll options by points
* 11.5.6 FI translation update
* 11.5.5 FIX: correct suffix for "rd" ordinals
* 11.5.4 When anonymous results ensure that only the owner can view who voted
* 11.5.3 Alter whitelist message positions + disable abstain button if you are not a whitelisted voter
* 11.5.2 FIX: Manage button view permissions + added a note for non-whitelisted voters
* 11.5.1 Export poll-person-model
* 11.5.0 Whitelist support into vote control

## 11.4

* 11.4.8 FIX: lib version not picking up
* 11.4.7 FIX poll variable
* 11.4.6 FIX view permissions on Open/Close buttons + translation support
* 11.4.5 Open/Close voting management buttons
* 11.4.4 FI Translations + url flexibility on redirect
* 11.4.3 BUG FIX: app_code could potentially be empty when getting logged in user
* 11.4.2 BUG FIX: When a poll is marked for anonymous results, allow the owner to see the vote results
* 11.4.1 Support for ngModel in i18n text component and fixes
* 11.4.0 Introduction of the i18n text component which supports multiple translations in a single textbox control.

## 11.3

* 11.3.3 Prevent HTTP 404 errors for unsupported language files, console warning instead
* 11.3.2 Better handle unsupported languages
* 11.3.1 Improve Initial language detection so that we do not load json files for language that do not exist
* 11.3.0 Allow the mapping of alternate lang codes

## 11.2

* 11.2.5 Add ability to set DatetimePickerComponent's TextBox to readonly
* 11.2.4 Open resources links in a new tab
* 11.2.3 FIX Typo in footer (english)
* 11.2.2 FIX: potential undefined language selection. deffault to en if requessted language is not defined.
* 11.2.0 Include Default modals and a modal service to ptorgramtaiccally manage these modals. Any application can register their cusstom modalss in this modal service

## 11.1

* 11.1.6 Accept-language heaader when http params for lang enabled
* 11.1.6 release latest FI ttranslations 
* 11.1.5 optional: append languagge query param to api requests
* 11.1.4 auto Merge missing keys into translations
* 11.1.3 bug fixes on translate keys
* 11.1.2 translations: de and fi
* 11.1.1 FIX: relative date. correct formatting of value
* 11.1.0 user prefered language
* 11.1.0 Bootstrap Toast notifications
* 11.1.0 Depreccate relative date pipe - stays in the lib for compatibility but should be removed on the next major version
* 11.1.0 Convert relative date from pipe to component + translation keys

## 11.0

* 11.0.6 poll translations
* 11.0.5 auth translations + minor refactor
* 11.0.4 Translattions for header and footer
* 11.0.3 FIX: onLangChanged inittiatlization
* 11.0.2 fallback `onLangChanged` event for lazy loaded scenarios
* 11.0.1 i18n exports
* 11.0.0 baked ngx-translate into the library and is now a dependancy (lib translations need to be in a ts file, this is fine as even as when the JSON files are updates, we need to recompile and publish the library).

## 10.25

* 10.25.3 - export lang util
* 10.25.2 - add moment library under peerDependencies
* 10.25.1 - export resource-thumbnail.component and resource-thumbnail-container.component in public-api.ts
* 10.25.0 - set default minDate in datetime-picker to allow scrollable year options
* 10.25.0 - use moment.js to convert local date string
* 10.25.0 - minor cleanup
* 10.25.0 - improved asset copy

## 10.24

* 10.24.0 - Translations nonw exist in the lib, backward compatible

## 10.23

* 10.23.0 - update resource thumbnail and add multiple resource thumbnails container 

## 10.22

* 10.22.3 - update font urls
* 10.22.2 - fix ws-datetime-picker custom datetime format
* 10.22.1 - add open/close methods on the poll service
* 10.22.0 - linting fixes
* 10.22.0 - updated http util
* 10.22.0 - added helper methods for handling errors

## 10.21

* 10.21.0 - fixed ng-select dependency
* 10.21.0 - introduced support email config along with the translation prompt.

## 10.20

* 10.20.2 PATCH Allow calling applications to format relative date output if needed
* 10.20.1 FIX Uppercase terms don't register with entity tree search
* 10.20.0 allow items to be added to the dropdown menu

## 10.19

* 10.19.0 introduced Error Helper and HTTP methods to help validate a user session

## 10.18

* 10.18.0 - poll-list get by slug

## 10.17

* 10.17.3 - poll_list now contains entityPath
* 10.17.2 - poll_list.title is now i18n
* 10.17.1 - export poll_list objects
* 10.17.0 - Introduce poll_list support

## 10.16

* 10.16.0 - support for file thumbnail preview

## 10.15

* 10.15.2 - Relative date control now supports future dates. vote control now supports relative date.
* 10.15.1 - Fix code style in entity tree server + improved managemeent button templates on vote control
* 10.15.0 - support for multiple alert components and some http util fixes

## 10.14

* 10.14.10 - Included the points property in the results interface and applied it accordingly
* 10.14.7 - improved results accuracy for multiselect and weighted polls
* 10.14.6 - cleanup and fixes on the voter summary view
* 10.14.5 - Minor code refactor + new voter summary view
* 10.14.4 - FIX: markup for export button
* 10.14.3 - introduce poll result expost
* 10.14.2 - Added position name to poll results hover
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
