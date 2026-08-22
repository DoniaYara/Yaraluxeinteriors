import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  if (pathname.startsWith("/author") && pathname !== "/author/login") {
    const cookie = request.cookies.get("yli_author_session")?.value;
    if (!cookie) {
      const url = request.nextUrl.clone();
      url.pathname = "/author/login";
      url.search = "";
      return NextResponse.redirect(url);
    }
  }

  if (pathname.startsWith("/admin")) {
    const cookie = request.cookies.get("yli_author_session")?.value;
    if (!cookie) {
      const url = request.nextUrl.clone();
      url.pathname = "/author/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/author", "/author/:path*", "/admin/:path*", "/blog/preview/:path*"]
};
