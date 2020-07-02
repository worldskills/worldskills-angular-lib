# WorldskillsAngularLib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Changelog

Notable changes can be viewed [here](https://github.com/worldskills/worldskills-angular-lib/blob/master/changelog.md).

## Usage examples

Examples of how library components work can be viewed [here](https://github.com/worldskills/worldskills-angular-lib/blob/master/usage.md).

## Code scaffolding

Run `ng generate component component-name --project worldskills-angular-lib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project worldskills-angular-lib`.
> Note: Don't forget to add `--project worldskills-angular-lib` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build worldskills-angular-lib` or `npm run build_lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Packaging

Run `npm run package` to create the tgz package (a node module) in the `dist/worldskills-angular-lib` directory.

## Publishing

After building your library with `ng build worldskills-angular-lib`, go to the dist folder `cd dist/worldskills-angular-lib` and run `npm publish`.

## Running unit tests

Run `ng test worldskills-angular-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Getting Started

### package installaion

once you've set up a new angular application install the following libraries:  
`npm i angular-oauth2-oidc`  
`npm i json2typescript`  
`npm i popper.js`  
`npm i angular-font-awesome`  
`npm i ng-select`  
`npm i @worldskills/bootstrap`

### angular.json

add `node_modules/@ng-select/ng-select/themes/default.theme.css` to the style definitions.

### app.module.ts

add the following import statement into your app.module.ts  
`import { WorldskillsAngularLibModule, WsHttpInterceptor } from '@worldskills/worldskills-angular-lib';`  
Then create the following config objects in your app.module.ts

``` typescript
const serviceConfig = {
  appCode: [1000],
  apiEndpoint: 'https://api.worldskills.show',
};

// oauth client app configuration
const oAuthConfig = {
  // login page URI
  loginUrl: 'https://auth.worldskills.show/oauth/authorize',

  // this should match your configured redirecctUri in auth admin
  redirectUri: 'https://my-app.worldskills.show',

  // load the user information object
  userinfoEndpoint: 'https://api.worldskills.show/auth/users/loggedIn?show_child_roles=false&app_code=1000',

  // this should match the auth admin valiue
  clientId: '5bc213b7bfef',

  // keep this false
  oidc: false
} as AuthConfig;

const httpConfig = {
  // used to apply custom url parameter encoding for java services
  encoderUriPatterns: [],

  // used to automagically inject auth tokens in http requests
  authUriPatterns: ['api.worldskills.org']
};
```

### Register the library

ensure the following modules are within the `import: { ... }` section of your app.module.ts  

```TypeScript
WorldskillsAngularLibModule.forConfig(serviceConfig, oAuthConfig, httpConfig)
```

Alternatively you don't need all the config, you can use `forFn` instead of `forConfig`

```TypeScript
WorldskillsAngularLibModule.forFn(mod => {
  mod.service = serviceConfig;
  return mod;
}),
```

### http auth injector

The WSHttpInjector will extract the current auth token and inject into in future web requests that match the patterns specified in the httpConfig object.  
ensure the following provider is added within the `providers: { ... }` section of your app.module.ts  
`{ provide: HTTP_INTERCEPTORS, useClass: WsHttpInterceptor, multi: true }`
