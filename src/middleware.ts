import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/verifyToken";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("Authorization_token")?.value;
  console.log(token);
  if (!token) return NextResponse.redirect(new URL("/auth/register", req.url));
  const verifiedToken = await verifyToken(token);
  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/auth/register", req.url));
  }
}

export const config = {
  matcher: ["/protected"],
};
