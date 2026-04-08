import { applicationConfig, type Preview } from '@storybook/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { WorldSkillsPreset, WorldSkillsPTPreset, provideWsNgUiTranslations, provideWsNgUi } from 'worldskills-ng-ui';

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideAnimationsAsync(),
        provideHttpClient(),
        ...provideTranslateService({ lang: 'en', extend: true }),
        provideWsNgUiTranslations(),
        provideWsNgUi({ enableLogging: false }),
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
