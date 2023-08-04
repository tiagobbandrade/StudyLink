import { InputRoot } from "@/components/input/Root";

export default function Page() {
  return (
    <form
      noValidate
      className="max-w-md w-full h-screen flex items-center justify-center mx-auto"
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
