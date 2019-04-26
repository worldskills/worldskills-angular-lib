import { OAuthConfig, ServiceConfig, EncoderConfig } from 'worldskills-angular-lib';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

const serviceConfig = new ServiceConfig();
serviceConfig.appCode = 500;
serviceConfig.userServiceEndpoint = 'http://localhost:8081/auth';

const oAuthConfig = new OAuthConfig();
oAuthConfig.loginURI = 'http://localhost:50300/oauth/authorize';
oAuthConfig.clientId = 'b4fe5608e0d7';
oAuthConfig.oidc = false;

const encoderConfig = new EncoderConfig();
encoderConfig.uriPatterns = [];

export const config = {
  service: serviceConfig,
  oauth: oAuthConfig,
  encoder: encoderConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
