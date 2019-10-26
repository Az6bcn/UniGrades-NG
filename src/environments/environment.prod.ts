export const environment = {
  production: true,
  authBaseURL: 'https://ungradesauthserver.azurewebsites.net',
  baseURL: 'https://unigrades.azurewebsites.net/api',
  baseURL_String: 'unigrades.azurewebsites.net',
  oidcClientSettings: {
    authority: 'https://ungradesauthserver.azurewebsites.net', // AuthServer URL, Identity Server URL (OIDC/OAuth2 provider)
      client_id: 'unigrades-ng001', // client id as registered with Identity Server i.e OIDC/OAuth2 provider.
      redirect_uri: 'https://unigrades.azurewebsites.net/auth-callback', // The redirect URI to receive a response from Identity Server.
      response_type: 'id_token token', // The type of response desired from Identity Server i.e OIDC/OAuth2 provider.
      post_logout_redirect_uri: 'https://unigrades.azurewebsites.net/signout-callback-oidc',
      filterProtocolClaims: false,
      loadUserInfo: true,
      automaticSilentRenew: true,
      scope: 'openid profile unigradesapi.full_access' // Scopes being requested from Identity Server i.e OIDC/OAuth2 provider.
  }
};
