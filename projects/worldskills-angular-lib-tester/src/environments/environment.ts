
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const serviceConfig = {
  appCode: 500,
  userServiceEndpoint: 'http://localhost:8081/auth'
} as ServiceConfig;

export const oAuthConfig = {
  loginUrl: 'http://localhost:50300/oauth/authorize',
  clientId: '11cb270afcc0',
  redirectUri: 'http://localhost:4200/home',
  userinfoEndpoint: 'http://localhost:8081/users/loggedIn?show_child_roles=false&app_code=500',
  oidc: false
} as AuthConfig;

export const httpConfig = {
  encoderUriPatterns: [],
  authUriPatterns: [
    'http://localhost:8081'
  ]
} as WSHttpConfig;



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
import { ServiceConfig } from '../../../worldskills-angular-lib/src/lib/config/service-config';
import { WSHttpConfig } from '../../../worldskills-angular-lib/src/lib/config/ws-http-config';
import { AuthConfig } from 'angular-oauth2-oidc';

