"use client";
import { InputRoot } from "@/components/input/Root";
import { FormEvent } from "react";

export default function Page() {
  async function onSubmitRegisterForm(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form
      noValidate
      className="max-w-md w-full h-screen flex items-center justify-center mx-auto"
      onSubmit={onSubmitRegisterForm}
    >
      <InputRoot.Container>
        <InputRoot.Label>
          E-mail <InputRoot.Required />
        </InputRoot.Label>
        <InputRoot.Input
          placeholder="youremail@example.com"
          type="email"
          required
        />
      </InputRoot.Container>
    </form>
  );
}
