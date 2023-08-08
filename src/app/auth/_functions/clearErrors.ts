import { ClearErrorsProps } from "../_types/type";

export function clearErrors({ error, fieldKey, setState }: ClearErrorsProps) {
  if (error && error[fieldKey]) {
    setState((previousValue) => ({
      ...previousValue,
      [fieldKey]: "",
    }));
  }
}
