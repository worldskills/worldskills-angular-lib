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
