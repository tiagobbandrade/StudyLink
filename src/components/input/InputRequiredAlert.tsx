import { HTMLAttributes, ReactNode } from "react";

export default function InputRequiredAlert({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...props} className="text-red-400 text-sm font-semibold">
      *
    </span>
  );
}
