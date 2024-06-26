import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InputContainerInterface extends HTMLAttributes<HTMLDivElement> {
  error?: string;
  children: ReactNode;
}

export default function InputContainer({
  error,
  children,
  className,
  ...props
}: InputContainerInterface) {
  return (
    <div
      {...props}
      className={twMerge(
        `w-full flex items-start justify-start flex-col ${
          error
            ? "[&>input]:border-red-500 [&>input]:bg-red-50 [&>input]:shadow-red-300 [&>input]:text-red-500 [&>input]:placeholder:text-red-500 [&>label]:text-red-500 [&>label]:shadow-red-200"
            : "[&>input]:text-zinc-500 [&>input]:bg-zinc-50 [&>input]:border-zinc-900 [&>input]:shadow-zinc-400 [&>input]:placeholder:text-zinc-500 [&>input]:focus-within:bg-zinc-200 [&>input]:focus-within:bg-opacity-50 [&>label]:text-zinc-800 [&>label]:shadow-zinc-300"
        }`,
        className
      )}
    >
      {children}
    </div>
  );
}
