import {
  Dispatch,
  FormEvent,
  InputHTMLAttributes,
  RefObject,
  SetStateAction,
} from "react";

export interface InputFieldInterface
  extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label: string;
  inputRef?: RefObject<HTMLInputElement>;
  clearError?: () => void;
}

export type ClearErrorsProps = {
  error: ErrorType;
  fieldKey: keyof ErrorType;
  setError: Dispatch<SetStateAction<ErrorType>>;
};

export type ErrorType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type CheckValidationsProps = {
  emailRef: RefObject<HTMLInputElement>;
  passwordRef: RefObject<HTMLInputElement>;
  confirmPasswordRef: RefObject<HTMLInputElement>;
  setError: Dispatch<SetStateAction<ErrorType>>;
};
