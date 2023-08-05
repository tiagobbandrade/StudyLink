import { Dispatch, FormEvent, RefObject, SetStateAction } from "react";
import { ErrorInterface } from "../register/page";
import { emailIsValid } from "@/functions/verifyEmail";
import { passwordIsValid } from "@/functions/verifyPassword";

export async function submitRegisterForm(
  e: FormEvent,
  emailRef: RefObject<HTMLInputElement>,
  email: string | undefined,
  setState: Dispatch<SetStateAction<ErrorInterface | undefined>>
) {
  e.preventDefault();
  if (!emailRef) return;

  if (!emailIsValid(email)) {
    emailRef.current?.focus();
    setState((oldValue) => ({
      ...oldValue,
      email: "Endereço de e-mail inválido",
    }));
    return;
  }

  setState((oldValue) => ({
    ...oldValue,
    email: "",
  }));
}
