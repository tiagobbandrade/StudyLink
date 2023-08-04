import { HTMLAttributes, ReactNode } from "react";

interface InputContainerInterface extends HTMLAttributes<HTMLDivElement> {
  error?: string;
  children: ReactNode;
}

export default function InputContainer({
  error,
  children,
  ...props
}: InputContainerInterface) {
  return (
    <div
      {...props}
      className={`w-full flex items-start justify-start flex-col ${
        error
          ? "[&>input]:border-red-500 [&>input]:shadow-red-300 [&>input]:text-red-500 [&>input]:placeholder:text-red-500 [&>input]:focus-within:bg-red-50 [&>input]:focus-within:bg-opacity-80 [&>label]:text-red-500 [&>label]:shadow-red-200"
          : "[&>input]:text-zinc-500 [&>input]:border-zinc-900 [&>input]:shadow-zinc-400 [&>input]:placeholder:text-zinc-500 [&>input]:focus-within:bg-zinc-100 [&>label]:text-zinc-800 [&>label]:shadow-zinc-300"
      }`}
    >
      {children}
    </div>
  );
}
