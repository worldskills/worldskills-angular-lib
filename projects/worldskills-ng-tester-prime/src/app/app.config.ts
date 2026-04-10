import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// Aura removed — using WorldSkillsPreset instead
import { WorldSkillsPreset, WorldSkillsPTPreset, provideWsNgUiTranslations, provideWsNgUi } from '@worldskills/ng-ui';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { wsHttpInterceptor } from '@worldskills/ng-ui';
import { provideLibraryConfig } from '@worldskills/ng-auth';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { routes } from './app.routes';
import { appConfig as wsAppConfig, serviceConfig, oAuthConfig } from './app.settings';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([wsHttpInterceptor])),
    ...provideTranslateService({ lang: 'en', extend: true }),
    ...provideTranslateHttpLoader(),
    provideWsNgUiTranslations(),
    MessageService,
    provideLibraryConfig({
      auth: oAuthConfig,
      api: serviceConfig,
      app: wsAppConfig,
    }),
    provideOAuthClient(),
    provideWsNgUi({
      enableLogging: true,
      api: { apiEndpoint: serviceConfig.apiEndpoint, appCode: serviceConfig.appCode },
      http: { includeAuthToken: true },
    }),
    providePrimeNG({
      pt: WorldSkillsPTPreset,
      theme: {
        preset: WorldSkillsPreset,                    // ← Aura, Lara, Nora, Material, etc.
        options: {
          prefix: 'ws', // required by worldskills-ng-ui — do not change
          darkModeSelector: '.dark',    // or '.dark', 'media', etc.
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities'  // ← very important for Tailwind + PrimeNG order
          },
          ripple: true,
        }
      },
      ripple: true,                     // optional: enable ripple globally
    })
  ]
};
