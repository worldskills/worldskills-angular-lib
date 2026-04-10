# Changelog

## @worldskills/ng-ui

### 1.5.1 — Dialog & Alert Polish
- Dialog: added header/content padding (`1.25rem 1.5rem`), subtle header-content separator border
- Dialog: disabled auto-focus on close button (`focusOnShow: false`)
- Alert: added 5px horizontal padding to message text, close button right-aligned via `margin-left: auto`

### 1.5.0 — Data Table Component
- New `WsDataTableComponent` with virtual scroll, inline editing, modal editing, and delete confirmation
- Global search bar and per-column filters (text, numeric, date)
- Lazy mode for server-side filtering, sorting, and pagination via `(lazyLoad)` event
- Configurable via `WsColumn` interface: `filterable`, `filterType`, `editable`, `editType`, `sortable`
- Custom `deleteMessage` function input for contextual delete confirmations
- Exported `WsColumn`, `WsEditMode`, `WsLazyLoadEvent` types

### 1.4.1
- Fixed tree select search icon/placeholder misalignment

### 1.4.0 — Navigation & UX Polish
- Header: removed dropdown flyouts, sub-items render in horizontal sub-menu bar (lighter purple)
- Header: active menu indicator now reactive via signal, sub-menu active state with bottom border
- Breadcrumb: improved link contrast (`--blue`/`--blue-dark`), lighter separators, bold current item, focus-visible outlines
- Footer: links use info blue on dark background
- Typography: headings use Inria Serif

### 1.3.1
- Added 5px horizontal padding to top-level menu items

### 1.3.0 — Brand Fonts & Header Layout
- Added `fonts.css` (Inter + Inria Serif) and `theme.css` (Tailwind `@theme` overrides) — client apps import these for font control
- Header content constrained to `max-w-screen-xl` with full-width purple background
- App name sized to match wordmark

### 1.2.0 — Role-based Menu Access & 401 Handling
- `MenuItem.requiredRoles` extended with `MenuRole` type: supports plain strings, blanket roles (`entityId: null`), and entity-specific roles
- `wsHttpInterceptor` clears stale session on 401 from configured API endpoint

### 1.1.0 — Signal Migration & i18n
- All components migrated to signal inputs/outputs/computed/effects
- Added `FileUtil.getFileIcon()` shared utility
- Added translation keys for tree select, resources, and awards (8 locales)

### 1.0.0 — Initial Release
- Standalone components: header, footer, breadcrumb, banners, alerts, toast, dialogs, tree select, polls, awards, resources, spinner
- Common utilities, pipes, interceptor, i18n (8 locales)

---

## @worldskills/ng-auth

### 3.1.0 — Session Validation & Provider Rename
- Auto-validates session on tab visibility change via `ping()`
- `provideLibraryConfig()` renamed to `provideWsNgAuth()`

### 3.0.0 — Service Overhaul & Async Guard
- **Breaking:** `currentUser` is now private — use `currentUser$` or `currentUser` getter
- **Breaking:** `GuardService.canActivate` is async, awaits `ready` before auth check
- **Breaking:** `getLoggedInUser()` defaults to `showCollapsedChildRoles: true`
- Exposed `ready: Promise<void>` for post-OIDC initialization
- Fixed `keepAlive()` error handling, `getLoggedInUser()` dual-subscribe, endpoint construction
- Guard uses `isLoggedIn()` for auth, returns `UrlTree` for not-authorized, fetches user if needed

### 2.0.0 — Redirect Handler Consolidation
- **Breaking:** `RedirectEventHandler` removed — use `RedirectHandler`
- `handle(options?)` covers returnUrl, async `resolveLandingPage`, and `defaultRoute` fallback
- `saveReturnUrl()` for manual login flows

### 1.0.0 — Initial Release
- OIDC authentication via `angular-oauth2-oidc`
- `provideWsNgAuth()` config provider, auth service, guard, typed user/role models
