# Changelog

## @worldskills/ng-ui

### 1.12.0 — Skeleton Loaders

**New**
- `ws-ng-ui-skeleton-list` (`WsSkeletonListComponent`): placeholder rows shaped like a loading list (`rows`, `avatar` circle / square / none, `lines`, `meta`). Announced as busy for screen readers.
- `ws-ng-ui-loadable` accepts a `#wsLoading` template, shown instead of the spinner while loading.

### 1.11.0 — Shared Building Blocks from the Organizations App

**New**
- Loading: `loadable()` (signal state with `reload()` / `refresh()`), `ws-ng-ui-loadable`, `ws-ng-ui-load-error`
- Forms: `ws-ng-ui-field` (label, required `*`, hint, `info` tooltip, translated first error), `editDialog()`
- Layout: `ws-ng-ui-section`, `ws-ng-ui-empty-state`, `ws-ng-ui-icon-action`, `ws-ng-ui-tile`
- `ws-ng-ui-image-lightbox` with size, ratio and a flag-proportion check
- Pipes: `wsExternalUrl`, `wsTelHref`, `wsPhoneDisplay`, `wsMailto`, `wsPersonName` (+ `personName()`)
- App setup: `wsFeatures()` (UI feature toggles with a route guard), `provideWsNoAutofill()`
- `@worldskills/ng-ui/editor` (optional entry point, needs `quill`): `ws-ng-ui-rich-text-editor`, `ws-ng-ui-rich-text-view`, `WS_RICH_TEXT_FORMATS`

**Improved**
- `ws-ng-ui-dialog`: `formId` (+ `saving`, `saveDisabled`, `saveLabel`, `cancelLabel`) adds a Cancel / Save footer that submits the form
- `WsConfirmService`: translated default buttons; `translate: true` (+ `params`) takes translation keys
- `BreadcrumbService.setTrail()` / `clearTrail()` for click-following breadcrumbs
- `ws-ng-ui-page-header`: `backQueryParams`
- `ws-ng-ui-alert`: projected content (e.g. a button) after the message
- New `ws_ui.actions`, `field`, `load_error`, `image_lightbox` and `rich_text` texts in all 8 languages

**Fixed**
- Tree select: uses the `--ws-` theme variables (border, colours, focus ring) and the select's padding and text size
- `WsConfirmService.danger()`: an option passed as `undefined` no longer replaces the "Delete" label

### 1.10.0 — Page Help

**New — `@worldskills/ng-ui/help` (optional entry point)**
- `ws-ng-ui-help-overlay` (`WsHelpOverlayComponent`): a floating **?** that outlines every help point on the page with numbered badges and a legend at the side (the page slides over; nothing is covered). WorldSkills brand styling; respects reduced motion
- `[wsHelp]` (`WsHelpDirective`): marks a section as a help point. Only rendered elements count, so help follows the page's permission checks
- `provideWsHelp({ pages, textPrefix?, warnings? })` and `WsHelpService` (`open`, `toggle()`, `points`, `setPage()`)
- Dev-mode console warnings: unknown or duplicate points, missing texts
- `ws-help-check` CLI (package `bin`): fails lint/CI when routes, the pages file, `wsHelp` markers and the English texts drift apart
- Translations `ws_ui.help.*` in all 8 locales; `body.ws-help-open` rule in `theme.css`
- Storybook story: Page Help. Guide: `help/README.md`

### 1.9.0 — Search Select, Page Header & Packaging Fixes

**New**
- `ws-ng-ui-search-select` (`WsSearchSelectComponent`) — server-side search select wrapping PrimeNG AutoComplete. Replaces `[wsSelect]` + ng-select from worldskills-angular-lib. ControlValueAccessor, single or multiple, cancels stale requests, `WsSearchFn<T>` type exported
- `ws-ng-ui-page-header` (`WsPageHeaderComponent`) — page title bar with back link, subtitle, details and media/actions slots
- Translations `ws_ui.search_select.*` and `ws_ui.page_header.back` in all 8 locales
- Storybook stories: Search Select, Page Header

**New — `@worldskills/ng-ui/sentry` (optional entry point)**
- `provideWsSentry({ dsn, environment, release?, enabled?, debug?, ignoreUrlPatterns? })` — initialises Sentry, reports unhandled errors via Angular's `ErrorHandler`, tags events with the WorldSkills user id only (no names/emails), strips query strings from breadcrumbs. No performance tracing
- `wsSentryHttpInterceptor` — reports unexpected API failures (5xx, network errors); 4xx are not reported. Events are grouped by method + path (ids normalised) + status and never include request/response bodies or query strings
- `WsSentryService` — `captureApiError()`, `captureException()`, `setUserId()`
- Requires `@sentry/angular` (optional peer dependency — only apps importing `@worldskills/ng-ui/sentry` need it)

**Breaking**
- `ErrorUtil.captureAPIError` removed from the main entry point (and with it the hard dependency on `@sentry/browser`). Use `WsSentryService.captureApiError()` from `@worldskills/ng-ui/sentry`

**Fixed**
- `ErrorUtil.getErrorMsg` returned the default message when the API sent a user message (and vice versa). It now returns the API `user_msg` when present
- `ErrorUtil.hasApiError` now returns a boolean
- Declared missing peer dependencies: `primeng`, `@primeuix/themes`, `@worldskills/ng-auth`, `@angular/forms`, `@angular/router`, `rxjs`
- Unit test suite compiles and runs again (footer, header and banner specs updated for standalone components); `ng test` also runs the `sentry` entry point specs
- `GETTING_STARTED.md`: Tailwind v4 setup (PostCSS, no `tailwind.config.js`), `@source` line for library templates, `ConfirmationService` provider, real `WsConfirmService` and `BreadcrumbService` APIs, docs for the new components and ng-auth role directive/guard

### 1.8.6 — Relative Date Pipe: Months & Years

**Improved**
- `wsRelativeDate` pipe now covers months and years before falling back to a formatted date: `month_ago` / `months_ago` (30–364 days), `year_ago` / `years_ago` (365+ days), and matching future branches
- Default `thresholdInDays` changed from `30` to `Infinity` — the pipe always returns a relative label unless a threshold is explicitly passed
- Added full `relative_date` translation block to all 7 non-English locales (ar_AE, de, fi, fr, pt_BR, ru_RU, zh_CN) — these were previously absent, causing keys to fall through untranslated

### 1.8.5 — Tree Select Scroll-to-Selected Fix
- **Fixed** Tree select: opening the dropdown now scrolls to the selected node using native `scrollIntoView` (previous implementation targeted the wrong scroll container and had no effect)

### 1.8.4 — Tree Select Chevron Alignment Fix
- **Fixed** Tree select: expand chevron aligns to the top of the row when a node label wraps to multiple lines

### 1.8.3 — Button Colour & Pink Palette Fix
- **Fixed** Default `pButton` now renders in `ws-pink` (WS brand CTA colour) instead of `ws-blue` — consuming apps no longer need `::ng-deep` or `!important` overrides
- **Fixed** `ws-pink` palette corrected: uses `#D51067` as the 500 base, aligning with `--pink` in `theme.css`, with proper tint/shade scale

### 1.8.2 — Design Token Export Fix
- **Fixed** `styles/theme.css`: added `:root` block so CSS tokens (`--pink`, `--primary`, etc.) are available to consuming apps

### 1.8.1 — Header Title Alignment Fix
- **Fixed** Header: corrected vertical alignment of the application title relative to the WorldSkills wordmark

### 1.8.0 — Angular 20 & Style Assets
- Updated peer dependencies to Angular `^20.3.0`
- `fonts.css` and `theme.css` now included in the published package — import via `@worldskills/ng-ui/styles/fonts.css` and `@worldskills/ng-ui/styles/theme.css`

### 1.7.0 — Breadcrumb & Sub-menu Improvements
- **New** Breadcrumb: `showHome` input to optionally hide the Home route (defaults to `true`)
- **Fixed** Header sub-menu items right-aligned to match the end of the main navigation

### 1.6.0 — Brand Colors & Preset Separation
- Added full WS brand colour palette as PrimeNG primitive tokens (50–950 shades): `ws-blue`, `ws-blue-dark`, `ws-cyan`, `ws-teal`, `ws-purple`, `ws-pink`, `ws-orange`, `ws-yellow`, `ws-red`, `ws-green`, `ws-gray`
- Added semantic mappings: primary → ws-blue, info → ws-cyan, success → ws-green, warn → ws-yellow, danger → ws-red
- Separated component design tokens into individual files under `preset/`
- PT additions: dialog default width, fieldset legend layout, card surface background

### 1.5.0 — Data Table, Announcements & Navigation
- **New** `WsDataTableComponent` — virtual scroll, inline/modal editing, delete confirmation, global + column filters, lazy server-side mode
- **New** `WsAnnouncementComponent` — long-form alert with HTML, truncation, "Read more" toggle, 4 severity variants
- Header: sub-items now render in a horizontal sub-menu bar; active state via signal; content constrained to `max-w-screen-xl`
- `ChangeDetectionStrategy.OnPush` applied to all components
- Various bug fixes: data table row revert, spinner interval guard, i18n lang validation, poll casting, null-safe header user name

### 1.2.0 — Role-based Menu Access & 401 Handling
- `MenuItem.requiredRoles` supports plain strings, blanket roles, and entity-specific roles
- `wsHttpInterceptor` clears stale session on 401

### 1.1.0 — Signal Migration & i18n
- All components migrated to signal inputs/outputs/computed/effects
- Added `FileUtil.getFileIcon()` and translation keys for 8 locales

### 1.0.0 — Initial Release
- Standalone components: header, footer, breadcrumb, banners, alerts, toast, dialogs, tree select, polls, awards, resources, spinner
- Common utilities, pipes, interceptor, i18n (8 locales)

---

## @worldskills/ng-auth

### 3.3.0 — Role Directive & Functional Guard
- **New** `*wsHasRole` structural directive (`HasRoleDirective`) — replaces `*wsUserRole` from worldskills-angular-lib. Inputs: roles, `appCode`, `entity`, `all`, `negate`. Signal-based; content is removed again when the user loses the role
- **New** `roleGuard(roles?)` functional `CanActivateFn` — falls back to route `data.roles` when called without arguments
- **New** `hasRoles(user, options)` role check utility (same semantics as ng-ui `UserRoleUtil`)
- **New** `GuardService.checkAccess(roles, state)` — shared logic behind `canActivate` and `roleGuard`
- **New** Constants exported (`RETURN_URL_KEY`, `USER_CURRENT_KEY`, …)
- **Fixed** `GuardService` no longer uses the deprecated `toPromise()`
- Added `@angular/router` to peer dependencies

### 3.2.1 — 401 Interceptor Exclusion Patterns
- **New** `AuthLibConfig.redirectOn401ExcludePatterns` — URL string or `RegExp` patterns exempt from the 401 redirect even when `autoRedirectOn401: true`

### 3.2.0 — 401 Auth Interceptor
- **New** `wsAuthInterceptor` — calls `OAuthService.initCodeFlow()` on 401. Opt-in via `autoRedirectOn401: true` in `provideWsNgAuth()`. Register with `provideHttpClient(withInterceptors([wsAuthInterceptor]))`
- **New** `AuthLibConfig.autoRedirectOn401` flag (defaults to `false`)

### 3.1.0 — Session Validation & Provider Rename
- Auto-validates session on tab focus via `ping()`
- `provideLibraryConfig()` renamed to `provideWsNgAuth()`

### 3.0.0 — Service Overhaul & Async Guard
- **Breaking** `currentUser` is now private — use `currentUser$` or `currentUser` getter
- **Breaking** `GuardService.canActivate` is async, awaits `ready` before auth check
- **Breaking** `getLoggedInUser()` defaults to `showCollapsedChildRoles: true`
- Exposed `ready: Promise<void>` for post-OIDC initialisation; guard returns `UrlTree` for unauthorised

### 2.0.0 — Redirect Handler Consolidation
- **Breaking** `RedirectEventHandler` removed — use `RedirectHandler`
- `handle(options?)` covers returnUrl, async `resolveLandingPage`, and `defaultRoute` fallback

### 1.0.0 — Initial Release
- OIDC authentication via `angular-oauth2-oidc`
- `provideWsNgAuth()` config provider, auth service, guard, typed user/role models

## @worldskills/worldskills-angular-lib (legacy)

The previous library, maintained on the `legacy/v15` branch for apps that still use it.

### 15.0
* 15.1.2 Use lib translations for i18ntext component
* 15.1.1 scripts to compile language files automatically
* 15.1.1 footer update: registrations is now Horizon
* 15.1.0 Add error event to the upload service
* 15.0.1 FIX: update ngx-translate peer deps (should be 17.0.0)
* 15.0.0 Angular 20

### 14.0
* 14.2.0 Improve Ordinal Util
* 14.2.0 update Array Util
* 14.1.0 Copy to clipboard functionality
* 14.0.14 custom view template for votes control
* 14.0.13 fixed typo in vote control
* 14.0.12 implement `wsFilter` pipe to filter array of objects based on key or predicate. 
* 14.0.11 extend toast notifications + implement toast notifiations on the vote control
* 14.0.10 implement`dependsOn`in polls
* 14.0.9 wsTranslate caters for complex keys
* 14.0.8 implement wsTranslate internally
* 14.0.7 implement wsTranslate pipe to support standalone cmoponents
* 14.0.6 make the lib compatible with standalone components
* 14.0.5 remove WiW from footer
* 14.0.4 update fonts: replace frutiger with inter
* 14.0.3 implement new caching strategy for entity tree component (legacy active by default). add `[cacheStyle]` param with any value other than `legacy` to activate teh new caching.
* 14.0.3 add a caching service that supports session and local cache storages
* 14.0.2 update ngx-translate
* 14.0.1 update bootstrap
* 14.0.0 Update to angular 18

### 13.2
* 13.2.2 fix `lastSearch` potentially breaking pages
* 13.2.1 ensure we always set `show_child_roles=false` as the default is set to `true` in the API 
* 13.2.0 replace `show_child_roles` with `show_colapsed_child_roles` in the auth service
* 13.2.0 added `ws_entity_ids` to the Role model and updated the logic in `UserRoleUtil`

### 13.1

* 13.1.0 Added `public extra information` field to PersonAward

### 13.0

* 13.0.0 Changed awards `presented_at` from string to number

### 12.3

* 12.3.3 Added `sort` to award object
* 12.3.2 
   - Set fallback lang code to 'en' in WsHttpInterceptor
   - Fix ws-auth-footer translation
   - Remove printed object value in RecipientAwardForm
* 12.3.1 Fix RecipientAwardCertificate null handling 
* 12.3.0 Added `ws-recipient-award-certificate-form` component

### 12.2

* 12.2.2 Fix RouterLink for RecipientAwardList component and added "GMT+0" in last_updated of PersonAward.
* 12.2.1 Fix API-Awards URL
* 12.2.0 Update Awards components' selector

### 12.1

* 12.1.0 Added centralised awards component for PersonAward, MemberAward and OrganizationAward

### 12.0
* Upgrade to angular 15
* upgrade libraries to more modern versions

### 11.6
* 11.6.0 Add sentry as a dependency and include a sentry helper method

### 11.5
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

### 11.4

* 11.4.9 Add Italian to getDefaultLanguages
* 11.4.8 FIX: lib version not picking up
* 11.4.7 FIX poll variable
* 11.4.6 FIX view permissions on Open/Close buttons + translation support
* 11.4.5 Open/Close voting management buttons
* 11.4.4 FI Translations + url flexibility on redirect
* 11.4.3 BUG FIX: app_code could potentially be empty when getting logged in user
* 11.4.2 BUG FIX: When a poll is marked for anonymous results, allow the owner to see the vote results
* 11.4.1 Support for ngModel in i18n text component and fixes
* 11.4.0 Introduction of the i18n text component which supports multiple translations in a single textbox control.

### 11.3

* 11.3.3 Prevent HTTP 404 errors for unsupported language files, console warning instead
* 11.3.2 Better handle unsupported languages
* 11.3.1 Improve Initial language detection so that we do not load json files for language that do not exist
* 11.3.0 Allow the mapping of alternate lang codes

### 11.2

* 11.2.5 Add ability to set DatetimePickerComponent's TextBox to readonly
* 11.2.4 Open resources links in a new tab
* 11.2.3 FIX Typo in footer (english)
* 11.2.2 FIX: potential undefined language selection. deffault to en if requessted language is not defined.
* 11.2.0 Include Default modals and a modal service to ptorgramtaiccally manage these modals. Any application can register their cusstom modalss in this modal service

### 11.1

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

### 11.0

* 11.0.6 poll translations
* 11.0.5 auth translations + minor refactor
* 11.0.4 Translattions for header and footer
* 11.0.3 FIX: onLangChanged inittiatlization
* 11.0.2 fallback `onLangChanged` event for lazy loaded scenarios
* 11.0.1 i18n exports
* 11.0.0 baked ngx-translate into the library and is now a dependancy (lib translations need to be in a ts file, this is fine as even as when the JSON files are updates, we need to recompile and publish the library).

### 10.25

* 10.25.3 - export lang util
* 10.25.2 - add moment library under peerDependencies
* 10.25.1 - export resource-thumbnail.component and resource-thumbnail-container.component in public-api.ts
* 10.25.0 - set default minDate in datetime-picker to allow scrollable year options
* 10.25.0 - use moment.js to convert local date string
* 10.25.0 - minor cleanup
* 10.25.0 - improved asset copy

### 10.24

* 10.24.0 - Translations nonw exist in the lib, backward compatible

### 10.23

* 10.23.0 - update resource thumbnail and add multiple resource thumbnails container 

### 10.22

* 10.22.3 - update font urls
* 10.22.2 - fix ws-datetime-picker custom datetime format
* 10.22.1 - add open/close methods on the poll service
* 10.22.0 - linting fixes
* 10.22.0 - updated http util
* 10.22.0 - added helper methods for handling errors

### 10.21

* 10.21.0 - fixed ng-select dependency
* 10.21.0 - introduced support email config along with the translation prompt.

### 10.20

* 10.20.2 PATCH Allow calling applications to format relative date output if needed
* 10.20.1 FIX Uppercase terms don't register with entity tree search
* 10.20.0 allow items to be added to the dropdown menu

### 10.19

* 10.19.0 introduced Error Helper and HTTP methods to help validate a user session

### 10.18

* 10.18.0 - poll-list get by slug

### 10.17

* 10.17.3 - poll_list now contains entityPath
* 10.17.2 - poll_list.title is now i18n
* 10.17.1 - export poll_list objects
* 10.17.0 - Introduce poll_list support

### 10.16

* 10.16.0 - support for file thumbnail preview

### 10.15

* 10.15.2 - Relative date control now supports future dates. vote control now supports relative date.
* 10.15.1 - Fix code style in entity tree server + improved managemeent button templates on vote control
* 10.15.0 - support for multiple alert components and some http util fixes

### 10.14

* 10.14.10 - Included the points property in the results interface and applied it accordingly
* 10.14.7 - improved results accuracy for multiselect and weighted polls
* 10.14.6 - cleanup and fixes on the voter summary view
* 10.14.5 - Minor code refactor + new voter summary view
* 10.14.4 - FIX: markup for export button
* 10.14.3 - introduce poll result expost
* 10.14.2 - Added position name to poll results hover
* 10.14.1 - introduced person specific details in the vote traccking records
* 10.14.0 - Introduced voer images for non-anonymous results

### 10.13

* 10.13.4 - Small fix auth header
* 10.13.3 - Allow Poll Owners to view poll results at any time
* 10.13.2 - FIX option selection on weighted polls
* 10.13.1 - Introduce copy-poll method
* 10.13.0 - Implement Poll Copy api method
* 10.13.0 - Vote Control - confirm before abstain is fires is optional

### 10.12

* 10.12.7 - FIXED typo within the vote control
* 10.13.6 - FIXED ref to the parent item when the sunmenu is active
* 10.12.4 - FIXED submenu detection
* 10.12.3 - improved null detection on menu items
* 10.12.3 - updated redirect examples
* 10.12.2 - Refactor: constants in the auth feature
* 10.12.1 - Allow Nullable sub-menu items on a menu item.

### 10.11

* 10.11.0 - Sub-menu support
* 10.11.0 - Fix disabled in date-range

### 10.10

* 10.10.3 - the `Poll` object now has an option `userVote` property
* 10.10.2 - Add `message` attribute for `ws-staging-banner`
* 10.10.0 - Template positions for header components
  * `appNameTemplate`
  * `menuTemplate`

### 10.9.0

* The breadcrumb home item can now be manipulated by the BreadCrumbSerbice
* upgraded redirect handler with some new features and some behavioural fixes:  
  * instead of passing a fail handler, the redirect handler now is returning an observable, which is the angular way of handling async operations  
  * added an option to only redirect if the route is exact (this way you can nest children in the home component without always redirecting)  
  * turned into service
* fixes/additions to custom elements form styles

### 10.8.0

* servicec method for abstaining and clearing an abstain.

### 10.7.0

* Abstain mechanism for votes
* Vote Control result messsages for abained votes and anonymous poll.
* fixed option ordering on weighed and multi-select votes

### 10.6.0

* intorduced a handler for poll option handling.

### 10.5.0

* added config based not-authorized redirect to GuardService.
* created behavioral user subject to check for latest user on auth service.
* made all configs replay subjects rather than behavioral subjects.
* added zero config header / footer.

### 10.4.0

* Added overidable templates for the vote control.
  * `optionsTemplate` - override the option selection area.
  * `resultTemplate` - override the results display area.
  * `controlBarLeftTemplate` - override the left control buttons.
  * `controlBarRightTemplate` - override the right management buttons.

### 10.3.0

* Added `[wsUserRole]` directive
* Refactored code base
* Added `html` util
* Added `i18n` util
* Added `router` util
* Added `rxjs` util
* Added `user-role` util

### 10.2.0

* Poll track records
* Small fix `datetime-picker`

### 10.1.0

* Vote control now supports the `multiselect` type.
* Added async search functions for `[wsSelect]`
* Added `disableEntities` attribute for `ws-entity-tree-select`
* Added form styles for `ng-select` and `ws-entity-tree-select`
* Updated examples

### 10.0.0

* Port to angular 10
* Changed project structure to be more modular
* Config is now service based and does not need to be done at the module level
* Shared code (not specificc to any feature) now exists under a common subfolder
* Refactor of auth
* Redirection code has been moved to a handler class - this will be easier to extend and override

### 9.1.0

* You can now overwrite the redirect functionality when user logs and and the there is no return URL

### 9.0.0

* fixes to entity tree selector

### 8.8

* 8.8.1 - Small fix for wsSelect items (accept undefined items during initialization)
* 8.8.1 - Added grouping function to wsSelect
* 8.8.0 - Cross Browser date helper functions
* 8.8.0 - Added simplified `wsSelect` directive for easy `ng-select` setups
* 8.8.0 - fixes and services behaviour input to entity tree

### 8.7.0

* Added entity tree select component
* userService.getUser
* userService.getUserByPerson

### 8.6.0

* Introduced configurable language selector

### 8.5.0

* Introduced models for WS Auth Service
* Introduce the listUsers service method onto the UserService

### 8.4.0

* Added DateTime Picker

### 8.3.0

* Added template positions to the vote control.
* Added default templates to vote control.

### 8.2.0

* Visual and wording tweaks to the vote control.
* Improved vote control logic.

### 8.1.0

* Added `Extend` button to the vote control

### 8.0.0

* Allow multiple App Codes

### 7.11.0

* Introduced methods for handing the returnUrl

### 7.10.0

* Conditions edit, delete, and reset buttons for the vote control.

### 7.9.0

* Introduced the poll server

### 7.8.0

* session key `returnUrl` is now populated by the `AppAuthGuard` when a user tries to access a route while not logged in. this gives the app an opportunity to act on this `returnUrl` if that app chooses to.

### 7.7.0

* Introduced weighted voting Interface.

### 7.6.0

* The vote control is now modular.
* The poll results graph is now available as a separate component.
* The standard poll mechanism is now available as a separate component.

### 7.5.0

* Added a generic AppAuthGuard

### 7.4.0

* Introduced `forFn` method to allow for optional configuration.
* NOTE: the `forConfig` method will be falling away in the future.

### 7.3.0

* Added un-vote feature to the vote control.

### 7.2.0

* Introduced the poll service and related models.

### 7.1.0

* Introduced the vote-control and related models.

### 7.0.0

* Simplified the service config.

### 6.0.0

* Rework of the footer component.
* Footer now has 6 columns that ng-templates can be injected into.
* The first and last columns have  default templates that can be overridden.
* The columns in-between are blank by default
