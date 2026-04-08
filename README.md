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

This monorepo contains two publishable libraries. Build them in order since `worldskills-ng-ui` is a peer of `worldskills-ng-auth`.

### worldskills-ng-ui

Contains shared UI components (header, footer, spinner, etc.) built with PrimeNG and Tailwind.

```bash
ng build worldskills-ng-ui
```

### worldskills-ng-auth

Contains authentication providers and guards that depend on `angular-oauth2-oidc`.

```bash
ng build worldskills-ng-auth
```

### Build both

```bash
npm run ws_build_lib
```

Build artifacts are written to the `dist/` directory.

### Packaging & publishing

```bash
# Create a .tgz package
npm run ws_npm_pack

# Build + package in one step
npm run ws_package
```

After building, publish from the dist folder:

```bash
cd dist/worldskills-ng-ui   # or worldskills-ng-auth
npm publish
```

Packages are published to [npmjs](https://www.npmjs.com/) under the WorldSkills organisation.

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
