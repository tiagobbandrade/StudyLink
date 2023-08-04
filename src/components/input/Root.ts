import Input from "./Input";
import InputContainer from "./InputContainer";
import InputErrorMessage from "./InputErrorMessage";
import InputLabel from "./InputLabel";
import InputRequiredAlert from "./InputRequiredAlert";

export const InputRoot = {
  Container: InputContainer,
  Input: Input,
  Label: InputLabel,
  Required: InputRequiredAlert,
  ErrorMessage: InputErrorMessage,
};
