"use client";
import { InputRoot } from "@/components/input/Root";
import { FormEvent, useRef, useState } from "react";
import { GoAlert, GoArrowRight } from "react-icons/go";
import { RegisterUserInterface, registerUser } from "../functions/registerUser";
export interface ErrorInterface {
  email?: string;
  password?: {
    defaultPasswordField: string;
    confirmPasswordField: string;
  };
}

export default function Page() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<ErrorInterface>();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const registerUserParams: RegisterUserInterface = {
      ref: {
        email: emailRef,
        password: passwordRef,
        confirmPassword: confirmPasswordRef,
      },
      setState: setError,
    };

    registerUser(registerUserParams);
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
        onSubmit={onSubmit}
        noValidate
      >
        <InputRoot.Container error={error?.email}>
          <InputRoot.Label>
            E-mail <InputRoot.Required />
          </InputRoot.Label>
          <InputRoot.Input
            onChange={() =>
              error?.email
                ? setError((oldValue) => ({ ...oldValue, email: "" }))
                : ""
            }
            inputRef={emailRef}
            placeholder="youremail@example.com"
            type="email"
          />
          {error?.email && (
            <InputRoot.ErrorMessage icon={GoAlert}>
              {error.email}
            </InputRoot.ErrorMessage>
          )}
        </InputRoot.Container>

        <InputRoot.Container error={error?.password?.defaultPasswordField}>
          <InputRoot.Label>
            Senha <InputRoot.Required />
          </InputRoot.Label>
          <InputRoot.Input
            onChange={() =>
              error?.password?.defaultPasswordField
                ? setError((oldValue) => ({
                    ...oldValue,
                    password: {
                      defaultPasswordField: "",
                      confirmPasswordField:
                        oldValue?.password?.confirmPasswordField || "",
                    },
                  }))
                : ""
            }
            inputRef={passwordRef}
            placeholder="Digite sua senha"
            type="password"
          />
          {error?.password?.defaultPasswordField && (
            <InputRoot.ErrorMessage icon={GoAlert}>
              {error.password.defaultPasswordField}
            </InputRoot.ErrorMessage>
          )}
        </InputRoot.Container>

        <InputRoot.Container error={error?.password?.confirmPasswordField}>
          <InputRoot.Label>
            Confirmar Senha <InputRoot.Required />
          </InputRoot.Label>
          <InputRoot.Input
            onChange={() =>
              error?.password?.confirmPasswordField
                ? setError((oldValue) => ({
                    ...oldValue,
                    password: {
                      defaultPasswordField:
                        oldValue?.password?.defaultPasswordField || "",
                      confirmPasswordField: "",
                    },
                  }))
                : ""
            }
            inputRef={confirmPasswordRef}
            placeholder="Confirme sua senha"
            type="password"
          />
          {error?.password?.confirmPasswordField && (
            <InputRoot.ErrorMessage icon={GoAlert}>
              {error.password.confirmPasswordField}
            </InputRoot.ErrorMessage>
          )}
        </InputRoot.Container>
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
