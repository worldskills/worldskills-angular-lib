# Component Catalogue

Before creating a new component, check this catalogue. In most cases you should **reuse or extend** an existing component rather than creating a new one.

## Layout & Navigation

| Component | Selector | Purpose |
|-----------|----------|---------|
| Header | `ws-ng-ui-header` | App header with nav menu, user dropdown, login/logout. Supports sub-menus, custom templates. |
| Footer | `ws-ng-ui-footer` | App footer with language selector, login/logout, 6 customisable column templates. |
| Breadcrumb | `ws-ng-ui-breadcrumb` | Breadcrumb trail built from route `data.breadcrumb`. Use `BreadcrumbService.replaceLabel()` for dynamic labels. |
| Page Header | `ws-ng-ui-page-header` | Page title bar: back link, title (h1), subtitle, details and slots for media (`[wsPageHeaderMedia]`) and actions (`[wsPageHeaderActions]`). |
| Logo | `ws-ng-ui-logo` | WorldSkills logo. |
| Wordmark | `ws-ng-ui-wordmark` | WorldSkills wordmark. |

## Feedback & Notifications

| Component | Selector | Purpose |
|-----------|----------|---------|
| Alert | `ws-ng-ui-alert` | Inline contextual message (success/info/warn/error). For static, in-page notices. |
| Toast | `ws-ng-ui-toast` | Toast container — place once in app shell. Push notifications via `WsAlertService`. |
| Announcement | `ws-ng-ui-announcement` | Long-form alert with HTML, truncation, "Read more" toggle. For announcements, not quick notices. |
| Spinner | `ws-ng-ui-spinner` | Loading spinner with rotating messages. |
| Staging Banner | `ws-ng-ui-staging-banner` | Warning banner for non-production environments. |
| Puppeteer Banner | `ws-ng-ui-puppeteer-banner` | Banner for automated/puppeteer sessions. |

## Dialogs

| Component | Selector | Purpose |
|-----------|----------|---------|
| Dialog | `ws-ng-ui-dialog` | Reusable modal dialog. Wrap your content inside it. |
| Confirm | `ws-ng-ui-confirm` | Confirmation dialog target — place once in app shell. Trigger via `WsConfirmService`. |

## Data & Tables

| Component | Selector | Purpose |
|-----------|----------|---------|
| Data Table | `ws-ng-ui-data-table` | Full-featured table: virtual scroll, sort, filter, inline/modal editing, lazy loading, add/delete. |
| Table Column | `td[wsTableColumn]` | Building block for your own `p-table` from a `WsTableColumn[]`: cell from `row[key]`, `textRenderer` or `#renderer` template, optional 3-line clamp. |
| Table Header Column | `th[wsTableHeaderColumn]` | Header cell for a `WsTableColumn`: title, sort (wired on the th, combines with `pFrozenColumn`), tooltip, projected filter. |
| Table Column Filter | `ws-ng-ui-table-column-filter` | Header menu filter (text/select/tree/checkbox) applied on change, for lazy `p-table`. `filterValue()` reads it from the filter event. |
| Table Columns Settings | `ws-ng-ui-table-columns-settings` | Show/hide columns multi-select, persisted per `tableKey` via `WsColumnsVisibilityService`. |
| Table Sort Icon | `ws-ng-ui-table-sort-icon` | Sort icon for headers with custom sort state. `initializeLocalTableSort()` sorts with the columns' compare functions. |

## Directives

| Directive | Selector | Purpose |
|-----------|----------|---------|
| Close on resize | `p-menu[wsCloseOnResize]` | Hides a popup menu when the window resizes. |
| Table responsive size | `p-table[wsResponsiveSize]` | `size="small"` below 1024px. |

## Selection & Input

| Component | Selector | Purpose |
|-----------|----------|---------|
| Tree Select | `ws-ng-ui-tree-select` | Generic hierarchical tree selector with search and virtual scroll. |
| Entity Tree Select | `ws-ng-ui-entity-tree-select` | Tree select pre-wired for WorldSkills organisational entities. Extends Tree Select. |
| Search Select | `ws-ng-ui-search-select` | Select whose options are searched on the server as the user types (single or multiple). Form-compatible (ControlValueAccessor). |
| I18n Input | `ws-ng-ui-i18n-input` | Text input with language selector for multi-language values. Form-compatible (ControlValueAccessor). |
| I18n Textarea | `ws-ng-ui-i18n-textarea` | Textarea version of I18n Input. |
| I18n Text | `ws-ng-ui-i18n-text` | Input/textarea (`multiline`) bound to a single `I18nText` with `translations` map. Language menu, add/edit translations dialog, optional autocomplete. Form-compatible (ControlValueAccessor). |
| I18n Editor plugin | `p-editor[wsI18n]` | Directive for any existing PrimeNG `p-editor`: adds a language button to its toolbar and makes the form value an `I18nText` (HTML per language). From `@worldskills/ng-ui/editor` (optional entry point, requires `quill`). |
| I18n Translations Menu | `ws-ng-ui-i18n-translations-menu` | Language button + menu + add/edit translations dialog used by I18n Text and the editor plugin. Reuse it for new i18n controls. |

## Resources

| Component | Selector | Purpose |
|-----------|----------|---------|
| Resource Thumbnail | `ws-ng-ui-resource-thumbnail` | Single resource thumbnail with metadata and download. |
| Resource Thumbnail Container | `ws-ng-ui-resource-thumbnail-container` | Grid of resource thumbnails with batch download. |

## Polls & Voting

| Component | Selector | Purpose |
|-----------|----------|---------|
| Vote Control | `ws-ng-ui-vote-control` | Full poll voting interface with question/result views and action menu. This is the main entry point — it composes the poll type components below. |
| Standard Poll | `ws-ng-ui-standard-poll` | Single-choice radio button poll. Used by Vote Control. |
| Weighted Poll | `ws-ng-ui-weighted-poll` | Ranked/weighted poll with dropdowns. Used by Vote Control. |
| Multiselect Poll | `ws-ng-ui-multiselect-poll` | Multi-select ranked poll. Used by Vote Control. |
| Poll Result | `ws-ng-ui-poll-result` | Poll results display with counts and rankings. Used by Vote Control. |

## Awards

| Component | Selector | Purpose |
|-----------|----------|---------|
| Recipient Award List | `ws-ng-ui-recipient-award-list` | Table of recipient awards with create/edit/delete dialogs. |
| Recipient Award Form | `ws-ng-ui-recipient-award-form` | Form for creating/editing a recipient award. Used by Award List. |
| Recipient Award Certificate Form | `ws-ng-ui-recipient-award-certificate-form` | Sub-form for managing award certificates. Used by Award Form. |

## Services

| Service | Purpose |
|---------|---------|
| `WsAlertService` | Push toast notifications: `success()`, `info()`, `warn()`, `error()`. |
| `WsConfirmService` | Confirmation dialogs: `confirm()`, `yesNo()`, `danger()`, `alert()`. |
| `BreadcrumbService` | Programmatic breadcrumb management. |
| `WsSentryService` | Error reporting to Sentry: `captureApiError()`, `captureException()`. From `@worldskills/ng-ui/sentry` (optional entry point; set up with `provideWsSentry()` + `wsSentryHttpInterceptor`). Don't import `@sentry/*` directly in apps. |
| `ResourceService` | Resource CRUD, search, upload, batch download. |
| `AwardService` | Fetch award lists and details. |
| `EntityService` | Fetch organisational entity tree (cached). |
| `UploadService` | File upload with progress tracking. |

## When to Reuse vs Create New

- **Need a notification?** Use `WsAlertService` (toast) or `ws-ng-ui-alert` (inline). Don't create a new notification component.
- **Need a modal?** Use `ws-ng-ui-dialog`. Don't create a new modal wrapper.
- **Need a confirmation prompt?** Use `WsConfirmService`. Don't build a custom confirm dialog.
- **Need a data table?** Use `ws-ng-ui-data-table` — it supports read-only, inline edit, modal edit, and lazy loading. Only create a new table component if the use case is fundamentally different (e.g. a pivot table). Writing your own `p-table` instead? Build it from the `WsTableColumn` helpers above.
- **Need a tree/hierarchy selector?** Use `ws-ng-ui-tree-select` or `ws-ng-ui-entity-tree-select`. Extend if you need custom node rendering.
- **Need multi-language input?** Value is a single `I18nText` with `translations` → `ws-ng-ui-i18n-text` (plain) or `<p-editor wsI18n>` (rich text). Value is an `I18nText[]` array → `ws-ng-ui-i18n-input` or `ws-ng-ui-i18n-textarea`.
- **Need a lookup against the API (countries, people, organisations…)?** Use `ws-ng-ui-search-select` with a `search` function. For a fixed, local list use PrimeNG `p-select` directly.
- **Need a page title with actions?** Use `ws-ng-ui-page-header`.
- **Need to show/hide content or guard a route by role?** Use `*wsHasRole` and `roleGuard()` from `@worldskills/ng-auth` (ng-ui must not import them — ng-ui depends on ng-auth, never the other way round).

If an existing component almost fits but needs a new feature, **extend it with a new input/option** rather than creating a parallel component.
