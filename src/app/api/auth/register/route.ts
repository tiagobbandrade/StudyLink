import { initializeFirebase } from "@/services/admin-firebase";
import { getAuth } from "firebase-admin/auth";
import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import { FirebaseError } from "firebase/app";
import { cookies } from "next/dist/client/components/headers";

initializeFirebase();

type BodyType = {
  data: {
    email: string;
    password: string;
  };
};

export async function POST(req: NextRequest, res: NextResponse) {
  const { data } = await req.json().then((data: BodyType) => data);
  const auth = getAuth();

  try {
    const user = await auth.createUser({
      email: data.email,
      password: data.password,
    });

    const token = await new jose.SignJWT({})
      .setProtectedHeader({ alg: "HS256" })
      .setJti(user.uid)
      .setIssuedAt()
      .setExpirationTime("5m")
      .sign(new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_TOKEN));

    cookies().set({
      name: "Authorization_token",
      value: token,
      httpOnly: true,
      maxAge: 300, //5 minutes
    });

    return NextResponse.json({ token, status: 200 });
  } catch (error) {
    const err = error as FirebaseError;
    return NextResponse.json({
      message: err,
      type: "error",
      status: 400,
    });
  }
}
