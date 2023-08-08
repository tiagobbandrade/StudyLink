import { isValidPassword } from "@/functions/validations/isValidPassword";
import { CheckValidationsProps } from "../_types/type";
import { doPasswordsMatch } from "@/functions/validations/doPasswordsMatch";
import { isValidEmail } from "@/functions/validations/isValidEmail";

export function submitRegisterForm({
  event,
  emailRef,
  passwordRef,
  confirmPasswordRef,
  setError,
}: CheckValidationsProps) {
  event.preventDefault();

  if (!(emailRef || passwordRef || confirmPasswordRef)) return;

  const emailValue = emailRef.current?.value || "";
  const passwordValue = passwordRef.current?.value || "";
  const confirmPasswordValue = confirmPasswordRef.current?.value || "";

  const passwordIsValid = isValidPassword(passwordValue);
  const emailIsValid = isValidEmail(emailValue);
  const passwordsMatch = doPasswordsMatch(passwordValue, confirmPasswordValue);

  if (!emailIsValid || !passwordsMatch || !passwordIsValid) {
    setError({
      email: emailIsValid ? "" : "Endereço de e-mail inválido",
      password: passwordIsValid
        ? ""
        : "Sua senha deve conter pelo menos 8 caracteres",
      confirmPassword: passwordsMatch
        ? ""
        : "As senhas não coincidem. Tente novamente.",
    });
  }
}
