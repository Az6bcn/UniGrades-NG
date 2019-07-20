// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authBaseURL: 'http://172.16.172.157:5000',
  baseURL: 'http://172.16.172.157:5001/api',
  oidcClientSettings: {
    authority: 'http://172.16.172.157:5000', // AuthServer URL, Identity Server URL (OIDC/OAuth2 provider)
      client_id: 'unigrades-ng001', // client id as registered with Identity Server i.e OIDC/OAuth2 provider.
      redirect_uri: 'http://localhost:4200/auth-callback', // The redirect URI to receive a response from Identity Server.
      response_type: 'id_token token', // The type of response desired from Identity Server i.e OIDC/OAuth2 provider.
      post_logout_redirect_uri: 'http://localhost:4200/signout-callback-oidc',
      filterProtocolClaims: false,
      loadUserInfo: true,
      automaticSilentRenew: true,
      scope: 'openid profile ' // Scopes being requested from Identity Server i.e OIDC/OAuth2 provider.
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
