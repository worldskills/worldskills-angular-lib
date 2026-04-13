# Project Instructions

This is the WorldSkills Angular UI component library (`@worldskills/ng-ui`). It provides shared components, services, design tokens, and PrimeNG theme presets for WorldSkills web applications.

## Project Structure

- `projects/worldskills-ng-ui/` — the library (published to npm as `@worldskills/ng-ui`)
- `projects/worldskills-ng-auth/` — the auth library (published as `@worldskills/ng-auth`)
- `projects/worldskills-ng-tester-prime/` — tester app for local development
- `.storybook/` — Storybook configuration

## Build Commands

- `npm run ws_build_lib` — build the UI library
- `npm run storybook` — run Storybook dev server
- `npm run build-storybook` — build Storybook for deployment
- `npm run start` — run the tester app

## Key Conventions

- **PrimeNG prefix is `ws`** — all consuming apps must use `prefix: 'ws'` in their `providePrimeNG` config. Do not change this.
- **Standalone components only** — no NgModules. All components use `standalone: true`.
- **All components use `ChangeDetectionStrategy.OnPush`.**
- **Signal inputs/outputs** — new and updated components should use Angular signal-based inputs and outputs. The footer component is the reference implementation.
- **Preset component tokens** live in individual files under `projects/worldskills-ng-ui/src/lib/preset/` (e.g. `button.ts`, `card.ts`). Use explicit named imports in `preset.ts` — do NOT use `import * as` barrel pattern (breaks ng-packagr bundling).
- **PrimeNG styling** — use PT (passthrough) function callbacks for runtime style overrides, use design tokens in the preset for theme-level values. Use `::ng-deep` sparingly and only within component-scoped styles.
- **Translations** — the library ships built-in translations via `provideWsNgUiTranslations()`. Consuming apps use `extend: true` in `provideTranslateService` to merge app translations with library translations. Preferred locale key is `lang`, not the deprecated `defaultLanguage`.

## Component Catalogue

Before creating a new component, check this catalogue. In most cases you should **reuse or extend** an existing component rather than creating a new one.

### Layout & Navigation

| Component | Selector | Purpose |
|-----------|----------|---------|
| Header | `ws-ng-ui-header` | App header with nav menu, user dropdown, login/logout. Supports sub-menus, custom templates. |
| Footer | `ws-ng-ui-footer` | App footer with language selector, login/logout, 6 customisable column templates. |
| Breadcrumb | `ws-ng-ui-breadcrumb` | Breadcrumb trail with router integration. Use `BreadcrumbService` to set crumbs programmatically. |
| Logo | `ws-ng-ui-logo` | WorldSkills logo. |
| Wordmark | `ws-ng-ui-wordmark` | WorldSkills wordmark. |

### Feedback & Notifications

| Component | Selector | Purpose |
|-----------|----------|---------|
| Alert | `ws-ng-ui-alert` | Inline contextual message (success/info/warn/error). For static, in-page notices. |
| Toast | `ws-ng-ui-toast` | Toast container — place once in app shell. Push notifications via `WsAlertService`. |
| Announcement | `ws-ng-ui-announcement` | Long-form alert with HTML, truncation, "Read more" toggle. For announcements, not quick notices. |
| Spinner | `ws-ng-ui-spinner` | Loading spinner with rotating messages. |
| Staging Banner | `ws-ng-ui-staging-banner` | Warning banner for non-production environments. |
| Puppeteer Banner | `ws-ng-ui-puppeteer-banner` | Banner for automated/puppeteer sessions. |

### Dialogs

| Component | Selector | Purpose |
|-----------|----------|---------|
| Dialog | `ws-ng-ui-dialog` | Reusable modal dialog. Wrap your content inside it. |
| Confirm | `ws-ng-ui-confirm` | Confirmation dialog target — place once in app shell. Trigger via `WsConfirmService`. |

### Data & Tables

| Component | Selector | Purpose |
|-----------|----------|---------|
| Data Table | `ws-ng-ui-data-table` | Full-featured table: virtual scroll, sort, filter, inline/modal editing, lazy loading, add/delete. |

### Selection & Input

| Component | Selector | Purpose |
|-----------|----------|---------|
| Tree Select | `ws-ng-ui-tree-select` | Generic hierarchical tree selector with search and virtual scroll. |
| Entity Tree Select | `ws-ng-ui-entity-tree-select` | Tree select pre-wired for WorldSkills organisational entities. Extends Tree Select. |
| I18n Input | `ws-ng-ui-i18n-input` | Text input with language selector for multi-language values. Form-compatible (ControlValueAccessor). |
| I18n Textarea | `ws-ng-ui-i18n-textarea` | Textarea version of I18n Input. |

### Resources

| Component | Selector | Purpose |
|-----------|----------|---------|
| Resource Thumbnail | `ws-ng-ui-resource-thumbnail` | Single resource thumbnail with metadata and download. |
| Resource Thumbnail Container | `ws-ng-ui-resource-thumbnail-container` | Grid of resource thumbnails with batch download. |

### Polls & Voting

| Component | Selector | Purpose |
|-----------|----------|---------|
| Vote Control | `ws-ng-ui-vote-control` | Full poll voting interface with question/result views and action menu. This is the main entry point — it composes the poll type components below. |
| Standard Poll | `ws-ng-ui-standard-poll` | Single-choice radio button poll. Used by Vote Control. |
| Weighted Poll | `ws-ng-ui-weighted-poll` | Ranked/weighted poll with dropdowns. Used by Vote Control. |
| Multiselect Poll | `ws-ng-ui-multiselect-poll` | Multi-select ranked poll. Used by Vote Control. |
| Poll Result | `ws-ng-ui-poll-result` | Poll results display with counts and rankings. Used by Vote Control. |

### Awards

| Component | Selector | Purpose |
|-----------|----------|---------|
| Recipient Award List | `ws-ng-ui-recipient-award-list` | Table of recipient awards with create/edit/delete dialogs. |
| Recipient Award Form | `ws-ng-ui-recipient-award-form` | Form for creating/editing a recipient award. Used by Award List. |
| Recipient Award Certificate Form | `ws-ng-ui-recipient-award-certificate-form` | Sub-form for managing award certificates. Used by Award Form. |

### Services

| Service | Purpose |
|---------|---------|
| `WsAlertService` | Push toast notifications: `success()`, `info()`, `warn()`, `error()`. |
| `WsConfirmService` | Confirmation dialogs: `confirm()`, `yesNo()`, `danger()`, `alert()`. |
| `BreadcrumbService` | Programmatic breadcrumb management. |
| `ResourceService` | Resource CRUD, search, upload, batch download. |
| `AwardService` | Fetch award lists and details. |
| `EntityService` | Fetch organisational entity tree (cached). |
| `UploadService` | File upload with progress tracking. |

### When to Reuse vs Create New

- **Need a notification?** Use `WsAlertService` (toast) or `ws-ng-ui-alert` (inline). Don't create a new notification component.
- **Need a modal?** Use `ws-ng-ui-dialog`. Don't create a new modal wrapper.
- **Need a confirmation prompt?** Use `WsConfirmService`. Don't build a custom confirm dialog.
- **Need a data table?** Use `ws-ng-ui-data-table` — it supports read-only, inline edit, modal edit, and lazy loading. Only create a new table component if the use case is fundamentally different (e.g. a pivot table).
- **Need a tree/hierarchy selector?** Use `ws-ng-ui-tree-select` or `ws-ng-ui-entity-tree-select`. Extend if you need custom node rendering.
- **Need multi-language input?** Use `ws-ng-ui-i18n-input` or `ws-ng-ui-i18n-textarea`.

If an existing component almost fits but needs a new feature, **extend it with a new input/option** rather than creating a parallel component.

## Reference Documentation

- **Storybook conventions:** see [STORYBOOK.md](STORYBOOK.md) — patterns, naming, checklist for creating stories
- **Library integration guide:** see [GETTING_STARTED.md](GETTING_STARTED.md) — step-by-step setup for consuming apps

## Environment

- Developers use different editors and IDEs (VS Code, IntelliJ, terminal CLI). Do not assume any specific IDE or provide IDE-specific instructions unless the developer asks.
- Claude Code is available as CLI, VS Code extension, JetBrains extension, and web app — instructions should be tool-agnostic.

## Do Not

- Do not commit `.env` files or credentials
- Do not stage or commit changes unless explicitly asked by the user
- Do not modify the `prefix: 'ws'` PrimeNG setting
- Do not use `import * as` barrel exports for preset component tokens
- Do not assume a specific IDE or editor in suggestions
