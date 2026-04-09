import { applicationConfig, type Preview } from '@storybook/angular';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient } from '@angular/common/http';
// provideAnimations is needed so PrimeNG overlay panels animate correctly in Storybook's
// applicationConfig context (overlays stuck at opacity:0 without it)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore – deprecated in Angular 20 but still required for Storybook
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideTranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { WorldSkillsPreset, WorldSkillsPTPreset, provideWsNgUiTranslations, provideWsNgUi } from '@worldskills/ng-ui';

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideHttpClient(),
        ...provideTranslateService({ lang: 'en', extend: true }),
        provideWsNgUiTranslations(),
        provideWsNgUi({ enableLogging: false }),
        ConfirmationService,
        MessageService,
        providePrimeNG({
          pt: WorldSkillsPTPreset,
          theme: {
            preset: WorldSkillsPreset,
            options: {
              prefix: 'ws',
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
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
