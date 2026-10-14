# Getting Started with @worldskills/ng-ui

A step-by-step guide to integrating the WorldSkills UI library into your Angular application.

---

## Prerequisites

- Angular 20+
- Node.js 20+
- An existing Angular standalone application (no NgModules required)

---

## 1. Install Dependencies

```bash
npm install @worldskills/ng-ui @worldskills/ng-auth
npm install primeng @primeuix/themes primeicons
npm install @ngx-translate/core @ngx-translate/http-loader
npm install angular-oauth2-oidc
npm install tailwindcss @tailwindcss/postcss tailwindcss-primeui
```

---

## 2. Configure Tailwind CSS

The library uses Tailwind CSS v4, which is configured in CSS (see step 3). There is no `tailwind.config.js`.

Create `.postcssrc.json` in the project root so the Angular build runs Tailwind:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

---

## 3. Set Up Global Styles

In your `src/styles.scss`:

```scss
@use "tailwindcss";
@use "primeicons/primeicons.css";
@import "@worldskills/ng-ui/styles/fonts.css";
@import "@worldskills/ng-ui/styles/theme.css";
@source "../node_modules/@worldskills/ng-ui";
@layer tailwind-base, primeng, tailwind-utilities;
@plugin 'tailwindcss-primeui';
```

> **Important:** The `@layer` order ensures PrimeNG styles sit between Tailwind's base and utilities, so Tailwind utility classes can override PrimeNG when needed.

> **Important:** The `@source` line makes Tailwind scan the library's templates. Without it, utility classes used only inside library components (header, footer, page header, tree select, …) are not generated and those components render unstyled. The path is relative to `styles.scss`.

---

## 4. Create App Settings

Create `src/app/app.settings.ts` with your environment-specific configuration:

```ts
import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

export const appConfig = {
  notAuthorizedRoute: ['/not-authorized']
};

export const serviceConfig = {
  appCode: [300],            // your app code(s) for the WorldSkills API
  apiEndpoint: environment.apiUrl
};

export const oAuthConfig: AuthConfig = {
  loginUrl: environment.loginUrl,
  redirectUri: environment.defaultUrl,
  userinfoEndpoint: `${environment.apiUrl}/auth/users/loggedIn?show_child_roles=false&app_code=300`,
  clientId: environment.clientId,
  clearHashAfterLogin: true,
  oidc: false,
};
```

---

## 5. Configure App Providers

In your `src/app/app.config.ts`:

```ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { ConfirmationService, MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';

import {
  WorldSkillsPreset,
  WorldSkillsPTPreset,
  provideWsNgUi,
  provideWsNgUiTranslations,
  wsHttpInterceptor,
} from '@worldskills/ng-ui';
import { provideWsNgAuth } from '@worldskills/ng-auth';

import { routes } from './app.routes';
import { appConfig as wsAppConfig, serviceConfig, oAuthConfig } from './app.settings';

export const appConfig: ApplicationConfig = {
  providers: [
    // Angular core
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([wsHttpInterceptor])),

    // Translations
    ...provideTranslateService({ lang: 'en', extend: true }),
    ...provideTranslateHttpLoader(),
    provideWsNgUiTranslations(),

    // WorldSkills Auth
    provideOAuthClient(),
    provideWsNgAuth({
      auth: oAuthConfig,
      api: serviceConfig,
      app: wsAppConfig,
    }),

    // WorldSkills UI
    MessageService,          // required by WsAlertService / ws-ng-ui-toast
    ConfirmationService,     // required by WsConfirmService / ws-ng-ui-confirm
    provideWsNgUi({
      enableLogging: true,
      api: {
        apiEndpoint: serviceConfig.apiEndpoint,
        appCode: serviceConfig.appCode,
      },
      http: { includeAuthToken: true },
    }),

    // PrimeNG — WorldSkills theme
    providePrimeNG({
      pt: WorldSkillsPTPreset,
      theme: {
        preset: WorldSkillsPreset,
        options: {
          prefix: 'ws',                    // required — do not change
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities',
          },
          ripple: true,
        },
      },
      ripple: true,
    }),
  ],
};
```

### Key points

- **`prefix: 'ws'`** is required. The library's styles depend on this prefix for CSS variables.
- **`WorldSkillsPreset`** provides brand colors and component design tokens.
- **`WorldSkillsPTPreset`** provides passthrough styling for PrimeNG components.
- **`wsHttpInterceptor`** automatically attaches auth tokens and language params to API requests.
- **`provideWsNgUiTranslations()`** registers the library's built-in translations. Use `extend: true` in `provideTranslateService` to merge with your app's translations.

---

## 6. Set Up the App Shell

### app.component.ts

```ts
import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  HeaderComponent,
  FooterComponent,
  BreadcrumbComponent,
  WsToastComponent,
  MenuItem,
} from '@worldskills/ng-ui';
import { NgAuthService, RedirectHandler, User } from '@worldskills/ng-auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BreadcrumbComponent, WsToastComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private ngAuthService = inject(NgAuthService);
  private redirectHandler = inject(RedirectHandler);
  private router = inject(Router);

  appName = 'My Application';
  isLoggedIn = signal(false);
  showLoginAndLogoutButtons = true;
  currentUser = signal<User>(null);

  menuItems: MenuItem[] = [
    { label: 'Home', url: '/home', hidden: false, requireLogin: false, requiredRoles: [] },
    { label: 'Dashboard', url: '/dashboard', hidden: false, requireLogin: false, requiredRoles: [] },
  ];

  dropDownMenuItems: MenuItem[] = [
    { label: 'Profile', url: '/profile', hidden: false, requireLogin: true, requiredRoles: [] },
  ];

  constructor() {
    this.ngAuthService.currentUser$.subscribe(user => {
      this.currentUser.set(user);
      this.isLoggedIn.set(this.ngAuthService.isLoggedIn());
    });

    this.ngAuthService.ready.then(() => {
      this.isLoggedIn.set(this.ngAuthService.isLoggedIn());
      if (this.ngAuthService.isLoggedIn()) {
        this.ngAuthService.getLoggedInUser().subscribe();
        if (sessionStorage.getItem('returnUrl')) {
          this.redirectHandler.handle({ defaultRoute: ['/home'] });
        }
      }
    });
  }

  login() {
    this.redirectHandler.saveReturnUrl();
    this.ngAuthService.login();
  }

  logout() {
    this.ngAuthService.logout().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
```

### app.component.html

```html
<ws-ng-ui-toast />

<ws-ng-ui-header
  [appName]="appName"
  [isLoggedIn]="isLoggedIn()"
  [showLoginAndLogoutButtons]="showLoginAndLogoutButtons"
  [menuItems]="menuItems"
  [dropDownMenuItems]="dropDownMenuItems"
  [currentUser]="currentUser()"
  (loginClick)="login()"
  (logoutClick)="logout()"
/>

<main class="max-w-screen-xl mx-auto px-4 pb-8" style="min-height: calc(100vh - 200px)">
  <ws-ng-ui-breadcrumb homeLabel="Home" homeRoute="/home" />
  <div class="mt-4">
    <router-outlet />
  </div>
</main>

<ws-ng-ui-footer
  [isLoggedIn]="isLoggedIn()"
  [currentUser]="currentUser()"
  (loginClick)="login()"
  (logoutClick)="logout()"
/>
```

---

## 7. Using Components

### Alerts (inline)

```html
<ws-ng-ui-alert severity="success" message="Record saved." />
<ws-ng-ui-alert severity="error" message="Something went wrong." [closable]="true" />
```

### Toast notifications (from anywhere)

```ts
import { WsAlertService } from '@worldskills/ng-ui';

constructor(private alerts: WsAlertService) {}

this.alerts.success('Saved successfully.');
this.alerts.info('Session expires soon.');
this.alerts.warn('Check your input.', 'Warning');
this.alerts.error('Connection failed.');
```

### Confirm dialog

All methods return a Promise. `confirm`, `yesNo` and `danger` resolve to `true` when accepted.

```ts
import { WsConfirmService } from '@worldskills/ng-ui';

private confirm = inject(WsConfirmService);

if (await this.confirm.danger({ message: 'Delete this address?' })) {
  // confirmed
}

await this.confirm.alert('Saved.');
```

Add the confirm component to your app shell (once):

```html
<ws-ng-ui-confirm />
```

### Data table

```html
<ws-ng-ui-data-table
  [columns]="columns"
  [rows]="data"
  [sortable]="true"
  [filterable]="true"
  editMode="inline"
  [showDelete]="true"
  [showAdd]="true"
  (rowSave)="onSave($event)"
  (rowDelete)="onDelete($event)"
  (addClick)="onAdd()"
/>
```

### Breadcrumbs

Breadcrumbs are built from the router. Add a `breadcrumb` to each route's `data`:

```ts
{
  path: 'competitions',
  data: { breadcrumb: 'Competitions' },
  children: [
    { path: ':id', component: CompetitionComponent, data: { breadcrumb: { key: 'competition', label: 'Loading...' } } },
  ],
}
```

Replace a label once the data has loaded:

```ts
import { BreadcrumbService } from '@worldskills/ng-ui';

private breadcrumbs = inject(BreadcrumbService);

this.breadcrumbs.replaceLabel('competition', 'Lyon 2024');
```

### Page header

```html
<ws-ng-ui-page-header title="Members" subtitle="All WorldSkills members" backLink="/">
  <p-button wsPageHeaderActions label="New member" icon="pi pi-plus" />
</ws-ng-ui-page-header>
```

### Search select (server-side lookup)

```ts
searchCountries: WsSearchFn<Country> = term => this.countryService.search(term);
```

```html
<ws-ng-ui-search-select formControlName="country" [search]="searchCountries" optionLabel="name.text" />
```

### Role-based content and route guards (`@worldskills/ng-auth`)

```html
<button *wsHasRole="['Admin', 'EditMember']; appCode: 800">Add</button>
<button *wsHasRole="'EditMember'; appCode: 800; entity: member.id">Edit</button>
```

```ts
import { roleGuard } from '@worldskills/ng-auth';

{ path: 'admin', canActivate: [roleGuard([{ appCode: 800, name: 'Admin' }])], loadComponent: ... }
```

---

## 8. Menu Items

The `MenuItem` interface controls header navigation:

```ts
interface MenuItem {
  label: string;
  url: string;
  hidden: boolean;          // hide from nav
  requireLogin: boolean;    // only show when logged in
  requiredRoles: string[];  // role-based visibility
  subMenuItems?: MenuItem[]; // renders as horizontal sub-menu bar
}
```

---

## 9. Available Brand Colors

The preset includes WorldSkills brand colors as PrimeNG design tokens. Each color has shades from 50 to 950:

| Token | Base (500) | Semantic mapping |
|-------|-----------|-----------------|
| `ws-blue` | `#00658F` | `primary` |
| `ws-blue-dark` | `#003764` | — |
| `ws-cyan` | `#00BBE6` | `info` |
| `ws-teal` | `#5FC5BD` | — |
| `ws-purple` | `#4A0D66` | — |
| `ws-pink` | `#AC0D56` | — |
| `ws-orange` | `#E34123` | — |
| `ws-yellow` | `#DFC823` | `warn` |
| `ws-red` | `#DC3545` | `danger` |
| `ws-green` | `#28A745` | `success` |
| `ws-gray` | `#878787` | — |

Use in Tailwind: `text-primary-500`, `bg-surface-100`, etc. (via `tailwindcss-primeui` plugin).

---

## 10. Error Tracking (Sentry)

WorldSkills apps report errors to Sentry through the optional `@worldskills/ng-ui/sentry` entry point.

```bash
npm install @sentry/angular
```

Add the DSN and settings to each environment file (the DSN is not a secret — it ends up in the browser bundle):

```ts
sentry: { dsn: 'https://…@….ingest.sentry.io/…', environment: 'staging', enabled: true },
```

Register it in `app.config.ts`:

```ts
import { provideWsSentry, wsSentryHttpInterceptor } from '@worldskills/ng-ui/sentry';

provideHttpClient(withInterceptors([wsHttpInterceptor, wsSentryHttpInterceptor])),
provideWsSentry({ ...environment.sentry, release: environment.version }),
```

What is reported:

- **Unhandled errors** (Angular `ErrorHandler`)
- **Unexpected API failures** — 5xx and network errors. 401/403/404 and validation errors are not reported. Use `ignoreUrlPatterns` for endpoints that should never be reported.
- Events carry the WorldSkills **user id only** — no names or email addresses. Query strings are stripped from URLs and breadcrumbs, and request/response bodies are never sent.

Report an error you handle yourself:

```ts
import { WsSentryService } from '@worldskills/ng-ui/sentry';

private sentry = inject(WsSentryService);

this.sentry.captureApiError(error, { method: 'PUT', action: 'save-address' });
this.sentry.captureException(error, { section: 'membership' });
```

Set `enabled: false` locally — nothing is initialised and the interceptor does nothing.

---

## 11. Session & Auth Notes

- Server sessions expire after **15 minutes** of inactivity (this is cross-app).
- There are no refresh tokens. A ping endpoint is available to extend the session.
- The `wsHttpInterceptor` handles token injection automatically for URLs matching your API endpoint.
