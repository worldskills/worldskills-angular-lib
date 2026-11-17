# Page help (`@worldskills/ng-ui/help`)

A floating **?** button that explains the page the user is on. When it's open, every help point
on the page is outlined with a numbered badge, and a legend at the side lists each point's title
and description. On wide screens the page slides over to make room, so nothing is covered. Esc,
the X or a click on the page closes it.

**Why it stays fresh:** help is attached to the elements it describes. Remove a section and its
help goes with it. Hide a section from some users and its help is hidden from them too. Change a
page without updating its help and `ws-help-check` fails the build. This doesn't replace
documentation, but it keeps the documentation users see in step with the code.

Try it in Storybook: **WorldSkills UI / Page Help**.

## Set up once per app

### 1. List the help pages

Create a file for the pages, for example `src/app/help-pages.ts`. Keep it a plain object literal
of string arrays, because `ws-help-check` reads this file.

```ts
import { WsHelpPages } from '@worldskills/ng-ui/help';

/** Help points per page, in order: a point's position is its number on screen. */
export const HELP_PAGES: WsHelpPages = {
  reports: ['header', 'filters', 'results', 'export'],
};
```

### 2. Provide it

```ts
// app.config.ts
import { provideWsHelp } from '@worldskills/ng-ui/help';

providers: [
  provideWsHelp({ pages: HELP_PAGES }),
  // optional: textPrefix (default 'help'), warnings (default: dev mode)
],
```

The app also needs ngx-translate and `provideWsNgUiTranslations()`, as for the rest of ng-ui.

### 3. Add the overlay to the app shell

```ts
import { WsHelpOverlayComponent } from '@worldskills/ng-ui/help';
// imports: [WsHelpOverlayComponent, …]
```

```html
<!-- app.html, once, e.g. next to <ws-ng-ui-toast /> -->
<ws-ng-ui-help-overlay />
```

The **?** button only appears on pages that have help and at least one point on screen.

### 4. Run the check in CI

```json
// package.json
"scripts": {
  "lint": "ng lint && ws-help-check --pages src/app/help-pages.ts"
}
```

## Add help to a page

Here the example page is `reports`. There are four steps.

### 1. Give the route a help key

```ts
{ path: 'reports', data: { help: 'reports' }, loadComponent: … }
```

The deepest route that sets `help` wins. Child routes (tabs) without their own key use their
parent's key.

### 2. List the page's points in order

```ts
reports: ['header', 'filters', 'results', 'export'],
```

### 3. Mark each point in the template

```ts
import { WsHelpDirective } from '@worldskills/ng-ui/help';
// imports: [WsHelpDirective, …]
```

```html
<ws-ng-ui-page-header wsHelp="header" … />
<p-card wsHelp="filters">…</p-card>
<p-card wsHelp="results">…</p-card>
<p-button wsHelp="export" … />
```

- Mark the whole section, not a small part of it.
- In a `@for`, mark the list around the items: one id is one element, and the last one rendered
  wins (in dev mode a warning tells you).

### 4. Write the texts

In the app's translations (`en.json` at least), under `help.<page>.<point>`:

```json
"help": {
  "reports": {
    "header": { "title": "This report", "description": "What the report covers." },
    "filters": { "title": "Filters", "description": "Narrow the results; filters stay in the link." },
    "results": { "title": "Results", "description": "The matching rows." },
    "export": { "title": "Export", "description": "Download what you see as a spreadsheet." }
  }
}
```

The overlay's own words ("Help for this page", "Close help") come with ng-ui in all 8 languages.

## Good to know

- **Permissions come for free.** A point shows only when its element is rendered. Inside
  `@if (isAdmin())`, users who can't see the section don't get its help either.
- **Numbers are stable.** A point's number is its position in the page's list, so hidden points
  leave gaps (1, 2, 4). "Point 3" always means the same thing when you discuss or translate texts.
- **Wording changes are JSON only.** Other languages fall back to English until they are
  translated.
- **Pages without a route of their own** (a dialog, Storybook) can call
  `inject(WsHelpService).setPage('reports')`, and `setPage(null)` to follow the route again.
- **Your own trigger:** `WsHelpService.toggle()` and `.open()` if you want a help button
  somewhere else.

## Keeping help fresh

There are two layers of checks.

**1. In the browser (dev mode).** When help opens, the console warns about:
- a `wsHelp` marker whose id isn't in the page's points;
- a point without a title or description;
- two elements marked with the same id.

**2. In CI: `ws-help-check`.** It is shipped with the package and fails the build when help has
drifted from the code. It cross-checks the routes (`help: '…'`), the pages file, the `wsHelp`
markers in templates and the English texts:

| Problem | Typical cause |
| --- | --- |
| A point is marked nowhere | The section was removed or renamed, but the help list wasn't updated. |
| A marker isn't in any page's points | A new section was marked but not listed. |
| A point has no title or description | Texts weren't written or were deleted. |
| Leftover texts for a page or point | The page or point is gone and its texts are stale. |
| A route's page has no points, or a page is used by no route | The route key and the pages file disagree. |

```
npx ws-help-check --pages src/app/help-pages.ts
  [--src src] [--i18n src/assets/i18n/en.json] [--prefix help] [--attr wsHelp] [--warn-only]
```

- `--attr` is useful while migrating from an app's own directive (e.g. `--attr appHelp`).
- `--warn-only` reports problems without failing the run.
- Markers are matched across all templates, not per page. A point id used on two pages (such
  as `header`) counts as marked if either page marks it.

## How it works

| Piece | Role |
| --- | --- |
| `provideWsHelp()` | Registers the pages and options (`WS_HELP_CONFIG`). |
| `WsHelpDirective` (`[wsHelp]`) | Registers its element with the service while it is on the page. |
| `WsHelpService` | Reads the route's help key, keeps the points that are on screen in list order, and runs the dev-mode checks. |
| `WsHelpOverlayComponent` (`ws-ng-ui-help-overlay`) | The button, outlines, badges and legend. Measures the points and follows scrolling and resizing. |
| `theme.css` `body.ws-help-open` | Makes room for the legend on wide screens. |
| `bin/ws-help-check.mjs` | The CI check. |

The styling uses the brand tokens from `theme.css`: a brand-colour sweep on the outlines and the
legend's top stripe, purple badges (pink when hovered) and a dark-blue tint behind the page. It
respects reduced motion.
