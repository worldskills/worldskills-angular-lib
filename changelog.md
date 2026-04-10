# Changelog

## @worldskills/ng-ui

### 1.3.0 — Brand Fonts & Header Layout

**Typography**
- Added `fonts.css` with `@font-face` declarations for Inter (sans-serif, 18 variants) and Inria Serif (serif, 6 variants), loaded from `worldskills.org`
- Added `theme.css` with Tailwind `@theme` overrides: `--font-sans` → Inter, `--font-serif` → Inria Serif
- Updated `styles.scss` base `html`/`body` font-family to Inter with FrutigerLTW04 fallback
- Client apps import `fonts.css` and `theme.css` in their own `styles.scss` for full control

**Header**
- Header content now constrained to `max-w-screen-xl` with `mx-auto` centering, matching the footer layout
- Purple background extends full width; content is centered within the max-width container
- App name font size increased to `text-xl` to match the wordmark

---

### 1.2.0 — Role-based Menu Access & 401 Handling

**Menu access control**
- `MenuItem.requiredRoles` now accepts `MenuRole[]` — supports plain strings (unchanged), `{ name, entityId: null }` for blanket roles only, and `{ name, entityId: number }` for entity-specific roles
- Entity checks match against both `ws_entity.id` and collapsed `ws_entity_ids[]`
- New exported types: `MenuRole`, `MenuRoleRequirement`

**HTTP interceptor**
- `wsHttpInterceptor` now detects 401 responses from the configured `api.apiEndpoint` and clears the stale session (access token, nonce, user)

---

### 1.1.0 — Signal Migration & i18n Polish
> Full migration to Angular signal inputs/outputs across all library components. No breaking changes for template consumers.

**Signals**
- Migrated all components to `input()`, `output()`, `model()`, `signal()`, and `computed()` — removing all `@Input()`/`@Output()` decorators and lifecycle hooks (`OnInit`, `OnChanges`, `OnDestroy`) in favour of `effect()` and `takeUntilDestroyed()`
- Components migrated: Header, Footer, Breadcrumb, Banners, Alert, Toast, Dialog, Confirm, i18n Input, i18n Textarea, Tree Select, Entity Tree Select, Resource Thumbnail, Resource Thumbnail Container, Standard Poll, Weighted Poll, Multiselect Poll, Poll Result, Vote Control, Recipient Award Form, Recipient Award Certificate Form, Recipient Award List, Spinner
- `RecipientAwardCertificateFormComponent`: `certificates` + `certificatesChange` consolidated into a single `model()` signal
- `TreeSelectComponent` / `EntityTreeSelectComponent`: `selectedId` and `selectedIds` use `model()` for two-way binding support

**New utilities**
- Added `FileUtil.getFileIcon(filename)` — shared file extension → PrimeNG icon lookup, exported from public API

**Translations**
- Added `ws_ui.tree_select.search` and `ws_ui.tree_select.no_results` keys (tree select search box and empty state)
- Added `ws_ui.resources.download`, `download_all`, `zipping`, `download_error`, `no_resources` keys
- Added `ws_ui.awards.certificate_type_digital` and `certificate_type_print` keys
- All 8 locales updated: English, French, German, Arabic, Russian, Chinese, Finnish, Portuguese

---

### 1.0.0 — The Big Bang
> First public release. Built from the ground up with Angular 20, PrimeNG, and Tailwind CSS.

- Standalone component architecture throughout
- Header, footer, logo, wordmark components with PrimeNG + ngx-translate
- Spinner, banners (puppeteer, staging)
- Alert and toast notification system
- Tree select and entity tree select with live API support and in-memory caching
- Breadcrumb component and service
- Dialog and confirm dialog with service
- i18n input and textarea components
- Polls: standard, weighted, multiselect, vote control, poll result
- Awards: recipient award form, certificate form, award list
- Resource thumbnail and container components
- Relative date pipe
- Common utilities: `ArrayUtil`, `DateUtil`, `ErrorUtil`, `GenericUtil`, `HtmlUtil`, `HttpUtil`, `I18nUtil`, `LangUtil`, `ObjectUtil`, `RouterUtil`, `ClipboardUtil`
- Common pipes: `FilterPipe`, `SortPipe`
- `provideWsNgUi()` config provider with typed `UiLibConfig`
- `wsHttpInterceptor` for auth token and language injection
- i18n translations in 8 locales: English, French, German, Arabic, Russian, Chinese, Finnish, Portuguese

---

## @worldskills/ng-auth

### 3.1.0 — Session Validation & Provider Rename

**Session validation**
- `NgAuthService` now listens for `visibilitychange` events — when the user returns to the tab, `ping()` verifies the server-side session is still valid
- If the session has expired, the 401 interceptor clears the stale token and `keepAlive()` triggers `logout()`, updating the UI to logged-out state

**Renamed provider**
- `provideLibraryConfig()` renamed to `provideWsNgAuth()` for consistency with `provideWsNgUi()`

---

### 3.0.0 — Service Overhaul & Async Guard

**Breaking changes**
- `NgAuthService.currentUser` is no longer a public `BehaviorSubject` — use `currentUser$` (observable) or `currentUser` (getter for current value)
- `GuardService.canActivate` is now async — awaits `NgAuthService.ready` before checking auth state
- `getLoggedInUser()` default changed to `showCollapsedChildRoles: true`

**Service improvements**
- `NgAuthService`: exposed `ready: Promise<void>` — resolves once `tryLogin()` finishes processing the OIDC token from the URL hash
- `NgAuthService.keepAlive()`: fixed broken error handling (was logging out on success)
- `NgAuthService.getLoggedInUser()`: refactored to use `tap()`/`catchError()` instead of dual-subscribe anti-pattern
- `NgAuthService.logout()`: fixed subscribe callback to use object form
- `NgAuthService.clearSession()`: magic strings replaced with named constants
- `AuthService`: fixed `endpoint` construction producing `"undefined/auth"` when `apiEndpoint` is missing
- `AuthService`: simplified `app_code` param building, `deleteRoleWithEntity` uses `HttpParams` instead of string concatenation
- `AuthService`: removed redundant `share()` from `getLoggedInUser`

**Guard improvements**
- `GuardService`: uses `isLoggedIn()` (token check) for authentication, fetches user profile if needed before role check
- `GuardService`: returns `UrlTree` for not-authorized redirect instead of imperative `router.navigate()`
- `GuardService`: returns `true` (not `false`) when no roles are defined on a route
- `tryLogin()` called with `disableNonceCheck` and `disableOAuth2StateCheck` for custom OAuth2 servers

---

### 2.0.0 — Redirect Handler Consolidation
> `RedirectEventHandler` has been removed. Migrate to `RedirectHandler`.

**Breaking changes**
- `RedirectEventHandler` is no longer exported — replace all usages with `RedirectHandler`

**New API on `RedirectHandler`**
- `handle(options?: LoginRedirectOptions)` — single entry point covering: unauthenticated (triggers OIDC login), returnUrl in sessionStorage (navigates there after redirect), optional async `resolveLandingPage` callback for apps that query an API to determine the landing page, and a `defaultRoute` fallback
- `saveReturnUrl(url?: string)` — stores the current (or given) URL in sessionStorage before triggering login; used by custom guards or manual login flows that sit outside `GuardService`
- `LoginRedirectOptions` interface exported for typed consumer configuration

---

### 1.0.0 — The Big Bang
> First public release. Authentication providers and guards for WorldSkills Angular applications.

- OIDC authentication via `angular-oauth2-oidc`
- `provideLibraryConfig()` config provider
- Auth service and guard
- Typed user and role models
