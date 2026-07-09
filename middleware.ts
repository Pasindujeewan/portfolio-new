import type { NextRequest } from "next/server";
import { protectAdminRoute } from "@/lib/session";

// Middleware runs before admin pages load, so protected routes cannot flash.
export function middleware(request: NextRequest) {
  return protectAdminRoute(request);
}

export const config = {
  matcher: ["/admin/:path*"]
};
