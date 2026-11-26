# Component Catalogue

Before creating a new component, check this catalogue. In most cases you should **reuse or extend** an existing component rather than creating a new one.

## Layout & Navigation

| Component | Selector | Purpose |
|-----------|----------|---------|
| Header | `ws-ng-ui-header` | App header with nav menu, user dropdown, login/logout. Supports sub-menus, custom templates. |
| Footer | `ws-ng-ui-footer` | App footer with language selector, login/logout, 6 customisable column templates. |
| Breadcrumb | `ws-ng-ui-breadcrumb` | Breadcrumb trail built from route `data.breadcrumb`. Use `BreadcrumbService.replaceLabel()` for dynamic labels, and `setTrail()` / `clearTrail()` to show the path the user clicked through. |
| Page Help | `ws-ng-ui-help-overlay` + `[wsHelp]` | Floating **?** that explains the page: numbered outlines and a side legend, texts from translations. From `@worldskills/ng-ui/help` (optional entry point; `provideWsHelp()`, `ws-help-check` for CI). Guide: `projects/worldskills-ng-ui/help/README.md`. |
| Page Header | `ws-ng-ui-page-header` | Page title bar: back link (with optional `backQueryParams`), title (h1), subtitle, details and slots for media (`[wsPageHeaderMedia]`) and actions (`[wsPageHeaderActions]`). |
| Logo | `ws-ng-ui-logo` | WorldSkills logo. |
| Section | `ws-ng-ui-section` | Page section: a card with one heading (h2) and an actions slot (`[wsSectionActions]`). Fills its grid cell. |
| Tile | `ws-ng-ui-tile` | Dashboard tile: icon, title in a brand `accent`, free content; `comingSoon` for tiles that aren't ready. |
| Wordmark | `ws-ng-ui-wordmark` | WorldSkills wordmark. |

## Feedback & Notifications

| Component | Selector | Purpose |
|-----------|----------|---------|
| Alert | `ws-ng-ui-alert` | Inline contextual message (success/info/warn/error). For static, in-page notices. Projected content (e.g. a button) follows the message. |
| Toast | `ws-ng-ui-toast` | Toast container — place once in app shell. Push notifications via `WsAlertService`. |
| Announcement | `ws-ng-ui-announcement` | Long-form alert with HTML, truncation, "Read more" toggle. For announcements, not quick notices. |
| Spinner | `ws-ng-ui-spinner` | Loading spinner with rotating messages. |
| Staging Banner | `ws-ng-ui-staging-banner` | Warning banner for non-production environments. |
| Puppeteer Banner | `ws-ng-ui-puppeteer-banner` | Banner for automated/puppeteer sessions. |
| Loadable | `ws-ng-ui-loadable` + `loadable()` | Spinner (or a `#wsLoading` template such as a skeleton) while loading, an error with Try again when it failed, the projected template once loaded. `loadable()` gives the signal state, `reload()` and `refresh()`. |
| Load Error | `ws-ng-ui-load-error` | Inline "could not be loaded" with a Try again button, for a part of a page that failed. Built on Alert. |
| Skeleton List | `ws-ng-ui-skeleton-list` | Placeholder rows shaped like a loading list (avatar, lines, tag). Pass it to Loadable as `#wsLoading` instead of the spinner. |
| Empty State | `ws-ng-ui-empty-state` | Quiet "nothing here yet" message, optionally followed by an action. |

## Dialogs

| Component | Selector | Purpose |
|-----------|----------|---------|
| Dialog | `ws-ng-ui-dialog` | Reusable modal dialog. Wrap your content inside it. For a form, set `formId` (+ `saving`) to get the standard Cancel / Save footer that submits the form. |
| Confirm | `ws-ng-ui-confirm` | Confirmation dialog target — place once in app shell. Trigger via `WsConfirmService`. |

## Data & Tables

| Component | Selector | Purpose |
|-----------|----------|---------|
| Data Table | `ws-ng-ui-data-table` | Full-featured table: virtual scroll, sort, filter, inline/modal editing, lazy loading, add/delete. |

## Selection & Input

| Component | Selector | Purpose |
|-----------|----------|---------|
| Tree Select | `ws-ng-ui-tree-select` | Generic hierarchical tree selector with search and virtual scroll. |
| Entity Tree Select | `ws-ng-ui-entity-tree-select` | Tree select pre-wired for WorldSkills organisational entities. Extends Tree Select. |
| Search Select | `ws-ng-ui-search-select` | Select whose options are searched on the server as the user types (single or multiple). Form-compatible (ControlValueAccessor). |
| I18n Input | `ws-ng-ui-i18n-input` | Text input with language selector for multi-language values. Form-compatible (ControlValueAccessor). |
| I18n Textarea | `ws-ng-ui-i18n-textarea` | Textarea version of I18n Input. |
| Rich Text Editor | `ws-ng-ui-rich-text-editor` | Rich text field (PrimeNG Editor) with a fixed toolbar: bold, italic, underline, lists, link. Form-compatible; HTML value. From `@worldskills/ng-ui/editor` (optional entry point; needs `quill`). |
| Rich Text View | `ws-ng-ui-rich-text-view` | Shows rich text HTML with list markers; long text collapses behind "Show more". From `@worldskills/ng-ui/editor`. |
| Field | `ws-ng-ui-field` | Labelled form field: label with `*` when required, the projected control, `hint`, an `info` "i" tooltip, and the first error once touched (translated). Pair with `editDialog()` for add / edit dialogs. |
| Icon Action | `ws-ng-ui-icon-action` | Icon-only row action (`edit`, `delete`, `end`, `repair`, `restore`) with an accessible name and tooltip. |

## Resources

| Component | Selector | Purpose |
|-----------|----------|---------|
| Resource Thumbnail | `ws-ng-ui-resource-thumbnail` | Single resource thumbnail with metadata and download. |
| Resource Thumbnail Container | `ws-ng-ui-resource-thumbnail-container` | Grid of resource thumbnails with batch download. |
| Image Lightbox | `ws-ng-ui-image-lightbox` | Image (logo, flag, photo) that opens large on a checkerboard with its size and ratio; `flag` also checks the nearest standard flag proportion. |

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
| `WsConfirmService` | Confirmation dialogs: `confirm()`, `yesNo()`, `danger()`, `alert()`. Translated button texts; pass `translate: true` (+ `params`) to give your own texts as translation keys. |
| `BreadcrumbService` | Programmatic breadcrumb management: label replacement and click-following trails (`setTrail()`). |
| `WsSentryService` | Error reporting to Sentry: `captureApiError()`, `captureException()`. From `@worldskills/ng-ui/sentry` (optional entry point; set up with `provideWsSentry()` + `wsSentryHttpInterceptor`). Don't import `@sentry/*` directly in apps. |
| `ResourceService` | Resource CRUD, search, upload, batch download. |
| `AwardService` | Fetch award lists and details. |
| `EntityService` | Fetch organisational entity tree (cached). |
| `UploadService` | File upload with progress tracking. |

## Pipes & Helpers

| Name | Purpose |
|------|---------|
| `loadable()` | Signal state for a request (loading / loaded / error) with `reload()` and `refresh()`. Use with `ws-ng-ui-loadable`. |
| `editDialog()` | State for one dialog that adds and edits list items. |
| `wsFeatures(config)` | UI feature toggles per environment: `isOn(name)` and a route `guard(name)`. |
| `provideWsNoAutofill()` | Turns off browser and password-manager autofill on text inputs (admin apps). |
| `wsExternalUrl`, `wsTelHref`, `wsPhoneDisplay`, `wsMailto`, `wsPersonName` | Contact detail formatting and links. `personName()` for code. |
| `wsRelativeDate` | "2 hours ago" / "in 3 days". |
| `wsFilter`, `wsDateSort` | List filtering and date sorting. |

## When to Reuse vs Create New

- **Need a notification?** Use `WsAlertService` (toast) or `ws-ng-ui-alert` (inline). Don't create a new notification component.
- **Need a modal?** Use `ws-ng-ui-dialog`. Don't create a new modal wrapper. Around a form, use its `formId` footer rather than your own Cancel / Save buttons.
- **Need a confirmation prompt?** Use `WsConfirmService`. Don't build a custom confirm dialog.
- **Need a data table?** Use `ws-ng-ui-data-table` — it supports read-only, inline edit, modal edit, and lazy loading. Only create a new table component if the use case is fundamentally different (e.g. a pivot table).
- **Need a tree/hierarchy selector?** Use `ws-ng-ui-tree-select` or `ws-ng-ui-entity-tree-select`. Extend if you need custom node rendering.
- **Need multi-language input?** Use `ws-ng-ui-i18n-input` or `ws-ng-ui-i18n-textarea`.
- **Need a lookup against the API (countries, people, organisations…)?** Use `ws-ng-ui-search-select` with a `search` function. For a fixed, local list use PrimeNG `p-select` directly.
- **Need a page title with actions?** Use `ws-ng-ui-page-header`.
- **Loading data?** Use `loadable()` with `ws-ng-ui-loadable` (or `ws-ng-ui-load-error` for a part of the page). Don't hand-roll spinners and error flags.
- **Building a form?** Wrap each control in `ws-ng-ui-field`; put forms in dialogs with `ws-ng-ui-dialog`'s `formId` footer.
- **A card with a heading on a detail page?** Use `ws-ng-ui-section`; for "nothing here yet" use `ws-ng-ui-empty-state`; for row buttons use `ws-ng-ui-icon-action`.
- **Dashboard numbers?** Use `ws-ng-ui-tile`.
- **Showing a logo or flag?** Use `ws-ng-ui-image-lightbox` so users can check it full size.
- **Rich text?** Use `@worldskills/ng-ui/editor`; don't configure PrimeNG Editor per app.
- **Hiding unfinished features?** Use `wsFeatures()`; toggles are not permissions.
- **Need to explain a page to users?** Use page help (`@worldskills/ng-ui/help`) rather than tooltips or a separate help page; it stays in step with the code.
- **Need to show/hide content or guard a route by role?** Use `*wsHasRole` and `roleGuard()` from `@worldskills/ng-auth` (ng-ui must not import them — ng-ui depends on ng-auth, never the other way round).

If an existing component almost fits but needs a new feature, **extend it with a new input/option** rather than creating a parallel component.
