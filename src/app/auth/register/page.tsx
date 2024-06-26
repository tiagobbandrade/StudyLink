"use client";
import { InputRoot as Root } from "@/components/input/Root";
import { ErrorType, InputFieldInterface } from "../_types/type";
import { FormEvent, useRef, useState } from "react";
import { GoAlert, GoArrowRight } from "react-icons/go";
import { clearErrors } from "../_functions/clearErrors";
import { checkValidations } from "../_functions/checkValidations";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [error, setError] = useState<ErrorType>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    const isValid = checkValidations({
      emailRef,
      passwordRef,
      confirmPasswordRef,
      setError,
    });

    if (!isValid) return;

    const { data } = await axios.post("/api/auth/register", {
      data: {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      },
    });

    if (data.type == "error") return console.log(data.message);
    if (data.status === 201) {
      router.push("/auth/confirmemail");
    }
  }

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
        onSubmit={onSubmit}
      >
        <InputField
          label="E-mail"
          inputRef={emailRef}
          errorMessage={error.email}
          type="email"
          placeholder="youremail@example.com"
          clearError={() => clearErrors({ error, fieldKey: "email", setError })}
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
              setError,
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
              setError,
            })
          }
        />

        <button
          type="submit"
          className="flex items-center justify-center text-sm font-semibold gap-3 w-full h-12 bg-zinc-900 py-3 text-zinc-100 rounded-md mt-6"
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
