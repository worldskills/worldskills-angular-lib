import { ServiceConfig, WSHttpConfig } from 'worldskills-angular-lib';
import { AuthConfig } from 'angular-oauth2-oidc';

export const environment = {
  production: true
};


export const serviceConfig = {
  appCode: 500,
  userServiceEndpoint: 'http://localhost:8081/auth'
} as ServiceConfig;

export const oAuthConfig = {
  loginURI: 'http://localhost:50300/oauth/authorize',
  clientId: 'b4fe5608e0d7',
  oidc: false
} as AuthConfig;

export const httpConfig = {
  encoderUriPatterns: [],
  authUriPatterns: []
} as WSHttpConfig;
