import { OAuthConfig, ServiceConfig, WSHttpConfig } from 'worldskills-angular-lib';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const serviceConfig = {
  appCode: 500,
  userServiceEndpoint: 'http://localhost:8081/auth'
};

export const oAuthConfig = {
  loginURI: 'http://localhost:50300/oauth/authorize',
  clientId: 'b4fe5608e0d7',
  oidc: false
};

export const httpConfig = {
  encoderUriPatterns: [],
  authUriPatterns: []
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
