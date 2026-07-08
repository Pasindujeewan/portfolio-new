import type { NextRequest } from "next/server";
import { protectAdminRoute } from "@/lib/session";

export function middleware(request: NextRequest) {
  return protectAdminRoute(request);
}

export const config = {
  matcher: ["/admin/:path*"]
};
