import Input from "@/components/input/Input";
import InputContainer from "@/components/input/InputContainer";
import InputLabel from "@/components/input/InputLabel";

export default function Page() {
  return (
    <form className="max-w-md w-full h-screen flex items-center justify-center mx-auto">
      <InputContainer>
        <InputLabel>Teste</InputLabel>
        <Input />
      </InputContainer>
    </form>
  );
}
