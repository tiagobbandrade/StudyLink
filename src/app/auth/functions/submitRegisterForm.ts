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

function updateState(
  oldValue: ErrorInterface | undefined,
  updateState: ErrorInterface
) {
  return { ...oldValue, ...updateState };
}

export async function registerUser({ ref, setState }: RegisterUserInterface) {
  const { confirmPassword, email, password } = ref;
  const initialState = {
    email: "",
    password: {
      confirmPasswordField: "",
      defaultPasswordField: "",
    },
  };
  const errorMessages = {
    email: "Endereço de e-mail inválido",
    password: "Sua senha deve conter pelo menos 8 caracteres",
    confirmPassword: "As senhas não coincidem. Por favor, tente novamente.",
  };

  const emailValue = email.current?.value;
  const passwordValue = password.current?.value;
  const confirmPasswordValue = confirmPassword.current?.value;

  if (
    !emailIsValid(emailValue) ||
    !passwordIsValid(passwordValue) ||
    !checkEqualityOfPasswords(passwordValue, confirmPasswordValue)
  ) {
    if (!emailIsValid(emailValue)) {
      email.current?.focus();
      setState((oldValue) => ({
        ...oldValue,
        email: errorMessages.email,
      }));
    }
    if (!passwordIsValid(passwordValue)) {
      password.current?.focus();
      setState((oldValue) =>
        updateState(oldValue, {
          password: {
            confirmPasswordField:
              oldValue?.password?.confirmPasswordField || "",
            defaultPasswordField: errorMessages.password,
          },
        })
      );
    }
    if (
      !checkEqualityOfPasswords(passwordValue, confirmPasswordValue) ||
      !passwordIsValid(confirmPasswordValue)
    ) {
      confirmPassword.current?.focus();
      setState((oldValue) => ({
        ...oldValue,
        password: {
          defaultPasswordField: oldValue?.password?.defaultPasswordField || "",
          confirmPasswordField: errorMessages.confirmPassword,
        },
      }));
    }

    return;
  }

  setState(initialState);
}
