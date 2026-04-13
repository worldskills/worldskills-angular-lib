# Storybook Reference

This file is a reference for creating Storybook stories in this project.
It is intended to be read by AI assistants (Claude Code) across sessions so that stories are created consistently.

---

## Project Structure

- **Stories location:** `projects/worldskills-ng-tester-prime/src/stories/`
- **Story file pattern:** `<component-name>.stories.ts`
- **Config:** `.storybook/main.ts` and `.storybook/preview.ts`
- **Storybook discovers:** `../projects/worldskills-ng-tester-prime/src/**/*.stories.@(ts|mdx)`
- **Build command:** `npm run build-storybook`
- **Dev command:** `npm run storybook`
- **Library must be built first:** `npm run ws_build_lib` (only needed for tester app, not storybook — storybook resolves `@worldskills/ng-ui` via webpack alias to source)

## Import Aliases

Storybook's webpack config resolves these aliases directly to source (no build needed):

```ts
'@worldskills/ng-ui'   → projects/worldskills-ng-ui/src/public-api.ts
'@worldskills/ng-auth'  → projects/worldskills-ng-auth/src/public-api.ts
```

Always import library components from `@worldskills/ng-ui`, never from relative paths.

## Global Providers (preview.ts)

The following are already provided globally via `preview.ts` — do NOT re-provide them in stories:

- `provideAnimations()`
- `provideHttpClient()`
- `provideTranslateService({ lang: 'en', extend: true })`
- `provideWsNgUiTranslations()`
- `provideWsNgUi({ enableLogging: false })`
- `ConfirmationService`
- `MessageService`
- `providePrimeNG(...)` with `WorldSkillsPreset`, `WorldSkillsPTPreset`, prefix `ws`

**Exception:** `provideRouter([])` is NOT global — add it per-story if the component uses `routerLink` or `Router`.

## Story Title Convention

All stories use the prefix `WorldSkills UI /`:

```ts
title: 'WorldSkills UI / Alerts'
title: 'WorldSkills UI / Header'
title: 'WorldSkills UI / Data Table'
```

Stories are sorted alphabetically (configured in `preview.ts`).

## Tags

Always include `tags: ['autodocs']` in the meta to auto-generate documentation pages.

## Story Patterns

### Pattern 1: Simple component with args (preferred for straightforward components)

Use when the component can be rendered directly with inputs.

```ts
import type { Meta, StoryObj } from '@storybook/angular';
import { SomeComponent } from '@worldskills/ng-ui';

const meta: Meta<SomeComponent> = {
  title: 'WorldSkills UI / Some Component',
  component: SomeComponent,
  tags: ['autodocs'],
  argTypes: {
    someProp: { control: 'text' },
    severity: { control: 'select', options: ['success', 'info', 'warn', 'error'] },
    enabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<SomeComponent>;

export const Default: Story = {
  args: {
    someProp: 'Hello',
    severity: 'info',
    enabled: true,
  },
};
```

### Pattern 2: Render with template (for fine-grained template control)

Use when you need custom template markup or multiple components together.

```ts
export const InlineSuccess: StoryObj<WsAlertComponent> = {
  name: 'Inline — Success',
  decorators: [moduleMetadata({ imports: [WsAlertComponent] })],
  render: (args) => ({
    props: args,
    template: '<ws-ng-ui-alert [severity]="severity" [message]="message" [closable]="closable" />',
  }),
  args: {
    severity: 'success',
    message: 'The competition was published successfully.',
    closable: false,
  },
};
```

### Pattern 3: Wrapper component (for stories needing logic, services, or event handling)

Use when the story needs to inject services, handle events, or manage state.

```ts
@Component({
  selector: 'story-my-wrapper',
  standalone: true,
  imports: [SomeComponent, ButtonModule],
  template: `
    <some-component (onClick)="handleClick()" />
    @if (lastAction) {
      <p class="mt-3 text-sm text-gray-500">Last action: <strong>{{ lastAction }}</strong></p>
    }
  `,
})
class MyWrapperComponent {
  constructor(private someService: SomeService) {}
  lastAction: string | null = null;
  handleClick() { this.lastAction = 'Clicked!'; }
}

export const Interactive: StoryObj = {
  name: 'Interactive Demo',
  decorators: [moduleMetadata({ imports: [MyWrapperComponent] })],
  render: () => ({ template: '<story-my-wrapper />' }),
};
```

**Important:** Wrapper components are declared in the story file itself (not exported from the library). They use `standalone: true`.

### Adding per-story providers

If a story needs `provideRouter` or other providers not in `preview.ts`:

```ts
decorators: [
  applicationConfig({ providers: [provideRouter([])] }),
],
```

## Documentation in Stories

Add component documentation via `parameters.docs.description.component` in the meta. Use markdown with code examples showing:

1. How to use the component in a template
2. Required setup (providers, config)
3. Key inputs/outputs as a table if complex

See `alert.stories.ts` and `data-table.stories.ts` for examples of thorough docs.

## Styling in Stories

- Use Tailwind utility classes for story layout (`flex`, `gap-3`, `mt-3`, `text-sm`, `text-gray-500`, etc.)
- PrimeNG components and the WorldSkills preset are available globally
- The CSS layer order is: `tailwind-base, primeng, tailwind-utilities`

## Naming Stories

- Use `name:` for display-friendly names: `name: 'Inline — Success'`
- Export name is PascalCase: `export const InlineSuccess`
- Group related variants under one meta (e.g., all alert variants in `alert.stories.ts`)

## Existing Stories

| File | Title | What it covers |
|------|-------|---------------|
| `header.stories.ts` | Header | Logged out, logged in, with sub-menu |
| `footer.stories.ts` | Footer | Standard footer |
| `alert.stories.ts` | Alerts | Inline (4 severities) + toast notifications |
| `announcement.stories.ts` | Announcement | Long-form alerts with HTML, truncation |
| `data-table.stories.ts` | Data Table | Read-only, inline edit, modal edit, lazy loading |
| `dialog.stories.ts` | Dialog | Dialog + confirm dialog |
| `spinner.stories.ts` | Spinner | Loading spinner |
| `breadcrumb.stories.ts` | Breadcrumb | Breadcrumb navigation |
| `banners.stories.ts` | Banners | Staging banner |
| `puppeteer-banner.stories.ts` | Puppeteer Banner | Print/export banner |
| `i18n-controls.stories.ts` | I18n Controls | I18n input + textarea |
| `tree-select.stories.ts` | Tree Select | Tree select component |
| `entity-tree-select.stories.ts` | Entity Tree Select | Entity-aware tree select |
| `relative-date.stories.ts` | Relative Date | Date pipe |
| `polls.stories.ts` | Polls | Standard, weighted, multiselect polls |
| `awards.stories.ts` | Awards | Award forms and lists |
| `resource-thumbnail.stories.ts` | Resource Thumbnail | Image thumbnails |
| `ws-http-interceptor.stories.ts` | HTTP Interceptor | Interceptor demo |

## Checklist for New Stories

1. Create `projects/worldskills-ng-tester-prime/src/stories/<name>.stories.ts`
2. Use `title: 'WorldSkills UI / <Name>'`
3. Add `tags: ['autodocs']`
4. Import components from `@worldskills/ng-ui`
5. Choose the right pattern (simple args, template render, or wrapper component)
6. Add `parameters.docs.description.component` with usage examples
7. Add meaningful `argTypes` with appropriate controls
8. Create multiple story variants showing different states
9. Test with `npm run storybook`
