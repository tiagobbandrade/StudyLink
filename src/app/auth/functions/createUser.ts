"use server";
import { auth } from "@/api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function createUser(email: string, password: string) {
  let user, error;

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => (user = userCredentials.user.email))
    .catch(
      (errorOnCreation) =>
        (error = errorOnCreation.customData._tokenResponse.error.message)
    );

  return { user, error };
}
