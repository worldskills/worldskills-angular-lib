# Changelog

## @worldskills/ng-ui

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

### 1.0.0 — The Big Bang
> First public release. Authentication providers and guards for WorldSkills Angular applications.

- OIDC authentication via `angular-oauth2-oidc`
- `provideLibraryConfig()` config provider
- Auth service and guard
- Typed user and role models
