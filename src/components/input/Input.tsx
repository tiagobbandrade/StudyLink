import { InputHTMLAttributes, RefObject } from "react";
import { twMerge } from "tailwind-merge";

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  inputRef?: RefObject<HTMLInputElement> | null;
}

export default function Input({
  error,
  className,
  inputRef,
  ...props
}: InputInterface) {
  return (
    <input
      {...props}
      ref={inputRef}
      className={twMerge(
        "w-full text-xs p-3 border rounded-md shadow-sm transition-colors duration-300 focus:outline-none",
        className
      )}
    />
  );
}
