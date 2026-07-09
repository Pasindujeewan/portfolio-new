import { cookies } from "next/headers";
import { createSessionToken, sessionCookie, verifySessionToken } from "@/lib/session";

export async function setSession(email: string) {
  const token = await createSessionToken(email);
  const cookieStore = await cookies();
  // HttpOnly keeps the admin session inaccessible to browser JavaScript.
  cookieStore.set(sessionCookie, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(sessionCookie);
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get(sessionCookie)?.value);
}
