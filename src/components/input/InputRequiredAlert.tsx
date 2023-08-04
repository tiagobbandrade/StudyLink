import { HTMLAttributes } from "react";

export default function InputRequiredAlert({
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...props} className="text-red-400 text-sm font-semibold">
      *
    </span>
  );
}
