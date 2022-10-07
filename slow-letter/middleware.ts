import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Getting cookies from the request
  const accessToken = request.cookies.get("accessToken");
  const refreshToken = request.cookies.get("refreshToken");

  const { pathname } = request.nextUrl;

  // 토큰이 있을 때
  const loggedInUrl = ["/signup", "/signin"];
  if (accessToken) {
    if (loggedInUrl.includes(pathname)) {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(`${url}`);
    }
  }
}
