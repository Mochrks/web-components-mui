import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "app_token";

export function getToken() {
  return Cookies.get(TOKEN_KEY) || null;
}

export function setToken(token, options = { expires: 7 }) {
  Cookies.set(TOKEN_KEY, token, options);
}

export function clearToken() {
  Cookies.remove(TOKEN_KEY);
}

export function getDecodedToken() {
  const t = getToken();
  return t ? jwtDecode(t) : null;
}
