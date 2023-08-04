import { InputHTMLAttributes } from "react";

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export default function Input({ error, ...props }: InputInterface) {
  return (
    <input
      {...props}
      type="text"
      placeholder="Put here your e-mail address"
      className="w-full text-xs p-3 border rounded-md shadow-sm transition-colors duration-300 focus:outline-none"
    />
  );
}
