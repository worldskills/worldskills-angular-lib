# Changelog

## @worldskills/ng-ui

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
