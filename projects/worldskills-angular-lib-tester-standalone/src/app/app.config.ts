import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { WorldskillsAngularLibModule } from "worldskills-angular-lib";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { provideTranslateHttpLoader, TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, provideHttpClient } from "@angular/common/http";

export const appTranslationConfig = TranslateModule.forRoot({
  loader: provideTranslateHttpLoader({
    prefix: "/assets/i18n/",
    suffix: ".json",
    enforceLoading: true,
    useHttpBackend: true,
  }),
  isolate: true, // isolate property is the key point to remember/
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      appTranslationConfig,
      WorldskillsAngularLibModule.forRoot({})
    ),
  ],
};
