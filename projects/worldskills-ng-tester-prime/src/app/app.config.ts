import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';   // ← this is the correct import (JS module)
import { WorldSkillsPreset, WorldSkillsPTPreset, provideWsNgUiTranslations } from 'worldskills-ng-ui';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient(),
    ...provideTranslateService({ lang: 'en', extend: true }),
    ...provideTranslateHttpLoader(),
    provideWsNgUiTranslations(),
    providePrimeNG({
      pt: WorldSkillsPTPreset,
      theme: {
        preset: WorldSkillsPreset,                    // ← Aura, Lara, Nora, Material, etc.
        options: {
          prefix: 'ws',                   
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
