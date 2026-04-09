# WorldSkills Angular Libraries

This monorepo contains two Angular libraries that support the development of WorldSkills applications, published under the `@worldskills` npm organisation.

| Library | npm package | Description |
|---------|-------------|-------------|
| `worldskills-ng-ui` | `@worldskills/ng-ui` | Shared UI components built with PrimeNG + Tailwind |
| `worldskills-ng-auth` | `@worldskills/ng-auth` | Auth providers and guards using `angular-oauth2-oidc` |

## Versioning guidelines

The versioning is divided into 3 parts: MAJOR, MINOR, and PATCH.

- **MAJOR** — incremented when a breaking change occurs (library is not backward compatible)
- **MINOR** — incremented when new functionality is added in a backward compatible manner
- **PATCH** — incremented for bug fixes that are backward compatible

Notable changes can be viewed in the [changelog](changelog.md).

---

## Building the libraries

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

Bump the `version` field in `projects/worldskills-ng-ui/package.json` or `projects/worldskills-ng-auth/package.json` before publishing each release.

---

## Storybook

[Storybook](https://storybook.js.org/) is used to develop and demo library components in isolation.

### Start Storybook

```bash
npm run storybook
```

Navigate to `http://localhost:6006/`. Stories hot-reload as you edit component files.

### Build Storybook (static)

```bash
npm run build-storybook
```

The static output is written to `storybook-static/` and can be hosted anywhere.

### Adding stories

Story files live in `projects/worldskills-ng-tester-prime/src/stories/`. Create a `<component>.stories.ts` file following the existing examples.

---

## Development / tester app

The `worldskills-ng-tester-prime` app is used to test components in a real Angular application context (outside Storybook).

```bash
ng serve
```

Navigate to `http://localhost:4200/`.

---

## Extending the libraries

- Features live under `projects/worldskills-ng-ui/src/lib/<feature>/` or `projects/worldskills-ng-auth/src/lib/<feature>/`
- The `common` folder in each library contains shared models, utilities, and pipes
- New components should be standalone and follow the existing patterns
- Export new public symbols from the library's `src/public-api.ts`
- New services that require configuration should inject `UI_LIBRARY_CONFIG` (ng-ui) or `LIBRARY_CONFIG` (ng-auth) via `inject()`

---

## Translations

Translations apply to `@worldskills/ng-ui` only.

- JSON translation files live in `projects/worldskills-ng-ui/src/lib/i18n/`
- Supported locales: English, French, German, Arabic, Russian, Chinese, Finnish, Portuguese
- Run `npm run ws_generate_translations` to recompile after editing JSON files
- Consumers call `provideWsNgUiTranslations()` in their `app.config.ts`
- Use `extend: true` when combining library translations with app-level HTTP-loaded translations
