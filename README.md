# WorldSkills Angular Library

This project is library of common functionality that supports the development of WorldSkills applications.

## Versioning guidelines
The versioning is divided into 3 parts. MAJOR, MINOR, and PATCH.

- The Major version is incremented when a breaking change occurs (in this case the library is not backward compatible)
- the Minor version is incremented when we add new functionality in a backward compatible manor.
- The PATCH version is incremented when we perform bug fixes, and the changes are backward comptible.

## Changelog

Notable changes can be viewed [here](https://github.com/worldskills/worldskills-angular-lib/blob/master/changelog.md).

## Setup
Insert the following entry into your `local API_AUTH`
```
INSERT INTO client_application
(name, created_by, client_key, secret, requires_authorization, redirect_uri, logout_redirect_uri, can_perform_authentication, grant_type)
VALUES
('WorldSkills Angular Lib', 'WorldSkills International', '6321532f6771', '211b2c58-5dbd-4dca-b4e4-fb506d10972b', 'N', 'http://localhost:4200/home', 'http://localhost:4200/home', 'N', 'IMPLICIT')
```

## Usage examples

Examples of how library components work can be viewed [here](https://github.com/worldskills/worldskills-angular-lib/blob/main/usage.md).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run ws_build_lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Packaging

Run `npm run ws_npm_pack` to create the tgz package (a node module) in the `dist/worldskills-angular-lib` directory.

## Build & Package together

Run `npm run ws_package`

## Publishing

We publish our packages on [npmjs](https://www.npmjs.com/) under the *WorldSkills* organization, [here](https://www.npmjs.com/package/@worldskills/worldskills-angular-lib).
After building and packaging, go to the dist folder `cd dist/worldskills-angular-lib` and run `npm publish`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Getting Started

### package installaion

once you've set up a new angular application install the following libraries:  
`ng add @ng-bootstrap/ng-bootstrap`  
`npm i angular-oauth2-oidc`  
`npm i popper.js`  
`npm i angular-font-awesome`  
`npm i ng-select`  
`npm i @worldskills/bootstrap`
`npm i @worldskills/worldskills-angular-lib`

### Styling

Add the following line to an applications `styles.css`  
`@import "~@ng-select/ng-select/themes/default.theme.css";`  
`@import "~@worldskills/worldskills-angular-lib/assets/styles/index.css";`  

### app.module.ts

add the following import statement into your app.module.ts  
`import { WorldskillsAngularLibModule, WsHttpInterceptor } from '@worldskills/worldskills-angular-lib';`  

ensure the following modules are within the `import: { ... }` section of your app.module.ts  

```TypeScript
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

export const appTranslationConfig = TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  isolate: true, // isolate property is the key point to remember/
});

@NgModule({
  declarations: [
    AppComponent,
    // your components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot(appRoutes, routerOptions),
    appTranslationConfig,
    WorldskillsAngularLibModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WsHttpInterceptor, multi: true },
  ],  bootstrap: [AppComponent]
})
export class AppModule {
}
```

for Standalone apps, you do not have an AppModule, you need to do this in the `appConfig` instead
ensure the following modules are within the `importProvidersFrom: { ... }` section of your app.config.ts  

```TypeScript
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

export const appTranslationConfig = TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  isolate: true, // isolate property is the key point to remember/
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      appTranslationConfig,
      WorldskillsAngularLibModule.forRoot({})
    ),
  ],
};
```

### configure the module

Add the following to your `app.component.ts` to configure teh module.
All configuration is optional. this example provides a full set of what's available.
calling the `next()` method of a config type propogates that config to the module

```TypeScript
constructor(private wsi: WorldskillsAngularLibService) {
}
ngOnInit() {
    const appConfig = this.wsi.appConfigSubject.getValue();
    appConfig.notAuthorizedRoute = ['/not-authorized'];
    this.wsi.appConfigSubject.next(appConfig);

    this.wsi.authConfigSubject.next({
        loginUrl: 'http://localhost:50300/oauth/authorize',
        clientId: '7221138f6772',
        redirectUri: 'http://localhost:4200/home',
        userinfoEndpoint: 'http://localhost:8081/users/loggedIn?show_child_roles=false&app_code=500',
        oidc: false
    });

    const httpConfig = this.wsi.httpConfigSubject.getValue();
    httpConfig.encoderUriPatterns = [];
    httpConfig.authUriPatterns = ['http://localhost:8081'];
    this.wsi.httpConfigSubject.next(httpConfig);

    const serviceConfig = this.wsi.serviceConfigSubject.getValue();
    serviceConfig.appCode = [500];
    serviceConfig.apiEndpoint = 'http://localhost:8081';
    this.wsi.serviceConfigSubject.next(serviceConfig);
}
```

### http auth injector

The WSHttpInjector will extract the current auth token and inject into in future web requests that match the patterns specified in the httpConfig object.  
ensure the following provider is added within the `providers: { ... }` section of your app.module.ts  
`{ provide: HTTP_INTERCEPTORS, useClass: WsHttpInterceptor, multi: true }`

## Extending the library

When extending the library follow theese guidelies:

- We've taken a somewhat `feature` design to the approach.
  - What this means is that eacch folder in the library source `(/src/lib)` is it's own feature.
  - the only exception is the `common` folder.
- The common folder contains `shared code` that would be useful to all features.
- Features may sometimes depend on classes other features, an example would be the `entity-tree-select` feature whicch depends on models from Auth.
- When you creating a new module, it's alright to keep it self-contained until fully developped then common code can be identified and moved to the `common` folder.
- We follow the one-class per file rule. exceptions can be made where it is sensible.
- When creating a new service that requires config. please hook onto the config cchange event in your service constructor

### Hooking onto the config change events

```TypeScript
this.wsi.serviceConfigSubject.subscribe(
  next => {
    this.appCode = next.appCode;
    this.endpoint = next.apiEndpoint + '/auth';
  }
);
```

## Translations

- i18n translations are lazy loaded via json files in `/assets/i18n/lazy-loaded`
- translationns are issolated so they will not overwrite app transslations

### Upadding translatioons

- the `.json` files mainly exist to support weblate
- the `json.ts` files are required to transslations to work at a lib level (thiss is a workaround for now)
- regardless of how the translations are uopdated, we still needd to publissh a new versionn of the lib.
