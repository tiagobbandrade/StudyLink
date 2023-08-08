import { Dispatch, RefObject, SetStateAction } from "react";
import { ErrorInterface } from "../register/page";
import { emailIsValid } from "@/functions/emailIsValid";
import { passwordIsValid } from "@/functions/passwordIsValid";
import { checkEqualityOfPasswords } from "@/functions/checkEqualityOfPasswords";

export interface RegisterUserInterface {
  ref: {
    email: RefObject<HTMLInputElement>;
    password: RefObject<HTMLInputElement>;
    confirmPassword: RefObject<HTMLInputElement>;
  };
  setState: Dispatch<SetStateAction<ErrorInterface | undefined>>;
}

export async function registerUser({ ref, setState }: RegisterUserInterface) {
  const { confirmPassword, email, password } = ref;

  const errorMessages = {
    email: "Endereço de e-mail inválido",
    password: "Sua senha deve conter pelo menos 8 caracteres",
    confirmPassword: "As senhas não coincidem. Por favor, tente novamente.",
  };

  const emailValue = email.current?.value;
  const passwordValue = password.current?.value;
  const confirmPasswordValue = confirmPassword.current?.value;

  const isEmailValid = emailIsValid(emailValue);
  const isPasswordValid = passwordIsValid(passwordValue);
  const doPasswordsMatch = checkEqualityOfPasswords(
    passwordValue,
    confirmPasswordValue
  );

  if (!isEmailValid || !isPasswordValid || !doPasswordsMatch) {
    setState({
      email: isEmailValid ? "" : errorMessages.email,
      password: {
        defaultPasswordField: isPasswordValid ? "" : errorMessages.password,
        confirmPasswordField: doPasswordsMatch
          ? ""
          : errorMessages.confirmPassword,
      },
    });
    return;
  }

  // TODO:
  // Add register user in firebase code
}
