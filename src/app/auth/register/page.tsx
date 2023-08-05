"use client";
import { InputRoot } from "@/components/input/Root";
import { FormEvent } from "react";
import { GoArrowRight } from "react-icons/go";

export default function Page() {
  async function onSubmitRegisterForm(e: FormEvent) {
    e.preventDefault();
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
        onSubmit={onSubmitRegisterForm}
      >
        <InputRoot.Container>
          <InputRoot.Label>
            E-mail <InputRoot.Required />
          </InputRoot.Label>
          <InputRoot.Input placeholder="youremail@example.com" type="email" />
        </InputRoot.Container>
        <InputRoot.Container>
          <InputRoot.Label>
            Senha <InputRoot.Required />
          </InputRoot.Label>
          <InputRoot.Input placeholder="Digite sua senha" type="password" />
        </InputRoot.Container>
        <InputRoot.Container>
          <InputRoot.Label>
            Confirmar Senha <InputRoot.Required />
          </InputRoot.Label>
          <InputRoot.Input placeholder="Confirme sua senha" type="password" />
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
