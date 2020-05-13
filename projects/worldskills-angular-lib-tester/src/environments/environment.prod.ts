export const environment = {
  production: true
};

export const serviceConfig = {
  appCode: [500, 3600],
  apiEndpoint: 'http://localhost:8081',
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
