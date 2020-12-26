// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const authUrl = 'http://localhost:5001';
const apiUrl = 'http://localhost:5000/api';

export const environment = {
  production: false,
  authBaseURL: authUrl,
  baseURL: apiUrl,
  baseURL_String: 'http://localhost:5001',
  oidcClientSettings: {
    authority: authUrl, // AuthServer URL, Identity Server URL (OIDC/OAuth2 provider)
    client_id: 'unigrades-ng001', // client id as registered with Identity Server i.e OIDC/OAuth2 provider.
    redirect_uri: 'http://localhost:4200/auth-callback', // The redirect URI to receive a response from Identity Server.
    response_type: 'code', // The type of response desired from Identity Server i.e OIDC/OAuth2 provider.
    post_logout_redirect_uri: 'http://localhost:4200/signout-callback-oidc',
    filterProtocolClaims: false,
    loadUserInfo: true,
    automaticSilentRenew: true,
    scope: 'openid profile unigradesapi.full_access' // Scopes being requested from Identity Server i.e OIDC/OAuth2 provider.
  }
};
