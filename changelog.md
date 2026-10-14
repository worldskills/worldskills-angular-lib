# Changelog

## @worldskills/ng-ui

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
