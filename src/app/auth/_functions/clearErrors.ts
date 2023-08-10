import { ClearErrorsProps } from "../_types/type";

export function clearErrors({ error, fieldKey, setError }: ClearErrorsProps) {
  if (error && error[fieldKey]) {
    setError((previousValue) => ({
      ...previousValue,
      [fieldKey]: "",
    }));
  }
}
