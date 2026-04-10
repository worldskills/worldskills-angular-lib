# Changelog

## @worldskills/ng-ui

### 1.5.0 — Data Table, Announcements, Navigation & Bug Fixes

**New components**
- `WsDataTableComponent` — virtual scroll, inline/modal editing, delete confirmation, global + per-column filters, lazy mode for server-side sort/filter/pagination
- `WsAnnouncementComponent` — long-form alert with HTML support, truncation with gradient fade, "Read more" toggle, close button, 4 severity variants

**Navigation & layout**
- Header: removed dropdown flyouts, sub-items render in horizontal sub-menu bar (lighter purple)
- Header: active menu indicator reactive via signal, sub-menu active state with bottom border
- Header: content constrained to `max-w-screen-xl`, full-width purple background, menu item spacing
- Breadcrumb: improved link contrast, lighter separators, bold current item, focus-visible outlines
- Footer: links use info blue on dark background

**Typography & fonts**
- Added `fonts.css` (Inter + Inria Serif) and `theme.css` (Tailwind `@theme` overrides)
- Headings use Inria Serif, body uses Inter

**Dialog & alert polish**
- Dialog: header/content padding, header-content separator, disabled auto-focus on close button
- Alert: horizontal padding, close button right-aligned
- Tree select: search icon/placeholder alignment, `aria-label` for accessibility

**Bug fixes & hardening**
- `ChangeDetectionStrategy.OnPush` added to all 27 components
- Footer: replaced browser `alert()` with `WsAlertService.info()` toast
- UploadService: `listen()` now returns `Subscription` for caller cleanup
- Interceptor: dispatches `ws-session-expired` event on 401 for immediate UI updates
- Header: null-safe user name in dropdown
- Data table: `onRowEditCancel` now correctly reverts row to original values
- Spinner: guards against `interval <= 0`
- i18n input/textarea: validates sessionStorage lang against known language codes
- Poll components: replaced unsafe `as string[]` cast with `.map(String)`
- Clipboard util: dev-mode warning for deprecated `execCommand` fallback
- Removed `!important` from header CSS via higher-specificity selector

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
