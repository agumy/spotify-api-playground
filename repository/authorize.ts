const scopes = "user-read-private user-read-email";

const redirectURI = "http://localhost:3000/";

export function authorize(clientId: string): string {
  // var scope = "user-read-private user-read-email";

  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(clientId);
  url += "&redirect_uri=" + encodeURIComponent(redirectURI);

  return url;
}
