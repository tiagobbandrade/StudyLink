"use client";
import { InputRoot as Root } from "@/components/input/Root";
import { ErrorType, InputFieldInterface } from "../_types/type";
import { useRef, useState } from "react";
import { GoAlert, GoArrowRight } from "react-icons/go";
import { submitRegisterForm } from "../_functions/submitRegisterForm";
import { clearErrors } from "../_functions/clearErrors";

export default function Page() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<ErrorType>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <section className="h-screen max-w-sm mx-auto flex items-center justify-center flex-col gap-6">
      <div className="flex items-center justify-center flex-col gap-4">
        <div className="flex items-center justify-center flex-col">
          <span className="text-zinc-800 text-lg font-bold tracking-wider">
            CADASTRE-SE
          </span>
          <p className="text-zinc-600 text-sm max-w-sm text-center">
            Junte-se à comunidade do StudyLink e embarque na jornada do
            conhecimento!
          </p>
        </div>
        <hr className="w-56 h-[2px] bg-zinc-400" />
      </div>
      <form
        className="w-full flex items-center justify-center flex-col gap-4"
        noValidate
        onSubmit={(event) =>
          submitRegisterForm({
            event,
            emailRef,
            passwordRef,
            confirmPasswordRef,
            setError,
          })
        }
      >
        <InputField
          label="E-mail"
          inputRef={emailRef}
          errorMessage={error.email}
          type="email"
          placeholder="youremail@example.com"
          clearError={() =>
            clearErrors({ error, fieldKey: "email", setState: setError })
          }
        />

        <InputField
          label="Senha"
          inputRef={passwordRef}
          errorMessage={error.password}
          type="password"
          placeholder="Digite sua senha"
          clearError={() =>
            clearErrors({
              error,
              fieldKey: "password",
              setState: setError,
            })
          }
        />

        <InputField
          label="Confirmar senha"
          inputRef={confirmPasswordRef}
          errorMessage={error.confirmPassword}
          type="password"
          placeholder="Confirme sua senha"
          clearError={() =>
            clearErrors({
              error,
              fieldKey: "confirmPassword",
              setState: setError,
            })
          }
        />

        <button
          type="submit"
          className="flex items-center justify-center text-sm font-semibold gap-3 w-full bg-zinc-900 py-3 text-zinc-100 rounded-md mt-6"
        >
          Continuar <GoArrowRight />
        </button>
      </form>
    </section>
  );
}

function InputField({
  clearError,
  label,
  errorMessage,
  inputRef,
  ...props
}: InputFieldInterface) {
  return (
    <Root.Container error={errorMessage}>
      <Root.Label>
        {label} <Root.Required />
      </Root.Label>
      <Root.Input inputRef={inputRef} {...props} onChange={clearError} />
      {errorMessage && (
        <Root.ErrorMessage icon={GoAlert}>{errorMessage}</Root.ErrorMessage>
      )}
    </Root.Container>
  );
}
