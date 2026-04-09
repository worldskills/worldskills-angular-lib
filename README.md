# WorldSkills Angular Library

This project is a library of common functionality that supports the development of WorldSkills applications.

## Versioning guidelines

The versioning is divided into 3 parts: MAJOR, MINOR, and PATCH.

- **MAJOR** — incremented when a breaking change occurs (library is not backward compatible)
- **MINOR** — incremented when new functionality is added in a backward compatible manner
- **PATCH** — incremented for bug fixes that are backward compatible

Notable changes can be viewed in the [changelog](https://github.com/worldskills/worldskills-angular-lib/blob/master/changelog.md).

---

## Building the libraries

This monorepo contains two publishable libraries. Both are scoped to the `@worldskills` npm organisation.

| Library | npm package | Description |
|---------|-------------|-------------|
| `worldskills-ng-ui` | `@worldskills/ng-ui` | Shared UI components built with PrimeNG + Tailwind |
| `worldskills-ng-auth` | `@worldskills/ng-auth` | Auth providers and guards using `angular-oauth2-oidc` |

Build artifacts are written to `dist/`.

### @worldskills/ng-ui

Runs the translation compiler first, then builds the library:

```bash
npm run ws_build_lib
```

Or build without regenerating translations:

```bash
ng build worldskills-ng-ui --configuration production
```

### @worldskills/ng-auth

```bash
npm run auth_build_lib
```

Or directly:

```bash
ng build worldskills-ng-auth --configuration production
```

### Publishing to npm

Both libraries have a `publishConfig` that targets the public npm registry and the `@worldskills` org automatically — no extra flags required.

Make sure you are logged in first:

```bash
npm login
```

Then build and publish each library:

```bash
# @worldskills/ng-ui
npm run ws_build_lib
npm publish dist/worldskills-ng-ui

# @worldskills/ng-auth
npm run auth_build_lib
npm publish dist/worldskills-ng-auth
```

Bump the `version` field in the library's `projects/<lib>/package.json` before publishing each release.

---

## Storybook

[Storybook](https://storybook.js.org/) is used to develop and demo library components in isolation.

### Start Storybook

```bash
npm run storybook
```

Navigate to `http://localhost:6006/`. Stories are hot-reloaded as you edit component files.

### Build Storybook (static)

```bash
npm run build-storybook
```

The static output is written to `storybook-static/` and can be hosted anywhere.

### Adding stories

Story files live alongside the tester app at `projects/worldskills-ng-tester-prime/src/stories/`. Create a `<component>.stories.ts` file following the existing examples (e.g. `header.stories.ts`, `footer.stories.ts`, `spinner.stories.ts`).

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

---

## Extending the library

When extending the library follow these guidelines:

- Each folder under `/src/lib` represents its own **feature**.
- The `common` folder contains shared code useful to all features.
- Features may depend on models from other features where sensible.
- Follow the one-class-per-file rule (exceptions can be made where sensible).
- New services that require config should hook onto the config change events in their constructor.

---

## Translations

- i18n translations are loaded from JSON files in each library's `src/lib/i18n/` folder.
- The library exposes a `provideWsNgUiTranslations()` provider that consumers call in their `app.config.ts`.
- Use `extend: true` when combining library translations with app-level HTTP-loaded translations.
