import { NextResponse, type NextRequest } from "next/server";

export const sessionCookie = "pasindu_admin_session";

const encoder = new TextEncoder();

// Convert binary signatures into URL-safe strings for cookie storage.
function base64url(buffer: ArrayBuffer | Uint8Array) {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64url(value: string) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  return Uint8Array.from(atob(padded), (char) => char.charCodeAt(0));
}

async function sign(value: string, secret: string) {
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign"
  ]);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return base64url(signature);
}

export async function createSessionToken(email: string) {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET is not configured.");
  const payload = base64url(
    encoder.encode(
      JSON.stringify({
        email,
        // Admin sessions expire after 8 hours.
        exp: Date.now() + 1000 * 60 * 60 * 8
      })
    )
  );
  return `${payload}.${await sign(payload, secret)}`;
}

export async function verifySessionToken(token?: string) {
  const secret = process.env.AUTH_SECRET;
  if (!token || !secret || !token.includes(".")) return false;
  const [payload, signature] = token.split(".");
  const expected = await sign(payload, secret);
  if (signature !== expected) return false;

  try {
    // A valid signature is not enough; reject expired sessions too.
    const decoded = new TextDecoder().decode(fromBase64url(payload));
    const parsed = JSON.parse(decoded) as { exp: number };
    return parsed.exp > Date.now();
  } catch {
    return false;
  }
}

export async function protectAdminRoute(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isLogin = pathname === "/admin/login";
  const verified = await verifySessionToken(request.cookies.get(sessionCookie)?.value);

  // Any unauthenticated admin route is sent to the login screen.
  if (!verified && !isLogin) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Already logged-in admins should not see the login page again.
  if (verified && isLogin) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}
