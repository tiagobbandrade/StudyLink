import { jwtVerify } from "jose";

export async function verifyToken(token: string) {
  try {
    await jwtVerify(
      token,
      new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_TOKEN)
    );
    return true;
  } catch (error) {
    return false;
  }
}
