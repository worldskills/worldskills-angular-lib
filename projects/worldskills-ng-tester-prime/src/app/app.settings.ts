import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

export const appConfig = {
  notAuthorizedRoute: ['/not-authorized']
};

// general service configuration
export const serviceConfig = {
  // auth, forums, resources, votes
  appCode: [300, 500, 1000, 3600],
  apiEndpoint: environment.apiUrl
};

// oauth client app configuration
export const oAuthConfig: AuthConfig = {
  loginUrl: environment.loginUrl,
  redirectUri: environment.defaultUrl,
  userinfoEndpoint: `${environment.apiUrl}/auth/users/loggedIn?show_child_roles=false&app_code=500`,
  clientId: environment.clientId,
  clearHashAfterLogin: true,
  oidc: false,
};

export const httpConfig = {
  // used to apply custom url parameter encoding for java services
  encoderUriPatterns: [],

  // used to automagically inject auth tokens in http requests
  authUriPatterns: [environment.apiUrl],

  // enable language code in api requests
  includeLanguageParam: true
};
