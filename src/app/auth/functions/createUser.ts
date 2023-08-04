"use server";
import "whatwg-fetch";
import { auth } from "@/api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function createUser(email: string, password: string) {
  let user, error;

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      user = userCredentials.user.email;
      console.log(userCredentials.user.email);
    })
    .catch((errorOnCreation) => {
      error = errorOnCreation;
      console.log(errorOnCreation);
    });

  return { user, error };
}
