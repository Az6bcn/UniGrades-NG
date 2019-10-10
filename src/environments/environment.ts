// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authBaseURL: 'http://172.16.172.157:5000',
  baseURL: 'http://172.16.172.157:5001/api',
  baseURL_String: '172.16.172.157:5001',
  oidcClientSettings: {
    authority: 'http://172.16.172.157:5000', // AuthServer URL, Identity Server URL (OIDC/OAuth2 provider)
      client_id: 'unigrades-ng001', // client id as registered with Identity Server i.e OIDC/OAuth2 provider.
      redirect_uri: 'http://localhost:4200/auth-callback', // The redirect URI to receive a response from Identity Server.
      response_type: 'id_token token', // The type of response desired from Identity Server i.e OIDC/OAuth2 provider.
      post_logout_redirect_uri: 'http://localhost:4200/signout-callback-oidc',
      filterProtocolClaims: false,
      loadUserInfo: true,
      automaticSilentRenew: true,
      scope: 'openid profile unigradesapi.full_access' // Scopes being requested from Identity Server i.e OIDC/OAuth2 provider.
  }
};
