# Changelog

## @worldskills/ng-ui

### 1.8.4 — Tree Select Chevron Alignment Fix

**Fixed**
- Tree select: expand chevron no longer floats vertically centred when a node label wraps to multiple lines. Added `align-items: flex-start` to `.p-tree-node-content` so the chevron anchors to the top of the row.

### 1.8.3 — Button Colour & Pink Palette Fix

**Fixed**
- Button preset: default `pButton` now renders in `ws-pink` (the WS brand action colour) instead of `ws-blue`. Added full `colorScheme` token coverage (background, hover, active, border, text, focus-ring) for both light and dark modes. Consuming apps no longer need `::ng-deep` or `!important` overrides to get the correct primary button colour.
- `ws-pink` palette: corrected the primitive colour scale. Previous scale was inverted and used `#AC0D56` as the 500 base. Now uses `#D51067` as 500, aligning with the `--pink` CSS custom property in `theme.css`, with proper tints at 50–400 and shades at 600–950.

### 1.8.2 — Design Token Export Fix

**Fixed**
- `styles/theme.css`: added `:root` custom property block so CSS design tokens (`--pink`, `--primary`, `--blue-dark`, etc.) are available to consuming apps that import the theme stylesheet

### 1.8.1 — Header Title Alignment Fix

**Fixed**
- Header: corrected vertical alignment of the application title text relative to the WorldSkills wordmark

### 1.8.0 — Angular 20 & Style Assets

**Angular 20**
- Updated peer dependencies to Angular `^20.3.0`

**Style assets**
- `fonts.css` and `theme.css` are now included in the published package
- Import via subpath exports: `@worldskills/ng-ui/styles/fonts.css` and `@worldskills/ng-ui/styles/theme.css`

### 1.7.0 — Breadcrumb & Sub-menu Improvements

**New**
- Breadcrumb: added `showHome` input to optionally hide the Home route (defaults to `true`)

**Fixed**
- Header sub-menu items are now right-aligned to match the end of the main navigation menu

### 1.6.0 — Brand Colors & Preset Separation

**Brand colors**
- Added full WorldSkills brand color palette as PrimeNG primitive tokens (50–950 shades): `ws-blue`, `ws-blue-dark`, `ws-cyan`, `ws-teal`, `ws-purple`, `ws-pink`, `ws-orange`, `ws-yellow`, `ws-red`, `ws-green`, `ws-gray`
- Added semantic color mappings: primary → ws-blue, info → ws-cyan, success → ws-green, warn → ws-yellow, danger → ws-red
- Added form field invalid state tokens (border + placeholder colors)

**Preset restructure**
- Separated component design tokens into individual files under `preset/` (button, card, datatable, etc.)
- Uses explicit named imports to ensure compatibility with ng-packagr library bundling

**PT additions**
- Dialog: default width `35rem`
- Fieldset: legend inline-block with fit-content width, label font size `1rem`
- Card: surface background color

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
