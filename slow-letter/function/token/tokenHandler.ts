import axios from "axios";
import { setCookies } from "../cookie-handler/cookieHandler";

export function setToken(accessToken: string, refreshToken: string) {
  axios.defaults.headers.common["X-AUTH-TOKEN"] = accessToken;
  // const expires = new Date();
  // expires.setDate(Date.now() + 1000 * 60 * 5);

  // 배포 시에는 httpOnly: true로 변경
  setCookies("accessToken", accessToken, {
    path: "/",
    maxAge: 3600,
    httpOnly: false,
  });

  setCookies("refreshToken", refreshToken, {
    path: "/",
    maxAge: 3600,
    httpOnly: false,
  });
}
